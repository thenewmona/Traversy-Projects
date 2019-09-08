/*Log to console section 2 lecture 6
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });

console.error('This is some error');
console.clear();
console.warn('this is a warning');
console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');
*/
/*lesson 2.6 variables var, let, const
var name = 'Ramona Saintandre';
console.log(name);
name = 'David Saintandre';
console.log(name);
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

var firstName = 'ramona';
var first_name = 'david';
var FirstName = 'shae';*/

// let name = 'Ramona Saintandre';
// console.log(name);
// name = 'David Saintandre';
// console.log(name);

// const name = "ramona";
// console.log(name);
// const greeting;

// const person = {
//   name: 'Ramona',
//   age: 30
// }
// person.name = 'David';
// person.age = 32;

// console.log(person);

// const numbers = [1, 2, 3, 4];

// console.log(numbers);
// numbers.push(6);

// console.log(numbers);


// const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const [one, , , two, , , , three] = things;

// const colors = `List of Colors
// 1. ${one}
// 2. ${two}
// 3. ${three}`;

// console.log(colors);

//TODO Lesson 5 constructor and this keyword

//Person constructor
// function Person (name, dob){
//     this.name = name;
//     //this.age = age;
// this.birthday = new Date(dob);//this is a core object with a constructor 
//     //console.log(this);//logs twice because we created two objects 
//     this.calculateAge = function() {
// const diff = Date.now() - this.birthday.getTime();
// const ageDate = new Date(diff);
// return Math.abs(ageDate.getUTCFullYear()-1970);//Math.abs = math absolute 
//     }
// }

// //this key word refers to the current instance of the object
// //when this is in the global scope it pertains to the window object
// //this.alert(1);
// //console.log(this);//
// // const Ramona = new Person ('Ramona',48);
// // const David = new Person ('David',44);
// // console.log(Ramona.age);
// const ramona = new Person('ramona', '11-01-1970')
// console.log(ramona.calculateAge());

//TODO Lesson 5 built in constructors