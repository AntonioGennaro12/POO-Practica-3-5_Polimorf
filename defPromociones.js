const { Promociones, 
        DESC_POR_MONTO, DESC_POR_CANTIDAD, REINTEGRO_FIJO, DESC_POR_FECHA, 
        MONTO_COMPRA, FECHA_CUMPLE, 
        CLIENTES_TODOS, CLIENTES_RESID, CLIENTES_COMERC,
        UNICA_VEZ, VIG_PERPETUA } = require("./Promociones");
const  {PromocionMonto, PromocionCantidad, PromocionReintegro, PromocionFecha} = require("./subClassesPromos");

const nuestrasPromos = [  //constructor (nombre, tipo, disparo, dirigida, vigencia, dato1, dato2, premio)
    new PromocionMonto("DescuentoMontoResid", DESC_POR_MONTO, MONTO_COMPRA, CLIENTES_RESID, VIG_PERPETUA, 1000, 0, 0.1),
    new PromocionCantidad("DescuentoCantResid", DESC_POR_CANTIDAD, MONTO_COMPRA, CLIENTES_RESID, UNICA_VEZ, 2, 0, 0.15),
    new PromocionFecha("DiaDeCumpleaños", DESC_POR_FECHA, FECHA_CUMPLE, CLIENTES_RESID, VIG_PERPETUA, 0, "0000", 0.1),
    new PromocionReintegro("ReintegroEspTodos", REINTEGRO_FIJO, MONTO_COMPRA, CLIENTES_TODOS, UNICA_VEZ, 5000, 0, 700),
    new PromocionCantidad("DescEspCantComerc", DESC_POR_CANTIDAD, MONTO_COMPRA, CLIENTES_COMERC, VIG_PERPETUA, 50, 0, 0.12),
    new PromocionFecha("DescEspDiaXComerc", DESC_POR_FECHA, MONTO_COMPRA, CLIENTES_COMERC, UNICA_VEZ, 25000, "2010", 0.15),
];

module.exports = nuestrasPromos;