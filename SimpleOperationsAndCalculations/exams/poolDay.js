function oscars(input){

    let peopleCount = Number(input[0]);
    let enterTax = Number(input[1]);
    let chairPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalTax = peopleCount * enterTax;
    let umbrellaCount = Math.ceil(peopleCount / 2);
    let chairCount = Math.ceil(peopleCount * 0.75);

    let totalCosts = totalTax + umbrellaCount * umbrellaPrice + chairCount * chairPrice;

    console.log(`${totalCosts.toFixed(2)}lv.`);
}

oscars(["21", "5.50", "4.40", "6.20"]);