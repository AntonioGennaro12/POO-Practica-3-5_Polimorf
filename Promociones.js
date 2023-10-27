const NuestrosClientes = require("./NuestrosClientes");

// TIPO
const DESC_POR_MONTO    = 0;
const DESC_POR_CANTIDAD = 1;
const REINTEGRO_FIJO    = 2;
const DESC_POR_FECHA    = 3;
let tiposPromo          = ["DESC_POR_MONTO", "DESC_POR_CANTIDAD", "REINTEGRO_FIJO", "DESC_POR_FECHA"];
// DISPARADOR
const MONTO_COMPRA      = 0;
const FECHA_CUMPLE      = 1;
let dispPromo           = ["MONTO_COMPRA", "FECHA_CUMPLE"];
// DIRIGIDO A:
const CLIENTES_TODOS    = 0;
const CLIENTES_RESID    = 1;
const CLIENTES_COMERC   = 2;
let dirigidoPromo       = ["CLIENTES_TODOS", "CLIENTES_RESID", "CLIENTES_COMERC"];
// VIGENCIA 
const UNICA_VEZ         = 0;
const VIG_PERPETUA      = 1;
let vigenciaPromo       = ["UNICA_VEZ", "VIG_PERPETUA"];


class Promociones {
    #nombrePromo;        
    #tipoPromo;         // descuento, reintegro, premio 
    #disparadorPromo;   // monto de la compra, fecha cumpleaños, etc
    #dirigidaA;         // Todos, Cientes comerciales, clientes Residenciales
    #vigenciaPromo;     // Unica vez, perpetua
    #descAcumulado;     // descuento acumulado
    #aplicadoA;         // Lista de clientes a quien de aplicó el descuento
    
        
    constructor (nombre, tipo, disparo, dirigida, vigencia) {
        this.#nombrePromo = nombre;        
        this.#tipoPromo = tipo;             // valor numérico o texto
        this.#disparadorPromo = disparo;    // texto
        this.#dirigidaA = dirigida;         // Texto (Todos, comerciales, residenciales)
        this.#vigenciaPromo = vigencia;     // valor numérico o texto 
        this.#descAcumulado = 0;            // Acumulación de descuentos aplicados = 0
        this.#aplicadoA = [];               // Lista de clientes a quién se aplicó vacía
        this.#aplicadoA.length = 0;
    }
    
    setNombrePromo (nombr) {
        this.#nombrePromo = nombr;  
    }
    getNombrePromo() {
        return (this.#nombrePromo);
    }

    setTipoPromo (tipo) {
        this.#tipoPromo = tipo;   
    }
    getTipoPromo() {
        return (this.#tipoPromo);
    }

    setDisparadorPromo (disp) {
        this.#disparadorPromo = disp ;   
    }
    getDisparadorPromo () {
        return (this.#disparadorPromo);   // devuelve disparador
    }
    
    setDirigidaA (dirigida) {
        this.#dirigidaA = dirigida ;     // vigencia
    }
    getDirigidaA() {
        return (this.#dirigidaA);     // devuelve vigencia
    }

    setVigenciaPromo(vige) {
        this.#vigenciaPromo = vige ;     // vigencia
    }
    getVigenciaPromo() {
        return (this.#vigenciaPromo);     // devuelve vigencia
    }

    setMontoDescAcumulado(desc) {
        this.#descAcumulado += desc;
    }
    getMontoDescAcumulado() {
        return (this.#descAcumulado);
    }

    setAplicadoA (nombreCliente) {
        this.#aplicadoA.push(nombreCliente);
    }
    getAplicadoA(){
        return (this.#aplicadoA);
    }
    
/// Procedimientos
    cualEstuNombreyDescripcion () {
        console.log("Prom.: "+this.#nombrePromo+", Tipo: "+tiposPromo[this.#tipoPromo]+
                ", Disp.: "+dispPromo[this.#disparadorPromo]+", Dirig.: "+dirigidoPromo[this.#dirigidaA]+
                ", Vig.: "+vigenciaPromo[this.#vigenciaPromo]+", DesAcc.: "+this.#descAcumulado);
    }
    
    /**
    * Verifica si un cliente ya recibió la promo
    * @param {String} nombreCliente 
    * @returns true or false
    */
    verificaAplicadoA (nombreCliente) {
        for (let i=0;i<this.#aplicadoA.length;i++ ) {
            if (this.#aplicadoA[i]== nombreCliente) {
                return (true);
            }
        }
        return (false);
    }

    /**
     * Chequea si es por Unica Vez y si ya aplico la promo
     * @param {Object} promo 
     * @param {Object} clien 
     * @param {Number} cliTip 
     * @returns true (ya fue otorgdo), false >> no es o ya fue otorgado
     */
    checkUnicaVez(promo, clien, cliTip) {
        if (promo.getVigenciaPromo() == UNICA_VEZ) { // Verifica si promo es por Unica Vez y ya fue Aplicada a este Cliente
            if (promo.verificaAplicadoA(clien.getNombreCliente())=== true) {
                console.log("Aplica Promo: "+promo.getNombrePromo()+", a Cliente: "+clien.getNombreCliente()+
                ", Tipo: "+cliTip+", Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!"); 
                return (true);  
            }
        }       
        return (false);  
    }

    /**
     * Chequea si es por Unica Vez y carga el nombre del Cliente...
     * @param {*} promo 
     * @param {*} clien 
     */
    cargaUnicaVez(promo, clien) {                 
        if (promo.getVigenciaPromo() == UNICA_VEZ) { // Verifica si promo es por Unica Vez y guarda nombre del cliente
            promo.setAplicadoA (clien.getNombreCliente());
        } 
    }   

    /**
     * Devuelve día y mes
     * @returns String "ddmm"
     */
    getFechaDia() {
        const fecha = new Date();
        const dia = fecha.getDate(); // (1 a 31)
        const mes = fecha.getMonth() + 1; // (1 a 12)
        const diaFormateado = dia < 10 ? `0${dia}` : dia.toString(); // 2 dígitos
        const mesFormateado = mes < 10 ? `0${mes}` : mes.toString(); // 2 dígitos
        // Combino día y mes en formato "ddmm"
        let ddmm = diaFormateado + mesFormateado;
        return (ddmm);
    }
    /**  
     * 
     * @param {Object} cliente 
     * @param {Number} clienteTipo 
     * @param {Number} dato1 
     * @param {Number} dato2 (opcional) 
     * @param {Number} dato3 (opcional) 
     * @returns Number (descuento)
     */
    calculaDescPromo(cliente, clienteTipo, dato1, dato2, dato3) {
        return (0); 
    }
}

module.exports = { Promociones, 
                    DESC_POR_MONTO, DESC_POR_CANTIDAD, REINTEGRO_FIJO, DESC_POR_FECHA, 
                    MONTO_COMPRA, FECHA_CUMPLE, 
                    CLIENTES_TODOS, CLIENTES_RESID, CLIENTES_COMERC,
                    UNICA_VEZ, VIG_PERPETUA };


