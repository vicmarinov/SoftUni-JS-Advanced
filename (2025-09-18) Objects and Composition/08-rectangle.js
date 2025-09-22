function createRectangle (width, height, color) {
    return {
        width: Number(width),
        height: Number(height),
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height;
        }
    };
}

let rectangle = createRectangle(4, 5, 'red');
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.color);
console.log(rectangle.calcArea());