export class Negociacao{
 

    /*
    Explicitando o modificador de acesso direto no construtor, indicando 
    para o typeScript que ele vai "por debaixo do panos" criar
    uma propriedade da sua classe que contenha o mesmo nome dos 
    paramêtros do seu contrutor e fazer a atribuição.
    */ 
   constructor(
        public readonly data:Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){}

   get volume(): number{
    return this.quantidade * this.valor;
    }
}
