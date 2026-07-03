// // Write a JavaScript program to reverse an array without using reverse().

const arr = [12, 45, 7, 89, 23, 56];

// function reverseArray(arr) {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// }

// const result = reverseArray(arr);
// console.log(result);

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap arr[left] and arr[right]

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

const result = reverseArray(arr);
console.log(result);
