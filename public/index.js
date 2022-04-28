
//headerHelpful
function headerHelp(){
    const headerLink = document.querySelector('.header_menu'),
          buttons = document.querySelectorAll('.header_toggle');
    headerLink.classList.toggle('hidden');

    function toggle(menu,buttons){
        buttons.forEach( button =>{
            button.addEventListener('click',()=>{
                menu.classList.toggle('hidden');
                menu.className +=' animate__animated animate__fadeInLeft';
            });
        });
    }
  
    toggle(headerLink,buttons);


}
headerHelp();

//slider
function slider(){
    const sliders = document.querySelectorAll('.carousel__item'),
          inner = document.querySelector('.carousel__inner'),
          wrapper = document.querySelector('.carousel__wrapper'),
          buttons =[... document.querySelectorAll('.carousel_nav__text')],
          tittle = document.querySelector('.carusel_tittle_text'),
          tittleText = ['Яркие краски, прекрасная музыка, продуманный сюжет... Видео-ролики о Казахстане, представленные ниже, откроют вам нашу страну с нового  ракурса.',
                        'Три мегаполиса – Нур-Султан, Алматы, Шымкент. Безусловно, знакомство со страной лучше всего начинать именно с этих трёх городов!',
                        'Путешествие на космодром надолго останется в вашей памяти!',
                        'Они поражают воображение, впечатляют, заставляют задуматься о других мирах и галактиках'],
         tittleMin = document.querySelector('.carusel_tittle_text__mini'),
         lines = document.querySelectorAll('.carusel_lines');

    let offer = 0,
    width;
    
    inner.style.display=`flex`;
    inner.style.width = 100*sliders.length+'%';
    wrapper.style.cssText = `height:100vh;overflow:hidden`;


    tittle.innerText = buttons[offer].innerText;
    tittleMin.innerText = tittleText[offer];

    lines[offer].classList.add('carusel_line','lineGo');
    buttons[offer].style.opacity = '1';

    function indexAndTrans(e){


        sliders.forEach(slider=>{
            width = ((getComputedStyle(slider).width).replace(/\D/g,''));
        });
        
        if(offer != buttons.indexOf(e.target)){
            tittle.classList.remove('show','fade');
            tittleMin.classList.remove('show','fade');
            lines[offer].classList.remove('carusel_line','lineGo');
            buttons[offer].style.opacity = '0.6';
        }

        offer = buttons.indexOf(e.target);
        
        tittle.innerText = buttons[offer].innerText;
      
        tittleMin.innerText = tittleText[offer];
        inner.style.transform=`translateX(-${width*offer}px)`;
        inner.style.transition = 'transform 1s';
        
        

    }
  
    buttons.forEach(button=>{
        button.addEventListener('click',(e)=>{
            indexAndTrans(e);
            tittle.classList.add('show','fade');
            tittleMin.classList.add('show','fade');
            lines[offer].classList.add('carusel_line','lineGo');

        });        
    });

}
slider();

//animated scroll
function animOnScroll(){
    const hidden1 = document.querySelectorAll('[data-hidden1]'),
          hidden2 = document.querySelectorAll('[data-hidden2]'),
          hidden3 = document.querySelectorAll('[data-tour]');
     
    function addHidden(elems){
        elems.forEach(elem=>{
           elem.classList.add('hidden'); 
        });
    }

    function removeHidden(elems){
        elems.forEach(elem=>{
            elem.classList.remove('hidden'); 
         });
    }
    addHidden(hidden1);
    addHidden(hidden2);
    addHidden(hidden3);
    
    const body =document.querySelector(".bodyForToggle");
            body.addEventListener("mousewheel",() => {

        if (window.pageYOffset>700 && window.pageYOffset < 1200) {
            removeHidden(hidden1);
            document.querySelector('.content_first_tittles').className +=' animate__animated animate__fadeInLeft';
            
        }
        if (window.pageYOffset >1200 && window.pageYOffset < 1600) {
            removeHidden(hidden2);
            document.querySelector('.round_content').className +=' animate__animated animate__fadeInLeft';
        }
        if (window.pageYOffset > 1600 && window.pageYOffset < 2100) {
            removeHidden(hidden3);
            document.querySelector('.tourist_help').className +=' animate__animated animate__fadeInLeft';

        }

        });

}
animOnScroll();


//round images on hover
function hoverAndOut(){
    const items = document.querySelectorAll('[data-hover]'),
          images =document.querySelectorAll('[data-radius]');

        items.forEach((item,i)=>{
            //round borders
            item.addEventListener('mouseover',()=>{
                if(i<2){
                    images[i].style.cssText = `
                    border-radius:100%;
                    width:56px;
                    height:56px;
                    position:absolute ;
                    top:70%;

                    left:60px;
                    transition-property: height, width;
                    transition-duration: 0.2s;`;
                } else {
                    images[i].style.cssText = `
                    border-radius:100%;
                    width:56px;
                    height:56px;
                    position:absolute ;
                    top:50%;
                    left:60px;
                    transition-property: height, width;
                    transition-duration: 0.2s;`;
                }
            });
            //return the borders back
            item.addEventListener('mouseout',()=>{
                images[i].style.cssText = `
                
                width:100%;
                height:100%;
                transition:height,width,0.2s;
                `;
            });
        });
    
}
hoverAndOut();
//round images on hover
function hoverRounds(){
    const rounds = document.querySelectorAll('.sec_round_img > img'),
          tittles = document.querySelectorAll('.discover-list-title'),
          parents = document.querySelectorAll('.sec_round');
    let index = 15;

          function transit(index,round,i){
            round.style.marginRight = `${index}px`;
            tittles[i].style.marginLeft = `${index}px`;
            round.style.transition = 'margin-right,1s';
          }
          rounds.forEach((round,i) =>{
            round.addEventListener('mouseover',()=>{
                index -= index;
                transit(index,round,i);
            });
            round.addEventListener('mouseout',()=>{
                index +=15;
                transit(index,round,i);
            })
        });
          parents.forEach(parent=>{
            parent.addEventListener('mouseover',()=>{
             
            })
          })
}
hoverRounds();

if(document.documentElement.clientWidth<1000){
    alert('hello');
}