let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(const carType in statistics){
    const firstChar = carType[0];
    const val = statistics[carType];
    if(firstChar === 'r' || val % 2 === 1){
        console.log(`${statistics[carType]}`);
    }
}