class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.randomNum = Math.round((this.maxValue + this.minValue) / 2);
        return this.randomNum;
    }

    lower() {
        this.maxValue = this.randomNum;

    }

    greater() {
        this.minValue = this.randomNum;
    }
}

module.exports = GuessingGame;