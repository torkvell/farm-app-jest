// index.js
class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }
    addCrop(crop) {
        this.crops.push(crop)
    }
    calculateIncome() {
        return this.crops
            .map(crop => crop.getYieldInEuros())
            .reduce((a, b) => a + b, 0) +
            this.animals
            .map(animal => animal.getValueInEuros())
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
}

// const newFarm = new Farm("My farm");
// newFarm.addCrop("Wheat");
// console.log(newFarm);

module.exports = { Farm }