function reverseArray(input){
  let output = [];

  for (let i = input.length - 1; i >= 0; i--){
    output.push(input[i])
  }

  return output;
}

console.log(reverseArray(["A", "B", "C"]));


function reverseInPlace(input){
  for (let i = 0; i<input.length/2; i++){
    let end = input.length - 1- i;

    let temp = input[end];

    input[end] = input[i];
    input[i] = temp;
  }

  return input;
}

console.log(reverseInPlace(["A", "B", "C", "D", "E"]));



