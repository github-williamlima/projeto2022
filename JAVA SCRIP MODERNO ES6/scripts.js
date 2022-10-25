// 1 - Var , let e const 
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x);
}

console.log(x);

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a);
}

console.log(a);

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i);
}

function logName() {
    const name = 'William'
    console.log(name);
}

const name = 'Pedro'
logName();
console.log(name);

// 2 - Arrow function
const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}

const arrowSumMenor = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));
console.log(arrowSumMenor(5, 7));

const greetig = (name) => {
    if (name) {
        return "Olá " + name + " !"
    } else {
        return "Olá"
    }
}

console.log(greetig("William"));
console.log(greetig());

const testeArrow = () => console.log("Testou");
testeArrow();

// Criando um objeto
const user = {
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self);
            console.log('Username: ' + self.name)

        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log('Username: ' + this.name);
        }, 700)
    },
}

user.sayUserName();
user.sayUserNameArrow();

// 3 - Filter
const arr = [1, 2, 3, 4, 5]
console.log(arr);

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
})

console.log(highNumbers);

const users = [
    { name: 'William', available: true },
    { name: 'Pedro', available: false },
    { name: 'João', available: false },
    { name: 'Marcos', available: true },
]

const availableUsers = users.filter((user) => user.available); // usuarios true
const notAvailableUsers = users.filter((user) => !user.available); // usuários falso
console.log(availableUsers);
console.log(notAvailableUsers);

// 4 - MAP: podemos modificar algo existente
const products = [
    { name: 'Camisa', price: 10.99, category: 'Roupas' },
    { name: 'Chaleira eletrica', price: 49.99, category: 'Eletro' },
    { name: 'Fogão', price: 400, category: 'Eletro' },
    { name: 'Calça jeans', price: 50.99, category: 'Roupas' },
]

// Todos os item de roupas fiquem em promoção
products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products);

// 5 - Template literals
const userName = 'Matheus'
const age = 30

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`);
console.log("O nome do usuário é " + userName + " e ele tem " + age + " anos");

// 6 - Destructuring com arrays e objetos

const fruits = ["Maça", "Laranja", "Mamão"]
const [f1, f2, f3] = fruits

console.log(f1);
console.log(f2);
console.log(f3);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const { 
    name: productName, 
    price, 
    category: productCategory, 
    color 
} = productDetails

console.log(`O nome do produto é ${productName} , custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)

// 7 - Spread operator: vou unir 2 arrays
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2] // Unindo os 2 arrays
console.log(a3);

const a4 = [0, ...a1, 4]
console.log(a4);

// Com objetos
const carName = {name: 'Gol'}
const carBrand = {brande: 'VW'}
const otherInfos = {km: 10000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos}
console.log(car);

const car2 = {...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car2);

// 8 - Classes
class Product {
    constructor(name,price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discont){
        return this.price * ((100 - discont) / 100)
    }

}

const shirt = new Product('Camisa gola V', 20)
console.log("O nome do produto é: " + shirt.name);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product('Tenis verde',120)
console.log(tenis.name)
console.log(tenis.productWithDiscount(20));


// 9 - Herança
class ProductWithAttributes extends Product {
    constructor(name,price,colors){
        super(name,price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores são:")
        this.colors.forEach((color) => { // Loop que mostra todas as cores
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])
console.log(hat.name)
console.log(hat.productWithDiscount(10));
hat.showColors();




