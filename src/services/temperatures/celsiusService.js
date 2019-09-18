import { c2k, c2f, c2r } from '../../helpers/temperatures/celsius';

function fromCelsius(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg){
    let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'kelvin':
            const c2kResult = c2k(typedNumericalValue);
            if (c2kResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'fahrenheit':
            const c2fResult = c2f(typedNumericalValue);
            if (c2fResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'rankine':
            const c2rResult = c2r(typedNumericalValue);
            if (c2rResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }

    return defaultResult;
}

export default fromCelsius;