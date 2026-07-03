// Write a JavaScript program to remove duplicate elements from an array without using Set.

const arr = [12, 45, 12, 7, 89, 45, 23, 56, 7];

// function removeDuplicate(arr) {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (newArray.includes(arr[i])) {
//     } else {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

// let result = removeDuplicate(arr);
// console.log(result);

function removeDuplicates(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isduplicate = false;

    for (let j = 0; j < newArray.length; j++) {
      if (arr[i] === newArray[j]) {
        isduplicate = true;
      }
    }
    if (!isduplicate) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let result = removeDuplicates(arr);
console.log(result);
