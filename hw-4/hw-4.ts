// Task 1
let startPhrase: string = "Привет";
let name: string = "Иван";
let surname: string = "Иванов";
console.log((startPhrase.concat(" ",name.toLocaleLowerCase()," ",surname.toLocaleUpperCase(),". ")).repeat(5));

// Task 2
let str2: string = "я учу typescript!"
if (str2.includes("учу")==true)
    console.log(str2.indexOf("учу"));
else 
    console.log("данной подстроки нет");

// Task 3
let str3: string = "задание номер три";
let len: number = str3.length;
let symNum: number = 8;
if (symNum>len)
    console.log("Вы вышли за границу строки");
else 
    console.log(str3.charAt(symNum));
    
// Task 4
let str4: string = "задание номер четыре.";
if (str4.endsWith(".")==true)
    console.log("Данное предложение закончено");
else
    console.log("В конце предложения не хватает точки");

// Task 5
let str5: string = "я учу typeskript";
console.log(str5.slice(6));
console.log(str5.substring(6));
console.log(str5.substring(2,6));

// Task 6
let str6: string = "я учу typeskript";
console.log(str6.split(" "));

// Task 7
let str7: string = "                я учу typescript!                ";
console.log(str7.trim());

// Task 8
let num8: number = 8.829734872948;
console.log(num8.toFixed(3));

// Task 9
let num9: number = 34.35;
if  (Number.isInteger(num9)==true)
    console.log(num9);
else 
    console.log(Math.floor(num9));

// Task 10
let num10: number = 3.1415926;
console.log(Math.floor(num10));
console.log(Math.ceil(num10));
console.log(Math.round(num10));

// Task 11
let num11: number = 152;
console.log(Math.pow(num11, 2));

// Task 12
let min: number = Math.ceil(2.5);
let max: number = Math.floor(35.5);
let res: number = Math.floor(Math.random() * (max - min)) + min;
console.log(res);

// Task 13
let min1: number = 0;
let max1: number = 1;
console.log(Math.random());

// Task 14
let date: Date = new Date();
console.log(date);








    
    







    
    
    


export{}
