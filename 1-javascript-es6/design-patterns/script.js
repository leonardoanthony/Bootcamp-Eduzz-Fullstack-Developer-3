//* Design Patterns

//* Factory

function User(){
    return {
        name: 'Leonardo',
        lastName: 'Anthony'
    }
}

const user = User();

//* Singleton

function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

// const p = Pessoa.call({name: 'Leonardo'});
// const p2 = Pessoa.call({name: 'Anthony'})

// console.log(p);
// console.log(p2);

//* Observer 

class Observable{
    constructor(){
        this.observables = [];
    }

    subscribe(fn){
        this.observables.push(fn);
    }

    notify(data){
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');






