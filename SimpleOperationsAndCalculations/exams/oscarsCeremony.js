function oscars(input){

    let rentTaxPrice = Number(input[0]);

    let figuresPrice = rentTaxPrice * 0.70;
    let catering = figuresPrice * 0.85;
    let sounding = catering / 2;

    let totalCosts = rentTaxPrice + figuresPrice + catering + sounding;

    console.log(totalCosts.toFixed(2));
}

oscars(["3500"]);