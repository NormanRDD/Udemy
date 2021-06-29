const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// };
// btn.onclick = function (){
//     alert('Second click');
// };

// btn.addEventListener('click', () => {
// alert('click');
// });
let i = 0;

const deleteEl = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if ( i== 2){
    //     btn.removeEventListener('click', deleteEl);
    // }
};

// btn.addEventListener('click', deleteEl);
// overlay.addEventListener('click', deleteEl);

btns.forEach(btn =>{
    btn.addEventListener('click', deleteEl, {once: true});
});

// btn.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
//     });

const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();

    console.log(event.target);
});