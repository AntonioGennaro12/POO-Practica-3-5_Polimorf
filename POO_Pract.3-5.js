// POO Ejercicio 3-4
// Importo las definiciones de clases
const VentasDelDia = require("./VentasDelDia.js");
const cargaVentasDia = require("./cargaVentasDia.js");
const misClientes = require("./defClientes.js");
const productos = require("./defProductos.js");
const ventasDeDia = require("./defVentasDelDia.js");
const ventasDia = require("./regVentasDia.js");
const { reporteClientes, reporteProductos, reportePromociones,
            reporteVentasA, estadoProductosClientes} = require("./rutinas.js");

//
//  INICIO 
//  SUPERMERCADO DEVS (Manejo de Stock)
//
/// Presentación de Productos y Clientes registrados...
//
console.log("DÍA '0' PRESENTACIÓN DE PRODUCTOS, PROMOCIONES Y CLIENTES");
console.log("vvv PRODUCTOS vvv");
reporteProductos();
console.log("*** PROMOCIONES ***");
reportePromociones();
console.log("+++ PRODUCTOS +++");
reporteClientes();
//
// Ventas x DÍA
// Realiza un reporte de todos los días de operación:
//
for (let i=0; i< ventasDia.length; i++) {
    console.log("*** VENTAS DEL DÍA: "+(i+1));
    console.log(">>> Fecha: "+ventasDeDia[i].getFechaDia());
    cargaVentasDia(i);
    console.log("--- Reportes del Día: "+(i+1));
    estadoProductosClientes();
}
console.log("+++ Reporte Final Promociones");
reportePromociones();

/* Fin */


