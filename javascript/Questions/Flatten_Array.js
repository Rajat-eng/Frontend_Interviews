function flattenArray(input) {
  let output = [];
  flattenArrayHelper(input, 1, output);
  return output;
}

function flattenArrayHelper(input, deep, output) {
  for (let value of input) {
    if (Array.isArray(value) && deep > 0) {
      flattenArrayHelper(value, deep - 1, output);
    } else {
      output.push(value);
    }
  }
}
let arr = [1, [2, 3, [4, 5], 6, 7], 8];

console.log(flattenArray(arr));
