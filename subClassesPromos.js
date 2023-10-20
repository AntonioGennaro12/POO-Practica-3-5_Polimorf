const { Promociones, 
        DESC_POR_MONTO, DESC_POR_CANTIDAD, REINTEGRO_FIJO, DESC_POR_FECHA, 
        MONTO_COMPRA, FECHA_CUMPLE, 
        CLIENTES_TODOS, CLIENTES_RESID, CLIENTES_COMERC,
        UNICA_VEZ, VIG_PERPETUA } = require("./Promociones");

/**
 * Chequea si es por Unica Vez y si ya aplico la promo
 * @param {Object} este 
 * @param {Object} clien 
 * @param {Number} cliTip 
 * @returns true (ya fue otorgdo), false >> no es o ya fue otorgado
 */
function checkUnicaVez(este, clien, cliTip) {
    if (este.getVigenciaPromo() == UNICA_VEZ) { // Verifica si promo es por Unica Vez y ya fue Aplicada a este Cliente
        if (este.verificaAplicadoA(clien.getNombreCliente())=== true) {
            console.log("Aplica Promo: "+este.getNombrePromo()+", a Cliente: "+clien.getNombreCliente()+
            ", Tipo: "+cliTip+", Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!"); 
            return (true);  
        }
    }       
    return (false);  
}
/**
 * Chequea si es por Unica Vez y carga el nombre del Cliente...
 * @param {*} este 
 * @param {*} clien 
 */
function cargaUnicaVez(este, clien) {                 
    if (este.getVigenciaPromo() == UNICA_VEZ) { // Verifica si promo es por Unica Vez y guarda nombre del cliente
        este.setAplicadoA (clien.getNombreCliente());
    } 
}   

// Subclase PromocionMonto
class PromocionMonto extends Promociones {
    #datoDisparoPromo;  // umbral de disparo Monto o fecha ("ddmm")
    #datoAdicFecha;     // Dato a adicional o fecha
    #descuentoPremio;   // % de descuento o premio (si es fijo)
    
    constructor(nombre, tipo, disparo, dirigida, vigencia, dato1, dato2, premio) {
        super(nombre, tipo, disparo, dirigida, vigencia );
        this.#datoDisparoPromo = dato1;
        this.#datoAdicFecha = dato2;
        this.#descuentoPremio = premio;
    }

    cualEstuNombreyDescripcion () {
        super.cualEstuNombreyDescripcion();
        console.log("MontoDisparo: "+this.#datoDisparoPromo+", Desc/Premio: "+this.#descuentoPremio);
    }

    calculaDescPromo(cliente, clienteTipo, dato1, dato2, dato3) {
        let descuento = 0;
        if (checkUnicaVez(this, cliente, clienteTipo) === true)
            return (descuento);
        if (((dato1  * dato2) >= this.#datoDisparoPromo) && 
            ((clienteTipo == super.getDirigidaA())||(super.getDirigidaA() == CLIENTES_TODOS))) {
            descuento = dato1 * dato2 * this.#descuentoPremio;   
            cargaUnicaVez(this, cliente);
            // imprime operación
            console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                        ", Tipo: "+clienteTipo+", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: $"+descuento); 
            super.setMontoDescAcumulado (descuento);
            }
            else {
                console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
                ", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: NO SE APLICÓ"); 
            } 
        return (descuento);                 
    }
}

// Subclase PromocionCantidad
class PromocionCantidad extends Promociones {
    #datoDisparoPromo;  // umbral de disparo Monto o fecha ("ddmm")
    #datoAdicFecha;     // Dato a adicional o fecha
    #descuentoPremio;   // % de descuento o premio (si es fijo)
    
    constructor(nombre, tipo, disparo, dirigida, vigencia, dato1, dato2, premio) {
        super(nombre, tipo, disparo, dirigida, vigencia );
        this.#datoDisparoPromo = dato1;
        this.#datoAdicFecha = dato2;
        this.#descuentoPremio = premio;
    }

