function fishtank(input) {

lenghtInCM = Number(input[0]);
widthInCM = Number(input[1]);
heightInCM = Number(input[2]);
percent = Number(input[3]);

let capacity = lenghtInCM * widthInCM * heightInCM;
let capacityInLiters = capacity / 1000;
let percentValue =  percent / 100;
let usedSpace = capacityInLiters * percentValue;
let totalWaterNeeded = capacityInLiters - usedSpace;

console.log(totalWaterNeeded);
}

fishtank(["105" ,"77", "89" ,"18.5"]);