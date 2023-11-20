const userInput = prompt("Please tell me what kind of flavors you want, yo", 
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee");





function countFlavors(userInput) {
    const flavorsArr = userInput .split(`,`);
    const flavorCount = {};

    for (const flavor of flavorsArr) {
        if (flavorCount[flavor]) {
            flavorCount[flavor] = flavorCount[flavor] + 1;
        }  else {
            flavorCount[flavor] = 1;
        }
    } 
    return flavorCount;
}

const result = countFlavors(userInput);

console.log(result);
    