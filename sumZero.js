const a = [-5, -4, -2, 1, 3, 4];

function sumZero(arr) {
  for (let number of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (number + arr[j] === 0) {
        return [number, arr[j]];
      }
    }
  }
}

const pair = sumZero(a);
console.log(pair);
