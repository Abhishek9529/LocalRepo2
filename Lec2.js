// coments in js 
// this is single line comment 
/*
this 
is
multiline comment
*/

// operator in js 
// = - * \ 
//  use of operator 
// let a = 10;
// let b = 20;
// console.log(`value of a : ${a}`);
// console.log(`value of a : ${b}`);
// console.log(`addition of both values : ${a + b}`);
// console.log(`subtraction of both values : ${a - b}`);
// console.log(`multiplication of both values : ${a * b}`);
// console.log(`division of both values : ${a / b}`);


//Assignment operator  : =, +=, -=, *=, %=, **=
// let a = 10;
// let b = 20;
// console.log(`value of a : ${a}`);
// console.log(`value of a : ${b}`);
// console.log(b = a);

// console.log(a += b);
// console.log(a *= b);
// console.log(a %= b);
// console.log(a **= b);

// let a = 10;
// let b = 20;
// let c = "10";
// console.log(`value of a : ${a}`);
// console.log(`value of b : ${b}`);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a != b);
// console.log(a === c);
// console.log(a !== c);



// logical operator : &&, ||, !
// let a = 10;
// let b = 20;
// let c = "10";
// console.log(`value of a : ${a}`);
// console.log(`value of b : ${b}`);
// console.log(a < b && a == c);
// console.log(a > b || a == c);



// Conditional Statements
// if statements
// let age = 13 ;
// if (age < 18){
//     console.log("you not eligible for voting");
// }


// if -else
// let num = 11;
// if (num % 2 == 0){
//     console.log(`${num} is Even Number`);
// }
// else {
//     console.log(`${num} is Odd Number`);
// }


//  if else if else
// let num = -8;
// if (num < 0){
//     console.log(`${num} is Negitive Number`);
// }
// else if (num == 0){
//     console.log(`${num} is Zero`);
// }
// else {
//     console.log(`${num} is Positive Number`);
// }


// Ternary Operator
// let age = 27;
// age > 18 ? "adult" : "not adult";


// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is
//  a multiple of 5 or not.

// let num = parseInt(prompt("Enter a Number"));
// if (num % 5 === 0){
//      console.log(`${num} Multiple of 5`);
// }
// else {
//     console.log(`${num} Not  Multiple of 5`);

// }



// Qs2. Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, f 

let marks = parseInt(prompt("Enter Your Marks"));
if (marks >= 80 && marks <= 100){
    console.log('A');
}
else if (marks >= 70 && marks <= 89){
    console.log('B');
}
else if (marks >= 60 && marks <= 69){
    console.log('C');
}
else if (marks >= 50 && marks <= 59){
    console.log('D');
}

else if (marks >= 0 && marks <= 49){
    console.log('F');
}

else {
    console.log("Invalid Marks");
}