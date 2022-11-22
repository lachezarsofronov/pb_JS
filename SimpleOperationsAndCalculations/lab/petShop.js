function zoo(input) {

    let dogFood = Number(input[0]) * 2.50;
    let catFood = Number(input[1]) * 4.00;
    let neededMoney = dogFood + catFood;

    console.log(`${neededMoney} lv.`)
}

zoo(["13", "9"]);