function fishland(input) {

    let priceKgMackerel = Number(input[0]);
    let priceKgSprinkle = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgSaphrid = Number(input[3]);
    let kgClams = Number(input[4]);

    let priceBonito = priceKgMackerel + priceKgMackerel * 0.60;
    let priceSaphrid = priceKgSprinkle + priceKgSprinkle * 0.80;

    let priceClams = kgClams * 7.50;
    let priceBonitoTotal = priceBonito * kgBonito;
    let priceSaphridTotal = priceSaphrid * kgSaphrid;

    let finalPrice = priceClams + priceBonitoTotal + priceSaphridTotal;

    console.log(finalPrice.toFixed(2));
}

fishland(["5.55", "3.57", "4.3", "3.6", "7"]);