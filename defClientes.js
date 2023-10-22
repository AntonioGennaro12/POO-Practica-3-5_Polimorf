const ClienteComercial = require("./ClienteComercial.js");
const ClienteResidencial = require("./ClienteResidencial.js");
const { CLIENTES_COMERC, CLIENTES_RESID, CLIENTES_TODOS } = require("./Promociones.js");
const calcFechaDia = require("./calculaFechaDia.js");
const nuestrasPromos = require("./defPromociones.js");

let promosResidenciales = [];
let promosComerciales   = [];

for (let i=0; i<nuestrasPromos.length;i++) {
  if ((nuestrasPromos[i].getDirigidaA() == CLIENTES_RESID) ||
      (nuestrasPromos[i].getDirigidaA() == CLIENTES_TODOS)) {
        promosResidenciales.push(nuestrasPromos[i]);
  } 
  if ((nuestrasPromos[i].getDirigidaA() == CLIENTES_COMERC) ||
      (nuestrasPromos[i].getDirigidaA() == CLIENTES_TODOS)) {
        promosComerciales.push(nuestrasPromos[i]);
  }
}

//  AQUÍ SE GENERAN LOS CLIENTES (solamente agregar a continuacíon dentro de los corchetes)
// clientes residenciales "Nombre", "saldo", lista de promos (sino null) y "fecha de nac "ddmm");
const misClientes = [ new ClienteResidencial("Juan", 0, promosResidenciales, calcFechaDia(5) ),  // 
                      new ClienteResidencial("Pedro", 0, promosResidenciales, calcFechaDia(1) ),
                      new ClienteResidencial("Carlos", 0, promosResidenciales, "1708"),
                      new ClienteResidencial("Luis", 0, null, "1210"),   
                      new ClienteComercial("AlmacenDonPepe", 0, promosComerciales, 0.25),
                      new ClienteComercial("MercadoTito", 0, null, 0.25),
                    ];
//
// Definición de los nombres
const Juan              = misClientes[0];
const Pedro             = misClientes[1];
const Carlos            = misClientes[2];
const Luis              = misClientes[3];
const AlmacenDonPepe    = misClientes[4];
const MercadoTito       = misClientes[5];


// Exportación de objetos
module.exports = { misClientes, Juan, Pedro, Carlos, Luis, 
                   AlmacenDonPepe, MercadoTito };
