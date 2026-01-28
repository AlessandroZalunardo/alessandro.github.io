// function scope
var username = "Sandro";
var username = "Alex"; //redeclare
username = "Robert";

// block scope
let user2 = "david";
// let user 2 = "evan"; // redeclation not allowed for let
username2 ="Anna";
let user4;
user4 = "joey";


// Constant
const user3 = "Matteo";
//user3 = "paul"; // wont work because constant cant be changed 

//exercise 3 
let x = 15;
let y = 5;
let sum = x + y;// 20
let difference = x - y; //10
let product = x * y; console.log (x * y);//75 
let quotient = x / y; console.log (x / y); //3
let remainder = x % y; console.log (remainder)//0

// = x + 5;
x += 5;
x -= 3;
x *= 2;
console.log (x);//18


console.log (x == 8) //false
console.log (x != 5) //false
console.log (x === 18) //true
console.log (x >= 18) //false

let num = 4;
console.log (num == "4");
console.log (num === '4');
console.log (num == "4");
console.log (num === '4');

