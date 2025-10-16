console.log("EXERCISE 2: Price tag");
//console.log("Price tag");


let originalPrice = "$49.99"
console.log (`Actual price is ${originalPrice}`)
let price = prompt("Enter the price($49.99)");
let oldPrice = parseFloat(originalPrice.slice(1));


let reducedPrice = oldPrice * 0.9;
console.log (`Price after discount is $${reducedPrice}`);