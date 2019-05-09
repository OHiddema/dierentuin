class Animal {
  constructor(birthDate, weight, gender) {
    this.birthDate = birthDate;  //birthdate is a date object
    this.weight = weight;
    this.gender = gender;
  }
 
  getAge() { //age in milliseconds !!!
    let d = new Date();
    console.log(d.getTime() - this.birthDate.getTime());
  }
}

class Bird extends Animal {
  constructor(birthDate, weight, gender, eggs) {
    super(birthDate, weight, gender);
    this.eggs = eggs;
  }
  feed() {
    console.log('Feed the bird');
  }
}

class Insect extends Animal {
  constructor(birthDate, weight, gender, bites) {
    super(birthDate, weight, gender);
    this.bites = bites;
  }
  feed() {
    console.log('Feed the insect');
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

    for (let i = 0; i < n; i++) {

      // create random variables
      let d = new Date();
      let n = d.getTime();
      let rndDays = randomInRange(0, 100);
      let rndDate = new Date(n - rndDays * 24 * 3600 * 1000);
      let rndWeight = 1000 * Math.random();
      let rndGender = '';
      Math.random()>.5 ? rndGender = 'M' : rndGender = 'V';
      let rndEggs = randomInRange(0, 100);
      let rndBites = '';
      Math.random()>.5 ? rndBites = true : rndBites = false;

      // put random variables in random animal type
      Math.random()>.5 ? 
      this.animalObj[i] = new Bird(rndDate, rndWeight, rndGender, rndEggs) :
      this.animalObj[i] = new Insect(rndDate, rndWeight, rndGender, rndBites);
    }
  }

  printAnimals() {
    for (let i = 0; i < this.animalObj.length; i++) {
      console.log(this.animalObj[i]);
    }
  }
}

myFirstZoo = new Zoo('Groningen', 1000);
myFirstZoo.createAnimals(10);
myFirstZoo.printAnimals();
