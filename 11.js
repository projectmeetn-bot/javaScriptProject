// Write a JavaScript program to check whether two arrays are equal.

const arr1 = [12, 45, 7];
const arr2 = [12, 45, 7];

function checkEqualorNot(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const result = checkEqualorNot(arr1, arr2);
console.log(result);
