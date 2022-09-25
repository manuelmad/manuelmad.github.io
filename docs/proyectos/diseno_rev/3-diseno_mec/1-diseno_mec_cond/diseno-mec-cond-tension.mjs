// FACTORES DE DISEÑO PDVSA //

// CONDUCTOR //
const FDcolapsoCond = 1.0;
const FDestallidoCond = 1.0; // No existe, lo coloco por conveniencia.
const FDtensionCond = 1.0; // No existe, lo coloco por conveniencia.

// SUPERFICIAL E INTERMEDIO //
const FDcolapsoSupInt = 1.0;
const FDestallidoSupInt = 1.1;
const FDtensionSupInt = 1.6;

// PRODUCCIÓN //
const FDcolapsoProd = 1.1;
const FDestallidoProd = 1.1;
const FDtensionProd = 1.6;


// ****************** TENSIÓN ******************* //

// MOSTRAR Y OCULTAR A PLACER LA SECCIÓN DE TENSIÓN //
var mostrar_ocultar_ST = document.getElementById("mostrar_ocultar_ST");
mostrar_ocultar_ST.addEventListener("click", mostrarOcultarST);

var div1T = document.getElementById("div1T");
div1T.style.display = "none";

var div2T = document.getElementById("div2T");
div2T.style.display = "none";

function mostrarOcultarST()
{
	if(div1T.style.display == "none")
	{
		div1T.style.display = "block";
	}
	else if(div1T.style.display == "block")
	{
		div1T.style.display = "none";
	}

	if(div2T.style.display == "none")
	{
		div2T.style.display = "block";
	}
	else if(div2T.style.display == "block")
	{
		div2T.style.display = "none";
	}
}


// MOSTRAR Y OCULTAR A PLACER LA SECCIÓN DE CORRECCIÓN BIAXIAL //
var mostrar_ocultar_SCB = document.getElementById("mostrar_ocultar_SCB");
mostrar_ocultar_SCB.addEventListener("click", mostrarOcultarSCB);

var div1CB = document.getElementById("div1CB");
div1CB.style.display = "none";


function mostrarOcultarSCB()
{
	if(div1CB.style.display == "none")
	{
		div1CB.style.display = "block";
	}
	else if(div1CB.style.display == "block")
	{
		div1CB.style.display = "none";
	}
}

// DEFINIR EL CONTEXTO DE CANVAS "conductor_tension" //
var f = document.getElementById("conductor_tension");
var hoja = f.getContext("2d");

var tamano_ventana = window.innerWidth;
// Tamaño de canvas responsivo
if(tamano_ventana < 600) {
	f.setAttribute("width", 300);
	f.setAttribute("height", 300);
}
else if(tamano_ventana >= 600 && tamano_ventana < 1024) {
	f.setAttribute("width", 550);
	f.setAttribute("height", 550);
}
else if(tamano_ventana >= 1024) {
	f.setAttribute("width", 720);
	f.setAttribute("height", 720);
}

var ancho_canvasT = f.width;
var alto_canvasT = f.height;

var anchoT = 0.7*ancho_canvasT;
var centroT = anchoT / 2;
var altoT = 0.7*alto_canvasT;

// MÁRGENES DEL GRÁFICO //
var margenT = (ancho_canvasT - anchoT)/2;


// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS) //
function dibujarLineaHoja(color, xinicial, yinicial, xfinal, yfinal)
{
	hoja.beginPath();
	hoja.strokeStyle = (color);
	hoja.moveTo(xinicial,yinicial);
	hoja.lineTo(xfinal,yfinal);
	hoja.stroke();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS CON TRANSPARENCIA (2 PUNTOS) //
function dibujarLineaTransT(xinicial, yinicial, xfinal, yfinal)
{
	hoja.beginPath();
	hoja.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	hoja.moveTo(xinicial,yinicial);
	hoja.lineTo(xfinal,yfinal);
	hoja.stroke();
	hoja.closePath();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS PUNTEADAS (2 PUNTOS) //
function dibujarLineaSeleccionHoja(color, xinicial, yinicial, xfinal, yfinal)
{
	hoja.beginPath();
	hoja.strokeStyle = (color);
	hoja.setLineDash([5,5]);
	hoja.lineWidth=1;
	hoja.moveTo(xinicial,yinicial);
	hoja.lineTo(xfinal,yfinal);
	hoja.stroke();
	hoja.setLineDash([]);
}

function borrarCanvasT() {
	hoja.clearRect(0, 0, ancho_canvasT, alto_canvasT);
}

function canvasInicialT() {

	borrarCanvasT();

	// LEYENDA DE LAS LÍNEAS DE REVESTIDORES //
	hoja.textAlign = 'left';
	if(tamano_ventana < 600) {
		hoja.font = '8px "Tahoma"';
	}
	else {
		hoja.font = '10px "Tahoma"';
	}
	dibujarLineaHoja("black", 0.095*ancho_canvasT, altoT+1.5*margenT, 0.167*ancho_canvasT, altoT+1.5*margenT);
	hoja.fillStyle = "black";
	hoja.fillText("Línea de Tensión Real", 0.18*ancho_canvasT, altoT+1.5*margenT+3);

	dibujarLineaHoja("red", 0.095*ancho_canvasT, altoT+1.75*margenT, 0.167*ancho_canvasT, altoT+1.75*margenT);
	hoja.fillText("Línea de Diseño por Overpull", 0.18*ancho_canvasT, altoT+1.75*margenT+3);

	dibujarLineaSeleccionHoja("green", 0.55*ancho_canvasT, altoT+1.5*margenT, 0.64*ancho_canvasT, altoT+1.5*margenT);
	hoja.fillText("Línea de Revestidor", 0.65*ancho_canvasT, altoT+1.5*margenT+3);

	dibujarLineaHoja("purple", 0.55*ancho_canvasT, altoT+1.75*margenT, 0.64*ancho_canvasT, altoT+1.75*margenT);
	hoja.fillText("Línea de Diseño por Factor", 0.65*ancho_canvasT, altoT+1.75*margenT+3);

	// LEYENDA DEL EJE Y (ROTADA) //
	var xT = margenT-0.083*ancho_canvasT; // COORDENADA X DONDE ESTARÁ EL TEXTO ROTADO //
	var yT = 0.5*alto_canvasT; // COORDENADA Y DONDE ESTARÁ EL TEXTO ROTADO //
	hoja.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	hoja.translate(xT,yT); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	hoja.rotate(-Math.PI / 2); // ESTABLECER EL ÁNGULO DE INCLINACIÓN DEL TEXTO (-90º) //
	hoja.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		hoja.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		hoja.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	hoja.fillText("Profundidad (MD, pies)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	hoja.restore(); // REGRESAR EL CANVAS A SU ESTADO ORIGINAL, ANTES DE GRABARLO CON papel.save() //


	// EJE X LEYENDA //
	var xT = 0.5*ancho_canvasT; // COORDENADA X DONDE ESTARÁ EL TEXTO //
	var yT = margenT-0.07*alto_canvasT; // COORDENADA Y DONDE ESTARÁ EL TEXTO //
	hoja.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	hoja.translate(xT,yT); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	hoja.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		hoja.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		hoja.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	hoja.fillText("Tensión (lbf. x 1000)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	hoja.restore();
}

window.addEventListener("load", canvasInicialT);

// FUNCIÓN QUE ELIMINA LA LÍNEA DE DISEÑO POR TENSIÓN, SUPERPONIENDO SOBRE EL CANVAS LA IMAGEN CAPTURADA ANTERIORMENTE //
export function borrarLineaT ()
{
	canvasInicialT();
}

export function ocultarAvisosFallaTension() {
	var no_apto_t = document.getElementById("aviso_falla_tension");
	no_apto_t.style.display = "none";
}

// ANÁLISIS REVESTIDOR CONDUCTOR POR TENSIÓN //
export function disenoConductorTension()
{
	// CÁCULO DE DISEÑO //

	// SUPERFICIE //

	// ACCESO A LAS VARIBALES NECESARIAS //
	var overpull = 100000;
	var peso_nom_cond = Number(document.getElementById("peso_nom_cond").value);

	var diam_ext_cond = Number(document.getElementById("diam_ext_cond").value);
	var diam_int_cond = Number(document.getElementById("diam_int_cond").value);

	var dens_lodo_cond = Number(document.getElementById("DL_rev_cond").value);

	var prof_cond_sup = 0;
	var prof_asent_cond = Number(document.getElementById("prof_rev_cond").value);


	// CÁCULO DE VARIABLES NECESARIAS //
	var area_ext_cond = (Math.PI/4) * Math.pow(diam_ext_cond,2);
	var area_int_cond = (Math.PI/4) * Math.pow(diam_int_cond,2);

	var pres_ext_cond = 0.052 * dens_lodo_cond * prof_asent_cond;
	var pres_int_cond = pres_ext_cond;

	var W_sup = peso_nom_cond * prof_asent_cond;

	var fuerza_flotabilidad = (pres_int_cond * area_int_cond) - (pres_ext_cond * area_ext_cond);

	var fuerza_axial_sup = W_sup + fuerza_flotabilidad;
	console.log("La fuerza axial en superficie es " + fuerza_axial_sup + " lbf.");

	var condicion_sup;
	if(fuerza_axial_sup > 0)
	{
		condicion_sup = "Tensión";
		console.log("El revestidor conductor se encuentra en " + condicion_sup + " en superficie");
	}
	else if (fuerza_axial_sup < 0)
	{
		condicion_sup = "Compresión";
		console.log("El revestidor conductor se encuentra en " + condicion_sup + " en superficie");
	}

	// TOPE DE CEMENTO //
	var TTCCond = document.getElementById("TTCCond");
	var TTC_Cond = Number(TTCCond.value);

	var W_TTC = peso_nom_cond * (prof_asent_cond - TTC_Cond);
	var fuerza_axial_TTC = W_TTC + fuerza_flotabilidad;

	var condicion_TTC;
	if(fuerza_axial_TTC > 0)
	{
		condicion_TTC = "Tensión";
	}
	else if (fuerza_axial_TTC < 0)
	{
		condicion_TTC = "Compresión";
	}

	// FONDO //
	var W_fondo = 0;

	var fuerza_axial_fondo = W_fondo + fuerza_flotabilidad;
	console.log("La fuerza axial en fondo es " + fuerza_axial_fondo + " lbf.");

	var condicion_fondo;
	if(fuerza_axial_fondo > 0)
	{
		condicion_fondo = "Tensión";
		console.log("El revestidor conductor se encuentra en " + condicion_fondo + " en fondo");
	}
	else if (fuerza_axial_fondo < 0)
	{
		condicion_fondo = "Compresión";
		console.log("El revestidor conductor se encuentra en " + condicion_fondo + " en fondo");
	}

	// CÁLCULO DEL PUNTO NEUTRO //
	var delta_y = -1*prof_asent_cond - prof_cond_sup;
	var delta_x = fuerza_axial_fondo - fuerza_axial_sup;
	var pendiente = delta_y / delta_x;
	console.log("La pendiente de la recta de tensión real es " + pendiente);
	var punto_neutro = -1*prof_asent_cond - (pendiente * fuerza_axial_fondo);
	console.log("El punto neutro se encuentra a " + -1*punto_neutro + " pies");

	document.getElementById("puntoNeutro").innerHTML = (-1*(punto_neutro)).toFixed(0);


	// CÁLCULO DE LA RESISTENCIA A LA FLUENCIA O TENSIÓN //
	var num_grado_cond = Number(document.getElementById("num_grado_cond").value);

	var resist_fluenc_min = num_grado_cond * 1000;

	var resist_fluenc = resist_fluenc_min * (area_ext_cond - area_int_cond);

	document.getElementById("resisT").innerHTML = (resist_fluenc).toFixed(1);

	// CÓDIGO PARA LLENAR LA TABLA DE TENSIONES //
	document.getElementById("profSuperfTablaT").innerHTML = prof_cond_sup;
	document.getElementById("tensionRealSuperfTablaT").innerHTML = fuerza_axial_sup.toFixed(1);
	document.getElementById("tensionOverpullSuperfTablaT").innerHTML = (fuerza_axial_sup+overpull).toFixed(1);

	if(TTCCond.disabled == true)
	{
		document.getElementById("profTTCTablaT").innerHTML = "N/A";
		document.getElementById("tensionRealTTCTablaT").innerHTML = "N/A";
		document.getElementById("tensionOverpullTTCTablaT").innerHTML = "N/A";
	}
	else
	{
		document.getElementById("profTTCTablaT").innerHTML = TTC_Cond;
		document.getElementById("tensionRealTTCTablaT").innerHTML = fuerza_axial_TTC.toFixed(1);
		document.getElementById("tensionOverpullTTCTablaT").innerHTML = (fuerza_axial_TTC+overpull).toFixed(1);
	}
	
	document.getElementById("profFondoTablaT").innerHTML = prof_asent_cond;
	document.getElementById("tensionRealFondoTablaT").innerHTML = fuerza_axial_fondo.toFixed(1);
	document.getElementById("tensionOverpullFondoTablaT").innerHTML = (fuerza_axial_fondo+overpull).toFixed(1);

	

	// **************** CORRECCIÓN BIAXIAL **************** //

	var esfuerzo_sup = fuerza_axial_sup / (area_ext_cond - area_int_cond);
	console.log(esfuerzo_sup);
	console.log("El esfuerzo en superficie es " + esfuerzo_sup + " lpc");
	
	var condicion_esfuerzo_sup;
	if(esfuerzo_sup > 0)
	{
		condicion_esfuerzo_sup = "Tensión por esfuerzo";
		console.log("El revestidor conductor se encuentra en " + condicion_esfuerzo_sup + " en superficie");
	}
	else if (esfuerzo_sup < 0)
	{
		condicion_esfuerzo_sup = "Compresión por esfuerzo";
		console.log("El revestidor conductor se encuentra en " + condicion_esfuerzo_sup + " en superficie");
	}


	var esfuerzo_fondo = fuerza_axial_fondo / (area_ext_cond - area_int_cond);
	console.log(esfuerzo_fondo);
	console.log("El esfuerzo en fondo es " + esfuerzo_fondo + " lpc");

	var condicion_esfuerzo_fondo;
	if(esfuerzo_fondo > 0)
	{
		condicion_esfuerzo_fondo = "Tensión por esfuerzo";
		console.log("El revestidor conductor se encuentra en " + condicion_esfuerzo_fondo + " en fondo");
	}
	else if (esfuerzo_fondo < 0)
	{
		condicion_esfuerzo_fondo = "Compresión por esfuerzo";
		console.log("El revestidor conductor se encuentra en " + condicion_esfuerzo_fondo + " en fondo");
	}


	// CÓDIGO PARA LLENAR LA TABLA DE TENSIONES REALES Y ESFUERZOS //
	document.getElementById("profSuperfTablaB").innerHTML = prof_cond_sup;
	document.getElementById("tensionRealSuperfTablaB").innerHTML = fuerza_axial_sup.toFixed(1);
	document.getElementById("esfuerzoRealSuperfTablaB").innerHTML = esfuerzo_sup.toFixed(1);
	document.getElementById("condicionSuperfTablaB").innerHTML = condicion_sup;

	document.getElementById("profFondoTablaB").innerHTML = prof_asent_cond;
	document.getElementById("tensionRealFondoTablaB").innerHTML = fuerza_axial_fondo.toFixed(1);
	document.getElementById("esfuerzoRealFondoTablaB").innerHTML = esfuerzo_fondo.toFixed(1);
	document.getElementById("condicionFondoTablaB").innerHTML = condicion_fondo;
	

	// CÁLCULO RELACIONES //
	var rel_esfuerzo_fluen_sup = Math.abs((esfuerzo_sup / resist_fluenc_min) * 100);
	var rel_esfuerzo_fluen_fondo = Math.abs((esfuerzo_fondo / resist_fluenc_min) * 100);
	console.log("Valor de X para elipse en superficie: " + rel_esfuerzo_fluen_sup);
	console.log("Valor de X para elipse en fondo: " + rel_esfuerzo_fluen_fondo);

	// LLENADO DE TABLA OCULTA "relaciones_y" //
	document.getElementById("rel_esf_sup").innerHTML = rel_esfuerzo_fluen_sup;
	document.getElementById("rel_esf_fondo").innerHTML = rel_esfuerzo_fluen_fondo;


	// GRAFICAR ESFUERZO EN SUPERFICIE DENTRO DE LA GRÁFICA DE ELIPSE DE PLASTICIDAD //
	// La línea horizontal inferior (eje X) de la gráfica tiene coordenada en Y de 380 píxeles y va en X desde 27 hasta 645 píxeles //
	// La línea horizontal superior de la gráfica tiene coordenada en Y de 72 píxeles y va en X desde 27 hasta 645 píxeles //
	// La línea vertical izquierdo de la gráfica tiene coordenada en X de 27 píxeles y va en Y desde 72 hasta 380 píxeles //
	// La línea vertical derecho de la gráfica tiene coordenada en X de 645 píxeles y va en Y desde 72 hasta 380 píxeles //
	// El eje Y de la gráfica tiene coordenada en X de 338 píxeles y va en Y desde 72 hasta 380 píxeles //
	// El origen de la gráfica está en el punto (338,380) del canvas //
	// Cada cuadro de la gráfica mide 25,7 píxeles y representa 10 unidades de % //
	
	// Ecuación de la elipse X2 - XY + Y2 = 10.000 //

	// Cálculo de la coordenada en Y dada la coordenada en X (rel_esfuerzo_fluen) //
	
	// Superficie //
	// Ec. de segundo grado en el eje X derecho //
	var coef_y2 = 1;
	var coef_y = -1 * (rel_esfuerzo_fluen_sup);
	var term_indep = (Math.pow(rel_esfuerzo_fluen_sup, 2)) - 10000;

	var discrim = (Math.pow(coef_y, 2)) - (4 * coef_y2 * term_indep);

	var y1 = (-1*coef_y + (Math.sqrt(discrim))) / (2*coef_y2);
	var y2 = (-1*coef_y - (Math.sqrt(discrim))) / (2*coef_y2);

	document.getElementById("y_sup").innerHTML = y2; // LLENAR TABLA OCULTA//
	console.log("Superficie-derecha: Los puntos de intersección en Y son " + y1 + " y " + y2 + ". Tomar el negativo.");

	var presion_colapso_cond = Number(document.getElementById("PC_rev_cond").value);
	var presion_estallido_cond = Number(document.getElementById("PE_rev_cond").value);

	var correccion_colapso_sup;
	var correccion_estallido_sup;

	if(esfuerzo_sup > 0) // Tensión //
	{
		correccion_colapso_sup = Math.abs(y2) * presion_colapso_cond/100;
	}
	else if(esfuerzo_sup < 0) // Compresión //
	{
		correccion_estallido_sup = Math.abs(y2) * presion_estallido_cond/100;
	}

	// Ec. de segundo grado en el eje X izquierdo //
	var coef_y2_iz = 1;
	var coef_y_iz = rel_esfuerzo_fluen_sup;
	var term_indep_iz = (Math.pow(rel_esfuerzo_fluen_sup, 2)) - 10000;

	var discrim_iz = (Math.pow(coef_y_iz, 2)) - (4 * coef_y2_iz * term_indep_iz);

	var y1_iz = (-1*coef_y_iz + (Math.sqrt(discrim_iz))) / (2*coef_y2_iz);
	var y2_iz = (-1*coef_y_iz - (Math.sqrt(discrim_iz))) / (2*coef_y2_iz);

	document.getElementById("y_izq_sup").innerHTML = y2_iz; // LLENAR TABLA OCULTA//
	console.log("Superficie-izquierda: Los puntos de intersección en Y son " + y1_iz + " y " + y2_iz + ". Tomar el negativo.");

	if(esfuerzo_sup > 0) // Tensión //
	{
		correccion_estallido_sup = Math.abs(y2_iz) * presion_estallido_cond/100;
	}
	else if(esfuerzo_sup < 0) // Compresión //
	{
		correccion_colapso_sup = Math.abs(y2_iz) * presion_colapso_cond/100;
	}


	// Fondo //
	// Ec. de segundo grado en el eje X derecho //
	var coef_y2_fondo = 1;
	var coef_y_fondo = -1 * (rel_esfuerzo_fluen_fondo);
	var term_indep_fondo = (Math.pow(rel_esfuerzo_fluen_fondo, 2)) - 10000;

	var discrim_fondo = (Math.pow(coef_y_fondo, 2)) - (4 * coef_y2_fondo * term_indep_fondo);

	var y1_fondo = (-1*coef_y_fondo + (Math.sqrt(discrim_fondo))) / (2*coef_y2_fondo);
	var y2_fondo = (-1*coef_y_fondo - (Math.sqrt(discrim_fondo))) / (2*coef_y2_fondo);

	document.getElementById("y_fondo").innerHTML = y2_fondo; // LLENAR TABLA OCULTA//
	console.log("Fondo-derecha: Los puntos de intersección en Y son " + y1_fondo + " y " + y2_fondo + ". Tomar el negativo.");

	var correccion_colapso_fondo;
	var correccion_estallido_fondo;
	if(esfuerzo_fondo > 0) // Tensión //
	{
		correccion_colapso_fondo = Math.abs(y2_fondo) * presion_colapso_cond/100;
	}
	else if(esfuerzo_fondo < 0) // Compresión //
	{
		correccion_estallido_fondo = Math.abs(y2_fondo) * presion_estallido_cond/100;
	}

	// Ec. de segundo grado en el eje X izquierdo //
	var coef_y2_iz_fondo = 1;
	var coef_y_iz_fondo = rel_esfuerzo_fluen_fondo;
	var term_indep_iz_fondo = (Math.pow(rel_esfuerzo_fluen_fondo, 2)) - 10000;

	var discrim_iz_fondo = (Math.pow(coef_y_iz_fondo, 2)) - (4 * coef_y2_iz_fondo * term_indep_iz_fondo);

	var y1_iz_fondo = (-1*coef_y_iz_fondo + (Math.sqrt(discrim_iz_fondo))) / (2*coef_y2_iz_fondo);
	var y2_iz_fondo = (-1*coef_y_iz_fondo - (Math.sqrt(discrim_iz_fondo))) / (2*coef_y2_iz_fondo);

	document.getElementById("y_izq_fondo").innerHTML = y2_iz_fondo; // LLENAR TABLA OCULTA//
	console.log("Fondo-izquierda: Los puntos de intersección en Y son " + y1_iz_fondo + " y " + y2_iz_fondo + ". Tomar el negativo.");

	if(esfuerzo_fondo > 0) // Tensión //
	{
		correccion_estallido_fondo = Math.abs(y2_iz_fondo) * presion_estallido_cond/100;
	}
	else if(esfuerzo_fondo < 0) // Compresión //
	{
		correccion_colapso_fondo = Math.abs(y2_iz_fondo) * presion_colapso_cond/100;
	}

	//  CÓDIGO PARA LLENAR LA TABLA DE RELACIÓN Y COORDENADAS Y //
	document.getElementById("rel_esf_sup2").innerHTML = rel_esfuerzo_fluen_sup.toFixed(2);
	document.getElementById("rel_esf_fondo2").innerHTML = rel_esfuerzo_fluen_fondo.toFixed(2);
	document.getElementById("y_der_sup2").innerHTML = -1*y2.toFixed(2);
	document.getElementById("y_izq_sup2").innerHTML = -1*y2_iz.toFixed(2);
	document.getElementById("y_der_fondo2").innerHTML = -1*y2_fondo.toFixed(2);
	document.getElementById("y_izq_fondo2").innerHTML = -1*y2_iz_fondo.toFixed(2);

	// CÓDIGO PARA LLENAR LA TABLA DE CORRECCIONES EN SECCIÓN BIAXIAL //
	document.getElementById("profSuperfTablaB2").innerHTML = prof_cond_sup;
	document.getElementById("condicionSuperfTablaB2").innerHTML = condicion_sup;
	document.getElementById("resisEstCorregSuperfTablaB2").innerHTML = correccion_estallido_sup.toFixed(1);
	document.getElementById("resisColCorregSuperfTablaB2").innerHTML = correccion_colapso_sup.toFixed(1);

	document.getElementById("profFondoTablaB2").innerHTML = prof_asent_cond;
	document.getElementById("condicionFondoTablaB2").innerHTML = condicion_fondo;
	document.getElementById("resisEstCorregFondoTablaB2").innerHTML = correccion_estallido_fondo.toFixed(1);
	document.getElementById("resisColCorregFondoTablaB2").innerHTML = correccion_colapso_fondo.toFixed(1);

	// CÓDIGO PARA LLENAR TABLA CORREGIDA EN SECCIÓN DE ESTALLIDO  //
	document.getElementById("profSuperfTablaE2").innerHTML = prof_cond_sup;
	document.getElementById("profFondoTablaE2").innerHTML = prof_asent_cond;
	document.getElementById("presionCorregSuperfTablaE").innerHTML = correccion_estallido_sup.toFixed(1);
	document.getElementById("presionCorregFondoTablaE").innerHTML = correccion_estallido_fondo.toFixed(1);

	// CÓDIGO PARA LLENAR TABLA CORREGIDA EN SECCIÓN DE COLAPSO //
	document.getElementById("profSuperfTablaC2").innerHTML = prof_cond_sup;
	document.getElementById("profFondoTablaC2").innerHTML = prof_asent_cond;
	document.getElementById("presionCorregSuperfTablaC").innerHTML = correccion_colapso_sup.toFixed(1);
	document.getElementById("presionCorregFondoTablaC").innerHTML = correccion_colapso_fondo.toFixed(1);
}

export function graficaTensionyBiaxial()
{
	// LLAMADO PARA LIMPIAR TODOS LOS CANVAS Y RENDERIZAR EJES, LEYENDAS, LÍNEAS DE DISEÑO Y LÍNEAS DE REVESTIDORES.
	canvasInicialT();

	// CÓDIGO PARA LIMPIAR AVISOS DE FALLA POR FACTOR DE DISEÑO ANTERIORES
	document.getElementById("aviso_falla_tensionCorregidoS").innerHTML = "";
	document.getElementById("aviso_falla_tensionCorregidoF").innerHTML = "";

	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_tension = document.getElementById("max_ten_graf_ten").value;
	var min_tension = document.getElementById("min_ten_graf_ten").value;
	var max_profT = document.getElementById("max_prof_graf_ten").value;

	var factorXT = anchoT / (max_tension-min_tension);
	/* Las coordenadas en X se calcularán con la ecuación:
	coord_X = anchoT-((max_tension - "valor de tensión")*factorXT)*/
	var factorYT = altoT / max_profT;
		
	// EJES DE COORDENADAS (ÁREA DE DIBUJO CUADRADA Y ORIGEN VARIABLE) //
	dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT, margenT, (anchoT-((max_tension- 0)*factorXT))+margenT, altoT+margenT+5); // LÍNEA VERTICAL IZQUIERDA //
	dibujarLineaHoja("black", margenT, margenT, anchoT+margenT+5, margenT); // LÍNEA HORIZONTAL SUPERIOR //

	// LÍNEAS TRANSPARENTES DE REFERENCIA DENTRO DEL GRÁFICO //
	// EJE Y //
	let a;
	for(a = 50; a <= max_profT; a = a+50) // Línea cada 50 pies //
	{
		dibujarLineaTransT(margenT, a*factorYT + margenT, anchoT + margenT, a*factorYT + margenT);
	}

	// EJE X //
	// A LA DERECHA DEL CERO
	for(a = 100; a <= max_tension; a = a+100) // Línea cada 100 lbf //
	{
		dibujarLineaTransT((anchoT-((max_tension- a)*factorXT)) + margenT, margenT, (anchoT-((max_tension- a)*factorXT)) + margenT, altoT + margenT);
	}
	// A LA IZQUIERDA DEL CERO
	for(a = -100; a >= min_tension; a = a-100) // Línea cada 100 lbf //
	{
		dibujarLineaTransT((anchoT-((max_tension- a)*factorXT)) + margenT, margenT, (anchoT-((max_tension- a)*factorXT)) + margenT, altoT + margenT);
	}

	// EJES DE COORDENADAS A ESCALA  //
	// EJE Y - GUIONES //
	if(max_profT <= 2000) {
		for(a = 50; a <= max_profT; a = a+50) // Guión cada 50 pies //
		{
			if(a % 100 == 0)
			{
				dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT-4, (a*factorYT)+margenT, (anchoT-((max_tension- 0)*factorXT))+margenT+4, (a*factorYT)+margenT); // Guiones largos para múltiplos de 100 //
			}
			else
			{
				dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT-2, (a*factorYT)+margenT, (anchoT-((max_tension- 0)*factorXT))+margenT+2, (a*factorYT)+margenT); // Guiones cortos para los demás valores //
			}
		}
	}
	else {
		for(a = 500; a <= max_profT; a = a+500) // Guión cada 50 pies //
		{
			if(a % 1000 == 0)
			{
				dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT-4, (a*factorYT)+margenT, (anchoT-((max_tension- 0)*factorXT))+margenT+4, (a*factorYT)+margenT); // Guiones largos para múltiplos de 100 //
			}
			else
			{
				dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT-2, (a*factorYT)+margenT, (anchoT-((max_tension- 0)*factorXT))+margenT+2, (a*factorYT)+margenT); // Guiones cortos para los demás valores //
			}
		}
	}


	// EJE Y - VALORES //
	hoja.fillStyle = "black";
	hoja.textAlign = "right";
	if(tamano_ventana < 600){
		hoja.font = '7px "Tahoma"';
	}
	else{
		hoja.font = '12px "Tahoma"';
	}

	if(max_profT <= 2000) {
		for(a = 100; a <= max_profT; a = a+100)
		{
			hoja.fillText(a, (anchoT-((max_tension- 0)*factorXT))+margenT-6, (a*factorYT+3)+margenT);
		}
	}
	else {
		for(a = 1000; a <= max_profT; a = a+1000)
		{
			hoja.fillText(a, (anchoT-((max_tension- 0)*factorXT))+margenT-6, (a*factorYT+3)+margenT);
		}
	}


	// EJE X - GUIONES //
	// A LA DERECHA DEL CERO
	for(a = 0; a <= max_tension; a = a+100)
	{
		if(a % 500 == 0)
		{
			dibujarLineaHoja("black", (anchoT-((max_tension- a)*factorXT))+margenT, margenT-4, (anchoT-((max_tension- a)*factorXT))+margenT, margenT+4); // Guiones largos para valores múltiplos de 500 //
		}
		else
		{
			dibujarLineaHoja("black", (anchoT-((max_tension- a)*factorXT))+margenT, margenT-2, (anchoT-((max_tension- a)*factorXT))+margenT, margenT+2); // Guiones cortos para los demás valores //
		}
	}
	// A LA IZQUIERDA DEL CERO
	for(a = -100; a >= min_tension; a = a-100)
	{
		if(a % 500 == 0)
		{
			dibujarLineaHoja("black", (anchoT-((max_tension- a)*factorXT))+margenT, margenT-4, (anchoT-((max_tension- a)*factorXT))+margenT, margenT+4); // Guiones largos para valores múltiplos de 500 //
		}
		else
		{
			dibujarLineaHoja("black", (anchoT-((max_tension- a)*factorXT))+margenT, margenT-2, (anchoT-((max_tension- a)*factorXT))+margenT, margenT+2); // Guiones cortos para los demás valores //
		}
	}


	// EJE X - VALORES //
	hoja.fillStyle = "black";
	hoja.textAlign = "center";
	if(tamano_ventana < 600){
		hoja.font = '7px "Tahoma"';
	}
	else{
		hoja.font = '12px "Tahoma"';
	}
	
	// A LA DERECHA DEL CERO
	if(max_tension > 1000) {
		for(a = 0; a <= max_tension; a = a+500)
		{
			hoja.fillText(a, (anchoT-((max_tension- a)*factorXT))+margenT, margenT-10);
		}
	}
	else {
		for(a = 0; a <= max_tension; a = a+100)
		{
			hoja.fillText(a, (anchoT-((max_tension- a)*factorXT))+margenT, margenT-10);
		}
	}

	// A LA IZQUIERDA DEL CERO
	if(min_tension > -500)
	{
		for(a = -200; a >= min_tension; a = a-200)
		{
			hoja.fillText(a, (anchoT-((max_tension- a)*factorXT))+margenT, margenT-10);
		}
	}
	else
	{
		for(a = -500; a >= min_tension; a = a-500)
		{
			hoja.fillText(a, (anchoT-((max_tension- a)*factorXT))+margenT, margenT-10);
		}
	}

	// GRAFICAR LÍNEAS DE DISEÑO//
	var overpull = 100000;

	// ACCEDER A VALORES DE TABLA PARA GRAFICAR LAS LÍNEAS EN EL CANVAS //
	var profSuperfTablaT = document.getElementById("profSuperfTablaT");
	var prof_cond_sup = profSuperfTablaT.innerHTML;
	var tensionRealSuperfTablaT = document.getElementById("tensionRealSuperfTablaT");
	var fuerza_axial_sup = Number(tensionRealSuperfTablaT.innerHTML);

	var TTCCond = document.getElementById("TTCCond");
	var TTC_Cond = Number(TTCCond.value);
	var tensionRealTTCTablaT = document.getElementById("tensionRealTTCTablaT");
	var fuerza_axial_TTC = Number(tensionRealTTCTablaT.innerHTML);

	var profFondoTablaT = document.getElementById("profFondoTablaT");
	var prof_asent_cond = profFondoTablaT.innerHTML;
	var tensionRealFondoTablaT = document.getElementById("tensionRealFondoTablaT");
	var fuerza_axial_fondo = Number(tensionRealFondoTablaT.innerHTML);

	// PERFIL DE TENSIÓN REAL //
	if(TTCCond.disabled == true || TTC_Cond == 0)
	{
		dibujarLineaHoja("black", (anchoT-((max_tension- fuerza_axial_sup/1000)*factorXT)) + margenT, (prof_cond_sup* factorYT) + margenT, (anchoT-((max_tension- fuerza_axial_fondo/1000)*factorXT)) + margenT, (prof_asent_cond* factorYT) + margenT);
	}
	else if(TTCCond.disabled == false && TTC_Cond != 0)
	{
		dibujarLineaHoja("black", (anchoT-((max_tension- fuerza_axial_sup/1000)*factorXT)) + margenT, (prof_cond_sup* factorYT) + margenT, (anchoT-((max_tension- fuerza_axial_TTC/1000)*factorXT)) + margenT, (TTC_Cond* factorYT) + margenT);
		dibujarLineaHoja("black", (anchoT-((max_tension- fuerza_axial_TTC/1000)*factorXT)) + margenT, (TTC_Cond* factorYT) + margenT, (anchoT-((max_tension- fuerza_axial_fondo/1000)*factorXT)) + margenT, (prof_asent_cond* factorYT) + margenT);
	}

	// PERFIL DE TENSIÓN DE DISEÑO POR OVERPULL //
	if(TTCCond.disabled == true || TTC_Cond == 0)
	{
		dibujarLineaHoja("red", (anchoT-((max_tension- (fuerza_axial_sup/1000 + overpull/1000))*factorXT)) + margenT, (prof_cond_sup* factorYT) + margenT, (anchoT-((max_tension- (fuerza_axial_fondo/1000 + overpull/1000))*factorXT)) + margenT, (prof_asent_cond* factorYT) + margenT);		
	}
	else if(TTCCond.disabled == false && TTC_Cond != 0)
	{
		dibujarLineaHoja("red", (anchoT-((max_tension- (fuerza_axial_sup/1000 + overpull/1000))*factorXT)) + margenT, (prof_cond_sup* factorYT) + margenT, (anchoT-((max_tension- (fuerza_axial_TTC/1000 + overpull/1000))*factorXT)) + margenT, (TTC_Cond* factorYT) + margenT);
		dibujarLineaHoja("red", (anchoT-((max_tension- (fuerza_axial_TTC/1000 + overpull/1000))*factorXT)) + margenT, (TTC_Cond* factorYT) + margenT, (anchoT-((max_tension- (fuerza_axial_fondo/1000 + overpull/1000))*factorXT)) + margenT, (prof_asent_cond* factorYT) + margenT);
	}

	// EL PERFIL DE TENSIÓN DE DISEÑO POR FACTOR: NO APLICA PARA EL REVESTDOR CONDUCTOR //

	// GRAFICAR LÍNEA DE REVESTIDOR SELECCIONADO //
	var resistencia_tesion_cond = Number(document.getElementById("RT_rev_cond").value);

	dibujarLineaSeleccionHoja("green", (anchoT-((max_tension- resistencia_tesion_cond/1000)*factorXT))+margenT, (prof_cond_sup*factorYT)+margenT, (anchoT-((max_tension- resistencia_tesion_cond/1000)*factorXT))+margenT, (prof_asent_cond*factorYT)+margenT);
	
	// AVISO DE NO APTO POR TENSIÓN
	// SUPERFICIE
	var array_sup = [fuerza_axial_sup, fuerza_axial_sup+overpull];
	var array_ttc = [fuerza_axial_TTC, fuerza_axial_TTC+overpull];
	console.log(array_sup, array_ttc, array_sup.length, array_ttc.length);

	// Función para ordenar el array de menor a mayor y luego extraer el último elemento del array, que es el mayor de todos
	array_sup.sort(function(a, b) {return a-b});
	var y = array_sup.pop();
	console.log(y);

	array_ttc.sort(function(a, b) {return a-b});
	var z = array_ttc.pop();
	console.log(z);

	// FONDO
	var array_fondo = [fuerza_axial_fondo, fuerza_axial_fondo+100000];
	console.log(array_fondo);

	array_fondo.sort(function(a, b) {return a-b});
	var w = array_fondo.pop();
	console.log(w);
	
	if(TTCCond.disabled == true || TTC_Cond == 0) {
		if(resistencia_tesion_cond > y && resistencia_tesion_cond > w) {
			document.getElementById("aviso_falla_tension").innerHTML = "";
		}
		else {
			document.getElementById("aviso_falla_tension").style.display = "block";
			document.getElementById("aviso_falla_tension").innerHTML = "AVISO: El revestidor falla por tensión. Elegir nuevo revestidor y reinciar el estudio desde el primer paso (Estallido).";
		}
	}
	else {
		if(resistencia_tesion_cond > y && resistencia_tesion_cond > z && resistencia_tesion_cond > w) {
			document.getElementById("aviso_falla_tension").innerHTML = "";
		}
		else {
			document.getElementById("aviso_falla_tension").style.display = "block";
			document.getElementById("aviso_falla_tension").innerHTML = "AVISO: El revestidor falla por tensión. Elegir nuevo revestidor y reinciar el estudio desde el primer paso (Estallido).";
		}
	}
}


