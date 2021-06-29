let persona = {
    nombre: 'Juan',
    apellido: 'Sulvara',
    email: 'jusul.com',
    edad: 28,
    idioma: 'es',
    //Get
    get lang(){
        return this.idioma.toUpperCase();
    },
    //Set
    set lang ( lang ){
        this.idioma = lang.toUpperCase();
    },
    //Agregar métodos
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido
    }
}
//Get es obtener y set es establecer o modificar
//Método get
console.log (persona.nombreCompleto);

//Metodo set
console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);
console.log( persona.idioma);
