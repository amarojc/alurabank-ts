export class Negociacao {
    /*
    Explicitando o modificador de acesso direto no construtor, indicando
    para o typeScript que ele vai "por debaixo do panos" criar
    uma propriedade da sua classe que contenha o mesmo nome dos
    paramêtros do seu contrutor e fazer a atribuição.
    */
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