import {disenoConductorEstallido} from "./diseno-mec-cond-estallido.mjs";
import {graficarColapso} from "./diseno-mec-cond-colapso.mjs";
import {papel} from "./diseno-mec-cond-estallido.mjs";
import {ancho} from "./diseno-mec-cond-estallido.mjs";
import {ancho_canvas} from "./diseno-mec-cond-estallido.mjs";
import {alto} from "./diseno-mec-cond-estallido.mjs";
import {alto_canvas} from "./diseno-mec-cond-estallido.mjs";
import {margen} from "./diseno-mec-cond-estallido.mjs";
import {dibujarLineaSeleccionPapel} from "./diseno-mec-cond-estallido.mjs";
import {lienzo} from "./diseno-mec-cond-colapso.mjs";
import {anchoC} from "./diseno-mec-cond-colapso.mjs";
import {ancho_canvasC} from "./diseno-mec-cond-colapso.mjs";
import {alto_canvasC} from "./diseno-mec-cond-colapso.mjs";
import {margenC} from "./diseno-mec-cond-colapso.mjs";
import {altoC} from "./diseno-mec-cond-colapso.mjs";
import {dibujarLineaSeleccionLienzo} from "./diseno-mec-cond-colapso.mjs";

export function graficaBiaxial() {

	disenoConductorEstallido();
	graficarColapso();
	canvasInicialB();

	var profSuperfTablaT = document.getElementById("profSuperfTablaT");
	var prof_cond_sup = Number(profSuperfTablaT.innerHTML);
	var prof_asent_cond = Number(document.getElementById("prof_rev_cond").value);

	var rel_esf_sup = document.getElementById("rel_esf_sup");
	var rel_esfuerzo_fluen_sup = rel_esf_sup.innerHTML;

	var y_sup = document.getElementById("y_sup");
	var y2 = y_sup.innerHTML;

	var y_izq_sup = document.getElementById("y_izq_sup");
	var y2_iz = y_izq_sup.innerHTML;


	var rel_esf_fondo = document.getElementById("rel_esf_fondo");
	var rel_esfuerzo_fluen_fondo = rel_esf_fondo.innerHTML;

	var y_fondo = document.getElementById("y_fondo");
	var y2_fondo = y_fondo.innerHTML;

	var y_izq_fondo = document.getElementById("y_izq_fondo");
	var y2_iz_fondo = y_izq_fondo.innerHTML;

	dibujarLineaSheet("green", 338 + (rel_esfuerzo_fluen_sup / 10 * 27), 72 - (y2/10*25.7), 338 + (rel_esfuerzo_fluen_sup / 10 * 27), 380);
	dibujarLineaSheet("green", 338 + (rel_esfuerzo_fluen_sup / 10 * 27), 72 - (y2/10*25.7), 338, 72 - (y2/10*25.7));

	dibujarLineaSheet("green", 338 - (rel_esfuerzo_fluen_sup / 10 * 27), 72 - (y2_iz/10*25.7), 338 - (rel_esfuerzo_fluen_sup / 10 * 27), 380);
	dibujarLineaSheet("green", 338 - (rel_esfuerzo_fluen_sup / 10 * 27), 72 - (y2_iz/10*25.7), 338, 72 - (y2_iz/10*25.7));

	dibujarLineaSheet("blue", 338 + (rel_esfuerzo_fluen_fondo / 10 * 27), 72 - (y2_fondo/10*25.7), 338 + (rel_esfuerzo_fluen_fondo / 10 * 27), 380);
	dibujarLineaSheet("blue", 338 + (rel_esfuerzo_fluen_fondo / 10 * 27), 72 - (y2_fondo/10*25.7), 338, 72 - (y2_fondo/10*25.7));

	dibujarLineaSheet("blue", 338 - (rel_esfuerzo_fluen_fondo / 10 * 27), 72 - (y2_iz_fondo/10*25.7), 338 - (rel_esfuerzo_fluen_fondo / 10 * 27), 380);
	dibujarLineaSheet("blue", 338 - (rel_esfuerzo_fluen_fondo / 10 * 27), 72 - (y2_iz_fondo/10*25.7), 338, 72 - (y2_iz_fondo/10*25.7));

	// Corrección de la gráfica de Estallido //
	var resisEstCorregSuperfTablaB2 = document.getElementById("resisEstCorregSuperfTablaB2");
	var correccion_estallido_sup = resisEstCorregSuperfTablaB2.innerHTML;

	var resisEstCorregFondoTablaB2 = document.getElementById("resisEstCorregFondoTablaB2");
	var correccion_estallido_fondo = resisEstCorregFondoTablaB2.innerHTML;

	var max_presion = document.getElementById("max_pres_graf_est").value;
	var max_prof = document.getElementById("max_prof_graf_est").value;
	var factorX = ancho / max_presion;
	var factorY = alto / max_prof;

	dibujarLineaSeleccionPapel("red", (correccion_estallido_sup*factorX)+margen, (prof_cond_sup*factorY)+margen, (correccion_estallido_fondo*factorX)+margen, (prof_asent_cond*factorY)+margen);
	
	// LEYENDA DE LÍNEA CORREGIDA //
	dibujarLineaSeleccionPapel("red", 0.55*ancho_canvas, alto+1.75*margen, 0.64*ancho_canvas, alto+1.75*margen);
	if(tamano_ventana < 600) {
		papel.font = '7px "Tahoma"';
	}
	else {
		papel.font = '10px "Tahoma"';
	}
	papel.textAlign = 'left';
	papel.fillText("Línea de Rev. Corregida", 0.65*ancho_canvas, alto+1.75*margen+3);

	// Corrección de la gráfica de Colapso //
	var resisColCorregSuperfTablaB2 = document.getElementById("resisColCorregSuperfTablaB2");
	var correccion_colapso_sup = resisColCorregSuperfTablaB2.innerHTML;

	var resisColCorregFondoTablaB2 = document.getElementById("resisColCorregFondoTablaB2");
	var correccion_colapso_fondo = resisColCorregFondoTablaB2.innerHTML;

	var max_presionC = document.getElementById("max_pres_graf_col").value;
	var max_profC = document.getElementById("max_prof_graf_col").value;
	var factorXC = anchoC / max_presionC;
	var factorYC = altoC / max_profC;

	dibujarLineaSeleccionLienzo("red", (correccion_colapso_sup*factorXC)+margenC, (prof_cond_sup*factorYC)+margenC, (correccion_colapso_fondo*factorXC)+margenC, (prof_asent_cond*factorYC)+margenC);

	// LEYENDA DE LÍNEA CORREGIDA //
	dibujarLineaSeleccionLienzo("red", 0.53*ancho_canvasC, 0.97*alto_canvasC, 0.63*ancho_canvasC, 0.97*alto_canvasC);
	if(tamano_ventana < 600) {
		lienzo.font = '7px "Tahoma"';
	}
	else {
		lienzo.font = '10px "Tahoma"';
	}
	lienzo.textAlign = 'left';
	lienzo.fillText("Línea de Rev. Corregida", 0.645*ancho_canvasC, 0.97*alto_canvasC+3);
}


