
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



});