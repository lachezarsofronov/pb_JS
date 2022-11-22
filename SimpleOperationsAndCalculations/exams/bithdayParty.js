function party(input){

    let rentTaxPrice = Number(input[0]);
    let cakePrice = rentTaxPrice * 0.20;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = rentTaxPrice / 3;

    let finalPrice = rentTaxPrice + cakePrice + drinksPrice + animatorPrice;

    console.log(finalPrice);
}

party(["3720"]);