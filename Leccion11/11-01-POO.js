class Empleado {
    constructor(nombre, sueldo){
    this._nombre = nombre;
    this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return 'Nombre del empleado: ' + this._nombre +'\n'+
        'sueldo: ' + this._sueldo;
    }

}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super (nombre, sueldo);
        this._departamento = departamento;
    }
//Sobreescritura
    obtenerDetalles(){
        return super.obtenerDetalles() + '\n' +
        'Departamento: ' + this._departamento;
    }
}

function determinarTipo (tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Empleado){
        console.log('Es un objeto de tipo empleado');
        console.log(tipo.departamento)
    }
    else if (tipo instanceof Gerente){
        console.log('Es un tipo gerente');
        console.log(tipo.departamento);
    }

}
let empleado1 = new Empleado ('Juan', 1500000)
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

determinarTipo (gerente1);
determinarTipo ( empleado1);



