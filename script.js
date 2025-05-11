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
      if (span.id !== `${id}-span`) {
        // Ocultar todos los que no son el actual
        span.classList.remove('translate-y-0', 'opacity-100');
        span.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
      }
    });

    // Esperar 600ms antes de mostrar el nuevo (después de la animación de salida)
    setTimeout(() => {
      linkSpans.forEach(span => {
        if (span.id === `${id}-span`) {
          span.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
          span.classList.add('translate-y-0', 'opacity-100');
        }
      });
    }, 200);

  
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
