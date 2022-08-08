function distanceFromHqInBlocks(blocks) {
    let distance = Math.abs(blocks - 42);
    return distance;
}

function distanceFromHqInFeet(blocks) {
    let distanceFeet = distanceFromHqInBlocks(blocks) * 264;
    return distanceFeet
}

function distanceTravelledInFeet(block1, block2) {
    let distanceTraveled = Math.abs(block1-block2) * 264
    return distanceTraveled
}

function calculatesFarePrice(block1,block2) {
    let destination = distanceTravelledInFeet(block1, block2);
    if (destination < 400) {
        return 0;
    } else if (destination > 400 && destination < 2000) {
        return (destination - 400) *.02;
    } else if (destination > 2000 && destination < 2500) {
        return 25;
    } else if (destination > 2500) {
        return 'cannot travel that far';
    }
    
}
