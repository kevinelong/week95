
// intro to Classes and instances and methods and properties.

//encapsulates variable and functions
class Rectangle{ //defines a new data type called Rectangle,
    // a new kind of thing
    
    //factory that makes the instance
    constructor(height, width){
        // me, myself, and I
        // the instance is called by the keyword "this"
        //properties:
        this.height = height;
        this.width = width;
    }

    //method - a function inside a class
    getArea(){
        return this.height * this.width;
    }
}

//create a new concrete instance and assign it to the r variable.
let r = new Rectangle(12, 12);
//call/invoke r's in herited getArea() method
console.log(r.width, r.height, r.getArea());

let s = new String();
console.log(s.length);

let t = ""; //new String("")
console.log(t.length);

let n = new Number();
console.log(n, n.toFixed(3));

let m = 0;
console.log(m, m.toFixed(3));
