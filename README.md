# Alurabank-ts
### Alurabank-ts é um projeto de estudo desenvolvido no curso de TypeScript, na plataforma Alura, com o professor Flávio Almeida.


### Layout web
![Tela](https://github.com/amarojc/alurabank-ts/blob/main/assets/img/tela_alurabank-ts.jpg)



<br><br>
## Tópicos abordados no Curso

 **Porque usar TypeScript**
- Introdução ao projeto e sua estrutura;
- Um pouco sobre módulos do ECMASCRIPT;
- Modelagem de uma Negociação em JavaScript;
- Buracos em nossa modelagem por limitações da linguagem JavaScript.

**TypeScript e Compilador**
- Download do TypeScript;
- Configuração do compilador e papel do tsconfig.json;
- Integração com scripts do Node.js;
- Modificadores de acesso private e public;
- Benefícios iniciais da linguagem TypeScript.

**Benefícios da tipagem estática**
- O tipo implícito any;
- Benefícios da tipagem estática;
- Mais configurações do compilador tsc;
- Retorno de método explícito;
- Conversão de valores da interface do usuário.

**Modelagem do Domínio**
- Modelagem da classe Negociacoes;
- Utilização de Generics;
- Revisão sobre encapsulamento;
- Questões de mutabilidade e como solucioná-la;
- O tipo ReadonlyArray;
- Adição de negociações em nossa lista.

**Simplificando o código**
- Nova maneira de declaração de array com generics;
- O tipo ReadonlyArray;
- O modificador readonly;
- Getters e propriedades públicas em modo de leitura;
- Programação defensiva.


**Elaborando a view**
Criando nossa primeira view
Integrando nossa view à página
Criação de templates declarativos e dinâmicos
Manipulação declarativa do DOM através de template
Template dinâmico
Formatação de datas usando Intl

---- EDITAR 

**Herança e reaproveitamento de código**
Projeto da aula anterior
Criando view da mensagem
Resolvendo repetição de código
Herança e pequena surpresa
Utilizando Herança
Modificador de acesso
Mais surpresas com Herança
Avançando no uso de Generics
Dois tipos genéricos
Implementando uma classe abstrata
Utilizando Herança
Analisando uma classe abstrata

**Visibilidade de métodos e Enumeration**
Projeto da aula anterior
Visibilidade do método template
Métodos privados
Centralizando updates em um único lugar
Aceitando apenas dias úteis
Obtendo o dia da semana
Organizando melhor nosso código
Conhecendo enumerations
Cuidados na declaração de enums
Identificando valores no enum


**Lapidando nosso código**
Isolando a lógica de conversão de entrada
Métodos estáticos
Tornando um método estático
Protegendo nosso template
Utilizando parâmetros opcionais
Sobre parâmetros opcionais

**TSC e StrictNullChecks**
Projeto da aula anterior
Removendo comentários do código
Mudança no tsconfig.json
A configuração strictNullChecks
Revisando o strictNullChecks
Suprimindo a checagem onde faz sentido
Tratando null em nosso código

<br>
## Tecnologias utilizadas
* Node: v20.17.0
* TypeScript: ^5.6.2

## Executando o projeto

1 - Realize o download ou o clone do projeto <br>
2 - Descompacte o projeto<br>
3 - Abra o projeto  via prompt (cmd) ou pelo seu editor de códigos.<br>

* Execute o comando abaixo para realizar o download das dependências do projeto.

```
npm install
```

4 - Ainda pelo terminal, execute o comando abaixo para iniciar o projeto.<br>
O npm start irá executar os comandos: run watch e run server, definidos em package.json<br>

```
npm start
```


> Caso ocorra tudo bem, na inicialização do projeto, será apresentada a seguinte mensagem no términal:

 Starting compilation in watch mode...<br>
[0]<br>
[1] Did not detect a `bs-config.json` or `bs-config.js` override file. Using lite-server defaults...<br>
[1] ** browser-sync config **<br>
[1] {<br>
[1]   injectChanges: false,<br>
[1]   files: [ './**/*.{html,htm,css,js}' ],<br>
[1]   watchOptions: { ignored: 'node_modules' },<br>
[1]   server: {<br>
[1]     baseDir: 'dist',<br>
[1]     middleware: [ [Function (anonymous)], [Function (anonymous)] ]<br>
[1]   }<br>
[1] }<br>
[1] [Browsersync] Access URLs:<br>
[1]  -------------------------------------<br>
[1]        Local: http://localhost:3002<br>
[1]     External: http://192.168.1.25:3002<br>
[1]  -------------------------------------<br>
[1]           UI: http://localhost:3003<br>
[1]  UI External: http://localhost:3003<br>
[1]  -------------------------------------<br>
[1] [Browsersync] Serving files from: dist<br>
[1] [Browsersync] Watching files...<br>
[1] 24.09.24 16:51:01 200 GET /index.html<br>
[1] 24.09.24 16:51:01 200 GET /js/app.js<br>
[1] 24.09.24 16:51:01 200 GET /css/bootstrap.css<br>
[1] 24.09.24 16:51:01 200 GET /js/controllers/negociacao-controller.js<br>
[1] 24.09.24 16:51:01 200 GET /js/models/negociacao.js<br>
[1] 24.09.24 16:51:01 200 GET /js/models/negociacoes.js<br>
