// Write a JavaScript program to check whether all elements of one array (arr2) exist in another array (arr1).

const arr1 = [12, 45, 7, 89, 23];
const arr2 = [45, 7, 99];

function subsetCheck(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let found = false;

    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      return false;
    }
  }

  return true;
}

const result = subsetCheck(arr1, arr2);
console.log(result);
