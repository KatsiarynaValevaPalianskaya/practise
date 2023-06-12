// Task 1
const obj1 = {
	name1: "Ivan",
	age1: 30,
};

delete obj1.num1;
console.log(obj1);

// Task 2
const obj2 = {
	name2: "Georg",
	profession2: "manager",
};
console.log("name2" in obj2);

// Task 3
const student = {
	name: 'John',
	age: 19,
	isHappy: true
};
for (const emploeeKey in student){
	console.log(`Key is ${emploeeKey}`);
	console.log(`Value is ${student[emploeeKey]}`)
};

// Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors["ru pum pu ru rum"].red)
console.log(colors["ru pum pu ru rum"].blue)

// Task 5
let salaries = {
	alex: 500,
	sveta: 413,
	anton: 987,
	andrey: 664,
	alexandra: 199,
};
let averSalary = 0;
let i = 0;

for (const personKey in salaries) {
    averSalary += salaries[personKey];
    i++;
}
 console.log(averSalary / i);

// Task 6

const obj6 = {
	regist(NewLog, NewPass) {
	this.login = NewLog;
	this.pass = NewPass;
	console.log(this.login);
	console.log(this.pass);	
},
	validate(checkLog,checkPass) {
	if ((checkLog === this.login) && (checkPass == this.pass))
		console.log("Добро пожаловать");
},
};

obj6.regist("kat","1234");
obj6.validate("kat","1234");
