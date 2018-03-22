function arrayToList(array, list = {}){
  if(array.length === 0) return null;
  list.value = array.pop();
  list.rest = arrayToList(array);
  return list;
}

function listToArray(list, array = []) {
  if (list === null) return array;
  array.unshift(list.value);
  return listToArray(list.rest, array);
}

function prepend(list, val){
  return arrayToList([val], list);
}

let list = arrayToList([1,2,3])

console.log(list);

let array = listToArray(list);

console.log(array);

