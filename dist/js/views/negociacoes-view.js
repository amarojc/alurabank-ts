export class NegociacoesView {
    constructor(selector) {
        //Obtendo o elemento do DOM...
        this.elemento = document.querySelector(selector);
    }
    //Declarando o template da view: Tem a finalidade de retornar uma string HTML no futuro com os dados necesários
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.listaDeNegociacoes().map(negociacao => {
            return `
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                    `;
        })}
            </tbody>
        </table>
        `;
    }
    //Utilizado para renderizar o template num elemento que foi capturado através do construtor
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
