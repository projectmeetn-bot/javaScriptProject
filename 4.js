// Find the Second Smallest Element in an Array

const arr = [-5, -2, -10];

function findSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] > smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

let result = findSmallest(arr);
console.log(result);
