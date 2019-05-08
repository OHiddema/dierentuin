class Animal {
  constructor(birthYear, weight, gender) {
    this.birthYear = birthYear;
    this.weight = weight;
    this.gender = gender;
  }
  getAge() {
    let d = new Date();
    console.log(d.getFullYear() - this.birthYear);
  }
}

class Bird extends Animal {
  constructor(birthYear, weight, gender, eggs) {
    super(birthYear, weight, gender);
    this.eggs = eggs;
  }
  fly() {
    console.log('The bird flies!');
  }
}

class Insect extends Animal {
  constructor(birthYear, weight, gender, bites) {
    super(birthYear, weight, gender);
    this.bites = bites;
  }
  fly() {
    console.log('The insect flies!')
  }
}

// creates a rondom integer between start and end (inclusive)
function randomInRange(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

// create 10 objects (random class, random properties)
let myAnimals = [];
let numberOfAnimals = 10;
for (let i = 0; i < numberOfAnimals; i++) {

  let d = new Date();
  let rndYear = d.getFullYear() - randomInRange(0, 10);
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
    myAnimals[i] = new Bird(rndYear, rndWeight, rndGender, rndEggs);
  } else {
    myAnimals[i] = new Insect(rndYear, rndWeight, rndGender, rndBites);
  }

}

for (let i = 0; i < numberOfAnimals; i++) {
  console.log(myAnimals[i]);
}