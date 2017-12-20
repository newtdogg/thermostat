describe("Airport", function() {
  var airport;
  var plane = jasmine.createSpyObj('plane', ['takeoff', 'land']);
  // plane.land.and.callFake(function() { return tru; });

  beforeEach(function() {
    airport = new Airport;
  });

  describe("creation", function() {
    it('has the DEFAULT capacity', function() {
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
    });

    it('has no planes', function() {
      expect(airport.storedplanes.length).toEqual(0);
    });
  });

  describe('when docking a plane', function() {
    it('instructs the plane to land', function() {
      plane.takeoff();
      expect(airport.dockPlane(plane)).toBe(true);
    });

    it('changes plane\'s flight status', function() {
      plane.takeoff();
      airport.dockPlane(plane);
      expect(plane.isFlying).toBe(false)
    });

    it('adds to storedplanes', function() {
      plane.takeoff();
      airport.dockPlane(plane);
      expect(airport.storedplanes.length).toEqual(1);
    });

    it('does not allow plane to land if full', function() {
      plane.takeoff();
      for (var i=1; i <= DEFAULT_CAPACITY; i++) airport.dockPlane(plane);
      expect(function() { airport.dockPlane(plane) }).toThrowError("Airport is full!");
    });

  });

  describe('when launching a plane', function() {
    it('instructs the plane to take-off', function() {
      airport.dockPlane(plane)
      expect(airport.launchPlane(plane)).toBe(true);
    });

    it('changes the plane\'s flight status', function() {
      airport.dockPlane(plane)
      airport.launchPlane(plane)
      expect(plane.isFlying).toBe(true)
    });

    it('instructs the plane to take-off', function() {
      airport.dockPlane(plane)
      airport.launchPlane(plane);
      expect(airport.storedplanes.length).toEqual(0);
    });

    it('does not allow plane to take off if empty', function() {
      expect(function() { airport.launchPlane(plane) }).toThrowError("Airport is empty!");
    });
  });

  describe('Weather can influence the airport', function() {
    it('Planes cannot takeoff when weather is stormy', function(){
      plane.takeoff();
      expect(function() { airport.dockPlane(plane) }).toThrowError("Cannot land at airport with stormy weather!");
    });
  });

});
