function books(input) { 

    pagesConutInCurrentBook = Number(input[0]);
    pagesPerHour = Number(input[1]);
    daysCount = Number(input[2]);

    let totalHours = pagesConutInCurrentBook / pagesPerHour;
    let hoursNeeded = totalHours / daysCount;

    console.log(hoursNeeded);

}

books(["432 ", "15", "4"]);