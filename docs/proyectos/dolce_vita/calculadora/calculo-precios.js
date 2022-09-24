/****** PRECIO INICIAL ********/

let array_precios_unitarios = [
	0, /*0*/
	0.59,/*1*/
	0.64,/*2*/
	0.69,/*3*/
	0.43,/*4*/
	0.62,/*5*/
	0.69,/*6*/
	0.67,/*7*/
	1.23,/*8*/
	1.51,/*9*/
	1.77,/*10*/
	0.76,/*11*/
	1.32,/*12*/
	1.04,/*13*/
	1.15,/*14*/
	1.19,/*15*/
	3.6,/*16*/
	8.03,/*17*/
	14.2,/*18*/
	16.63,/*19*/
	5.62,/*20*/
	7.26,/*21*/
	7.36,/*22*/
	4.23,/*23*/
	4.29,/*24*/
	2.96,/*25*/
	25.54,/*26*/
	43.56,/*27*/
	45.18,/*28*/
	37.09,/*29*/
	65.09,/*30*/
	59.16,/*31*/
	32.19,/*32*/
	17.39,/*33*/
	44.5,/*34*/
	24.08,/*35*/
	50.01,/*36*/
	56.74,/*37*/
	64.33,/*38*/
	71.46,/*39*/
	29.06,/*40*/
	32.63,/*41*/
	38.08,/*42*/
	41.65,/*43*/
	21.56,/*44*/
	19.78,/*45*/
	17.03,/*46*/
	131.6,/*47*/
	34.9,/*48*/
	55.96,/*49*/
	32.28,/*50*/
	54.26,/*51*/
	27.93,/*52*/
	47.65,/*53*/
	84.8,/*54*/
	17.1,/*55*/
	11.68,/*56*/
	12.77,/*57*/
	19.99,/*58*/
	17.66,/*59*/
	22.19,/*60*/
	29.74,/*61*/
	25.75,/*62*/
	33.3,/*63*/
	74.81,/*64*/
	23.32,/*65*/
	30.87,/*66*/
	26.88,/*67*/
	34.44,/*68*/
	44.4,/*69*/
	79.73,/*70*/
	74.49,/*71*/
	119.05,/*72*/
	35.15,/*73*/
	37.99,/*74*/
	50.44,/*75*/
	45.12,/*76*/
	57.57,/*77*/
	40.83,/*78*/
	53.27,/*79*/
	47.95,/*80*/
	60.4,/*81*/
	31.39,/*82*/
	49.61,/*83*/
	90.43,/*84*/
	47.88,/*85*/
	0.78,/*86*/
	1.3,/*87*/
	0.4/*88*/
];

