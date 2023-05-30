// console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
      this.name = name;
      this.pets = pets;
      this.residence = residence;
      this.hobbies = hobbies;
    }
    addHobby(hobby){
      this.hobbies = this.hobbies + hobby;
    }
    removeHobby(hobby){
      this.hobbies = this.hobbies - hobby;
    }
    greeting(){
      console.log("Hello fellow person!");
    }
  }

const person1 = new Person("Graham", 2, "alabama", [])
console.log(person1);

person1.greeting()

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
