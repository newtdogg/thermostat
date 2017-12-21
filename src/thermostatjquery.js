window.onload = function() {
  thermostat = new Thermostat
  updatepage()
}

updatepage = function() {
  $("#temp").html(thermostat.currentTemperature)
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
