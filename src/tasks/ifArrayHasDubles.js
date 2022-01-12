const a = [0, 1, 4, 4, 3];

const hasDuplicates = (arr) => {

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(hasDuplicates(a));
