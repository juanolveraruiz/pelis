// --- 1. BASE DE DATOS DEL CINE CLUB ---
const peliculas = [
    {
        titulo: "Zoolander",
        poster: "https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28447_p_v8_ax.jpg",
        deskdrop: "https://ca-times.brightspotcdn.com/dims4/default/15032ac/2147483647/strip/true/crop/1600x900+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F21%2Ff9%2F36756fa9c8b47b89110156c81ef2%2Fla-et-mn-zoolander-production-side-20160212-001",
        estado: "vista",
        sugiere: "Alan",
        fecha: "2026-03-13",
        rating: 4,
        anecdota: "",
    },
    {
        titulo: "Eternity",
        poster: "https://atwenty-four.transforms.svdcdn.com/production/images/Eternity_DOM_Online_Teaser_1-Sheet_01_FIN8.jpg?w=1923&auto=compress%2Cformat&fit=crop&dm=1753717316&s=b61bf543a5bed1bf6f7d20383340c3d0",
        backdrop: "https://preview.redd.it/i-just-saw-eternity-and-im-honestly-blown-away-v0-ogxre93beo7g1.jpeg?width=1080&crop=smart&auto=webp&s=a36b097a3dc673913a6b15cf4255f785a247e75b",
        deskdrop: "https://www.macerkopf.de/wp-content/uploads/2026/02/apple_tv_eternity.jpeg",
        estado: "vista",
        sugiere: "Votación (Juan)",
        fecha: "2026-03-06",
        rating: 5, // Puedes cambiar estos números (1 al 5)
        anecdota: "Jotearon a verla en inglés.",
    },
    {
        titulo: "Detective Pikachu",
        poster: "https://images.justwatch.com/poster/309518628/s718/pokemon-detective-pikachu.jpg",
        backdrop: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/5356/1734086365356-i",
        deskdrop: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/5356/1734086365356-i",
        estado: "vista",
        sugiere: "Luis",
        fecha: "2026-02-27",
        rating: 4,
        anecdota: "",
    },
    {
        titulo: "Propuesta de Año Bisiesto",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/532c45b94933a76674a4bcc6d5ab5081394da5bc3a0d683de1eee80bb7e1901c.jpg",
        backdrop: "https://m.media-amazon.com/images/S/pv-target-images/25c47ed218e250a0e0815a7aa53eda2aee0f29a791f1317fbd6f01c78cf3ed72.jpg",
        deskdrop: "https://m.media-amazon.com/images/S/pv-target-images/25c47ed218e250a0e0815a7aa53eda2aee0f29a791f1317fbd6f01c78cf3ed72._SX1080_FMjpg_.jpg",
        estado: "vista",
        sugiere: "Marisela",
        fecha: "2026-02-19",
        rating: 3,
        anecdota: "",
    },
    {
        titulo: "Your Name",
        poster: "https://m.media-amazon.com/images/M/MV5BMTIyNzFjNzItZmQ1MC00NzhjLThmMzYtZjRhN2Y3MmM2OGQyXkEyXkFqcGc@._V1_.jpg",
        backdrop: "https://pics.filmaffinity.com/Your_Name-406681275-large.jpg",
        deskdrop: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdlfYwRPNsJggmpXt-_Kxbz0mdrQuqgAiCDRJuk8CdyQn3WTwb6Iu2wa-q8atqR2O2wjzjmF02Hy6p_xwHXO5r-LfqyKcCyhGhnA.jpg?r=6ad",
        estado: "vista",
        sugiere: "Alan & Juan",
        fecha: "2026-02-13",
        rating: 5,
        anecdota: "",
    },
    {
        titulo: "Un Par Nada Ejemplar",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/a111c728ac239b82cc4360a56470d5dc34956150d7f72ba8ab86f94a2b9d5840.jpg",
        backdrop: "https://m.media-amazon.com/images/S/pv-target-images/a111c728ac239b82cc4360a56470d5dc34956150d7f72ba8ab86f94a2b9d5840.jpg",
        deskdrop: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXBQxowpdhGk466Q0eVkiHA3VA6QlrJQFw_irOHZ_MG5DEr0K6cDnDFfYcc2nBLQ5vOQ5drkKF7Ocvh4hZt4yAHynBxvSHjTuHus.jpg?r=2a5",
        estado: "vista",
        sugiere: "Claudia",
        fecha: "2026-02-03",
        rating: 4,
        anecdota: "",
    },
    {
        titulo: "The Interview",
        poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10569374_p_v13_ae.jpg",
        backdrop: "https://m.media-amazon.com/images/M/MV5BODA1NDUwNzgxNl5BMl5BanBnXkFtZTgwMjQ1NDE3MzE@._V1_.jpg",
        deskdrop: "https://i0.wp.com/www.americamagazine.org/wp-content/uploads/2017/01/interview-149842.jpg?fit=2048%2C1152&ssl=1",
        estado: "vista",
        sugiere: "Alan",
        fecha: "2026-01-30",
        rating: 4,
        anecdota: "",
    },
    {
        titulo: "This Is The End",
        poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9627886_p_v10_az.jpg",
        backdrop: "https://akns-images.eonline.com/eol_images/Entire_Site/2021226/rs_1200x1200-210326122951-1200-Emma-Watson-This-is-the-End-2013.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
        deskdrop: "https://images.bauerhosting.com/legacy/empire-tmdb/films/109414/images/hkuPAYz0TstcAquVpibaDnADqQS.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
        estado: "vista",
        sugiere: "Juan",
        fecha: "2026-01-23",
        rating: 5,
        anecdota: "",
    }
];

