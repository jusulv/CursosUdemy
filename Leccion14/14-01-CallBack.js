function miFuncion(){
    console.log('Funcion 1')
}

function miFuncion2(){
    console.log('Funcion 2');
}

miFuncion();
miFuncion2();

//Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack('Resultado: ' + res)
}

sumar(5, 3, imprimir);

//Llamadas asíncronas con uso setTimeout
function miFuncionCallBack(){
    console.log('Saludo asíncrono después de 3 seg')
}


setTimeout(miFuncionCallBack, 3000);//Después de 3 seg

setTimeout( function(){ console.log('Saludo asíncrono 2')}, 4000);

setTimeout( () => console.log('Saludo asíncrono 3 '), 1000)
