//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

console.log(autos[1]);
//Acceder a los arreglos y mostrar los valores
for (let i = 0 ; i < autos.length; i++){
    console.log(i + ' : ' +autos[i]);
}
//Modificar arreglos
autos[1] = 'MercedesBenz';
console.log(autos[1]);

//Agregar valores al arreglo
autos.push('Audi');
console.log(autos);

console.log(autos.length)
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[5] = 'Porshe';
console.log(autos)

console.log(Array.isArray(autos));
console.log ( autos instanceof Array);