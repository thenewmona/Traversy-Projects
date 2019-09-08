//Const & let
// created for block level scoping
// const you can not reassign

// let name ='John';


// name = 'Jack';

// const person = {
//     name: 'John',
//     age: 33
// };

// person.name = 'Jack';
// console.log(person);

// ARROW FUNCTIONS

// function sayHello(){
//     console.log('Hello');
//     }
//     sayHello();

// const sayHello = (name)  => {
//     console.log(`Hello ${name}`);
// }

// const fruits = ['Apples', 'Oranges', 'Bananas'];   
//foreach
// fruits.forEach(function(fruits)); {
    
// };
// console.log(fruit);
// fruits.forEach((fruit, index) => console.log(fruit));

// Used to loop through a array


//map

// const singleFruit = fruits.map((fruit) => fruit.slice(0,-1).toUpperCase());
// // console.log(singleFruit);

//filter
// the reason that you use filter in REACT is because state is immutable, you can not directly change it
// const people = [
//     {id:1, name:'Karen'},
//     {id:2, name:'Mikey'},
//     {id:3, name:'John'}
// ];

// const people2 = people.filter(person => person.id !=2);
// console.log(people2);

// //spread
// const arr = [1,2,3];
// const arr2 = [...arr, 4];
// const arr3=[...arr.filter(num => num !==2)];
// const person1 = {
//     name:'Ramona',
//     age:48
// };
// const person2 ={
//     ...person1,
//     email: 'thenewmona@gmail.com'
// }
// console.log(person2);


//destructuring

// const profile = {
//     name: 'Ramona Saintandre',
//     address: {
//         street:'131 Himes',
//         city:'Wyoming'
//     },
//     hobbies: ['reading,crocheting,coding']
// };
// const {name,address,hobbies} = profile;
// const {street,city} = profile.address;
// console.log(street, city);

//classes
// in React there are two types of components functional and classbase.
// classbase is the most common in REACT because of State 
// inside of a class you can have properties and methods
// property is a attribute of the class 
// method is a funtion inside of a class
// a constructor is a type of method , runs automatically 


// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age}`;
//     }
// }

// const person1 = new Person('David',44);
// const person2 = new Person('Don', 48);
// // console.log(person2.greet());



// //subclasses

// class Customer extends Person {
    
//     constructor(name,age,balance){
//         super(name,age);
//         this.balance = balance;
//     }   

//     info() {
//         return `${this.name} owes ${this.balance}`
//     };
// }
// const customer1 = new Customer('Shae', 28, -100);
// console.log(customer1.info());

//modules


