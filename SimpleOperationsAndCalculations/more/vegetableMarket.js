function market(input) {

    let priceKgVegetables = Number(input[0]);
    let priceKgFruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let finalPrice = (kgVegetables * priceKgVegetables) + (kgFruits * priceKgFruits);

    console.log(finalPrice / 1.94);
}

market(["1.5", "2.5", "10", "10"]);