import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './components/frame';
import './styles/main.css';

// using render method to mount node into the DOM on the 'app' element 
ReactDOM.render( <
    Frame / > ,
    document.getElementById('app')
);