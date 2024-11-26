//JS REVIEW
// 0. PRINTING OUTPUT TO THE CONSOLE/TERMINAL(screen input/output device) or emulator.

console.log("Hello World!!!"); // uses the console object's log method to print string Hello World !!!

// 1. VARIABLES - like a labeled canning jar, value is like the contents of the jar

x = 123 // x is the identifier (name) and 123 is the value

camelCase = "used for maost variables" //most variables should have two words not less or more if you can help it

TitleCase = "used for class names and module names"

TAX_RATE = 0.08 //all capitals is used for true constants like PI or TAX_RATE

// 2. Data Types - name of shape/size of the data in memory

// basic/primative data types

n = 123.456    // Number
s = ""         // String
boolean = true // logic and reasoning true/false
d = new Date() // new Date *constructor* defaults to now and holds both date and time using unix timestamps internally ms 1/1/1970

// complex data types - containers
list = [] // Array - a ordered list of values can be accessed by index. has .length *property*
dict = {} // Object - key value pairs like a dictionary where values can be pulled out by key/name

// 3. EXPRESSIONS - can be evaluated and reduced to a single result
// mathmatical expressions
e = 6 * 7; // * is multiplication/times, / is division/fraction, + addition/plus, - subtraction/minus

result = false || true //expression is true if either is true as || can read as OR
console.log(result === true) //will print true as result will be true

//logical expressions an d logical operators && is AND, || is OR, ! is NOT

// comparisons - logic pt 2
a = 123
b = 456
a == b  // equal value - loose e.g. "123" == 123 is true
a === b // same value and same data type - exact
a < b   //less than
a > b   //greater than
a >= b  //greater than or equal to
a <= b  //less than or equal to
a != b  // not equal to

// 4. CONDITIONAL STATEMENTS - if/else/else if, or switch/case/break
allGood = true
if (allGood) {
    console.log("awesome")
} else {
    console.log("awwww")
}
limit = 10

// 5. LOOPS - for, while, do while
for (let i = 0; i < limit; i++) {
    console.log(i);
}

fruit = ["apple", "banana", "cherry"]
for (let fruitIndex = 0; fruitIndex < fruit.length; fruitIndex++) {
    console.log(fruitIndex, fruit[fruitIndex]);
}

// 6. FUNCTION DEFINITIONS - CODE ORGANIZATION pt 1 - named blocks of code
function add(a, b) { // a and b are positional input parameters recieve
    return a + b; // return a single value
}
console.log(add(6, 7)) // 13 becasue we passed to literal numbers as arguments

const multiply = (a,b) => a * b; // assign a identfier to an anonymous arrow function
console.log(multiply(6,7));

// 7. CODE ORGANIZATION PT 2
//    Class as object blueprint/template,
//     to construct new concrete Instances in memory
class Vehicle{
    constructor(speed=15){
        this.speed = speed;
        this.location = 0;
    }
    go(){
        this.location += this.speed;
    }
} 
// Encapsulation - combining properties and methods to share instance values
// Inheritance - is_a relationships *extends* subclassing a parent class to create a child class
// e.g. Dog extends Animal

let v = new Vehicle(25); //constructing a new vehicle with a default speed of 25
v.go();
v.go();
console.log(v.location); // ??? 50

// Composition - has_a relationship - class with property that holds Object(s)
// e.g. Store has Products