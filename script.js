class Animal{
  constructor(birthDate, weight, gender) {
    this.birthDate = birthDate;
    this.weight = weight;
    this.gender = gender;
  }
  getAge() {
    let diff_ms = Date.now() - this.birthDate.getTime();
    let age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
}

class Bird extends Animal {
  constructor(birthDate, weight, gender, eggs) {
    super(birthDate, weight, gender);
    this.eggs = eggs;
  }
  fly() {
    console.log('The bird flies!');
  }
}

class Insect extends Animal {
  constructor(birthDate, weight, gender, bites) {
    super(birthDate, weight, gender);
    this.bites = bites;
  }
  fly() {
    console.log('The insect flies!')
  }
}

let adelaar = new Bird(new Date(2018, 1, 1), 0.5, 'V', 10);
adelaar.fly();
console.log(adelaar.eggs);
adelaar.getAge();
console.log(adelaar.birthDate);
console.log(adelaar.weight);
console.log(adelaar.gender);

let bee = new Insect(new Date(2018, 1, 1), 0.5, 'M', true);
bee.fly();
console.log(bee.bites);
console.log(bee.birthDate);
console.log(bee.weight);
console.log(bee.gender);
