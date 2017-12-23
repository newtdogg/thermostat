window.onload = function() {
  thermostat = new Thermostat
  updatepage()
}

updatepage = function() {
  $("#temp").html(thermostat.currentTemperature)
  $("#usage").css("background-color", usageColour)
  $("#usagename").html(thermostat.energyUsage)
  $("#usagebutton").css("background", powersavermode)
}

function powersavermode() {
  if (thermostat.powersavingmode === true) {
    return "#ccff99"
  } else {
    return "grey"
  }
}

usageColour = function(){
    if (thermostat.energyUsage === "Medium Energy Usage"){
      return "gold"
    } else if (thermostat.energyUsage === "High Energy Usage"){
      return "red"
    } else {
      return "green"
    }
}

function reset() {
  thermostat.resetTemp()
  updatepage()
  new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3").play()
}

function increase() {
  thermostat.increaseTemp()
  updatepage()
  new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3").play()
}

function decrease() {
  thermostat.decreaseTemp()
  updatepage()
  new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3").play()
}

function powerSave() {
  thermostat.powerSavingSwitch()
  updatepage()
  new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3").play()
}
