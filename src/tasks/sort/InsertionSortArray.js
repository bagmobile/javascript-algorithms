const a = [4, 2, 5, 3, 6, -1, 0];

function sort(arr) {

  for (let i = 1; i < arr.length; i += 1) {
    let current = i;
    while (arr[current - 1] && arr[current - 1] > arr[current]) {
      // eslint-disable-next-line no-param-reassign
      [arr[current], arr[current - 1]] = [arr[current - 1], arr[current]];
      current -= 1;
    }
  }
  return arr;
}

console.log(sort(a));
