let miFuncion = function (){
    console.log('Saludos desde mi funcion')
}
//No se aplica el termino de hoisting
//const miFuncionFlecha = ()=>{//El operador flecha es para inicializar el cuerpo
  //  console.log('Saludos desde mi funcion flecha')
//}

//const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha');
//miFuncionFlecha();

//const saludar = () => {
  //  return 'saludos desde función flecha'
//}

const saludar = () => 'Saludos desde funcion flecha'
 
console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Sulvara'})
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje)
funcionConParametros('Saludos desde mi funcion con parámetros')


const funcionConParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return 'Resultado: ' +resultado;
}
console.log( funcionConParametros2 (3,5));