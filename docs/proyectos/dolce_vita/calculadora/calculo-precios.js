/****** PRECIO INICIAL ********/

// let tasa = 8.1;

// class Productos {
// 	constructor({
// 		nombre,
// 		categoria,
// 		diametro,
// 		peso,
// 		precioUnitarioBs,
// 		precioUnitarioUSD,
// 	}) {
// 		this.nombre = nombre;
// 		this.categoria = categoria;
// 		this.diametro = diametro;
// 		this.peso = peso;
// 		this.precioUnitarioBs = precioUnitarioBs;
// 		this.precioUnitarioUSD = Number((this.precioUnitarioBs / tasa).toFixed(2));
// 	}
// }

// const mini_brownie = new Productos({
// 	nombre: "MINI BROWNIE",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 0.54,
// });

// const enrrollados_vainilla = new Productos({
// 	nombre: "ENRROLLADOS DE VAINILLA",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 0.81,
// });

// const alfajores = new Productos({
// 	nombre: "ALFAJORES",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 0.81,
// });

// const mini_ponq_vai_mer = new Productos({
// 	nombre: "MINI PONQUESITOS DE VAINILLA C/MERENGUE",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 0.463,
// });

// const trufas_chispas = new Productos({
// 	nombre: "TRUFAS C/ CHISPAS",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 0.648,
// });

// const mini_quesillo = new Productos({
// 	nombre: "MINI QUESILLOS",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 0.81,
// });

// const ponquesito_vainilla = new Productos({
// 	nombre: "PONQUESITOS DE VAINILLA",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 0.648,
// });

// const ponquesito_vainilla_merengue = new Productos({
// 	nombre: "PONQUESITOS DE VAINILLA C/ MERENGUE",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 1.08,
// });

// const ponquesito_vainilla_arequipe = new Productos({
// 	nombre: "PONQUESITOS DE VAINILLA C/ AREQUIPE",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 1.62,
// });

// const ponquesito_vainilla_merengue_choco = new Productos({
// 	nombre: "PONQUESITOS VAINILLA C/ MERENGUE + RELLENO CHOCOLATE",
// 	categoria: "Mini Dulces",
// 	precioUnitarioBs: 1.62,
// });

// let array_productos = [mini_brownie, enrrollados_vainilla, alfajores, mini_ponq_vai_mer, trufas_chispas, mini_quesillo, ponquesito_vainilla, ponquesito_vainilla_merengue, ponquesito_vainilla_merengue, ponquesito_vainilla_arequipe, ponquesito_vainilla_merengue_choco];

let array_precios_unitarios = [
	0.54,/*1*/
	0.81,/*2*/
	0.81,/*3*/
	0.463,/*4*/
	0.648,/*5*/
	0.81,/*6*/
	0.648,/*7*/
	1.08,/*8*/
	1.62,/*9*/
	1.62,/*10*/
	0.81,/*11*/
	1.08,/*12*/
	1.08,/*13*/
	1.08,/*14*/
	1.08,/*15*/
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
let texto;
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
	// Tomar el texto de la option
	// let texto = document.getElementById("lista-productos");
	// lista_productos_texto = texto.options[texto.selectedIndex].text;

	texto = document.getElementById("input_lista").value;

	// Tomar el value de la option
	// lista_productos_valor = document.getElementById("lista-productos").value;

	lista_productos_valor = document.querySelector("#productos option[value='"+texto+"']").dataset.value;

	categoria = array_categoria_producto[lista_productos_valor];

	tasa_cambio = Number(document.getElementById("tasa-cambio").value);

	// BOLÍVARES
	precio_unitario_producto_valor = array_precios_unitarios[lista_productos_valor];
	precio_unitario_Bs.innerHTML = precio_unitario_producto_valor.toFixed(2);
	
	// DÓLARES
	precio_unitario_producto_valor_USD = precio_unitario_producto_valor / tasa_cambio;

	numero_producto = array_precios_unitarios.indexOf(precio_unitario_producto_valor);
	console.log(`El número del producto es ${numero_producto+1}`);
	console.log(`La categoria del producto es ${categoria}`);

	precio_unitario_USD.innerHTML = precio_unitario_producto_valor_USD.toFixed(2);
}

