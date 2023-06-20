let h1 = document.querySelector("h1");
console.log(h1);
let button = document.querySelector("button");

// function
function changeColor(){
    h1.style.color = "red";
    h1.style.backgroundColor = "black";
    h1.style.fontSize = "8rem";
}

// addEveventListener



button.addEventListener('click',changeColor);

// create and append elements to DOM
// let p = document.querySelector("p");


// let arr = [1,2,3,4];

// for(let element of arr){
//     let h2 = document.createElement("h2");
//     h2.textContent = element;
//     document.body.appendChild(h2);
// }

// let arr = [
//     name =  "Shubham",
//     roll = 23,
//     subject =  "Math"
// ];
// for(let element of arr){
//     let h1 = document.createElement("h1");
//     h1.textContent = element;
//     document.body.appendChild(h1);
// }
// // another method by using innerHTML
// let ar1 = [1,2,3];
// for(let element of ar1){
//     document.body.innerHTML = document.body.innerHTML + `<h2>${element}</h2>`
// Create the table

// let tbody = document.querySelector('tbody');

// function getUsers(){
//     fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET'})
//     .then(res=>res.join())
//     .then(usersData=>displayAsTable(usersData))
//     .catch(err=>console.log(err));
    
// }


// function displayAsTable(users){
//     for(let user of users){
//         tbody.innerHTML = tbody.innerHTML+`<tr>
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.username}</td>
//         <td>${user.email}</td>
//         </tr>`
//         }
// }

// fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"})
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log("Error",err));
let input1 = document.querySelector("#inp1");
let input2 = document.querySelector("#inp2");
let addBut = document.querySelector("#add");
let subBut = document.querySelector("#sub");
let divBut = document.querySelector("#div");
let mulBut = document.querySelector("#mul");
let result = document.querySelector(".result");


aaddBtn.addEventListener('click', ()=>{
let inp1 = Number(inp1.value);
let inp2 = Number(inp2.value);
document.body.textContent = inp1+inp2;
})