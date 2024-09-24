import { Negociacao } from "./negociacao";

export class Negociacoes{
    //Array<Negociacao> é a mesma coisa que Negociacao[]
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    /* 
        ReadonlyArray permite apenas a leitura da lista, mantendo os dados já adicionados
        preservados, impossibilitando de serem modificados ou removidos.
        Assim impede que pessoas desenvolvedoras utilize métodos de array
        como push() e pop().
        
        Modificador readonly resulta na mesma coisa que ReadOnlyArray
    */
    listaDeNegociacoes(): readonly Negociacao[]{
        return this.negociacoes;
    }
}