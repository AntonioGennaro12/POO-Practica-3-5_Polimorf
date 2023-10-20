const ventasDeDia = require("./defVentasDelDia.js");
const ventasDia = require("./regVentasDia.js");
const agregaVentaDia = require("./VentasDelDia.js");
const VentasDelDia = require("./VentasDelDia.js");
//
function cargaVentasDia(dia) {
    let cantVentas = ventasDia[dia].length;
    for (let i = 0; i < cantVentas; i++) {
        ventasDeDia[dia].agregaVentaDia(ventasDia[dia][i][0], 
                            ventasDia[dia][i][1], ventasDia[dia][i][2]);
    }    
}

module.exports = cargaVentasDia;
