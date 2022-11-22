function change(input){

    let bitcoinCount = Number(input[0]);
    let chineseJuan = Number(input[1]);
    let tax = Number(input[2]);
    
    let bitcoinPrice = bitcoinCount * 1168; //leva
    let chineseJuanPrice = chineseJuan * 0.15; //dollars
    let chineseJuanPriceInLeva = chineseJuanPrice * 1.76;
    let levaInEuro = (bitcoinPrice + chineseJuanPriceInLeva) / 1.95;

    let finalPrice = levaInEuro - (levaInEuro * (tax / 100));

    console.log(finalPrice.toFixed(2));
}

change(["1", "5", "5"]);