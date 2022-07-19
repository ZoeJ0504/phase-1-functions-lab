
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42)
        return someValue - 42
    else if (someValue < 42)
        return 42 - someValue
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, stop) {
    if (stop >= start)
        return (stop - start) * 264
    if (stop <= start)
        return (start - stop) * 264
}

function calculatesFarePrice(start, stop) {
    let distance = distanceTravelledInFeet(start, stop)
    if (distance < 400)
        return 0
    if (400 < distance && distance < 2000)
        return (distance - 400) * .02
    if (2000 < distance && distance < 2500)
        return 25
    if (distance > 2500)
        return 'cannot travel that far'

}
