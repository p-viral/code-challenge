import { f2k, f2c, f2r } from '../../helpers/temperatures/fahrenheit';

function fromFahrenheit(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg) {
    let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'kelvin':
            const f2kResult = f2k(typedNumericalValue);
            if (f2kResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'celsius':
            const f2cResult = f2c(typedNumericalValue);
            if (f2cResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'rankine':
            const f2rResult = f2r(typedNumericalValue);
            if (f2rResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }

    return defaultResult;
}

export default fromFahrenheit;