import React from 'react';
import Screen from './screen';
import Button from './button';

// creates a class which extends react component
class Frame extends React.Component {
    constructor() {
        super();
        // sets default state
        this.state = {
            question: '',
            answer: ''
        }
        // binds handleClick method (because 'this' refers to source of click events)
        this.handleClick = this.handleClick.bind(this);
    }

    // render function to create component to be rendered on the DOM
    // method must return a single parent element
    // component is wrapped around () to make it a single expression
    render() {
        return (
            <div className="frame">
                <div className="calculator-title">
                    Calcunow
                </div>
                <Screen question={this.state.question} answer={this.state.answer}/>
                <div class="button-row">
                    <Button label={'1'} handleClick={this.handleClick} type='input' />
                    <Button label={'2'} handleClick={this.handleClick} type='input' />
                    <Button label={'3'} handleClick={this.handleClick} type='input' />
                    <Button label={'4'} handleClick={this.handleClick} type='input' />
                    <Button label={'-'} handleClick={this.handleClick} type='action' />
                    <Button label={'+'} handleClick={this.handleClick} type='action' />
                </div>
                <div class="button-row">
                    <Button label={'5'} handleClick={this.handleClick} type='input' />
                    <Button label={'6'} handleClick={this.handleClick} type='input' />
                    <Button label={'7'} handleClick={this.handleClick} type='input' />
                    <Button label={'8'} handleClick={this.handleClick} type='input' />
                    <Button label={'*'} handleClick={this.handleClick} type='action' />
                    <Button label={'/'} handleClick={this.handleClick} type='action' />
                </div>
                <div class="button-row">
                    <Button label={'9'} handleClick={this.handleClick} type='input' />
                    <Button label={'.'} handleClick={this.handleClick} type='input' />
                    <Button label={'0'} handleClick={this.handleClick} type='input' />
                    <Button label={'Cls'} handleClick={this.handleClick} type='action' />
                    <Button label={'='} handleClick={this.handleClick} type='action' />
                </div>
            </div>
        );
    }

    // method to handle all click events from the buttons
    handleClick(event){
        const value = event.target.value;
        switch (value) {
            case '=': {
                // converts number to string
                const answer = eval(this.state.question).toString();
                // update answer in state
                this.setState({ answer });
                break;
            }
            case 'Cls': {
                // clears the Q and A in the state
                this.setState({ question: '', answer: ''});
                break;
            }
            default: {
                // updates the answer in the state for all other answers
                this.setState({ question: this.state.question += value})
                break;
            }
        }
    }
}

export default Frame;