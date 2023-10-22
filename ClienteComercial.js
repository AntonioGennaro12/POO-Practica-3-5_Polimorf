const NuestrosClientes = require("./NuestrosClientes.js");
const Producto  = require("./Producto.js");
const { Promociones, CLIENTES_COMERC } = require("./Promociones.js");

//
class ClienteComercial extends NuestrosClientes {
    #descuento;
    constructor(nombre, monto, promos, desc) {
        super(nombre, monto, promos);
        this.#descuento = desc;    
    }
    
    setDescuento (desc) {
        this.#descuento = desc;
    }

    getDescuento() {
        return (this.#descuento);
    }

// Procedimientos 
    comprarProducto(prod, cant, fechaDia){
        console.log("Cliente: " + this.getNombreCliente() + " está comprando: " + cant + " unidad/es de: "+prod.getNombreProducto() );
        let desc = this.getDescuento();
        console.log("DescCompraProd (Cliente Comercial): "+desc);
        let descPromos = 0;
        let promos = this.getPromociones();
        if (promos != null){
            for (let i=0; i<promos.length;i++) {
                descPromos += promos[i].calculaDescPromo(this, CLIENTES_COMERC, prod.getPrecioProducto(), cant, 0, fechaDia);
            }            
        }
        this._montoComprado += (((prod.getPrecioProducto())*cant)*(1-desc))-descPromos;
    }
}


module.exports = ClienteComercial;


