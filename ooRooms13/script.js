
var home = new House();
home.addRoom(3, 5); // the dimensions in feet (length, width)
home.addRoom(8, 2);
home.addRoom(3, 4);
console.log(home.sqft()); // 43

function House() {
  this.length;
  this.width;
  this.rooms = [];

  this.addRoom = function(length, width){
    this.length = length;
    this.width = width;
    var area = this.length * this.width;
    console.log('area: ', area );
    this.rooms.push(area);
    console.log('this.rooms: ', this.rooms );
  };

  this.sqft = function(){
    return this.rooms.reduce(function(a,c){
      return a + c;
    });
  }
}
