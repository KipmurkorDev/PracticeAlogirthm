const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line
  const chameleon = {
    eyes: 2,
    lookAround: function () {
       console.log(`I see you with my ${this.eyes} eyes!`);
    }
  };

  const car = {
    numberOfDoors: 4,
    drive: function () {
       console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
    }
  };
  
  const letsRoll = car.drive;
  
  letsRoll();