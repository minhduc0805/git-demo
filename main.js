/**
 * Calculates shipping cost based on distance.
 */
function calculateShipping (a){
    let chiphi = a%5
    let total = chiphi*2000+7000
    if (a<=5) return "7000"
    else return total
}

// Sample usage
console.log(calculateShipping(3)); // 7000
console.log(calculateShipping(7)); // 11000