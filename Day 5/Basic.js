//Types of values in javascript

// console.log(typeof 42);

// console.log(typeof 42.44);

// console.log(typeof 'hello there');

// console.log(typeof undefined);

// console.log(typeof null); //bug in javascript

// console.log(typeof true);

// console.log(typeof {name:'javascript'});

// console.log(typeof [1,2,3]);

// const x = 3;
// if(x > 5){
//     console.log('number is greater');
// }
// else {
//     console.log('number is less then 10');
// }

// const arr = [1,2,3,4,5]
// let sum = 0;
// for( let i = 0; i< arr.length ;i++){
//     sum = sum + arr[i];
//     console.log(arr[i],i);
// }
// console.log(sum);

// for(let item of arr){
//     console.log(item);
// }

// arr.forEach((item,index)=>{
//     console.log(item,index);
// })

// var x = 10;
// console.log(typeof x);
// x = 'hello';

// var x = '10';
// var y = 10;
// console.log(+x+y);

// var x = 10;
// var y = '10';

// console.log(x == y); //checks eqaulity
// console.log(x === y); //checks type

// console.log(typeof (x + ''));
// console.log(Boolean(x));
// if(x)
//coersion to number - parseInt , Number, uniary+

//coersion to Boolean - Boolean , !!

//coersion to string - tostring, simple concatenate with Empty String

//'''''SCOPE'''''

// var x = 10;

// function otherFunction(){
//     // let x = 20; 
//     console.log(x);
// }
// otherFunction();

//global and local scope

// var teacher = 'Kiran';

// function thursdayLiveClass() { 
//     var teacher = 'Garv';
//     console.log(teacher, 'is a teacher for thursday live class');
// }

// function fridayLiveClass() {
//     var teacher = 'Kshitiz';
//     console.log(teacher, ' is a teacher for friday live class ');
// }

// thursdayLiveClass()
// fridayLiveClass()
// console.log(teacher, ' is a teacher for wednesday live class ');

var x = 10;

function otherFunction() {
    var y = 10;
    y = 20;
    {
        var question = 'about css';
        // let question = ' about html '
        // console.log(question);
    }
    console.log(question);

    // var x = 20;
    // console.log(x);
}
otherFunction();
