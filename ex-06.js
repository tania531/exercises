
// var result = getMiddle(5, 6, 2, 6, 8);
// console.log(result); // 2
var str = "5, 6, 2, 6, 8";

// function getMiddle(str){
  str = str.split('');
  str.forEach(function(s,i){
    // while (str.length % 2 === 0){
      return s[i/2];
    // }
  });
//   return str;
// }

console.log("str: ", str);
