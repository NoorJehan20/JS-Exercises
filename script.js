// Program 01: Write a program that returns your age in days (take age as an input).

function ageInDays(age) {
    const daysInYear = 365;
    const ageInDays = age * daysInYear;
    return ageInDays;
}

const userAge = prompt("Enter your age in years:");

// Converting the input to a number
const ageInYears = parseFloat(userAge);

if (!isNaN(ageInYears)) {
    const result = ageInDays(ageInYears);
    console.log(`Your age in days is approximately: ${result} days`);
} else {
    console.log("Invalid input. Please enter a valid number for age.");
}

// Program 02:Create a function that takes a number as an argument, increment it by +1 and returns the result (take number as an input).

function incrementNumber(inputNumber) {
    if (typeof inputNumber === 'number') {
        const result = inputNumber + 1;
        return result;
    } else {
        return "Invalid input. Please provide a valid number.";
    }
}

const input = +prompt("Enter a number");
const result = incrementNumber(input);
console.log(result);

//Program 03: Create a function that takes a number as an argument, decrement it by -1 and returns the result (take number as an input).

// function decrementNumber(inputNumber) {
//     if (typeof inputNumber === 'number') {
//         const result = inputNumber - 1;
//         return result;
//     } else {
//         return "Invalid input. Please provide a valid number.";
//     }
// }

// const input = +prompt("Enter a number");
// const result = decrementNumber(input);
// console.log(result); 

// Program 04: Create a function that takes a number as input and returns its square.

// function squareNumber(inputNumber) {
//     if (typeof inputNumber === 'number') {
//         // Calculate the square of the number
//         const result = inputNumber * inputNumber;
//         return result;
//     } else {
//         return "Invalid input. Please provide a valid number.";
//     }
// }

// const input = 4;
// const result = squareNumber(input);
// console.log(result);

// Program 05: Create a function that tells current time in y-m-d format.

function getCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
}

const currentTime = getCurrentTime();
console.log(currentTime);

// Program 06: Create a function that tells current date in H:I:S format.

// function getCurrentTime() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
//     const day = currentDate.getDate().toString().padStart(2, '0');
//     const formattedTime = `${year}-${month}-${day}`;

//     return formattedTime;
// }

// const currentTime = getCurrentTime();
// console.log(currentTime); 

// Program 07: Write a function that takes first &amp; last name and then it greets
// the user using his full name.

function greetUser() {
    var firstName = prompt('Enter your first name:');
    var lastName = prompt('Enter your last name:');
    var fullName = firstName + ' ' + lastName;

    // Greeting user
    var greeting = 'Hello, ' + fullName + '! Welcome!';
    alert(greeting);
}
greetUser();

// Program 08: Write a function that takes three arguments num1, num2 &amp;
// operator &amp; compute the desired operation. Return and show
// the desired result in your browser.

function performOperation() {
    // Get input from the user
    var num1 = parseFloat(prompt('Enter the first number:'));
    var num2 = parseFloat(prompt('Enter the second number:'));
    var operator = prompt('Enter the operator (+, -, *, /):');

    // Check if the input is valid
    // if (isNaN(num1) || isNaN(num2)) {
    //     alert('Invalid input. Please enter valid numbers.');
    //     return;
    // }

    // Perform the desired operation
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('Cannot divide by zero. Please enter a non-zero second number.');
                return;
            }
            break;
        default:
            alert('Invalid operator. Please enter a valid operator (+, -, *, /).');
            return;
    }
    alert('Result of ' + num1 + ' ' + operator + ' ' + num2 + ' is: ' + result);
}
performOperation();

// Program 09: Write a function that take start and end number as inputs &amp;
// display counting in your browser.

function displayCounting(start, end) {
    // Ensure start and end are valid numbers
    if (isNaN(start) || isNaN(end)) {
        console.error('Invalid input. Please enter valid numbers.');
        return;
    }

    // Display counting in the browser
    document.write('<p>Counting from ' + start + ' to ' + end + ':</p>');
    document.write('<ul>');

    for (let i = start; i <= end; i++) {
        document.write('<li>' + i + '</li>');
    }

    document.write('</ul>');
}
displayCounting(25, 50);

// Program 10: Write a JavaScript function that reverse a number.

function reverseNumber(number) {
    const numString = number.toString();
    // Use the split, reverse, and join methods to reverse the string
    const reversedString = numString.split('').reverse().join('');
  
    // Convert the reversed string back to a number
    const reversedNumber = parseInt(reversedString, 10);
  
    return reversedNumber;
}
  const originalNumber = 573589;
  const reversedResult = reverseNumber(originalNumber);
  
  console.log(`Original Number: ${originalNumber}`);
  console.log(`Reversed Number: ${reversedResult}`);

//   Program 11: Write a JavaScript function that checks whether a passed
//   string is palindrome or not?

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
let testString1 = "racecar";
console.log(isPalindrome(testString1));

// Program 12: Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.

function capitalizeFirstLetterOfEachWord(str) {
    let words = str.split(' ');

    // Capitalize the first letter of each word
    let capitalizedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    let result = capitalizedWords.join(' ');
    return result;
}
let inputString = "the quick brown fox";
let outputString = capitalizeFirstLetterOfEachWord(inputString);
console.log(outputString);

// Program 13: Write a function that accepts any number of arguments &amp;
// find largest of the number.

function findLargestNumber(...numbers) {
    // Check if at least one number is provided
    if (numbers.length === 0) {
        console.log('No numbers provided.');
        return;
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    console.log('The largest number is:', largest);
}
findLargestNumber(45, 60, 50, 55, 27);

// Program 14: Write a function that writes variable length arguments list in your browser

function writeToBrowser() {
    var numArgs = arguments.length;
  
    for (var i = 0; i < numArgs; i++) {
      document.write(arguments[i] + "<br>");
    }
  }
writeToBrowser("Hello", "NJ", 456, true);

// Program 15: Write a switch statement with the following condition: If the variable age is greater than 18, output "Old enough", otherwise output "Too young".

var age = parseInt(prompt("Enter your age:"));

switch (true) {
  case age > 18:
    console.log("Old enough");
    break;
  default:
    console.log("Too young");
    break;
}

// Program 16: Write a function that receives an array  returns the sorted array.

function sortArray(arr) {
    // Use the sort() method to sort the array
    return arr.sort(function(a, b) {
      // The comparison function should return a negative, zero, or positive value
      // to determine the order of elements
      return a - b;
    });
  }
const unsortedArray = [4, 2, 8, 1, 6];
const sortedArray = sortArray(unsortedArray);

console.log(sortedArray);

// Program 17: Write a function that takes numbers array, sums its elements
// returns the sum
  
function sumArray(numbers) {
    // Use the reduce method to sum up the elements of the array
    // The initial value of the accumulator (sum) is set to 0
    const sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  
    return sum;
  }
const numbersArray = [6, 2, 1, 7, 5];
const sum_result = sumArray(numbersArray);
  
console.log(sum_result); 

// Program 18: Write a function that simulates a dice returns a random
// dice value.

function rollDice() {
    // Generate a random number between 1 and 6
    const diceValue = Math.floor(Math.random() * 6) + 1;
    return diceValue;
}

const dice_result = rollDice();
console.log(dice_result); 
  
  