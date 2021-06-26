// 'use strict';

// const box = document.getElementById('box');

// console.log(box);

// // const btns = document.getElementsByTagName('button')[1];
// const btns = document.getElementsByTagName('button');   

// console.log(btns);// обратится к массиву нельзя, только указав кнопку (индекс массива)
// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// // console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart'); //метод передает первый элемент соответсвует элементу
// console.log(oneHeart);

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'), //можно вписать элемент в котором будем искать сердечки
        oneHeart = wrapper.querySelector('.heart');
        // box.style.backgroundColor = 'blue'; // inLine стили перебивает CSS
        // box.style.width = '500px';

        box.style.cssText = `background-color: darkgrey; width: 500px`;

        btns[1].style.borderRadius = '100%';
        circles[1].style.backgroundColor = 'red';
        
        // for (let i = 0; i <  hearts.length; i++){
        //     hearts[i].style.backgroundColor = 'yellow';
        // }

        hearts.forEach(item => {
            item.style.backgroundColor = 'green'; // то же самое что и в цикле выше
        });

        const div = document.createElement('div');
        // const text = document.createTextNode('Тут был я');
        // console.log(text);
        div.classList.add('black');

       wrapper.append(div);
        // wrapper.prepend(div);
        // wrapper.appendChild(div);
        // hearts [0].before(div);

        // wrapper.insertBefore(div, hearts[1]);

        // circles[0]. remove();
        // wrapper.removeChild(hearts[1]);

        hearts[0].replaceWith(circles[0]);
        // wrapper.replaceChild(circles[0],hearts[0]);

        div.innerHTML = "<h1>Hello Galaxy!</h1>";
        
        // div.textContent = "hello"; // только текст, не html структуру (сделано в целях безопастности)       

        // div.insertAdjacentHTML("beforebegin",'<h2>HelloThere</h2>');
        // div.insertAdjacentHTML("afterbegin",'<h2>HelloThere</h2>');
        // div.insertAdjacentHTML("beforeend",'<h2>HelloThere</h2>');
        // div.insertAdjacentHTML("afterend",'<h2>HelloThere</h2>');
