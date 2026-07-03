// Write a JavaScript program to find the largest element in an array.

const num = [12, 45, 7, 89, 23, 56];

function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let result = findLargest(num);
console.log(result);
