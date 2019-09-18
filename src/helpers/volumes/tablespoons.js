// tablespoons to litre
function t2l(t) {
    return parseFloat((t / 67.628).toFixed(2));
}
// tablespoons to cubic inches
function t2ci(t) {
    return parseFloat((t / 1.108).toFixed(2));
}
// tablespoons to cups
function t2c(t) {
    return parseFloat((t / 16).toFixed(2));
}
// tablespoons to cubic feet
function t2cf(t) {
    return parseFloat((t / 1915.013).toFixed(2));
}
// tablespoons to gallons
function t2g(t) {
    return parseFloat((t / 256).toFixed(2));
}

export { t2l, t2ci, t2c, t2cf, t2g };