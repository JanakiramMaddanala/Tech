import React, { Component } from 'react';

export default class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'Enter Name',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value.toUpperCase(),
        });
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    }

    render() {
        const { value } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={value} onChange={this.handleChange} />
                <input type="submit" value="submit" />
            </form>
        );
    }
}
