//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Metodo función dentro de un constructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//Con esto se agrega una nueva propiedad y atributos a todos los objetos que se creen
Persona.prototype.tel = '3108569874'
//Método para la creación de una persona
let padre = new Persona('Jose', 'Sulvara', 'jasul21@hotmail.com');
padre.tel = '3658749562';
console.log( padre.nombreCompleto() + ' ' + padre.tel);

let madre = new Persona('María', 'Camacho', 'alejita@mail.com');
madre.tel = '3112422964'
console.log(madre.nombreCompleto() + ' ' + madre.tel);

padre.nombre = 'Rigoberto';
console.log(padre);
console.log(madre);
