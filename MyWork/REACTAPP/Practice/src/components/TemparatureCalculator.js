import React, { Component } from 'react';
import TemparatureInput from './TemparatureInput';
import PropTypes from 'prop-types';

export default class TemparatureCalculator extends Component {
    constructor(props) {
        super(props);

        this.converters = {
            celcius: this.toFahrenheit,
            fahrenheit: this.toCelcius,
        };

        this.state = {
            temparature: '',
            scale: 'celcius',
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(temparature, scale) {
        console.log(temparature, scale);
        this.setState({
            temparature,
            scale,
        });
    }

    toCelcius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }

    toFahrenheit(celcius) {
        return (celcius * 9) / 5 + 32;
    }

    convert(temparature, scale) {
        const parsedTemparature = parseFloat(temparature);
        if (Number.isNaN(parsedTemparature)) {
            return '';
        }
        const converter = this.getConverter(scale);
        console.log(converter);
        
        return String(Math.round(converter(parsedTemparature)));
    }

    render() {
        const { temparature, scale } = this.state;
        const celcius = this.tryCovertingToCelcius(scale, temparature);
        const fahrenheit = this.tryConvertingToFahrenheit(scale, temparature);

        return (
            <div>
                <TemparatureInput
                    scale="celcius"
                    temparature={celcius}
                    handleChange={this.handleChange}
                />
                {this.props.children}
                <TemparatureInput
                    scale="fahrenheit"
                    temparature={fahrenheit}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }

    getConverter(scale) {
        return this.converters[scale];
    }

    tryConvertingToFahrenheit(scale, temparature) {
        return scale !== 'fahrenheit'
            ? this.convert(temparature, scale)
            : temparature;
    }

    tryCovertingToCelcius(scale, temparature) {
        return scale !== 'celcius'
            ? this.convert(temparature, scale)
            : temparature;
    }
}

TemparatureCalculator.propTypes = {
    children: PropTypes.element.isRequired, 
}
