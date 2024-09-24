export class Negociacao {
    /*
    Explicitando o modificador de acesso direto no construtor, indicando
    para o typeScript que ele vai "por debaixo do panos" criar
    uma propriedade da sua classe que contenha o mesmo nome dos
    paramêtros do seu contrutor e fazer a atribuição.
    */
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    /*
    Programação defensiva
    Clonando a data para que ela seja imutável e preserve o data
    que tenho dentro da minha negociação. Desta forma, caso alguém
    tente adicionar/alterar a data, a pessoa será impedida de realizar a operação,
    seja por, via de atribuição (const data = new Date())
    ou via set (negociacao.data.setDate(12)).
    */
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
