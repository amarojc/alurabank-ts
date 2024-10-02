import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
  
    //Declarando o template da view: Tem a finalidade de retornar uma string HTML no futuro com os dados necesários
    template(model: Negociacoes): string{
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
}