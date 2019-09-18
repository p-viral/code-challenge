// Kelvin to celsius
function k2c(k) {
    return parseFloat((k - 273.15).toFixed(2));
}

// Kelvin to Rankine
function k2r(k) {
    return parseFloat((k * 1.8).toFixed(2));
}

// kelvin to fahrenheit
function k2f(k) {
    return parseFloat((k2r(k) - 459.67).toFixed(2));
}

export { k2c, k2r, k2f };