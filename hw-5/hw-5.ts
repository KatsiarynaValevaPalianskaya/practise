// Task 1
function getSum(par: number): void
 {
	let sum = 0;
	for (let i = 0; i <= par; i++)
			sum+=i;
	console.log(sum);
 }
 
 getSum(100);

 // Task 2
 function credit(creditSum: number): number
 {
	let percent = 17;
	let yearsPart = creditSum / 5;
	let overpay = 17*creditSum/100 + 17*(creditSum - yearsPart)/100 +
			  17*(creditSum - yearsPart * 2)/100 + 17*(creditSum - yearsPart * 3)/100 + 17*(creditSum - yearsPart * 4)/100;
	console.log(overpay);
			  return(overpay);
 }
 credit(100);

 // Task 3
 function trimString(str3: string, numFrom: number, numTo: number): string
 {
	console.log(str3.substring(numFrom, numTo));
	return(str3.substring(numFrom, numTo));
 }
 trimString("Сегодня дождливый день", 8, 17);

 // Task 4
 function getSumNumbers(num: number): void {
	let str: string = num.toString();
	let len: number = str.length;
	let sum: number = 0; 
	for (let i = 0; i < len; i++)
	    {
		sum += Number(str.substring(i,i+1));
	    }
console.log(sum);
}
getSumNumbers(1555);

// Task 5
function getSum1( a:number, b:number) : number {
    let sum: number = 0;
	let a1: number = 0;
	let b1: number = 0;
	if (a < b)
	{
		a1 = a;
		b1 = b;
	}
	else{
		a1 = b;
		b1 = a;
	}
    if (a === b)
	{
		console.log(a);
		
           return(a);
	}
    for (let i = a1; i <= b1; i++)
        {
	   		sum += i;
		}
		console.log(sum);
		
    return(sum);
}

getSum1(1,0);
getSum1(1,2);
getSum1(0,1);
getSum1(1,1);
getSum1(-1,0);
getSum1(-1,2);

// Task 6
function foo(): string {
	return("foo");
}

function boo(): string {
	return("boo");
}

function fooboo(ttt:boolean): void {

     if (ttt === true)
	console.log(foo());
     else
	console.log(boo());
}
fooboo(false);

// Task 7
function factorial(par: number): void {
	let fact: number = 0;
	for (let i = 0; i <= par; i ++)
		{
	   fact *= i;
		}
	 console.log(fact);
	  
  }
  
  function main(): void {
  
	for (let i = 0; i < 10; i ++)
	  {
	  factorial(i);
	  }
  }

// Advanced

// Task 1

function rectangle(a:number,b:number,c:number): boolean{

	if (((a + b) > c) && ((a + c) > b) && ((b + c) > a))
	    return(true);
	else
	    return(false);
}

rectangle(3,4,5);



