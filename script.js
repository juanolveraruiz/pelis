const peliculas = [
    {
        titulo: "Eternity",
        poster: "https://atwenty-four.transforms.svdcdn.com/production/images/Eternity_DOM_Online_Teaser_1-Sheet_01_FIN8.jpg?w=1923&auto=compress%2Cformat&fit=crop&dm=1753717316&s=b61bf543a5bed1bf6f7d20383340c3d0",
        backdrop: "https://www.ecartelera.com.mx/carteles/fondos/19500/19564-n2.jpg",
        estado: "pendiente",
        sugiere: "Votación (Juan)",
        fecha: "2026-03-06",
        anecdota: "",
    },
    {
        titulo: "Detective Pikachu",
        poster: "https://images.justwatch.com/poster/309518628/s718/pokemon-detective-pikachu.jpg",
        backdrop: "https://media.gq.com/photos/5cd44139b41d09ef96cd74a9/16:9/w_2560%2Cc_limit/Detective-Pikachu-Review-He's-small-and-cute-and-he's-a-detective-gq.jpg",
        estado: "vista",
        sugiere: "Luis",
        fecha: "2026-02-27",
        anecdota: "",
    },
    {
        titulo: "Propuesta de Año Bisiesto",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/532c45b94933a76674a4bcc6d5ab5081394da5bc3a0d683de1eee80bb7e1901c.jpg",
        backdrop: "https://m.media-amazon.com/images/S/pv-target-images/25c47ed218e250a0e0815a7aa53eda2aee0f29a791f1317fbd6f01c78cf3ed72._SX1080_FMjpg_.jpg",
        estado: "vista",
        sugiere: "Marisela",
        fecha: "2026-02-19",
        anecdota: "",
    },
    {
        titulo: "Your Name",
        poster: "https://m.media-amazon.com/images/M/MV5BMTIyNzFjNzItZmQ1MC00NzhjLThmMzYtZjRhN2Y3MmM2OGQyXkEyXkFqcGc@._V1_.jpg",
        backdrop: "https://tuwebanime.com/wp-content/uploads/2023/07/que-es-el-anime-tu-web-anime-your-name.jpg",
        estado: "vista",
        sugiere: "Alan & Juan",
        fecha: "2026-02-13",
        anecdota: "",
    },
    {
        titulo: "Un Par Nada Ejemplar",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/a111c728ac239b82cc4360a56470d5dc34956150d7f72ba8ab86f94a2b9d5840.jpg",
        backdrop: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXBQxowpdhGk466Q0eVkiHA3VA6QlrJQFw_irOHZ_MG5DEr0K6cDnDFfYcc2nBLQ5vOQ5drkKF7Ocvh4hZt4yAHynBxvSHjTuHus.jpg?r=2a5",
        estado: "vista",
        sugiere: "Claudia",
        fecha: "2026-02-03",
        anecdota: "",
    },
    {
        titulo: "The Interview",
        poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10569374_p_v13_ae.jpg",
        backdrop: "https://i0.wp.com/www.americamagazine.org/wp-content/uploads/2017/01/interview-149842.jpg?fit=2048%2C1152&ssl=1",
        estado: "vista",
        sugiere: "Alan",
        fecha: "2026-01-30",
        anecdota: "",
    },
    {
        titulo: "This Is The End",
        poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9627886_p_v10_az.jpg",
        backdrop: "https://images.bauerhosting.com/legacy/empire-tmdb/films/109414/images/hkuPAYz0TstcAquVpibaDnADqQS.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
        estado: "vista",
        sugiere: "Juan",
        fecha: "2026-01-23",
        anecdota: "",
    }
    // Agrega más aquí...
];

const listContainer = document.getElementById('movie-list');
const buscador = document.getElementById('busqueda');

// Función que dibuja las películas que recibe como parámetro
function renderizar(lista) {
    listContainer.innerHTML = "";

    // Ordenar por fecha (más reciente primero)
    const ordenadas = [...lista].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    ordenadas.forEach(peli => {
        const fechaFormateada = new Date(peli.fecha).toLocaleDateString('es-ES', {
            day: 'numeric', month: 'short', year: 'numeric'
        });

        const card = document.createElement('div');
        card.className = 'movie-card';
        const indexOriginal = peliculas.findIndex(p => p.titulo === peli.titulo);
        card.onclick = () => abrirDetalle(indexOriginal);
        card.innerHTML = `
            <img src="${peli.poster}" class="poster" alt="${peli.titulo}">
            <div class="info">
                <span class="badge ${peli.estado}">${peli.estado}</span>
                <span class="title">${peli.titulo}</span>
                <div class="meta-data">
                    <span>🗓️ ${fechaFormateada}</span>
                    <span>👤 ${peli.sugiere}</span> 
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Evento para filtrar mientras escribes
buscador.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();
    
    const filtradas = peliculas.filter(peli => {
        return peli.titulo.toLowerCase().includes(termino) || 
               peli.sugiere.toLowerCase().includes(termino);
    });

    renderizar(filtradas);
});

// Función para abrir el detalle
function abrirDetalle(index) {
    const peli = peliculas[index];
    const modal = document.getElementById('modal-pelicula');
    const contenido = document.getElementById('contenido-detalle');
    const fechaOpciones = { weekday: 'long', day: 'numeric', month: 'long',};
    const fechaBonita = new Date(peli.fecha).toLocaleDateString('es-ES', fechaOpciones);

    contenido.innerHTML = `
        <div class="header-detalle">
            <img src="${peli.backdrop}" class="backdrop">
            <div class="poster-overlay">
                <img src="${peli.poster}" class="mini-poster">
            </div>
        </div>
        <div class="detalle-info">
            <h1>${peli.titulo}</h1>
            <div class="meta-detalle">
                <span>🗓️ ${new Date(peli.fecha).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                <span>👤 Sugerido por: ${peli.sugiere}</span>
            </div>
            <div class="comentarios-seccion">
                <h3>📝 Notas de la reunión</h3>
                <p>${peli.anecdota || "No hay notas."}</p>
            </div>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
}

function cerrarDetalle() {
    document.getElementById('modal-pelicula').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Carga inicial
document.addEventListener('DOMContentLoaded', () => renderizar(peliculas));