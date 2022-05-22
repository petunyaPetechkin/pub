window.onscroll = function() { fixedHeader() };

let menu = document.querySelector('.menu');
let sticky = menu.offsetTop;
function fixedHeader() {
    if(window.pageYOffset >= sticky) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
}

const arr = new Array(12).fill('').map(item => item = {id:1, title:'asd'});

console.log(arr);


