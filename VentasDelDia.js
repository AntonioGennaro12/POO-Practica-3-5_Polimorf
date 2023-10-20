const clientes = require("./defClientes.js");
const productos = require("./defProductos.js");
//
class VentasDelDia {
    #diaOpera;          // Dia de operación Comercial (1, 2, 3...etc) 
    #ventaDia;         // producto[x], cantidad[y] a cliente[z] array tridimensional

    constructor (dia, venta) {
        this.#diaOpera     = dia;   // puede haber muchos procuctos
        this.#ventaDia     = [];    // array tridimensional
    }

    setDiaOpera(dia) {
        this.#diaOpera = dia;
    }

    getDiaOpera() {
        return (this.#diaOpera);
    }

    agregaVentaDia (prod, cant, client) {
        let ventaD = [prod.getNombreProducto(), cant, client.getNombreCliente()];
        this.#ventaDia.push(ventaD) ;   // pueden ser varias en el día
        // ahora actualiza stock y cliente
        prod.venderACliente (client, cant);
    }
    
    getVentaDia() {
        console.log("Ventas día: "+this.#diaOpera+" Detalle: ");
        console.table(this.#ventaDia);
    }

}

module.exports = VentasDelDia;
