
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

//pour que le burger devienne une croix 

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){
        header.classList.remove('open');
    }else{
        btnHamburger.classList.add('open')
    }

});




