function countBs(word){
  let count = 0;

  for(let i=0; i<word.length; i++) {
    if(word[i] === 'B') count++;
  }

  return count;
}

console.log(countBs("BBig"));
console.log(countBs("asdfasdfsaf"));
console.log(countBs("BBasdf BBB"));

function countChar(word, char){
  let count = 0;

  for(let i=0; i<word.length; i++) {
    if(word[i] === char) count++;
  }

  return count;
}

console.log(countChar("kakkerlak", "k"));
