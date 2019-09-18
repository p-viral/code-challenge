import { ci2l, ci2t, ci2c, ci2cf, ci2g } from '../../helpers/volumes/cubic-inches';

function fromCubicInch(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg) {
    let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'litres':
            const ci2lResult = ci2l(typedNumericalValue);
            console.log(ci2lResult);
            if (ci2lResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'tablespoons':
            const ci2tResult = ci2t(typedNumericalValue);
            console.log(ci2tResult);
            if (ci2tResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cups':
            const ci2cResult = ci2c(typedNumericalValue);
            console.log(ci2cResult);
            if (ci2cResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-feet':
            const ci2cfResult = ci2cf(typedNumericalValue);
            console.log(ci2cfResult);
            if (ci2cfResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'gallons':
            const ci2gResult = ci2g(typedNumericalValue);
            console.log(ci2gResult);
            if (ci2gResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }
return defaultResult; 
}
export default fromCubicInch;