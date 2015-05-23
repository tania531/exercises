function sum(arr){
 return arr.reduce(function(acc, curr){
    return acc + curr;
  });
}

var result = sum([3,7,8]);

console.log(result);
