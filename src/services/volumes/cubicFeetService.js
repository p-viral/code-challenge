import { cf2l, cf2t, cf2ci, cf2c, cf2g } from '../../helpers/volumes/cubic-feet';

function fromCubicFeet(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg) {
    let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'litres':
            const cf2lResult = cf2l(typedNumericalValue);
            console.log(cf2lResult);
            if (cf2lResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'tablespoons':
            const cf2tResult = cf2t(typedNumericalValue);
            console.log(cf2tResult);
            if (cf2tResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-inches':
            const cf2ciResult = cf2ci(typedNumericalValue);
            console.log(cf2ciResult);
            if (cf2ciResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cups':
            const cf2cResult = cf2c(typedNumericalValue);
            console.log(cf2cResult);
            if (cf2cResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'gallons':
            const cf2gResult = cf2g(typedNumericalValue);
            console.log(cf2gResult);
            if (cf2gResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }
return defaultResult; 
}
export default fromCubicFeet;
