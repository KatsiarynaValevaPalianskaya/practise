// Task 1

// Создайте класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям. 
// Реализуйте несколько методов для этих классов. В методах, где принимаются какието параметры, 
// сделайте проверку через условный оператор, который в случае неудачи будет выбрасывать исключение. 
// Вызов модулей реализуйте через import, export

export class Car {
    parametr1: number;
    parametr2: string;

    constructor(parametr1: number, parametr2: string) {
        this.parametr1 = parametr1;
        this.parametr2 = parametr2;
    }
}