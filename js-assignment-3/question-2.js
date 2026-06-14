// Q2. Write a JavaScript program to get the last n elements of an array, where n can be any positive number.
// Example:
// For the array [7, 9, 0, -2] and n = 3, print:
// [9, 0, -2]


let arr = [54, 34, 53, 34, 12, 75];

let n = 3;

let ans = arr.slice(arr.length - n);
console.log(ans);