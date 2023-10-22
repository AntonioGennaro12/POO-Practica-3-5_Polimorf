const { Promociones, 
        DESC_POR_MONTO, DESC_POR_CANTIDAD, REINTEGRO_FIJO, DESC_POR_FECHA, 
        MONTO_COMPRA, FECHA_CUMPLE, 
        CLIENTES_TODOS, CLIENTES_RESID, CLIENTES_COMERC,
        UNICA_VEZ, VIG_PERPETUA } = require("./Promociones");
const calcFechaDia = require("./calculaFechaDia");

/*
 function calcFechaDia(diaop) {
    const fecha = new Date();
    let anio = fecha.getYear() + 1900;
    let bisiesto = false;
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        bisiesto = true; 
    }
    let mes = fecha.getMonth() + 1; // (1 a 12) 
    let dia = fecha.getDate(); // (1 a 31)
    switch (mes) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            if ((dia+=diaop) > 31) { 
                dia = (dia%31);
                if (++mes >12) {
                    mes = 1;
                } 
            }
            break;
        case 4: case 6: case 9: case 11:
            if ((dia+= diaop) > 31) { 
                dia = (dia%30);
                    if (++mes >12) {
                    mes = 1;
                } 
            }
            break;
        default: // mes 2
        let ultDia = 28;
        if (bisiesto == true) {ultDia = 29; }
        if ((dia+= diaop) > ultDia) {
            dia = (dia%ultDia);
                if (++mes >12) {
                mes = 1;
            } 
        }
    }
    const diaFormateado = dia < 10 ? `0${dia}` : dia.toString(); // 2 dígitos
    const mesFormateado = mes < 10 ? `0${mes}` : mes.toString(); // 2 dígitos
    // Combino día y mes en formato "ddmm"
    let ddmm = diaFormateado + mesFormateado;
    return (ddmm);
} */

const { PromocionMonto, PromocionCantidad, PromocionReintegro, PromocionFecha} = require("./subClassesPromos");

const nuestrasPromos = [  //constructor (nombre, tipo, disparo, dirigida, vigencia, dato1, dato2, premio)
    new PromocionMonto("DescuentoMontoResid", DESC_POR_MONTO, MONTO_COMPRA, CLIENTES_RESID, VIG_PERPETUA, 1000, 0, 0.1),
    new PromocionCantidad("DescuentoCantResid", DESC_POR_CANTIDAD, MONTO_COMPRA, CLIENTES_RESID, UNICA_VEZ, 2, 0, 0.15),
    new PromocionFecha("DiaDeCumpleaños", DESC_POR_FECHA, FECHA_CUMPLE, CLIENTES_RESID, VIG_PERPETUA, 0, "0000", 0.1),
    new PromocionReintegro("ReintegroEspTodos", REINTEGRO_FIJO, MONTO_COMPRA, CLIENTES_TODOS, UNICA_VEZ, 5000, 0, 700),
    new PromocionCantidad("DescEspCantComerc", DESC_POR_CANTIDAD, MONTO_COMPRA, CLIENTES_COMERC, VIG_PERPETUA, 50, 0, 0.12),
    new PromocionFecha("DescEspDiaXComerc", DESC_POR_FECHA, MONTO_COMPRA, CLIENTES_COMERC, UNICA_VEZ, 25000, calcFechaDia(0), 0.15),
];

module.exports = nuestrasPromos;