const listContainer = document.getElementById('movie-list');
const buscador = document.getElementById('busqueda');

// --- 2. FUNCIÓN PARA GENERAR ESTRELLAS ---
function generarEstrellas(rating) {
    if (!rating || rating === 0) return '<span style="color: #456; font-size: 0.8rem;">Sin calificar</span>';
    let estrellasHtml = '';
    for (let i = 1; i <= 5; i++) {
        estrellasHtml += `<span style="color: ${i <= rating ? '#ffc107' : '#456'};">★</span>`;
    }
    return estrellasHtml;
}

// --- 3. FUNCIÓN PARA FORMATEAR FECHAS SIN ERRORES ---
function formatearFecha(fechaStr, esLarga = false) {
    const date = new Date(fechaStr);
    const fechaCorregida = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    
    const opciones = esLarga 
        ? { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
        : { day: 'numeric', month: 'short' };
        
    return fechaCorregida.toLocaleDateString('es-ES', opciones);
}

// --- 4. FUNCIÓN PARA DIBUJAR LA LISTA ---
function renderizar(lista) {
    if (!listContainer) return;
    listContainer.innerHTML = "";

    // Actualizar contadores (si existen los elementos en el HTML)
    const countVistas = document.getElementById('count-vistas');
    const countPendientes = document.getElementById('count-pendientes');
    
    if (countVistas && countPendientes) {
        countVistas.innerText = peliculas.filter(p => p.estado.toLowerCase().includes('vista')).length;
        countPendientes.innerText = peliculas.filter(p => p.estado === 'pendiente').length;
    }

    const ordenadas = [...lista].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    ordenadas.forEach(peli => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        const indexOriginal = peliculas.findIndex(p => p.titulo === peli.titulo);
        card.onclick = () => abrirDetalle(indexOriginal);

        card.innerHTML = `
            <img src="${peli.poster}" class="poster" alt="${peli.titulo}">
            <div class="info">
                <span class="badge ${peli.estado.toLowerCase().includes('vista') ? 'vista' : 'pendiente'}">${peli.estado}</span>
                <span class="title">${peli.titulo}</span>
                <div style="color: #ffc107; font-size: 0.8rem; margin-bottom: 5px;">
                    ${peli.estado.toLowerCase().includes('vist') ? generarEstrellas(peli.rating) : ''}
                </div>
                <div class="meta-data">
                    <span>🗓️ ${formatearFecha(peli.fecha)}</span>
                    <span>👤 ${peli.sugiere}</span> 
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// --- 5. FUNCIÓN PARA EL MODAL DE DETALLE ---
function abrirDetalle(index) {
    const peli = peliculas[index];
    const modal = document.getElementById('modal-pelicula');
    
    // Detectamos si es escritorio (más de 768px)
    const esEscritorio = window.innerWidth > 768;
    // Si tienes una imagen específica para PC la usa, si no, usa el backdrop normal
    const imagenFondo = (esEscritorio && peli.deskdrop) ? peli.deskdrop : peli.backdrop;

    modal.innerHTML = `
        <button class="btn-cerrar" onclick="cerrarDetalle()">✕</button>
        <img src="${imagenFondo}" class="backdrop-fondo" alt="Fondo">
        
        <div class="detalle-wrapper">
            <div class="datos-centrados">
                <h1>${peli.titulo}</h1>
                
                <div class="detalle-rating">
                    ${peli.estado.toLowerCase().includes('vista') ? generarEstrellas(peli.rating) : ''}
                </div>

                <div class="meta-detalle-centrado">
                    <span style="text-transform: capitalize;">🗓️ ${formatearFecha(peli.fecha, true)}</span>
                </div>
                <div class="meta-detalle-centrado">
                    <span>👤 Sugerida por ${peli.sugiere}</span>
                </div>
            </div>

            <div class="comentarios-seccion">
                <h3>📝 Notas de la reunión</h3>
                <p>${peli.anecdota || "No hay notas para esta sesión."}</p>
            </div>
        </div>
    `;

    // Aplicamos la clase de animación
    modal.classList.add('modal-activo');
    document.body.style.overflow = 'hidden';
}

function cerrarDetalle() {
    const modal = document.getElementById('modal-pelicula');
    modal.classList.remove('modal-activo');
    document.body.style.overflow = 'auto';
}

// --- 6. BUSCADOR Y CARGA INICIAL ---
if (buscador) {
    buscador.addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const filtradas = peliculas.filter(peli => 
            peli.titulo.toLowerCase().includes(termino) || 
            peli.sugiere.toLowerCase().includes(termino)
        );
        renderizar(filtradas);
    });
}

document.addEventListener('DOMContentLoaded', () => renderizar(peliculas));