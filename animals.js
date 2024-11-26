class Animal { //THIS IS THE BASE CLASS, THE PARENT CLASS OF DOG
    DEFAULT = "Animal"
    constructor(kind) { //CALLED WHEN A NEW INSTANCE IS CREATED
        this.kind = kind ? kind : this.DEFAULT;
    }
    speak(){ //DEFAULT IMPLEMENTATION OF SPEAK
        console.log(`I am a ${this.kind}.`);
    }
}
class Dog extends Animal{ //THIS IS A CHILD CLASS OF ANIMAL AND PARENT CLASS OF PETDOG
    DEFAULT = "Dog";
    constructor(kind) {
        super(); //call constructor of animal
        this.kind = kind ? kind : this.DEFAULT;
    }
}
class PetDog extends Dog{
    constructor(name){
        super();
        this.name = name;
    }
    speak(){ //OVERIDES THE DEFAULT SSPEAK METHOD
        console.log(`I am a ${this.kind}, and my name is ${this.name}.`);
    }
}
let c = new Animal("Wild Cat");
let d = new PetDog("Dandy");
let animals = [c, d];
animals.forEach(a=>a.speak());

