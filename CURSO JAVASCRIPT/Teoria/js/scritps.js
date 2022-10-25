/********************************************************* 
   UTILIZANDO O CONSOLE PARA IMPRESSAO/DEBUG DE ELEMENTOS. 
   Objeto base: console 
**********************************************************/

// Mensagem padrao para debud do codigo. 
console.log(" Ola ! Esse é meu primeiro scritp ");

// Mensagem de erro na tela. A aparencia dele é diferente do "log"
console.error("Este é um erro")

// Mensagem de aviso na tela. 
console.warn("Este é um aviso")


/********************************************************** 
   CONCEITO BASE DE VARIAVEIS
   Conceito: Forma que temos de guardar algum valor para uso posterior no nosso softwares.
   var e let não podem ser declarados mais de uma vez no mesmo escopo, ou seja, se no meu codigo ja existir uma 
   variavel do tipo VAR ou LET não posso declarar outra com o mesmo nome dentro do escopo atual, a não ser que eu 
   mude o nome dela.

**********************************************************/

// Conceiro mais antigo: variavel var
var x = 10
 
// Conceiro mais moderno
let y = 10
const z = 20 // Nessa variavel eu nao posso reatribuir valor, pois é uma constante.

//Nesse exemplo eu declarei o y novamente no mesmo escopo. Dessa forma da erro na aplicacao
// let y = 55

if(1){
    let y = 55 // Dessa forma não daria erro pois essa variavel y esta fora do meu escopo padrao.
}

console.log(x)
console.log(y)
console.log(z)


/********************************************************* 
   CONCEITO DE TIPOS DE DADOS 
   Objeto base: console 
**********************************************************/

//Tipos de dados
const name = "William"
console.log(name)

//Validando o tipo de dados com o comando typeoff, para saber o tipo de dados: string, int, float
console.log(typeof name)  

//Tipo de dado numerico
const shirtqtd = 4
console.log(shirtqtd)
console.log(typeof shirtqtd)

// Tipo de dado com virgula. No javascritp é considerado uma coisa so
const decimal = 10.5
console.log(decimal)
console.log(typeof decimal)

// Tipo Boleano. Aceita apenas dois valores: true/false
const bolean = false
console.log(bolean)
console.log(typeof bolean)

// Tipo de variavel null.Variavel que nao tem valor ainda mas iremos modificar ao longo do programa.
let surname = null
console.log(surname)
console.log(typeof surname)

surname = "William Lima de Sousa"
console.log(surname)
console.log(typeof surname)

// Criando variavel com valor indefinido.Boas praticas: criar variavel como null
let age 
console.log(age)
console.log(typeof age)

age = 30
console.log(age)
console.log(typeof age)

// Criando uma array/lista de dados. Aqui nos inserimos uma lista com o mesmo tipo de dados
const languages = ["JavaScript","PJ","PHP"]
console.log(languages)
console.log(typeof languages)

// Objeto. Aqui nós podemos criar uma lista com varios tipos de dados: string, int.
const user = {email: "williamufg@gmail.com", password:"teste123", age: 30} // Objetct literals
console.log(user)
console.log(typeof user)


/********************************************************* 
 * 
   CONCEITO DE METODOS DE STRING
   Podemos acessar as propriedades do metodos, que estão disponiveis
   Metodos de manipulação de texto em strings.
   
**********************************************************/
const fullname = "William Lima" 
console.log(fullname.length ) // Aqui eu acesso a propriedade length que mostra quantos caracteres tem o nome.

// Separando minha string em array/lista
const stringToArray = fullname.split(' ') // Propriedade split separa minha string numa lista.
console.log(stringToArray)

// Mudando o case da minha string
console.log(fullname.toUpperCase()) // Transforma as letras em caixa alta
console.log(fullname.toLowerCase()) // Transforma as letras em caixa alta

// Encontrar uma palavra numa string. Aqui achamos o nro da letra que corresponde ao que procuro
console.log(fullname.indexOf('Lima')) // Retorna o nro que corresponde ao inicio da palabra/letra procurada
console.log('oaisjasdf'.indexOf('Lima')) // Caso não encontre, como nesse exemplo, retorna -1

