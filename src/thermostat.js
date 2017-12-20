const STARTING_TEMPERATURE = 20;
const MIN_TEMP = 10;
const MAX_TEMP_NO_PSM = 32;
const MAX_TEMP_PSM = 25;


function Thermostat(){
  this.currentTemperature = STARTING_TEMPERATURE;
  this.powersavingmode = true;
  this.energyUsage = "Medium Energy Usage"
};

Thermostat.prototype.increaseTemp = function() {
  if(this.powersavingmode === true){
    if(this.currentTemperature >= MAX_TEMP_PSM){
      throw new Error("Maximum temperature is 25°C with Power Saving Mode on");
    }
  }
  else {
    if(this.currentTemperature >= MAX_TEMP_NO_PSM){
      throw new Error("Maximum temperature is 32°C");
    }
  }
  this.currentTemperature++
  this._calculateEnergyUsage();
};

Thermostat.prototype.decreaseTemp = function() {
  if(this.currentTemperature <= MIN_TEMP){
    throw new Error("Minimum temperature is 10°C");
  }
  this.currentTemperature--
  this._calculateEnergyUsage();
};

Thermostat.prototype.resetTemp = function() {
  this.currentTemperature = STARTING_TEMPERATURE;
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powersavingmode ? this.powersavingmode = false : this.powersavingmode = true
};

Thermostat.prototype._calculateEnergyUsage = function() {
  switch (true) {
    case (this.currentTemperature <= 18 ):
      this.energyUsage = "Low Energy Usage";
      break;
    case (this.currentTemperature >= 26):
        this.energyUsage = "High Energy Usage";
        break;
    default:
      this.energyUsage = "Medium Energy Usage";
  }
};

// Thermostat.prototype._calculateEnergyUsage = function() {
//   switch (this.currentTemperature) {
//     case (this.currentTemperature <= 18 ):
//       this.energyUsage = "Low Energy Usage";
//       break;
//     case (this.currentTemperature >= 19 && this.currentTemperature <= 25 ):
//
//     case (this.currentTemperature >= 26):
//       this.energyUsage = "High Energy Usage";
//       break;
//   }
// };

// if (this.currentTemperature <= 18 ){
//   this.energyUsage = "Low Energy Usage";
// } else if (this.currentTemperature >= 26) {
//   this.energyUsage = "High Energy Usage";
// } else {
//   this.energyUsage = "Medium Energy Usage";
// }
