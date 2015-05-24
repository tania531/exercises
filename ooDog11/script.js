var fido = new Dog('fido');
console.log(fido.bark()); // hi, my name is fido

function Dog(name){
  this.name = name;

  this.bark = function(){
    return "hi, my name is " + this.name;
  };
}
