// Write a JavaScript program to find the most frequent element in an array.

const arr = [12, 45, 12, 7, 12, 45, 12];

function countFre(arr) {
  let fre = {};
  let mostFrequency = 0;
  let mostFrequentElement;

  // Count frequency
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in fre) {
      fre[arr[i]]++;
    } else {
      fre[arr[i]] = 1;
    }
  }

  // Find the element with maximum frequency
  for (let key in fre) {
    if (fre[key] > mostFrequency) {
      mostFrequency = fre[key];
      mostFrequentElement = Number(key);
    }
  }

  return {
    frequency: fre,
    mostFrequentElement,
    mostFrequency,
  };
}

const result = countFre(arr);
console.log(result);
