import { l2t, l2ci, l2c, l2cf, l2g } from '../../helpers/volumes/litres';

function fromLitre(typedTargetOfMeasure, typedNumericalValue, studentsResponseParsed, incorrectMsg, correctMsg, invalidMsg){
    let defaultResult = incorrectMsg;

    switch (typedTargetOfMeasure) {
        case 'tablespoons':
            const l2tResult = l2t(typedNumericalValue);
            if (l2tResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-inches':
            const l2ciResult = l2ci(typedNumericalValue);
            if (l2ciResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cups':
            const l2cResult = l2c(typedNumericalValue);
            if (l2cResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'cubic-feet':
            const l2cfResult = l2cf(typedNumericalValue);
            if (l2cfResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        case 'gallons':
            const l2gResult = l2g(typedNumericalValue);
            if (l2gResult === studentsResponseParsed) {
                defaultResult = correctMsg;
            }
            break;
        default:
            defaultResult = invalidMsg;
            break;
    }

    return defaultResult;    
}
export default fromLitre;

