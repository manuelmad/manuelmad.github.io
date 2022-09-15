// FACTORES DE DISEÑO  PDVSA //

// CONDUCTOR //

const FDcolapsoCond = 1.0;

// SUPERFICIAL E INTERMEDIO //

const FDcolapsoSupInt = 1.0;
const FDestallidoSupInt = 1.1;
const FDtensionSupInt = 1.6;

// PRODUCCIÓN //

const FDcolapsoProd = 1.1;
const FDestallidoProd = 1.1;
const FDtensionProd = 1.6;


/******************* ESTALLIDO *********************/

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

// Mostrar y ocultar párrafo de colgador
var tipo_rev = document.getElementById("tipo-sarta__rev");
tipo_rev.addEventListener("click", ocultarColgador);
tipo_rev.addEventListener("click", ocultarCemento);
tipo_rev.addEventListener("click", tablaTensionRevestidor);

var tipo_cam = document.getElementById("tipo-sarta__cam");
tipo_cam.addEventListener("click", mostrarColgador);
tipo_cam.addEventListener("click", mostrarCemento);
tipo_cam.addEventListener("click", tablaTensionColgador);

var parrafo_colgador = document.getElementById("sarta_colgada");
var parrafo_min_prof_graf = document.getElementById("parrafo_min_prof_graf");
var parrafo_min_prof_grafC = document.getElementById("parrafo_min_prof_grafC");
var parrafo_min_prof_graf_ten = document.getElementById("parrafo_min_prof_graf_ten");

// Cambiar tablas e inputs dependiendo de Rev / Liner
function ocultarColgador() {
	parrafo_colgador.style.display = "none";
	parrafo_min_prof_graf.style.display = "none";
	parrafo_min_prof_grafC.style.display = "none";
	parrafo_min_prof_graf_ten.style.display = "none";
	document.getElementById("segunda_fila_estallido_correg").innerHTML = "Superficie";
	document.getElementById("segunda_fila_colapso_correg").innerHTML = "Superficie";
	document.getElementById("segunda_fila_tye").innerHTML = "Superficie";
	document.getElementById("segunda_fila_elipse").innerHTML = "Superficie";
	document.getElementById("segunda_fila_correccion").innerHTML = "Superficie";
	document.getElementById("segunda_fila_relaciones").innerHTML = "Superficie"
	document.getElementById("segunda_fila_factores").innerHTML = "Superficie";
}

function mostrarColgador() {
	parrafo_colgador.style.display = "block";
	parrafo_min_prof_graf.style.display = "block";
	parrafo_min_prof_grafC.style.display = "block";
	parrafo_min_prof_graf_ten.style.display = "block";
	document.getElementById("segunda_fila_estallido_correg").innerHTML = "Colgador";
	document.getElementById("segunda_fila_colapso_correg").innerHTML = "Colgador";
	document.getElementById("segunda_fila_tye").innerHTML = "Colgador";
	document.getElementById("segunda_fila_elipse").innerHTML = "Colgador";
	document.getElementById("segunda_fila_correccion").innerHTML = "Colgador";
	document.getElementById("segunda_fila_relaciones").innerHTML = "Colgador";
	document.getElementById("segunda_fila_factores").innerHTML = "Colgador";
}


// DEFINIR EL CONTEXTO DE CANVAS "revestidor_estallido"
var e = document.getElementById("revestidor_estallido");
var papel = e.getContext("2d");

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

// DIMENSIONES DEL CANVAS
var ancho_canvas = e.width;
var alto_canvas = e.height;

// DIMESIONES DEL GRÁFICO
var ancho = 0.7*ancho_canvas;
var centro = ancho / 2;
var alto = 0.7*alto_canvas;


// MÁRGENES DEL GRÁFICO (EL MISMO PARA LOS 4 LADOS)
var margen = (ancho_canvas-ancho)/2;
var medio_margen = margen / 2;


// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS)
function dibujarLineaPapel(color, xinicial, yinicial, xfinal, yfinal)
{
	papel.beginPath();
	papel.strokeStyle = (color);
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
}


// FUNCIÓN PARA DIBUJAR LÍNEAS PUNTEADAS (2 PUNTOS) DEL REVESTIDOR SELECCIONADO
function dibujarLineaSeleccionPapel(color, xinicial, yinicial, xfinal, yfinal)
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

	dibujarLineaPapel("purple", 0.095*ancho_canvas, alto+1.75*margen, 0.167*ancho_canvas, alto+1.75*margen);
	papel.fillText("Línea de Diseño (A.G.)", 0.18*ancho_canvas, alto+1.75*margen+3);

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

// FUNCIÓN PARA DIBUJAR LÍNEAS CON TRANSPARENCIA (2 PUNTOS)
function dibujarLineaTrans(xinicial, yinicial, xfinal, yfinal)
{
	papel.beginPath();
	papel.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
	papel.closePath();
}

// FUNCIÓN QUE ELIMINA LAS LÍNEAS DE DISEÑO Y REVESTIDOR, EJECUTANDO LA RENDERIZACIÓN INICIAL DEL CANVAS
function borrarLinea()
{
	canvasInicial();
}

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML
var boton_borrar_diseno = document.getElementById("boton_borrar_diseno");
boton_borrar_diseno.addEventListener("click", borrarLinea);

// AÑADIR EL EVENTO DE MOSTRAR LÍNEA DE DISEÑO AL BOTÓN DE HTML
var boton = document.getElementById("boton_diseno");
boton.addEventListener("click", disenoRevestidorEstallido);


/********** FUGA EN LA TUBERÍA DE PRODUCCIÓN ***********/

// AÑADIR EL EVENTO DE CALCULAR TABLA DE DISEÑO 1 AL BOTÓN DE HTML
var boton_tabla = document.getElementById("calculo_tabla_diseno");
boton_tabla.addEventListener("click", calcularTablaEstFG);


// FUNCIÓN PARA REALIZAR EL CÁLCULO DE DISEÑO POR PRUEBA DE PRESIÓN
function calcularTablaEstFG()
{
	// Máxima carga de estallido: Fuga de la tubería de producción cerca de la superficie.

	// PERFIL DE PRESIÓN INTERNA
	var prof_sup = 0;
	var prof_colg_tvd = Number(document.getElementById("prof_colg_tvd").value);
	var prof_asent_tvd = Number(document.getElementById("prof_rev_tvd").value);

	var dens_comp = Number(document.getElementById("DL_comp").value);

	var pres_sup_intE = Number(document.getElementById("pres_sup_intE").value);
	var pres_colg_intE = pres_sup_intE + 0.052*dens_comp*prof_colg_tvd;
	var pres_fondo_intE = pres_sup_intE + 0.052*dens_comp*prof_asent_tvd;
	

	// PERFIL DE PRESIÓN EXTERNA
	var pres_sup_extE = 0;

	var dens_poro_colg = Number(document.getElementById("Dporo_colg").value);
	var pres_colg_extE = 0.052*dens_poro_colg*prof_colg_tvd;
	
	var dens_poro_asent = Number(document.getElementById("Dporo_rev").value);
	var pres_fondo_extE = 0.052*dens_poro_asent*prof_asent_tvd;


	// PERFIL DE PRESIÓN RESULTANTE (Pint - Pext)
	var pres_R_supE = pres_sup_intE - pres_sup_extE;
	var pres_R_colgE = pres_colg_intE - pres_colg_extE;
	var pres_R_fondoE = pres_fondo_intE - pres_fondo_extE;


	// PERFIL DE PRESIÓN DE DISEÑO
	var pres_D_supE = pres_R_supE*FDestallidoProd;
	var pres_D_colgE = pres_R_colgE*FDestallidoProd;
	var pres_D_fondoE = pres_R_fondoE*FDestallidoProd;


	// CÓDIGO PARA LLENAR LA TABLA DE PRESIONES
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		document.getElementById("profSuperfTablaE").innerHTML = prof_sup;
		document.getElementById("presionSuperfTablaE").innerHTML = pres_D_supE.toFixed(1);

		document.getElementById("profColgTablaE").innerHTML = "N/A";
		document.getElementById("presionColgTablaE").innerHTML = "N/A";
	}
	else {
		document.getElementById("profSuperfTablaE").innerHTML = "N/A";
		document.getElementById("presionSuperfTablaE").innerHTML = "N/A";

		document.getElementById("profColgTablaE").innerHTML = prof_colg_tvd;
		document.getElementById("presionColgTablaE").innerHTML = pres_D_colgE.toFixed(1);
	}

	document.getElementById("profFondoTablaE").innerHTML = prof_asent_tvd;
	document.getElementById("presionFondoTablaE").innerHTML = pres_D_fondoE.toFixed(1);
}