// Extrair parte de uma string. Uso comando slice. Aqui eu informo onde inicio e onde termino a extração da letra
console.log(fullname.slice(0,7))


/********************************************************* 
 
   CONCEITO DE METODOS DE MANIPULAÇÃO DE ARRAYS/LISTAS
     
**********************************************************/
const list = ['a','b','c','d','e'] // Listas começam a contar de 0

// Extrair a quantidade de elementos que tenho numa lista. Mostro quantos elementos tenho na lista. Uso metodo "length"
console.log(list.length)

// Posso resgatar um elemento especifico da lista, atravez do seu indice.
console.log(list[2])

// Posso adicionar um item/um novo elemento na minha lista
list[5]='f'
console.log(list)

// Como pegar o último elemento da minha lista.
console.log(list[list.length-1])

// Posso adicionar um elemento no fim da minha lista. Metodo "push"
list.push('g')
console.log(list)

// Removendo um elemeto do final da minha lista. Metodo "pop"
list.pop()
console.log(list)

// Removendo um elemento do inicio da minha lista. Meotodo shift
list.shift()
console.log(list)


// Posso adicionar um elemento no inicio da minha lista. Metodo "unshift"
list.unshift('w')
console.log(list)



/********************************************************* 
 
             CONCEITO OBJETOS NO JAVASCRIPT
     
**********************************************************/

// Declarando nosso objeto, que contem diversos itens
const produtos = {
   name:'Camisa',
   price: 15.99,
   inStock: true,
   sizes: ['P','M','G'],
   'Main color': 'Blue'
}
   
// Acessando um item de um objeto. Cooocamos o nome do objeto.nomeDoItem
console.log(produtos.name)
console.log(produtos['name']) 

// Utilizamos esse metodo "produtos['name'])" quando temos uma propriedade entre aspas
console.log(produtos['Main color']) 

// Extrair variáveis por meio de objetos: DESTRUCTURING
const {price,inStock} = produtos // Crio duas variaveis a partir do meu objeto. As variaveis devem ter os mesmos tipos
console.log(price)
console.log(inStock)

// Extrair variaveis de um array/lista. Como é uma lista nao usamos nomes
const [n1,n2] = list  //(const list = ['a','b','c','d','e']. Lista declarada mais acima)
console.log(n1)
console.log(n2)


/********************************************************* 
 
   CONCEITO DE JSON NO JAVASCRIPT
   Significado: JavaScript Objetc Notation     
   Utilização: comunicação entre APIs. Exemplo: XML 
     
**********************************************************/

// Podemos criar um objeto normal que depois vira um JSON
const dog = {
   name:'Shark',
   age:10
}

/* Acessar objeto como json. Para o navegador o JSON é um texto. No exemplo abaixo eu converto meu 
objeto em json. Assim eu envio como stringfile */
const json = JSON.stringify(dog)
console.log(json)

// Quando eu recebo um objeto JSON eu converto ele novamente para uma objeto JAVASCRITP
const obj = JSON.parse(json)
console.log(obj)

/* Forma incorreta. Nesse caso eu inseri uma virgula no final, deixando a constante incorreta.

const jsonErrado = '{"name":"teste","surname":"Testando",}'
const obj2 = JSON.parse(jsonErrado)
console.log(jsonErrado) */


/********************************************************* 
 
   CONCEITO ESTRUTURAS CONDICIONAIS
   Importante: if/else
     
**********************************************************/

// Fazendo uma verificação
const a = 10

// Validações que podemos fazer: >,<, >=,<=
if (a > 8){
   console.log('A é maior que 8')
}

// Validação de === : valida o tipo de dado (string,inte) + o valor do dado. É uma validação mais segura
const b = 'Jose'

if (b==='João'){
   console.log('Ele se chama João')
} else if(b ==='Pedro'){
   console.log('Ele se chama Pedro')
} else {
   console.log('Não encontramos o nome do usuario')
}

// Temos o if ternário. If que pode ser feito numa linha só
const someNumber = 14
let testingNumber = someNumber < 20 ? 'Yes' : 'No'
console.log(testingNumber)


/********************************************************* 
 
   CONCEITO ESTRUTURAS DE REPETIÇÃO/LOOP
   Importante: while
     
**********************************************************/

