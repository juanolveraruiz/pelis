const peliculas = [
    {
        titulo: "Eternity",
        poster: "https://atwenty-four.transforms.svdcdn.com/production/images/Eternity_DOM_Online_Teaser_1-Sheet_01_FIN8.jpg?w=1923&auto=compress%2Cformat&fit=crop&dm=1753717316&s=b61bf543a5bed1bf6f7d20383340c3d0",
        estado: "pendiente",
        sugiere: "Votación (Juan)",
        fecha: "2026-03-06"
    },
    {
        titulo: "Detective Pikachu",
        poster: "https://images.justwatch.com/poster/309518628/s718/pokemon-detective-pikachu.jpg",
        estado: "vista",
        sugiere: "Luis",
        fecha: "2026-02-27"
    },
    {
        titulo: "Propuesta de Año Bisiesto",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/532c45b94933a76674a4bcc6d5ab5081394da5bc3a0d683de1eee80bb7e1901c.jpg",
        estado: "vista",
        sugiere: "Marisela",
        fecha: "2026-02-19"
    },
    {
        titulo: "Your Name",
        poster: "https://m.media-amazon.com/images/M/MV5BMTIyNzFjNzItZmQ1MC00NzhjLThmMzYtZjRhN2Y3MmM2OGQyXkEyXkFqcGc@._V1_.jpg",
        estado: "vista",
        sugiere: "Alan & Juan",
        fecha: "2026-02-13"
    },
    {
        titulo: "Un Par Nada Ejemplar",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/a111c728ac239b82cc4360a56470d5dc34956150d7f72ba8ab86f94a2b9d5840.jpg",
        estado: "vista",
        sugiere: "Claudia",
        fecha: "2026-02-03"
    },
    {
        titulo: "The Interview",
        poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10569374_p_v13_ae.jpg",
        estado: "vista",
        sugiere: "Alan",
        fecha: "2026-01-30"
    },
    {
        titulo: "This Is The End",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/3e44d0a657cdefeaa6ce7502af8eb864f0bb516051d99c6b572a941fbc7bce9d.jpg",
        estado: "vista",
        sugiere: "Juan",
        fecha: "2026-01-23"
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

// Carga inicial
document.addEventListener('DOMContentLoaded', () => renderizar(peliculas));