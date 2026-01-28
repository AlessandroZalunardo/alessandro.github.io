
 

    // write a statement allowing adults to vote 
    
    // Voting example
    let age = 25;
    if (age >= 18) {
    console.log("You Can Vote!!!");
}

// Challenge: under 18
    age = 17;
    if (age < 18) {
        console.log("Can't Vote");
}

// Drinking example
    age = 21;
    if (age >= 21) {
        console.log("You can drink");
}

// Exercise 2: even or odd
    let number = 7;

    if (number % 2 === 0) {
         console.log("Even number");
}    else {
        console.log("Odd number");
}
 
// exercise 2 challange 
 
 
    let number2 = 20;      
    
    
    if (number2 % 5 === 0) {
        console.log("divisible by 5")
    } else {
        console.log ("not divisible by 5");
    }


//exercise 3

    let age3 =15;

    if (age3 < 13) {
        console.log ("child")
    } else if (age3 >= 13 && age3 < 18) { //if age is greater than 13 and less than 18 = teen
        console.log ("teenager");

    } else {
        console.log ("adult");
    }

//challenge 3

let age4 = 70;

if (age4 >= 65) {
    console.log ("senior")
}

 //excersise 4

    let age5 = 25;
    let status = (age5 >=18) ? "adult" : "minor";  //? asking if statement is true : checking if its false 
        console.log (status)


//excersise 4 challenge

let number6 = 5;

let result = (number6 > 0)
? "positive"// if number is greater than 0 use "positive"
: (number6 < 0) //if number is less than 0 use "negative or zero"
? "negative"
: "zero";

 console.log (result)


//exersise 5

let dayNumber =3;

switch (dayNumber) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log ("tuesday");
        break;
    case 3:
        console.log ("wednesday");
        break;
    case 4:
        console.log ("thursday");
        break;
    case 5:
        console.log ("friday");
        break;
    case 6:
        console.log ("saturday");
        break;
    case 7:
        console.log ("sunday");
        break;
    default:
        console.log ("invalid day");
}


//exercise 6

    if (age < 3) {
    console.log("Infant");
} 
    else if (age >= 3 && age <= 12) {
    console.log("Child");
} 
    else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} 
    else if (age >= 20 && age <= 64) {
    console.log("Adult");
}   else {
    console.log("Senior"); // age 65 and above
}

//exercise 7

    let number8 = 50; // change this value to test

    let result = (number8 > 0) 
    ? "Positive" 
    : (number8 < 0) 
        ? "Negative" 
        : "Zero";

        console.log(result);
