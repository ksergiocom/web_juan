console.log("Hola mundo!");

const secciones = Array.from(document.querySelectorAll('section'));
const linkSpans = Array.from(document.querySelectorAll('.link-span'));

let seccionActual = secciones[0].id;

const divisor = document.getElementById('divisor');


function mostrarSeccion(id) {
    // ——— Secciones ———
    secciones.forEach(section => {
      const h1 = section.querySelector('h1');
      if (section.id === id) {
        section.classList.remove('hidden');
        divisor.classList.remove('w-1/4','w-2/4','w-3/4');
        divisor.classList.add({s1:'w-1/4',s2:'w-2/4',s3:'w-3/4'}[id]);
        // animar entrada
        h1.classList.add('translate-y-full');
        setTimeout(()=>{
          h1.classList.remove('translate-y-full');
          h1.classList.add('translate-y-0');
        },50);
      } else {
        section.classList.add('hidden');            // oculta YA
        h1.classList.remove('translate-y-0');      // resetea posición
        h1.classList.add('translate-y-full');
      }
    });
  
    // ——— Spans ———
    linkSpans.forEach(span => {
      const wrapper = span.parentElement;
      if (span.id === `${id}-span`) {
        // mostrar wrapper inmediato
        wrapper.classList.remove('hidden');
        // forzar estado inicial
        span.classList.add('translate-y-full');
        // en el siguiente tick, animar a 0
        setTimeout(()=>{
          span.classList.remove('translate-y-full');
          span.classList.add('translate-y-0');
        },50);
      } else {
        // ocultar wrapper inmediato
        wrapper.classList.add('hidden');
        // resetear posición para la próxima vez
        span.classList.remove('translate-y-0');
        span.classList.add('translate-y-full');
      }
    });
  
    seccionActual = id;
  }
  


document.querySelectorAll('#links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.id.replace('-link', '');
        mostrarSeccion(targetId);
    });
});

window.addEventListener('wheel', (e) => {
    const dir = e.deltaY > 0 ? 1 : -1;
    const currentIndex = secciones.findIndex(s => s.id === seccionActual);
    const nextIndex = currentIndex + dir;

    if (nextIndex >= 0 && nextIndex < secciones.length) {
        const nextId = secciones[nextIndex].id;
        mostrarSeccion(nextId);
    }
}, { passive: true });

mostrarSeccion(seccionActual);
