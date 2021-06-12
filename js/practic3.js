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