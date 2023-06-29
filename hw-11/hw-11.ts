// Task 1
// У нас есть список постов на сервере ('https://jsonplaceholder.typicode.com/posts'). 
// И наша задача отрисовать текст этих постов на странице(вывести на консоль).

// import { resolve } from "path";

// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс  
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. 
// А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение. 
//В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

// Реализуйте задачу двумя способами:
// - Promise chaining
// - Async / await

const url = "https://jsonplaceholder.typicode.com/posts"; 
async function data () {
    const response = await fetch(url);
    return await response.json();
}

data().then((res) => console.log(res[15]));
data().then((res) => console.log(res[23]));
data().then((res) => console.log(res[7]));
data().then((res) => console.log(res[3]));


const post = new Promise((resolve, reject) =>  {
    resolve("res[15]");

});
post.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve("res[23]")
    })
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve("res[7]")
    })
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        reject("res[3]")
    })
}).catch((err) => {
    console.log(new Error(err))
})




// Task 2
// Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
// Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
// Далее напишите две функции `getTodos` & `printTodos`
// Функция `getTodos` делает запрос по указанному адресу и забирает данные. 
// Функция `printTodos` создает список массив объектов, объект записывает id и title объекта с делом
// Вывести полученный результат в консоль

const url2 = "https://jsonplaceholder.typicode.com/todos";
async function getTodos () {
    const response = await fetch(url2);
    return await response.json();
}
getTodos().then((res) => console.log(res));

async function printTodos() {
   const arr: Object[] = [];
   const newTodos = await getTodos();
   for (let i = 0; i < newTodos.length; i ++) {
    const newOb = {
        id: newTodos[i].id,
        title: newTodos[i].title
    };
    arr.push(newOb);
   }
   console.log(arr);
}
printTodos();
