function lab(input) {

    let w = Number(input[0]);
    let h = Number(input[1]);

    let wInCM = w * 100;
    let hInCM = h * 100;

    let totalHallWidthAfterRemovingCoridoor = hInCM - 100;

    let rows =  Math.floor(totalHallWidthAfterRemovingCoridoor / 70);
    let colums = Math.floor(wInCM / 120);


    let totalPlaces = rows * colums - 3;

    console.log(totalPlaces);
}

lab(["8.4", "5.2"]);