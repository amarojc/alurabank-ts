import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
//Pegando o form pela class
const form = document.querySelector('.form');
//Retornou um element (tipo implícito) que tem um addEventListener...
//preventDefault evita o refresh page após o submit
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
