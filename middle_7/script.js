var middle = getMiddle("5, 6, 2, 6, 8");

function getMiddle(str){
  str = str.split(',');

  return str[(str.length % 2) +1];
}

console.log("middle: ", middle); // 2
