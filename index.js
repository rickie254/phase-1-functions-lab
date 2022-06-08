// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    someValue = someValue - 42;
     return Math.abs(someValue)
  }
  
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
  
  }
  
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
  }
  
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    var feet = distanceTravelledInFeet(start, destination)
    if (feet < 400) {
      return 0
    }
    else if (feet >= 400 && feet <= 2000) {
      return (feet -  400)* 0.02
    }
    else if(feet > 2000 && feet < 2500) {
      return 25
    }
    else if(feet > 2500){
      return 'cannot travel that far';
    }
  
  }