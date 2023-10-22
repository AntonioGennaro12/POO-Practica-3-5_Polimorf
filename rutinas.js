const NuestrosClientes = require("./NuestrosClientes.js");
const ClienteComercial = require("./ClienteComercial.js");
const ClienteResidencial = require("./ClienteResidencial.js");
const {misClientes} = require("./defClientes.js");
const productos = require("./defProductos.js");
const nuestrasPromos = require("./defPromociones.js");
const { CLIENTES_COMERC, CLIENTES_RESID } = require("./Promociones.js");

function reporteClientes() {
    for(let i=0; i  <misClientes.length; i++) {
        misClientes[i].montoGastado();
        if (misClientes[i] instanceof ClienteResidencial) {
            misClientes[i].listadoDePromociones(CLIENTES_RESID);
        }
        else {
            misClientes[i].listadoDePromociones(CLIENTES_COMERC);
        }
    }
}

function reporteProductos() {
    for(let i=0; i < productos.length; i++)
    productos[i].cuantoStockTienes();
}

function reportePromociones() {
    for(let i=0; i < nuestrasPromos.length; i++)
    nuestrasPromos[i].cualEstuNombreyDescripcion();
}

function reporteVentasA() {
    for(let i=0; i < productos.length; i++)
    productos[i].reporteDeVentas();
}

function estadoProductosClientes() {
    reporteClientes();
    reporteProductos();
    reporteVentasA();
}

module.exports = {  reporteClientes,
                    reporteProductos,
                    reportePromociones,
                    reporteVentasA,
                    estadoProductosClientes };