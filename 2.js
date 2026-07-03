// Write a JavaScript program to find the smallest element in an array.

const num = [12, 45, 7, 89, 23, 56];

function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let result = findSmallest(num);
console.log(result);
