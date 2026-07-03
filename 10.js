// Write a JavaScript program to merge two arrays without using concat().

const arr1 = [12, 45, 7];
const arr2 = [89, 23, 56];

// function mergeArray(arr1, arr2) {
//   let newArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArray.push(arr1[i]);
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     newArray.push(arr2[j]);
//   }
//   return newArray;
// }
// const result = mergeArray(arr1, arr2);
// console.log(result);

function mergeArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}
const result = mergeArray(arr1, arr2);
console.log(result);