let array_categoria_producto = [
	"", /*0*/
	"MINI DULCES",/*1*/
	"MINI DULCES",/*2*/
	"MINI DULCES",/*3*/
	"MINI DULCES",/*4*/
	"MINI DULCES",/*5*/
	"MINI DULCES",/*6*/
	"MINI DULCES",/*7*/
	"MINI DULCES",/*8*/
	"MINI DULCES",/*9*/
	"MINI DULCES",/*10*/
	"MINI DULCES",/*11*/
	"MINI DULCES",/*12*/
	"MINI DULCES",/*13*/
	"MINI DULCES",/*14*/
	"MINI DULCES",/*15*/
	"PORCIONES",/*16*/
	"PORCIONES",/*17*/
	"PORCIONES",/*18*/
	"PORCIONES",/*19*/
	"PORCIONES",/*20*/
	"PORCIONES",/*21*/
	"PORCIONES",/*22*/
	"PORCIONES",/*23*/
	"PORCIONES",/*24*/
	"PORCIONES",/*25*/
	"POSTRES COMPLETOS",/*26*/
	"POSTRES COMPLETOS",/*27*/
	"POSTRES COMPLETOS",/*28*/
	"POSTRES COMPLETOS",/*29*/
	"POSTRES COMPLETOS",/*30*/
	"POSTRES COMPLETOS",/*31*/
	"POSTRES COMPLETOS",/*32*/
	"POSTRES COMPLETOS",/*33*/
	"POSTRES COMPLETOS",/*34*/
	"POSTRES COMPLETOS",/*35*/
	"POSTRES COMPLETOS",/*36*/
	"POSTRES COMPLETOS",/*37*/
	"POSTRES COMPLETOS",/*38*/
	"POSTRES COMPLETOS",/*39*/
	"POSTRES COMPLETOS",/*40*/
	"POSTRES COMPLETOS",/*41*/
	"POSTRES COMPLETOS",/*42*/
	"POSTRES COMPLETOS",/*43*/
	"POSTRES COMPLETOS",/*44*/
	"POSTRES COMPLETOS",/*45*/
	"POSTRES COMPLETOS",/*46*/
	"POSTRES COMPLETOS",/*47*/
	"POSTRES COMPLETOS",/*48*/
	"POSTRES COMPLETOS",/*49*/
	"POSTRES COMPLETOS",/*50*/
	"POSTRES COMPLETOS",/*51*/
	"POSTRES COMPLETOS",/*52*/
	"POSTRES COMPLETOS",/*53*/
	"POSTRES COMPLETOS",/*54*/
	"POSTRES COMPLETOS",/*55*/
	"POSTRES COMPLETOS",/*56*/
	"POSTRES COMPLETOS",/*57*/
	"POSTRES COMPLETOS",/*58*/
	"POSTRES COMPLETOS",/*59*/
	"POSTRES COMPLETOS",/*60*/
	"POSTRES COMPLETOS",/*61*/
	"POSTRES COMPLETOS",/*62*/
	"POSTRES COMPLETOS",/*63*/
	"POSTRES COMPLETOS",/*64*/
	"POSTRES COMPLETOS",/*65*/
	"POSTRES COMPLETOS",/*66*/
	"POSTRES COMPLETOS",/*67*/
	"POSTRES COMPLETOS",/*68*/
	"POSTRES COMPLETOS",/*69*/
	"POSTRES COMPLETOS",/*70*/
	"POSTRES COMPLETOS",/*71*/
	"POSTRES COMPLETOS",/*72*/
	"POSTRES COMPLETOS",/*73*/
	"POSTRES COMPLETOS",/*74*/
	"POSTRES COMPLETOS",/*75*/
	"POSTRES COMPLETOS",/*76*/
	"POSTRES COMPLETOS",/*77*/
	"POSTRES COMPLETOS",/*78*/
	"POSTRES COMPLETOS",/*79*/
	"POSTRES COMPLETOS",/*80*/
	"POSTRES COMPLETOS",/*81*/
	"POSTRES COMPLETOS",/*82*/
	"POSTRES COMPLETOS",/*83*/
	"POSTRES COMPLETOS",/*84*/
	"POSTRES COMPLETOS",/*85*/
	"PASAPALOS",/*86*/
	"PASAPALOS",/*87*/
	"PASAPALOS"/*88*/
];

// VARIABLES
let lista_productos_valor;
let lista_productos_texto;
let categoria;
let numero_producto;

let precio_unitario_producto_valor;
let precio_unitario_producto_valor_USD;

let tasa_cambio;

let precio_unitario_Bs = document.getElementById("costo-unitario-Bs");
let precio_unitario_USD = document.getElementById("costo-unitario-USD");

let cantidad;

let porcentaje_ganancia;

let precio_total_Bs;
let precio_total_USD;

// Función para que la lista desplegable asigne los costos unitarios
function actualizarPrecio() {
	// Tomar el value de la option
	lista_productos_valor = document.getElementById("lista-productos").value;

	// Tomar el texto de la option
	let texto = document.getElementById("lista-productos");
	lista_productos_texto = texto.options[texto.selectedIndex].text;

	categoria = array_categoria_producto[lista_productos_valor];

	tasa_cambio = document.getElementById("tasa-cambio").value;

	// BOLÍVARES
	precio_unitario_producto_valor = array_precios_unitarios[lista_productos_valor];
	precio_unitario_Bs.innerHTML = precio_unitario_producto_valor.toFixed(2);
	
	// DÓLARES
	precio_unitario_producto_valor_USD = precio_unitario_producto_valor / tasa_cambio;

	numero_producto = array_precios_unitarios.indexOf(precio_unitario_producto_valor);
	console.log(`El número del producto es ${numero_producto}`);

	precio_unitario_USD.innerHTML = precio_unitario_producto_valor_USD.toFixed(2);
}

