class Animal {
    constructor(days) {
        this.days = days;
    }
    getValueInEuros() {
        return this.price * this.getWeightInKg()
    }
}

class Cow extends Animal {
    constructor(days) {
        super(days);
        this.weight = this.getWeightInKg(days);
        this.price = 5;
    }
    getWeightInKg() {
        return Math.min(this.days * 1.5, 1200);
    }
}

class Pig extends Animal {
    constructor(days) {
        super(days);
        this.weight = this.getWeightInKg(days);
        this.price = 4;
    }
    getWeightInKg() {
        return Math.min(this.days * 2.3, 700);
    }
}

class Horse extends Animal {
    constructor(days) {
        super(days);
        this.weight = this.getWeightInKg(days);
        this.price = 10;
    }
    getWeightInKg() {
        return Math.min((this.days * 1.7), 1000);
    }
}


module.exports = { Animal, Cow, Pig, Horse }