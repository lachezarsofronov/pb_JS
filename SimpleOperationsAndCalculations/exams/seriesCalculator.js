function calculator(input){

    let serialName = input[0];
    let seasonCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeLenghtWithNoAds = Number(input[3]);

    let totalTime = seasonCount * episodesCount * episodeLenghtWithNoAds;
    let adsTime = totalTime * 0.20;
    let specialEpisodes = seasonCount * 10;
    let minutes = totalTime + specialEpisodes + adsTime;

    console.log(`Total time needed to watch the ${serialName} series is ${minutes} minutes.`);
}

calculator(["Lucifer", "3", "18", "55"]);