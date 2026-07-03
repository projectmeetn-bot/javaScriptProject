// Write a JavaScript program to find the average of all elements in an array.

const arr = [12, 45, 7, 89, 23, 56];

function calculateAverage(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

let result = calculateAverage(arr);
console.log(result);
