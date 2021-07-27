class Apple {
    weight;
    constructor(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    isEmpty() {
        return this.weight === 0;
    }

    decrease(){
        if (this.isEmpty()){
            return false;
        }
        else {
            this.weight--;
        }
    }
}