function delivery(input) {

    countChikenMenu = Number(input[0]);
    countFishMenu = Number(input[1]);
    countVeganMenu = Number(input[2]);

    let priceMenu = (countChikenMenu * 10.35) + (countFishMenu * 12.40) + (countVeganMenu * 8.15);
    let desert = priceMenu * 0.20;
    let finalPrice = desert + priceMenu + 2.5;

    console.log(finalPrice);
}

delivery(["9" ,"2" ,"6"]);