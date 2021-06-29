class DispositivoEntrada {
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada (tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca (){
        return this._marca;
    }
    set marca (marca){
        this._marca = marca;
    }
}   


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor (tipoEntrada, marca){
        super (tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }

    toString (){
        return 'Teclado número: ' + this._idTeclado +'\n'+
        'Tipo de entrada: ' + this._tipoEntrada + '\n'+
        'Marca: ' + this._marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor (tipoEntrada, marca){
        super (tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton (){
        return this._idRaton;
    }
    
    toString(){
        return 'Raton numero: ' + this._idRaton + '\n'+
        'Tipo de entrada: ' + this._tipoEntrada + '\n'+
        'Marca: ' + this._marca  +'\n';
    }
}

class Monitor {
    static contadorMonitores = 0;
    constructor (marca, tamaño){
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
    }
    get idMonitor (){
        return this._idMonitor;
    }
    get marca (){
        return this._marca;
    }
    set marca (marca){
        this._marca = marca;
    }
    get tamaño (){
        return this._tamaño;
    }
    set tamaño (tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return 'Monitor numero: '+ this._idMonitor + '\n'+
        'Marca: ' + this._marca + '\n'+
        'Tamaño : ' + this._tamaño + ' pulgadas';
    }
}


class Computadora {
    static contadorComputadoras = 0;
    constructor (nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }   
    get idComputadora (){
        return this._idComputadora;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get monitor (){
        return this._monitor;
    }
    set monitor (monitor){
        this._monitor = monitor;
    }
    get teclado (){
        return this._teclado;
    }
    set teclado (teclado){
        this._teclado = teclado;
    }
    get raton (){
        return this._raton;
    }
    set raton (raton){
        this._raton = raton;
    }

    toString (){
        return '\n' +'Computadora ' + this._idComputadora + ':'+'\n'+
        'Marca: ' + this._nombre + '\n'+
            this._monitor + '\n'+
            this._teclado + '\n'+
            this._raton;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor (){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden (){
        return this._idOrden;
    }

    agregarComputadora (computadora){
        this._computadoras.push (computadora);
    }
    mostrarOrden(){
        let computadoraOrden = '';
        for(let computadora of this._computadoras){
            computadoraOrden += computadora.toString();
        }
        console.log ('Orden numero: ' + this._idOrden + '\n'
        + this._computadoras);
    }

}

//Prueba objeto Teclado
let teclado1 = new Teclado ('Mixto', 'ASUS');
let teclado2 = new Teclado ('USB', 'acer');
let teclado3 = new Teclado ('Bluetooth', 'Supra');

//Prueba objeto monitor
let monitor1 = new Monitor ('Acer', 45);
let monitor2 = new Monitor ('HP', 25);
let monitor3 = new Monitor ('Samsung', 22);

//Prueba objeto Raton
let raton1 = new Raton('Bluetooth', 'Genius');
let raton2 = new Raton ('USB', 'ROG');
let raton3 = new Raton('USB', 'Acer');

//Objeto Computadora
let computadora1 = new Computadora ('HP', monitor1, teclado1, raton1);
let computadora2 = new Computadora ('Acer', monitor2, teclado2, raton2);
let computadora3 = new Computadora ('Nvidia', monitor3, teclado3, raton3);

let orden1 = new Orden ();
let orden2 = new Orden ();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden1.mostrarOrden();
orden2.mostrarOrden();