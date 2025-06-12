console.log("Hola!");

const menuBtn = document.getElementById('menu-btn'); 
const menuBtnBar1 = document.getElementById('menu-btn_bar1'); 
const menuBtnBar2 = document.getElementById('menu-btn_bar2'); 
const menuDropdown = document.getElementById('menu-dropdown');

menuBtn.addEventListener('click', () => {
    menuDropdown.classList.toggle("-translate-y-full");
    menuBtnBar1.classList.toggle('rotate-45');
    menuBtnBar1.classList.toggle('translate-y-[8px]');
    menuBtnBar2.classList.toggle('-rotate-45');
    menuBtnBar2.classList.toggle('-translate-y-[8px]');
})
