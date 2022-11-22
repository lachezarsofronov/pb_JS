function converter(input) {
    let radians = Number(input[0]);
    let degree = radians * 180 / Math.PI;

    console.log(degree);
}

converter(["6.2832"])