import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
             <button type="button" onClick={this.onClick}>Click me</button>
        )
    }
    onClick(ev) {
        alert('the button was clicked');
    }
}    

export default Button;