// Crio uma lista (constante) + um contador
const myList = [1,2,3,4,5]
let counter = 0

// Nesse exemplo eu imprimo o contador enquanto counter for menor que a lista.
while( counter < myList.length){
   console.log(myList[counter])
  // counter = counter +1 
   counter++
}


// Concatenando uma string num inteiro. Uso sinal de "+"
const myList2 = [10,11,12,13,14]
let counter2 = 0

while( counter2 < myList2.length){
   console.log('Imprimindo: ' + myList2[counter2])
  // counter = counter +1 
   counter2++
}

// Utilizando "FOR"
const mySecondList = ['a','b','c','d','e']

// Utilizando recurso chamado template literals: Utilizo a crase na impressão do resultado, e nesse formato fica mais dinamico.
for (let counter = 0; counter < mySecondList.length; counter++ ){
   console.log(`Imprimindo nova lista: ${mySecondList[counter]}`) 
}



/********************************************************* 
 
   CONCEITO METODO ARRAY
   Importante: repetição. Utilizando metodo forEach,map,filter,reduce. 
   Utilizaremos uma função anonima.
     
**********************************************************/
const names= ["Mateus","Joao","Pedro","Maria"]

/*- Função (function): algo que retorna algo a cada repetição
  - Posso imprimir o nome
  - Passo como parametro a entidade de como eu vou chamar cada item da lista. Esse parametro nao precisa
  ser minha costante. Apenas o nome que que diz respeito ao resultado esperado, nesse caso nosso "nome" 
  - É mais interessante utilizar forEach porque nao preciso preocupar com contador, nem com o tamanho da minha lista
  - Não preciso também acessar o indice do elemento, porque eu transformo ele numa variavel. */
names.forEach(function(nomes){
 console.log(`O nome é: ${names}`)
} )

//Metodo MAP serve para quando queremos modificar um valor de um array
const modifiedNames = names.map(function(name){
   if (name ==='Mateus'){
      return (name='Sr. Mateus')
   } else {
      return name
   }
})

console.log(modifiedNames)

// Metodo FILTER. Filtra meu array conforme função anonima.
const bigNumber = [1,2,3,4,5,6,10,100,1000].filter(function(number){
   return number >= 5
})

console.log(bigNumber)

/* Reduzir um array inteiro para um elemento: reduce. Na função eu passo nao so uma entidade, 
mas passo também a entidade quando o elemento fica reduzido, assim utilizo duas entidades
 - TOTAL: representa minha entidade com o array
 - NUMBER: representa minha lista reduzida
 - TOTAL no inicio da iteracao é 0 e number é 10. Fica: 0 + 10 
 - Segunda iteração: total=10 + number=20. Assim ate acabar a lista */
const snumAll = [10,20,30,40].reduce(function(total,number){
 return total + number
})

console.log(snumAll)


/********************************************************* 
 
   CRIANDO AS NOSSAS FUNÇÕES NO JAVASCRIPT
   - FUNCAO: Criamos um bloco de codigo que pode ser reutilizado em 
   várias partes do nosso programa.
   
**********************************************************/

function minhaFuncao(){
   console.log('Olá função')
}

// Invocando uma função / chamando. Apenas escrevo no "nome dela + ()"
minhaFuncao()

// Argumentos: parametros de uma função
function nomeCompleto(nome,sobrenome){
   return `O nome completo é: ${nome} ${sobrenome}`
}

console.log(nomeCompleto('William','Lima de Sousa'))

// Inserindo variaveis
const primeiroNome = 'Jose'
const segundoNome = 'Augusto'
const meuNomeCompleto = nomeCompleto(primeiroNome,segundoNome)
console.log(meuNomeCompleto)


// Sintaxe mais rezumida para funções: ARROW FUNCTIONS.
const myArrowFunction = (a,b)=> {
   return a + b
}

console.log(myArrowFunction(2,5))

const somaTotal = [10,20,30,40,50].reduce((tot, num) =>{
   return tot+num
})

console.log(somaTotal)

// Fazendo um if ternario de forma mais simples, quando não preciso do corpo da função
const mySimplesArrowFunction = (a,b)=> a + b 
console.log(mySimplesArrowFunction(5,9))


