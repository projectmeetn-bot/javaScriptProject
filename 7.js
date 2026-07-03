// Write a JavaScript program to count the number of even and odd elements in an array.

const arr = [12, 45, 7, 89, 23, 56, 10, 15];

function findEvenOdd(arr) {
  if (arr.length === 0) {
    return null;
  }

  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return {
    even: even,
    odd: odd,
  };
}

const result = findEvenOdd(arr);
console.log(`Even : ${result.even}\nOdd : ${result.odd}`);
