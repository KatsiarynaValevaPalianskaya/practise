// Task 1
// Дан массив. Выведите на консоль его длину


const colors = ['red', 'green', 'blue'];
console.log(colors.length);


// Task 2
// Дан массив:
// Выведите в консоль его последний элемент вне зависимости от его длинны.


const animals = ['monkey', 'dog', 'cat'];
let a2 = animals.length;
console.log(animals[a2-1]);


// Task 3
// Дан массив:
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами.


const numbers1 = [5, 43, 63, 23, 90];
numbers1.pop();
numbers1.pop();
numbers1.pop();
numbers1.pop();
numbers1.pop();

numbers1.splice(0, 5);
console.log(numbers1);


// Task 4
// Дан массив:
// Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// Полученный результат не забудьте вывести в консоль.


const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andey');
console.log(students);


// Task 5
// Дан массив:
// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.


const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
};
for (let number of cats) {
    console.log(number);
};


// Task 6
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа **`8`**


const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let length1 = evenNumbers.length;
let length2 = oddNumbers.length;

for (let i = 0; i<(length2); i++) {
    evenNumbers[i + length1] = oddNumbers[i];
}
console.log(evenNumbers);
console.log(evenNumbers.indexOf(8));


// Task 7
// Дан массив:
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.


const binary = [0, 0, 0, 0];
let str : string;
str = binary.join();

console.log(String(binary[0] + "1" + binary[1] + "1" +
                   binary[2] + "1" + binary[3]));

                 

// hw-8
// Task 1
// Выведи все элементы массива в консоль с помощью метода **`forEach`**
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`


const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci1.forEach((value) => console.log(value));

function allNumbers(x: number): void {
    for (let i = 0; i < x; i++) {
        console.log(fibonacci1[i]);
    } 
};
allNumbers(fibonacci1.length);


// Task 2
// Используя метод **`map`** создайте новый массив,
// на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:


const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const usersNew = users.map((value: string, index: number) => console.log(`member ${index + 1}: ${value}`))


// Task 3
// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`


const numbers = [7, -4, 32, -90, 54, 32, -21];
const newNumbers = numbers.filter((value)=>{
if (value > 0) return true;
else return false;
});
console.log(newNumbers);

function allTrue(y: number): void {
    const newArr: number[] = [];
    let i1 = 0;
    for(let i = 0; i <= y; i++) {
        if(numbers[i] > 0) {
        newArr[i1]=numbers[i];
        i1++;
        }
    }
    console.log(newArr);
}
allTrue(numbers.length);
 

// Task 4
// Используя метод **`reduce`** получите сумму всех чисел массива.
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`


const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
console.log(fibonacci.reduce((prevValue, curValue) => prevValue + curValue));


function fibArr (len: number): void {
	let Sum4 : number = 0;
	for (let i = 0; i < len; i++)
	   	Sum4 += fibonacci[i];
	console.log(Sum4);
}
 fibArr(fibonacci.length);


// Task 5
// Используя метод **`find`** найдите в массиве первое четное число.


const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbers5.find((x) => x % 2 === 0));


// Task 6
// Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`
//Реализуйте оба варианта, когда результирущее значение true или false


const numbers6 = [1, 2, 3, 15, 20];
console.log(numbers6.some((value) => {return value % 5 === 0 && value % 3 === 0}));

function  func6(len: number): boolean {
	for (let i = 0; i <= len; i++) {
		if (numbers6[i]% 5 === 0) {
			if (numbers6[i]% 3 === 0) {
				console.log(numbers6[i]);
				return true;
			}
		}
	}
return false;	
}
func6(numbers6.length);


// Task 7
// Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function
// Реализуйте оба варианта, когда результирущее значение true или false


const numbers7 = [4, 2, 7, 6, 4, 10, 15, 9, 25];

function  func7(len: number): boolean {
let Sum7 : number = 0;
	for (let i = 0; i < len; i++) {
		Sum7 += Math.pow(numbers7[i], 2);
		}
	if (Sum7 % 2 === 0) {
	    console.log(Sum7);
	    return true;	
	}
return false;	
}
func7(numbers7.length);


// Task 8
// Используя коллекцию **`Map`** создайте список ингредиентов к салату с 
// количеством необходимым для добавления в салат


const products = new Map<string, number>([
    ["огурцы", 300], 
    ["помидоры", 200], 
    ["соль", 10], 
    ["сметана", 110],
])
for (let [product, amount] of products.entries()) {
    if (amount > 100) {
      console.log(product, amount);
    }
  }


// Task 9
// Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:


const numbers9 = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
const anotherNum = new Set(numbers9);

const anotherNumArr: number[] = [];
for (let x of anotherNum) {
  anotherNumArr.push(x);
}
console.log(anotherNumArr);


// Task 10
// Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee',
// а если нет второго - в переменную elem2 запишите значение 'bbb'.
// Первый элемент никуда записывать не надо.


const arr10 = ["5", "2", "7", "1"];
let [x10 = "bbb", y10 = "ccc"] = arr10.slice(1, arr10.length);
console.log(x10, y10)


// Task 11

type Iuser = {
    name1?: string;
    surname?: string;
    age2?: string;
};
let user: Iuser = {
    name1: "Петр",
    surname: "Петров",
    age2: "20 лет",
    };
let {name1 = "Анон", surname = "Анонимович", age2 = "? лет"} = user;
console.log(name1);
console.log(surname);
console.log(age2);











