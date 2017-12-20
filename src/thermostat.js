const STARTING_TEMPERATURE = 20;

function Thermostat(){
  this.currentTemperature = STARTING_TEMPERATURE;
};

Thermostat.prototype.increaseTemp = function () {
  this.currentTemperature++
};

Thermostat.prototype.decreaseTemp = function () {
  if(this.currentTemperature <= 10){
    throw new Error("Minimum temperature is 10°C");
  }
  this.currentTemperature--
};
