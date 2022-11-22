function repainting(input) {

    coverInSquareMeters = Number(input[0]);
    paintInLiters = Number(input[1]);
    corselineInLiters = Number(input[2]);
    hoursNeeded = Number(input[3]);

    let coverPrice = (2 + coverInSquareMeters) * 1.50;
    let paintPrice = (paintInLiters + paintInLiters * 0.10) * 14.50;
    let corselinePrice = corselineInLiters * 5;
    let materialsPrice = coverPrice + paintPrice + corselinePrice + 0.40;
    let salary = (materialsPrice * 0.30) * hoursNeeded;
    let totalPrice = materialsPrice + salary;
    
    console.log(totalPrice);
}

repainting(["5" ,"10", "10", "1"]);