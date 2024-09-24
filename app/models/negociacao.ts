export class Negociacao{
 

    /*
    Explicitando o modificador de acesso direto no construtor, indicando 
    para o typeScript que ele vai "por debaixo do panos" criar
    uma propriedade da sua classe que contenha o mesmo nome dos 
    paramêtros do seu contrutor e fazer a atribuição.
    */ 
   constructor(
        private _data:Date,
        private _quantidade: number,
        private _valor: number
    ){}

   get data(): Date{
    return this._data;
   }

   get quantidade(): number{
    return this._quantidade;
   }

   get valor(): number{
    return this._valor;
   }

   get volume(): number{
    return this._quantidade * this._valor;
    }
}
