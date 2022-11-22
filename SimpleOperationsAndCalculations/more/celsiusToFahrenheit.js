function converter(input) {

    let celsius = Number(input[0]);

    let formula =  celsius * 1.8 + 32;

    console.log(formula);
}

converter(["32.3"]);