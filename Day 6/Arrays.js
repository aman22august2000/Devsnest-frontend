// a1 = [10,1,12,30,46]
// c1 = [1,1,1,1];

//Accessing Elements

// console.log( a1[4])

//methods in javascript

// console.log(a1.concat(b1)); //return a new array

// console.log(a1.join(' ---')) //returns a string

// console.log(a1.slice(1,4 )) //return a new array

// console.log(a1)

// console.log(a1.indexOf(30)) //retrun first index of 30

//ITERATING LIST

// a1.forEach((item,index) => {
//     console.log(item, index);
// });

// for( let index of a1) {
//     console.log(index)
// }
// for(let i=0;i<a1.length;i++) {
//     console.log(i, a1[i]);
// }

//4.SOME
// console.log(a1.some(item=> item === 10)) 
//return true is given element is prsent in array

//5.EVERY
// console.log(a1.every(item => item ==1)); 
//returns ture if all the elements of a given array are same as passed element

//6.FILTER
// console.log(a1.filter(item=> item === 46)); //return new array
//filter doesn't change the original array
// console.log(a1);

//7.MAP
// console.log(a1.map(item => console.log(item))); //return unidentified for each item
// console.log(a1.map(item => item = -1)); //map -1 to each item
// console.log(a1); //map doesn't change the original array and return new array

//8.REDUCE
// const reducefn = a1.reduce((acc,item)=>{
//     acc=acc+item;
//     return acc;
// },0)

// console.log(reducefn);
//used to reduce list into one value

//=>ITERATING 

//1.POP
// b1 = [6,7,8,9]
// console.log(b1.pop()); // return the last element and changes the array
// console.log(b1);

//2.PUSH
// console.log(b1.length);
// console.log(b1.push(10)); //return the new length of the array

//3.REVERSE
// const d1 = b1.slice(0); //second argument is not passed -> it just copies the array in new array
// console.log(d1);
// console.log(b1.reverse()); //"change the original array"

//4.SORT
// list = [ 'a','c','b','z','n','x']
//
// console.log(list.sort());

// list1 = [1, 11, 2]
//
// console.log(list1.sort((a,b) => a-b)); 
//check if a-b>0 and swap else no swapping->return ascending order
// console.log(list1.sort((a,b)=> b-a));
//check if b-a>0 and swap else no swapping->return descending order

//5.SPLICE
// console.log(a1.splice(1, 1, 12)); //start - delete count - items

// console.log(a1.unshift(48)) // return the new length of array
// console.log(a1);
//
// console.loog(a1.shift())

// console.log(a1)

// e1 = 'This is a string';
// console.log(typeof e1);
// console.log(Array.isArray(e1));

//THA
//1.chech is array or not
// a='w3resource';
// b=[1,2,4,0];
// console.log(Array.isArray(a));
// console.log(Array.isArray(b));

//2.clone array

//->Spread operator
// numbers=[1,2,3];
// numberCopy=[...numbers];
// console.log(numberCopy);

//->good old for() loop
// numbers=[1,2,3];
// numbersCopy=[];
// for (i=0;i<numbers.length;i++) {
//     numbersCopy[i]=numbers[i];
// }

// //->good old while() loop
// numbers=[1,2,3];
// numbersCopy=[];
// i=-1;
// while(++i<numbers.length) {
//     numbersCopy[i]=numbers[i];
// }

//->Array.map(shallow copy)
numbers=[1,2,3];
double = (x) => x*2;
numbers.map(double);