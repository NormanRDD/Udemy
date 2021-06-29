// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//     movies: [
//         "Лига справедливости",
//         "Скотт Пилигрим против...",
//         "Одержимость",
//         "Логан",
//         "Ла-ла лэнд"
//     ]
// };
// // movieDB.movies.sort();
// // console.log(movieDB.movies);
// // for (let i=0;i < movieDB;i++){
//     //     movieDB.movies +[i];
//     // }
    
//     //1
//     // const promo = document.querySelector('.promo__adv img');
//     // promo.remove();
//     // const promo = document.querySelectorAll('.promo__adv img');
//     // promo.forEach(item => {
//     //     item.remove();
//     // });
//     const promo = document.querySelectorAll('.promo__adv img');
//     promo.forEach(function (item) {
//         item.remove();
//     });
//     //2
//     const poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre');
//     //   const genre = document.querySelector('.promo__genre');
//     genre.textContent = 'драма';
    
//     // const text = document.createTextNode('Драма');
//     // const genre = document.querySelector('.promo__genre');
//     // genre.replaceWith(text);  
//     //3
//     // const mars = ('../img/mars.webp');
//     // var img = document.createElement("IMG");
//     // img.src = "img\bg.jpg";
    
//     // const mars2 = img;
//     // mars.replaceWith(mars2);
//     // console.log(img);
    
//     poster.style.backgroundImage = 'url("../practic5img/bg.jpg")';
//     //4
    
//     movieDB.movies.sort();
//     // console.log(poster.innerHTML);
    
//     const movieList = document.querySelector('.promo__interactive-list');
//     movieList.innerHTML = "";
//     movieDB.movies.forEach((film, i) => {
//         movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//         <div class="delete"></div>
//         </li>
//         `;
//     }); 
//     // a = a + 1;
//     // a += 1;
    

    
    