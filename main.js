let apple = new Apple(10);
let adam = new Human('Adam', 'Male', 60);
let eva = new Human('Eva', 'FeMale', 50);


for (let i = 0; i <= 10; i++) {
    adam.eat(apple);
    adam.say('Ăn đi eva còn ' + apple.weight + ' kg');
    console.log('Adam nặng : ' + adam.weight);
    if (apple.isEmpty()) {
        console.log('Hết táo rồi')
        break;
    }
    eva.eat(apple);
    eva.say('Ăn đi adam còn ' + apple.weight + ' kg');
    console.log('Eva nặng : ' + eva.weight);
    if (apple.isEmpty()) {
        console.log('Hết táo rồi')
        break;
    }
}

