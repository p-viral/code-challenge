import { t2l, t2ci, t2c, t2cf, t2g } from '../../helpers/volumes/tablespoons';

function fromTableSpoon(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg) {
    let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'litres':
            const t2lResult = t2l(typedNumericalValue);
            if (t2lResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-inches':
            const t2ciResult = t2ci(typedNumericalValue);
            if (t2ciResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cups':
            const t2cResult = t2c(typedNumericalValue);
            if (t2cResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-feet':
            const t2cfResult = t2cf(typedNumericalValue);
            if (t2cfResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'gallons':
            const t2gResult = t2g(typedNumericalValue);
            if (t2gResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }
return defaultResult; 
}
export default fromTableSpoon;
