// Write a JavaScript program to find the union of two arrays without duplicate elements.

const arr1 = [12, 45, 7];
const arr2 = [45, 89, 7, 23];

function union(arr1, arr2) {
  let unionArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!unionArray.includes(arr1[i])) {
      unionArray.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!unionArray.includes(arr2[j])) {
      unionArray.push(arr2[j]);
    }
  }
  return unionArray;
}
const result = union(arr1, arr2);
console.log(result);
