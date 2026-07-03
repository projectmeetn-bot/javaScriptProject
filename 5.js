// Write a JavaScript program to find the sum of all elements in an array.

const arr = [12, 45, 7, 89, 23, 56, 1];

function calculateSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const result = calculateSum(arr);
console.log(result);
