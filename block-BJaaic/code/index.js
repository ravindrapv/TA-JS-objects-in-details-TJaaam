// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

function Animal(location,numberOfLegs) {

    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

Animal.prototype = {
    eat: function(){
        console.log(`I live in ${location} and I can eat`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary: function(){
        return (`I live in ${location} and I have ${numberOfLegs}`);
    }
}

let man = new Animal("davanagere",2);
let dod = new Animal("himachal",4);


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


function dog(name,color) {
    this.name = name;
    this.color = color;
}

dog.prototype = {
    bark: function(){
        alert(`I am ${name} and I can bark 🐶`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return newColor
    },
    summary: function(){
        return (`I am ${name} and I am of ${color} color. I can also bark`);
    }
}

let dogData = new dog("pochi","black");
let dogTwo = new dog("dodo","whigth");



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

function Cat(name,colorOfEyes) {
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

Cat.prototype = {
    meow: function(){
        alert(`I am ${name} and I can bark 🐶`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.color = newColor;
        return newColor
    },
    summary: function(){
        return (`I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`);
    }
}

let cat1 = new Cat("zozo","blue");