
import { projetos } from './constants.js';


const projetosGrid = document.getElementById('projetos-grid');


projetos.forEach(projeto => {
    const projetoItem = document.createElement('div');
    projetoItem.classList.add('projeto-item');

    projetoItem.innerHTML = `
    <a >    
        <img src="${projeto.imagem}" alt="${projeto.titulo}">
        <h3>${projeto.titulo}</h3>
    </a>

    `;

    projetosGrid.appendChild(projetoItem);
});