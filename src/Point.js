// src/Point.js
class Point {
    constructor(x, y) {
      this.x = parseFloat(x);
      this.y = parseFloat(y);
    }
  
    show() {
      return `(${this.x}, ${this.y})`;
    }
  
    equals(point) {
      return this.x === point.x && this.y === point.y;
    }
  }
  
  export default Point;
  