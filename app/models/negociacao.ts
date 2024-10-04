export class Negociacao{
 

    /*
    Explicitando o modificador de acesso direto no construtor, indicando 
    para o typeScript que ele vai "por debaixo do panos" criar
    uma propriedade da sua classe que contenha o mesmo nome dos 
    paramêtros do seu contrutor e fazer a atribuição.
    */ 
   constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){}

    /*
    Programação defensiva
    Clonando a data para que ela seja imutável e preserve o data
    que tenho dentro da minha negociação. Desta forma, caso alguém
    tente adicionar/alterar a data, a pessoa será impedida de realizar a operação, 
    seja por, via de atribuição (const data = new Date()) 
    ou via set (negociacao.data.setDate(12)).
    */
   get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
   }

   get volume(): number{
    return this.quantidade * this.valor;
    }


    public static criaDe(dateString: string, quantidadeString: string, valorString: string) : Negociacao{
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
