//? Generators

//Generators permite que faça pausas dentro de uma função


function* hello(){
    console.log("Hello");
    yield 1;

    //é possivel adicionar valores ao retorno do iterador 

    console.log("From");
    yield

    console.log("Function");
}

const it = hello();

it.next(); //Hello;
it.next(); //From;


//Generators permite a criação de objetos iteradores

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for(let i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};