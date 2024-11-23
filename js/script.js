"use strict";

// data structure: Array, Object, Set, Map
// Set
/*
const array = [1, 2, 3, 3, 2, 4, 4, 5];

// const uniq = new Set(array);
const uniq = [...new Set(array)];

// console.log(uniq);


// Set methods
uniq.add(25);

console.log(uniq.size);
console.log(uniq.has(6));

// uniq.clear();
uniq.delete(3);

console.log(uniq);
*/

// Map
/*
// const obj = {
//   true: "number is valid",
//   25: "hello",
// };
// console.log(Object.keys(obj));

// const ageMessageValidation = new Map([
//   [true, "your age is valid"],
//   [false, "your age is not valid"],
// ]);

// const myMap = new Map([
//   ["car", "Nissan"],
//   ["name", "Saeed"],
// ]);

// myMap.set(25, "something");
// myMap.set("some", "something else");

// console.log(myMap.get(25));
// console.log(myMap.size);

// myMap.delete("car");

// console.log(myMap.has(25));
// console.log(myMap.has("2"));

// console.log(myMap);

const numbers = new Map([
  [1, "one"],
  [2, "tow"],
  [3, "three"],
  [4, "four"],
  [5, "five"],
]);

for (let i = 1; i <= 5; i++) {
  console.log(numbers.ge4t(i));
}
*/

// Object Oriented Programming (OOP)

// implement OOP in js: function constructor, ES6 classes, Object.create()

// function constructor
/*
const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;

  // Don't write methods in constructor functions
  // this.greeting = function () {
  //   console.log(
  //     `Hey my name is ${this.firstName} and i'm ${this.age} years old.`
  //   );
  // };
};

Person.prototype.greeting = function () {
  console.log(
    `Hey my name is ${this.firstName} and i'm ${this.age} years old.`
  );
};

const negin = new Person("Negin", 20);
const narges = new Person("Narges", 21);

negin.greeting();

console.log(negin.hasOwnProperty("firstName"));

// console.log(negin instanceof Person);

console.log(negin);
console.log(negin.__proto__); // negin.__proto__ === Person.prototype
console.log(negin.__proto__.__proto__);
console.log(negin.__proto__.__proto__.__proto__);

// create {}
// set function this keyword to {}
// link {} to function prototype
// return {}
*/

// ES6 classes
/*
class Person {
  constructor(firstName, age) {
    this.firstName = firstName;
    this._age = age;
  }

  greeting() {
    console.log(
      `Hey my name is ${this.firstName} and i'm ${this.age} years old.`
    );
  }

  set age(newAge) {
    if (newAge > 0 && newAge <= 100) this._age = newAge;
  }

  get age() {
    return this._age;
  }

  static sayHello() {
    console.log("hello");
  }
}

const negin = new Person("Negin", 20);

negin.greeting();

console.log(negin.age);
negin.age = 250;
console.log(negin.age);

// negin.sayHello();
Person.sayHello();
*/

class Person {
  constructor(firstName, age) {
    this.firstName = firstName;
    this._age = age;
  }

  greeting() {
    console.log(
      `Hey my name is ${this.firstName} and i'm ${this.age} years old.`
    );
  }

  set age(newAge) {
    if (newAge > 0 && newAge <= 100) this._age = newAge;
  }

  get age() {
    return this._age;
  }

  static sayHello() {
    console.log("hello");
  }
}

// public property
// public methods
// private property
// private methods

class Student extends Person {
  #university;

  constructor(firstName, age, course) {
    super(firstName, age);

    this.course = course;
    this.#university = "sharif";
  }

  greeting() {
    console.log(
      `Hey my name is ${this.firstName} and i'm ${
        this.age
      } years old and ${this.#getUniversityAndCourse()}`
    );
  }

  #getUniversityAndCourse() {
    return `i'm study ${this.course} and my university is ${this.#university}.`;
  }
}

const narges = new Student("Narges", 20, "Computer science");

console.log(narges);
narges.greeting();

// console.log(narges.#university);
// narges.#getUniversityAndCourse();
