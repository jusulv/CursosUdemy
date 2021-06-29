//async indica que una funcion va a regresar una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor=> console.log(valor));

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa1 = new Promise (resolver => {
        resolver('Promesa con await');
    });
    console.log( await miPromesa1 );
}

//funcionConPromesaYAwait();

//Promesas, await, async y setTimeout
async function funcionConPromesaAwaityTimeout(){
    console.log('Inicio de la funcion')
    let miPromesa = new Promise(resolver => {
        setTimeout( () => resolver('Promesa con await y timeout'), 3000 );
       
    });
    console.log( await miPromesa);
    console.log('Fin de la funcion');
}
funcionConPromesaAwaityTimeout();

