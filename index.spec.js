// test farm
const { Farm } = require('./index')
const { Crop } = require('./crops')
const { Wheat } = require('./crops')
const { SugarCane } = require('./crops')
const { Pig, Horse, Cow } = require('./animals')

test('A new Farm can be created', () => {
    const farm = new Farm()
    expect(farm).toBeTruthy()
})

test('A Farm can have a name', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
})

// test wheat
test('The Wheat class can calculate a yield', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldInKg()).toBeDefined()
})

test('The Wheat class calculates the proper yield', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
})

//test sugar cane
test('The sugarCane class can calculate a yield', () => {
    const sugarCane = new SugarCane(100)
    expect(sugarCane.getYieldInKg()).toBeDefined()
})

test('The sugarCane class calculates the proper yield', () => {
    const sugarCane = new SugarCane(100)
    expect(sugarCane.getYieldInKg()).toBeCloseTo(453.388, 2)
})

//test cropp class
test('A crop can store its area size', () => {
    const crop = new Crop(12345)
    expect(crop.acres).toBe(12345)
})

// test getYieldInEuros
test('Wheat class calculates the proper yield value', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldInEuros()).toBeCloseTo(1011.6, 1)
})

test('Sugarcane class calculates the proper yield value', () => {
    const sugarcane = new SugarCane(200)
    expect(sugarcane.getYieldInEuros()).toBeCloseTo(1943.7, 1)
})

test('Sugarcane class calculates the proper yield value', () => {
    const sugarcane = new SugarCane(0)
    expect(sugarcane.getYieldInEuros()).toBe(0)
})

// test getCosts
test('Sugarcane class calculates the proper costs value', () => {
    const sugarcane = new SugarCane(0)
    expect(sugarcane.getCosts()).toBe(0)
})

test('Sugarcane class calculates the proper costs value', () => {
    const sugarcane = new SugarCane(456)
    expect(sugarcane.getCosts()).toBe(75696)
})

test('Wheat class calculates the proper costs value', () => {
    const wheat = new Wheat(123)
    expect(wheat.getCosts()).toBe(41820)
})

test('We can add a crop to our farm', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
})

// test calculate income
test('The income of an empty farm is 0', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.calculateIncome()).toBe(0)
})

test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
    farm.addCrop(new SugarCane(100))
    expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
})

//test animal

test('Pig of 0 days calculates proper weight', () => {
    const pig = new Pig(0)
    expect(pig.getWeightInKg()).toBe(0)
})

test('Pig of 10 days calculates proper weight', () => {
    const pig = new Pig(10)
    expect(pig.getWeightInKg()).toBe(23)
})

test('Cow of 0 days calculates proper weight', () => {
    const cow = new Cow(0)
    expect(cow.getWeightInKg()).toBe(0)
})

test('Cow of 13 days calculates proper weight', () => {
    const cow = new Cow(13)
    expect(cow.getWeightInKg()).toBe(19.5)
})

test('Horse of 0 days calculates proper weight', () => {
    const horse = new Horse(0)
    expect(horse.getWeightInKg()).toBe(0)
})

test('Horse of 33 days calculates proper weight', () => {
    const horse = new Horse(33)
    expect(horse.getWeightInKg()).toBe(56.1)
})

test('Animals can be added to the farm', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
})

test('Animals will be taken into account for calculateIncome', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
    expect(farm.calculateIncome()).not.toBe(0)
})

/**
 * Add a test (to farm.spec.js) that adds wheat, sugarcane, some cows, some horses
 *  and a pig to the farm and calculates its total value. Make sure the test passes 
 *  and make sure the calculations are correct.
 */

test('Full farm test', () => {
    const farm = new Farm("Test Farm")
    farm.addCrop(new Wheat(100))
    farm.addCrop(new SugarCane(100))
    farm.addAnimal(new Cow(100))
    farm.addAnimal(new Horse(200))
    farm.addAnimal(new Pig(100))
        //console.log(farm.calculateIncome())
    expect(farm.calculateIncome()).toBeCloseTo(6988, 0)
        /** Print out farm at end of test
         * ----------------------
        - Farm: FARM NAME    -
        - No. of crops: XX   -
        - No. of animals: YY -
        - Total income: ZZZ€ -
        ----------------------
        */
    console.log(`
    -------------------
    Farm: ${farm.name}
    No. of crops: ${farm.crops.length}
    No. of animals: ${farm.animals.length}
    Total income: ${farm.calculateIncome()}
    ------------------`)
})