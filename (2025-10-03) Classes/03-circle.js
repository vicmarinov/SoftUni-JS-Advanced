class Circle {
    radius;

    constructor (radius) {
        this.radius = radius;
    }

    get diameter () {
        return this.radius * 2;
    }

    set diameter (diameter) {
        this.radius = diameter / 2;
    }

    get area () {
        return Math.PI * this.radius ** 2;
    }
}

const circle1 = new Circle(2);

console.log(`Radius: ${circle1.radius}`);
console.log(`Diameter: ${circle1.diameter}`);
console.log(`Area: ${circle1.area}`);

circle1.diameter = 1.6;
console.log(`Radius: ${circle1.radius}`);
console.log(`Diameter: ${circle1.diameter}`);
console.log(`Area: ${circle1.area}`);