class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }
    get idProducto (){
        return this._idProducto;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get precio (){
        return this._precio
    }
    set precio (precio){
        this._precio = precio;
    }
    toString(){
        if(this._precio <= 900){
            return 'Id del producto: ' + this._idProducto + '\n' +'Nombre del producto: ' + this._nombre +'\n' +
        'Precio: $' + this.precio +' pesos'; 
        }else{
            return 'Id del producto: ' + this._idProducto + '\n' +'Nombre del producto: ' + this._nombre +'\n' +
            'Precio: $' + this.precio +' mil';
        }
    } 
}

class Orden {
    static contadorOrdenes = 0;
    
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }
    get idOrden (){
        return this._idOrden;
    }
    agregarProducto (producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else {
            console.log('No se pueden agregar más productos')
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;//totalVemta = totalVenta + producto.precio
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += producto.toString() + ' ';
            console.log ('Orden: ' + this._idOrden + '\n' +
            'Total: $' + this.calcularTotal() + '\n' + 'Productos: ' +'\n' + this._productos);
        }
    }
}
 //Prueba objeto Producto
let producto1 = new Producto ('Soflán', 5100);
let producto2 = new Producto ('Trocipollo', 500);
let producto3 = new Producto ('Cinturon', 2000);
let producto4 = new Producto ('Pantalón', 10000);
let producto5 = new Producto ('Tenis', 150000);
 let orden1 = new Orden ();
 let orden2 = new Orden ();
 let orden3 = new Orden ();
 orden1.agregarProducto (producto1);
 orden1.agregarProducto (producto2);
 orden1.agregarProducto (producto3);
 orden1.agregarProducto (producto4);
 orden1.agregarProducto (producto5);
 orden1.agregarProducto (producto1);
 orden2.agregarProducto(producto2);
 orden1.mostrarOrden();
 orden2.mostrarOrden();


