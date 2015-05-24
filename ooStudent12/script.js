
var bob = new Student();
bob.addGrade(89);
bob.addGrade(53);
bob.addGrade(92);
console.log('average is: ',bob.average()); // 78

function Student(){
  this.name;
  this.grades = [];
  this.ave;
  this.addGrade = function(score){
    this.grades.push(score);
  };

  this.average = function(){
    var total = this.grades.reduce(function(a,c){
      return a + c;
    });
    this.ave = total/this.grades.length;
    return this.ave;
  };
}
