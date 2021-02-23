
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

//pour que le burger devienne une croix 

btnHamburger.addEventListener('click', function(){ //close hamburger menu
    console.log('click hamburger');

    if(header.classList.contains('open')){
        header.classList.remove('open');
        header.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else{ // open hamburger menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }

});




