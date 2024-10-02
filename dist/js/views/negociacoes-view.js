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
                            <td>${new Intl.DateTimeFormat()
                .format(negociacao.data)}
                            </td>
                            <td>
                                ${negociacao.quantidade}
                            </td>
                            <td>
                                ${negociacao.valor}
                            </td>
                        </tr>    
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    //Utilizado para renderizar o template num elemento que foi capturado através do construtor
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
