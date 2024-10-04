// let a='10';
// let b=10;
// console.log(a===b)

// let person={
//     firstName:"Thiru",
//     Lastname:"yedaval",
//     city:"Chennai",
//     job:"Gamer",
//     fullName: function(){
//         return this.firstName+this.Lastname;
//     }
// }
// // person.add(College,"SJCE");
// person.college="SJCE";
// delete person.city;
// console.log(person);
let res=document.getElementById("na");
function greet(name){
    return `Hello There!, ${name}`;
}
let s=greet("Traveler");
res.textContent=s;

// call back function and higher order function

function cb(){
    console.log("call back function")
}
function greet(name,cb){
    cb();
    console.log(`my name is ${name}`);
    
}
greet("james",cb);