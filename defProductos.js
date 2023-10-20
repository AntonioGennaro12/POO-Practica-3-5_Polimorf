const Producto = require("./Producto.js");
//  AQUÍ SE GENERAN LOS PRODUCTOS (solamente agregar a continuacíon dentro de los corchetes)
const productos = [ new Producto("YerbaMateC/Px1Kg", 1800, 110, 3),
                    new Producto("AzucarBlancax1Kg", 900, 105, 2),
                    new Producto("CafeMolidox500gr", 2200, 108, 2),
                    new Producto("TeEnHebrasX180gr", 800, 112, 3) ];
//
module.exports = productos;
