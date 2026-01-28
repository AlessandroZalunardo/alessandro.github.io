//teacher example for a checking function 
   // let age =10;
   // if (age < 130{
     //   console.log ('child')
       // else if (age >= 13 && age < 18){
        //  console.log ('teen')
        // } else (age > 18){ //unecesary to put the condition because system has already checked 
        //  console.log ('adult')  
      
    

console.log ('TASK 1')
//Write an if / else if / else statement that checks a variable temperature and prints:
//"Cold" if temperature is below 10
//"Warm" if temperature is between 10 and 25
//"Hot" if temperature is above 25

let temperature = 18;
if (temperature < 10){
    console.log ("Cold");
} else if (temperature >= 10 && temperature < 20){
    console.log ("Warm");
} else {
    console.log ("Hot");
}

   
console.log ('TASK 1 (B)')
//Write a switch statement that prints the type of day based on a variable day:
//"Weekend" for "Saturday" or "Sunday"
//"Weekday" for "Monday" through "Friday"
//"Invalid day" for anything else


    let day = "hey";
    switch (day){
    case "monday":
    case "tuesday":   
    case "wednesday":
    case "thursday":
    case "friday":
        console.log ("Weekday");
        break;
        case "saturday":
        case "sunday":
        console.log ("Weekend");
        break;
    default:
         console.log ("Invalid day");
    }


console.log ('task 2')
for(let i = 10; i >= 1; i--){
    console.log (i,);
}

console.log ('task 2 (B)')
for(let i = 1; i <= 6; i++){
    console.log (i*4);
}
console.log ('task 2 (c) shopping list')
let anarray = ['milk', 'eggs', 'bread', 'apples', 'milk'];
for (let i = 0; i < anarray.length; i++){
    console.log (anarray[i]);
}

console.log ('task 3 user profil')
let user = {
    name: "Sandy",
    age: 20,
    city: "toronto",}

    for (const key in user){
        console.log (key, user[key]);
    }


console.log ('task (B)exam scores')
let scores = [85, 92, 78, 90, 88];
for (let i = 0; i < scores.length; i++){
 
        console.log (scores[i]);
}

//teacher example
// for (const element of scores) {
   // console.log (element);
// }

console.log ('task 4 stop at 7')

for (let i = 1; i <= 10; i++){
      console.log (i);

    if (i === 7)
        break;
    
}

console.log ('task 4 (B)')
//skip short words
//write a loop that prints only the words with 5 or more characters, skipping shorter words using continue.


let words = ['cat', 'elephant', 'dog', 'ant', 'alessandro', 'apple', 'banana'];

for (let i = 0; i < words.length; i++) { 
    if (words[i].length < 5) {
        continue;
    }
    console.log (words[i]);
}