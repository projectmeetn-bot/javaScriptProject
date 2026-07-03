// Write a JavaScript program to find the common elements between two arrays.

const arr1 = [12, 7, 89, 23];
const arr2 = [45, 89, 100, 7];

function intersection(arr1, arr2) {
  let inter = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        inter.push(arr1[i]);
      }
    }
  }

  return inter;
}

const result = intersection(arr1, arr2);
console.log(result);
