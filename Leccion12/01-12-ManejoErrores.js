'use strict'
try{
    let x = 10;
    //miFuncion();
    throw 'Mi error';
}
catch(error){
console.log(error);
}
finally{ //Es opcional
    console.log('Termina la revision de errores')
}


console.log('Continuamos...')