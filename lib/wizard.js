const Pet = require('../lib/pet')

class Wizard  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.pets = [];
    this.petsCount = 0;
  }

  adoptPet(pet) {
    this.pets.push(pet)
    this.petsCount++;
  }
}

module.exports = Wizard;
