describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("Start up", function() {
    it ("should start at 20°C celsius", function() {
      expect(thermostat.currentTemperature).toEqual(20)
    });
  });

  describe("adjusting temperature", function() {
    it ("temperature can be increased", function() {
      thermostat.increaseTemp()
      expect(thermostat.currentTemperature).toEqual(21)
    });

    it ("temperature can be decreased", function() {
      thermostat.decreaseTemp()
      expect(thermostat.currentTemperature).toEqual(19)
    });
  });

  describe("temperature limits", function() {
    it ("temperature cannot be decreased below 10°C", function() {
      for (var i=1; i <= 10; i++) thermostat.decreaseTemp();
      expect(function() { thermostat.decreaseTemp() }).toThrowError("Minimum temperature is 10°C")
    });

    // it ("temperature can be decreased", function() {
    //   thermostat.decreaseTemp()
    //   expect(thermostat.currentTemperature).toEqual(19)
    // });
  });
});
