//  -----Functions-----


//Changed to comment to reuse and move function to question 10 below
// /**
//  * Calculates the average of numbers in an array
//  * @param {array} array - An array of numbers
//  * @returns {number} - The average of numbers in the array
//  */
// function calculateAverage(array) {
//     let average = 0;
//     for (let index = 0; index < array.length; index++) {
//         let currentNumber = array[index];
//         average += currentNumber;
//         }
//         average = average / array.length;
//         return average;
// }
//calculateAverage function made to practice using and invoking functions
//let averageTest = [2, 3, 3, 5, 7, 10]; //sum = 30, average = 5
//console.log(`Test average = ${calculateAverage(averageTest)}`);


/**
 * Calculates the sum of all elements in the given array.
 * @param {number[]} array - The input array containing numbers.
 * @returns {number} - The sum of all elements in the array.
 */
function addSum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        }
        return sum
}



//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//      a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//          -Do not use numbers to reference the last element, find it programmatically.
//          -ages[7] - ages[0] is not allowed!
//      b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//      c. Use a loop to iterate through the array and calculate the average age.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a.

console.log(`1a. last element - first element = ${ ages[ages.length - 1] - ages[0] }`);

//b.

console.log('1b. Length before adding element ' + ages.length);
ages.push(31);
console.log(`    last element - first element = ${ ages[ages.length - 1] - ages[0] }`);
console.log('    Length after adding element ' + ages.length);


//c.

console.log(`1c. Average = ${calculateAverage(ages)}`);

// long form would look something like this
// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
// }
// let averageAge = sum / ages.length;
// console.log("Average age: ", averageAge);


//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//      a. Use a loop to iterate through the array and calculate the average number of letters per name.
//      b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log('2. ' + names.join(' ')); //Takes advantage of join function using a space as the seperator parameter



// console.log('-------------------');
// //This method is unnecessarily long and messy

// let namesString = ''; //Variable to hold empty string

// // for loop used to loop through array and concatenate inside of empty string variable
// for(i = 0; i < names.length; i++) { 
//     namesString += names[i]; }
//       if(i !== names.length -1) //Adds space after each array element except for last
//       namesString += ' ';
//   }
// console.log(namesString);



//This was used to study and reference, but I dont fully understand it so it was discarded
//Comments were added by myself to break down the function in to more understandable actions
//The original writers variable declarations are too vague to be good

// let a = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];     // array to be worked on. changed from original to names from above problem
// let s = '';              //empty string container
// for (let s2 of a) {      // for/of loop to grab each element of the array
//    if (s != '') {        //  ??inequality check if s is not string??
//       s += ' ';          //when if block executes, adds a space to s container
//    }
//    s += s2;              //updates container to add new variable element from loop
// }
// console.log(s);          //logs result after loop finishes


//3. How do you access the last element of any array?


//Use array.length minus 1
let lastElement = ['first', 'second', 'middle', 'extra', 'last'];
console.log('3. The last array element is - ' + lastElement[lastElement.length - 1]);



//4. How do you access the first element of any array?

//Use array index number of 0
let firstElement = ['first', 'second', 'middle', 'extra', 'last'];
console.log('4. The first array element is - ' + firstElement[0]);




//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//      let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//      let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = []; //container array for name length in numbers
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); //pushes each number to the new array using names[i].length to grab the length of each individual name
    //console.log(nameLengths); //Test code for name length array loop
}
console.log('5. ' + nameLengths); //logs the new array to console



//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let nameLengthSum = 0;  //container
for (let i = 0; i < nameLengths.length; i++) {
    nameLengthSum += nameLengths[i]; //loops through the array and adds each value to the total in the container
}
console.log('6. ' + nameLengthSum);


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').



let repeatTest = 'test';  //variable used for testing the following function
/**
 * Creates string consisting of a word repeated n times
 * @param {string} word Word to be repeated
 * @param {number} n Number of times to repeat word
 * @returns String of words repeated n times without spacing
 */
function wordMultiplier(word, n) {
    let string = '' //empty string container
    for (let i = 0; i < n; i++) {
        string += word;
    }
    return string;
}
console.log('7. ' + wordMultiplier(repeatTest, 2));




//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

let fullName = (firstName, lastName) => firstName + ' ' + lastName; //single line arrow function that concatenates the given inputs with a space in the middle

let firstName = 'Brandon'; //variable declarations
let lastName = 'Davis';
console.log(`8. ${ fullName(firstName, lastName )} `);




//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let array10 = [10, 10, 10, 10, 10];  //array to test expected outcome of following function

/**
 * Determines if the sum of numbers in an array is greater than 100
 * @param {array} array - An array of numbers
 * @returns {boolean} - True if the sum of numbers is greater than 100, false otherwise
 */
