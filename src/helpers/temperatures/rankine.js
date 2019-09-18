// rankine to Kelvin
function r2k(r){
    return parseFloat((r * (5 / 9)).toFixed(2));
}

// rankine to Celsius
function r2c(r){
    return parseFloat(((r - 491.67) * (5 / 9)).toFixed(2));
}

// rankine to fahrenheit
function r2f(r){
    return parseFloat((r - 459.67).toFixed(2));
}

export { r2k, r2c, r2f };