console.log('################')
console.log("www.ksergio.com");
console.log('################')



// Nagevacion e interactivos
const menuBtn = document.getElementById('menu-btn'); 
const menuBtnBar1 = document.getElementById('menu-btn_bar1'); 
const menuBtnBar2 = document.getElementById('menu-btn_bar2'); 
const menuDropdown = document.getElementById('menu-dropdown');
const menuLayout = document.getElementById('menu-layout');
const menuDropdownNav0 = document.getElementById('menu-dropdown_nav0');
const menuDropdownNav1 = document.getElementById('menu-dropdown_nav1');
const menuDropdownNav2 = document.getElementById('menu-dropdown_nav2');
const menuDropdownUl = document.getElementById("menu-dropdown_ul");
const menuDropdownLis = menuDropdownUl.querySelectorAll("li");
const footerMsg = document.getElementById('footer-msg');
const bgVideo = document.getElementById('bg-video');
const verCartaBtn = document.getElementById('main_section0-btn'); 
const verSobreNosotrosBtn = document.getElementById('main_section8-btn'); 
const asideVolverBtn = document.getElementById('aside_volver-btn'); 
const asideSobreNostrosVolverBtn = document.getElementById('aside_sobre_nosotros_volver-btn'); 
const main = document.querySelector('main');
const header = document.querySelector('header');
const asideCarta = document.querySelector('#aside-carta');
const asideSobreNosotros = document.querySelector('#aside-sobre-nosotros');
const footer = document.querySelector('footer');
const contactanosBtn = document.getElementById('btn-contactanos');


// Secciones
const mainSection0 = document.getElementById("main_section0");
const mainSection1 = document.getElementById("main_section1");
const mainSection2 = document.getElementById("main_section2");
const mainSection3 = document.getElementById("main_section3");
const mainSection4 = document.getElementById("main_section4");
const mainSection5 = document.getElementById("main_section5");
const mainSection6 = document.getElementById("main_section6");
const mainSection7 = document.getElementById("main_section7");
const mainSection8 = document.getElementById("main_section8");


const mainSections = [mainSection0, mainSection1, mainSection2, mainSection3, mainSection4, mainSection5, mainSection6, mainSection7, mainSection8]

// PageSlider del footer
const pageSlideSection0 = document.getElementById('page-slide_section0');
const pageSlideSection1 = document.getElementById('page-slide_section1');
const pageSlideSection2 = document.getElementById('page-slide_section2');
const pageSlideSection3 = document.getElementById('page-slide_section3');
const pageSlideSection4 = document.getElementById('page-slide_section4');
const pageSlideSection5 = document.getElementById('page-slide_section5');
const pageSlideSection6 = document.getElementById('page-slide_section6');
const pageSlideSection7 = document.getElementById('page-slide_section7');
const pageSlideSection8 = document.getElementById('page-slide_section8');

const pageSliders = [pageSlideSection0, pageSlideSection1, pageSlideSection2, pageSlideSection3, pageSlideSection4, pageSlideSection5, pageSlideSection6, pageSlideSection7, pageSlideSection8]

// Elementos de secciones
// Seccion0
const mainSection0Img = document.getElementById('main_section0_img');
const mainSection0ImgBg = document.getElementById('main_section0_img-bg');

// Control de navegación
const TIMEOUT = 500;
let scrollToNav = true;
let currentPage = null;
let menuIsOpen = false;

/**
 * Funciones ------------------------------------------------------------------
 */

function  openMenu() {
    menuIsOpen = true;

    menuDropdown.classList.remove("translate-y-[-100vh]");
    menuBtnBar1.classList.add('rotate-45');
    menuBtnBar1.classList.add('translate-y-[6px]');
    menuBtnBar2.classList.add('-rotate-45');
    menuBtnBar2.classList.add('-translate-y-[6px]');
    
    /**
     * La duración de desplegar el menu es de 500ms (HARDCODEADO en la clase).
     * Vamos a crear un pequeño retardo para que se muestren ligeramente más tarde (mientras se despliega).
     */
    setTimeout(() => {
        menuDropdownLis.forEach(li => {
            li.querySelector('a').classList.toggle("translate-y-[100vh]");
        })
    },200);
}

