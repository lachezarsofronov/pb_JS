function calculator(input) {

let deposit = Number(input[0]);
let depositLenght = Number(input[1]);
let annualInterestPercent = Number(input[2]);
let totalInterest = deposit * (annualInterestPercent / 100);
let monthInterest = totalInterest / 12;
let finalPrice = deposit + (depositLenght * monthInterest);

console.log(finalPrice);
}

calculator(["2350", "6", "7"]);