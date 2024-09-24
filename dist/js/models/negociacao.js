export class Negociacao {
    /*
    Explicitando o modificador de acesso direto no construtor, indicando
    para o typeScript que ele vai "por debaixo do panos" criar
    uma propriedade da sua classe que contenha o mesmo nome dos
    paramêtros do seu contrutor e fazer a atribuição.
    */
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
