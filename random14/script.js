
var result = create10RandomNumbersBetween(3, 9);
console.log('result: ', result); // [4, 5, 4, 4, 7, 8, 9, 3, 3, 8]

function create10RandomNumbersBetween(a,z){
  var array10rand =[];
  for (var i = 0 ; i < 10 ; i++){
    array10rand.push(Math.floor(Math.random()*(z-a+1)+a));
  }
  return array10rand;
}
