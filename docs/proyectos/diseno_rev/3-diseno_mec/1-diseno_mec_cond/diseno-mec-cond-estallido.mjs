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


// ******* ESTALLIDO ******* //

// MOSTRAR Y OCULTAR A PLACER LA SECCIÓN DE ESTALLIDO //
var mostrar_ocultar_SE = document.getElementById("mostrar_ocultar_SE");
mostrar_ocultar_SE.addEventListener("click", mostrarOcultarSE);

var div1E = document.getElementById("div1E");
div1E.style.display = "none";

var div2E = document.getElementById("div2E");
div2E.style.display = "none";

function mostrarOcultarSE()
{
	if(div1E.style.display == "none")
	{
		div1E.style.display = "block";
	}
	else if(div1E.style.display == "block")
	{
		div1E.style.display = "none";
	}

	if(div2E.style.display == "none")
	{
		div2E.style.display = "block";
	}
	else if(div2E.style.display == "block")
	{
		div2E.style.display = "none";
	}
}


// DEFINIR EL CONTEXTO DE CANVAS "conductor_estallido" //
var e = document.getElementById("conductor_estallido");
export var papel = e.getContext("2d");

// Tamaño de canvas responsivo
var tamano_ventana = window.innerWidth;
console.log(tamano_ventana);
if(tamano_ventana < 600) {
	e.setAttribute("width", 280);
	e.setAttribute("height", 280);
}
else if(tamano_ventana >= 600 && tamano_ventana < 1024) {
	e.setAttribute("width", 550);
	e.setAttribute("height", 550);
}
else if(tamano_ventana >= 1024) {
	e.setAttribute("width", 720);
	e.setAttribute("height", 720);
}


// DIMENSIONES DEL CANVAS //
export var ancho_canvas = e.width;
export var alto_canvas = e.height;

// DIMENSIONES DEL ÁREA DE GRÁFICO //
export var ancho = 0.7*ancho_canvas;
var centro = ancho / 2;
export var alto = 0.7*alto_canvas;

// MÁRGENES DEL GRÁFICO (EL MISMO PARA LOS 4 LADOS) //
export var margen = (ancho_canvas-ancho)/2;
var medio_margen = margen / 2;


