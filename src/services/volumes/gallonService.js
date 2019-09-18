import { g2l, g2t, g2ci, g2c, g2cf } from '../../helpers/volumes/gallons';

function fromGallon(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg) {
    let defaultResult = incorrectMsg;
    switch (typedTargetOfMeasure) {
        case 'litres':
            const g2lResult = g2l(typedNumericalValue);
            console.log(g2lResult);
            if (g2lResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'tablespoons':
            const g2tResult = g2t(typedNumericalValue);
            console.log(g2tResult);
            if (g2tResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-inches':
            const g2ciResult = g2ci(typedNumericalValue);
            console.log(g2ciResult);
            if (g2ciResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cups':
            const g2cResult = g2c(typedNumericalValue);
            console.log(g2cResult);
            if (g2cResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-feet':
            const g2cfResult = g2cf(typedNumericalValue);
            console.log(g2cfResult);
            if (g2cfResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }
return defaultResult; 
}
export default fromGallon;
