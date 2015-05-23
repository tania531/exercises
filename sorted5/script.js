var result = find3LargestSorted("2, 4, 1, 9, 8, 10, 3, 16, 22, 8");
console.log(result); // [22, 16, 10]

function find3LargestSorted(str){
var  arr = str.split(",");
   console.log('arr: ', arr);
   arr.sort(function(a, b) {
    return b - a;
  });

  arr = arr.slice(0,3);

  return arr;
}
