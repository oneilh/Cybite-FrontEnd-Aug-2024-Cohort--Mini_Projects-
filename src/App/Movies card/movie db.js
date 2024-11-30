const movies = [
  {
    name: "Deadpool and Wolverine",
    genre: "Action and Fantasy",
    image:
      "https://resizing.flixster.com/OBCMbeYEWS5tI2QhErFskxKyEa0=/206x305/v2/https://resizing.flixster.com/mPJp85eApHd8ih9XF5E9d3-2LbM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxODlkZDE1LTQyYjUtNDg5ZS05NjZmLWMxZDk1YWZhN2E1ZC5qcGc=",
    alt: "Deadpool and Wolverine",
    rating: 7.8,
    director: "Abigail",
  },
  {
    name: "The Union movie image",
    genre: "Action and Fantasy",
    image:
      "https://resizing.flixster.com/h_VUrsfh-P-2_kRDCNA_sFntBWk=/206x305/v2/https://resizing.flixster.com/hYB41f7m0pUhlpCmBVCbsq9LOCo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc0OGY3MDJiLTUzMTMtNDNiNC05MjgyLTM3ZWRmMzYzNTI0Ny5qcGc=",
    alt: "The Union movie image",
    rating: 4.1,
    director: "Drink Water",
  },
  {
    name: "TRAP",
    genre: "Comedy, Horror",
    image:
      "https://resizing.flixster.com/g0rxvArZsZFsV8-gKSFPeNrmB-s=/206x305/v2/https://resizing.flixster.com/JMUezA59v3r50XvD34SELkqBnL0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZjYmVjMTllLTViOWYtNDY4NC04YWY5LTdmMGIxMTM1MWEwMS5qcGc=",
    alt: "Trap movie image",
    rating: 5.5,
    director: "Stones",
  },
  {
    name: "JACKPOT!",
    genre: "Comedy, Business",
    image:
      "https://resizing.flixster.com/_yC8AF-46nLToYSY6v606xkp7dE=/206x305/v2/https://resizing.flixster.com/cJ-ZXvAojFDjeYi1VwAIOX2CNSE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EwMDgwMjUwLTQwMGYtNGViMi05MTEyLTAzMDYxMTkxZTI4ZS5qcGc=",
    alt: "Jackpot! movie image",
    rating: 3.2,
    director: "Rat",
  },
];
export default movies;

// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function product(func1, func2){
//   return func1(20, 67) * func2(1000, 504)
// }

// console.log(product(add, subtract));

const fruits = ["banana", "pineapple", "apple", "strawberries"];
// for (let fruit of fruits) {
//   console.log(fruit + 'hello');
// }
// console.log('\n\n');
// for(let i = 0;  i< fruits.length; i++){
//   console.log(fruits[i])
// }

const evenNumbers = [0, 2, 4, 6, 8, 10];
function doSomething(number) {
  return number * 2;
}
const newEvenNumber = evenNumbers.map(doSomething);
console.log(newEvenNumber);

console.log("\n\n");

const findEvenNumber = evenNumbers.filter((number) => {
  return number >= 5;
});
console.log(findEvenNumber);
