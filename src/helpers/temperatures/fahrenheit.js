// fahrenheit to Kelvin
function f2k(f){
    return parseFloat(((f - 32) * (5 / 9) + 273.15).toFixed(2));
}

// fahrenheit to Celsius
function f2c(f){
    return parseFloat(((f - 32) * (5 / 9)).toFixed(2));
}

// fahrenheit to rankine
function f2r(f){
    return parseFloat((f + 459.67).toFixed(2));
}

export { f2k, f2c, f2r };