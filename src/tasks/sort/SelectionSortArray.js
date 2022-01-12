const a = [-10, 8, 3, 4, 1, -9, 5, 12];

const selectionSort = (arr) => {

  for (let i = 0; i < arr.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] <= arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // eslint-disable-next-line no-param-reassign
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort(a));
