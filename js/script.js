
import { projetos } from './constants.js';


const projetosGrid = document.getElementById('projetos-grid');


projetos.forEach(projeto => {
    const projetoItem = document.createElement('div');
    projetoItem.classList.add('projeto-item');

    projetoItem.innerHTML = `
    <a href="${projeto.link}" class="projeto-link" >    
        <img src="${projeto.imagem}" alt="${projeto.titulo}">
        <div class="text-overlay">
            <h3>${projeto.titulo}</h3>
        </div>
    </a>

    `;

    projetosGrid.appendChild(projetoItem);
});