
// Task 1
let x: number = 20;
let y: number = 58;
let z: number = 42;

console.log(x+y+z)

// Task 2
let age: number = 35;
let secondsInMinutes: number = 60;
let minutesInHours: number = 60;
let hoursInDay: number = 24;
let daysInHear: number = 365;
let myAgeInSeconds: number = age * daysInHear * hoursInDay * minutesInHours * secondsInMinutes;
console.log(myAgeInSeconds);

// Task 3
let count: number = 42;
let userName: string = "42";
let countString1 = String(count);
let userNameNumber1 = Number(userName);
let countString2 = count.toString();
let userNameNumber2 = parseInt(userName);
console.log(countString1, userNameNumber1, countString2, userNameNumber2);
console.log({countString1, userNameNumber1, countString2, userNameNumber2});

// Task 4
let a: number = 1;
let b: number = 2;
let c: string = "белых медведей";
let text = String(a)+b+" "+c;
console.log(text);

// Task 5
let lengt1: string = "доступ";
let lengt2: string = "морпех";
let lengt3: string = "наледь";
let lengt4: string = "рубило";
let lengt5: string = "попрек";

let lengt1One = lengt1.length;
let lengt2Two = lengt2.length;
let lengt3Three = lengt3.length;
let lengt4Four = lengt3.length;
let lengt5Five = lengt5.length;
let lengtWords = (lengt1One + lengt2Two + lengt3Three + lengt4Four + lengt5Five);
console.log(lengtWords);

// Task 6
let stringType: string = "stringType";
let numberType: number = 25;
let booleanType: boolean = true;
console.log(`Variable: stringType have type: ${typeof stringType}`);
console.log(`Variable: numberType have type: ${typeof numberType}`);
console.log(`Variable: booleanType have type: ${typeof booleanType}`);

// Task 7
let a1: string = "true";
let b1: boolean = false;
let c1: number = 17;
let d1: undefined = undefined;
let e1: null = null;
console.log(`${typeof a1}`);
console.log(`${typeof b1}`);
console.log(`${typeof c1}`);
console.log(`${typeof d1}`);
console.log(`${typeof e1}`);

// Task 8
let heigt: number = 15;
let width: number = 20;
if (heigt > width) {
    console.log(heigt);
    } else {
        console.log(width);   
    }

    // Task 9
for (let i = 1; i < 20; i++) {
    if (i%3===0) {
        console.log(i);
        
    }
}

// Task 10
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
if ((key === true)  && (documents === true) && (pen === true))
{
	if ((apple) || (orange === true))
	{
		console.log("shouldGoToWork");
        }
        else	 {
                     console.log("No");}
                  }

else
        {
            console.log("No");
        }

//Task 11
let num1 = 15;

    if ((num1%5) && (num1%3))
        console.log("FizBuz");
    else
    if(num1%5)
        console.log("Fiz");
    else
    if(num1%3)
        console.log("Buz");


        // Task 12
let age1 = 20;
if (age1 > 18)
console.log(`Попей пивка`);
else {
    console.log(`Пей колу`);
    if (age1 >= 16)
    console.log(`Можешь выкурить сигаретку, только маме не говори`);
    
}


        // Task 13
let cardinalPoints: string = "`юг` | `север` | `запад` | `восток`";
switch (cardinalPoints) {
case `юг`:
    console.log("на юг пойдешь счастье найдешь");
    break;
    case `север`:
console.log("на север пойдешь много денег найдешь");
    break;
case `запад`:
    console.log("на запад пойдешь верного друга найдешь");
    break;
case `восток`:
    console.log("на восток пойдешь разработчиком станешь");
    break;
    default:
    console.log("попробуйте еще раз");
                                 }
                
    // Advanced level
    // Task 1
let e = 4;
let f = 3;
e = e + f;
f = e - f;
e = e - f;
console.log(e, f);

    // Task 2
let initNum = 6;
let minus = 10;
let plus = 5;
let multiply = 20;
let division = 2;
let answer;
console.log("Сколько отнять? ",minus);
console.log("Сколько прибавить? ",plus);
console.log("Сколько умножить? ",multiply);
console.log("Сколько разделить? ",division);

answer = (((initNum - minus) + plus) * multiply) / division;

console.log("((((",initNum," - ",minus,") + ",plus,") * ",multiply,") / ",division," = ",answer);

    // Task 3
    for (let i = 0; i < 5; i++)
    {
       switch(i)
       {
           case 0: console.log("#"); break;
           case 1: console.log("##"); break;
           case 2: console.log("###"); break;
           case 3: console.log("####"); break;
           case 4: console.log("#####"); break;
           case 5: console.log("######"); break;
       }
    }
























