type cat = {
	name: string,
	age: number,
 }
 const cat1 = {
	name: 'Енчик',
	age: 3,
 };
 const cat2 = JSON.parse(JSON.stringify(cat1));
 cat1.age = 4;
 console.log(cat1);
 console.log(cat2);

 const cat3 = Object.assign({},cat1);
 cat1.age = 4;
 console.log(cat1);
 console.log(cat3);