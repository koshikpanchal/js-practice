const arr = [1, 2];

function countUnique(array) {
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

const number = countUnique(arr);
console.log(number);
