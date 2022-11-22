function weather(input) {

    let weatherType = Number(input[0]);

    if (weatherType >= 26.00 && weatherType <= 35.00) {
        console.log("Hot");
    } else if (weatherType >= 20.1 && weatherType <= 25.9){
        console.log("Warm");
    } else if (weatherType >= 15 && weatherType <= 20){
        console.log("Mild");
    } else if (weatherType >= 12 && weatherType <= 14.9){
        console.log("Cool");
    } else if (weatherType >= 5 && weatherType <= 11.9){
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

weather(["0"]);