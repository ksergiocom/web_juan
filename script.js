console.log("ksergio.com");

// Nagevacion e interactivos
const menuBtn = document.getElementById('menu-btn'); 
const menuBtnBar1 = document.getElementById('menu-btn_bar1'); 
const menuBtnBar2 = document.getElementById('menu-btn_bar2'); 
const menuDropdown = document.getElementById('menu-dropdown');
const menuDropdownNav0 = document.getElementById('menu-dropdown_nav0');
const menuDropdownNav1 = document.getElementById('menu-dropdown_nav1');
const menuDropdownNav2 = document.getElementById('menu-dropdown_nav2');
const menuDropdownUl = document.getElementById("menu-dropdown_ul");
const menuDropdownLis = menuDropdownUl.querySelectorAll("li");

// Secciones
const mainSection0 = document.getElementById("main_section0");
const mainSection1 = document.getElementById("main_section1");
const mainSection2 = document.getElementById("main_section2");

// PageSlider del footer
const pageSlideSection0 = document.getElementById('page-slide_section0');
const pageSlideSection1 = document.getElementById('page-slide_section1');
const pageSlideSection2 = document.getElementById('page-slide_section2');

// Elementos de secciones
// Seccion0
const mainSection0Img = document.getElementById('main_section0_img');
const mainSection0ImgBg = document.getElementById('main_section0_img-bg');

// Control de navegación
let currentPage = 0;
let menuIsOpen = false;

/**
 * Funciones ------------------------------------------------------------------
 */

function  openMenu() {
    menuIsOpen = true;

    menuDropdown.classList.remove("-translate-y-full");
    menuBtnBar1.classList.add('rotate-45');
    menuBtnBar1.classList.add('translate-y-[8px]');
    menuBtnBar2.classList.add('-rotate-45');
    menuBtnBar2.classList.add('-translate-y-[8px]');
    
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

function  closeMenu() {
    menuIsOpen = false;

    menuDropdown.classList.add("-translate-y-full");
    menuBtnBar1.classList.remove('rotate-45');
    menuBtnBar1.classList.remove('translate-y-[8px]');
    menuBtnBar2.classList.remove('-rotate-45');
    menuBtnBar2.classList.remove('-translate-y-[8px]');
    
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

// Show Pages ----------------------

const showPage0 = () => {
    // Ocultar y mostrar seccion
    mainSection0.classList.remove("hidden")
    mainSection1.classList.add("hidden")
    mainSection2.classList.add("hidden")

    // Slider que muestra la seccion actual
    pageSlideSection0.classList.add("scale-y-150");
    pageSlideSection1.classList.remove("scale-y-150");
    pageSlideSection2.classList.remove("scale-y-150");

    
    // Ocultar el menuDropdown
    if(menuIsOpen)closeMenu();    
    currentPage = 0;

    const hijos = Array.from(mainSection0.children)

    hijos.forEach((el, idx) => {
        setTimeout(() => {
            el.classList.remove("-translate-x-full")
        }, 1000+200*idx)
    })

}

const hiddePage0 = () => {
    mainSection0.classList.add('-tranlsate-y-full')

    const hijos = Array.from(mainSection0.children)

    hijos.forEach((el) => {
        el.classList.add("-translate-x-full")
    })
}

const showPage1 = () => {
    // Ocultar y mostrar seccion
    mainSection0.classList.add("hidden")
    mainSection1.classList.remove("hidden")
    mainSection2.classList.add("hidden")

    // Slider que muestra la seccion actual
    pageSlideSection0.classList.remove("scale-y-150");
    pageSlideSection1.classList.add("scale-y-150");
    pageSlideSection2.classList.remove("scale-y-150");

    // Ocultar el menuDropdown
    if(menuIsOpen) closeMenu();
    currentPage = 1;
}

const showPage2 = () => {
    // Ocultar y mostrar seccion
    mainSection0.classList.add("hidden")
    mainSection1.classList.add("hidden")
    mainSection2.classList.remove("hidden")

    // Slider que muestra la seccion actual
    pageSlideSection0.classList.remove("scale-y-150");
    pageSlideSection1.classList.remove("scale-y-150");
    pageSlideSection2.classList.add("scale-y-150");

    // Ocultar el menuDropdown
    if(menuIsOpen) closeMenu();
    currentPage = 2;
}


/**
 * Events listeners -----------------------------------------------------------
 */

menuBtn.addEventListener('click', () => {
    if(menuIsOpen){
        closeMenu();
    }else{
        openMenu();
    }
})

pageSlideSection0.addEventListener('click', showPage0)
menuDropdownNav0.addEventListener('click', showPage0)

pageSlideSection1.addEventListener('click', showPage1)
menuDropdownNav1.addEventListener('click', showPage1)

pageSlideSection2.addEventListener('click', showPage2)
menuDropdownNav2.addEventListener('click', showPage2)


/**
 * Eventos Wheel y scroll (para manejar la pagina ) ---------------------------
 */
// var scrollingDirection = 0; //idle
var lastScroll = 9999;
var scrollIdleTime = 300; // time interval that we consider a new scroll event

window.addEventListener('wheel',wheel);

function wheel(e){
    var delta = e.deltaY;
    var timeNow = performance.now();
    if (delta > 0 && ( timeNow > lastScroll + scrollIdleTime) ) {
        console.log('scroll arriba')
    } else if (delta < 0 && ( timeNow > lastScroll + scrollIdleTime)) {
        console.log('scroll abajo')
    }
    lastScroll = timeNow;
}


showPage0();