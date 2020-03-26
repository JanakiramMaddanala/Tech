import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [1, 2, 3, 4, 5, 6, 7],
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.removeNumberAt(1), 5000);
    }

    removeNumberAt(index) {
        this.setState((state, props) => {
            state.numbers.splice(index, 1);
            state.numbers.push(100);
            return {
                numbers: state.numbers,
            };
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { numbers } = this.state;

        return (
            <div>
                <ul>
                    {numbers.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
