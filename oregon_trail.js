(function(){
  //random number for food
  function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  function Traveler(name, amount, isHealthy){
    this.name = name;
    this.amount = getRandomIntInclusive(1, 100); //1-100
    this.isHealthy = true;
  }

  function Wagon(capacity){
    this.passengers = [];
    this.capacity = capacity;
  }

  function makeTraveler(name){
    //needs name, but passes random amount of food and isHealth=true;
    return new Traveler(name)
  }

  function makeWagon(capacity){
    //creates new wagon with empty [passenger list] with specified capacity
    return new Wagon(capacity)
  }

  function hunt(traveler){
    //50% chance to increase food by 100. and 50% to increase by 0
    let chance = getRandomIntInclusive(1,100);
    if (chance > 50){
      traveler.amount = traveler.amount + 100;
    }
  }

  function eat(traveler){
    //food goes down by 20. No food = traveler is not healthy
    if (traveler.amount < 20){
      return traveler.isHealthy = false;
    } else if (traveler.amount > 0){
    traveler.amount = traveler.amount - 20;
    return traveler.isHealthy = true;
    }
  }

  function join(wagon, traveler){
    //adds traveler to wagon if there is capacity
    if (wagon.passengers.length < wagon.capacity){
      wagon.passengers.push(traveler);
    }
  }

  function quarantine(wagon){
    //return true if there is at least one unhealthy person on the wagon
    for(let i = 0; i < wagon.passengers.length; i++){
      if(wagon.passengers[i].isHealthy === false){
        return true;
      }
    } return false;
  }

  function food(wagon){
    //return total food from all passengers on the wagon
    let totalFood = 0;
    for(let i = 0; i < wagon.passengers.length; i++){
      totalFood = totalFood + wagon.passengers[i].amount;
    }
    return totalFood;
  }

// Create a wagon called 'wagon'
let wagon = makeWagon(5);
// Create a traveler with the name 'Henrietta' called 'traveler'
let traveler = makeTraveler('Henrietta');
// Create a traveler with the name 'Juan' called 'traveler2'
let traveler2 = makeTraveler('Juan');

hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log("\n")

console.log(traveler)
console.log(traveler2)

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food





})();
