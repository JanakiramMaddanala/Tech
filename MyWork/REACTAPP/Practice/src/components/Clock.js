import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.updateDate(), 1000);
    }

    updateDate() {
        this.setState({
            date: new Date(),
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <p>{this.state.date.toLocaleString()}</p>
            </div>
        );
    }
}

export default Clock;
