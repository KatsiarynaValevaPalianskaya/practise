// Task 1
// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. 
// Конструкт родительского класса принимает переменные марку авто и тип двигателя. 
// Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто. 
// Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. 
// Approximetly cost of the car is <carCost>`. (В задании используйте не только public модификатор, где это возможно)

class Car {
    model: string;
    vehicle: string;

    constructor (model: string, vehicle: string) {
        this.model = model;
        this.vehicle = vehicle;
    }

}

class ExtCar extends Car {
    maxSpeed: number;
    price: number;
    constructor(model: string, vehicle: string, maxSpeed: number, price: number) {
        super(model,vehicle);
        this.maxSpeed = maxSpeed;
        this.price = price;
    }
    showCar() {
        return `This is ${this.model}. It has ${this.vehicle} engine and max speed equal to ${this.maxSpeed}. 
         Approximetly cost of the car is ${this.price}`;
    }
}

const LuxuryCar = new ExtCar("Lada","A95",200,30000);
console.log(LuxuryCar.showCar());
const SportCar = new ExtCar("Ferrari","A98",250,100000);
console.log(SportCar.showCar());

// Task 2
// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`. 
// И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя

type iPerson = {
    name: string;
}

const person = {
    name: "Boris",
}

const person2 = {
    name: "Mike",
}

function sayName (): string {
    return `My name is ${this.name}`;
}

console.log(sayName.call(person));
console.log(sayName.call(person2));

// Task 3
// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль
// В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах. 
// К примеру `This car has 3 doors and this is left-hand drive car`



const Car31 = {
    doorCount: 5,
    wheel: "left-hand",
}

const Car32 = {
    doorCount: 2,
    wheel: "right-hand",
}

function carSet (): string {
    return `This car has ${this.doorCount} doors and this is ${this.wheel} drive car`;
}

console.log(carSet.call(Car31));
console.log(carSet.call(Car32));



