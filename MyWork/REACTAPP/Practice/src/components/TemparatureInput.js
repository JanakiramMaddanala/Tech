import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../contexts/AppContext';

export default class TemparatureInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(String(e.target.value), this.props.scale);
    }

    render() {
        const { scale, temparature } = this.props;
        return (
            <div>
                <p>{this.context}</p> 
                <label>{scale.toUpperCase()}:</label>
                <input
                    name="temparatureInput"
                    type="text"
                    value={temparature}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

TemparatureInput.propTypes = {
    scale: PropTypes.string.isRequired,
    temparature: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

TemparatureInput.contextType = AppContext;
