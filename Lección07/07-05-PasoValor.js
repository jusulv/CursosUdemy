let x = 10; //Es primitivo porque no tiene atributos ni métodos

//a es un argumento
function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x); //No se puede modificar la variable
console.log(x);

//Paso por referencia
const persona = { //Se crea un objeto en memoria 
    nombre : 'Juan',
    apellido : 'Sulvara'
}
//Con este medio cambié el valor de los objetos
function cambiarValorObjeto(j1){//Método
    j1.nombre = 'Manuel';
    j1.apellido = 'Camacho';
}
//Paso por referencia
cambiarValorObjeto ( persona );
console.log( persona); 