import { k2c, k2r, k2f } from '../../helpers/temperatures/kelvin';

function fromKelvin(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg){
    let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'celsius':
            const k2cResult = k2c(typedNumericalValue);
            if (k2cResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'fahrenheit':
            const k2fResult = k2f(typedNumericalValue);
            if (k2fResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'rankine':
            const k2rResult = k2r(typedNumericalValue);
            if (k2rResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }

    return defaultResult;
}

export default fromKelvin;