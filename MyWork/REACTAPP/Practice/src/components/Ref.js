import React, { Component } from 'react';

export default class Ref extends Component {
    constructor(props) {
        super(props);

        // this.userNameInput = React.createRef();
        this.userNameInput = (element) => {
            console.log(element)
            element.value = element.value.toUpperCase();
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
    }

    handleUserNameChange(e) {
        this.userNameInput(e.target);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="userName"
                    ref={this.userNameInput}
                    onChange={this.handleUserNameChange}
                />
            </div>
        );
    }
}
