class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}


try {
    const nome = 'Leonardo Anthony';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server Error'
        }
    });

    throw myError;
} catch(err){
    console.log('Error: ', err);
} finally {
    console.log('Keep going...');
}


// Metodos do console:

console.log('Black text');
console.warn('Yellow text with icon alert');
console.error('Red text');
console.trace(); // onde o código foi executado

console.group('My group');
console.log('1. item');
console.log('2. item');
console.groupEnd('My group');

console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
},2000);

console.table(['Leonardo Anthony', 'Soraphya']);

console.assert( 1 === 1, 'Falso');

console.log('%c styled log', 'color: blue')
