var result1 = isPalindrome('hello');
console.log('false result1: ', result1); // false
var result2 = isPalindrome('abba');
console.log('true result2: ', result2); // true


function isPalindrome(string){
  if(string === string.split("").reverse().join("")){
    return true;
  } else {
    return false;
  }
}
