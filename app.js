// // console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// class Person {
//     constructor(name, pets, residence, hobbies) {
//       this.name = name;
//       this.pets = pets;
//       this.residence = residence;
//       this.hobbies = hobbies;
//     }
//     addHobby(hobby){
//       this.hobbies = this.hobbies + hobby;
//     }
//     removeHobby(hobby){
//       this.hobbies = this.hobbies - hobby;
//     }
//     greeting(){
//       console.log("Hello fellow person!");
//     }
//   }

// const person1 = new Person("Graham", 2, "alabama", [])
// console.log(person1);

// person1.greeting()

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
// class Coder extends Person{
//   constructor(name, pets, residence, hobbies){
//     super(name, pets, residence, hobbies)
//     this.occupation = "Full Stack Web Developer";
//   }
//   greeting(){
//     console.log("Hello from a coder!");
//   }
// }

// const = coder1 new Coder("Larry", 4, "Mars", "drums");
// console.log(coder1);

// //Exercise 3 Section
// const person2 = new Person("Bob", 7, "Nebraska", "shuck corn");
// const coder2 = new Coder ("Mark", 3, "Michigan", "football");

// console.log(person2);
// console.log(coder2);

//Exercise 4
class Calculator {
  constructor(result = 0){
    this.result = result;
  }

  add(a, b = this.result){
    this.result = a + b;
    return this.result;
  }

  subtract(a, b = this.result){
    this.result = a - b;
    return this.result;
  }

  multiply(a, b = this.result){
    this.result = a * b;
    return this.result;
  }

  divide(a, b = this.result){
    // if (b === 0){
    //   console.log("This number is not divisible by zero");
    //   return this.result;
    // }
    this.result = a / b;
    return this.result;
  }

  displayResult(){
    console.log(this.result);
  }
}

const calc = new Calculator();
console.log(calc.add(8, 11));
console.log(calc.divide(3, 12));
console.log(calc.multiply(4, 8));
console.log(calc.subtract(11, 7));