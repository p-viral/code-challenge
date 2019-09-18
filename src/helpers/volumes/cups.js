// cups to litres
function c2l(c) {
    return parseFloat((c / 4.227).toFixed(2));
}
// cups to tablespoons
function c2t(c) {
    return parseFloat((c / 16).toFixed(2));
}
// cups to cubic inches
function c2ci(c) {
    return parseFloat((c * 14.438).toFixed(2));
}
// cups to cubic feet
function c2cf(c) {
    return parseFloat((c / 119.688).toFixed(2));
}
// cups to gallons
function c2g(c) {
    return parseFloat((c / 16).toFixed(2));
}

export { c2l, c2t, c2ci, c2cf, c2g };