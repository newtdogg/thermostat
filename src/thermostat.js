const STARTING_TEMPERATURE = 20;
const MIN_TEMP = 10;
const MAX_TEMP = 32;

function Thermostat(){
  this.currentTemperature = STARTING_TEMPERATURE;
};

Thermostat.prototype.increaseTemp = function () {
  if(this.currentTemperature >= MAX_TEMP){
    throw new Error("Maximum temperature is 32°C");
  }
  this.currentTemperature++
};

Thermostat.prototype.decreaseTemp = function () {
  if(this.currentTemperature <= MIN_TEMP){
    throw new Error("Minimum temperature is 10°C");
  }
  this.currentTemperature--
};

Thermostat.prototype.resetTemp = function () {
  this.currentTemperature = STARTING_TEMPERATURE;
};
