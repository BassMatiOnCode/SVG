"use strict";
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    print() {
        console.log(`x=${this.x} y=${this.y}`);
    }
}
let p1 = new Point(3, 3);
console.log(p1.x);
