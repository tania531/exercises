var result = createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]

function createArrayFromAtoB(start, end){
  var array = [];

  for (var i = start; i <= end; i++){
    array.push(i);
  }
  return array;
}
