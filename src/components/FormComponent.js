import React, { Component } from 'react';
import fromKelvin from '../services/temperatures/kelvinService';
import fromCelsius from '../services/temperatures/celsiusService';
import fromFahrenheit from '../services/temperatures/fahrenheitService';
import fromRankine from '../services/temperatures/rankineService';

import fromLitre from '../services/volumes/litreService';
import fromTableSpoon from '../services/volumes/tableSpoonService';
import fromCubicInch from '../services/volumes/cubicInchService';
import fromCups from '../services/volumes/cupService';
import fromCubicFeet from '../services/volumes/cubicFeetService';
import fromGallon from '../services/volumes/gallonService';

class FormComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            temperatureUnits: ["kelvin","celsius","fahrenheit","rankine"],
            volumeUnits:["litres","tablespoons","cubic-inches","cups","cubic-feet","gallons"],
            numerical_value:'',
            unit_of_measure:'',
            target_unit_of_measure:'',
            students_response:'',
            result:'',      
            correctMsg: 'correct',
            incorrectMsg:'incorrect',
            invalidMsg: 'invalid'      
        }
    }
    
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const { temperatureUnits, volumeUnits, numerical_value, unit_of_measure, target_unit_of_measure, students_response, correctMsg, incorrectMsg, invalidMsg  } = this.state;

        const typedNumericalValue = parseFloat(numerical_value);
        const typedUnitOfMeasure = unit_of_measure.toLowerCase();
        const typedTargetOfMeasure = target_unit_of_measure.toLowerCase();
        const studentsResponseParsed = parseFloat(students_response);
        
        let defaultResult = '';

        // Kelvin To others
        if (typedUnitOfMeasure === temperatureUnits[0]){
            defaultResult = fromKelvin(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg); 
        }
        
        // celsius To others
        if (typedUnitOfMeasure === temperatureUnits[1]) {
            defaultResult = fromCelsius(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }
        
        // fahrenheit To others
        if (typedUnitOfMeasure === temperatureUnits[2]) {
            defaultResult = fromFahrenheit(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }

        // Rankine To Others
        if (typedUnitOfMeasure === temperatureUnits[3]) {
            defaultResult = fromRankine(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }

        // Litre To others        
        if (typedUnitOfMeasure === volumeUnits[0]) {
            defaultResult = fromLitre(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }

       //tablespoons to others
        if (typedUnitOfMeasure === volumeUnits[1]) {
            defaultResult = fromTableSpoon(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }

        // cubic inches to others
        if (typedUnitOfMeasure === volumeUnits[2]) {
            defaultResult = fromCubicInch(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }

        // Cups to others
        if (typedUnitOfMeasure === volumeUnits[3]) {
            defaultResult = fromCups(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }

        // Cubic Feet To others
        if (typedUnitOfMeasure === volumeUnits[4]) {
            defaultResult = fromCubicFeet(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }

        // Gallons To Others
        if (typedUnitOfMeasure === volumeUnits[5]) {
            defaultResult = fromGallon(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg);
        }

        this.setState({
            result: defaultResult
        });
    }   

    render() {
        const result_style = {
            borderTop: "2px solid blue",
            padding: "8px",
            color: "blue",
            background: "#0000ff12",
            marginTop: "10px",
            fontWeight: "bold",
            fontFamily: "monospace",
            fontSize: "17px",
        }
        return (
            <React.Fragment>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="alert alert-info">
                        <div>Available temperatures (Unit) : <strong>{this.state.temperatureUnits.join(', ')}</strong></div>
                        <div>Available volumes (Unit) : <strong>{this.state.volumeUnits.join(', ')}</strong></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="numericalValue">Numerical Value</label>
                        <input type="text" name="numerical_value" className="form-control" onChange={this.handleOnChange} />
                        <small className="form-text text-muted">Enter the numberical value to convert.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="unitOfMeasure">Unit Of Measure</label>
                        <input type="text" name="unit_of_measure" className="form-control" onChange={this.handleOnChange} />
                        <small>Enter the Unit of Above numerical value.</small>                        
                    </div>

                    <div className="form-group">
                        <label htmlFor="targetUnitOfMeasure">Target Unit Of Measure</label>
                        <input type="text" name="target_unit_of_measure" className="form-control" onChange={this.handleOnChange} />
                        <small>Enter the Target Unit of numerical value.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="studentsResponse">Students Response</label>
                        <input type="text" name="students_response" className="form-control" onChange={this.handleOnChange} />
                        <small>Enter the students response.</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                    {this.state.result ? <div style={result_style}>{this.state.result}</div> : null}

                </form>
            </React.Fragment>
        )
    }
}


export default FormComponent;
