let promesa = new Promise( (resolver) => {
    console.log('Inicio promesa')
    setTimeout( () => resolver('Saludos con promesa y TimeOut', 3000))
    console.log('Fin de la promesa');
} );

promesa.then(valor => console.log(valor));