function painting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let frontAndBackWalls = ((x * x) - (1.2 * 2)) + (x * x);
    let sideWalls = ((x * y) - (1.5 * 1.5)) * 2;

    let roofFrontAndBackSides = ((x * h) / 2) * 2;
    let roofSides = 2 * (x * y);

    let greenPaint = (frontAndBackWalls + sideWalls) / 3.4;
    let redPaint = (roofFrontAndBackSides + roofSides) / 4.3;

    console.log(greenPaint);
    console.log(redPaint);
}

painting(["10.25", "15.45", "8.88"]);