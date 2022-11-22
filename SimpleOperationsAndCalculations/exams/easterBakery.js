function bakery(input){

    let flourPricePerKg = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggCards = Number(input[3]);
    let east = Number(input[4]);

    let sugarPricePerKg = flourPricePerKg * 0.75;
    let eggCardsPrice = flourPricePerKg * 1.10;
    let eastPrice = sugarPricePerKg * 0.20;

    let finalPrice = flourPricePerKg * flourKg + sugarPricePerKg * sugarKg + eggCardsPrice * eggCards + eastPrice * east;

    console.log(finalPrice.toFixed(2));
}

bakery(["50", "10", "3.5", "6", "1"]);