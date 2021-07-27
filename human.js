class Human {
    name;
    gender;
    weight;

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    checkApple() {
        return apple.weight > 0;
    }

    eat() {
        if (this.checkApple()) {
            apple.decrease();
            this.weight++;
        }
        else {
            return false;
        }
    }

    say(string) {
        console.log((`${this.name} say: "${string}"`));
    }
}