    cualEstuNombreyDescripcion () {
        super.cualEstuNombreyDescripcion();
        console.log("CantidadDisparo: "+this.#datoDisparoPromo+", Desc/Premio: "+this.#descuentoPremio);
    }

    calculaDescPromo(cliente, clienteTipo, dato1, dato2, dato3) {
        let descuento = 0;
        if (checkUnicaVez(this, cliente, clienteTipo) === true)
            return (descuento);
        if ((dato2 >= this.#datoDisparoPromo) &&  
            ((clienteTipo == this.getDirigidaA())||(this.getDirigidaA() == CLIENTES_TODOS))) {
            descuento = dato1 * dato2 * this.#descuentoPremio;
        cargaUnicaVez(this, cliente);
        // imprime operación
        console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                    ", Tipo: "+clienteTipo+", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: $"+descuento); 
        super.setMontoDescAcumulado (descuento);
        }
        else {
            console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
            ", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: NO SE APLICÓ"); 
        } 
        return (descuento); 
    }
}

// Subclase Promocion Reintegro Fijo
class PromocionReintegro extends Promociones {
    #datoDisparoPromo;  // umbral de disparo Monto o fecha ("ddmm")
    #datoAdicFecha;     // Dato a adicional o fecha
    #descuentoPremio;   // % de descuento o premio (si es fijo)
    
    constructor(nombre, tipo, disparo, dirigida, vigencia, dato1, dato2, premio) {
        super(nombre, tipo, disparo, dirigida, vigencia );
        this.#datoDisparoPromo = dato1;
        this.#datoAdicFecha = dato2;
        this.#descuentoPremio = premio;
    }

    cualEstuNombreyDescripcion () {
        super.cualEstuNombreyDescripcion();
        console.log("MontoDisparo: "+this.#datoDisparoPromo+", Desc/Premio: "+this.#descuentoPremio);
    }

    calculaDescPromo(cliente, clienteTipo, dato1, dato2, dato3) {
        let descuento = 0;
        if (checkUnicaVez(this, cliente, clienteTipo) === true)
        return (descuento);
        if (((dato1 * dato2) >= this.#datoDisparoPromo) &&
            ((clienteTipo == this.getDirigidaA())||(this.getDirigidaA() == CLIENTES_TODOS))) {
            descuento = this.#descuentoPremio;
        cargaUnicaVez(this, cliente);
        // imprime operación
        console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                    ", Tipo: "+clienteTipo+", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: $"+descuento); 
        super.setMontoDescAcumulado (descuento);
        }
        else {
            console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
            ", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: NO SE APLICÓ"); 
        } 
        return (descuento); 
    }
}

// Subclase Promocion por Fecha
class PromocionFecha extends Promociones {
    #datoDisparoPromo;  // umbral de disparo Monto o fecha ("ddmm")
    #datoAdicFecha;     // Dato a adicional o fecha
    #descuentoPremio;   // % de descuento o premio (si es fijo)
    
    constructor(nombre, tipo, disparo, dirigida, vigencia, dato1, dato2, premio) {
        super(nombre, tipo, disparo, dirigida, vigencia );
        this.#datoDisparoPromo = dato1;
        this.#datoAdicFecha = dato2;
        this.#descuentoPremio = premio;
    }

    cualEstuNombreyDescripcion () {
        super.cualEstuNombreyDescripcion();
        console.log("DatoDisparo: "+this.#datoDisparoPromo+", Dato/Fecha: "+this.#datoAdicFecha+
                    ", Desc/Premio: "+this.#descuentoPremio);
    }

    calculaDescPromo(cliente, clienteTipo, dato1, dato2, dato3) {
        let descuento = 0;
        if (checkUnicaVez(this, cliente, clienteTipo) === true)
            return (descuento);
        let resultado = false;   
        if (this.getDisparadorPromo() == FECHA_CUMPLE) {
            if (dato3 == this.getFechaDia()) { // compara fecha
                if (clienteTipo == this.getDirigidaA()) {
                    descuento = dato1 * dato2 * this.#descuentoPremio;
                    console.log("DescCumple: "+descuento);
                    resultado = true;                    
                } 
            }
        }
        else if (this.getDisparadorPromo() == MONTO_COMPRA) {
              if (this.#datoAdicFecha == this.getFechaDia()) { // compara fecha
                if ((dato1*dato2) >= this.#datoDisparoPromo) {
                    descuento = dato1 * dato2 * this.#descuentoPremio;
                    resultado = true; 
                }                    
            } 
        }                

        if (resultado === true) { 
        cargaUnicaVez(this, cliente);                 
        // imprime operación
        console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                    ", Tipo: "+clienteTipo+", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: $"+descuento); 
        super.setMontoDescAcumulado (descuento);
        }
        else {
                console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
                ", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: NO SE APLICÓ"); 
        } 
        return (descuento);             
    }
}

module.exports = { PromocionMonto, PromocionCantidad, PromocionReintegro, PromocionFecha };