let nueva_fila;
let nueva_columna;
let nueva_columna2;
let nueva_columna3;
let nueva_columna4;
let nueva_columna5;
let nueva_columna6;

let tabla;
let cuerpo_tabla;
let filas_cuerpotabla;

let filas_tbody;
let penultima_fila;

// FUNCIÓN PARA AGREGAR FILAS CON LOS PRODUCTOS SELECCIONADOS
function agregarFila()
{
	// Cuento las filas de la tabla y creo un índice
	tabla = document.getElementById("tabla_resumen");
	filas_cuerpotabla = tabla.getElementsByTagName("tr").length -2; // "-2" para ignorar las 2 filas de la cabecera

	// Accedo al body de la tabla
	cuerpo_tabla = document.getElementById("cuerpo_tabla_resumen");
	
	//Creo una nueva fila siempre en la penúltima posición
	nueva_fila = cuerpo_tabla.insertRow(filas_cuerpotabla-1);

	// Agrego las 6 columnas a la nueva fila para formar celdas
	nueva_columna = nueva_fila.insertCell(0);
	nueva_columna2 = nueva_fila.insertCell(1);
	nueva_columna3 = nueva_fila.insertCell(2);
	nueva_columna4 = nueva_fila.insertCell(3);
	nueva_columna5 = nueva_fila.insertCell(4);
	nueva_columna6 = nueva_fila.insertCell(5);

	// Muestro valores en cada celda
	//nueva_columna.innerHTML = lista_productos_texto;
	nueva_columna.innerHTML = texto;
	nueva_columna2.innerHTML = cantidad;
	nueva_columna3.innerHTML = precio_unitario_producto_valor.toFixed(2);
	nueva_columna4.innerHTML = precio_unitario_producto_valor_USD.toFixed(2);
	nueva_columna5.innerHTML = Number(precio_total_Bs).toFixed(2);
	nueva_columna6.innerHTML = Number(precio_total_USD).toFixed(2);
}

let celda_usd_total = document.getElementById("celda_suma_usd");
let celda_Bs_total = document.getElementById("celda_suma_Bs");

// FUNCIÓN PARA SUMAR LOS COSTOS TOTALES DE LA TABLA
function sumarTotales() {

	filas_tbody = document.getElementById("cuerpo_tabla_resumen");
	let b = filas_tbody.getElementsByTagName("tr").length;

	let suma_usd = 0;
	let suma_Bs = 0;

	let index;
	for(index= 0; index < b-1; index++) {
		let celda_usd = filas_tbody.children[index];
		let usd_total = Number(celda_usd.lastElementChild.innerHTML);

		suma_usd = suma_usd + usd_total;
		celda_usd_total.innerHTML = suma_usd.toFixed(2);

		let celda_Bs = filas_tbody.children[index];
		let BS_total = Number(celda_Bs.children[4].innerHTML);

		suma_Bs = suma_Bs + BS_total;
		celda_Bs_total.innerHTML = suma_Bs.toFixed(2);
	}
}

// Accedo al botón de eliminar fila y le asigno el evento de activar la función
var eliminar_fila = document.getElementById("eliminar_fila");
eliminar_fila.addEventListener("click", eliminarFila);

let ultima_fila_presupuesto;
let filas_tbody_prespuesto;

