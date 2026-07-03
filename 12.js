// Write a JavaScript program to rotate an array left by one position.

const arr = [12, 45, 7, 89, 23, 56];

function rotateElement(arr) {
  let first = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
  return arr;
}

const resultl = rotateElement(arr);
console.log(resultl);