function  closeMenu() {
    menuIsOpen = false;

    menuDropdown.classList.add("translate-y-[-100vh]");
    menuBtnBar1.classList.remove('rotate-45');
    menuBtnBar1.classList.remove('translate-y-[6px]');
    menuBtnBar2.classList.remove('-rotate-45');
    menuBtnBar2.classList.remove('-translate-y-[6px]');

    /**
     * La duración de desplegar el menu es de 500ms (HARDCODEADO en la clase).
     * Vamos a crear un pequeño retardo para que se muestren ligeramente más tarde (mientras se despliega).
     */
    setTimeout(() => {
        menuDropdownLis.forEach(li => {
            li.querySelector('a').classList.toggle("translate-y-[100vh]");
        })
    },200);
}

// Show Pages -----------------------------------------------------------------

function showPage(pageIdx, down=false){
    volverNavegacion()
    let timeoutCustom = TIMEOUT;

    if(menuIsOpen){
        closeMenu();
    }
    
    if(currentPage != null) {
        if(pageIdx == currentPage)return
        hidePage(currentPage, down);
    }else{
        currentPage=0;
        pageIdx=0;
        timeoutCustom=100;
    }


    if(pageIdx!=0){
        footerMsg.classList.add('translate-y-36')
        setTimeout(() => {
            footerMsg.classList.add('hidden')
        }, TIMEOUT);
        bgVideo.style.filter='blur(5px) grayscale(100%)';
        bgVideo.style.transition=".8s filter ease-in-out"
    }
    else{
        footerMsg.classList.remove('hidden')
        setTimeout(()=>{
            footerMsg.classList.remove('translate-y-36')
        }, TIMEOUT/2)
        bgVideo.style.filter='blur(0px) grayscale(100%)';
        bgVideo.style.transition=".8s filter ease-in-out"
    }

    const section = mainSections[pageIdx];

    pageSliders.forEach((slider, sliderIdx) => {
        if(sliderIdx==pageIdx) {
            slider.classList.add("scale-y-150");
            slider.querySelector('span').classList.remove("bg-white");
            slider.querySelector('span').classList.add("bg-lime-400");
        }else{
            slider.classList.remove("scale-y-150");
            slider.querySelector('span').classList.remove("bg-lime-400");
            slider.querySelector('span').classList.add("bg-white");
        }
    })

    setTimeout(()=>{
        section.classList.remove('hidden')
        section.classList.remove('translate-x-[-100vw]')
        let delay = 50;
        
        function showChildrenRecursive(elements) {
            elements.forEach(el => {
                setTimeout(() => {
                    el.classList.remove('translate-x-[-100vw]');
                }, delay);
                delay += 50;

                // Repetimos para los hijos del elemento actual
                if (el.children.length > 0) {
                    showChildrenRecursive(Array.from(el.children));
                }
            });
        }
    
        showChildrenRecursive(Array.from(section.children));
    
    },timeoutCustom)
    
    currentPage=pageIdx

}

function hidePage(pageIdx, down = false) {
    const section = mainSections[pageIdx];
    let delay = TIMEOUT;

    function hideChildrenRecursive(elements) {
        elements.forEach(el => {
            setTimeout(() => {
                el.classList.add('translate-x-[-100vw]');
            }, delay);
            // delay += 100;

            if (el.children.length > 0) {
                hideChildrenRecursive(Array.from(el.children));
            }
        });
    }

    hideChildrenRecursive(Array.from(section.children));

    // Desplazamiento vertical del contenedor principal
    if (down) {
        section.classList.add('translate-y-[-100vh]');
    } else {
        section.classList.add('translate-y-[100vh]');
    }

    // Ocultar completamente la sección tras la animación
    setTimeout(() => {
        section.classList.add('hidden');
        if (down) {
            section.classList.remove('translate-y-[-100vh]');
        } else {
            section.classList.remove('translate-y-[100vh]');
        }
        section.classList.add('translate-x-[-100vw]');
    }, TIMEOUT); // Espera a que termine la animación recursiva
}

function volverNavegacion(){
    scrollToNav = true
    footer.classList.remove('hidden');
    main.classList.remove('hidden');
    asideCarta.classList.add('hidden')
    asideSobreNosotros.classList.add('hidden')
    bgVideo.classList.remove('opacity-10');
    bgVideo.classList.add('opacity-30');
}

function verCarta(){
    // closeMenu()
    scrollToNav = false
    footer.classList.add('hidden');
    main.classList.add('hidden');
    asideCarta.classList.remove('hidden')
    bgVideo.classList.remove('opacity-30')
    bgVideo.classList.add('opacity-10');

}

