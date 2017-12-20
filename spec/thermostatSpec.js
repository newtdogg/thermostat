describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("Start up", function() {
    it ("Should start at 20°C celsius", function() {
      expect(thermostat.currentTemperature).toEqual(20)
    });
    it ("Should start in Power Saving Mode", function() {
      expect(thermostat.powersavingmode).toEqual(true)
    });
  });

  describe("Adjusting temperature", function() {
    it ("Temperature can be increased", function() {
      thermostat.increaseTemp();
      expect(thermostat.currentTemperature).toEqual(21)
    });

    it ("Temperature can be decreased", function() {
      thermostat.decreaseTemp();
      expect(thermostat.currentTemperature).toEqual(19)
    });
    it ("Temperature can be reset to starting temperature", function() {
      thermostat.decreaseTemp();
      thermostat.resetTemp();
      expect(thermostat.currentTemperature).toEqual(20)
    });

  });

  describe("Temperature limits", function() {
    it ("Temperature cannot be decreased below 10°C", function() {
      for (var i=1; i <= 10; i++) thermostat.decreaseTemp();
      expect(function() { thermostat.decreaseTemp() }).toThrowError("Minimum temperature is 10°C")
    });

    it ("Temperature cannot be increased above 32°C when Power Saving Mode is off", function() {
      thermostat.powerSavingSwitch();
      for (var i=1; i <= 12; i++) thermostat.increaseTemp();
      expect(function() { thermostat.increaseTemp() }).toThrowError("Maximum temperature is 32°C")
    });

    it ("Temperature cannot be increased above 25°C when Power Saving Mode is on", function() {
      for (var i=1; i <= 5; i++) thermostat.increaseTemp();
      expect(function() { thermostat.increaseTemp() }).toThrowError("Maximum temperature is 25°C with Power Saving Mode on")
    });
  });

  describe("Power Usage Modes", function() {
    it("Enters Low Energy Usage Mode when 18°C and below", function() {
      for (var i=1; i <= 2; i++) thermostat.decreaseTemp();
      expect(thermostat.energyUsage).toEqual("Low Energy Usage")
      for (var i=1; i <= 8; i++) thermostat.decreaseTemp();
      expect(thermostat.energyUsage).toEqual("Low Energy Usage")
    });
    it("Enters Medium Energy Usage Mode when between 19°C and 25°C", function() {
      thermostat.decreaseTemp();
      expect(thermostat.energyUsage).toEqual("Medium Energy Usage")
      for (var i=1; i <= 6; i++) thermostat.increaseTemp();
      expect(thermostat.energyUsage).toEqual("Medium Energy Usage")
    });
    it("Enters High Usage Mode when 26°C and above", function() {
      thermostat.powerSavingSwitch();
      for (var i=1; i <= 6; i++) thermostat.increaseTemp();
      expect(thermostat.energyUsage).toEqual("High Energy Usage")
      for (var i=1; i <= 6; i++) thermostat.increaseTemp();
      expect(thermostat.energyUsage).toEqual("High Energy Usage")
    });
  });
});