function eliminarFila()
{
	filas_tbody = document.getElementById("cuerpo_tabla_resumen");
	let a = filas_tbody.getElementsByTagName("tr").length;
	console.log("Entrada " + a);

	// Condicional para que el botón eliminar no funcione cuando solo queda la fila del total
	if(a > 1) {
		penultima_fila = cuerpo_tabla.children[a-2];
		cuerpo_tabla.removeChild(penultima_fila);
		a = a - 1;
	}
	console.log("Salida " + a);

	sumarTotales();

	// Condicional para que al quedar solamente la fila de totales, la celda de suma total sea 0.00
	if(a == 1) {
		celda_usd_total.innerHTML = "0.00";
		celda_Bs_total.innerHTML = "0.00";
	}

	// CÓDIGO PARA ELIMINAR LAS FILAS DE LA TABLA DE PRESUPUESTO
	filas_tbody_prespuesto = document.getElementById("cuerpo_tabla_prespuesto");
	let b = filas_tbody_prespuesto.getElementsByTagName("tr").length;
	ultima_fila_presupuesto = filas_tbody_prespuesto.lastElementChild;
	if(b > 0) {
		filas_tbody_prespuesto.removeChild(ultima_fila_presupuesto);
	}
}

let boton_calcular_precio = document.getElementById("calcular-precio-total");
boton_calcular_precio.addEventListener("click", calcularPrecioInicial);

// FUNCIÓN PARA CALCULAR PRECIOS INICIALES
function calcularPrecioInicial() {

	cantidad = document.getElementById("cantidad").value;

	porcentaje_ganancia = document.getElementById("porcentaje-ganancia").value;

	if(numero_producto+1 == 36 || numero_producto+1 == 37 || numero_producto+1 == 38 || numero_producto+1 == 39 || numero_producto+1 == 51 || numero_producto+1 == 53 || numero_producto+1 == 69 || numero_producto+1 == 70 || numero_producto+1 == 71 || numero_producto+1 == 72 || numero_producto+1 == 73 || numero_producto+1 == 74 || numero_producto+1 == 75 || numero_producto+1 == 76 || numero_producto+1 == 77 || numero_producto+1 == 78 || numero_producto+1 == 79 || numero_producto+1 == 80 | numero_producto+1 == 81 || numero_producto+1 == 83) {
		precio_total_Bs = ((precio_unitario_producto_valor * cantidad) * ((porcentaje_ganancia/100)+1))+tasa_cambio;

		precio_total_USD = ((precio_unitario_producto_valor_USD * cantidad) * ((porcentaje_ganancia/100)+1))+1;
	}
	else {
		precio_total_Bs = (precio_unitario_producto_valor * cantidad) * ((porcentaje_ganancia/100)+1);

		precio_total_USD = (precio_unitario_producto_valor_USD * cantidad) * ((porcentaje_ganancia/100)+1);
	}

	document.getElementById("costo-total-Bs").innerHTML = Number(precio_total_Bs).toFixed(2);

	document.getElementById("costo-total-USD").innerHTML = Number(precio_total_USD).toFixed(2);

	agregarFila();
	sumarTotales();
	agregarFilaPresupuesto();
}

/****** PRECIO FINAL ********/

// VARIABLES
let precio_presupuesto_Bs;
let precio_presupuesto_usd;

let cantidad_adicional_1;
let precio_adicional_1;

let cantidad_adicional_2;
let precio_adicional_2;

let cantidad_adicional_3;
let precio_adicional_3;

let cantidad_adicional_4;
let precio_adicional_4;

let cantidad_adicional_5;
let precio_adicional_5;

let costo_adicional_Bs;
let costo_adicional_USD;

let costo_final_Bs;
let costo_final_USD;

let boton_calcular_precio_2 = document.getElementById("calcular-precio-final");
boton_calcular_precio_2.addEventListener("click", calcularPrecioFinal);

