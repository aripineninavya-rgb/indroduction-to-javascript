console.log("EXERCISE 2: Price tag");
//console.log("Price tag");


let originalPrice = "$49.99";

let price = prompt("Enter the price($49.99)");
let oldPrice = parseFloat(price.slice(1));
console.log (`Actual price is = $${oldPrice}`);

let discount = "10%";
console.log (`Discount = ${discount}`);


let reducedPrice = oldPrice * 0.9;
console.log (`Price after discount is = $${reducedPrice}`);