let isSumGreaterThan100 = array => {
    let sumOfArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    }
    return sumOfArray > 100;
} 

// console logs use addSum from function list at the top of the file to dynamically write console logs
// addSum was added after which is why it is not also used in the question 9 function.
// One benefit of this method is making the isSumGreaterThan100 function independent of other functions and self reliant

console.log('9a. ' + addSum(ages) + ' is greater than 100: ' + isSumGreaterThan100(ages));
console.log('9b. ' + addSum(array10) + ' is greater than 100: ' + isSumGreaterThan100(array10));
//console.log(`1c. Average = ${calculateAverage(ages)}`); //Copy paste from earlier solution

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

/**
 * Calculates the average of numbers in an array
 * @param {array} array - An array of numbers
 * @returns {number} - The average of numbers in the array
 */
function calculateAverage(array) {
    let average = 0;
    for (let index = 0; index < array.length; index++) {
        let currentNumber = array[index];
        average += currentNumber;
        }
        average = average / array.length;   //updates average to equal sum divided by number of additions
        return average;                     //returns average to be accessible
}

let questionTenArray = [1,2,34,56,45,34,23,64];
console.log(`10. The average is: ${calculateAverage(questionTenArray)}`);
// Sum: 259, Number of inputs: 8, Expected: 32.375


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater 
//than the average of the elements in the second array.

//This version is more accurate to the exact wording of the question which only asks that true be returned but not false
//An else statement could be added to return a false, but would be unnecessary in lieu of better and more concise methods

// function compareAverage (arr1, arr2) {
//     let average1 = calculateAverage(arr1);
//     let average2 = calculateAverage(arr2);
//     if (average1 > average2) {
//         return true
//     }
// }

/**
 * Compares the average of numbers between two arrays
 * @param {array} array1 - The first array of numbers
 * @param {array} array2 - The second array of numbers
 * @returns {boolean} - True if the average of numbers in array1 is greater than array2, false otherwise
 */
function compareAverage (arr1, arr2) {
    let average1 = calculateAverage(arr1);
    let average2 = calculateAverage(arr2);
    return (average1 > average2);
}
let arr1 = [55,55,55,55,55]; //Average = 55
let arr2 = [1,1,1,1,1];      //Average = 1
console.log(`11a. The average of array 1 is greater than array 2: ${compareAverage(arr1, arr2)}`); //Expected = True
console.log(`11b. The average of array 2 is greater than array 1: ${compareAverage(arr2, arr1)}`); //Expected = False



//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// Variables for expected result true
let isHotOutside = true;
let moneyInPocket = 10.51;

// Variables for expected result false
let falseHotOutside = false;
let noMoneyInPocket = 1.27;

/**
 * Determines if a person will buy a drink based on the temperature and amount of money
 * @param {boolean} isHotOutside - Indicates if it's hot outside (true or false)
 * @param {number} moneyInPocket - The amount of money in pocket (in dollars)
 * @returns {boolean} - True if it's hot outside and moneyInPocket is greater than 10.50, false otherwise
 */
function willBuyDrink(isHotOutside, moneyInPocket) {
    return (isHotOutside === true && moneyInPocket > 10.5);  //uses strict equality `===` to be more predictable as well as and operator `&&` to make sure 2 demands are met
}

console.log(`12a. I will buy a drink ${ willBuyDrink(isHotOutside, moneyInPocket)}`);
console.log(`12b. I will buy a drink ${ willBuyDrink(falseHotOutside, noMoneyInPocket)}`);


//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

/*
Coin counters are very common even with the existence of credit and debit cards. Not everyone wants to do the extra math or even knows how.
Some people don't have time to visit a bank, but still want to know how much money they have on hand.
This function would allow them to count the number of coins which takes much less time and be given the amount they do want.
This is also a very simple calculation that can fit on even the weakest computers which makes building an automated counter possible.
*/

let pennies = 27;   // 0.27
let nickels = 3;    // 0.15
let dimes = 7;      // 0.70
let quarters = 16;  // 4.00
                    // 5.12 Total expected

/**
 * Takes number of each coin from smallest to largest base value and outputs total as monetary value
 * @param {number} pennies Number of Pennies
 * @param {number} nickels Number of Nickels
 * @param {number} dimes Number of Dimes
 * @param {number} quarters Number of Quarters
 * @returns Returns sum of all as monetary value
 */
function coinCounter (p, n, d, q) {
    let penny = (p * 0.01);
    let nickel = (n * 0.05);
    let dime = (d * 0.10);
    let quarter = (q * 0.25);
    return (penny + nickel + dime + quarter).toFixed(2);
}
console.log(`13a. Total amount of money: ${ coinCounter(pennies, nickels, dimes, quarters) }`);
console.log(`13b. Test to show 2 decimal places ${coinCounter(0,0,0,4)}`);


