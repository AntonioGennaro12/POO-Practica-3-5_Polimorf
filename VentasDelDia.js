const calcFechaDia = require("./calculaFechaDia.js");
const misClientes = require("./defClientes.js");
const productos = require("./defProductos.js");
//
class VentasDelDia {
    #diaOpera;          // Dia de operación Comercial (1, 2, 3...etc) 
    #ventaDia;         // producto[x], cantidad[y] a cliente[z] array tridimensional
    #fecha;             // fecha del día de ventas

    constructor (diaopera, venta) {
        this.#diaOpera     = diaopera;   // nro de orden (inicia en 1)
        this.#ventaDia     = [];    // array tridimensional
        this.#fecha        = calcFechaDia(diaopera-1); // fecha del día más nro de orden   
    }

    setDiaOpera(dia) {
        this.#diaOpera = dia;
    }

    getDiaOpera() {
        return (this.#diaOpera);
    }

    getFechaDia() {
        return (this.#fecha);
    }

    agregaVentaDia (prod, cant, client) {
        let ventaD = [prod.getNombreProducto(), cant, client.getNombreCliente()];
        this.#ventaDia.push(ventaD) ;   // pueden ser varias en el día
        // ahora actualiza stock y cliente
        prod.venderACliente (client, cant, this.#fecha);
    }
    
    getVentaDia() {
        console.log("Ventas día: "+this.#diaOpera+" Detalle: ");
        console.table(this.#ventaDia);
    }

}

module.exports = VentasDelDia;
