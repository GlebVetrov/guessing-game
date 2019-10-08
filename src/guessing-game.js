class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.mid = Math.ceil((min + max) / 2);
    }

    guess() {
        return this.mid;
    }

    lower() {
        this.max = this.mid;
        this.mid = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
        this.min = this.mid;
        this.mid = Math.ceil((this.min + this.max) / 2);

    }
}

module.exports = GuessingGame;