export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /*
        ReadonlyArray permite apenas a leitura da lista, mantendo os dados já adicionados
        preservados, impossibilitando de serem modificados ou removidos.
        Assim impede que pessoas desenvolvedoras utilize métodos de array
        como push() e pop().
    */
    listaDeNegociacoes() {
        return this.negociacoes;
    }
}
