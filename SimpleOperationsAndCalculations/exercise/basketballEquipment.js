function basket(input) {

    let annualTaxTraining = Number(input[0]);

    let sneakersPrice = annualTaxTraining * 0.60;
    let equipPrice = sneakersPrice * 0.80;
    let ballPrice = equipPrice / 4;
    let acsessoariesPrice = ballPrice / 5;

    let finalPrice = sneakersPrice + equipPrice + ballPrice + acsessoariesPrice;

    console.log(finalPrice + annualTaxTraining);
}

basket(["550"]);