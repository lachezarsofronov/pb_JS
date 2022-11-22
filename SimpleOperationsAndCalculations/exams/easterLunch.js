function lunch(input){

    let sweetBreadCount = Number(input[0]);
    let eggCardsCount = Number(input[1]);
    let biscuitsCountInKG = Number(input[2]);

    let sweetBreadPrice = sweetBreadCount * 3.20;
    let eggCardsPrice = eggCardsCount * 4.35;
    let biscuitsPrice = biscuitsCountInKG * 5.40;
    let eggPaint = 0.15 * (eggCardsCount * 12);

    let finalPrice = sweetBreadPrice + eggCardsPrice + biscuitsPrice + eggPaint;

    console.log(finalPrice.toFixed(2));
}

lunch(["3", "2", "3"]);