function verSobreNosotros(){
    // closeMenu()
    scrollToNav = false
    footer.classList.add('hidden');
    main.classList.add('hidden');
    asideSobreNosotros.classList.remove('hidden')
    bgVideo.classList.remove('opacity-30')
    bgVideo.classList.add('opacity-10');

}

/**
 * Events listeners -----------------------------------------------------------
 */

bgVideo.addEventListener('canplaythrough', () => {
    bgVideo.classList.add('opacity-30')
    bgVideo.classList.remove('opacity-0')
})

menuBtn.addEventListener('click', () => {
    if(menuIsOpen){
        closeMenu();
    }else{
        openMenu();
    }
})

verCartaBtn.addEventListener('click', () => verCarta())
verSobreNosotrosBtn.addEventListener('click', () => verSobreNosotros())
asideVolverBtn.addEventListener('click', () => volverNavegacion())
asideSobreNostrosVolverBtn.addEventListener('click', () => volverNavegacion())
menuDropdownNav0.addEventListener('click', () => showPage(0))
menuDropdownNav2.addEventListener('click', () => showPage(8))
contactanosBtn.addEventListener('click', () => showPage(8))
pageSlideSection0.addEventListener('click', () => showPage(0))
pageSlideSection2.addEventListener('click', () => showPage(2))
pageSlideSection1.addEventListener('click', () => showPage(1))
pageSlideSection3.addEventListener('click', () => showPage(3))
pageSlideSection4.addEventListener('click', () => showPage(4))
pageSlideSection5.addEventListener('click', () => showPage(5))
pageSlideSection6.addEventListener('click', () => showPage(6))
pageSlideSection7.addEventListener('click', () => showPage(7))
pageSlideSection8.addEventListener('click', () => showPage(8))
menuDropdownNav1.addEventListener('click', () => {
    verCarta()
    closeMenu()
})










/**
 * Eventos Wheel y scroll (para manejar la pagina ) ---------------------------
 */
var lastScroll = TIMEOUT;
var scrollIdleTime = TIMEOUT; // time interval that we consider a new scroll event

window.addEventListener('wheel',wheel);

var lastScroll = TIMEOUT;
var scrollIdleTime = TIMEOUT; // tiempo mínimo entre eventos scroll

window.addEventListener('wheel', wheel, { passive: false });

function wheel(e) {

    if (!scrollToNav || menuIsOpen) return;

    const deltaX = e.deltaX;
    const deltaY = e.deltaY;
    const timeNow = performance.now();

    const enoughTimePassed = timeNow > lastScroll + scrollIdleTime;

    if (!enoughTimePassed) return;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Scroll horizontal tiene prioridad
        if (deltaX > 0 && currentPage < mainSections.length - 1) {
            showPage(currentPage + 1, true);
        } else if (deltaX < 0 && currentPage > 0) {
            showPage(currentPage - 1, false);
        }
    } else {
        // Opcional: también puedes manejar scroll vertical si lo deseas
        if (deltaY > 0 && currentPage < mainSections.length - 1 ) {
            showPage(currentPage + 1, true);
        } else if (deltaY < 0 && currentPage > 0) {
            showPage(currentPage - 1, false);
        }
    }

    lastScroll = timeNow;
}




/**
 * Soporte para Touch ---------------------------------------------------------
 */
let touchStartY = null;

window.addEventListener('touchstart', e => {
    // e.preventDefault()
    touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchend', e => {
    // e.preventDefault()

    if(!scrollToNav) return
    if(menuIsOpen) return

    if (touchStartY === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;
    const timeNow = performance.now();

    if (Math.abs(deltaY) > 10 && timeNow > lastScroll + scrollIdleTime) { // sensibilidad mínima
        if (deltaY > 0 && currentPage < 8) {
            // swipe hacia arriba
            showPage(currentPage + 1, false);
        } else if (deltaY < 0 && currentPage > 0) {
            // swipe hacia abajo
            showPage(currentPage - 1, true);
        }

        lastScroll = timeNow;
    }

    touchStartY = null;
});



/**
 * Scroll ---------------------------------------------------------------------
 */

  window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
      header.classList.remove('backdrop-blur-none');
      header.classList.add('backdrop-blur-2xl');
      header.classList.add('shadow'); 
    } else {
      header.classList.remove('backdrop-blur-2xl');
      header.classList.remove('shadow');
      header.classList.add('backdrop-blur-none');
    }
  });


/**
 * Inicio ---------------------------------------------------------------------
 */

showPage(currentPage);