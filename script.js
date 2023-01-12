// VAR

var cor = "azul"; //Aqui, a variável cor tem um escopo global porque existe fora de uma função
cor = "pink"  //Aqui mudamos o valor de azul para pink
cor = "cinza"; //Variáveis var podem ser declaradas novamente e atualizadas. Isso significa que podemos fazer uma alteração dentro do mesmo escopo e não obteremos nenhum erro.

console.log(cor);

function novaFuncao() {
  var cores = "verde"; // enquanto o cores o escopo é local, é da função.
  console.log(cores);
}
novaFuncao();

//LET

let nome = "Brendon";
nome = "Paulo";
console.log(nome);
 //let idade = 23
 let quartaFeira = true

console.log(typeof nome)
 console.log(typeof idade)
 console.log(typeof quartaFeira)

 let teste = "Olá";
 //let teste = "Olá novamente"; // erro: identificador 'teste' já foi declarado

 let n1 = 3
  let n2 = 5

 console.log(n1 + n2)

 let juliana = 19
 let ana = 15

 if( juliana > 18){
   console.log("pode entrar no site")
 } else {
   console.log("você não pode entrar no site")
 }

 if (ana >= 18){
   console.log("pode entrar no site")
 } else {
   console.log("você não pode entrar no site")
 }

 //CONST
 
 const nascimento = "2001";
 nascimento = "2001"; //erro: atribuição a uma variável constante.

 console.log(nascimento)

//--------------------

let idade = 25;

if (idade < 18) {
  console.log("você não pode comprar bebida");
} else {
  console.log("você pode comprar bebida");
}

// //------------IDENTIFICADORES -----------

 let birthdate = 1998 // = significa "recebe"
 console.log(birthdate)

// ---------TIPOS DE DADOS

//Dados textuais em Js são chamados de strings. Elas são geralmente atribuídas entre "aspas duplas", 'aspas simples' ou `crase`

 let string = "esse texto aqui é uma string";
 let string2 = 'e é lida como texto'

 let templateString = `Oi, ${string}  ${string2} ` //É uma forma mais "elegante" de escrever string
 console.log(templateString)

 //------------ TemplateString  `${}`

 let aluno = "Rafa"
 let aluno2 = 'Milena'
 let alunos = `Esses são os alunos do vnw : ${aluno} e ${aluno2}`
console.log (alunos)

 let boolean = true; /*dados booleanos, tipo "verdadeiro" ou "falso"*/
 console.log(`O valor de boolean é ${boolean}`);

// ----------Case sensitive e Camel case para criar nomes
 let sobreNome = "meu sobrenome"
 var sobrenome = "Moreira"
 console.log(sobrenome)
 console.log(sobreNome)
 console.log(`Meu ${sobreNome} é ${sobrenome}`)

//-------Redeclararando variáveis
 sobrenome = "Muniz"
 console.log(`Meu ${sobreNome} é ${sobrenome}`)
 sobreNome = "Não é mais meu sobrenome"
 console.log(` ${sobreNome} o ${sobrenome}`)

// --------Verificando o tipo de dado
 let dia = 2023
 let cantora = "Shakira"
 //let quartaFeira = true
 let quintaFeira = false

 console.log(typeof dia)
 console.log(typeof cantora)
 console.log(typeof quartaFeira)
 console.log(typeof quintaFeira)

 console.log("Estou mexendo no console log")

 //Também temos mais três tipos de dados: array, object e function. Esses tipos veremos em outra aula

 let age = 17

 let sentenca1 = "Eu sou"
 let sentenca2 = "maior de idade"

 console.log(`${sentenca1} ${sentenca2}`)

 console.log(typeof sentenca1)

 let numero = 7

 let date = 2023

 console.log(date)

 

 let sextaFeira = false
 console.log(typeof sextaFeira)

 console.log("2" - "3")

 if(idade < 18){
     if(nome){
         console.log("você não pode comprar bebida")
     } else{
         console.log("você pode comprar bebida")
     }
 }

