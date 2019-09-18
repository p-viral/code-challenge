// cubic inches to litres
function ci2l(ci) {
    return parseFloat((ci / 61.024).toFixed(2));
}
// cubic inches to tablespoons
function ci2t(ci) {
    return parseFloat((ci * 1.108).toFixed(2));
}
// cubic inches to cups
function ci2c(ci) {
    return parseFloat((ci / 14.438).toFixed(2));
}
// cubic inches to cubic feet
function ci2cf(ci) {
    return parseFloat((ci / 1728).toFixed(2));
}
// cubic inches to gallons
function ci2g(ci) {
    return parseFloat((ci / 231).toFixed(2));
}

export { ci2l, ci2t, ci2c, ci2cf, ci2g };