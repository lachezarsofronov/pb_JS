function market(input) {

    let strawberryPrice = Number(input[0]);
    let banannaInKg = Number(input[1]);
    let orangesInKg = Number(input[2]);
    let raspberryInKg = Number(input[3]);
    let strawberryInKg = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice * 0.60;
    let banannaPrice = raspberryPrice * 0.20;

    let finalPrice = strawberryInKg * strawberryPrice + banannaInKg * banannaPrice + orangesInKg * orangesPrice + raspberryInKg * raspberryPrice;

    console.log(finalPrice.toFixed(2));
}

market(["48", "10", "3.3", "6.5", "1.7"]);