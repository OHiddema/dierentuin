class Animal {
  constructor(birthDate, weight, gender) {
    this.birthDate = birthDate;  //birthdate is a date object
    this.weight = weight;
    this.gender = gender;
  }

  //age in milliseconds !!!
  getAge() {
    let d = new Date();
    console.log(d.getTime() - this.birthDate.getTime());
  }
  // feed(){

  // }
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


// create a rondom object (Bird or Insect) with random properties
function createRandomObjects(n, object) {

  // creates a rondom integer between start and end (inclusive)
  function randomInRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
  }

  for (let i = 0; i < n; i++) {

    let d = new Date();
    let n = d.getTime();
    let rndDays = randomInRange(0, 100);
    let rndDate = new Date(n - rndDays * 24 * 3600 * 1000);

    let rndWeight = 1000 * Math.random();
    let rndGender = '';
    if (Math.random() > .5) {
      rndGender = 'M';
    } else {
      rndGender = 'F';
    }
    let rndEggs = randomInRange(0, 100);
    let rndBites = true;
    if (Math.random() > .5) {
      rndBites = false
    }

    if (Math.random() < .5) {
      object[i] = new Bird(rndDate, rndWeight, rndGender, rndEggs);
    } else {
      object[i] = new Insect(rndDate, rndWeight, rndGender, rndBites);
    }
  }
}

let myAnimals = [];
createRandomObjects(10, myAnimals);

for (let i = 0; i < myAnimals.length; i++) {
  myAnimals[i].feed();
}

