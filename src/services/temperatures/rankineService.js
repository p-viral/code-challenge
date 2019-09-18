import { r2k, r2c, r2f } from '../../helpers/temperatures/rankine';

function fromRankine(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg) {
let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'kelvin':
            const r2kResult = r2k(typedNumericalValue);
            if (r2kResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'celsius':
            const r2cResult = r2c(typedNumericalValue);
            if (r2cResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'fahrenheit':
            const r2fResult = r2f(typedNumericalValue);
            if (r2fResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }

    return defaultResult;
}

export default fromRankine;