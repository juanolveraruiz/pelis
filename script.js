// Tu base de datos de películas
const peliculas = [
    {
        titulo: "Dune: Part Two",
        poster: "https://image.tmdb.org/t/p/w500/8j58YEB1vUcz2Kj7vWoZKAozrxA.jpg",
        estado: "visto",
        quienErigio: "Juan"
    },
    {
        titulo: "Poor Things",
        poster: "https://image.tmdb.org/t/p/w500/7WsyChvRStvS0yNstatusp7Yv7S.jpg",
        estado: "pendiente",
        quienErigio: "Sofía"
    }
];

const listContainer = document.getElementById('movie-list');

// Función para renderizar las películas
function cargarPeliculas() {
    peliculas.forEach(peli => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        card.innerHTML = `
            <img src="${peli.poster}" class="poster" alt="${peli.titulo}">
            <div class="info">
                <span class="badge ${peli.estado}">${peli.estado}</span>
                <span class="title">${peli.titulo}</span>
                <div style="font-size: 0.8rem">Elegida por: ${peli.quienErigio}</div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', cargarPeliculas);