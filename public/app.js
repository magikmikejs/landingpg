let buttons = document.querySelectorAll('.slider-image-button')
let slider = document.querySelector('.reviews-slider');
let btnOne = document.querySelector('.button-one');
let btnTwo = document.querySelector('.button-two');
let btnThree = document.querySelector('.button-three');
let btnFour = document.querySelector('.button-four');
let prev = document.querySelector('.slider-prev');
let next = document.querySelector('.slider-next');
let reviews = document.querySelectorAll('.reviews-box');
let revOne = document.querySelector('.reviews-one');
let revTwo = document.querySelector('.reviews-two');
let revThree = document.querySelector('.reviews-three');
let revFour = document.querySelector('.reviews-four');
let burgerMenu = document.querySelector('.burger-menu');
let menuResponsive = document.querySelector('.menu-responsive');

let slided = 0;
let menu = 0;
let width;
let windowWidth = window.innerWidth;

burgerMenu.addEventListener('click',()=>{
    if(menu == 0){
        menuResponsive.style.display = 'block';
        menu = 1;
    }
    else {
        menuResponsive.style.display = 'none';
        menu = 0;
    }
    
})

prev.addEventListener('click',()=>{
    if(slided > 0){
        slided--;
        if(windowWidth > 400){
            width = 450;
        }
        else width = 350
        let slide = slided * width;
        slider.style.transform = 'translateX(-' + slide + 'px)';
        if(slided == 0){
            buttons.forEach(button => {
                button.style.width = '15px';
                button.style.background = '#DDE0E4';
           })
           btnOne.style.width = '45px';
           btnOne.style.background = '#F53838';
           reviews.forEach(review => {
               review.style.borderColor = '#DDDDDD';
               review.style.boxShadow = '0px 0px 0px white'
           })
           revOne.style.borderColor = '#F53838'
           revOne.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
        }
        else if (slided == 1){
            buttons.forEach(button => {
                button.style.width = '15px';
                button.style.background = '#DDE0E4';
            })
            btnTwo.style.width = '45px';
            btnTwo.style.background = '#F53838'; 
            reviews.forEach(review => {
                review.style.borderColor = '#DDDDDD';
                review.style.boxShadow = '0px 0px 0px white'
            })
            revTwo.style.borderColor = '#F53838'
            revTwo.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
        }
        else if (slided == 2){
            buttons.forEach(button => {
                button.style.width = '15px';
                button.style.background = '#DDE0E4';
            })
            btnThree.style.width = '45px';
            btnThree.style.background = '#F53838'; 
            reviews.forEach(review => {
                review.style.borderColor = '#DDDDDD';
                review.style.boxShadow = '0px 0px 0px white'
            })
            revThree.style.borderColor = '#F53838'
            revThree.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
        }
    }
})
next.addEventListener('click',()=>{
    if(slided < 3){
        slided++;
        if(windowWidth > 400){
            width = 450;
        }
        else width = 350
        let slide = slided * width;
        slider.style.transform = 'translateX(-' + slide + 'px)';
        if (slided == 1){
            buttons.forEach(button => {
                button.style.width = '15px';
                button.style.background = '#DDE0E4';
            })
            btnTwo.style.width = '45px';
            btnTwo.style.background = '#F53838'; 
            reviews.forEach(review => {
                review.style.borderColor = '#DDDDDD';
                review.style.boxShadow = '0px 0px 0px white'
            })
            revTwo.style.borderColor = '#F53838'
            revTwo.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
        }
        else if (slided == 2){
            buttons.forEach(button => {
                button.style.width = '15px';
                button.style.background = '#DDE0E4';
            })
            btnThree.style.width = '45px';
            btnThree.style.background = '#F53838'; 
            reviews.forEach(review => {
                review.style.borderColor = '#DDDDDD';
                review.style.boxShadow = '0px 0px 0px white'
            })
            revThree.style.borderColor = '#F53838'
            revThree.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
        }
        else if (slided == 3){
            buttons.forEach(button => {
                button.style.width = '15px';
                button.style.background = '#DDE0E4';
            })
            btnFour.style.width = '45px';
            btnFour.style.background = '#F53838'; 
            reviews.forEach(review => {
                review.style.borderColor = '#DDDDDD';
                review.style.boxShadow = '0px 0px 0px white'
            })
            revFour.style.borderColor = '#F53838'
            revFour.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
        }
    }

})

btnOne.addEventListener('click',()=>{
    slider.style.transform = 'translateX(0px)';
    buttons.forEach(button => {
         button.style.width = '15px';
         button.style.background = '#DDE0E4';
    })
    btnOne.style.width = '45px';
    btnOne.style.background = '#F53838';
    reviews.forEach(review => {
        review.style.borderColor = '#DDDDDD';
        review.style.boxShadow = '0px 0px 0px white'
    })
    revOne.style.borderColor = '#F53838'
    revOne.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
    slided = 0;
})
btnTwo.addEventListener('click',()=>{
    if(windowWidth > 400){
        slider.style.transform = 'translateX(-450px)';
    } 
    else slider.style.transform = 'translateX(-350px)';
    buttons.forEach(button => {
            button.style.width = '15px';
            button.style.background = '#DDE0E4';
    })
    btnTwo.style.width = '45px';
    btnTwo.style.background = '#F53838';
    reviews.forEach(review => {
        review.style.borderColor = '#DDDDDD';
        review.style.boxShadow = '0px 0px 0px white'
    })
    revTwo.style.borderColor = '#F53838'
    revTwo.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
    slided = 1;
})
btnThree.addEventListener('click',()=>{
    if(windowWidth > 400){
        slider.style.transform = 'translateX(-900px)';
    } 
    else slider.style.transform = 'translateX(-700px)';
    buttons.forEach(button => {
            button.style.width = '15px';
            button.style.background = '#DDE0E4';
    })
    btnThree.style.width = '45px';
    btnThree.style.background = '#F53838';
    reviews.forEach(review => {
        review.style.borderColor = '#DDDDDD';
        review.style.boxShadow = '0px 0px 0px white'
    })
    revThree.style.borderColor = '#F53838'
    revThree.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
    slided = 2;
})
btnFour.addEventListener('click',()=>{
    if(windowWidth > 400){
        slider.style.transform = 'translateX(-1350px)';
    } 
    else slider.style.transform = 'translateX(-1050px)';
    buttons.forEach(button => {
        button.style.width = '15px';
        button.style.background = '#DDE0E4';
    })
    btnFour.style.width = '45px';
    btnFour.style.background = '#F53838';
    reviews.forEach(review => {
        review.style.borderColor = '#DDDDDD';
        review.style.boxShadow = '0px 0px 0px white'
    })
    revFour.style.borderColor = '#F53838'
    revFour.style.boxShadow = '5px 10px 50px rgba(13, 16, 37,0.1)';
    slided = 3;
})