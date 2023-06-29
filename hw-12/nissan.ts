import { Car } from "./hw-12";

class Nissan extends Car {
    maxPrice: number;

    constructor(parametr1: number, parametr2: string, maxPrice: number) {
        super(parametr1, parametr2);
        this.maxPrice = maxPrice;
    }

    isMaxPrice() {
        if(this.maxPrice <= 1000) {
            throw new Error("Unknow price");
        } else if(this.maxPrice > 7000) {
            console.log("it is cost ${this.maxPrice} - expencive car");
        }  else {
            console.log("it is cheap car");
        }
    }
}

const myNissan = new Nissan(2023, "Germany", 7000);
console.log(myNissan);
myNissan.isMaxPrice();