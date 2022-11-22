function profit(input) {

    let companyName = input[0];
    let adultTickets = Number(input[1]);
    let chieldTickets = Number(input[2]);
    let adultTicketsNetPrice = Number(input[3]);
    let tax = Number(input[4]);

    let chieldTicketsNetPrice = adultTicketsNetPrice * 0.30;
    let sumTicketsCount = adultTickets + chieldTickets;
    let sumTicketsPrice = adultTickets * adultTicketsNetPrice + chieldTickets * chieldTicketsNetPrice;
    let taxCalculation = tax * sumTicketsCount;

    let companyProfit = (taxCalculation + sumTicketsPrice) * 0.20;

    console.log(`The profit of your agency from ${companyName} tickets is ${companyProfit.toFixed(2)} lv.`)
}

profit(["Ryanair", "60", "23", "158.96", "39.12"]);