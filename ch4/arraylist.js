function arrayToList(array, list = {}){
  if(array.length === 0) return null;
  list.value = array.shift();
  list.rest = arrayToList(array);
  return list;
}

function listToArray(list, array = []) {
  if (list === null) return array;
  array.push(list.value);
  return listToArray(list.rest, array);
}

function prepend(list, val){
  return {
    value: val,
    rest: list
  }
}

function nth(list, depth){
  if (depth === 0) return list.value;
  if (!list.rest) return undefined;
  return nth(list.rest, --depth);
}

let list = arrayToList([1,2,3])

console.log(list);

let array = listToArray(list);

console.log(array);

// console.log(prepend(list, 9));

console.log(nth(list, 2));
