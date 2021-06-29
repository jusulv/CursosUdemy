let persona1 = {
    nombre: 'Juan',
    apellido: 'Sulvara',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' +this.nombre + ' ' + this.apellido + ' ' +tel;
    }
}

let persona2 = {
    nombre: 'Toni',
    apellido: 'Gambino'
}

//Uso de Call para usar el metodo persona1.nombreCompleto
//con los datos del persona2
console.log(persona1.nombreCompleto('Ing' , '3107974109'));

//Método apply (Toca con un arreglo)
let arreglo = ['Licenciado', ' 55443322']
console.log(persona1.nombreCompleto.apply( persona2, arreglo));
//Método call (Se escribe uno a uno)
console.log(persona1.nombreCompleto.call(persona2, 'Licenciado', '22334455'))