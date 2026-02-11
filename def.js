
class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

let shapeType = input[0];
let shape;

if (shapeType === 'rect') {
    let height = Number(input[1]);
    let width = Number(input[2]);
    shape = new Rectangle(height, width);
} else if (shapeType === 'square') {
    let side = Number(input[1]);
    shape = new Square(side);
}

console.log(shape.area());
