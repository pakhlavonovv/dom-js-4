// Task 1

// function findNumbers(obj) {
//     let arr = [{ value: obj, step: 1}]
//         let result = []
//         for(let i = 0; i < arr.length; i++){
//             const {value, step} = arr[i]
//             for(let key in value){
//                 if(typeof value[key] === 'object'){
//                     arr.push({value: value[key], step: step + 1})
//                 } else if(typeof value[key] === 'number'){
//                     result.push(value[key])
//                 }
//             }
//         }
//         return result
// }

// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(findNumbers(obj)); // Output: [1, 2, 3, 4]

// Task 2

// function separateEvenOdd(arr) {
//     let evens = []
//     let odds = []
//     arr.forEach(element => {
//         if(element % 2 == 0){
//             evens.push(element)
//         } else {
//             odds.push(element)
//         }
//     });
//     console.log({evens, odds})
//  }
 
//  // Test case
//  console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }

// Task 3

// function isPrime(num) {
//     if (num <= 1) return false; 
//     if (num === 2) return true; 
//     if (num % 2 === 0) return false; 
    
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function findPrimeNumbers(arr) {
//     let primes = [];
//     arr.forEach(num => {
//         if (isPrime(num)) {
//             primes.push(num);
//         }
//     });
//     return primes;
// }

// // Test case
// console.log(findPrimeNumbers([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]

// Task 4

// function rotateArray(arr, k) {
//     k = k % arr.length; 
//     return arr.slice(-k).concat(arr.slice(0, -k));
// }

// // Test case
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// Task 5

// function isPalindrome(num) {
//     let str = num.toString();
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// function findPalindromeNumbers(arr) {
//     return arr.filter(isPalindrome);
// }

// // Test case
// console.log(findPalindromeNumbers([121, 123, 454, 789, 101])); // Output: [121, 454, 101]

// Task 6

// function allElementsEqual(arr) {
//     return arr.every(val => val === arr[0]);
// }

// // Test case
// console.log(allElementsEqual([1, 1, 1, 1])); // Output: true
// console.log(allElementsEqual([1, 2, 1, 1])); // Output: false

// Task 7

// function isUniqueSet(arr) {
//     let seen = new Set();
//     for (let num of arr) {
//         if (seen.has(num)) {
//             return false;
//         }
//         seen.add(num);
//     }
//     return true;
// }

// // Test case
// console.log(isUniqueSet([1, 2, 3, 4])); // Output: true
// console.log(isUniqueSet([1, 2, 3, 3])); // Output: false

// Task 8

// function sqrtElements(arr) {
//     arr.forEach(element => {
//        console.log([Math.sqrt(element)]) 
//     });
//  }
 
//  // Test case
//  console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]

// Task 9

// function indexOfMax(arr) {
//     if (arr.length === 0) return -1;
//     const max = Math.max(...arr);
//     return arr.indexOf(max);
// }
 
//  // Test case
//  console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2

// Task 10

// function uniqueWords(s) {
//     let words = s.split(' ').filter(word => word.length > 0);
//     let wordCount = {};
//     words.forEach(word => {
//         wordCount[word] = (wordCount[word] || 0) + 1;
//     });    
//     let unique = [];
//     for (let word of words) {
//         if (wordCount[word] === 1) {
//             unique.push(word);
//             wordCount[word] = 0;
//         }
//     }
    
//     return unique;
// }

// // Test case
// console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
// console.log(uniqueWords("hello world hello")); // Output: ["world"]

// Task 11

// function swapFirstLast(s) {
//     return s.split(' ').map(word => {
//         if (word.length <= 1) return word; // Birta harfli so'zlarni o'zgartirmaymiz
//         const firstChar = word[0];
//         const lastChar = word[word.length - 1];
//         const middle = word.slice(1, -1);
//         return lastChar + middle + firstChar;
//     }).join(' ');
// }

// // Test case
// console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
// console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo"

