// /* Задание на урок:
// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // } 
//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             } 
            
//             // Альтернативный вариант из урока
            
//             // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//             // if (genres === '' || genres == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres = genres.split(', ');
//             //     personalMovieDB.genres.sort();
//             // } 
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };

// function hello(){
//     console.log("Hello World!");
//     debugger;
// }

// hello();

// function hi(){
//     console.log('Say hi!');
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//     sorted = arr.sort(compareNum);

//     function compareNum(a, b) {
//         return a - b;
//     }


//26

//To string

//1)

// console.log(String(null));
// console.log(typeof(String(4)));
// //2) конкатинация
// console.log(typeof(5 + ''));
// console.log(typeof(null + ''));

// const num = 5;
// console.log("httpsL://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// // To Number

// // 1)

// console.log(typeof(Number("four")));
// // 2)
// console.log(typeof(+'5'));
// // 3)
// console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt("Hello". "");

//To boolean
// 1)

// // 0, '', null, undefined, NaN == false

// let switcher = null;

// if (switcher){
//     console.log('Working...'); 
// }
// switcher = 1;

// if (switcher){
//     console.log('Working...'); 
// }

// // 2)
// console.log(typeof(Boolean("four")));

// // 3)
// console.log(typeof(!!"444")); // отрицание


//27

// let test = [ ] + false - null + true;
// console.log(test);
// console.log([ ] + false - null + true); // "NAN"
// let x = 5;
// alert (x);

//  let y = 1; 
//  let x = y = 2;
//   alert(x); 

//   let test2 = [ ] + 1 + 2;
//   console.log(test2);
//   alert( "1"[0]) ; 
//   alert(2 && 1 && 5 && null && 0 && undefined); // && запинается на лжи
// alert( null || 2 && 3 || 4 ); // || запинается на истине  , оператор && 
//стоит выше в таблице приоритетов оператора || 
// alert(0 || "" || 2 || undefined || true || falsе );

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? = нет
// alert(typeof+"Infinity" ); // стоит унарный плюс 


