
document.addEventListener('DOMContentLoaded',()=>{

const menu = document.getElementById('mobileMenu');
const overlay = document.getElementById('menuOverlay');
const openButton = document.getElementById('hamburgerMenu');
const closeButton = document.getElementById('closeMenuButton');


//function to opne menu
function openMenu(){
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow='hidden';
}

//function to close menu
function closeMenu(){
     menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow='';
}

//Event listerners
openButton.addEventListener('click',openMenu);
closeButton.addEventListener('click',closeMenu);
overlay.addEventListener('click',closeMenu);


//Mobile dropdown menus
const dropdowns = document.querySelectorAll('.mobileDropdown');

    dropdowns.forEach(dropdown=>{

        const triggerDropdown = dropdown.querySelector(':scope > a');

        triggerDropdown.addEventListener('click',function(e){
            e.preventDefault();

            dropdowns.forEach(item=>{
                if(item !== dropdown){
                    item.classList.remove('open')
                }
            });
            dropdown.classList.toggle('open');
        });
    });





//Activity scrolling slider
 const sliderTracker = document.querySelector(".carouselTrack");
 const slideCards=document.querySelectorAll(".carouselTrack .categoryCard");
 const dots =document.querySelectorAll(".carouselDots .dot");

 if(!sliderTracker || slideCards.length === 0) return;

 let currentSlideIndex=0;
 let autoslide;

 //Function to update dots
 function updateDots(index){
     dots.forEach(dot =>dot.classList.remove('active'));
    if(dots[index]){
        dots[index].classList.add('active');
    }
 }

 //function to move to next dot
 function SlideToIndex(index){
    currentSlideIndex = index;
    sliderTracker.scrollTo({
        left: slideCards[index].offsetLeft, behavior:'smooth'
    });
    updateDots(index);
 }

 //Function to move to next slide
 function nextSlide(){
    currentSlideIndex ++;
    if(currentSlideIndex>=slideCards.length){
        currentSlideIndex=0;
    }
    SlideToIndex(currentSlideIndex);

}

//function for autoSlideing
function StartAutoSlide(){
    clearInterval(autoslide);
    autoslide = setInterval(nextSlide,3000);
}
//function to puase slidind
function StopAutoSlide(){
    clearInterval(autoslide);
}


//Pause on touch
sliderTracker.addEventListener("touchstart", StopAutoSlide);
sliderTracker.addEventListener("mouseenter", StopAutoSlide);

sliderTracker.addEventListener("touchend", StartAutoSlide);
sliderTracker.addEventListener("mouseleave", StartAutoSlide);


//Hand  touch scroll
sliderTracker.addEventListener("scroll", () => {
    let closest = 0;
    let minDistance = Infinity;
    slideCards.forEach((card, index) => {
        const distance = Math.abs(sliderTracker.scrollLeft - card.offsetLeft);
        if (distance < minDistance) {
            minDistance = distance;
            closest = index;
        }
    });

    currentSlideIndex = closest;
    updateDots(currentSlideIndex);
});

// Stop autoSlide while dragging
let scrollTimeout;

sliderTracker.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        StartAutoSlide();
    }, 1000);

});

// Dot click event listerner
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        StopAutoSlide();
        SlideToIndex(index);
        StartAutoSlide();
    });
});

updateDots(0);
StartAutoSlide();

});



