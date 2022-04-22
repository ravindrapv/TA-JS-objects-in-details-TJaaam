// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

class Animal{
    constructor(location,numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs; 
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    }
    changeLocation(newLocation){
        this.newLocation = newLocation;
        return this.newLocation
    }
    summary(){
        return (`I live in ${this.location} and I have ${this.numberOfLegs}`);
    }
}

let dog = new Animal("bengaluru",4);
console.log(dog);
console.log(dog.bark);
console.log(dog.eat);
console.log(dog.changeLocation("raichuru"));


// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

class Dog{
    constructor(name,color,numberOfLegs,location){
        new Animal(location,numberOfLegs);
        this.name = name;
        this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        this.newName = newName;
        return this.newName;
    }
    changeColor(newColor){
        this.newColor = newColor;
        return this.newColor;
    }
    summary(){
        return (`I am ${this.name} and I am of ${this.color} color. I can also bark`);
    }
}

let newdog = new Dog("tumkur",4);

console.log(newdog);
console.log(newdog.bark);
console.log(newdog.changeColor("green"));
console.log(newdog.changeName("budugu"));

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

class Cat{
    constructor(name,colorOfEyes,numberOfLegs,location,color){
        new Animal(location,numberOfLegs);
        new Dog(name,color);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    }
    changeName(newName){
        this.newName = newName;
        return this.newName;
    }
    changeColorOfEyes(newColor){
        this.newColor = newColor;
        return this.newColor;
    }
    summary(){
        return (`I am ${this.name} and I am of ${this.color} color. I can also do meow meow`);
    }
}


let cat = new Cat("jak","red");

console.log(cat);
console.log(cat.colorOfEyes);
console.log(cat.name);
