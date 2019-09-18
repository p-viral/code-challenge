import { c2l, c2t, c2ci, c2cf, c2g } from '../../helpers/volumes/cups';

function fromCups(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg) {
    let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'litres':
            const c2lResult = c2l(typedNumericalValue);
            console.log(c2lResult);
            if (c2lResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'tablespoons':
            const c2tResult = c2t(typedNumericalValue);
            console.log(c2tResult);
            if (c2tResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-inches':
            const c2ciResult = c2ci(typedNumericalValue);
            console.log(c2ciResult);
            if (c2ciResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-feet':
            const c2cfResult = c2cf(typedNumericalValue);
            console.log(c2cfResult);
            if (c2cfResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'gallons':
            const c2gResult = c2g(typedNumericalValue);
            console.log(c2gResult);
            if (c2gResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }
return defaultResult; 
}
export default fromCups;
