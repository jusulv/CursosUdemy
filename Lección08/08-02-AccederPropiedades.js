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
console.log(persona.nombreCompleto())

console.log(persona ['apellido']);

//for in 
for( propiedad in persona){
    console.log (propiedad)
    console.log ( persona [propiedad])
}

//Agregar una propiedad
persona.tel = '3107974109'
console.log ( persona )
//Borrar una propiedad
delete persona.tel;
console.log( persona )

//Concatenar cada valor de cada propiedad
console.log( persona.nombre + ', ' + persona.apellido)

//for in
for (nombrePropiedad in persona){
    console.log ( persona[nombrePropiedad])
}

//Mediante un arreglo
let personaArray = Object.values(persona); //Regresa un arreglo
console.log (personaArray);

//Mediante una cadena
let personaString = JSON.stringify ( persona ) //Convierte 
                                               //al objeto a una cadena
console.log (personaString);


