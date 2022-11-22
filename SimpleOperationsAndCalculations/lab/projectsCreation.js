function projects(input) {
    let architect = input[0];
    let projectsCount = Number(input[1]);
    let hoursNeeded = projectsCount * 3;

    console.log (`The architect ${architect} will need ${hoursNeeded} hours to complete ${projectsCount} project/s.`);
}

projects(["Sanya ", "9"]);