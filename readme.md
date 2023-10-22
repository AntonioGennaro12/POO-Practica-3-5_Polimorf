Programación Orientada a Objetos (POO)
Práctica 3-5 con Herencia y Polimorfismo.

Se implementa un control de stock, clientes y promociones para un supermercado:
Si se ejecuta el archivo "POO_Pract.3-5.js" se puede ver el listado de más abajo.

Notas: 
    Las promociones pueden ser por Monto Comprado, por Cantidad Comprada, Por Unica vez y por Fecha. 
    Están dirigidas a Cientes Residenciales, Comerciales o a Todos y pueden ser por única vez o perpetuas. 
    
    Las promociones que tienen condición por fecha del día o de cumpleaños del cliente dependen de los
    datos que se ingresan en las definiciones de las Promociones o Clientes. Para poder observar como se aplican se implementó la utilización de la fecha real del día de ejecución de la aplicación  
    y en forma automática se programan las fechas de las promociones y cumpleaños. La fecha se maneja
    en formato "ddmm". Ver en la "PRESENTACIÓN" las fechas que se generan en forma automática.

Ejemplo de corrida el día 22 de octubre..
PS C:\Users\agennaro\Desktop\CursoDeProgramación\POO-Practica-3-5_Polimorfismo> node .\POO_Pract.3-5.js
DÍA '0' PRESENTACIÓN DE PRODUCTOS, PROMOCIONES Y CLIENTES
vvv PRODUCTOS vvv
Producto: YerbaMateC/Px1Kg en stock: 110 unidad/es
Producto: AzucarBlancax1Kg en stock: 108 unidad/es
Producto: CafeMolidox500gr en stock: 108 unidad/es
Producto: TeEnHebrasX180gr en stock: 112 unidad/es
*** PROMOCIONES ***
Prom.: DescuentoMontoResid, Tipo: DESC_POR_MONTO, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_RESID, Vig.: VIG_PERPETUA, DesAcc.: 0  
MontoDisparo: 1000, Desc/Premio: 0.1
Prom.: DescuentoCantResid, Tipo: DESC_POR_CANTIDAD, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_RESID, Vig.: UNICA_VEZ, DesAcc.: 0   
CantidadDisparo: 2, Desc/Premio: 0.15
Prom.: DiaDeCumpleaños, Tipo: DESC_POR_FECHA, Disp.: FECHA_CUMPLE, Dirig.: CLIENTES_RESID, Vig.: VIG_PERPETUA, DesAcc.: 0      
DatoDisparo: 0, Dato/Fecha: 0000, Desc/Premio: 0.1
Prom.: ReintegroEspTodos, Tipo: REINTEGRO_FIJO, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_TODOS, Vig.: UNICA_VEZ, DesAcc.: 0       
MontoDisparo: 5000, Desc/Premio: 700
Prom.: DescEspCantComerc, Tipo: DESC_POR_CANTIDAD, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_COMERC, Vig.: VIG_PERPETUA, DesAcc.: 0
CantidadDisparo: 50, Desc/Premio: 0.12
Prom.: DescEspDiaXComerc, Tipo: DESC_POR_FECHA, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_COMERC, Vig.: UNICA_VEZ, DesAcc.: 0      
DatoDisparo: 25000, Dato/Fecha: 2210, Desc/Premio: 0.15
+++ PRODUCTOS +++
Cliente: Juan, Cumpleaños: 2710, lleva gastado: 0
Cliente: Juan, Tiene 4 Promociones!!!
Cliente: Pedro, Cumpleaños: 2310, lleva gastado: 0
Cliente: Pedro, Tiene 4 Promociones!!!
Cliente: Carlos, Cumpleaños: 1708, lleva gastado: 0
Cliente: Carlos, Tiene 4 Promociones!!!
Cliente: Luis, Cumpleaños: 1210, lleva gastado: 0
Cliente: Luis, No tiene Promociones!!!
Cliente: AlmacenDonPepe, lleva gastado: 0
Cliente: AlmacenDonPepe, Tiene 3 Promociones!!!
Cliente: MercadoTito, lleva gastado: 0
Cliente: MercadoTito, No tiene Promociones!!!
*** VENTAS DEL DÍA: 1
>>> Fecha: 2210
Producto: YerbaMateC/Px1Kg vende: 1 unidad/es a cliente: Juan
Cliente: Juan está comprando: 1 unidad/es de: YerbaMateC/Px1Kg
Aplica Promo: DescuentoMontoResid, a Cliente: Juan, Tipo: 1, Monto: 1800x1, Desc. Aplicado: $180
Aplica Promo: DescuentoCantResid, a Cliente: Juan, Tipo: 1, Monto: 1800x1, Desc: NO LLEGA A LA CANTIDAD
Aplica Promo: DiaDeCumpleaños, a Cliente: Juan, Tipo: 1, Monto: 1800 x 1, Desc: NO ES LA FECHA
Aplica Promo: ReintegroEspTodos, a Cliente: Juan, Tipo: 1, Monto: 1800x1, Desc: NO LLEGA AL MONTO
Producto: TeEnHebrasX180gr vende: 1 unidad/es a cliente: Carlos
Cliente: Carlos está comprando: 1 unidad/es de: TeEnHebrasX180gr
Aplica Promo: DescuentoMontoResid, a Cliente: Carlos, Tipo: 1, Monto: 800x1, Desc: NO LLEGA AL MONTO
Aplica Promo: DescuentoCantResid, a Cliente: Carlos, Tipo: 1, Monto: 800x1, Desc: NO LLEGA A LA CANTIDAD
Aplica Promo: DiaDeCumpleaños, a Cliente: Carlos, Tipo: 1, Monto: 800 x 1, Desc: NO ES LA FECHA
Aplica Promo: ReintegroEspTodos, a Cliente: Carlos, Tipo: 1, Monto: 800x1, Desc: NO LLEGA AL MONTO
Producto: AzucarBlancax1Kg vende: 1 unidad/es a cliente: Luis
Cliente: Luis está comprando: 1 unidad/es de: AzucarBlancax1Kg
Producto: YerbaMateC/Px1Kg vende: 50 unidad/es a cliente: AlmacenDonPepe
Cliente: AlmacenDonPepe está comprando: 50 unidad/es de: YerbaMateC/Px1Kg
DescCompraProd (Cliente Comercial): 0.25
Aplica Promo: ReintegroEspTodos, a Cliente: AlmacenDonPepe, Tipo: 2, Monto: 1800x50, Desc. Aplicado: $700
Aplica Promo: DescEspCantComerc, a Cliente: AlmacenDonPepe, Tipo: 2, Monto: 1800x50, Desc. Aplicado: $10800
Aplica Promo: DescEspDiaXComerc, a Cliente: AlmacenDonPepe, Tipo: 2, Monto: 1800x50, Desc. Aplicado: $13500
--- Reportes del Día: 1
Cliente: Juan, Cumpleaños: 2710, lleva gastado: 1620
Cliente: Juan, Tiene 4 Promociones!!!
Cliente: Pedro, Cumpleaños: 2310, lleva gastado: 0
Cliente: Pedro, Tiene 4 Promociones!!!
Cliente: Carlos, Cumpleaños: 1708, lleva gastado: 800
Cliente: Carlos, Tiene 4 Promociones!!!
Cliente: Luis, Cumpleaños: 1210, lleva gastado: 900
Cliente: Luis, No tiene Promociones!!!
Cliente: AlmacenDonPepe, lleva gastado: 42500
Cliente: AlmacenDonPepe, Tiene 3 Promociones!!!
Cliente: MercadoTito, lleva gastado: 0
Cliente: MercadoTito, No tiene Promociones!!!
Producto: YerbaMateC/Px1Kg en stock: 59 unidad/es
Producto: AzucarBlancax1Kg en stock: 107 unidad/es
Producto: CafeMolidox500gr en stock: 108 unidad/es
Producto: TeEnHebrasX180gr en stock: 111 unidad/es
Reporte de Ventas Producto: YerbaMateC/Px1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Juan'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: AzucarBlancax1Kg Vendido a:
┌─────────┬─────────┬──────────┐
│ (index) │ Cliente │ Cantidad │
├─────────┼─────────┼──────────┤
│    0    │ 'Luis'  │    1     │
└─────────┴─────────┴──────────┘
Reporte de Ventas Producto: CafeMolidox500gr Vendido a:
┌─────────┐
│ (index) │
├─────────┤
└─────────┘
Reporte de Ventas Producto: TeEnHebrasX180gr Vendido a:
┌─────────┬──────────┬──────────┐
│ (index) │ Cliente  │ Cantidad │
├─────────┼──────────┼──────────┤
│    0    │ 'Carlos' │    1     │
└─────────┴──────────┴──────────┘
*** VENTAS DEL DÍA: 2
>>> Fecha: 2310
Producto: YerbaMateC/Px1Kg vende: 2 unidad/es a cliente: Pedro
Cliente: Pedro está comprando: 2 unidad/es de: YerbaMateC/Px1Kg
Aplica Promo: DescuentoMontoResid, a Cliente: Pedro, Tipo: 1, Monto: 1800x2, Desc. Aplicado: $360
Aplica Promo: DescuentoCantResid, a Cliente: Pedro, Tipo: 1, Monto: 1800x2, Desc. Aplicado: $540
Aplica Promo: DiaDeCumpleaños, a Cliente: Pedro, Tipo: 1, Monto: 1800x2, Desc. Aplicado: $360
Aplica Promo: ReintegroEspTodos, a Cliente: Pedro, Tipo: 1, Monto: 1800x2, Desc: NO LLEGA AL MONTO
Producto: CafeMolidox500gr vende: 1 unidad/es a cliente: Luis
Cliente: Luis está comprando: 1 unidad/es de: CafeMolidox500gr
Producto: AzucarBlancax1Kg vende: 50 unidad/es a cliente: AlmacenDonPepe
Cliente: AlmacenDonPepe está comprando: 50 unidad/es de: AzucarBlancax1Kg
DescCompraProd (Cliente Comercial): 0.25
Aplica Promo: ReintegroEspTodos, a Cliente: AlmacenDonPepe, Tipo: 2, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Aplica Promo: DescEspCantComerc, a Cliente: AlmacenDonPepe, Tipo: 2, Monto: 900x50, Desc. Aplicado: $5400
Aplica Promo: DescEspDiaXComerc, a Cliente: AlmacenDonPepe, Tipo: 2, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Producto: CafeMolidox500gr vende: 80 unidad/es a cliente: MercadoTito
Cliente: MercadoTito está comprando: 80 unidad/es de: CafeMolidox500gr
DescCompraProd (Cliente Comercial): 0.25
--- Reportes del Día: 2
Cliente: Juan, Cumpleaños: 2710, lleva gastado: 1620
Cliente: Juan, Tiene 4 Promociones!!!
Cliente: Pedro, Cumpleaños: 2310, lleva gastado: 2340
Cliente: Pedro, Tiene 4 Promociones!!!
Cliente: Carlos, Cumpleaños: 1708, lleva gastado: 800
Cliente: Carlos, Tiene 4 Promociones!!!
Cliente: Luis, Cumpleaños: 1210, lleva gastado: 3100
Cliente: Luis, No tiene Promociones!!!
Cliente: AlmacenDonPepe, lleva gastado: 70850
Cliente: AlmacenDonPepe, Tiene 3 Promociones!!!
Cliente: MercadoTito, lleva gastado: 132000
Cliente: MercadoTito, No tiene Promociones!!!
Producto: YerbaMateC/Px1Kg en stock: 57 unidad/es
Producto: AzucarBlancax1Kg en stock: 57 unidad/es
Producto: CafeMolidox500gr en stock: 27 unidad/es
Producto: TeEnHebrasX180gr en stock: 111 unidad/es
Reporte de Ventas Producto: YerbaMateC/Px1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Juan'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │     'Pedro'      │    2     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: AzucarBlancax1Kg Vendido a: 
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: CafeMolidox500gr Vendido a:
┌─────────┬───────────────┬──────────┐
│ (index) │    Cliente    │ Cantidad │
├─────────┼───────────────┼──────────┤
│    0    │    'Luis'     │    1     │
│    1    │ 'MercadoTito' │    80    │
└─────────┴───────────────┴──────────┘
Reporte de Ventas Producto: TeEnHebrasX180gr Vendido a:
┌─────────┬──────────┬──────────┐
│ (index) │ Cliente  │ Cantidad │
├─────────┼──────────┼──────────┤
│    0    │ 'Carlos' │    1     │
└─────────┴──────────┴──────────┘
*** VENTAS DEL DÍA: 3
>>> Fecha: 2410
Producto: AzucarBlancax1Kg vende: 2 unidad/es a cliente: Juan
Cliente: Juan está comprando: 2 unidad/es de: AzucarBlancax1Kg
Aplica Promo: DescuentoMontoResid, a Cliente: Juan, Tipo: 1, Monto: 900x2, Desc. Aplicado: $180
Aplica Promo: DescuentoCantResid, a Cliente: Juan, Tipo: 1, Monto: 900x2, Desc. Aplicado: $270
Aplica Promo: DiaDeCumpleaños, a Cliente: Juan, Tipo: 1, Monto: 900 x 2, Desc: NO ES LA FECHA
Aplica Promo: ReintegroEspTodos, a Cliente: Juan, Tipo: 1, Monto: 900x2, Desc: NO LLEGA AL MONTO
Producto: TeEnHebrasX180gr vende: 3 unidad/es a cliente: Pedro
Cliente: Pedro está comprando: 3 unidad/es de: TeEnHebrasX180gr
Aplica Promo: DescuentoMontoResid, a Cliente: Pedro, Tipo: 1, Monto: 800x3, Desc. Aplicado: $240
Aplica Promo: DescuentoCantResid, a Cliente: Pedro, Tipo: 1, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Aplica Promo: DiaDeCumpleaños, a Cliente: Pedro, Tipo: 1, Monto: 800 x 3, Desc: NO ES LA FECHA
Aplica Promo: ReintegroEspTodos, a Cliente: Pedro, Tipo: 1, Monto: 800x3, Desc: NO LLEGA AL MONTO
Producto: TeEnHebrasX180gr vende: 80 unidad/es a cliente: MercadoTito
Cliente: MercadoTito está comprando: 80 unidad/es de: TeEnHebrasX180gr
DescCompraProd (Cliente Comercial): 0.25
Producto: CafeMolidox500gr vende: 20 unidad/es a cliente: AlmacenDonPepe
Cliente: AlmacenDonPepe está comprando: 20 unidad/es de: CafeMolidox500gr
DescCompraProd (Cliente Comercial): 0.25
Aplica Promo: ReintegroEspTodos, a Cliente: AlmacenDonPepe, Tipo: 2, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Aplica Promo: DescEspCantComerc, a Cliente: AlmacenDonPepe, Tipo: 2, Monto: 2200x20, Desc: NO LLEGA A LA CANTIDAD
Aplica Promo: DescEspDiaXComerc, a Cliente: AlmacenDonPepe, Tipo: 2, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
--- Reportes del Día: 3
Cliente: Juan, Cumpleaños: 2710, lleva gastado: 2970
Cliente: Juan, Tiene 4 Promociones!!!
Cliente: Pedro, Cumpleaños: 2310, lleva gastado: 4500
Cliente: Pedro, Tiene 4 Promociones!!!
Cliente: Carlos, Cumpleaños: 1708, lleva gastado: 800
Cliente: Carlos, Tiene 4 Promociones!!!
Cliente: Luis, Cumpleaños: 1210, lleva gastado: 3100
Cliente: Luis, No tiene Promociones!!!
Cliente: AlmacenDonPepe, lleva gastado: 103850
Cliente: AlmacenDonPepe, Tiene 3 Promociones!!!
Cliente: MercadoTito, lleva gastado: 180000
Cliente: MercadoTito, No tiene Promociones!!!
Producto: YerbaMateC/Px1Kg en stock: 57 unidad/es
Producto: AzucarBlancax1Kg en stock: 55 unidad/es
Producto: CafeMolidox500gr en stock: 7 unidad/es
Producto: TeEnHebrasX180gr en stock: 28 unidad/es
Reporte de Ventas Producto: YerbaMateC/Px1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Juan'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │     'Pedro'      │    2     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: AzucarBlancax1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │      'Juan'      │    2     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: CafeMolidox500gr Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │  'MercadoTito'   │    80    │
│    2    │ 'AlmacenDonPepe' │    20    │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: TeEnHebrasX180gr Vendido a:
┌─────────┬───────────────┬──────────┐
│ (index) │    Cliente    │ Cantidad │
├─────────┼───────────────┼──────────┤
│    0    │   'Carlos'    │    1     │
│    1    │    'Pedro'    │    3     │
│    2    │ 'MercadoTito' │    80    │
└─────────┴───────────────┴──────────┘
*** VENTAS DEL DÍA: 4
>>> Fecha: 2510
Producto: CafeMolidox500gr vende: 2 unidad/es a cliente: Carlos
Cliente: Carlos está comprando: 2 unidad/es de: CafeMolidox500gr
Aplica Promo: DescuentoMontoResid, a Cliente: Carlos, Tipo: 1, Monto: 2200x2, Desc. Aplicado: $440
Aplica Promo: DescuentoCantResid, a Cliente: Carlos, Tipo: 1, Monto: 2200x2, Desc. Aplicado: $660
Aplica Promo: DiaDeCumpleaños, a Cliente: Carlos, Tipo: 1, Monto: 2200 x 2, Desc: NO ES LA FECHA
Aplica Promo: ReintegroEspTodos, a Cliente: Carlos, Tipo: 1, Monto: 2200x2, Desc: NO LLEGA AL MONTO
Producto: TeEnHebrasX180gr vende: 3 unidad/es a cliente: Luis
Cliente: Luis está comprando: 3 unidad/es de: TeEnHebrasX180gr
Producto: YerbaMateC/Px1Kg vende: 3 unidad/es a cliente: Carlos
Cliente: Carlos está comprando: 3 unidad/es de: YerbaMateC/Px1Kg
Aplica Promo: DescuentoMontoResid, a Cliente: Carlos, Tipo: 1, Monto: 1800x3, Desc. Aplicado: $540
Aplica Promo: DescuentoCantResid, a Cliente: Carlos, Tipo: 1, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Aplica Promo: DiaDeCumpleaños, a Cliente: Carlos, Tipo: 1, Monto: 1800 x 3, Desc: NO ES LA FECHA
Aplica Promo: ReintegroEspTodos, a Cliente: Carlos, Tipo: 1, Monto: 1800x3, Desc. Aplicado: $700
Producto: TeEnHebrasX180gr vende: 20 unidad/es a cliente: AlmacenDonPepe
Cliente: AlmacenDonPepe está comprando: 20 unidad/es de: TeEnHebrasX180gr
DescCompraProd (Cliente Comercial): 0.25
Aplica Promo: ReintegroEspTodos, a Cliente: AlmacenDonPepe, Tipo: 2, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Aplica Promo: DescEspCantComerc, a Cliente: AlmacenDonPepe, Tipo: 2, Monto: 800x20, Desc: NO LLEGA A LA CANTIDAD
Aplica Promo: DescEspDiaXComerc, a Cliente: AlmacenDonPepe, Tipo: 2, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
--- Reportes del Día: 4
Cliente: Juan, Cumpleaños: 2710, lleva gastado: 2970
Cliente: Juan, Tiene 4 Promociones!!!
Cliente: Pedro, Cumpleaños: 2310, lleva gastado: 4500
Cliente: Pedro, Tiene 4 Promociones!!!
Cliente: Carlos, Cumpleaños: 1708, lleva gastado: 8260
Cliente: Carlos, Tiene 4 Promociones!!!
Cliente: Luis, Cumpleaños: 1210, lleva gastado: 5500
Cliente: Luis, No tiene Promociones!!!
Cliente: AlmacenDonPepe, lleva gastado: 115850
Cliente: AlmacenDonPepe, Tiene 3 Promociones!!!
Cliente: MercadoTito, lleva gastado: 180000
Cliente: MercadoTito, No tiene Promociones!!!
Producto: YerbaMateC/Px1Kg en stock: 54 unidad/es
Producto: AzucarBlancax1Kg en stock: 55 unidad/es
Producto: CafeMolidox500gr en stock: 5 unidad/es
Producto: TeEnHebrasX180gr en stock: 5 unidad/es
Reporte de Ventas Producto: YerbaMateC/Px1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Juan'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │     'Pedro'      │    2     │
│    3    │     'Carlos'     │    3     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: AzucarBlancax1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │      'Juan'      │    2     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: CafeMolidox500gr Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │  'MercadoTito'   │    80    │
│    2    │ 'AlmacenDonPepe' │    20    │
│    3    │     'Carlos'     │    2     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: TeEnHebrasX180gr Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │     'Carlos'     │    1     │
│    1    │     'Pedro'      │    3     │
│    2    │  'MercadoTito'   │    80    │
│    3    │      'Luis'      │    3     │
│    4    │ 'AlmacenDonPepe' │    20    │
└─────────┴──────────────────┴──────────┘
*** VENTAS DEL DÍA: 5
>>> Fecha: 2610
Producto: TeEnHebrasX180gr vende: 2 unidad/es a cliente: Juan
Cliente: Juan está comprando: 2 unidad/es de: TeEnHebrasX180gr
Aplica Promo: DescuentoMontoResid, a Cliente: Juan, Tipo: 1, Monto: 800x2, Desc. Aplicado: $160
Aplica Promo: DescuentoCantResid, a Cliente: Juan, Tipo: 1, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Aplica Promo: DiaDeCumpleaños, a Cliente: Juan, Tipo: 1, Monto: 800 x 2, Desc: NO ES LA FECHA
Aplica Promo: ReintegroEspTodos, a Cliente: Juan, Tipo: 1, Monto: 800x2, Desc: NO LLEGA AL MONTO
Alerta Stock Mínimo!! Producto: TeEnHebrasX180gr cant. 3
Producto: CafeMolidox500gr vende: 2 unidad/es a cliente: Pedro
Cliente: Pedro está comprando: 2 unidad/es de: CafeMolidox500gr
Aplica Promo: DescuentoMontoResid, a Cliente: Pedro, Tipo: 1, Monto: 2200x2, Desc. Aplicado: $440
Aplica Promo: DescuentoCantResid, a Cliente: Pedro, Tipo: 1, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Aplica Promo: DiaDeCumpleaños, a Cliente: Pedro, Tipo: 1, Monto: 2200 x 2, Desc: NO ES LA FECHA
Aplica Promo: ReintegroEspTodos, a Cliente: Pedro, Tipo: 1, Monto: 2200x2, Desc: NO LLEGA AL MONTO
Producto: YerbaMateC/Px1Kg vende: 2 unidad/es a cliente: Luis
Cliente: Luis está comprando: 2 unidad/es de: YerbaMateC/Px1Kg
Producto: AzucarBlancax1Kg vende: 50 unidad/es a cliente: MercadoTito
Cliente: MercadoTito está comprando: 50 unidad/es de: AzucarBlancax1Kg
DescCompraProd (Cliente Comercial): 0.25
--- Reportes del Día: 5
Cliente: Juan, Cumpleaños: 2710, lleva gastado: 4410
Cliente: Juan, Tiene 4 Promociones!!!
Cliente: Pedro, Cumpleaños: 2310, lleva gastado: 8460
Cliente: Pedro, Tiene 4 Promociones!!!
Cliente: Carlos, Cumpleaños: 1708, lleva gastado: 8260
Cliente: Carlos, Tiene 4 Promociones!!!
Cliente: Luis, Cumpleaños: 1210, lleva gastado: 9100
Cliente: Luis, No tiene Promociones!!!
Cliente: AlmacenDonPepe, lleva gastado: 115850
Cliente: AlmacenDonPepe, Tiene 3 Promociones!!!
Cliente: MercadoTito, lleva gastado: 213750
Cliente: MercadoTito, No tiene Promociones!!!
Producto: YerbaMateC/Px1Kg en stock: 52 unidad/es
Producto: AzucarBlancax1Kg en stock: 5 unidad/es
Producto: CafeMolidox500gr en stock: 3 unidad/es
Producto: TeEnHebrasX180gr en stock: 3 unidad/es
Reporte de Ventas Producto: YerbaMateC/Px1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Juan'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │     'Pedro'      │    2     │
│    3    │     'Carlos'     │    3     │
│    4    │      'Luis'      │    2     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: AzucarBlancax1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │      'Juan'      │    2     │
│    3    │  'MercadoTito'   │    50    │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: CafeMolidox500gr Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │  'MercadoTito'   │    80    │
│    2    │ 'AlmacenDonPepe' │    20    │
│    3    │     'Carlos'     │    2     │
│    4    │     'Pedro'      │    2     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: TeEnHebrasX180gr Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │     'Carlos'     │    1     │
│    1    │     'Pedro'      │    3     │
│    2    │  'MercadoTito'   │    80    │
│    3    │      'Luis'      │    3     │
│    4    │ 'AlmacenDonPepe' │    20    │
│    5    │      'Juan'      │    2     │
└─────────┴──────────────────┴──────────┘
*** VENTAS DEL DÍA: 6
>>> Fecha: 2710
Producto: CafeMolidox500gr vende: 1 unidad/es a cliente: Luis
Cliente: Luis está comprando: 1 unidad/es de: CafeMolidox500gr
Alerta Stock Mínimo!! Producto: CafeMolidox500gr cant. 2
Producto: AzucarBlancax1Kg vende: 3 unidad/es a cliente: Juan
Cliente: Juan está comprando: 3 unidad/es de: AzucarBlancax1Kg
Aplica Promo: DescuentoMontoResid, a Cliente: Juan, Tipo: 1, Monto: 900x3, Desc. Aplicado: $270
Aplica Promo: DescuentoCantResid, a Cliente: Juan, Tipo: 1, Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!
Aplica Promo: DiaDeCumpleaños, a Cliente: Juan, Tipo: 1, Monto: 900x3, Desc. Aplicado: $270
Aplica Promo: ReintegroEspTodos, a Cliente: Juan, Tipo: 1, Monto: 900x3, Desc: NO LLEGA AL MONTO
Alerta Stock Mínimo!! Producto: AzucarBlancax1Kg cant. 2
Producto: CafeMolidox500gr vende: 4 unidad/es a cliente: Carlos
NO SE PUDO REALIZAR LA COMPRA!!! No hay stock suficiente... Producto: CafeMolidox500gr
Producto: YerbaMateC/Px1Kg vende: 50 unidad/es a cliente: MercadoTito
Cliente: MercadoTito está comprando: 50 unidad/es de: YerbaMateC/Px1Kg
DescCompraProd (Cliente Comercial): 0.25
Alerta Stock Mínimo!! Producto: YerbaMateC/Px1Kg cant. 2
--- Reportes del Día: 6
Cliente: Juan, Cumpleaños: 2710, lleva gastado: 6570
Cliente: Juan, Tiene 4 Promociones!!!
Cliente: Pedro, Cumpleaños: 2310, lleva gastado: 8460
Cliente: Pedro, Tiene 4 Promociones!!!
Cliente: Carlos, Cumpleaños: 1708, lleva gastado: 8260
Cliente: Carlos, Tiene 4 Promociones!!!
Cliente: Luis, Cumpleaños: 1210, lleva gastado: 11300
Cliente: Luis, No tiene Promociones!!!
Cliente: AlmacenDonPepe, lleva gastado: 115850
Cliente: AlmacenDonPepe, Tiene 3 Promociones!!!
Cliente: MercadoTito, lleva gastado: 281250
Cliente: MercadoTito, No tiene Promociones!!!
Producto: YerbaMateC/Px1Kg en stock: 2 unidad/es
Producto: AzucarBlancax1Kg en stock: 2 unidad/es
Producto: CafeMolidox500gr en stock: 2 unidad/es
Producto: TeEnHebrasX180gr en stock: 3 unidad/es
Reporte de Ventas Producto: YerbaMateC/Px1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Juan'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │     'Pedro'      │    2     │
│    3    │     'Carlos'     │    3     │
│    4    │      'Luis'      │    2     │
│    5    │  'MercadoTito'   │    50    │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: AzucarBlancax1Kg Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │ 'AlmacenDonPepe' │    50    │
│    2    │      'Juan'      │    2     │
│    3    │  'MercadoTito'   │    50    │
│    4    │      'Juan'      │    3     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: CafeMolidox500gr Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │      'Luis'      │    1     │
│    1    │  'MercadoTito'   │    80    │
│    2    │ 'AlmacenDonPepe' │    20    │
│    3    │     'Carlos'     │    2     │
│    4    │     'Pedro'      │    2     │
│    5    │      'Luis'      │    1     │
└─────────┴──────────────────┴──────────┘
Reporte de Ventas Producto: TeEnHebrasX180gr Vendido a:
┌─────────┬──────────────────┬──────────┐
│ (index) │     Cliente      │ Cantidad │
├─────────┼──────────────────┼──────────┤
│    0    │     'Carlos'     │    1     │
│    1    │     'Pedro'      │    3     │
│    2    │  'MercadoTito'   │    80    │
│    3    │      'Luis'      │    3     │
│    4    │ 'AlmacenDonPepe' │    20    │
│    5    │      'Juan'      │    2     │
└─────────┴──────────────────┴──────────┘
+++ Reporte Final Promociones
Prom.: DescuentoMontoResid, Tipo: DESC_POR_MONTO, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_RESID, Vig.: VIG_PERPETUA, DesAcc.: 2810
MontoDisparo: 1000, Desc/Premio: 0.1
Prom.: DescuentoCantResid, Tipo: DESC_POR_CANTIDAD, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_RESID, Vig.: UNICA_VEZ, DesAcc.: 1470
CantidadDisparo: 2, Desc/Premio: 0.15
Prom.: DiaDeCumpleaños, Tipo: DESC_POR_FECHA, Disp.: FECHA_CUMPLE, Dirig.: CLIENTES_RESID, Vig.: VIG_PERPETUA, DesAcc.: 630
DatoDisparo: 0, Dato/Fecha: 0000, Desc/Premio: 0.1
Prom.: ReintegroEspTodos, Tipo: REINTEGRO_FIJO, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_TODOS, Vig.: UNICA_VEZ, DesAcc.: 1400
MontoDisparo: 5000, Desc/Premio: 700
Prom.: DescEspCantComerc, Tipo: DESC_POR_CANTIDAD, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_COMERC, Vig.: VIG_PERPETUA, DesAcc.: 16200
CantidadDisparo: 50, Desc/Premio: 0.12
Prom.: DescEspDiaXComerc, Tipo: DESC_POR_FECHA, Disp.: MONTO_COMPRA, Dirig.: CLIENTES_COMERC, Vig.: UNICA_VEZ, DesAcc.: 13500
DatoDisparo: 25000, Dato/Fecha: 2210, Desc/Premio: 0.15
PS C:\Users\agennaro\Desktop\CursoDeProgramación\POO-Practica-3-5_Polimorfismo> 