export function borrarBiaxial() {
	disenoConductorEstallido();
	graficarColapso();
	borrarElipse();
}

// *************** ELIPSE DE PLASTICIDAD ******************//

// DEFINIR EL CONTEXTO DE CANVAS "elipse_plasticidad" //
var g = document.getElementById("elipse_plasticidad");
var sheet = g.getContext("2d");
var ancho_canvasP = g.width; // LAS DIMENSIONES DEL CANVAS LAS ESTABLECÍ IDÉNTICAS A LA IMAGEN QUE QUIERO INSERTAR //
var alto_canvasP = g.height;
var centro_canvasP = ancho_canvasP / 2;

// VARIABLES QUE NO SE USARON
var anchoP = 300;
var centroP = anchoP / 2;
var altoP = 300;

// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS) //
function dibujarLineaSheet(color, xinicial, yinicial, xfinal, yfinal)
{
	sheet.beginPath();
	sheet.strokeStyle = (color);
	sheet.moveTo(xinicial,yinicial);
	sheet.lineTo(xfinal,yfinal);
	sheet.stroke();
}


// CREAR VARIABLE QUE CONTENGA IMAGEN A SER INSERTADA EN CANVAS //
var img = new Image();
img.src = "./imagenes/elipse-de-plasticidad.png";

function canvasInicialB() {
	sheet.drawImage(img, 0, 0);
	 //LEYENDA DE LA ELIPSE//
  	dibujarLineaSheet("green", 27, 435, 67, 435);
	sheet.font = '1rem "Tahoma"';
	sheet.fillStyle = "black";
	sheet.fillText("Intersección de la elipse para condición en superficie", 70, 437);

	dibujarLineaSheet("blue", 360, 435, 400, 435);
	sheet.font = '1rem "Tahoma"';
	sheet.fillStyle = "black";
	sheet.fillText("Intersección de la elipse para condición en fondo", 403, 437);
}

window.addEventListener("load", canvasInicialB);

function borrarElipse() {
	sheet.clearRect(0, 0, ancho_canvasP, alto_canvasP);
	canvasInicialB();
}