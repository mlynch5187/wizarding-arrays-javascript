const Pet = require('../lib/pet')
const Wand = require('../lib/wand')


class Wizard  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.pets = [];
    this.petsCount = 0;
    this.wand = [];
  }

  adoptPet(pet) {
    this.pets.push(pet)
    this.petsCount++;
  }

  getWand(wand) {
    this.wand = wand;
  }
}

module.exports = Wizard;
