import React from 'react';
import ScreenRow from './screenRow';

// creates functional screen component that displays 2 screen rows for Q & A
// value to be passed down as a prop from parent component
const Screen = (props) => {
    return (
        <div clasName="screen">
            <ScreenRow value={props.question}/>
            <ScreenRow value={props.answer}/>
        </div>
    );
}

// defines props expected from parent component
Screen.propTypes = {
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired
}

export default Screen;