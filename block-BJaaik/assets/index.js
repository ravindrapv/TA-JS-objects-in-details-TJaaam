// Convert the give image into class using inheritance.

// - `name` is the property
// - `eat()` is the method

// Property ending with `()` is method. And others are properties.

// ![Inheritance](../assets/inheritance.png)

class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.name} and he can eat`);
    }
    sleep(){
        console.log(`${this.name} and he can sleep`);
    }
    walk(){
        console.log(`${this.name} and he can walk`);
    }
}

class Player{
    constructor(sportsName){
        this.sportsName = sportsName;
    }
    play(){
        console.log(`he can play ${this.sportsName}`);
    }
}

class Cricketer{
    constructor(teamName){
        this.teamName = teamName;
    }
    playCricket(){
        console.log(`${this.name} and he playCricket in${this.teamName}`);
    }
}

class Teacher{
    constructor(instituteName){
        this.instituteName = instituteName;
    }
    teach(){
        console.log(`this Teacher will teach javascript`);
    }
}

class artist{
    constructor(kind){
        this.kind = kind;
    }
    createArt(){
         console.log(`he is a ${this.kind} of artist `);
    }
}


let Person1 = new Person("ravindra",23,"male");
let Person2 = new Player("smithan","cricater");
let Person3 = new Cricketer("virat","RCB");
let Person4 = new Teacher("rajesh","vfgc");
let Person5 = new artist("musick","hiphop");


let person = ([Person1,Person2,Person3,Person4,Person5]);