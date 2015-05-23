function sum(arr){
  arr = arr.split(":");
  console.log("arr: ", arr);
 return arr.reduce(function(acc, curr){
    return acc*1 + curr*1;
  });
}

var result = sum("2:7:1:3");

console.log(result);
