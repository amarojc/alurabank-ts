export class NegociacoesView{

    private elemento: HTMLElement;

    constructor(selector: string){
        //Obtendo o elemento do DOM...
        this.elemento = document.querySelector(selector);
    }

    //Declarando o template da view: Tem a finalidade de retornar uma string HTML no futuro com os dados necesários
    template(): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>                
            </tbody>
        </table>
        `;
    }

    //Utilizado para renderizar o template num elemento que foi capturado através do construtor
    update(): void{
        this.elemento.innerHTML = this.template();
    }
}