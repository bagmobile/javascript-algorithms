const a = [14, 2, 15, 3, 6, -1, 0, -13];

function sort(arr) {

  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - i; j += 1) {
      if (arr[j + 1] < arr[j]) {
        // eslint-disable-next-line no-param-reassign
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function sortRecursive(arr, i = 0) {

  for (let j = 0; j < arr.length - i; j += 1) {
    if (arr[j + 1] < arr[j]) {
      // eslint-disable-next-line no-param-reassign
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  if (i < arr.length) {
    return sortRecursive(arr, i + 1);
  }
  return arr;
}

console.log(sort(a));
console.log(sortRecursive(a));
