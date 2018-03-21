function isEven(num) {
  if(num === 0) return true;
  if(num === 1) return false;

  return (num < 0) ? isEven(num + 2) : isEven(num - 2);
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(100));
console.log(isEven(101));

console.log(isEven(-1));