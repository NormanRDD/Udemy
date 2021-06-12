/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
/*

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a == null || a == "" && b == null || b == "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('error');
//         i--;
//     } else {
//         console.log('done');
//     }
// }
let j = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a == null || a == "" && b == null || b == "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('error');
        j--;
    } else {    
        console.log('Успех!');
    }
    j++;
}

while (j < 2);
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
*/
// console.log(calc(4,3)); //function declaration
// console.log(calc(5,6));
// console.log(calc(10,6));
/*
let num = 20;
function showFirstMessage (text,){
    console.log(text);
    let  num = 22;
    console.log(num);
}
showFirstMessage("Hello World!");
console.log(num);

// function calc (a,b){
//     return (a + b);
// }

function ret(){
    let num = 50;
    return num;
}
const anotherNum = ret ();
console.log(anotherNum);
const logger = function (){ // function expression
    console.log("Hello");
};

logger();
const calc = (a,b) => {
    console.log('1');
    return a + b;
    } ;          //стрелочные функций нельзя вызать
    */
   
    const str = "teSt";
    const arr = [1,2,4];
    // console.log(str[2]);
    // console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log(str);
    
    const fruit = "Some fruit";
    
    console.log(fruit.indexOf("q"));
    const logg = "Hello World";
    // console.log(logg.slice(6, 10));
    // console.log(logg.substring(9, 8));
    // console.log(logg.substring(-2, 8));
    console.log(logg.substr(-2, 1));

    // const num = 12.2;
    // console.log(Math.round(num));
    
    const test = "12.2p"; // Текст в Число!
    console.log(parseInt(test));
    console.log(parseFloat(test));
