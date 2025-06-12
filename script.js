console.log("Hola!");

const menuBtn = document.getElementById('menu-btn'); 
const menuBtnBar1 = document.getElementById('menu-btn_bar1'); 
const menuBtnBar2 = document.getElementById('menu-btn_bar2'); 
const menuDropdown = document.getElementById('menu-dropdown');
const menuDropdownNav1 = document.getElementById('menu-dropdown_nav1');
const menuDropdownNav2 = document.getElementById('menu-dropdown_nav2');
const menuDropdownNav3 = document.getElementById('menu-dropdown_nav3');
const menuDropdownUl = document.getElementById("menu-dropdown_ul");
const menuDropdownLis = menuDropdownUl.querySelectorAll("li");

const mainSection1 = document.getElementById("main_section1");
const mainSection2 = document.getElementById("main_section2");
const mainSection3 = document.getElementById("main_section3");

const pageSlideSection1 = document.getElementById('page-slide_section1');
const pageSlideSection2 = document.getElementById('page-slide_section2');
const pageSlideSection3 = document.getElementById('page-slide_section3');

/**
 * Funciones ------------------------------------------------------------------
 */

function  toggleMenu() {
    menuDropdown.classList.toggle("-translate-y-full");
    menuBtnBar1.classList.toggle('rotate-45');
    menuBtnBar1.classList.toggle('translate-y-[8px]');
    menuBtnBar2.classList.toggle('-rotate-45');
    menuBtnBar2.classList.toggle('-translate-y-[8px]');
    
    /**
     * La duración de desplegar el menu es de 500ms (HARDCODEADO en la clase).
     * Vamos a crear un pequeño retardo para que se muestren ligeramente más tarde (mientras se despliega).
     */
    setTimeout(() => {
        menuDropdownLis.forEach(li => {
            li.querySelector('a').classList.toggle("translate-y-full");
        })
    },200);
}

/**
 * Events listeners -----------------------------------------------------------
 */

menuBtn.addEventListener('click', toggleMenu)


menuDropdownNav1.addEventListener('click', () => {
    // Ocultar y mostrar seccion
    mainSection1.classList.remove("hidden")
    mainSection2.classList.add("hidden")
    mainSection3.classList.add("hidden")

    // Slider que muestra la seccion actual
    pageSlideSection1.classList.add("scale-y-150");
    pageSlideSection2.classList.remove("scale-y-150");
    pageSlideSection3.classList.remove("scale-y-150");

    // Ocultar el menuDropdown
    toggleMenu();
})

menuDropdownNav2.addEventListener('click', () => {
    // Ocultar y mostrar seccion
    mainSection1.classList.add("hidden")
    mainSection2.classList.remove("hidden")
    mainSection3.classList.add("hidden")

    // Slider que muestra la seccion actual
    pageSlideSection1.classList.remove("scale-y-150");
    pageSlideSection2.classList.add("scale-y-150");
    pageSlideSection3.classList.remove("scale-y-150");


    // Ocultar el menuDropdown
    toggleMenu();
})

menuDropdownNav3.addEventListener('click', () => {
    // Ocultar y mostrar seccion
    mainSection1.classList.add("hidden")
    mainSection2.classList.add("hidden")
    mainSection3.classList.remove("hidden")

    // Slider que muestra la seccion actual
    pageSlideSection1.classList.remove("scale-y-150");
    pageSlideSection2.classList.remove("scale-y-150");
    pageSlideSection3.classList.add("scale-y-150");


    // Ocultar el menuDropdown
    toggleMenu();
})