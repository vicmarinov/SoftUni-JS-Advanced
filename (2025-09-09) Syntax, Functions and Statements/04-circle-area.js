function getCircleArea (radius) {
    if (typeof radius === "number") {
        let circleArea = Math.PI * radius ** 2;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}

getCircleArea(5);
getCircleArea('name');