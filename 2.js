// import {a,infor,test} from './1.js';

// console.log(a);
// console.log(infor);
// console.log(test);
// import {number,arr} from "./1.js";
// console.log(number);
// console.log(arr);

// default export
// import x from './1.js';
// let {a,names} = x;
// console.log(a,names);
// Rest Parameter
// function restParz(...a){
//     let sum = a.reduce((acc,el)=>acc+el)
//     console.log(sum);

// }
// restParz(12,3,4,5,5,7);


// 1 question
// let arr = [1,2,3,5,6,7];
// // let sum = 0;
// let sum = arr.reduce((inde,val)=>inde+val);
// console.log(sum);
//2 question
// let arr = [1,2,3,4,5,4];
// let newAr = arr.map((val,ind)=>{
//     return val + ((ind+1)*10);
// });
// console.log(newAr);
// 3 question
// let student_marks = [
    

//     { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},
        
//     { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},
        
//      { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},
        
        
// ]
// console.log();
// let arr = [2,3,4,5,6];
// arr.forEach(function(index,value,array){
// const v = arr[index+100];
// console.log(v);
// });
// UNPACKING
// let any = {
//     user_name: {
//         name:"shubham",
//         roll: 34,
//         subject: "Hindi"
//     }
// }
// let {user_name,name} = any;
// console.log(user_name);
// synochronus and asynochronus
// console.log("customer 1 ordered briyani");
// setTimeout(()=>{
//     console.log("Customer 1 received biryani")
// },5000);

// console.log("Customer 2 order the tandory");
// setTimeout(()=>{
//     console.log("Customer 2 has been received thier tandori")
// },8000);

// console.log("Customer 3 has been order the bottel");
// setTimeout(()=>{
//     console.log("Customer 3 has been received the bottle")
// },2000);
// import {number} from './1.js';
// console.log(number);






// promise








// let futureCondition = true;
// let promiseObject = new Promise((fulfilled,rejected)=>{
//     if(futureCondition===true){
//         fulfilled('promise fullfilled')
//     }else{
//         rejected("promise is rejected");
//     }
// });
// console.log(promiseObject);

// promiseObject.
// then((msg)=>
//     console.log(msg))
//     .catch((err)=>
//         console.log(err)
//     );

    
// let performanceStatus = true;
// let fullTimeEmpPromise = new Promise(fulfilled,rejected)=>{
//     setTimeout(()=>{
//         if(performanceStatus===true){
//             fulfilled("Congrolutions... you are full time employee");

//         }else{
//             rejected("sorry..try again");
//         }
//     }, 5000);
// }

// FOR EACH
// let arr = [1,2,3,4,5,6,7];
// let sum = 0;
// arr.forEach(function(index,value,array){
//     sum+=index;
//     console.log(sum);

// })
// var numbers = [1,2,3,4];
// var double = [];
// for(var i =0; i<numbers.length;i++){
//     double.push(numbers[i]*2);
    
// }
// console.log(double);
// var number = [1,2,3,4,5,6];
// var double = numbers.map(function(numner))
// var number = [1,2,3,4];
// var b = number.map(function(index,value,numb){
//     console.log(index,value,numb);
//     return value+1;

// })
// console.log(b);
// Filetr values
// let number = [1,2,3,4,544,33,4,5,6,66];
// let number2 = number.filter(function(help){
//     return help<10;

// });
// console.log(number2);
// Reduce
// var sum = [3,4,5,6,7,8,8];
// let newW = sum.reduce(function(h1,h2){
//     return h1+h2;
// })
// console.log(newW);
// var products = [
//     {name: "cucumbner",type:"vegetable"},
//     {name: "veges",type:"vegetable"},
//     {name: "hotdogs",type:"snacks"},
//     {name: "cocunut",type:"fruits"}
// ];
// var newProducts = [];
// for(var i = 0; i<products.length;i++){
//     if(products[i].type==="vegetable"){
//         newProducts.push(products);
//     }
// }
// console.log(newProducts);
// var products = [
//     {name: "cucumbner",type:"vegetable",quantity:0,price:1},
//     {name: "veges",type:"vegetable",quantity:10,price:15},
//     {name: "hotdogs",type:"snacks",quantity:30,price:13},
//     {name: "cocunut",type:"fruits",quantity:3,price:3}
// ];
// // this is incorrect solution
// // var newProducts = [];
// // var newValu = products.filter(function(index,value,h1){
// //      if(h1.type==="vegetable"){
// //         newProducts.push(h1);
// //      }

// // })
// // console.log(newValu);
// // This is correct solution
// let newArr = products.filter(function(h1){
//     return h1.type==="vegetable" && h1.quantity>0 && h1.price<10;
// })
// console.log(newArr);
// let users = [
//     {name: "Shubham"},
//     {name: "Alex"},
//     {name: "Bill"}
// ];
// // var names;
// // for(let i = 0;i<users.length;i++){
// //     if(users[i].name==="Alex"){
// //         names = users[i];
        
// //     }
   
// // }
// // console.log(users);
// var user = users.find(function(user){
//     return user.name ==="Alex";
// })
// console.log(user);
// function Car(model){
//     this.model = model;

// }
// var cars = [
//     new Car('Buick'),
//     new Car('Camaro'),
//     new Car('Focus')
// ]
// var posts = [
//     {id: 1, title: "New Post"},
//     {id: 2, tirl: "Old post"}
// ]
// var comments = [
//     {postId: 1, content: "Great Cost"}
// ]
// function myFunction(posts,comments){
//     return posts.find(function(post){
//         return post.id === comments.postId;
//     })

// }
// myFunction(posts,comments);
// ever helpers
var computers = [
    {name: "apple",ram: 16},
    {name: "compaq", ram: 8},
    {name: "accer", ram: 32}
];
// var allcomputerCanRunComputer = true;
// var somecComputerRunProgram = false;
// for(var i = 0; i<computers.length;i++){
//     var computer = computers[i];
//     if(computer.ram<16){
//         allcomputerCanRunComputer = false;
//     }else{
//         somecComputerRunProgram = true;
//     }
// }
// console.log(allcomputerCanRunComputer);
// console.log(somecComputerRunProgram);

// by using every helpers
let comuter = computers.every(function(computer){
    return computer.ram < 16;

})
console.log(comuter);