let boton_calcular_precio = document.getElementById("calcular-precio-total");
boton_calcular_precio.addEventListener("click", calcularPrecioInicial);

// FUNCIÓN PARA CALCULAR PRECIOS INICIALES
function calcularPrecioInicial() {

	cantidad = document.getElementById("cantidad").value;

	porcentaje_ganancia = document.getElementById("porcentaje-ganancia").value;

	precio_total_Bs = (precio_unitario_producto_valor * cantidad) * ((porcentaje_ganancia/100)+1);
	document.getElementById("costo-total-Bs").innerHTML = precio_total_Bs.toFixed(2);

	precio_total_USD = (precio_unitario_producto_valor_USD * cantidad) * ((porcentaje_ganancia/100)+1);
	document.getElementById("costo-total-USD").innerHTML = precio_total_USD.toFixed(2);
}

/****** PRECIO FINAL ********/

// VARIABLES
let cantidad_adicional_1;
let precio_adicional_1;

let cantidad_adicional_2;
let precio_adicional_2;

let cantidad_adicional_3;
let precio_adicional_3;

let costo_adicional_Bs;
let costo_adicional_USD;

let costo_final_Bs;
let costo_final_USD;

let boton_calcular_precio_2 = document.getElementById("calcular-precio-final");
boton_calcular_precio_2.addEventListener("click", calcularPrecioFinal);

// FUNCIÓN PARA CALCULAR LOS PRECIOS FINALES
function calcularPrecioFinal() {
	cantidad_adicional_1 = document.getElementById("cantidad_adicional_1").value;
	precio_adicional_1 = document.getElementById("precio_adicional_1").value;

	cantidad_adicional_2 = document.getElementById("cantidad_adicional_2").value;
	precio_adicional_2 = document.getElementById("precio_adicional_2").value;

	cantidad_adicional_3 = document.getElementById("cantidad_adicional_3").value;
	precio_adicional_3 = document.getElementById("precio_adicional_3").value;

	// Costo Adicional
	costo_adicional_USD = cantidad_adicional_1*precio_adicional_1 + cantidad_adicional_2*precio_adicional_2 + cantidad_adicional_3*precio_adicional_3;

	document.getElementById("costo-adicional-USD").innerHTML = costo_adicional_USD.toFixed(2);

	costo_adicional_Bs = costo_adicional_USD * tasa_cambio;
	document.getElementById("costo-adicional-Bs").innerHTML = costo_adicional_Bs.toFixed(2);

	// Costo Final
	costo_final_Bs = precio_total_Bs + costo_adicional_Bs;
	document.getElementById("costo-final-Bs").innerHTML = costo_final_Bs.toFixed(2);

	costo_final_USD = precio_total_USD + costo_adicional_USD;
	document.getElementById("costo-final-USD").innerHTML = costo_final_USD.toFixed(2);

	// Mostrar Presupuesto
	document.getElementById("nombre_producto").innerText = lista_productos_texto;

	document.getElementById("categoria_producto").innerText = categoria;

	document.getElementById("cantidad_producto").innerText = cantidad;

	document.getElementById("ganancia_producto").innerText = porcentaje_ganancia;

	document.getElementById("precio_inicial_producto_Bs").innerText = precio_total_Bs.toFixed(2);
	document.getElementById("precio_inicial_producto_USD").innerText = precio_total_USD.toFixed(2);

	document.getElementById("costo_adicional_producto_Bs").innerText = costo_adicional_Bs.toFixed(2);
	document.getElementById("costo_adicional_producto_USD").innerText = costo_adicional_USD.toFixed(2);

	document.getElementById("costo_final_producto_Bs").innerText = costo_final_Bs.toFixed(2);
	document.getElementById("costo_final_producto_USD").innerText = costo_final_USD.toFixed(2);
}

/* ACTUALIZAR PÁGINA */

let boton_actualiza_pagina = document.getElementById("actualizar_pagina");
boton_actualiza_pagina.addEventListener("click", actualizarPagina);

function actualizarPagina() {
	location.reload();
}

