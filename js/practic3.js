/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию shOwMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
/*
let numberOfFilms;

function start(){
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || 
    numberOfFilms == null || isNaN(numberOfFilms)){
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
     function rememberMyFilms(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
             if (a == null || a == "" && b == null || b == "" && a.length < 50) {
                 personalMovieDB.movies[a] = b;
                 console.log('error');
                 i--;
             } else {
                 console.log('done');
             }
            }
     }
    //  rememberMyFilms();
     
     function detectPersonalLevel(){
         if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
         
    }
    // detectPersonalLevel();
    function shOwMyDB(hidden){
        if (!hidden){
        console.log(personalMovieDB);
    }
    }
    shOwMyDB(personalMovieDB.privat);

    function writeYourGenres(){
        for (let i=1; i <= 3; i++){
            const genre = prompt (`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[ i - 1] = genre; 
        }
    }
    writeYourGenres();  
    */
    /*
    function first (){
        // Do something
        setTimeout(function(){
            console.log(1);
        }, 500);
    }
    function second(){
        console.log(2);
    }

    first();
    second();

    // function learnJS(lang,callback){
    //     setTimeout(function(){
    //         console.log(`Я учу :${lang}`);
    //     }, 500);
    //     callback();
    // }
    function learnJS(lang,callback){
        console.log(`Я учу :${lang}`);
        callback();
    } 

function done(){
    console.log('Я прошел этот урок!');

}

    learnJS('JavaScript', done); 
    */

    // const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors:{
//         border: 'black',
//         bg: 'red'
//     } ,
//     makeTest: function(){
//         console.log("Test");
//     }
// };
// options.makeTest();
// const {border, bg} = options.colors; //деструктуризация
// console.log(border);
    

// console.log(Object.keys(options));
// const mcDonaldsMenu = {
//     Bigmac: 1000,
//     BigTasty: 700,
//     Cola: 500,
//     PotatoFree: 1200
// };

// console.log(options["colors"]["border"]);
// delete options.name;
// console.log(options);

//     let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let key2 in options[key]){
//         console.log(`Свойство ${key2} имеет значение ${options[key][key2]}`);
//     // counter++;
//     }
// } else{
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
//  console.log(counter);


//21

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.forEach(function(number, i, ara){
//     console.log(`${i}: ${number} внутри массива ${ara}`);
// });

// // arr.pop(); // удаление последнего элемента массива
// // arr.push(10); //добавление элемента в конец массива

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// // for (let value of arr) {
// //     console.log(value);
// // }
//  const str = prompt("","");
//  const products = str.split("-");
//  products.sort();
//  console.log(products.join(",")); nst arr = [2, 33, 222, 6, 8, 10];
// arr.sort(compareNum);
// console.log(arr);
// function compareNum (a, b){
//     return a - b;
// }
// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// }
// const copy = obj; //ссылка на объект
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy (mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// };
// const newNumbers = copy (numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;// ссылочное значениещщ0

// console.log(newNumbers);
// console.log(numbers);

// const add ={
//     d:17,
//     e:20
// };

// const clone = Object.assign({},add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adsdsds';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal','blogger'],
//       internet = [...video,...blogs,'vk','facebook'];
//       console.log(internet);

//       function log(a,b,c){
//           console.log(a);
//           console.log(b);
//           console.log(c);
//       }

//       const num = [2, 5, 7];

//       log(...num);

//       const array = ['a','b'];
//       const newAarray = [...array]

//       const q = {
//           one: 1,
//           two: 2
//       };
//       const newObj = {...q};
//       console.log(newObj);
    
    let str = "some";
    let strObj = new String(str);
    // console.log (typeof(str));
    // console.log (typeof(strObj));

    // console.dir([1,2,3]);

    const soldier = {
        health: 400,
        armor:100,
        sayHello: function(){
            console.log("Hello");
        }
    };
    const John = Object.create(soldier);

    // const John = {
    //     health: 100
    // };

    // John.__proto__ = soldier;
    // Object.setPrototypeOf(John,soldier);
    // console.log(John.armor); 
    John.sayHello();

