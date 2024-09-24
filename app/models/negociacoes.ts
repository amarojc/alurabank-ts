import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    /* 
        ReadonlyArray permite apenas a leitura da lista, mantendo os dados já adicionados
        preservados, impossibilitando de serem modificados ou removidos.
        Assim impede que pessoas desenvolvedoras utilize métodos de array
        como push() e pop().
    */
    listaDeNegociacoes(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}