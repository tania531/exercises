
var result1 = randomlyPrintAname("bob sara bill lisa");
var result2 = randomlyPrintAname("bob sara bill lisa");
var result3 = randomlyPrintAname("bob sara bill lisa");
console.log(result1); // sara
console.log(result2); // lisa
console.log(result3); // sara

function randomlyPrintAname(names){
  names = names.split(" ");
  console.log('names: ', names);
  var ri = Math.floor(Math.random() * names.length);
  return names[ri];
}
