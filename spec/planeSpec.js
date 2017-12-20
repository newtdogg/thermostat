describe("Plane", function(){
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("creation", function() {
    it('Is not flying when created', function(){
      expect(plane.isFlying).toBe(false);
    });
  });

  describe("taking off and landing", function() {
    it('Starts flying when the plane takes off', function(){
      plane.takeoff()
      expect(plane.isFlying).toBe(true);
    });
    it('Stops flying when the plane lands', function(){
      plane.takeoff()
      plane.land()
      expect(plane.isFlying).toBe(false);
    });
    it('Cannot takeoff if already in the air', function(){
      plane.takeoff()
      // expect(plane.takeoff()).toThrow("Plane is already flying");
      expect(function() { plane.takeoff() }).toThrowError("Plane is already flying");
    });

    it('Cannot land if already landed', function () {
      plane.takeoff()
      plane.land()
      expect(function() { plane.land() }).toThrowError("Plane is already on ground");
    });
  });
});
