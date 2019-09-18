// litres to tablespoons
function l2t(l){
    return parseFloat((l * 67.628).toFixed(2));
}

// litres to cubinc-inches
function l2ci(l){
    return parseFloat((l * 61.024).toFixed(2));
}

// litres to cups    
function l2c(l){
    return parseFloat((l * 4.227).toFixed(2));
}

// litres to cubic feet
function l2cf(l){
    return parseFloat((l / 28.317).toFixed(2));
}

// litres to gallons
function l2g(l){
    return parseFloat((l / 3.785).toFixed(2));
}

export { l2t, l2ci, l2c, l2cf, l2g };