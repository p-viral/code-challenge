import React, { Component } from 'react';

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
        // Assuming its incorrect from the very beginning.
        let defaultResult = incorrectMsg;


        /** 
         * kelvin       -> celsius ( -273.15 )
         *              -> fahrenheit ( -273.15 x (9/5) + 32)
         *              -> rankine
        */
        if (typedUnitOfMeasure === temperatureUnits[0]){
            switch (typedTargetOfMeasure) {
                case 'celsius':
                    const k2cResult = this.k2c(typedNumericalValue);
                    if (k2cResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    } 
                    break;
                case 'fahrenheit':
                    const k2fResult = this.k2f(typedNumericalValue);
                    if (k2fResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'rankine':
                    const k2rResult = this.k2r(typedNumericalValue);
                    if (k2rResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }                       
        }
        
        /*
         * celsius      -> kelvin 
         *              -> fahrenheit
         *              -> rankine
        */
        if (typedUnitOfMeasure === temperatureUnits[1]) {
            switch (typedTargetOfMeasure) {
                case 'kelvin':
                    const c2kResult = this.c2k(typedNumericalValue);
                    if (c2kResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'fahrenheit':
                    const c2fResult = this.c2f(typedNumericalValue);
                    if (c2fResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'rankine':
                    const c2rResult = this.c2r(typedNumericalValue);
                    if (c2rResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }
        /*
         * fahrenheit   -> kelvin
         *              -> celsius
         *              -> rankine
         */
        if (typedUnitOfMeasure === temperatureUnits[2]) {
            switch (typedTargetOfMeasure) {
                case 'kelvin':
                    const f2kResult = this.f2k(typedNumericalValue);
                    if (f2kResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'celsius':
                    const f2cResult = this.f2c(typedNumericalValue);
                    if (f2cResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'rankine':
                    const f2rResult = this.f2r(typedNumericalValue);
                    if (f2rResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }

        /*
         * rankine      -> kelvin
         *              -> celsius
         *              -> fahrenheit
         */   
        if (typedUnitOfMeasure === temperatureUnits[3]) {
            switch (typedTargetOfMeasure) {
                case 'kelvin':
                    const r2kResult = this.r2k(typedNumericalValue);
                    if (r2kResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'celsius':
                    const r2cResult = this.r2c(typedNumericalValue);
                    if (r2cResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'fahrenheit':
                    const r2fResult = this.r2f(typedNumericalValue);
                    if (r2fResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }

        /**
         * litres      -> tablespoons,
         *                cubic-inches,
         *                cups,
         *                cubic-feet,
         *                gallons
        */
        
        if (typedUnitOfMeasure === volumeUnits[0]) {
            switch (typedTargetOfMeasure) {
                case 'tablespoons':
                    const l2tResult = this.l2t(typedNumericalValue);
                    if (l2tResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-inches':
                    const l2ciResult = this.l2ci(typedNumericalValue);
                    if (l2ciResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cups':
                    const l2cResult = this.l2c(typedNumericalValue);
                    if (l2cResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-feet':
                    const l2cfResult = this.l2cf(typedNumericalValue);
                    if (l2cfResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'gallons':
                    const l2gResult = this.l2g(typedNumericalValue);
                    if (l2gResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }

        /**
         * tablespoons -> litres,
         *                cubic-inches,
         *                cups,
         *                cubic-feet,
         *                gallons
        */

        if (typedUnitOfMeasure === volumeUnits[1]) {
            switch (typedTargetOfMeasure) {
                case 'litres':
                    const t2lResult = this.t2l(typedNumericalValue);
                    if (t2lResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-inches':
                    const t2ciResult = this.t2ci(typedNumericalValue);
                    if (t2ciResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cups':
                    const t2cResult = this.t2c(typedNumericalValue);
                    if (t2cResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-feet':
                    const t2cfResult = this.t2cf(typedNumericalValue);
                    if (t2cfResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'gallons':
                    const t2gResult = this.t2g(typedNumericalValue);
                    if (t2gResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }

        /**
         * cubic-inches -> litres,
         *                tablespoons,
         *                cups,
         *                cubic-feet,
         *                gallons
        */

        if (typedUnitOfMeasure === volumeUnits[2]) {
            switch (typedTargetOfMeasure) {
                case 'litres':
                    const ci2lResult = this.ci2l(typedNumericalValue);
                    console.log(ci2lResult);
                    if (ci2lResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'tablespoons':
                    const ci2tResult = this.ci2t(typedNumericalValue);
                    console.log(ci2tResult);
                    if (ci2tResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cups':
                    const ci2cResult = this.ci2c(typedNumericalValue);
                    console.log(ci2cResult);
                    if (ci2cResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-feet':
                    const ci2cfResult = this.ci2cf(typedNumericalValue);
                    console.log(ci2cfResult);
                    if (ci2cfResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'gallons':
                    const ci2gResult = this.ci2g(typedNumericalValue);
                    console.log(ci2gResult);
                    if (ci2gResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }

        /**
         * cups     -> litres,
         *             tablespoons,
         *             cubic-inches,
         *             cubic-feet,
         *             gallons
        */

        if (typedUnitOfMeasure === volumeUnits[3]) {
            switch (typedTargetOfMeasure) {
                case 'litres':
                    const c2lResult = this.c2l(typedNumericalValue);
                    console.log(c2lResult);
                    if (c2lResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'tablespoons':
                    const c2tResult = this.c2t(typedNumericalValue);
                    console.log(c2tResult);
                    if (c2tResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-inches':
                    const c2ciResult = this.c2ci(typedNumericalValue);
                    console.log(c2ciResult);
                    if (c2ciResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-feet':
                    const c2cfResult = this.c2cf(typedNumericalValue);
                    console.log(c2cfResult);
                    if (c2cfResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'gallons':
                    const c2gResult = this.c2g(typedNumericalValue);
                    console.log(c2gResult);
                    if (c2gResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }

        /**
         * cubic-feet   -> litres,
         *                 tablespoons,
         *                 cubic-inches,
         *                 cups,
         *                 gallons
        */

        if (typedUnitOfMeasure === volumeUnits[4]) {
            switch (typedTargetOfMeasure) {
                case 'litres':
                    const cf2lResult = this.cf2l(typedNumericalValue);
                    console.log(cf2lResult);
                    if (cf2lResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'tablespoons':
                    const cf2tResult = this.cf2t(typedNumericalValue);
                    console.log(cf2tResult);
                    if (cf2tResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-inches':
                    const cf2ciResult = this.cf2ci(typedNumericalValue);
                    console.log(cf2ciResult);
                    if (cf2ciResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cups':
                    const cf2cResult = this.cf2c(typedNumericalValue);
                    console.log(cf2cResult);
                    if (cf2cResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'gallons':
                    const cf2gResult = this.cf2g(typedNumericalValue);
                    console.log(cf2gResult);
                    if (cf2gResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }

        /**
         * gallons   -> litres,
         *              tablespoons,
         *              cubic-inches,
         *              cups,
         *              cubic-feet
        */

        if (typedUnitOfMeasure === volumeUnits[5]) {
            switch (typedTargetOfMeasure) {
                case 'litres':
                    const g2lResult = this.g2l(typedNumericalValue);
                    console.log(g2lResult);
                    if (g2lResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'tablespoons':
                    const g2tResult = this.g2t(typedNumericalValue);
                    console.log(g2tResult);
                    if (g2tResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-inches':
                    const g2ciResult = this.g2ci(typedNumericalValue);
                    console.log(g2ciResult);
                    if (g2ciResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cups':
                    const g2cResult = this.g2c(typedNumericalValue);
                    console.log(g2cResult);
                    if (g2cResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                case 'cubic-feet':
                    const g2cfResult = this.g2cf(typedNumericalValue);
                    console.log(g2cfResult);
                    if (g2cfResult === studentsResponseParsed) {
                        defaultResult = correctMsg;
                    }
                    break;
                default:
                    defaultResult = invalidMsg;
                    break;
            }
        }

        this.setState({
            result: defaultResult
        });
    }   

    // Kelvin to celsius
    k2c = k => {
        return parseFloat((k - 273.15).toFixed(2));
    }

    // Kelvin to Rankine
    k2r = k => {
        return parseFloat((k * 1.8).toFixed(2));
    }

    // kelvin to fahrenheit
    k2f = k => {
        return parseFloat((this.k2r(k) - 459.67).toFixed(2));
    }

    // Celsius to Kelvin
    c2k = c => {        
        return parseFloat((c + 273.15).toFixed(2));
    }

    // Celsius to fahrenheit
    c2f = c => {
        return parseFloat(((c * 1.8) + 32).toFixed(2));
    }

    // Celsius to rankine
    c2r = c => {
        return parseFloat(((c * 1.8) + 491.67).toFixed(2));
    }

    // fahrenheit to Kelvin
    f2k = f => {
        return parseFloat(((f - 32) * (5/9) + 273.15).toFixed(2));
    }

    // fahrenheit to Celsius
    f2c = f => {
        return parseFloat(((f - 32) * (5/9)).toFixed(2));
    }

    // fahrenheit to rankine
    f2r = f => {
        return parseFloat((f + 459.67).toFixed(2));
    }

    // rankine to Kelvin
    r2k = r => {
        return parseFloat((r * (5/9)).toFixed(2));
    }

    // rankine to Celsius
    r2c = r => {
        return parseFloat(((r - 491.67) * (5 / 9)).toFixed(2));
    }

    // rankine to fahrenheit
    r2f = r => {
        return parseFloat((r - 459.67).toFixed(2));
    }

    // litres to tablespoons
    l2t = l => {
        return parseFloat((l * 67.628).toFixed(2));
    }

    // litres to cubinc-inches
    l2ci = l => {
        return parseFloat((l * 61.024).toFixed(2));
    }

    // litres to cups    
    l2c = l => {
        return parseFloat((l * 4.227).toFixed(2));
    }

    // litres to cubic feet
    l2cf = l => {
        return parseFloat((l / 28.317).toFixed(2));
    }

    // litres to gallons
    l2g = l => {
        return parseFloat((l / 3.785).toFixed(2));
    }

    // tablespoons to litre
    t2l = t => {
        return parseFloat((t / 67.628).toFixed(2));
    }
    // tablespoons to cubic inches
    t2ci = t => {
        return parseFloat((t / 1.108).toFixed(2));
    }
    // tablespoons to cups
    t2c = t => {
        return parseFloat((t / 16).toFixed(2));
    }
    // tablespoons to cubic feet
    t2cf = t => {
        return parseFloat((t / 1915.013).toFixed(2));
    }
    // tablespoons to gallons
    t2g = t => {
        return parseFloat((t / 256).toFixed(2));
    }


    // cubic inches to litres
    ci2l = ci => {
        return parseFloat((ci / 61.024).toFixed(2));
    }
    // cubic inches to tablespoons
    ci2t = ci => {
        return parseFloat((ci * 1.108).toFixed(2));
    }
    // cubic inches to cups
    ci2c = ci => {
        return parseFloat((ci / 14.438).toFixed(2));
    }
    // cubic inches to cubic feet
    ci2cf = ci => {
        return parseFloat((ci / 1728).toFixed(2));
    }
    // cubic inches to gallons
    ci2g = ci => {
        return parseFloat((ci / 231).toFixed(2));
    }

    // cups to litres
    c2l = c => {
        return parseFloat((c / 4.227).toFixed(2));
    }
    // cups to tablespoons
    c2t = c => {
        return parseFloat((c / 16).toFixed(2));
    }
    // cups to cubic inches
    c2ci = c => {
        return parseFloat((c * 14.438).toFixed(2));
    }
    // cups to cubic feet
    c2cf = c => {
        return parseFloat((c / 119.688).toFixed(2));
    }
    // cups to gallons
    c2g = c => {
        return parseFloat((c / 16).toFixed(2));
    }

    // cubic feet to litres
    cf2l = cf => {
        return parseFloat((cf * 28.317).toFixed(2));
    }
    // cubic feet to tablespoons
    cf2t = cf => {
        return parseFloat((cf * 1915.013).toFixed(2));
    }
    // cubic feet to cubic inches
    cf2ci = cf => {
        return parseFloat((cf * 1728).toFixed(2));
    }
    // cubic feet to cups
    cf2c = cf => {
        return parseFloat((cf * 119.688).toFixed(2));
    }
    // cubic feet to gallons
    cf2g = cf => {
        return parseFloat((cf * 7.481).toFixed(2));
    }

    // gallons to litres
    g2l = g => {
        return parseFloat((g * 3.785).toFixed(2));
    }
    // gallons to tablespoons
    g2t = g => {
        return parseFloat((g * 256).toFixed(2));
    }
    // gallons to cubic inches
    g2ci = g => {
        return parseFloat((g * 231).toFixed(2));
    }
    // gallons to cups
    g2c = g => {
        return parseFloat((g * 16).toFixed(2));
    }
    // gallons to cubic-feet
    g2cf = g => {
        return parseFloat((g / 7.481).toFixed(2));
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
