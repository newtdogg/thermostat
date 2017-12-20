var Plane = function(){
  this.isFlying = false;
};

Plane.prototype.takeoff = function() {
  if (this.isFlying) {
    // throw "Plane is already flying";
    throw new Error("Plane is already flying");
  }
  this.isFlying = true;
};

Plane.prototype.land = function() {
if (this.isFlying === false) {
  throw new Error("Plane is already on ground");
}
  this.isFlying = false;
};
