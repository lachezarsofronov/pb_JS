function perimeter(input) {

    let r = Number(input[0]);

    let area =  Math.PI * r ** 2;
    let perimeter =  Math.PI * 2 * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

perimeter(["3"]);