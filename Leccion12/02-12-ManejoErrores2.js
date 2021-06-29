'use strict'
let resultado = -9;

try{
    x = 10;
    if(isNaN(resultado)) throw 'No es un número';
    else if (resultado === '') throw 'Es una cadena vacia'
    else if (resultado >= 0) throw 'Valor positivo'
    else if (resultado < 0) throw 'Es un valor negativo'
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termina revision de errores')
}