/********************************************************* 
 
   CLASSES NO JAVASCRIPT
   - Estabelecemos os conceitos de orientação a objetos em javaScript
   - Classes, metodos, construtores, heranças
   
**********************************************************/

// Criando uma classe
class Product {
   constructor(name,price){
      this.name = name // Atrelo o nome do produto a uma instancia nova do objeto
      this.price = price // Atrelo o preco do produto a uma instancia nova do objeto

   }

   // retorna os detalhes do produto (Metodos)
   productDetails(){
      return `O nome do produto é ${this.name} e o preço é ${this.price}`
   }
}

// Criando um novo produto e atrelando esses valores, a partir da classe criada.
const socks = new Product('Meia Branca', 10.99)
console.log(socks.name)
console.log(socks.price)

// Tenho uma reaproveitamento das classes, semelhante a funções
const socks2 = new Product('Camiseta', 50.99)
console.log(socks2.name)
console.log(socks2.price)

// Invocando o metodo dentro da classe, como se fosse uma função pois nao vai metodo nele como argumento
console.log(socks2.productDetails())

// HERANÇA: Quando estendemos uma classe
class SuperProduct extends Product {
   constructor(name,price,size){
      super(name,price) // As entidades da classe PAI passamos com o metodos super
      this.size = size
   }

   // Metodos dentro das classes
   showAdjective(adjective){
      return `O ${this.name} produto é muito ${adjective}`
   }

   // Metodos estaticos: static - Metodo que posso executar sem criar uma nova instancia
   static sayHello(){
      console.log('Hello ')
   }
   
}

// Invocando a superClasse
const tenis = new SuperProduct('Tenis Vermelho', 56.55,'42')
console.log(tenis.name)
console.log(tenis.price)
console.log(tenis.size)

// Fazendo a chamada do metodo dentro da classe: variavel.metodo(var1,var2,etc)
console.log(tenis.showAdjective('Bom'))

// Invocando metodos estaticos
SuperProduct.sayHello()

/********************************************************* 
 
   DOM - Document Object Model NO JAVASCRIPT
   - Ferramente para fazer modificações no html e no css 
   - Ele acontece basicamente pela selecao de elementos, ou seja, antes de alterar alguma coisa precisamos
   atingir algum elemento/tag no html.
   - Maneira mais facil de fazer isso: por tag, por classe e por id 
   - Sera ensinado os metodos mais utilizados no momento para selecionar os itens no html
   
**********************************************************/

/* Selecionando elemento por ID. 
- "document:" é um objeto que representa todos os elementos da nossa pagina 
- Com esse objeto conseguimos ver todos os elementos da nossa pagina
- Acessamos todos os metodos disponiveis*/
const title = document.getElementById('title')
console.log(title)

// Utilizando query selector: trabalhamos com o selector do CSS
const sameTitle = document.querySelector('#title')
console.log(sameTitle)

/*Utilizando query selector para selecionar varios elementos de uma vez
- Posso selecionar os elementos pelos seus indices*/
const texts = document.querySelectorAll('.text')
console.log(texts)
console.log(texts[2])

/* Utilizando estrutura de repetição
- textContent: metodo utilizado para acessar o elemento do meu texto */
texts.forEach((elemento)=>{
   console.log(elemento.textContent.toUpperCase())
})

/* Como podemos fazer alterações no texto: Manipulação de elementos
- Como title foi selecionado: const title: 
   - const title = document.getElementById('title')
   - const sameTitle = document.querySelector('#title')*/

title.textContent = 'Mudei o texto'

/* Podemos fazer alteração do HTML
 Como selecionamos texts:
 - const texts = document.querySelectorAll('.text') */
texts[0].innerHTML = '<span> Alteramos o html deste elemento </span>'

// Podemos fazer alteração dos estilos
texts[1].style.backgroundColor = 'red'

// Posso adicionar uma classe
texts[2].classList.add('my-class')
texts[2].classList.remove('my-class')

// Removendo elementos, excluindo o HTML da pagina
texts[3].remove()

// EVENTOS: acessando evento de um botao
const btn = document.querySelector('#btn')
btn.addEventListener('click',function(){
   console.log('Clicou')
})

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click',function(){
   texts[2].style.color = 'blue'
})


