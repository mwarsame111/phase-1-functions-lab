// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        distanceFromHqInBlocks = someValue - 42
        return distanceFromHqInBlocks
    } else {
        distanceFromHqInBlocks = 42 - someValue
        return distanceFromHqInBlocks
    }
}

function distanceFromHqInFeet(someValue){
    distanceFromHqInFeet = 264;
    someValue * distanceFromHqInBlocks
    return distanceFromHqInFeet
}
