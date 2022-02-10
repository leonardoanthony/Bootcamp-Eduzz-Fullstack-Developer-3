//? FETCH

fetch('./data.json')
    .then(responseData =>  {
        if( responseData.status === 200)
            return responseData.json();
        else
            throw new Error(`Request error status: ${responseData.status}`);
    })
    .then(jsonData => {
        // console.log(jsonData)
    })
    .catch(err => {
        console.log("Ocorreu um erro")
    })

//? async / await

const asyncTimer = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        },2000);
    });
}

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data ;
}

simpleFunc()
    .then(data => {
        console.log(data);
    })


//? EventEmitter

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', {user: 'Leonardo Anthony'});




