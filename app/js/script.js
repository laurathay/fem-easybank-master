
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadedElms = document.querySelectorAll('.has-faded');

//pour que le burger devienne une croix 

btnHamburger.addEventListener('click', function(){ 
    console.log('click hamburger');

    if(header.classList.contains('open')){ //close hamburger menu
        header.classList.remove('open');
        fadedElems.forEach(function(element{
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        }));
    }
    else{ // open hamburger menu
        header.classList.add('open');
        fadedElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    
    }

});




