function supplies(input){

    let countPackPens = Number(input[0]);
    let countPackMarkers = Number(input[1]);
    let litersDeskCleaner = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let totalPrice = (countPackPens * 5.80) + (countPackMarkers * 7.20) + (litersDeskCleaner * 1.20);
    let discount = totalPrice * (percentDiscount / 100);

    console.log(totalPrice - discount);
}

supplies(["4", "2", "5", "13"]);