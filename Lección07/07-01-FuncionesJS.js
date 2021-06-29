//Hoisting
//miFuncion(8, 1);

//Declaración de la función
function miFuncion(a, b){
    console.log(arguments.length)
//console.log("Suma: " + (a + b));
    return a + b;
}

//Llamando a la funcion
let resultado = miFuncion(2, 3);
//console.log(resultado)

//Declaracion función de tipo expresion
//let x = function (a , b) (return a+ b);

(function(a , b){
    console.log("Ejecutando la función: " + (a + b));
})(4,3);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto)