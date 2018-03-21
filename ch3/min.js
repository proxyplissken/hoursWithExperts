function minimum(a, b) {

  if(a > b){
    return b;
  }

  return a;
}

console.log(minimum(7,10));
console.log(minimum(10, 7));
console.log(minimum(7,7));