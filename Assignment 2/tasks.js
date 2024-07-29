// Task 1: Use map to convert an array of numbers into an array of their cubes.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.
function cubeNumbers(numbers) {
  return numbers.map(function (number) {
    return number ** 3;
  });
}
const numbersArray = [1, 2, 3];
const cubesArray = cubeNumbers(numbersArray);
console.log(cubesArray);

// Task 2: Use reduce to find the sum of all elements in an array.
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all elements.
function sumArray(numbers) {
  return numbers.reduce(function (sum, currentValue) {
    return sum + currentValue;
  }, 0);
}
const arr = [1, 2, 3];
const sum = sumArray(arr);
console.log(sum);

// Task 3: Use filter to find all prime numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers.
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
function filterPrimes(numbers) {
  return numbers.filter(isPrime);
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbersArray = filterPrimes(array);
console.log(primeNumbersArray);

// Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and calculates the average of the squares of all odd numbers in the array.
function averageOfSquaredOdds(numbers) {
  const oddNumbers = numbers.filter(function (number) {
    return number % 2 !== 0;
  });
  const squaredOddNumbers = oddNumbers.map(function (number) {
    return number ** 2;
  });
  const sumOfSquaredOddNumbers = squaredOddNumbers.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue;
  },
  0);
  const average =
    squaredOddNumbers.length > 0
      ? sumOfSquaredOddNumbers / squaredOddNumbers.length
      : 0;
  return average;
}
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = averageOfSquaredOdds(Array);
console.log(average);

// Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
// Write a JavaScript function that takes an array of strings as input and returns the longest string from the array.
function longestString(strings) {
  return strings.reduce(function (longest, current) {
    return current.length > longest.length ? current : longest;
  }, "");
}
const stringsArray = ["ronaldo", "neymar", "messi"];
const longest = longestString(stringsArray);
console.log(longest);

// Task 6: Use map to capitalize the first letter of each word in a sentence.
// Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
const sentence = "hi my name is atharva";
const capitalSentence = capitalizeFirstLetter(sentence);
console.log(capitalSentence);

// Task 7: Use filter to find all students who passed the exam.
// Write a JavaScript function that takes an array of student objects (with properties name and score) as input and returns an array containing only the students who passed the exam (scored 60 or above).
function passedStudents(students) {
  return students.filter(function (student) {
    return student.score >= 60;
  });
}
const students = [
  { name: "Neymar", score: 50 },
  { name: "Ronaldo", score: 95 },
  { name: "Messi", score: 85 },
  { name: "Benzema", score: 45 },
  { name: "Ramos", score: 95 },
];
const passed = passedStudents(students);
console.log(passed);

// Task 8: Create a Private Counter for Multiple Instances
// Write a closure-based function that creates multiple instances of a private counter. Each instance should have its own count, independent of the others.
function createInstanceCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
console.log(counter2()); // 2

// Task 9: Create a Promise-Based Calculator
// Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.
function calculator(a, b, operation) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return reject("Invalid");
    }
    switch (operation) {
      case "add":
        resolve(a + b);
        break;
      case "subtract":
        resolve(a - b);
        break;
      case "multiply":
        resolve(a * b);
        break;
      case "divide":
        if (b === 0) {
          reject("Division by zero error.");
        } else {
          resolve(a / b);
        }
        break;
      default:
        reject(
          "Invalid"
        );
    }
  });
}
calculator(10, 5, "add")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

calculator(10, 5, "subtract")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

calculator(10, 5, "multiply")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

calculator(10, 0, "divide")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Task 10: Calculate Total Score
// Write a JavaScript function that takes an array of objects, where each object contains a property score, and uses the forEach method to calculate the total score of all the objects in the array. Return the total score as the output.
function totalScore(objectsArray) {
    let total = 0;
    objectsArray.forEach(function(object) {
        total += object.score;
    });
    return total;
}



