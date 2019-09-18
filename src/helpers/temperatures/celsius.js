// Celsius to Kelvin
function c2k(c){
    return parseFloat((c + 273.15).toFixed(2));
}

// Celsius to fahrenheit
function c2f(c){
    return parseFloat(((c * 1.8) + 32).toFixed(2));
}

// Celsius to rankine
function c2r(c){
    return parseFloat(((c * 1.8) + 491.67).toFixed(2));
}

export { c2k, c2f, c2r };