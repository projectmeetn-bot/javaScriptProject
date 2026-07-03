// Rotate an Array Right by One Position

const arr = [12, 45, 7, 89, 23, 56];

function rotateElement(arr) {
  let last = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
  return arr;
}

const resultl = rotateElement(arr);
console.log(resultl);