// FUNCIÓN PARA CALCULAR LOS PRECIOS FINALES
function calcularPrecioFinal() {

	precio_presupuesto_Bs = Number(celda_Bs_total.innerHTML);
	precio_presupuesto_usd = Number(celda_usd_total.innerHTML);

	if(producto_adicional_container_1.style.display == "grid") {
		cantidad_adicional_1 = document.getElementById("cantidad_adicional_1").value;
		precio_adicional_1 = document.getElementById("precio_adicional_1").value;
	}
	else {
		cantidad_adicional_1 = 0;
		precio_adicional_1 = 0;
	}

	if(producto_adicional_container_2.style.display == "grid") {
		cantidad_adicional_2 = document.getElementById("cantidad_adicional_2").value;
		precio_adicional_2 = document.getElementById("precio_adicional_2").value;
	}
	else {
		cantidad_adicional_2 = 0;
		precio_adicional_2 = 0;
	}

	if(producto_adicional_container_3.style.display == "grid") {
		cantidad_adicional_3 = document.getElementById("cantidad_adicional_3").value;
		precio_adicional_3 = document.getElementById("precio_adicional_3").value;
	}
	else {
		cantidad_adicional_3 = 0;
		precio_adicional_3 = 0;
	}

	if(producto_adicional_container_4.style.display == "grid") {
		cantidad_adicional_4 = document.getElementById("cantidad_adicional_4").value;
		precio_adicional_4 = document.getElementById("precio_adicional_4").value;
	}
	else {
		cantidad_adicional_4 = 0;
		precio_adicional_4 = 0;
	}

	if(producto_adicional_container_5.style.display == "grid") {
		cantidad_adicional_5 = document.getElementById("cantidad_adicional_5").value;
		precio_adicional_5 = document.getElementById("precio_adicional_5").value;
	}
	else {
		cantidad_adicional_5 = 0;
		precio_adicional_5 = 0;
	}

	// Costo Adicional
	costo_adicional_USD = cantidad_adicional_1*precio_adicional_1 + cantidad_adicional_2*precio_adicional_2 + cantidad_adicional_3*precio_adicional_3 + cantidad_adicional_4*precio_adicional_4 + cantidad_adicional_5*precio_adicional_5;

	document.getElementById("costo-adicional-USD").innerHTML = costo_adicional_USD.toFixed(2);

	costo_adicional_Bs = costo_adicional_USD * tasa_cambio;
	document.getElementById("costo-adicional-Bs").innerHTML = costo_adicional_Bs.toFixed(2);

	// Costo Final
	costo_final_Bs = precio_presupuesto_Bs + costo_adicional_Bs;
	document.getElementById("costo-final-Bs").innerHTML = costo_final_Bs.toFixed(2);

	costo_final_USD = precio_presupuesto_usd + costo_adicional_USD;
	document.getElementById("costo-final-USD").innerHTML = costo_final_USD.toFixed(2);
}

let tabla_prespuesto;
let filas_cuerpotabla_presupuesto;
let cuerpo_tabla_prespuesto;

let nueva_fila_presupuesto;
let nueva_columna_presupuesto;
let nueva_columna2_presupuesto;


// FUNCIÓN PARA AGREGAR FILAS CON LOS PRODUCTOS SELECCIONADOS A LA TABLA DEL PRESUPUESTO
function agregarFilaPresupuesto()
{
	// Cuento las filas de la tabla y creo un índice
	tabla_prespuesto = document.getElementById("tabla_presupuesto");
	filas_cuerpotabla_presupuesto = tabla_prespuesto.getElementsByTagName("tr").length - 1; // "-1" para ignorar la fila de la cabecera

	// Accedo al body de la tabla
	cuerpo_tabla_prespuesto = document.getElementById("cuerpo_tabla_prespuesto");
	
	//Creo una nueva fila siempre en la penúltima posición
	nueva_fila_presupuesto = cuerpo_tabla_prespuesto.insertRow(filas_cuerpotabla_presupuesto);

	// Agrego las 6 columnas a la nueva fila para formar celdas
	nueva_columna_presupuesto = nueva_fila_presupuesto.insertCell(0);
	nueva_columna2_presupuesto = nueva_fila_presupuesto.insertCell(1);

	// Muestro valores en cada celda
	//nueva_columna.innerHTML = lista_productos_texto;
	nueva_columna_presupuesto.innerHTML = texto;
	nueva_columna2_presupuesto.innerHTML = cantidad;
}

