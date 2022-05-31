// //creating objects with methods and functions

// const Person = {
//     firstName: 'Kiran',
//     lastName: 'kaur',
//     gender: 'female',
//     city: 'India',
//     talk: function() {
//         console.log('I am speaking in javascript class');
//     },
//     walk: function() {
//         console.log(' I love walking around parks and at around peaceful areas');
//     },
//     teaching: function() {
//         console.log('I can teach frontend concepts very well');
//     }
// }
// console.log(typeof JSON.parsel(JSON.stringify(person)));

//create properties on the go

//Multiple ways to create objects

//Splice Method
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//
// fruits.splice(2,1,"Lemon","Kiwi");
//
// console.log(fruits);

//OBJECT.CREATE
//create another object using existing object as prototype

// const obj1 ={name:'kiran'};
//
// obj2 = Object.create(obj1);

//obj2.name = 'anothername';

// console.log(obj2.name);

//Getters and setters
var car={
    name:'lambo',
    get getcarPrice() {
        console.log("price is 2 crores");
    },
    set setCarName(carname) {
        this.name = carname;
    },
    drive: function(item) {
        console.log('I will drive my', this.name);
    }
}

delete car.name;
// console.log(car.getcarPrice)
// car.setCarName = 'porsche';
// car.drive();

// console.log(car);
//console.log(car.setcar)

//delete properties from objects

//object constructors
function Person(first,last,age,eye) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const myFather = new Person("John","Doe",50,"blue");
const myMother = new Person("Sally","Rally",48,"green");

//object.assign and spread operator

const obj1 = {name : 'Kirandeep', gender:'female'};

// const obj2 = {};
// Object.assign(obj2,obj1);
// obj2={...obj1};

// const arr12=[1,2,3,4,5,6];

// arr2=[...arr12];

// console.log(arr2);

// console.log(obj2);

//spread operator on arrays

//Rest parameter on objects and arrays

function sumOfAllItems(a,b,c,...d) {
    console.log(d);
    // return a+b;
}

console.log(sumOfAllItems(1,2,3,4,5))

//arguments object

function someFunction(a,b,c) {
    console.log( arguments)
}
someFunction(10,20,30);

//practical example1
function sum(a,b) {
    return a+b;
}
console.log(sum(1,2,3,4,5,6));

//practical example2
function sum(a,b,...c) {
    const resultingSum=c.reduce((acc,item)=>{
        acc=acc+item;
        return acc;
    },0)
    return a+b+resultingSum;
}
console.log(sum(1,2,3,4,5,6,10,1000,2000,789));

//arguments gives back an object type response whereas rest parameters gives back array