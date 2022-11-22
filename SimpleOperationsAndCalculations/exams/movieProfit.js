function profit(input) {

    let movieName = input[0];
    let daysCount = Number(input[1]);
    let TicketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let dailyTicketsPrice = TicketsCount * ticketPrice;
    let totalTicketsPrice = daysCount * dailyTicketsPrice;

    let finalPrice = totalTicketsPrice - (totalTicketsPrice * (cinemaPercent / 100));

    console.log(`The profit from the movie ${movieName} is ${finalPrice.toFixed(2)}lv.`);
}

profit(["The Programmer", "20", "500", "7.50", "7"]);