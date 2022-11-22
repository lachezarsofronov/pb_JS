function weather(input) {

    let weatherType = input[0];

    if (weatherType == String("sunny")) {

        console.log("It's warm outside!");
    } else {

        console.log("It's cold outside!");
    }
}

//weather(["sunny"]);
weather(["cloudy"]);
//weather(["snowy"]);