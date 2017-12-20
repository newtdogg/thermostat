const DEFAULT_CAPACITY = 10;

var Airport = function(capacity = DEFAULT_CAPACITY) {
  this.capacity = capacity;
  this.storedplanes = [];
  // this.weather = weather;
};

Airport.prototype.dockPlane = function(plane){

  if(this.storedplanes.length >= DEFAULT_CAPACITY){
    throw new Error("Airport is full!");
  }
  // if(this.weather.conditions === 'Stormy'){
  //   throw new Error("Plane can't land in stormy weather");
  // }
    this.storedplanes.push(plane);
    plane.isFlying = false;
    return true;
  };

Airport.prototype.launchPlane = function(plane){
  if(this.storedplanes.length <=0){
    throw new Error("Airport is empty!");
  }
    this.storedplanes.pop(plane);
    plane.isFlying = true;
    return true;

};
