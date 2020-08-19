class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getDiameter (){
      return 2*this.radius
    }
    getCircumference (){
        return 2*Math.PI*this.radius
    }
    getArea (){
        return Math.PI*this.radius*this.radius
    }
}

const circle = new Circle(10);
console.log('Diameter: ',circle.getDiameter()); 
console.log('Circumference : ',circle.getCircumference ()); 
console.log('Area: ',circle.getArea ()); 