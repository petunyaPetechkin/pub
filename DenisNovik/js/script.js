// const isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     Blackberry: function() {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/iEMobile/i);
//     },
//     any: function() {
//         return (
//             isMobile.Android() ||
//             isMobile.Blackberry() ||
//             isMobile.iOS() ||
//             isMobile.Opera() ||
//             isMobile.Windows()
//         );
//     }
// }

// if(isMobile.any()) {
//     document.body.classList.add('_touch');
// } else {
//     document.body.classList.add('_pc');
// }
const menu  = document.querySelector('.menu');
const menuIcon  = document.querySelector('.menu__icon');
const menuLinks = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', test);

menuLinks.forEach(el => {
    el.addEventListener('click', evt => {
        evt.preventDefault();
        if(evt.target.getAttribute('data-goto') &&
            document.getElementById(evt.target.getAttribute('data-goto'))) {
                const gotoBlock = document.querySelector(`#${evt.target.getAttribute('data-goto')}`);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top +
                pageYOffset;
                console.log(gotoBlockValue);
                if(menuIcon.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    menuIcon.classList.remove('_active');
                    menu.classList.remove('_active');
                }
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
        }
    });
});


function test() {
    if(menu.classList.contains('_active')) {
        menu.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    } else {
        menu.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    } 
}