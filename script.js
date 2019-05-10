class Animal {
  constructor(birthDate, weight, sex, fedDate) {
    this.birthDate = birthDate;  //birthdate is a date object
    this.weight = weight;
    this.sex = sex;
    this.fedDate = fedDate;
  }

  getAge() { //age in milliseconds !!!
    let d = new Date();
    console.log(d.getTime() - this.birthDate.getTime());
  }

  feed() {
    this.fedDate = new Date();
    this.getEnergyLevel = 1;
  }
}

class Bird extends Animal {
  constructor(birthDate, weight, sex, fedDate, eggs) {
    super(birthDate, weight, sex, fedDate);
    this.eggs = eggs;
  }
  getEnergyLevel() {
    return 1-(new Date().getTime - this.fedDate.getTime)/1000000;
  }
}

class Insect extends Animal {
  constructor(birthDate, weight, sex, fedDate, bites) {
    super(birthDate, weight, sex, fedDate);
    this.bites = bites;
  }
  getEnergyLevel() {
    return 1-(new Date() - this.fedDate)/2000000;
  }
}

class Zoo {
  constructor(location, capacity) {
    this.location = location;
    this.capacity = capacity;
    this.animalObj = [];
  }

  createAnimals(n) {

    // creates a rondom integer between start and end (inclusive)
    function randomInRange(start, end) {
      return Math.floor(Math.random() * (end - start + 1) + start);
    }

    let d = new Date();
    let t = d.getTime();
    let rndDays, rndDate, rndWeight, rndSex, rndEggs, rndBites;

    for (let i = 0; i < n; i++) {

      // create random variables
      rndDays = randomInRange(0, 100);
      rndDate = new Date(t - rndDays * 24 * 3600 * 1000);
      rndWeight = 1000 * Math.random();
      Math.random() > .5 ? rndSex = 'M' : rndSex = 'V';
      rndEggs = randomInRange(0, 100);
      Math.random() > .5 ? rndBites = true : rndBites = false;

      // put random variables in random animal type
      Math.random() > .5 ?
        this.animalObj[i] = new Bird(rndDate, rndWeight, rndSex, d, true, rndEggs) :
        this.animalObj[i] = new Insect(rndDate, rndWeight, rndSex, d, true, rndBites);
    }
  }

  printAnimals() {
    for (let i = 0; i < this.animalObj.length; i++) {
      console.log(this.animalObj[i]);
    }
  }

  getAnimals() {
    return this.animalObj;
}

}

myFirstZoo = new Zoo('Groningen', 1000);
myFirstZoo.createAnimals(10);
// myFirstZoo.printAnimals();


let nBirds = 0;
let nInsects = 0;
let allAnimals = myFirstZoo.getAnimals();
for (let i=0; i<allAnimals.length; i++) {
  (allAnimals[i] instanceof Bird) ? nBirds++ : nInsects++;
}

document.getElementById("nBirds").innerHTML = "Birds: " + nBirds;
document.getElementById("nInsects").innerHTML = "Insects " + nInsects;
