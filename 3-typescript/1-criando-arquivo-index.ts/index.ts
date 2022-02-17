function soma (a: number, b: number){
    return a + b;
}

soma(2,3);
//! soma('a','b');

//* Interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
}

//! animal.executarRugido('s');
//* animal.executarRugido(50);

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const felino: IFelino = {
    nome: 'Leopardo',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`);
}

