// cubic feet to litres
function cf2l(cf) {
    return parseFloat((cf * 28.317).toFixed(2));
}
// cubic feet to tablespoons
function cf2t(cf) {
    return parseFloat((cf * 1915.013).toFixed(2));
}
// cubic feet to cubic inches
function cf2ci(cf) {
    return parseFloat((cf * 1728).toFixed(2));
}
// cubic feet to cups
function cf2c(cf) {
    return parseFloat((cf * 119.688).toFixed(2));
}
// cubic feet to gallons
function cf2g(cf) {
    return parseFloat((cf * 7.481).toFixed(2));
}

export { cf2l, cf2t, cf2ci, cf2c, cf2g };