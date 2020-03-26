import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Logger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        };
    }

    render() {
        return (
            <div>
                <h5>{new Date().toLocaleString()}</h5>
                {this.props.render()}
            </div>
        );
    }
}

Logger.propTypes = {
    render: PropTypes.func.isRequired,
};
