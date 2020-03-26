import React, { Component } from 'react';

export default class Headlines extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headLines: [],
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.updateHeadLines(), 1000);
    }

    updateHeadLines() {
        this.setState((state, props) => ({
            headLines: [...state.headLines, 'React'],
        }));
    }

    clearHeadLines() {
        this.setState((state, props) => ({
            headLines: [],
        }));
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { headLines } = this.state;
        const headLinesCount = headLines.length

        if (headLinesCount === 10) {
            this.clearHeadLines();
        }

        return (
            <div>
                {headLinesCount > 0 && (
                    <h1>Headlines count: {headLinesCount}</h1>
                )}
            </div>
        );
    }
}
