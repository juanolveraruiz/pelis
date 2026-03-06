const peliculas = [
    {
        titulo: "Eternity",
        poster: "https://atwenty-four.transforms.svdcdn.com/production/images/Eternity_DOM_Online_Teaser_1-Sheet_01_FIN8.jpg?w=1923&auto=compress%2Cformat&fit=crop&dm=1753717316&s=b61bf543a5bed1bf6f7d20383340c3d0",
        backdrop: "https://reactormag.com/wp-content/uploads/2025/12/eternity-movie.jpg",
        estado: "pendiente",
        sugiere: "Votación (Juan)",
        fecha: "2026-03-06",
        anecdota: "",
    },
    {
        titulo: "Detective Pikachu",
        poster: "https://images.justwatch.com/poster/309518628/s718/pokemon-detective-pikachu.jpg",
        backdrop: "",
        estado: "vista",
        sugiere: "Luis",
        fecha: "2026-02-27",
        anecdota: "",
    },
    {
        titulo: "Propuesta de Año Bisiesto",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/532c45b94933a76674a4bcc6d5ab5081394da5bc3a0d683de1eee80bb7e1901c.jpg",
        backdrop: "",
        estado: "vista",
        sugiere: "Marisela",
        fecha: "2026-02-19",
        anecdota: "",
    },
    {
        titulo: "Your Name",
        poster: "https://m.media-amazon.com/images/M/MV5BMTIyNzFjNzItZmQ1MC00NzhjLThmMzYtZjRhN2Y3MmM2OGQyXkEyXkFqcGc@._V1_.jpg",
        backdrop: "",
        estado: "vista",
        sugiere: "Alan & Juan",
        fecha: "2026-02-13",
        anecdota: "",
    },
    {
        titulo: "Un Par Nada Ejemplar",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/a111c728ac239b82cc4360a56470d5dc34956150d7f72ba8ab86f94a2b9d5840.jpg",
        backdrop: "",
        estado: "vista",
        sugiere: "Claudia",
        fecha: "2026-02-03",
        anecdota: "",
    },
    {
        titulo: "The Interview",
        poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10569374_p_v13_ae.jpg",
        backdrop: "",
        estado: "vista",
        sugiere: "Alan",
        fecha: "2026-01-30",
        anecdota: "",
    },
    {
        titulo: "This Is The End",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/3e44d0a657cdefeaa6ce7502af8eb864f0bb516051d99c6b572a941fbc7bce9d.jpg",
        backdrop: "",
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