import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';

/**
 * Function to be used as a callback to our http.createServer method
 * It handles incoming requests and sends the response
 */
function requestHandler(request, response) {
    let requestedResource = path.join(
        __dirname,
        '../public',
        url.parse(request.url).pathname
    );

    // use the exists method of the fs module to check if the requestedResource
    // exists.
    fs.exists(requestedResource, function(exists) {
        if (!exists) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("These aren't the droids you're looking 404\n");
            response.end();
            return;
        }

        // check if the requested resource is a directory.  If it is, just set the
        // index.html page as the requested resource
        if (fs.statSync(requestedResource).isDirectory()) {
            requestedResource += '/index.html';
        }

        // read the requested file (Async) and send it's
        // content to the client
        fs.readFile(
            requestedResource, // path to the requested resource
            "binary", //read the requested resource as a binary file
            function(err, file) { // call back function to handle end of file reading

                // If an error occurred while reading the file, send 500 error
                if (err) {
                    response.writeHead(500, { "Content-Type": "text/plain" });
                    response.write(err + "\n");
                    response.end();
                    return;
                }

                // helper object to map requested content types to response mime types
                const contentTypesByExtension = {
                    '.html': "text/html",
                    '.css': "text/css",
                    '.js': "text/javascript"
                };

                // helper object to hold the headers
                const headers = {};
                const contentType = contentTypesByExtension[
                    path.extname(requestedResource)
                ];

                // if requested resource maps to a content type, set Content-Type
                // field for response headers
                if (contentType) {
                    headers["Content-Type"] = contentType;
                }

                response.writeHead(200, headers); // write response header (if any)
                response.write(file, "binary"); // write content of read file (binary)
                response.end(); // send response and close request    
            });

    })
}

// create an instance of httpServer and passing in request handler callback
const server = http.createServer(requestHandler);
// declare port number
const portNumber = 3030;
// set up server to start listening on the specified port
server.listen(portNumber, function() {
    // log to console to verify server up and running
    console.log(`Tuning in Tokyo on port ${portNumber}`);
});