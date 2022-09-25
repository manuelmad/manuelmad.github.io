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


// ***************** COLAPSO ****************** //

// MOSTRAR Y OCULTAR A PLACER LA SECCIÓN DE COLAPSO //
var mostrar_ocultar_SC = document.getElementById("mostrar_ocultar_SC");
mostrar_ocultar_SC.addEventListener("click", mostrarOcultarSC);

var div1C = document.getElementById("div1C");
div1C.style.display = "none";

var div2C = document.getElementById("div2C");
div2C.style.display = "none";

export function mostrarOcultarSC()
{
	if(div1C.style.display == "none")
	{
		div1C.style.display = "block";
	}
	else if(div1C.style.display == "block")
	{
		div1C.style.display = "none";
	}

	if(div2C.style.display == "none")
	{
		div2C.style.display = "block";
	}
	else if(div2C.style.display == "block")
	{
		div2C.style.display = "none";
	}
}


// DEFINIR EL CONTEXTO DE CANVAS "conductor_colapso" //
var d = document.getElementById("conductor_colapso");
export var lienzo = d.getContext("2d");

// Tamaño de canvas responsivo
var tamano_ventana = window.innerWidth;

// Tamaño de canvas responsivo
if(tamano_ventana < 600) {
	d.setAttribute("width", 280);
	d.setAttribute("height", 280);
}
else if(tamano_ventana >= 600 && tamano_ventana < 1024) {
	d.setAttribute("width", 550);
	d.setAttribute("height", 550);
}
else if(tamano_ventana >= 1024) {
	d.setAttribute("width", 720);
	d.setAttribute("height", 720);
}

// DIMENSIONES DEL CANVAS //
export var ancho_canvasC = d.width;
export var alto_canvasC = d.height;

// DIMESIONES DEL GRÁFICO //
export var anchoC = 0.7*ancho_canvasC;
var centroC = anchoC / 2;
export var altoC = 0.7*alto_canvasC;


// MÁRGENES DEL GRÁFICO (EL MISMO PARA LOS 4 LADOS)//
export var margenC = (ancho_canvasC-anchoC)/2;
var medio_margenC = margenC / 2;


// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS) //
function dibujarLineaLienzo(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS CON TRANSPARENCIA (2 PUNTOS) //
function dibujarLineaTransC(xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS PUNTEADAS (2 PUNTOS) (PARA REVESTIDOR SELECCIONADO)//
export function dibujarLineaSeleccionLienzo(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.setLineDash([5,5]);
	lienzo.lineWidth=1;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.setLineDash([]);
}

// FUNCIÓN PARA BORRAR TODO LO QUE HAYA EN EL CANVAS
function borrarCanvasC() {
	lienzo.clearRect(0, 0, ancho_canvasC, alto_canvasC);
}


function canvasInicialC() {

	borrarCanvasC();
	// EJES DE COORDENADAS DEL ÁREA DE DIBUJO
	dibujarLineaLienzo("black", margenC, margenC-5, margenC, altoC+margenC+5); // LÍNEA VERTICAL IZQUIERDA //
	dibujarLineaLienzo("black", margenC-5, margenC, anchoC+margenC+5, margenC); // LÍNEA HORIZONTAL SUPERIOR //

	// LEYENDA DE LAS LÍNEAS DE REVESTIDORES
	lienzo.textAlign = 'left';
	if(tamano_ventana < 600) {
		lienzo.font = '7px "Tahoma"';
	}
	else {
		lienzo.font = '10px "Tahoma"';
	}
	dibujarLineaLienzo("black", 0.1*ancho_canvasC, 0.95*alto_canvasC, 0.19*ancho_canvasC, 0.95*alto_canvasC);
	lienzo.fillStyle = "black";
	lienzo.fillText("Línea de Diseño", 0.2*ancho_canvasC, 0.9553*alto_canvasC);

	dibujarLineaSeleccionLienzo("green", 0.53*ancho_canvasC, 0.95*alto_canvasC, 0.63*ancho_canvasC, 0.95*alto_canvasC);
	lienzo.fillText("Línea de Revestidor", 0.645*ancho_canvasC, 0.9553*alto_canvasC);

	// LEYENDA DEL EJE Y (ROTADA)
	var xC = 0.04*ancho_canvasC; // COORDENADA X DONDE ESTARÁ EL TEXTO ROTADO //
	var yC = alto_canvasC/2; // COORDENADA Y DONDE ESTARÁ EL TEXTO ROTADO //
	lienzo.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	lienzo.translate(xC,yC); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	lienzo.rotate(-Math.PI / 2); // ESTABLECER EL ÁNGULO DE INCLINACIÓN DEL TEXTO (-90º) //
	lienzo.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		lienzo.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		lienzo.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	lienzo.fillText("Profundidad (TVD, pies)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	lienzo.restore(); // REGRESAR EL CANVAS A SU ESTADO ORIGINAL, ANTES DE GRABARLO CON papel.save() //


	// EJE X LEYENDA
	var xC = ancho_canvasC/2; // COORDENADA X DONDE ESTARÁ EL TEXTO
	var yC = 0.05*alto_canvasC; // COORDENADA Y DONDE ESTARÁ EL TEXTO
	lienzo.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	lienzo.translate(xC,yC); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	lienzo.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		lienzo.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		lienzo.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	lienzo.fillText("Presión (lpc.)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	lienzo.restore();
}

// EVENTO PARA QUE EL CANVAS INICIAL SE RENDERICE AL CARGAR LA PÁGINA
window.addEventListener("load", canvasInicialC);

// FUNCIÓN QUE ELIMINA LA LÍNEA DE DISEÑO, SUPERPONIENDO SOBRE EL CANVAS LA IMAGEN CAPTURADA ANTERIORMENTE
export function borrarLineaC ()
{
	canvasInicialC();
}

export function ocultarAvisosFallaColapso() {
	var no_apto_c = document.getElementById("aviso_falla_colapso");
	no_apto_c.style.display = "none";
}

// ACCESO AL INPUT NUMBER DE TOPE DE CEMENTO //
var TTCCond = document.getElementById("TTCCond");
var Den_Cem_Cond = document.getElementById("DenCemCond");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "TTCCond" Y "DenCemCond" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber0 ()
{
	TTCCond.disabled = false;
	Den_Cem_Cond.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber0" //
var conductorCementosi = document.getElementById("conductorCementosi");
conductorCementosi.addEventListener("click", habilitarNumber0);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "TTCCond" Y "DenCemCond" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber1 ()
{
	TTCCond.disabled = true;
	Den_Cem_Cond.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber1" //
var conductorCementono = document.getElementById("conductorCementono");
conductorCementono.addEventListener("click", habilitarNumber1);


// ANÁLISIS REVESTIDOR CONDUCTOR POR COLAPSO //
export function calcularTablaC()
{
	// Máxima carga de colapso: 1/3 Vacío.

	// PERFIL DE PRESIÓN INTERNA //
	var prof_cond_sup = 0;
	var prof_asent_cond = Number(document.getElementById("prof_rev_cond").value);
	var TTCCond = document.getElementById("TTCCond");
	var TTC_Cond = Number(TTCCond.value);
	var Prof_Prox_Hoyo = Number(document.getElementById("ProfProxHoyo").value);
	var Prof_Tope_lodo = Prof_Prox_Hoyo / 3;
	document.getElementById("topeLodo").innerHTML = Prof_Tope_lodo.toFixed(1) + " pies."; //Mostrar valor de tope de lodo

	var presint_cond_sup = 0;
	var dens_lodo_proxhoyo = Number(document.getElementById("DensProxHoyo").value);
	var presint_cond_ttc;

	if(TTCCond.disabled == true)
	{
		TTC_Cond = "N/A";
		presint_cond_ttc = "N/A";
	}
	else if(TTCCond.disabled == false && Prof_Tope_lodo >= TTC_Cond)
	{
		presint_cond_ttc = 0;
	}
	else if (TTCCond.disabled == false && Prof_Tope_lodo < TTC_Cond)
	{
		presint_cond_ttc = 0.052*dens_lodo_proxhoyo*(TTC_Cond - Prof_Tope_lodo);
	}
	
	
	var presint_cond_fondo;

	if(Prof_Tope_lodo >= prof_asent_cond)
	{
		var presint_cond_fondo = 0;
	}
	else
	{
		var presint_cond_fondo = 0.052*dens_lodo_proxhoyo*(prof_asent_cond - Prof_Tope_lodo);
	}

	// PERFIL DE PRESIÓN EXTERNA //
	var dens_lodo_cond = Number(document.getElementById("DL_rev_cond").value);
	var Den_Cem_Cond = Number(document.getElementById("DenCemCond").value);

	var presext_cond_sup = 0;

	if(TTCCond.disabled == true)
	{
		var presext_cond_ttc = "N/A";
	}
	else if(TTCCond.disabled == false)
	{
		var presext_cond_ttc = 0.052* dens_lodo_cond * TTC_Cond;
	}
	

	var presext_cond_fondo;

	if(TTCCond.disabled == true)
	{
		presext_cond_fondo = 0.052 * dens_lodo_cond * prof_asent_cond;
	}
	else if(TTCCond.disabled == false && TTC_Cond != 0)
	{
		presext_cond_fondo = presext_cond_ttc + (0.052 * Den_Cem_Cond * (prof_asent_cond - TTC_Cond));
	}
	
	else if(TTCCond.disabled == false && TTC_Cond == 0)
	{
		presext_cond_fondo = 0.052 * Den_Cem_Cond * prof_asent_cond;
	}

	// PERFIL DE PRESIÓN RESULTANTE COLAPSO //
	var pres_R_sup_cond = presext_cond_sup - presint_cond_sup;
	if(TTCCond.disabled == true)
	{
		var pres_R_ttc_cond = "N/A";
	}
	else
	{
		var pres_R_ttc_cond = presext_cond_ttc - presint_cond_ttc;
	}
	var pres_R_fondo_cond = presext_cond_fondo - presint_cond_fondo;


	// PERFIL DE PRESIÓN DE DISEÑO //
	var pres_D_sup_cond = FDcolapsoCond * presext_cond_sup;
	if(TTCCond.disabled == true)
	{
		var pres_D_ttc_cond = "N/A";
	}
	else
	{
		var pres_D_ttc_cond = FDcolapsoCond * pres_R_ttc_cond;
	}
	var pres_D_fondo_cond = FDcolapsoCond * pres_R_fondo_cond;


	// CÓDIGO PARA LLENAR LA TABLA DE PRESIONES //
	document.getElementById("profSuperfTablaC").innerHTML = prof_cond_sup;
	document.getElementById("presionSuperfTablaC").innerHTML = pres_D_sup_cond.toFixed(1);

	document.getElementById("profTTCTablaC").innerHTML = TTC_Cond;
	if(pres_D_ttc_cond =="N/A")
	{
		document.getElementById("presionTTCTablaC").innerHTML = "N/A";
	}
	else
	{
		document.getElementById("presionTTCTablaC").innerHTML = pres_D_ttc_cond.toFixed(1);
	}
	
	document.getElementById("profFondoTablaC").innerHTML = prof_asent_cond;
	document.getElementById("presionFondoTablaC").innerHTML = pres_D_fondo_cond.toFixed(1);
}


// FUNCIÓN PARA GRAFICAR LOS RESULTADOS //
export function graficarColapso()
{
	// LLAMADO PARA LIMPIAR EL CANVAS Y RENDERIZAR EJES Y LEYENDAS
	canvasInicialC();

	// CÓDIGO PARA BORRAR AVISOS DE FALLA ANTERIORES
	document.getElementById("aviso_falla_colapsoCorregidoS").innerHTML = "";
	document.getElementById("aviso_falla_colapsoCorregidoF").innerHTML = "";

	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_presionC = document.getElementById("max_pres_graf_col").value;
	var max_profC = document.getElementById("max_prof_graf_col").value;
	var factorXC = anchoC / max_presionC;
	var factorYC = altoC / max_profC;

	// ACCEDER A VARIABLES DESDE LA TABLA//
	var presionSuperfTablaC = document.getElementById("presionSuperfTablaC");
	var pres_D_sup_cond = presionSuperfTablaC.innerHTML;

	var profSuperfTablaC = document.getElementById("profSuperfTablaC");
	var prof_cond_sup = profSuperfTablaC.innerHTML;

	var presionTTCTablaC = document.getElementById("presionTTCTablaC");
	var pres_D_ttc_cond = presionTTCTablaC.innerHTML;

	var profTTCTablaC = document.getElementById("profTTCTablaC");
	var TTC_Cond = profTTCTablaC.innerHTML;

	var presionFondoTablaC = document.getElementById("presionFondoTablaC");
	var pres_D_fondo_cond = presionFondoTablaC.innerHTML;

	var profFondoTablaC = document.getElementById("profFondoTablaC");
	var prof_asent_cond = profFondoTablaC.innerHTML;

	// ACCEDER A INPUT
	var TTCCond = document.getElementById("TTCCond");

	// GRAFICAR LÍNEAS TRANSPARENTES DE REFERENCIA DENTRO DEL GRÁFICO //
	// EJE Y //
	let a;
	for(a = 50; a <= max_profC; a = a+50) // Línea cada 50 pies //
	{
		dibujarLineaTransC(margenC, a*factorYC + margenC, anchoC + margenC, a*factorYC + margenC);
	}

	// EJE X //
	if(max_presionC <= 2000) {
		for(a = 100; a <= max_presionC; a = a+100) // Línea cada 100 lpc //
		{
			dibujarLineaTransC(a*factorXC + margenC, margenC, a*factorXC + margenC, altoC + margenC);
		}
	}
	else if(max_presionC > 2000 && max_presionC <= 8000) {
			for(a = 200; a <= max_presionC; a = a+200) // Línea cada 100 lpc //
		{
			dibujarLineaTransC(a*factorXC + margenC, margenC, a*factorXC + margenC, altoC + margenC);
		}
	}
	else {
		for(a = 1000; a <= max_presionC; a = a+1000) // Línea cada 100 lpc //
		{
			dibujarLineaTransC(a*factorXC + margenC, margenC, a*factorXC + margenC, altoC + margenC);
		}
	}



	// EJE Y - GUIONES //
	for(a = 50; a <= max_profC; a = a+50) // Guión cada 50 pies //
	{
		if(a % 100 == 0)
		{
			dibujarLineaLienzo("black", margenC-4, (a*factorYC)+margenC, margenC+4, (a*factorYC)+margenC); // Guiones largos para múltiplos de 100 //
		}
		else
		{
			dibujarLineaLienzo("black", margenC-2, (a*factorYC)+margenC, margenC+2, (a*factorYC)+margenC); // Guiones cortos para los demás valores //
		}
	}


	// EJE Y - VALORES //
	lienzo.fillStyle = "black";
	lienzo.textAlign ="right";
	if(tamano_ventana < 600){
		lienzo.font = '7px "Tahoma"';
	}
	else {
		lienzo.font = '12px "Tahoma"';
	}

	if(max_profC <= 2000) {
		for(a = 0; a <= max_profC; a = a+100)
		{
			lienzo.fillText(a, margenC-6, (a*factorYC+3)+margenC);
		}
	}
	else {
		for(a = 0; a <= max_profC; a = a+1000)
		{
			lienzo.fillText(a, margenC-6, (a*factorYC+3)+margenC);
		}
	}


	// EJE X - GUIONES //
	if(max_presionC <= 2000) {
		for(a = 100; a <= max_presionC; a = a+100)
		{
			if(a % 200 == 0)
			{
				dibujarLineaLienzo("black", (a*factorXC)+margenC, margenC-4, (a*factorXC)+margenC, margenC+4); // Guiones largos para valores múltiplos de 500 //
			}
			else
			{
				dibujarLineaLienzo("black", (a*factorXC)+margenC, margenC-2, (a*factorXC)+margenC, margenC+2); // Guiones cortos para los demás valores //
			}
		}
	}
	else {
		for(a = 500; a <= max_presionC; a = a+500)
		{
			if(a % 1000 == 0)
			{
				dibujarLineaLienzo("black", (a*factorXC)+margenC, margenC-4, (a*factorXC)+margenC, margenC+4); // Guiones largos para valores múltiplos de 500 //
			}
			else
			{
				dibujarLineaLienzo("black", (a*factorXC)+margenC, margenC-2, (a*factorXC)+margenC, margenC+2); // Guiones cortos para los demás valores //
			}
		}
	}


	// EJE X - VALORES //
	lienzo.fillStyle = "black";
	lienzo.textAlign ="center";
	if(tamano_ventana < 600){
		lienzo.font = '7px "Tahoma"';
	}
	else {
		lienzo.font = '12px "Tahoma"';
	}

	if(max_presionC <= 2000) {
		for(a = 200; a <= max_presionC; a = a+200)
		{
			lienzo.fillText(a, (a*factorXC)+margenC, margenC-10);
		}
	}
	else {
		for(a = 1000; a <= max_presionC; a = a+1000)
		{
			lienzo.fillText(a, (a*factorXC)+margenC, margenC-10);
		}
	}


	// GRAFICAR LÍNEA DE DISEÑO//
	if(TTCCond.disabled == true || TTC_Cond == 0)
	{
		dibujarLineaLienzo("black", (pres_D_sup_cond* factorXC) + margenC, (prof_cond_sup* factorYC) + margenC, (pres_D_fondo_cond* factorXC) + margenC, (prof_asent_cond* factorYC) + margenC);
	}
	else if(TTCCond.disabled == false && TTC_Cond != 0)
	{
		dibujarLineaLienzo("black", (pres_D_sup_cond* factorXC) + margenC, (prof_cond_sup* factorYC) + margenC, (pres_D_ttc_cond* factorXC) + margenC, (TTC_Cond* factorYC) + margenC);
		dibujarLineaLienzo("black", (pres_D_ttc_cond* factorXC) + margenC, (TTC_Cond* factorYC) + margenC, (pres_D_fondo_cond* factorXC) + margenC, (prof_asent_cond* factorYC) + margenC);
	}

	
	// GRAFICAR LÍNEA DE REVESTIDOR //
	var presion_colapso_cond = Number(document.getElementById("PC_rev_cond").value);

	dibujarLineaSeleccionLienzo("green", (presion_colapso_cond*factorXC)+margenC, (prof_cond_sup*factorYC)+margenC, (presion_colapso_cond*factorXC)+margenC, (prof_asent_cond*factorYC)+margenC);

	// MENSAJES DE FALLA/NO FALLA POR COLAPSO //
	if(presion_colapso_cond < pres_D_sup_cond || presion_colapso_cond < pres_D_ttc_cond || presion_colapso_cond < pres_D_fondo_cond)
	{
		var no_apto_c = document.getElementById("aviso_falla_colapso");
		no_apto_c.style.display = "block";
		document.getElementById("aviso_falla_colapso").innerHTML = "AVISO: El revestidor falla por colapso. Elegir un nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
	}
	else
	{
		document.getElementById("aviso_falla_colapso").innerHTML = "";
	}
}


// MOSTRAR Y OCULTAR A PLACER LA TABLA DE RESISTENCIA AL COLAPSO CORREGIDA //
var tabla_corregidaC = document.getElementById("tablaCC");
tabla_corregidaC.style.display = "none";

export function mostrarOcultarCC()
{
	if(tabla_corregidaC.style.display == "none")
	{
		tabla_corregidaC.style.display = "inline-table";
	}
	else if(tabla_corregidaC.style.display == "inline-table")
	{
		tabla_corregidaC.style.display = "none";
	}
}