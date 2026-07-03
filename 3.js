// Write a JavaScript program to find the second largest element in an array.

const num = [12, 45, 7, 89, 23, 56];

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let result = findSecondLargest(num);
console.log(result);
