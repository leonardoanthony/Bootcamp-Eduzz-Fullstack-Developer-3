//? Symbols

// gerador de identificador único

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

// console.log(uniqueId); // Symbol(Hello)

uniqueId === uniqueId2; // false

// é possivel ocultar uma propriedade de objeto, indicando que ela não deveria ser alterada ( como se fosse privada)

const obj2 = {
    [uniqueId]: 'Hello',
}

// a unica forma de recuperar esse valor é através da função

Object.getOwnPropertySymbols(obj2);

//Symbol possuem atributos

//[Symbol.iterator]

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();

// console.log(it.next()); //arr[0]

//iterador: interface para consumir passo-a-passo uma lista/estrutura de dados;

//Como ele funciona

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => {
                
                i++;
                return{
                    value: this.values[i - 1],
                    done: i > this.values.length,
                };
                
            }
        };
    }
};

const objIterator = obj[Symbol.iterator]();

console.log(objIterator.next());
console.log(objIterator.next());
