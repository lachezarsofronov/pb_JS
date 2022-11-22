function tennis(input) {

    let rocketPrice = Number(input[0]);
    let rocketsCount = Number(input[1]);
    let sneakersCount = Number(input[2]);

    let sneakersPrice = rocketPrice / 6;

    let costs = rocketPrice * rocketsCount + sneakersCount * sneakersPrice;
    let otherCosts = costs * 0.2;
    let totalCosts = costs + otherCosts;
    let money = totalCosts / 8;

    let hisCosts = Math.floor(money);
    let theirCosts = Math.ceil(money * 7);

    console.log(`Price to be paid by Djokovic ${hisCosts}`);

    console.log(`Price to be paid by sponsors ${theirCosts}`);
}

tennis(["386", "7", "4"]);