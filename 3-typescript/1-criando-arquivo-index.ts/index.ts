//* Readonly e Private

interface ICachorro {
    nome: string,
    idade: number,
    parqueFavorito?: string,
}

type CachorroSomenteLeitura = {
    readonly[K in keyof ICachorro]: ICachorro[K];
    // readonly[K in keyof ICachorro]-?: ICachorro[K]; // Remove os opcionais
}

class Cachorro implements ICachorro {
    nome;
    // private idade;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const meuCachorro = new Cachorro('Benji',5);

// Importar bibliotecas

import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova função')
    }
});

$('body').novaFuncao();