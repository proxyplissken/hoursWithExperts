let arrays = [[1, 2, 3], [4, 5], [6]];

let result = arrays.reduce((acc, val) => {
  return acc.concat(val);
}, []);

console.log(result);