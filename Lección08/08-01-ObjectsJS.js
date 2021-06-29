let persona = {
    nombre: 'Juan',
    apellido: 'Sulvara',
    email: 'jusul.com',
    edad: 28,
    //Agregar métodos
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona ['apellido']);


console.log(persona.nombreCompleto());

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido)

console.log(persona)

let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.direccion = 'carrera 4';
persona2.telefono = '3107974109';

console.log(persona2.telefono)