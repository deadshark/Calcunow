import React from 'react';

// Screen row receives and displays property of value from parent component
const ScreenRow = (props) => {
    return (
        <div className="screen-row">
            <input type="text" readOnly value={props.value}/>
        </div>
    )
}

// describes the props that parent element is required to pass into component
ScreenRow.propTypes = {
    value: React.PropTypes.string.isRequired
}

export default ScreenRow;