// gallons to litres
function g2l(g) {
    return parseFloat((g * 3.785).toFixed(2));
}
// gallons to tablespoons
function g2t(g) {
    return parseFloat((g * 256).toFixed(2));
}
// gallons to cubic inches
function g2ci(g) {
    return parseFloat((g * 231).toFixed(2));
}
// gallons to cups
function g2c(g) {
    return parseFloat((g * 16).toFixed(2));
}
// gallons to cubic-feet
function g2cf(g) {
    return parseFloat((g / 7.481).toFixed(2));
}

export { g2l, g2t, g2ci, g2c, g2cf };