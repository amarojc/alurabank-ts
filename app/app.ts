import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
//Pegando o form pela class
const form = document.querySelector('.form');
//Verifincando se o form não é nulo...
//Retornou um element (tipo implícito) que tem um addEventListener...
//preventDefault evita o refresh page após o submit
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}else{
   throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
