//* REST 

//converte um conjunto de argumentos num unico e retorna um array

function sum(...args){
    return args.reduce((ret,value) => ret + value, 0)
}

console.log(sum(1,2,4,5));

//* SPREAD

//converte um array, string, objeto ou objetos iteraveis num conjunto de elementos individuais

const numeros = [1,2,3,4];
const maiorNumero = Math.max(...numeros);

const str = 'Leonardo Anthony';

function logChars(...str){
    console.log(str);
}
logChars(...str);

//Construindo arrays com spread

const arr = [1,2,3,4];
const arr2 = [...arr,5,6,7,8];

// Objetos

const obj = {
    test: 123,
}

const obj2 = {
    ...obj,
    test2: 'teste2',
}

