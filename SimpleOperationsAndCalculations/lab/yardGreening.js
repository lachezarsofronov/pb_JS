function yard(input) {

let squareMeters = Number(input[0]);


let price = squareMeters * 7.61;
let discount = price - price * 0.82;
let finalPrice = price - discount;

console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

yard(["150"]);