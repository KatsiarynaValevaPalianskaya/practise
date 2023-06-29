import {Car} from "./hw-12";

class Lada extends Car {
    minPrice: number;

    constructor(parametr1: number, parametr2: string, minPrice: number) {
        super(parametr1, parametr2);
        this.minPrice = minPrice;
    }

    isMinPrice() {
        if(this.minPrice <= 1000) {
            throw new Error("Unknow price");
        } else if(this.minPrice > 3000 && this.minPrice < 1000) {
            console.log("it is cost ${this.minPrice} - cheap car");
        } else {
            console.log("it is expencive car");
        }
    }
}

const myLada = new Lada(2021, "Belarus", 1000)
console.log(myLada);
myLada.isMinPrice();