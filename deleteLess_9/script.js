var result = deleteNumsLessThan(5, [8, 2, 4, 9, 6]);
console.log('result: ', result); // [8, 9, 6]

function deleteNumsLessThan(num, array){
var smalls = 0;
  // array.forEach(function(a, i){
  for(var i = 0; i < array.length; i++){
    if (array[i] < num){
      array.splice(i, 1);
      i--;
    }
  }

  return array;
}
