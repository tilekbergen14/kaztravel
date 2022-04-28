const body =document.querySelector(".bodyForToggle");
const toggle = document.querySelector(".header_menu");
const toggleButton = document.querySelector('.header_toggle');
const toggleButtonOn = document.querySelector('.header_toggle_on');
const widthMin = 1015;
const circles = document.getElementById('grid_slider');
const circlesOn = circles.getElementsByTagName("a");
const txt = document.querySelectorAll('.sqr_trav');
const gridElems = document.querySelector('.howto_slider');
const roundImg = document.querySelectorAll('#rounded_Image');
const gridItem = document.querySelectorAll(".grid-slide-item");
// let circles = Array.from(circlesPseudo);
let toggleBool = true;
let windowWidth = window.innerWidth;
let sqrs = document.querySelector('.menu_sqrs');
let tittles = document.querySelector('.content_first_tittles');
let contentAll = document.querySelector('.content_all');
let roundContent = document.querySelector(".round_content");
let tourishelp = document.querySelector(".tourist_help");
let animatedClass = ' animate__animated animate__backInLeft';
let animateElemsOn = [tittles,roundContent,tourishelp];
let marginElements = [contentAll,sqrs];
let j = 0;
// let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
body.addEventListener("mousewheel",() => {reaction (j,animateElemsOn,animatedClass)});

function reaction (j,animateElemsOn,animatedClass) {
    if (window.pageYOffset>1000 && window.pageYOffset < 1200) {
        // tittle in is none, but now we On tittle with flex
        animateElemsOn[0].className += animatedClass;
        
    }
    if (window.pageYOffset >1500 && window.pageYOffset < 1600) {
        console.log(window.pageYOffset);
        animateElemsOn[1].className += animatedClass;
    }
    if (window.pageYOffset > 1900 && window.pageYOffset < 2000) {
        animateElemsOn[2].className += animatedClass;
    }
}


$(document).ready(()=> {
    $(roundImg).mouseenter(function(eventObj) {
        for(let n =0;n<roundImg.length;n++) {
            let roundedImg = eventObj.target;
            roundedImg.style.cssText =
            `border-radius:100%;
            width: 56px;
            height:56px;
            position:absolute;
            bottom: 80px;
            left: 20px;
            transition: border-radius ,width, height 1s;
            `;
        }
    });
    $(roundImg).mouseleave(function(eventObj){
        eventObj.target.style.cssText = `border-radius: 4%`;
    });


});





window.onload = function (){
    for(let i=0;i<circlesOn.length;i++){
        circlesOn[i].mouseenter = showCircleMini;
        circlesOn[i].mouseenter = showCircleMax;
    }
};


function showCircleMini(eventObj) {
    let circleMin = eventObj.target;
    circleMin.style.cssText = `border-radius: 100%;
                               width:56px;
                               height:56px;
                               position:relative;
                               top:200px;`;
}
function showCircleMax(eventObj) {
    let circleMax = eventObj.target;
    circleMax.style.cssText = `border-radius: 4%`;
}









function checkToggle(toggle,toggleBool){
    if (toggleBool) {
        toggle.style.display = "none";
    }
    else {
        body.style.display = "none";
        toggle.style.display = "block";
        toggle.className += animatedClass;


    }
}
function toggleOn(toggle,toggleButton,toggleBool) {
    checkToggle(toggle,toggleBool);
    toggleButton.addEventListener('click' , ()=> {
        toggleBool = false;
        checkToggle(toggle,toggleBool);


    });
}


toggleOn(toggle,toggleButton,toggleBool);


//carousel 

const carouselWrapper = document.querySelectorAll('.carousel__wrapper'),
      carouselInner = document.querySelector('.carousel__inner'),
      carouselItem = document.querySelector('.carousel__item'),
      carouselItemImg = carouselItem.querySelector('img');
      let index = 0;

      carouselInner.style.width = 100 * carouselWrapper.length + '%';
      carouselInner.style.display = 'flex';
      carouselInner.style.transition = '0.5s all';

  
    
      carouselItemImg.style.cssText =
        `width:100vw;
        height:100vh;`;

    carouselInner.style.cssText = `
        display:flex;
        width:100%;
        height:100vh;
    `;
  
   const indicators = document.createElement('ol'),
         dots = [];
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;`;
    
    carouselItem.append(indicators);