/* ACTUALIZAR PÁGINA */

let boton_actualiza_pagina = document.getElementById("actualizar_pagina");
boton_actualiza_pagina.addEventListener("click", actualizarPagina);

function actualizarPagina() {
	location.reload();
}

// FUNCIÓN PARA MOSTRAR / OCULTAR PRODUCTOS ADICIONALES

let producto_adicional_container_1 = document.getElementById("producto_adicional_container_1");
producto_adicional_container_1.style.display = "none";

let boton_desplegar_1 = document.getElementById("boton_desplegar_1");
boton_desplegar_1.addEventListener("click", mostrarOcultarAdicional1);

function mostrarOcultarAdicional1() {
	if(producto_adicional_container_1.style.display == "none")
	{
		producto_adicional_container_1.style.display = "grid";
	}
	else if(producto_adicional_container_1.style.display == "grid")
	{
		producto_adicional_container_1.style.display = "none";
	}
}



let producto_adicional_container_2 = document.getElementById("producto_adicional_container_2");
producto_adicional_container_2.style.display = "none";

let boton_desplegar_2 = document.getElementById("boton_desplegar_2");
boton_desplegar_2.addEventListener("click", mostrarOcultarAdicional2);

function mostrarOcultarAdicional2() {
	if(producto_adicional_container_2.style.display == "none")
	{
		producto_adicional_container_2.style.display = "grid";
	}
	else if(producto_adicional_container_2.style.display == "grid")
	{
		producto_adicional_container_2.style.display = "none";
	}
}



let producto_adicional_container_3 = document.getElementById("producto_adicional_container_3");
producto_adicional_container_3.style.display = "none";

let boton_desplegar_3 = document.getElementById("boton_desplegar_3");
boton_desplegar_3.addEventListener("click", mostrarOcultarAdicional3);

function mostrarOcultarAdicional3() {
	if(producto_adicional_container_3.style.display == "none")
	{
		producto_adicional_container_3.style.display = "grid";
	}
	else if(producto_adicional_container_3.style.display == "grid")
	{
		producto_adicional_container_3.style.display = "none";
	}
}


let producto_adicional_container_4 = document.getElementById("producto_adicional_container_4");
producto_adicional_container_4.style.display = "none";

let boton_desplegar_4 = document.getElementById("boton_desplegar_4");
boton_desplegar_4.addEventListener("click", mostrarOcultarAdicional4);

function mostrarOcultarAdicional4() {
	if(producto_adicional_container_4.style.display == "none")
	{
		producto_adicional_container_4.style.display = "grid";
	}
	else if(producto_adicional_container_4.style.display == "grid")
	{
		producto_adicional_container_4.style.display = "none";
	}
}



let producto_adicional_container_5 = document.getElementById("producto_adicional_container_5");
producto_adicional_container_5.style.display = "none";

let boton_desplegar_5 = document.getElementById("boton_desplegar_5");
boton_desplegar_5.addEventListener("click", mostrarOcultarAdicional5);

function mostrarOcultarAdicional5() {
	if(producto_adicional_container_5.style.display == "none")
	{
		producto_adicional_container_5.style.display = "grid";
	}
	else if(producto_adicional_container_5.style.display == "grid")
	{
		producto_adicional_container_5.style.display = "none";
	}
}


// FUNCIÓN PARA MOSTRAR / OCULTAR PÁRRAFO DE COMENTARIOS FINALES

let parrafo_comentario = document.getElementById("parrafo_comentario");
parrafo_comentario.style.display = "none";

let desplegar_comentario = document.getElementById("desplegar_comentario");
desplegar_comentario.addEventListener("click", mostrarOcultarComentario);

function mostrarOcultarComentario() {
	if(parrafo_comentario.style.display == "none")
	{
		parrafo_comentario.style.display = "block";
	}
	else if(parrafo_comentario.style.display == "block")
	{
		parrafo_comentario.style.display = "none";
	}
}