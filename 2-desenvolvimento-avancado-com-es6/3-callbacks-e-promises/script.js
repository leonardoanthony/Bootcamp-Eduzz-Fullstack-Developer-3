//? Callbacks

function doSomething(callback){
    setTimeout(() => {
        //did something
        callback('First Data');
    },1000)
}

function doOtherThing(callback){
    setTimeout(() => {
        //did other thing
        callback('Second Data');
    },1000)
}

function doAll(){
    doSomething((data) => {
        const processedData = data.split('');

        doOtherThing((data2) => {
            const processedData2 = data2.split('');

            setTimeout(() => {
                console.log(processedData, processedData2);
            },1000)
        })
    })
}

// doAll();

//? Promises

const doSomethingPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //did something
        resolve('First Data');
    },1000)
});

const doOtherThingPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //did other thing
        resolve('Second Data');
    },1000)
})

// Estados de uma promisse
// Pending (pendente)
// Fulfilled (resolvida)
// Rejected (rejeitada)

doSomethingPromise
    .then(data => {
        console.log(data.split('')); 
        return doOtherThingPromise})
    .then(data2 => {
        console.log(data2.split(''));
    })
    .catch((error) => console.log('Um erro ocorreu'));


// Executando as duas promisses em paralelo

Promise.all([doSomethingPromise, doOtherThingPromise])
    .then(data => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
    })