// FUNCIÓN PARA GRAFICAR EL ANÁLISIS
function disenoRevestidorEstallido() {
	// LLAMADO PARA QUE SE LIMPIE EL CANVAS Y SE RENDERICEN LOS EJES Y LEYENDAS
	canvasInicial();

	//CÓDIGO PARA LIMPIAR AVISOS DE FALLA ANTERIORES
	document.getElementById("aviso_falla_estallidoCorregidoS").innerHTML = "";
	document.getElementById("aviso_falla_estallidoCorregidoF").innerHTML = "";

	// Medidas del gráfico
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		var min_prof = 0;
	}
	else {
		var min_prof = Number(document.getElementById("min_prof_graf").value);
	}
	var max_prof = Number(document.getElementById("max_prof_graf").value);
	var max_presion = Number(document.getElementById("max_pres_graf").value);
	var delta_prof = max_prof - min_prof;

	var factorX = ancho / max_presion;
	var factorY = alto / delta_prof;

	var numero_lineas = 10;
	var delta_valores_prof = delta_prof / numero_lineas;

	// LÍNEAS TRANSPARENTES DENTRO DEL GRÁFICO

	// EJE Y
	for(a = delta_valores_prof; a <= delta_prof; a = a+delta_valores_prof) // Línea cada 50 pies
	{
		dibujarLineaTrans(margen, a*factorY + margen, ancho + margen, a*factorY + margen);
	}
	
	// EJE X
	if(max_presion <= 2000)
	{
		for(a = 100; a <= max_presion; a = a+100) // Línea cada 100 lpc.
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}
	else if(max_presion > 2000 && max_presion <= 8000)
	{
		for(a = 200; a <= max_presion; a = a+200) // Línea cada 200 lpc.
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}
	else
	{
		for(a = 1000; a <= max_presion; a = a+1000) // Línea cada 1000 lpc.
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}
	

	// EJES DE COORDENADAS A ESCALA

	// EJE Y - GUIONES
	if(delta_prof <= 2000)
	{
		for(a = 0; a <= delta_prof; a = a+delta_valores_prof) // Guión cada 50 pies
		{
			dibujarLineaPapel("black", margen-4, (a*factorY)+margen, margen+4, (a*factorY)+margen); // Guiones largos en las 10 divisiones
			if(a < delta_prof) {
				dibujarLineaPapel("black", margen-2, ((a+delta_valores_prof/2)*factorY)+margen, margen+2, ((a+delta_valores_prof/2)*factorY)+margen); // Guiones cortos a la mitad de cada división
			}
		}
	}
	else
	{
		for(a = delta_valores_prof; a <= delta_prof; a = a+delta_valores_prof) // Guión cada 50 pies
		{
			if(a % 1000 == 0)
			{
				dibujarLineaPapel("black", margen-4, (a*factorY)+margen, margen+4, (a*factorY)+margen); // Guiones largos para múltiplos de 1000
				
			}
			else
			{
				dibujarLineaPapel("black", margen-2, (a*factorY)+margen, margen+2, (a*factorY)+margen); // Guiones cortos para los demás valores
			}
		}
	}

	
	// EJE Y - VALORES
	papel.fillStyle = "black";
	papel.textAlign ="right";
	if(tamano_ventana < 600){
		papel.font = '7px "Tahoma"';
	}
	else{
		papel.font = '12px "Tahoma"';
	}
	
	var b = 0;
	for(a = min_prof; a <= max_prof; a = a+delta_valores_prof)
	{
		papel.fillText(a.toFixed(0), margen-6, (b*factorY+3)+margen);
		b = b +delta_valores_prof;
	}

	// EJE X - GUIONES
	if(max_presion <= 2000)
	{
		for(a = 100; a <= max_presion; a = a+100)
		{
			if(a % 500 == 0)
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500
			}
			else
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores
			}
		}
	}
	else if(max_presion > 2000 && max_presion <= 10000)
	{
		for(a = 200; a <= max_presion; a = a+200)
		{
			if(a % 1000 == 0)
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500
			}
			else
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores
			}
		}
	}
	else
	{
		for(a = 1000; a <= max_presion; a = a+1000)
		{
			if(a % 2000 == 0)
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500
			}
			else
			{
				dibujarLineaPapel("black", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores
			}
		}
	}
	

	// EJE X - VALORES
	papel.fillStyle = "black";
	papel.textAlign ="center";
	if(tamano_ventana < 600){
		papel.font = '7px "Tahoma"';
	}
	else{
		papel.font = '12px "Tahoma"';
	}

	if(max_presion <= 1000)
	{
		for(a = 0; a <= max_presion; a = a+100)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else if(max_presion > 1000 && max_presion <= 2000)
	{
		for(a = 0; a <= max_presion; a = a+500)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else if(max_presion > 2000 && max_presion <=10000)
	{
		for(a = 0; a <= max_presion; a = a+1000)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else
	{
		for(a = 0; a <= max_presion; a = a+2000)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	
	// GRAFICAR LÍNEA DE DISEÑO POR FUGA EN LA TUBERÍA DE PRODUCCIÓN
	var presionSuperfTablaE = document.getElementById("presionSuperfTablaE");
	var pres_D_supE= presionSuperfTablaE.innerHTML;

	var profSuperfTablaE = document.getElementById("profSuperfTablaE");
	var prof_sup = profSuperfTablaE.innerHTML;

	var presionColgTablaE = document.getElementById("presionColgTablaE");
	var pres_D_colgE = presionColgTablaE.innerHTML;

	var profColgTablaE = document.getElementById("profColgTablaE");
	var prof_colg_tvd = profColgTablaE.innerHTML;

	var presionFondoTablaE = document.getElementById("presionFondoTablaE");
	var pres_D_fondoE = presionFondoTablaE.innerHTML;

	var profFondoTablaE = document.getElementById("profFondoTablaE");
	var prof_asent_tvd = profFondoTablaE.innerHTML;

	if(pres_D_colgE == "N/A") {
		dibujarLineaPapel("blue", (pres_D_supE *factorX)+margen, ((prof_sup - min_prof)* factorY)+margen, (pres_D_fondoE* factorX)+margen, ((prof_asent_tvd - min_prof)* factorY)+margen);
	}
	else {
		dibujarLineaPapel("blue", (pres_D_colgE *factorX)+margen, ((prof_colg_tvd - min_prof)* factorY)+margen, (pres_D_fondoE* factorX)+margen, ((prof_asent_tvd - min_prof)* factorY)+margen);
	}
	

	// GRAFICAR LA LÍNEA DEL REVESTIDOR SELECCIONADO
	var resistencia_estallido_rev = Number(document.getElementById("RE_rev").value);

	if(pres_D_colgE == "N/A") {
		dibujarLineaSeleccionPapel("green", (resistencia_estallido_rev*factorX)+margen, ((prof_sup - min_prof)*factorY)+margen, (resistencia_estallido_rev*factorX)+margen, ((prof_asent_tvd - min_prof)*factorY)+margen);
	}
	else {
		dibujarLineaSeleccionPapel("green", (resistencia_estallido_rev*factorX)+margen, ((prof_colg_tvd - min_prof) *factorY)+margen, (resistencia_estallido_rev*factorX)+margen, ((prof_asent_tvd - min_prof)*factorY)+margen);
	}
}

// MOSTRAR Y OCULTAR A PLACER LA TABLA DE RESISTENCIA AL ESTALLIDO CORREGIDA //
var mostrar_ocultar_EC = document.getElementById("mostrar_ocultar_EC");
mostrar_ocultar_EC.addEventListener("click", mostrarOcultarEC);

var tabla_corregidaE = document.getElementById("tablaEC");
tabla_corregidaE.style.display = "none";

function mostrarOcultarEC()
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


/******************* COLAPSO *********************/

// MOSTRAR Y OCULTAR A PLACER LA SECCIÓN DE COLAPSO //
var mostrar_ocultar_SC = document.getElementById("mostrar_ocultar_SC");
mostrar_ocultar_SC.addEventListener("click", mostrarOcultarSC);

var div1C = document.getElementById("div1C");
div1C.style.display = "none";

var div2C = document.getElementById("div2C");
div2C.style.display = "none";

function mostrarOcultarSC()
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

// DEFINIR EL CONTEXTO DE CANVAS "revestidor_estallido"
var d = document.getElementById("revestidor_colapso");
var lienzo = d.getContext("2d");

// Tamaño de canvas responsivo
var tamano_ventana = window.innerWidth;
console.log(tamano_ventana);
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

// DIMENSIONES DEL CANVAS
var ancho_canvasC = d.width;
var alto_canvasC = d.height;

// DIMESIONES DEL GRÁFICO
var anchoC = 0.7*ancho_canvasC;
var centroC = anchoC / 2;
var altoC = 0.7*alto_canvasC;


// MÁRGENES DEL GRÁFICO (EL MISMO PARA LOS 4 LADOS)
var margenC = (ancho_canvasC-anchoC)/2;
var medio_margenC = margenC / 2;


// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS)
function dibujarLineaLienzo(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
}


// FUNCIÓN PARA DIBUJAR LÍNEAS PUNTEADAS (2 PUNTOS) DEL REVESTIDOR SELECCIONADO
function dibujarLineaSeleccionLienzo(color, xinicial, yinicial, xfinal, yfinal)
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

// FUNCIÓN PARA DIBUJAR LÍNEAS CON TRANSPARENCIA (2 PUNTOS)
function dibujarLineaTransC(xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

// FUNCIÓN QUE ELIMINA LA LÍNEA DE DISEÑO, SUPERPONIENDO SOBRE EL CANVAS LA IMAGEN CAPTURADA ANTERIORMENTE
function borrarLineaC ()
{
	canvasInicialC();
}

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML
var boton_borrar_disenoC = document.getElementById("boton_borrar_disenoC");
boton_borrar_disenoC.addEventListener("click", borrarLineaC);
boton_borrar_disenoC.addEventListener("click", ocultarAvisosFallaColapso);

// AÑADIR EL EVENTO DE MOSTRAR LÍNEA DE DISEÑO AL BOTÓN DE HTML
var botonC = document.getElementById("boton_disenoC");
botonC.addEventListener("click", disenoRevestidorColapso);
//botonC.addEventListener("mouseup", imageSinLineaDisenoC); // EVENTO PARA CAPTURAR IMAGEN DEL CANVAS SIN LA LÍNEA DE DISEÑO //


// Código para mostrar y ocultar información de cementación con los eventos que se escribieron en estaliido
var info_cem_container = document.getElementById("info-cem-container");
var info_lech_container = document.getElementById("info-lech-container");
var segunda_fila_colapso = document.getElementById("segunda_fila_colapso");

function ocultarCemento() {
	info_lech_container.style.display = "block";
	info_cem_container.style.display = "none";
	segunda_fila_colapso.innerHTML = "T.T.C.";
}

function mostrarCemento() {
	info_cem_container.style.display = "block";
	info_lech_container.style.display = "none";
	segunda_fila_colapso.innerHTML = "Colgador";
}

function ocultarAvisosFallaColapso() {
	var no_apto_c = document.getElementById("aviso_falla_colapso");
	no_apto_c.style.display = "none";
}

var calcular_interfase_cemento = document.getElementById("calcular_interfase_cemento");
calcular_interfase_cemento.addEventListener("click", calcularInterfaseCemento);

function calcularInterfaseCemento() {
	var prof_asent_md = Number(document.getElementById("prof_rev_md").value);
	var long_lech_cola = Number(document.getElementById("long_lech_cola").value);
	var ttc_md = Number(document.getElementById("ttc_md").value);

	var long_lech_llen = prof_asent_md - long_lech_cola - ttc_md;
	document.getElementById("long_lech_llen").innerHTML = long_lech_llen;

	var interfase_lechadas = prof_asent_md - long_lech_cola;
	document.getElementById("interf_lech_md").innerHTML = interfase_lechadas;
}

var boton_tabla_colapso = document.getElementById("calculo_tabla_disenoC");
boton_tabla_colapso.addEventListener("click", calcularTablaCol);

function calcularTablaCol() {

	var dens_lodo = Number(document.getElementById("DL_rev").value);
	var den_cem = Number(document.getElementById("den_lech_unica").value);
	var den_lech_llen = Number(document.getElementById("den_lech_llen").value);
	var den_lech_cola = Number(document.getElementById("den_lech_cola").value);
	var interf_lech_tvd = Number(document.getElementById("interf_lech_tvd").value);

	// PERFIL DE PRESIÓN INTERNA
	var prof_sup = 0;
	var prof_ttc_tvd;
	var prof_colg_tvd;
	if(info_lech_container.style.display == "block") {
		prof_ttc_tvd = Number(document.getElementById("ttc_tvd").value);
		prof_colg_tvd = "N/A";
	}
	else {
		prof_ttc_tvd = "N/A";
		prof_colg_tvd = Number(document.getElementById("prof_colg_tvd").value);
	}
	var prof_asent_tvd = Number(document.getElementById("prof_rev_tvd").value);

	var pres_sup_intC = 0;
	var pres_ttc_intC = 0;
	var pres_colg_intC = 0;
	var pres_fondo_intC = 0;


	// PERFIL DE PRESIÓN EXTERNA
	var pres_sup_extC = 0;
	var pres_ttc_extC;
	var pres_colg_extC;
	var pres_fondo_extC;

	if(info_lech_container.style.display == "block") {
		pres_ttc_extC = 0.052*dens_lodo*prof_ttc_tvd;
		pres_colg_extC = "N/A";
		pres_fondo_extC = pres_ttc_extC + 0.052*den_lech_llen*(interf_lech_tvd - prof_ttc_tvd) + 0.052*den_lech_cola*(prof_asent_tvd - interf_lech_tvd);
	}
	else {
		pres_ttc_extC = "N/A";
		pres_colg_extC = 0.052*dens_lodo*prof_colg_tvd;
		pres_fondo_extC = pres_colg_extC + 0.052*den_cem*(prof_asent_tvd - prof_colg_tvd);
	}

	// PERFIL DE PRESIÓN RESULTANTE (Pext - Pint)
	var pres_R_supC = pres_sup_extC - pres_sup_intC;

	var pres_R_ttcC;
	var pres_R_colgC;
	if(info_lech_container.style.display == "block") {
		pres_R_colgC = "N/A";
		pres_R_ttcC = pres_ttc_extC - pres_ttc_intC;
	}
	else {
		pres_R_colgC = pres_colg_extC - pres_colg_intC;
		pres_R_ttcC = "N/A";
	}
	
	var pres_R_fondoC = pres_fondo_extC - pres_fondo_intC;


	// PERFIL DE PRESIÓN DE DISEÑO
	var pres_D_supC = pres_R_supC*FDcolapsoProd;

	var pres_D_ttcC;
	var pres_D_colgC;
	if(info_lech_container.style.display == "block") {
		pres_D_ttcC = pres_R_ttcC*FDcolapsoProd;
		pres_D_colgC = "N/A";
	}
	else {
		pres_D_ttcC = "N/A";
		pres_D_colgC = pres_R_colgC*FDcolapsoProd;
	}
		
	var pres_D_fondoC = pres_R_fondoC*FDcolapsoProd;


	// CÓDIGO PARA LLENAR LA TABLA DE PRESIONES
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		document.getElementById("profSuperfTablaC").innerHTML = prof_sup;
		document.getElementById("presionSuperfTablaC").innerHTML = pres_D_supC.toFixed(1);

		document.getElementById("profTTCTablaC").innerHTML = prof_ttc_tvd;
		document.getElementById("presionTTCTablaC").innerHTML = pres_D_ttcC.toFixed(1);
	}
	else {
		document.getElementById("profSuperfTablaC").innerHTML = "N/A";
		document.getElementById("presionSuperfTablaC").innerHTML = "N/A";

		document.getElementById("profTTCTablaC").innerHTML = prof_colg_tvd;
		document.getElementById("presionTTCTablaC").innerHTML = pres_D_colgC.toFixed(1);
	}

	document.getElementById("profFondoTablaC").innerHTML = prof_asent_tvd;
	document.getElementById("presionFondoTablaC").innerHTML = pres_D_fondoC.toFixed(1);
}

// FUNCIÓN PARA GRAFICAR EL ANÁLISIS
function disenoRevestidorColapso()
{
	// LLAMADO PARA LIMPIAR EL CANVAS Y RENDERIZAR EJES Y LEYENDAS
	canvasInicialC();

	// CÓDIGO PARA BORRAR AVISOS DE FALLA ANTERIORES
	document.getElementById("aviso_falla_colapsoCorregidoS").innerHTML = "";
	document.getElementById("aviso_falla_colapsoCorregidoF").innerHTML = "";

	// Medidas del gráfico
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		var min_prof = 0;
	}
	else {
		var min_prof = Number(document.getElementById("min_prof_grafC").value);
	}
	var max_prof = Number(document.getElementById("max_prof_grafC").value);
	var max_presion = Number(document.getElementById("max_pres_grafC").value);
	var delta_prof = max_prof - min_prof;

	var factorX = anchoC / max_presion;
	var factorY = altoC / delta_prof;

	var margen = (ancho_canvasC-anchoC)/2;

	var numero_lineas = 10;
	var delta_valores_prof = delta_prof / numero_lineas;

	// LÍNEAS TRANSPARENTES DENTRO DEL GRÁFICO

	// EJE Y
	for(a = delta_valores_prof; a <= delta_prof; a = a+delta_valores_prof)
	{
		dibujarLineaTransC(margen, a*factorY + margen, anchoC + margen, a*factorY + margen);
	}
	
	// EJE X
	if(max_presion <= 2000)
	{
		for(a = 100; a <= max_presion; a = a+100) // Línea cada 100 lpc.
		{
			dibujarLineaTransC(a*factorX + margen, margen, a*factorX + margen, altoC + margen);
		}
	}
	else if(max_presion > 2000 && max_presion <= 8000)
	{
		for(a = 200; a <= max_presion; a = a+200) // Línea cada 100 lpc.
		{
			dibujarLineaTransC(a*factorX + margen, margen, a*factorX + margen, altoC + margen);
		}
	}
	else
	{
		for(a = 1000; a <= max_presion; a = a+1000) // Línea cada 100 lpc.
		{
			dibujarLineaTransC(a*factorX + margen, margen, a*factorX + margen, altoC + margen);
		}
	}
	

	// EJES DE COORDENADAS A ESCALA

	// EJE Y - GUIONES
	if(delta_prof <= 2000)
	{
		for(a = 0; a <= delta_prof; a = a+delta_valores_prof) // Guión cada 50 pies
		{
			dibujarLineaLienzo("black", margen-4, (a*factorY)+margen, margen+4, (a*factorY)+margen); // Guiones largos para cada línea de división

			if(a < delta_prof)
			{
				dibujarLineaLienzo("black", margen-2, ((a+delta_valores_prof/2)*factorY)+margen, margen+2, ((a+delta_valores_prof/2)*factorY)+margen); // Guiones cortos para valores intermedios
			}
		}
	}
	else
	{
		for(a = delta_valores_prof; a <= delta_prof; a = a+delta_valores_prof) // Guión cada 50 pies
		{
			if(a % 1000 == 0)
			{
				dibujarLineaLienzo("black", margen-4, (a*factorY)+margen, margen+4, (a*factorY)+margen); // Guiones largos para múltiplos de 100
				
			}
			else
			{
				dibujarLineaLienzo("black", margen-2, (a*factorY)+margen, margen+2, (a*factorY)+margen); // Guiones cortos para los demás valores
			}
		}
	}

	
	// EJE Y - VALORES
	lienzo.fillStyle = "black";
	lienzo.textAlign ="right";
	if(tamano_ventana < 600){
		lienzo.font = '7px "Tahoma"';
	}
	else {
		lienzo.font = '12px "Tahoma"';
	}
	
	var b = 0;
	for(a = min_prof; a <= max_prof; a = a+delta_valores_prof)
	{
		lienzo.fillText(a.toFixed(0), margen-6, (b*factorY+3)+margen);
		b = b +delta_valores_prof;
	}
	
	// EJE X - GUIONES
	if(max_presion <= 2000)
	{
		for(a = 100; a <= max_presion; a = a+100)
		{
			if(a % 500 == 0)
			{
				dibujarLineaLienzo("black", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500
			}
			else
			{
				dibujarLineaLienzo("black", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores
			}
		}
	}
	else if(max_presion > 2000 && max_presion <= 10000)
	{
		for(a = 200; a <= max_presion; a = a+200)
		{
			if(a % 1000 == 0)
			{
				dibujarLineaLienzo("black", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500
			}
			else
			{
				dibujarLineaLienzo("black", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores
			}
		}
	}
	else
	{
		for(a = 1000; a <= max_presion; a = a+1000)
		{
			if(a % 2000 == 0)
			{
				dibujarLineaLienzo("black", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500
			}
			else
			{
				dibujarLineaLienzo("black", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores
			}
		}
	}
	

	// EJE X - VALORES
	lienzo.fillStyle = "black";
	lienzo.textAlign ="center";
	if(tamano_ventana < 600){
		lienzo.font = '7px "Tahoma"';
	}
	else {
		lienzo.font = '12px "Tahoma"';
	}
	
	if(max_presion <= 1000)
	{
		for(a = 0; a <= max_presion; a = a+100)
		{
			lienzo.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else if(max_presion > 1000 && max_presion <= 2000)
	{
		for(a = 0; a <= max_presion; a = a+500)
		{
			lienzo.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else if(max_presion > 2000 && max_presion <=10000)
	{
		for(a = 0; a <= max_presion; a = a+1000)
		{
			lienzo.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else
	{
		for(a = 0; a <= max_presion; a = a+2000)
		{
			lienzo.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	
	// GRAFICAR LÍNEA DE DISEÑO POR VACÍO TOTAL
	var presionSuperfTablaC = document.getElementById("presionSuperfTablaC");
	var pres_D_supC= presionSuperfTablaC.innerHTML;

	var profSuperfTablaC = document.getElementById("profSuperfTablaC");
	var prof_sup = profSuperfTablaC.innerHTML;

	var presionTTCTablaC = document.getElementById("presionTTCTablaC");
	var pres_D_ttcC = presionTTCTablaC.innerHTML;

	var profTTCTablaC = document.getElementById("profTTCTablaC");
	var prof_ttc_tvd = profTTCTablaC.innerHTML;

	var presionFondoTablaC = document.getElementById("presionFondoTablaC");
	var pres_D_fondoC = presionFondoTablaC.innerHTML;

	var profFondoTablaC = document.getElementById("profFondoTablaC");
	var prof_asent_tvd = profFondoTablaC.innerHTML;

	if(prof_sup != "N/A") {
		dibujarLineaLienzo("blue", (pres_D_supC *factorX)+margen, ((prof_sup - min_prof)* factorY)+margen, (pres_D_fondoC* factorX)+margen, ((prof_asent_tvd - min_prof)* factorY)+margen);
	}
	else {
		dibujarLineaLienzo("blue", (pres_D_ttcC *factorX)+margen, ((prof_ttc_tvd - min_prof)* factorY)+margen, (pres_D_fondoC* factorX)+margen, ((prof_asent_tvd - min_prof)* factorY)+margen);
	}
	

	// GRAFICAR LA LÍNEA DEL REVESTIDOR SELECCIONADO
	var resistencia_colapso_rev = Number(document.getElementById("RC_rev").value);

	if(prof_sup != "N/A") {
		dibujarLineaSeleccionLienzo("green", (resistencia_colapso_rev*factorX)+margen, ((prof_sup - min_prof)*factorY)+margen, (resistencia_colapso_rev*factorX)+margen, ((prof_asent_tvd - min_prof)*factorY)+margen);
	}
	else {
		dibujarLineaSeleccionLienzo("green", (resistencia_colapso_rev*factorX)+margen, ((prof_ttc_tvd - min_prof) *factorY)+margen, (resistencia_colapso_rev*factorX)+margen, ((prof_asent_tvd - min_prof)*factorY)+margen);
	}

	// MENSAJES DE FALLA / NO FALLA POR COLAPSO //
	if(resistencia_colapso_rev < pres_D_supC || resistencia_colapso_rev < pres_D_ttcC || resistencia_colapso_rev < pres_D_fondoC)
	{
		var no_apto_c = document.getElementById("aviso_falla_colapso");
		no_apto_c.style.display = "block";
		no_apto_c.innerHTML = "AVISO: El revestidor falla por colapso. Elegir un nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
	}
	else
	{
		document.getElementById("aviso_falla_colapso").innerHTML = "";
	}
}

// MOSTRAR Y OCULTAR A PLACER LA TABLA DE RESISTENCIA AL COLAPSO CORREGIDA //
var mostrar_ocultar_CC = document.getElementById("mostrar_ocultar_CC");
mostrar_ocultar_CC.addEventListener("click", mostrarOcultarCC);

var tabla_corregidaC = document.getElementById("tablaCC");
tabla_corregidaC.style.display = "none";

function mostrarOcultarCC()
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


/******** TENSIÓN ********/

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

// Funciones para manipular la tabla de tensiones con los eventos que se crearon en estallido
function tablaTensionColgador() {
	document.getElementById("profSuperfTablaT").innerHTML = "N/A";
	document.getElementById("tensionRealSuperfTablaT").innerHTML = "N/A";
	document.getElementById("tensionOverpullSuperfTablaT").innerHTML = "N/A";
	document.getElementById("tensionFactorSuperfTablaT").innerHTML = "N/A";
	document.getElementById("segunda_fila_tension").innerHTML = "Colgador";
}

function tablaTensionRevestidor() {
	document.getElementById("profSuperfTablaT").innerHTML = "";
	document.getElementById("tensionRealSuperfTablaT").innerHTML = "";
	document.getElementById("tensionOverpullSuperfTablaT").innerHTML = "";
	document.getElementById("tensionFactorSuperfTablaT").innerHTML = "";
	document.getElementById("segunda_fila_tension").innerHTML = "T.T.C.";
}

// DEFINIR EL CONTEXTO DE CANVAS "conductor_tension" //
var f = document.getElementById("revestidor_tension");
var hoja = f.getContext("2d");

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

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML //
var boton_borrar_disenoT = document.getElementById("boton_borrar_disenoT");
boton_borrar_disenoT.addEventListener("click", borrarLineaT);
boton_borrar_disenoT.addEventListener("click", ocultarAvisosFallaTension);

// FUNCIÓN QUE ELIMINA LA LÍNEA DE DISEÑO POR TENSIÓN, SUPERPONIENDO SOBRE EL CANVAS LA IMAGEN CAPTURADA ANTERIORMENTE //
function borrarLineaT ()
{
	canvasInicialT();
}

function ocultarAvisosFallaTension() {
	var no_apto_t = document.getElementById("aviso_falla_tension");
	no_apto_t.style.display = "none";
}

// AÑADIR EL EVENTO DE MOSTRAR LÍNEA DE DISEÑO AL BOTÓN DE HTML //
var grafica_tension_biaxial = document.getElementById("grafica_tension_biaxial");
grafica_tension_biaxial.addEventListener("click", graficaTensionyBiaxial);

// AÑADIR EL EVENTO DE REALIZAR CÁLCULOS Y LLENAR TABLAS AL BOTÓN DE HTML //
var boton5 = document.getElementById("boton_disenoT");
boton5.addEventListener("click", disenoConductorTension);

// ANÁLISIS REVESTIDOR CONDUCTOR POR TENSIÓN //
function disenoConductorTension()
{
	// CÁCULO DE DISEÑO //

	// SUPERFICIE //

	// ACCESO A LAS VARIBALES NECESARIAS //
	var overpull = 100000;
	var peso_nom = Number(document.getElementById("peso_nom").value);

	var diam_ext = Number(document.getElementById("diam_ext").value);
	var diam_int = Number(document.getElementById("diam_int").value);

	var dens_lodo = Number(document.getElementById("DL_rev").value);

	var prof_sup = 0;
	var prof_rev_tvd = Number(document.getElementById("prof_rev_tvd").value);
	var prof_rev_md = Number(document.getElementById("prof_rev_md").value);
	var prof_ttc_md = Number(document.getElementById("ttc_md").value);
	var prof_colg_md = Number(document.getElementById("prof_colg_md").value);

	var prof_colg_tvd = Number(document.getElementById("prof_colg_tvd").value);


	// CÁCULO DE VARIABLES NECESARIAS //
	var area_ext = (Math.PI/4) * Math.pow(diam_ext,2);
	console.log("El área externa es " + area_ext + " pulg2.");
	var area_int = (Math.PI/4) * Math.pow(diam_int,2);
	console.log("El área interna es " + area_int + " pulg2.");

	var pres_ext = 0.052 * dens_lodo * prof_rev_tvd;
	var pres_int = pres_ext;
	console.log("La presión en fondo es " + pres_ext + " lpc.");

	var fuerza_flotabilidad = (pres_int * area_int) - (pres_ext * area_ext);
	console.log("La fuerza de flotabilidad es: " + fuerza_flotabilidad + " lbf.");
	
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		
		// SI ES REVESTIDOR
		// SUPERFICIE
		var W_sup = peso_nom * prof_rev_md;
		var fuerza_axial_sup = W_sup + fuerza_flotabilidad;
		console.log("La fuerza axial en superficie es " + fuerza_axial_sup + " lbf.");

		var condicion_sup;
		if(fuerza_axial_sup > 0)
		{
			condicion_sup = "Tensión";
		}
		else if (fuerza_axial_sup < 0)
		{
			condicion_sup = "Compresión";
		}
		console.log("El revestidor se encuentra en " + condicion_sup + " en superficie");

		// TOPE DE CEMENTO //
		var W_TTC = peso_nom * (prof_rev_md - prof_ttc_md);
		var fuerza_axial_TTC = W_TTC + fuerza_flotabilidad;
		console.log("La fuerza axial en el T.T.C. es " + fuerza_axial_TTC + " lbf.");

		var condicion_TTC;
		if(fuerza_axial_TTC > 0)
		{
			condicion_TTC = "Tensión";
		}
		else if (fuerza_axial_TTC < 0)
		{
			condicion_TTC = "Compresión";
		}
		console.log("El revestidor se encuentra en " + condicion_TTC + " en el T.T.C.");

		var W_colg = "N/A";
		var fuerza_axial_colg = "N/A";
		var condicion_colg = "N/A";
	}
	else {

		// SI ES LINER
		var W_sup = "N/A";
		var fuerza_axial_sup = "N/A";
		var condicion_sup = "N/A";

		var W_TTC = "N/A";
		var fuerza_axial_TTC = "N/A";
		var condicion_TTC = "N/A";

		var W_colg = peso_nom * (prof_rev_md - prof_colg_md);
		var fuerza_axial_colg = W_colg + fuerza_flotabilidad;
		console.log("La fuerza axial en el Colgador es " + fuerza_axial_colg + " lbf.");

		var condicion_colg;
		if(fuerza_axial_colg > 0)
		{
			condicion_colg = "Tensión";
		}
		else if (fuerza_axial_colg < 0)
		{
			condicion_colg = "Compresión";
		}
		console.log("El revestidor se encuentra en " + condicion_colg + " en el colgador");
	}


	// FONDO //
	var W_fondo = 0;
	var fuerza_axial_fondo = W_fondo + fuerza_flotabilidad;
	console.log("La fuerza axial en fondo es " + fuerza_axial_fondo + " lbf.");

	var condicion_fondo;
	if(fuerza_axial_fondo > 0)
	{
		condicion_fondo = "Tensión";
	}
	else if (fuerza_axial_fondo < 0)
	{
		condicion_fondo = "Compresión";
	}
	console.log("El revestidor se encuentra en " + condicion_fondo + " en fondo");

	// CÁLCULO DEL PUNTO NEUTRO //
	if(fuerza_axial_sup != "N/A") {
		var delta_y = -1*prof_rev_md - prof_sup;
		var delta_x = fuerza_axial_fondo - fuerza_axial_sup;
	}
	else {
		var delta_y = -1*prof_rev_md - -1*prof_colg_md;
		var delta_x = fuerza_axial_fondo - fuerza_axial_colg;
	}
	var pendiente = delta_y / delta_x;
	console.log("La pendiente de la recta de tensión real es " + pendiente);
	var punto_neutro = -1*prof_rev_md - (pendiente * fuerza_axial_fondo);
	console.log("El punto neutro se encuentra a " + -1*punto_neutro + " pies");

	document.getElementById("puntoNeutro").innerHTML = (-1*(punto_neutro)).toFixed(0);



	// CÁLCULO DE LA RESISTENCIA A LA FLUENCIA O TENSIÓN //
	var num_grado = Number(document.getElementById("num_grado").value);

	var resist_fluenc_min = num_grado * 1000;

	var resist_fluenc = resist_fluenc_min * (area_ext - area_int);

	document.getElementById("resisT").innerHTML = (resist_fluenc).toFixed(1);

	// CÓDIGO PARA LLENAR LA TABLA DE TENSIONES //
	if(fuerza_axial_sup != "N/A") {
		document.getElementById("profSuperfTablaT").innerHTML = prof_sup;
		document.getElementById("tensionRealSuperfTablaT").innerHTML = fuerza_axial_sup.toFixed(1);
		document.getElementById("tensionOverpullSuperfTablaT").innerHTML = (fuerza_axial_sup+overpull).toFixed(1);
		document.getElementById("tensionFactorSuperfTablaT").innerHTML = (fuerza_axial_sup*FDtensionProd).toFixed(1);
	}
	/* No coloco "else" porque la tabla tiene escrito "N/A" por defecto cuando es revestidor */
	
	if(W_TTC != "N/A")
	{
		document.getElementById("profTTCTablaT").innerHTML = prof_ttc_md;
		document.getElementById("tensionRealTTCTablaT").innerHTML = fuerza_axial_TTC.toFixed(1);
		document.getElementById("tensionOverpullTTCTablaT").innerHTML = (fuerza_axial_TTC+overpull).toFixed(1);
		document.getElementById("tensionFactorTTCTablaT").innerHTML = (fuerza_axial_TTC*FDtensionProd).toFixed(1);
	}
	else
	{
		document.getElementById("profTTCTablaT").innerHTML = prof_colg_md;
		document.getElementById("tensionRealTTCTablaT").innerHTML = fuerza_axial_colg.toFixed(1);
		document.getElementById("tensionOverpullTTCTablaT").innerHTML = (fuerza_axial_colg+overpull).toFixed(1);
		document.getElementById("tensionFactorTTCTablaT").innerHTML = (fuerza_axial_colg*FDtensionProd).toFixed(1);
	}
	
	document.getElementById("profFondoTablaT").innerHTML = prof_rev_md;
	document.getElementById("tensionRealFondoTablaT").innerHTML = fuerza_axial_fondo.toFixed(1);
	document.getElementById("tensionOverpullFondoTablaT").innerHTML = (fuerza_axial_fondo+overpull).toFixed(1);
	

	// **************** CORRECCIÓN BIAXIAL **************** //
	if(fuerza_axial_sup != "N/A") {
		var esfuerzo_sup = fuerza_axial_sup / (area_ext - area_int);
		console.log("El esfuerzo en superficie es " + esfuerzo_sup + " lpc");
	
		var condicion_esfuerzo_sup;
		if(esfuerzo_sup > 0)
		{
			condicion_esfuerzo_sup = "Tensión por esfuerzo";
			console.log("El revestidor se encuentra en " + condicion_esfuerzo_sup + " en superficie");
		}
		else if (esfuerzo_sup < 0)
		{
			condicion_esfuerzo_sup = "Compresión por esfuerzo";
			console.log("El revestidor se encuentra en " + condicion_esfuerzo_sup + " en superficie");
		}
	}
	else {
		var esfuerzo_sup = fuerza_axial_colg / (area_ext - area_int);
		console.log("El esfuerzo en el colgador es " + esfuerzo_sup + " lpc");
	
		var condicion_esfuerzo_sup;
		if(esfuerzo_sup > 0)
		{
			condicion_esfuerzo_sup = "Tensión por esfuerzo";
			console.log("El revestidor se encuentra en " + condicion_esfuerzo_sup + " en el colgador");
		}
		else if (esfuerzo_sup < 0)
		{
			condicion_esfuerzo_sup = "Compresión por esfuerzo";
			console.log("El revestidor se encuentra en " + condicion_esfuerzo_sup + " en el colgador");
		}
	}

	var esfuerzo_fondo = fuerza_axial_fondo / (area_ext - area_int);
	console.log("El esfuerzo en fondo es " + esfuerzo_fondo + " lpc");

	var condicion_esfuerzo_fondo;
	if(esfuerzo_fondo > 0)
	{
		condicion_esfuerzo_fondo = "Tensión por esfuerzo";
		console.log("El revestidor se encuentra en " + condicion_esfuerzo_fondo + " en fondo");
	}
	else if (esfuerzo_fondo < 0)
	{
		condicion_esfuerzo_fondo = "Compresión por esfuerzo";
		console.log("El revestidor se encuentra en " + condicion_esfuerzo_fondo + " en fondo");
	}


	// CÓDIGO PARA LLENAR LA TABLA DE TENSIONES REALES Y ESFUERZOS //
	if(fuerza_axial_sup != "N/A") {
		document.getElementById("profSuperfTablaB").innerHTML = prof_sup;
		document.getElementById("tensionRealSuperfTablaB").innerHTML = fuerza_axial_sup.toFixed(1);
		document.getElementById("esfuerzoRealSuperfTablaB").innerHTML = esfuerzo_sup.toFixed(1);
		document.getElementById("condicionSuperfTablaB").innerHTML = condicion_sup;
	}
	else {
		document.getElementById("profSuperfTablaB").innerHTML = prof_colg_md;
		document.getElementById("tensionRealSuperfTablaB").innerHTML = fuerza_axial_colg.toFixed(1);
		document.getElementById("esfuerzoRealSuperfTablaB").innerHTML = esfuerzo_sup.toFixed(1);
		document.getElementById("condicionSuperfTablaB").innerHTML = condicion_colg;
	}

	document.getElementById("profFondoTablaB").innerHTML = prof_rev_md;
	document.getElementById("tensionRealFondoTablaB").innerHTML = fuerza_axial_fondo.toFixed(1);
	document.getElementById("esfuerzoRealFondoTablaB").innerHTML = esfuerzo_fondo.toFixed(1);
	document.getElementById("condicionFondoTablaB").innerHTML = condicion_fondo;
	

	// CÁLCULO RELACIONES Y LLENADO DE TABLA relaciones_y //
	var rel_esfuerzo_fluen_sup = Math.abs((esfuerzo_sup / resist_fluenc_min) * 100);
	document.getElementById("rel_esf_sup").innerHTML = rel_esfuerzo_fluen_sup;
	console.log("Valor de X para elipse en superficie: " + rel_esfuerzo_fluen_sup);
	
	var rel_esfuerzo_fluen_fondo = Math.abs((esfuerzo_fondo / resist_fluenc_min) * 100);
	console.log("Valor de X para elipse en fondo: " + rel_esfuerzo_fluen_fondo);
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

	var presion_colapso = Number(document.getElementById("RC_rev").value);
	var presion_estallido = Number(document.getElementById("RE_rev").value);

	var correccion_estallido_sup;
	var correccion_colapso_sup;
	var correccion_estallido_fondo;
	var correccion_colapso_fondo;
	
	if(esfuerzo_sup > 0) // Tensión //
	{
		correccion_colapso_sup = Math.abs(y2) * presion_colapso/100;
	}
	else if(esfuerzo_sup < 0) // Compresión //
	{
		correccion_estallido_sup = Math.abs(y2) * presion_estallido/100;
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
		var correccion_estallido_sup = Math.abs(y2_iz) * presion_estallido/100;
	}
	else if(esfuerzo_sup < 0) // Compresión //
	{
		var correccion_colapso_sup = Math.abs(y2_iz) * presion_colapso/100;
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

	if(esfuerzo_fondo > 0) // Tensión //
	{
		correccion_colapso_fondo = Math.abs(y2_fondo) * presion_colapso/100;
	}
	else if(esfuerzo_fondo < 0) // Compresión //
	{
		correccion_estallido_fondo = Math.abs(y2_fondo) * presion_estallido/100;
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
		correccion_estallido_fondo = Math.abs(y2_iz_fondo) * presion_estallido/100;
	}
	else if(esfuerzo_fondo < 0) // Compresión //
	{
		correccion_colapso_fondo = Math.abs(y2_iz_fondo) * presion_colapso/100;
	}

	//  CÓDIGO PARA LLENAR LA TABLA DE RELACIÓN Y COORDENADAS DE Y //
	document.getElementById("rel_esf_sup2").innerHTML = rel_esfuerzo_fluen_sup.toFixed(2);
	document.getElementById("rel_esf_fondo2").innerHTML = rel_esfuerzo_fluen_fondo.toFixed(2);
	document.getElementById("y_der_sup2").innerHTML = -1*y2.toFixed(2);
	document.getElementById("y_izq_sup2").innerHTML = -1*y2_iz.toFixed(2);
	document.getElementById("y_der_fondo2").innerHTML = -1*y2_fondo.toFixed(2);
	document.getElementById("y_izq_fondo2").innerHTML = -1*y2_iz_fondo.toFixed(2);

	// CÓDIGO PARA LLENAR LA TABLA DE CORRECCIONES EN SECCIÓN BIAXIAL //

	if(condicion_sup != "N/A") {
		document.getElementById("profSuperfTablaB2").innerHTML = prof_sup;
		document.getElementById("condicionSuperfTablaB2").innerHTML = condicion_sup;
	}
	else {
		document.getElementById("profSuperfTablaB2").innerHTML = prof_colg_md;
		document.getElementById("condicionSuperfTablaB2").innerHTML = condicion_colg;
	}
	document.getElementById("resisEstCorregSuperfTablaB2").innerHTML = correccion_estallido_sup.toFixed(1);
	document.getElementById("resisColCorregSuperfTablaB2").innerHTML = correccion_colapso_sup.toFixed(1);

	document.getElementById("profFondoTablaB2").innerHTML = prof_rev_md;
	document.getElementById("condicionFondoTablaB2").innerHTML = condicion_fondo;
	document.getElementById("resisEstCorregFondoTablaB2").innerHTML = correccion_estallido_fondo.toFixed(1);
	document.getElementById("resisColCorregFondoTablaB2").innerHTML = correccion_colapso_fondo.toFixed(1);

	// CÓDIGO PARA LLENAR TABLA CORREGIDA EN SECCIÓN DE ESTALLIDO  //
	if(condicion_sup != "N/A") {
		document.getElementById("profSuperfTablaE2").innerHTML = prof_sup;
	}
	else {
		document.getElementById("profSuperfTablaE2").innerHTML = prof_colg_tvd;
	}
	document.getElementById("profFondoTablaE2").innerHTML = prof_rev_tvd;
	document.getElementById("presionCorregSuperfTablaE").innerHTML = correccion_estallido_sup.toFixed(1);
	document.getElementById("presionCorregFondoTablaE").innerHTML = correccion_estallido_fondo.toFixed(1);

	// CÓDIGO PARA LLENAR TABLA CORREGIDA EN SECCIÓN DE COLAPSO //
	if(condicion_sup != "N/A") {
		document.getElementById("profSuperfTablaC2").innerHTML = prof_sup;
	}
	else {
		document.getElementById("profSuperfTablaC2").innerHTML = prof_colg_tvd;
	}
	document.getElementById("profFondoTablaC2").innerHTML = prof_rev_tvd;
	document.getElementById("presionCorregSuperfTablaC").innerHTML = correccion_colapso_sup.toFixed(1);
	document.getElementById("presionCorregFondoTablaC").innerHTML = correccion_colapso_fondo.toFixed(1);
}

function graficaTensionyBiaxial()
{
	// LLAMADO PARA LIMPIAR TODOS LOS CANVAS Y RENDERIZAR EJES, LEYENDAS, LÍNEAS DE DISEÑO Y LÍNEAS DE REVESTIDORES.
	canvasInicialT();

	// CÓDIGO PARA LIMPIAR AVISOS DE FALLA POR FACTOR DE DISEÑO ANTERIORES
	document.getElementById("aviso_falla_tensionCorregidoS").innerHTML = "";
	document.getElementById("aviso_falla_tensionCorregidoF").innerHTML = "";

	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_tension = Number(document.getElementById("max_ten_graf_ten").value);
	var min_tension = Number(document.getElementById("min_ten_graf_ten").value);
	var max_profT = Number(document.getElementById("max_prof_graf_ten").value);
	var min_profT = Number(document.getElementById("min_prof_graf_ten").value);

	var delta_prof = max_profT - min_profT;

	var factorXT = anchoT / (max_tension-min_tension);
	/* Las coordenadas en X se calcularán con la ecuación:
	coord_X = anchoT-((max_tension - "valor de tensión")*factorXT)*/
	var factorYT = altoT / delta_prof;
		
	// EJES DE COORDENADAS (ÁREA DE DIBUJO CUADRADA Y ORIGEN VARIABLE) //
	dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT, margenT, (anchoT-((max_tension- 0)*factorXT))+margenT, altoT+margenT+5); // LÍNEA VERTICAL IZQUIERDA //
	dibujarLineaHoja("black", margenT, margenT, anchoT+margenT+5, margenT); // LÍNEA HORIZONTAL SUPERIOR //

	var numero_lineas = 10;
	var delta_valores_prof = delta_prof / numero_lineas;

	// LÍNEAS TRANSPARENTES DENTRO DEL GRÁFICO
	// EJE Y
	for(a = delta_valores_prof/*50*/; a <= delta_prof; a = a+delta_valores_prof)
	{
		dibujarLineaTransT(margenT, (a*factorYT) + margenT, anchoT + margenT, (a*factorYT) + margenT);
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

	// EJE Y - GUIONES
	if(delta_prof <= 2000)
	{
		for(a = delta_valores_prof/*50*/; a <= delta_prof; a = a+delta_valores_prof)
		{
			dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT-4, (a*factorYT)+margenT, (anchoT-((max_tension- 0)*factorXT))+margenT+4, (a*factorYT)+margenT); // Guiones largos para las líneas de división
				
			if(a < delta_prof)
			{
				dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT-2, (a*factorYT)+margenT, (anchoT-((max_tension- 0)*factorXT))+margenT+2, (a*factorYT)+margenT); // Guiones cortos para los demás valores
			}
		}
	}
	else
	{
		for(a = delta_valores_prof/*500*/; a <= delta_prof; a = a+delta_valores_prof)
		{
			if(a % 1000 == 0)
			{
				dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT-4, (a*factorYT)+margenT, (anchoT-((max_tension- 0)*factorXT))+margenT+4, (a*factorYT)+margenT); // Guiones largos para múltiplos de 1000
				
			}
			else
			{
				dibujarLineaHoja("black", (anchoT-((max_tension- 0)*factorXT))+margenT-2, (a*factorYT)+margenT, (anchoT-((max_tension- 0)*factorXT))+margenT+2, (a*factorYT)+margenT); // Guiones cortos para los demás valores
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

	var b = delta_valores_prof;
	for(a = min_profT+delta_valores_prof; a <= max_profT; a = a+delta_valores_prof)
	{
		hoja.fillText(a.toFixed(0), (anchoT-((max_tension- 0)*factorXT))+margenT-6, (b*factorYT+3)+margenT);
		b = b +delta_valores_prof;
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
	// A LA IZQUIERDA DEL CERO (Solo funciona para valores de min_tension menores a -100)
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
	var prof_colg_tvd = Number(document.getElementById("prof_colg_tvd").value);
	var parrafo_colgador = document.getElementById("sarta_colgada");

	// ACCEDER A VALORES DE TABLA PARA GRAFICAR LAS LÍNEAS EN EL CANVAS //
	var profSuperfTablaT = document.getElementById("profSuperfTablaT");
	var prof_sup = Number(profSuperfTablaT.innerHTML);
	var tensionRealSuperfTablaT = document.getElementById("tensionRealSuperfTablaT");
	var fuerza_axial_sup = Number(tensionRealSuperfTablaT.innerHTML);
	var tension_factor_sup = Number(document.getElementById("tensionFactorSuperfTablaT").innerHTML);

	var prof_ttc = Number(document.getElementById("profTTCTablaT").innerHTML);
	var tensionRealTTCTablaT = document.getElementById("tensionRealTTCTablaT");
	var fuerza_axial_TTC = Number(tensionRealTTCTablaT.innerHTML);
	var tension_factor_ttc = Number(document.getElementById("tensionFactorTTCTablaT").innerHTML);

	var profFondoTablaT = document.getElementById("profFondoTablaT");
	var prof_rev_md = Number(profFondoTablaT.innerHTML);
	var tensionRealFondoTablaT = document.getElementById("tensionRealFondoTablaT");
	var fuerza_axial_fondo = Number(tensionRealFondoTablaT.innerHTML);

	// PERFIL DE TENSIÓN REAL //
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none")
	{
		dibujarLineaHoja("black", (anchoT-((max_tension- fuerza_axial_sup/1000)*factorXT)) + margenT, (prof_sup* factorYT) + margenT, (anchoT-((max_tension- fuerza_axial_TTC/1000)*factorXT)) + margenT, (prof_ttc* factorYT) + margenT);
		dibujarLineaHoja("black", (anchoT-((max_tension- fuerza_axial_TTC/1000)*factorXT)) + margenT, (prof_ttc* factorYT) + margenT, (anchoT-((max_tension- fuerza_axial_fondo/1000)*factorXT)) + margenT, (prof_rev_md* factorYT) + margenT);
	}
	else
	{
		dibujarLineaHoja("black", (anchoT-((max_tension- fuerza_axial_TTC/1000)*factorXT)) + margenT, ((prof_ttc - min_profT)* factorYT) + margenT, (anchoT-((max_tension- fuerza_axial_fondo/1000)*factorXT)) + margenT, ((prof_rev_md - min_profT)* factorYT) + margenT);
	}

	// PERFIL DE TENSIÓN DE DISEÑO POR OVERPULL //
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none")
	{
		dibujarLineaHoja("red", (anchoT-((max_tension- (fuerza_axial_sup/1000 + overpull/1000))*factorXT)) + margenT, (prof_sup* factorYT) + margenT, (anchoT-((max_tension- (fuerza_axial_TTC/1000 + overpull/1000))*factorXT)) + margenT, (prof_ttc* factorYT) + margenT);
		dibujarLineaHoja("red", (anchoT-((max_tension- (fuerza_axial_TTC/1000 + overpull/1000))*factorXT)) + margenT, (prof_ttc* factorYT) + margenT, (anchoT-((max_tension- (fuerza_axial_fondo/1000 + overpull/1000))*factorXT)) + margenT, (prof_rev_md* factorYT) + margenT);
	}
	else
	{
		dibujarLineaHoja("red", (anchoT-((max_tension- (fuerza_axial_TTC/1000 + overpull/1000))*factorXT)) + margenT, ((prof_ttc - min_profT)* factorYT) + margenT, (anchoT-((max_tension- (fuerza_axial_fondo/1000 + overpull/1000))*factorXT)) + margenT, ((prof_rev_md - min_profT)* factorYT) + margenT);
	}

	// EL PERFIL DE TENSIÓN DE DISEÑO POR FACTOR //
	var punto_neutro = Number(document.getElementById("puntoNeutro").innerHTML);

	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none")
	{
		dibujarLineaHoja("purple", (anchoT-((max_tension- (tension_factor_sup/1000))*factorXT)) + margenT, (prof_sup* factorYT) + margenT, (anchoT-((max_tension- (tension_factor_ttc/1000))*factorXT)) + margenT, (prof_ttc* factorYT) + margenT);
		dibujarLineaHoja("purple", (anchoT-((max_tension- (tension_factor_ttc/1000))*factorXT)) + margenT, (prof_ttc* factorYT) + margenT, (anchoT-((max_tension- (0/1000))*factorXT)) + margenT, (punto_neutro* factorYT) + margenT);
	}
	else
	{
		dibujarLineaHoja("purple", (anchoT-((max_tension- (tension_factor_ttc/1000))*factorXT)) + margenT, ((prof_ttc - min_profT)* factorYT) + margenT, (anchoT-((max_tension- (0/1000))*factorXT)) + margenT, ((punto_neutro - min_profT)* factorYT) + margenT);
	}

	// GRAFICAR LÍNEA DE REVESTIDOR SELECCIONADO //
	var resistencia_tesion = Number(document.getElementById("RT_rev").value);

	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		dibujarLineaSeleccionHoja("green", (anchoT-((max_tension- resistencia_tesion/1000)*factorXT))+margenT, (prof_sup*factorYT)+margenT, (anchoT-((max_tension- resistencia_tesion/1000)*factorXT))+margenT, (prof_rev_md*factorYT)+margenT);
	}
	else {
		dibujarLineaSeleccionHoja("green", (anchoT-((max_tension- resistencia_tesion/1000)*factorXT))+margenT, ((prof_ttc - min_profT)*factorYT)+margenT, (anchoT-((max_tension- resistencia_tesion/1000)*factorXT))+margenT, ((prof_rev_md - min_profT)*factorYT)+margenT);
	}

	// AVISO DE NO APTO POR TENSIÓN
	// SUPERFICIE
	var array_sup = [fuerza_axial_sup, fuerza_axial_sup+100000, tension_factor_sup];
	var array_ttc = [fuerza_axial_TTC, fuerza_axial_TTC+100000, tension_factor_ttc];
	console.log(array_sup, array_ttc, array_sup.length, array_ttc.length);

	// Función para ordenar el array de menor a mayor y luego extraer el último elemento del array, que es el mayor de todos
	array_sup.sort(function(a, b) {return a-b});
	var y = array_sup.pop();

	array_ttc.sort(function(a, b) {return a-b});
	var z = array_ttc.pop();

	// FONDO
	var array_fondo = [fuerza_axial_fondo, fuerza_axial_fondo+100000];
	console.log(array_fondo);

	array_fondo.sort(function(a, b) {return a-b});
	var w = array_fondo.pop();
	
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		if(profTTCTablaT != "N/A") {
			if(resistencia_tesion > y && resistencia_tesion > z && resistencia_tesion > w) {
				document.getElementById("aviso_falla_tension").innerHTML = "";
			}
			else {
				document.getElementById("aviso_falla_tension").style.display = "block";
				document.getElementById("aviso_falla_tension").innerHTML = "AVISO: El revestidor falla por tensión. Elegir nuevo revestidor y reinciar el estudio desde el primer paso (Estallido).";
			}
		}
		else {
			if(resistencia_tesion > y && resistencia_tesion > w) {
				document.getElementById("aviso_falla_tension").innerHTML = "";
			}
			else {
				document.getElementById("aviso_falla_tension").style.display = "block";
				document.getElementById("aviso_falla_tension").innerHTML = "AVISO: El revestidor falla por tensión. Elegir nuevo revestidor y reinciar el estudio desde el primer paso (Estallido).";
			}
		}
	}
	else {
		if(resistencia_tesion > z && resistencia_tesion > w) {
			document.getElementById("aviso_falla_tension").innerHTML = "";
		}
		else {
			document.getElementById("aviso_falla_tension").style.display = "block";
			document.getElementById("aviso_falla_tension").innerHTML = "AVISO: El revestidor falla por tensión. Elegir nuevo revestidor y reinciar el estudio desde el primer paso (Estallido).";
		}
	}
}

var graficas_biaxial = document.getElementById("graficas_biaxial");
graficas_biaxial.addEventListener('click', graficaBiaxial);

function graficaBiaxial() {

	disenoRevestidorEstallido();
	disenoRevestidorColapso();
	canvasInicialB();

	var profSuperfTablaT = document.getElementById("profSuperfTablaT");
	var prof_sup = Number(profSuperfTablaT.innerHTML);
	var prof_colg_tvd = Number(document.getElementById("prof_colg_tvd").value);
	var parrafo_colgador = document.getElementById("sarta_colgada");

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

	// CORRECCIÓN DE LA GRÁFICA DE ESTALLIDO //
	var resisEstCorregSuperfTablaB2 = document.getElementById("resisEstCorregSuperfTablaB2");
	var correccion_estallido_sup = resisEstCorregSuperfTablaB2.innerHTML;

	var resisEstCorregFondoTablaB2 = document.getElementById("resisEstCorregFondoTablaB2");
	var correccion_estallido_fondo = resisEstCorregFondoTablaB2.innerHTML;

	var max_presionE = Number(document.getElementById("max_pres_graf").value);
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		var min_profE = 0;
	}
	else {
		var min_profE = Number(document.getElementById("min_prof_graf").value);
	}
	var max_profE = Number(document.getElementById("max_prof_graf").value);
	var delta_profE = max_profE - min_profE;
	var factorX = ancho / max_presionE;
	var factorY = alto / delta_profE;
	
	var prof_asent_tvd = Number(document.getElementById("prof_rev_tvd").value);
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		dibujarLineaSeleccionPapel("red", (correccion_estallido_sup*factorX)+margen, ((prof_sup - min_profE)*factorY)+margen, (correccion_estallido_fondo*factorX)+margen, ((prof_asent_tvd - min_profE)*factorY)+margen);
	}
	else {
		dibujarLineaSeleccionPapel("red", (correccion_estallido_sup*factorX)+margen, ((prof_colg_tvd - min_profE) *factorY)+margen, (correccion_estallido_fondo*factorX)+margen, ((prof_asent_tvd - min_profE)*factorY)+margen);
	}
	
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

	
	// CORRECCIÓN DE LA GRÁFICA DE COLAPSO //
	var resisColCorregSuperfTablaB2 = document.getElementById("resisColCorregSuperfTablaB2");
	var correccion_colapso_sup = resisColCorregSuperfTablaB2.innerHTML;

	var resisColCorregFondoTablaB2 = document.getElementById("resisColCorregFondoTablaB2");
	var correccion_colapso_fondo = resisColCorregFondoTablaB2.innerHTML;

	var max_presionC = document.getElementById("max_pres_grafC").value;
	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		var min_profC = 0;
	}
	else {
		var min_profC = Number(document.getElementById("min_prof_grafC").value);
	}
	var max_profC = document.getElementById("max_prof_grafC").value;
	var delta_profC = max_profC - min_profC;
	var factorXC = anchoC / max_presionC;
	var factorYC = altoC / delta_profC;
	
	var prof_ttc_tvd = document.getElementById("profTTCTablaC").innerHTML;

	if(prof_colg_tvd == 0 || parrafo_colgador.style.display == "none") {
		dibujarLineaSeleccionLienzo("red", (correccion_colapso_sup*factorXC)+margenC, ((prof_sup - min_profC)*factorYC)+margenC, (correccion_colapso_fondo*factorXC)+margenC, ((prof_asent_tvd - min_profC)*factorYC)+margenC);
	}
	else {
		dibujarLineaSeleccionLienzo("red", (correccion_colapso_sup*factorXC)+margenC, ((prof_ttc_tvd - min_profC) *factorYC)+margenC, (correccion_colapso_fondo*factorXC)+margenC, ((prof_asent_tvd - min_profC)*factorYC)+margenC);
	}

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

var borrar_biaxial = document.getElementById("borrar_biaxial");
borrar_biaxial.addEventListener("click", borrarBiaxial);

function borrarBiaxial() {
	disenoRevestidorEstallido();
	disenoRevestidorColapso();
	borrarElipse();
}



// ***************** FACTORES DE DISEÑO ******************** //

// MOSTRAR Y OCULTAR A PLACER LA SECCIÓN DE FACTORES DE DISEÑO //
var mostrar_ocultar_SFD = document.getElementById("mostrar_ocultar_SFD");
mostrar_ocultar_SFD.addEventListener("click", mostrarOcultarSFD);

var div1FD = document.getElementById("div1FD");
div1FD.style.display = "none";

function mostrarOcultarSFD()
{
	if(div1FD.style.display == "none")
	{
		div1FD.style.display = "block";
	}
	else if(div1FD.style.display == "block")
	{
		div1FD.style.display = "none";
	}
}

var boton_FD = document.getElementById("botonFD"); // ACCESO AL BOTÓN DE CÁLCULO DE FACTORES DE DISEÑO //
boton_FD.addEventListener("click", calculoFactores); // OTORGO AL BOTÓN EL EVENTO DE EFECTUAR LA FUNCION calculoFactores AL DARLE CLICK //

function calculoFactores()
{
	var prof_colg_tvd = document.getElementById("prof_colg_tvd");
	var prof_asent_tvd = document.getElementById("prof_rev_tvd");


	var ProfCS = document.getElementById("profSuperfTablaE2");
	var prof_sup = ProfCS.innerHTML;
	document.getElementById("profSuperfTablaF").innerHTML = prof_sup;

	var ProfCF = document.getElementById("profFondoTablaE2");
	var prof_asent_tvd = ProfCF.innerHTML;
	document.getElementById("profFondoTablaF").innerHTML = prof_asent_tvd;

	// ESTALLIDO //

	// SUPERFICIE //
	var PDESup = document.getElementById("presionSuperfTablaE").innerHTML;
	var PDEColg = document.getElementById("presionColgTablaE").innerHTML;

	if(PDESup != "N/A") {
		var PDE_S = PDESup;
	}
	else {
		var PDE_S = PDEColg;
	}

	var COREstSup = document.getElementById("resisEstCorregSuperfTablaB2");
	var correccion_estallido_sup = COREstSup.innerHTML;

	var FDE_S = correccion_estallido_sup / PDE_S;

	document.getElementById("FDESuperfTablaF").innerHTML = FDE_S.toFixed(2);

	if(FDE_S < FDestallidoProd) // DENOTAR QUE EL REVESTIDOR FALLA EN SUPERFICIE //
	{
		document.getElementById("aviso_falla_estallidoCorregidoS").style.display = "block";
		document.getElementById("aviso_falla_estallidoCorregidoS").innerHTML = "AVISO: El revestidor falla por estallido en superficie luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBSuperfE").style.display = "block";
		document.getElementById("OBSuperfE").innerHTML = "- El revestidor falla por estallido en superficie luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDESuperfTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_estallidoCorregidoS").innerHTML = "";
		document.getElementById("OBSuperfE").innerHTML = "";
		document.getElementById("FDESuperfTablaF").style.color = "black";
	}


	// FONDO //
	var PDEFondo = document.getElementById("presionFondoTablaE");
	var PDE_F = PDEFondo.innerHTML;

	var COREstFondo = document.getElementById("resisEstCorregFondoTablaB2");
	var correccion_estallido_fondo = COREstFondo.innerHTML;

	var FDE_F = correccion_estallido_fondo / PDE_F;

	document.getElementById("FDEFondoTablaF").innerHTML = FDE_F.toFixed(2);

	if(FDE_F < FDestallidoProd) // DENOTAR QUE EL REVESTIDOR FALLA EN FONDO //
	{
		document.getElementById("aviso_falla_estallidoCorregidoF").style.display = "block";
		document.getElementById("aviso_falla_estallidoCorregidoF").innerHTML = "AVISO: El revestidor falla por estallido en fondo luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBFondoE").style.display = "block";
		document.getElementById("OBFondoE").innerHTML = "- El revestidor falla por estallido en fondo luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDEFondoTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_estallidoCorregidoF").innerHTML = "";
		document.getElementById("OBFondoE").innerHTML = "";
		document.getElementById("FDEFondoTablaF").style.color = "black";
	}


	// COLAPSO //

	// SUPERFICIE //
	var PDCSup = document.getElementById("presionSuperfTablaC").innerHTML;
	var PDCColg = document.getElementById("presionTTCTablaC").innerHTML;

	if(PDCSup != "N/A") {
		var PDC_S = PDCSup;
	}
	else {
		var PDC_S = PDCColg;
	}

	var CORColSuperf = document.getElementById("resisColCorregSuperfTablaB2");
	var correccion_colapso_sup = CORColSuperf.innerHTML;

	var FDC_S = correccion_colapso_sup / PDC_S;

	//Condicional para que cuando el denominador sea cero, no aparezca "Infinity" sino "-" (Siempre será Infinity en superficie)//
	if(FDC_S == "Infinity")
	{
		document.getElementById("FDCSuperfTablaF").innerHTML = "-";
	}
	else
	{
		document.getElementById("FDCSuperfTablaF").innerHTML = FDC_S.toFixed(2);
	}

	if(FDC_S < FDcolapsoProd) // DENOTAR QUE EL REVESTIDOR FALLA EN SUPERFICIE //
	{
		document.getElementById("aviso_falla_colapsoCorregidoS").style.display = "block";
		document.getElementById("aviso_falla_colapsoCorregidoS").innerHTML = "AVISO: El revestidor falla por colapso en superficie luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBSuperfC").style.display = "block";
		document.getElementById("OBSuperfC").innerHTML = "- El revestidor falla por colapso en superficie luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDCSuperfTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_colapsoCorregidoS").innerHTML = "";
		document.getElementById("OBSuperfC").innerHTML = "";
		document.getElementById("FDCSuperfTablaF").style.color = "black";
	}

	// FONDO //
	var PDCFondo = document.getElementById("presionFondoTablaC");
	var PDC_F = PDCFondo.innerHTML;

	var CORColFondo = document.getElementById("resisColCorregFondoTablaB2");
	var correccion_colapso_fondo = CORColFondo.innerHTML;

	var FDC_F = correccion_colapso_fondo / PDC_F;

	document.getElementById("FDCFondoTablaF").innerHTML = FDC_F.toFixed(2);	

	if(FDC_F < FDcolapsoProd) // DENOTAR QUE EL REVESTIDOR FALLA EN FONDO //
	{
		document.getElementById("aviso_falla_colapsoCorregidoF").style.display = "block";
		document.getElementById("aviso_falla_colapsoCorregidoF").innerHTML = "AVISO: El revestidor falla por colapso en fondo luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBFondoC").style.display = "block";
		document.getElementById("OBFondoC").innerHTML = "- El revestidor falla por colapso en fondo luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDCFondoTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_colapsoCorregidoF").innerHTML = "";
		document.getElementById("OBFondoC").innerHTML = "";
		document.getElementById("FDCFondoTablaF").style.color = "black";
	}


	// TENSIÓN //
	var resistencia_tesion = Number(document.getElementById("RT_rev").value);

	// SUPERFICIE //
	var PDTSup = document.getElementById("tensionRealSuperfTablaT").innerHTML;

	var PDTRSup = Number(document.getElementById("tensionRealSuperfTablaT").innerHTML);
	var PDTOSup = Number(document.getElementById("tensionOverpullSuperfTablaT").innerHTML);
	var PDTFSup = Number(document.getElementById("tensionFactorSuperfTablaT").innerHTML);

	var PDTRColg = Number(document.getElementById("tensionRealTTCTablaT").innerHTML);
	var PDTOColg = Number(document.getElementById("tensionOverpullTTCTablaT").innerHTML);
	var PDTFColg = Number(document.getElementById("tensionFactorTTCTablaT").innerHTML);

	var array_sup = [PDTRSup, PDTOSup, PDTFSup];
	var array_colg = [PDTRColg, PDTOColg, PDTFColg];
	console.log(array_sup, array_colg, array_sup.length, array_colg.length);

	// Función para ordenar el array de menor a mayor y luego extraer el último elemento del array, que es el mayor de todos
	if(PDTSup != "N/A") {
		array_sup.sort(function(a, b) {return a-b});
		var y = array_sup.pop();
	}
	else {
		array_colg.sort(function(a, b) {return a-b});
		var y = array_colg.pop();
	}

	console.log("La mayor tensión de diseño en superficie es " + y + " lbf.");
	var Fax_Os = y;

	var FDT_S = resistencia_tesion / Fax_Os;

	if(FDT_S > 0 || FDT_S != "Infinity") {
		document.getElementById("FDTSuperfTablaF").innerHTML = FDT_S.toFixed(2);
	}
	else {
		document.getElementById("FDTSuperfTablaF").innerHTML = "-";
	}
	

	if(FDT_S < FDtensionProd) // DENOTAR QUE EL REVESTIDOR FALLA EN SUPERFICIE //
	{
		document.getElementById("aviso_falla_tensionCorregidoS").style.display = "block";
		document.getElementById("aviso_falla_tensionCorregidoS").innerHTML = "AVISO: El revestidor falla por tensión en superficie. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBSuperfT").style.display = "block";
		document.getElementById("OBSuperfT").innerHTML = "- El revestidor falla por tensión en superficie. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDTSuperfTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_tensionCorregidoS").innerHTML = "";
		document.getElementById("OBSuperfT").innerHTML = "";
		document.getElementById("FDTSuperfTablaF").style.color = "black";
	}



	// FONDO //
	var PDTRFondo = Number(document.getElementById("tensionRealFondoTablaT").innerHTML);
	var PDTOFondo = Number(document.getElementById("tensionOverpullFondoTablaT").innerHTML);
	var PDTFFondo = Number(document.getElementById("tensionFactorFondoTablaT").innerHTML);

	var array_fondo = [PDTRFondo, PDTOFondo, PDTFFondo];
	console.log(array_fondo);

	array_fondo.sort(function(a, b) {return a-b});
	var z = array_fondo.pop();
	console.log("La mayor tensión de diseño en fondo es " + z + " lbf.");

	var Fax_Of = z;
	var FDT_F = resistencia_tesion / Fax_Of;

	if(FDT_F > 0 || FDT_F != "Infinity") {
		document.getElementById("FDTFondoTablaF").innerHTML = FDT_F.toFixed(2);
	}
	else {
		document.getElementById("FDTFondoTablaF").innerHTML = "-";
	}

	if(FDT_F < FDtensionProd) // DENOTAR QUE EL REVESTIDOR FALLA EN FONDO //
	{
		document.getElementById("aviso_falla_tensionCorregidoF").style.display = "block";
		document.getElementById("aviso_falla_tensionCorregidoF").innerHTML = "AVISO: El revestidor falla por tension en fondo. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBFondoT").style.display = "block";
		document.getElementById("OBFondoT").innerHTML = "- El revestidor falla por tension en fondo. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDTFondoTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_tensionCorregidoF").innerHTML = "";
		document.getElementById("OBFondoT").innerHTML = "";
		document.getElementById("FDTFondoTablaF").style.color = "black";
	}
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