// FUNCIÓN PARA DIBUJAR LÍNEAS CONTINUAS (2 PUNTOS) //
function dibujarLineaPapel(color, xinicial, yinicial, xfinal, yfinal)
{
	papel.beginPath();
	papel.strokeStyle = (color);
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS PUNTEADAS (2 PUNTOS) (PARA REVESTIDOR SELECCIONADO) //
export function dibujarLineaSeleccionPapel(color, xinicial, yinicial, xfinal, yfinal)
{
	papel.beginPath();
	papel.strokeStyle = (color);
	papel.setLineDash([5,5]);
	papel.lineWidth=1;
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
	papel.setLineDash([]);
}


// FUNCIÓN PARA DIBUJAR LÍNEAS CON TRANSPARENCIA (2 PUNTOS) //
function dibujarLineaTrans(xinicial, yinicial, xfinal, yfinal)
{
	papel.beginPath();
	papel.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
	papel.closePath();
}

// FUNCIÓN PARA BORRAR TODO LO QUE HAYA EN EL CANVAS
function borrarCanvas() {
	papel.clearRect(0, 0, ancho_canvas, alto_canvas);
}


// FUNCIÓN PARA RENDERIZAR EL CANVAS INICIAL, BORRANDO PRIMERO LO QUE HAYA EN ÉL
function canvasInicial() {
	
	borrarCanvas();

	// EJES DE COORDENADAS DEL ÁREA DE DIBUJO
	dibujarLineaPapel("black", margen, margen-5, margen, alto+margen+5); // LÍNEA VERTICAL IZQUIERDA //
	dibujarLineaPapel("black", margen-5, margen, ancho+margen+5, margen); // LÍNEA HORIZONTAL SUPERIOR //

	// LEYENDA DE LAS LÍNEAS DE REVESTIDORES
	papel.fillStyle = "black";
	papel.textAlign = 'left';
	if(tamano_ventana < 600) {
		papel.font = '7px "Tahoma"';
	}
	else {
		papel.font = '10px "Tahoma"';
	}
	dibujarLineaPapel("blue", 0.095*ancho_canvas, alto+1.5*margen, 0.167*ancho_canvas, alto+1.5*margen);
	papel.fillText("Línea de Diseño (P.P.)", 0.18*ancho_canvas, alto+1.5*margen+3);

	dibujarLineaSeleccionPapel("green", 0.55*ancho_canvas, alto+1.5*margen, 0.64*ancho_canvas, alto+1.5*margen);
	papel.fillText("Línea de Revestidor", 0.65*ancho_canvas, alto+1.5*margen+3);

	// LEYENDA DEL EJE Y (ROTADA)
	var x = 0.04*ancho_canvas; // COORDENADA X DONDE ESTARÁ EL TEXTO ROTADO //
	var y = alto_canvas/2; // COORDENADA Y DONDE ESTARÁ EL TEXTO ROTADO //
	papel.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	papel.translate(x,y); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	papel.rotate(-Math.PI / 2); // ESTABLECER EL ÁNGULO DE INCLINACIÓN DEL TEXTO (-90º) //
	papel.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		papel.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		papel.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	papel.fillText("Profundidad (TVD, pies)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	papel.restore(); // REGRESAR EL CANVAS A SU ESTADO ORIGINAL, ANTES DE GRABARLO CON papel.save() //


	// EJE X LEYENDA
	var x = ancho_canvas/2; // COORDENADA X DONDE ESTARÁ EL TEXTO
	var y = 0.05*alto_canvas; // COORDENADA Y DONDE ESTARÁ EL TEXTO
	papel.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	papel.translate(x,y); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	papel.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		papel.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		papel.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	papel.fillText("Presión (lpc.)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	papel.restore();

}

// EVENTO PARA QUE EL CANVAS INICIAL SE RENDERICE AL CARGAR LA PÁGINA
window.addEventListener("load", canvasInicial);


// FUNCIÓN QUE ELIMINA LAS LÍNEAS DE DISEÑO Y REVESTIDOR, EJECUTANDO LA RENDERIZACIÓN INICIAL DEL CANVAS
export function borrarLinea()
{
	canvasInicial();
}

// ANÁLISIS REVESTIDOR CONDUCTOR POR ESTALLIDO //

// FUNCIÓN PARA LOS CÁLCULOS //
export function calcularTablaE()
{
	// Máxima carga de estallido: Prueba de Presión de la sarta de tubería de revestimiento cementada. //

	// Gradiente de Fractura de Seguridad //
	var tipo_de_pozo = document.getElementById("tipoDePozo").value;
	var grad_fract_seg;

	if(tipo_de_pozo == 1)
	{
		grad_fract_seg = 0.5;
	}

	else if(tipo_de_pozo == 2)
	{
		grad_fract_seg = 0.2;
	}

	// PERFIL DE PRESIÓN INTERNA //
	var prof1_cond = 0;
	var prof_asent_cond = Number(document.getElementById("prof_rev_cond").value);

	var dens_frac_cond = Number(document.getElementById("Dfrac_rev_cond").value);
	var dens_lodo_cond = Number(document.getElementById("DL_rev_cond").value);

	var pres_fondo_cond = 0.052*dens_frac_cond*prof_asent_cond + 0.052*grad_fract_seg*prof_asent_cond;
	var pres_sup_cond = pres_fondo_cond - (0.052*dens_lodo_cond*prof_asent_cond);


	// PERFIL DE PRESIÓN EXTERNA //
	var pres1_cond = 0;
	var pres_poro_cond = 0.052*Number(document.getElementById("Dporo_rev_cond").value)*prof_asent_cond;


	// PERFIL DE PRESIÓN RESULTANTE //
	var pres_R_sup_cond = pres_sup_cond - pres1_cond;
	var pres_R_fondo_cond = pres_fondo_cond - pres_poro_cond;


	// PERFIL DE PRESIÓN DE DISEÑO //
	var pres_D_sup_cond = pres_R_sup_cond;
	var pres_D_fondo_cond = pres_R_fondo_cond;


	// CÓDIGO PARA LLENAR LA TABLA DE PRESIONES //
	document.getElementById("profSuperfTablaE").innerHTML = prof1_cond;
	document.getElementById("presionSuperfTablaE").innerHTML = pres_D_sup_cond.toFixed(1);

	document.getElementById("profFondoTablaE").innerHTML = prof_asent_cond;
	document.getElementById("presionFondoTablaE").innerHTML = pres_D_fondo_cond.toFixed(1);
}


// FUNCIÓN PARA GRAFICAR LOS RESULTADOS //
export function disenoConductorEstallido() {

	// LLAMADO PARA QUE SE LIMPIE EL CANVAS Y SE RENDERICEN LOS EJES Y LEYENDAS
	canvasInicial();

	//CÓDIGO PARA LIMPIAR AVISOS DE FALLA ANTERIORES
	document.getElementById("aviso_falla_estallidoCorregidoS").innerHTML = "";
	document.getElementById("aviso_falla_estallidoCorregidoF").innerHTML = "";

	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_presion = document.getElementById("max_pres_graf_est").value;
	var max_prof = document.getElementById("max_prof_graf_est").value;

	var factorX = ancho / max_presion;
	var factorY = alto / max_prof;

	// LÍNEAS TRANSPARENTES DE REFERENCIA DENTRO DEL GRÁFICO //
	// EJE Y //
	for(var a = 50; a <= max_prof; a = a+50) // Línea cada 50 pies //
	{
		dibujarLineaTrans(margen, a*factorY + margen, ancho + margen, a*factorY + margen);
	}

	// EJE X //
	if(max_presion <= 2000) {
		for(a = 100; a <= max_presion; a = a+100)
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}
	else if(max_presion > 2000 && max_presion <= 8000) {
		for(a = 200; a <= max_presion; a = a+200)
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}
	else {
		for(a = 1000; a <= max_presion; a = a+1000)
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}


	// EJE Y - GUIONES //
	if(max_prof <= 2000) {
		for(a = 50; a <= max_prof; a = a+50) // Guión cada 50 pies //
		{
			if(a % 100 == 0)
			{
				dibujarLineaPapel("black", margen-4, (a*factorY)+margen, margen+4, (a*factorY)+margen); // Guiones largos para múltiplos de 100 //
			}
			else
			{
				dibujarLineaPapel("black", margen-2, (a*factorY)+margen, margen+2, (a*factorY)+margen); // Guiones cortos para los demás valores //
			}
		}
	}
	else {
		for(a = 500; a <= max_prof; a = a+500) // Guión cada 50 pies //
		{
			if(a % 1000 == 0)
			{
				dibujarLineaPapel("black", margen-4, (a*factorY)+margen, margen+4, (a*factorY)+margen); // Guiones largos para múltiplos de 100 //
			}
			else
			{
				dibujarLineaPapel("black", margen-2, (a*factorY)+margen, margen+2, (a*factorY)+margen); // Guiones cortos para los demás valores //
			}
		}
	}


	// EJE Y - VALORES //
	papel.fillStyle = "black";
	papel.textAlign ="right";
	if(tamano_ventana < 600){
		papel.font = '7px "Tahoma"';
	}
	else{
		papel.font = '12px "Tahoma"';
	}

	if(max_prof <= 2000) {
		for(a = 0; a <= max_prof; a = a+100)
		{
			papel.fillText(a, margen-6, (a*factorY+3)+margen);
		}
	}
	else {
		for(a = 0; a <= max_prof; a = a+1000)
		{
			papel.fillText(a, margen-6, (a*factorY+3)+margen);
		}
	}



	// EJE X - GUIONES //
	if(max_presion <= 2000) {
		for(a = 100; a <= max_presion; a = a+100)
		{
			if(a % 200 == 0)
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 200 //
			}
			else
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores //
			}
		}
	}
	else {
		for(a = 500; a <= max_presion; a = a+500)
		{
			if(a % 1000 == 0)
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 200 //
			}
			else
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores //
			}
		}
	}



	// EJE X - VALORES //
	papel.fillStyle = "black";
	papel.textAlign ="center";
	if(tamano_ventana < 600){
		papel.font = '7px "Tahoma"';
	}
	else{
		papel.font = '12px "Tahoma"';
	}

	if(max_presion <= 2000) {
		for(a = 0; a <= max_presion; a = a+200)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else {
		for(a = 0; a <= max_presion; a = a+1000)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}


	// ACCEDER A VALORES PARA GRAFICAR LAS LÍNEAS EN EL CANVAS //
	var presionSuperfTablaE = document.getElementById("presionSuperfTablaE");
	var pres_D_sup_cond = presionSuperfTablaE.innerHTML;

	var profSuperfTablaE = document.getElementById("profSuperfTablaE");
	var prof1_cond = profSuperfTablaE.innerHTML;

	var presionFondoTablaE = document.getElementById("presionFondoTablaE");
	var pres_D_fondo_cond = presionFondoTablaE.innerHTML;

	var profFondoTablaE = document.getElementById("profFondoTablaE");
	var prof_asent_cond = profFondoTablaE.innerHTML;

	var presion_estallido_cond = Number(document.getElementById("PE_rev_cond").value);

	// GRAFICAR LÍNEA DE DISEÑO //
	dibujarLineaPapel("black", (pres_D_sup_cond* factorX)+margen, (prof1_cond* factorY)+margen, (pres_D_fondo_cond* factorX)+margen, (prof_asent_cond* factorY)+margen);
	
	// GRAFICAR LÍNEA DE REVESTIDOR //
	dibujarLineaSeleccionPapel("green", (presion_estallido_cond*factorX)+margen, (prof1_cond*factorY)+margen, (presion_estallido_cond*factorX)+margen, (prof_asent_cond*factorY)+margen);
}


// MOSTRAR Y OCULTAR A PLACER LA TABLA DE RESISTENCIA AL ESTALLIDO CORREGIDA //
var tabla_corregidaE = document.getElementById("tablaEC");
tabla_corregidaE.style.display = "none";

export function mostrarOcultarEC()
{
	if(tabla_corregidaE.style.display == "none")
	{
		tabla_corregidaE.style.display = "inline-table";
	}
	else if(tabla_corregidaE.style.display == "inline-table")
	{
		tabla_corregidaE.style.display = "none";
	}
}