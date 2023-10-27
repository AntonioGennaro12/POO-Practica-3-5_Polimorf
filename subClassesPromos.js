const { Promociones, 
        DESC_POR_MONTO, DESC_POR_CANTIDAD, REINTEGRO_FIJO, DESC_POR_FECHA, 
        MONTO_COMPRA, FECHA_CUMPLE, 
        CLIENTES_TODOS, CLIENTES_RESID, CLIENTES_COMERC,
        UNICA_VEZ, VIG_PERPETUA } = require("./Promociones");

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
        if (super.checkUnicaVez(this, cliente, clienteTipo) === true) {
            return (descuento);
        }
        if ((dato1  * dato2) >= this.#datoDisparoPromo) {
            descuento = dato1 * dato2 * this.#descuentoPremio;   
            super.cargaUnicaVez(this, cliente);
            // imprime operación
            console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                        ", Tipo: "+clienteTipo+", Monto: "+dato1+"x"+dato2+", Desc. Aplicado: $"+descuento); 
            super.setMontoDescAcumulado (descuento);
            }
            else {
                console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
                ", Monto: "+dato1+"x"+dato2+", Desc: NO LLEGA AL MONTO"); 
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
        if (super.checkUnicaVez(this, cliente, clienteTipo) === true) {
            return (descuento);
        }
        if (dato2 >= this.#datoDisparoPromo) {
            descuento = dato1 * dato2 * this.#descuentoPremio;
            super.cargaUnicaVez(this, cliente);
        // imprime operación
        console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                    ", Tipo: "+clienteTipo+", Monto: "+dato1+"x"+dato2+", Desc. Aplicado: $"+descuento); 
        super.setMontoDescAcumulado (descuento);
        }
        else {
            console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
            ", Monto: "+dato1+"x"+dato2+", Desc: NO LLEGA A LA CANTIDAD");  
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
        if (super.checkUnicaVez(this, cliente, clienteTipo) === true) {
        return (descuento);
        }
        if ((dato1 * dato2) >= this.#datoDisparoPromo) {
            descuento = this.#descuentoPremio;
            super.cargaUnicaVez(this, cliente);
        // imprime operación
        console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                    ", Tipo: "+clienteTipo+", Monto: "+dato1+"x"+dato2+", Desc. Aplicado: $"+descuento); 
        super.setMontoDescAcumulado (descuento);
        }
        else {
            console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
            ", Monto: "+dato1+"x"+dato2+", Desc: NO LLEGA AL MONTO"); 
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

    calculaDescPromo(cliente, clienteTipo, dato1, dato2, dato3, fechaDia) {
        let descuento = 0;
        if (super.checkUnicaVez(this, cliente, clienteTipo) === true) {
            return (descuento);
        }
        let resultado = false;   
        if (this.getDisparadorPromo() == FECHA_CUMPLE) {
            if (dato3 == fechaDia) { // compara fecha
                    descuento = dato1 * dato2 * this.#descuentoPremio;
                    resultado = true;                
            }
        }
        else if (this.getDisparadorPromo() == MONTO_COMPRA) {
              if (this.#datoAdicFecha == fechaDia) { // compara fecha
                if ((dato1*dato2) >= this.#datoDisparoPromo) {
                    descuento = dato1 * dato2 * this.#descuentoPremio;
                    resultado = true; 
                }                    
            } 
        }                

        if (resultado === true) { 
            super.cargaUnicaVez(this, cliente);                 
        // imprime operación
        console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                    ", Tipo: "+clienteTipo+", Monto: "+dato1+"x"+dato2+", Desc. Aplicado: $"+descuento); 
        super.setMontoDescAcumulado (descuento);
        }
        else {
                console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
                ", Monto: "+dato1+" x "+dato2+", Desc: NO ES LA FECHA");  
        } 
        return (descuento);             
    }
}

module.exports = { PromocionMonto, PromocionCantidad, PromocionReintegro, PromocionFecha };

