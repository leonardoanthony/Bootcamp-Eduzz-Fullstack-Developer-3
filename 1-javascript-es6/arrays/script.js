//* Manipulando Arrays

//* Criando Arrays
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3);
const arr3 = Array.of(1,2,3);

const divs = document.querySelectorAll('div');
const arr4 = Array.from(divs);



//* Inserindo ou removendo elementos

//PUSH => adiciona ao final, retorna o tamanho atual do array

arr1.push(4); 

//POP => remove o ultimo, retorna o item removido

arr1.pop();

//UNSHIFT => adiciona ao começo, retorna o tamanho atual

arr1.unshift(0);

//SHIFT => remove o primeiro, retorna o item removido

arr1.shift();

//CONCAT => junta as duas arrays e retorna a nova

const newArr = arr1.concat(arr2);

//SLICE => fatia o array e retorna essa fatia

const arr = [1,2,3,4,5];

arr.slice(0,2);
//[1,2]
arr.slice(2);
// [3,4,5]
arr.slice(-1);
//[5]


//SPLICE => altera um array adicionando novos elementos enquanto remove elementos antigos 

arr.splice(2);
// remove e retorna [3,4,5]

arr.splice(0,0, 'first');
// ["first" , 1 , 2]


//* ITERANDO ELEMENTOS

//FOREACH => executa uma função para cada item do array

arr.forEach((item, index) => console.log(`${item} ${index}`));

//MAP => retorna um novo array de mesmo tamanho reiterando os valores dos elementos

arr.map(value => value * 2);
//[2,4,6,8,10];

//FLAT => retorna um novo array com todos os elementos de um sub array, concatenados de forma recursiva de acordo com a profundidade especificada

const arrayWithArray = [1,2,[3,4]];

arrayWithArray.flat();
//[1,2,3,4];


//KEYS => retorna um iterator contendo as chaves
//VALUES => retorna um iterator contendo os valores
//ENTRIES => retorna um iterator com par chave/valor

const frutas = ['melancia','uva','maçã'];
const frutasIterator = frutas.keys();

frutasIterator.next();
// value: 0, done: false


//* BUSCAR ELEMENTOS

//FIND => retorna o primeiro item que satisfaz a condição

const prieiroMaiorQueDois = arr.find((value) => value > 2);
//3

//FINDINDEX => retorna o primeiro indice do item que satisfaz a condição
//2
//FILTER => retorna um novo array com todos os itens que satisfaça a condição
// [3,4,5];


//SOME => retorna um booleano se algum item satisfaz a condição

const temItemPar = arr.some((value) => value % 2 === 0);
//true

//EVERY => verifica se todos os itens satisfazem a condição

const todosSaoPares = arr.every((value) => value % 2 === 0);
//false

//REDUCE => retorna um novo tipo de dado 
//1. o primeiro parâmetro é o que será retornado, 2. o ultimo dado (0) é o valor inicial do parametro;

arr.reduce((total, value) => total += value,0);
//15