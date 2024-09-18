/*
- atributos privados (#), somente acesso a própria classe 
permitindo definir os valores através do construtor ou por métodos da própria classe.
- export (diretiva) para poder ser importado e permitir ser instanciado em um outro módulo (app.js, por exemplo)
*/
export class Negociacao{
    #data;
    #quantidade;
    #valor;

   constructor(data, quantidade, valor){
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
   }

   get data(){
    return this.#data;
   }

   get quantidade(){
    return this.#quantidade;
   }

   get valor(){
    return this.#valor;
   }

   get volume(){
    return this.#quantidade * this.#valor;
    }
}
