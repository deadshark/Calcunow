import React from 'react';

// creates functional Button component
const Button = (props) => {
    return (
        <input
            type="button"
            className={props.type === 'action' ? 'button action-button' : 'button input-button'}
            onClick={props.handleClick}
            value={props.label}
        />
    );
}

// describes expected props types
Button.propTypes = {
    type: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired
}

export default Button;