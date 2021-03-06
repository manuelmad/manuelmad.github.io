// FUNCIÓN QUE ABRE UNA VENTANA SECUNDARIA PARA MOSTRAR LAS INSTRUCCIONES DE USO DEL PROGRAMA
function ventanaSecundaria (URL)
{ 
   window.open(URL,"INSTRUCCIONES DE USO DE LA APLICACIÓN","width=800,height=400,scrollbars=YES");
}

// FUNCIÓN QUE ABRE UNA VENTANA SECUNDARIA PARA MOSTRAR LA HERRAMIENTA DE INTERPOLACIÓN Y EXTRAPOLACIÓN
function ventanaSecundaria2 (URL)
{ 
   window.open(URL,"HERRAMIENTA DE INTERPOLACIÓN Y EXTRAPOLACIÓN","width=500,height=300,scrollbars=YES");
}


// ACCEDER AL BOTÓN "botoncito" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN trazarCurva AL DARLE CLICK //
var boton = document.getElementById("botoncito");
boton.addEventListener("click", trazarCurva);
boton.addEventListener("mouseup", imageSinCurvas);
boton.addEventListener("click", crearArray);

// ACCEDER AL CANVAS DE HTML Y DARLE CONTEXTO //
var d = document.getElementById("Prof_vs_Dens");
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

var ancho_canvas = d.width;
var alto_canvas = d.height;

// RECUADRO PARA GRAFICAR
var ancho = 0.79* ancho_canvas;
var centro = ancho / 2;
var alto = 0.79* alto_canvas;

// MÁRGENES DEL GRÁFICO (EL MISMO PARA LOS 4 LADOS) //
var margen = (ancho_canvas-ancho)/2;
var medio_margen = margen / 2;

// CABECERA DE TABLA RESPONSIVA
if(tamano_ventana < 600) {
	var cabecera_1 = document.getElementById("cabecera1");
	cabecera_1.innerHTML = "Prof." + "<br>" + "(pies)";
	var cabecera_2 = document.getElementById("cabecera2");
	cabecera_2.innerHTML = "P.P." + "<br>" + "(lpg.)";
	var cabecera_3 = document.getElementById("cabecera3");
	cabecera_3.innerHTML = "D.L." + "<br>" + "(lpg.)";
	var cabecera_4 = document.getElementById("cabecera4");
	cabecera_4.innerHTML = "Prof." + "<br>" + "(pies)";
	var cabecera_5 = document.getElementById("cabecera5");
	cabecera_5.innerHTML = "D.A." + "<br>" + "(lpg.)";
	var cabecera_6 = document.getElementById("cabecera6");
	cabecera_6.innerHTML = "P.F." + "<br>" + "(lpg.)";
}


// Accedo al botón de agregar fila y le asigno el evento de activar la función
var agregar_fila = document.getElementById("agregar_fila");
agregar_fila.addEventListener("click", agregarFila);

// FUNCIÓN PARA AGREGAR FILAS A LA TABLA CON LOS ID'S CORRESPONDIENTES
function agregarFila()
{
	//Creo una nueva fila
	var nueva_fila = document.createElement("tr");

	// Creo las columnas de esa fila (ignoro la columna del centro)
	var nueva_columna = document.createElement("td");
	var nueva_columna2 = document.createElement("td");
	var nueva_columna3 = document.createElement("td");
	var nueva_columna4 = document.createElement("td");
	var nueva_columna5 = document.createElement("td");
	var nueva_columna6 = document.createElement("td");
	var nueva_columna7 = document.createElement("td");

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila.appendChild(nueva_columna);
	nueva_fila.appendChild(nueva_columna2);
	nueva_fila.appendChild(nueva_columna3);
	nueva_fila.appendChild(nueva_columna4);
	nueva_fila.appendChild(nueva_columna5);
	nueva_fila.appendChild(nueva_columna6);
	nueva_fila.appendChild(nueva_columna7);

	// Creo 4 inputs
	var nuevo_input = document.createElement("input");
	var nuevo_input2 = document.createElement("input");
	var nuevo_input3 = document.createElement("input");
	var nuevo_input4 = document.createElement("input");

	// Asigno "id's" a los inputs creados

	// Cuento las filas de la tabla y creo un índice
	var tabla = document.getElementById("tabla");
	var filas_cuerpotabla = tabla.getElementsByTagName("tr").length -1; // "-1" para ignorar la cabecera
	var indice = filas_cuerpotabla + 1;

	/*** 1 ***/
	var nombre = "prof";
	var identity = nombre+indice;

	nuevo_input.setAttribute("id", identity);

	/*** 2 ***/
	var nombre2 = "pporo";
	var identity2 = nombre2+indice;

	nuevo_input2.setAttribute("id", identity2);

	/*** 3 ***/
	var nombre3 = "prof";
	var identity3 = nombre3+indice+"a";

	nuevo_input3.setAttribute("id", identity3);

	/*** 4 ***/
	var nombre4 = "pfractura";
	var identity4 = nombre4+indice;

	nuevo_input4.setAttribute("id", identity4);
	
	
	// Creo 2 spans
	var nuevo_span = document.createElement("span");
	var nuevo_span2 = document.createElement("span");

	// Asigno "id's" a los spans creados
	/*** 1 ***/
	var nombre5 = "dlodo";
	var identity5 = nombre5+indice;

	nuevo_span.setAttribute("id", identity5);

	/*** 2 ***/
	var nombre6 = "pmargenarrem";
	var identity6 = nombre6+indice;

	nuevo_span2.setAttribute("id", identity6);


	// Inserto los 4 inputs en las columnas (celdas) correspondientes
	nueva_columna.appendChild(nuevo_input);
	nueva_columna2.appendChild(nuevo_input2);
	nueva_columna5.appendChild(nuevo_input3);
	nueva_columna7.appendChild(nuevo_input4);

	// Inserto los 2 spans en las columnas (celdas) correspondientes
	nueva_columna3.appendChild(nuevo_span);
	nueva_columna6.appendChild(nuevo_span2);

	// Accedo al body de la tabla
	var cuerpo_tabla = document.getElementById("cuerpotabla");

	// Inserto la fila, sus columnas, inputs y spans en el body de la tabla
	cuerpo_tabla.appendChild(nueva_fila);
}

// Accedo al botón de eliminar fila y le asigno el evento de activar la función
var eliminar_fila = document.getElementById("eliminar_fila");
eliminar_fila.addEventListener("click", eliminarFila);


function eliminarFila()
{
	// Cuento las filas de la tabla
	var tabla = document.getElementById("tabla");
	var filas_cuerpotabla = tabla.getElementsByTagName("tr").length -1; // "-1" para ignorar la cabecera

	if(filas_cuerpotabla >2) // Para que el botón eliminar no funcione cuando solo quedan las 2 filas originales
	{
		var cuerpo_tabla = document.getElementById("cuerpotabla");
		var ultima_fila = cuerpo_tabla.lastElementChild;
		cuerpo_tabla.removeChild(ultima_fila);
	}
}

// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS) //
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}


// EJES DE COORDENADAS (FUERA DE LA FUNCIÓN DE DIBUJO "trazarCurva" PARA QUE SEA SIEMPRE VISIBLE) //
dibujarLinea("black", margen, margen-8, margen, alto + margen + 8); // LÍNEA VERTICAL IZQUIERDA //
dibujarLinea("black", margen-8, margen, ancho + margen + 8, margen); // LÍNEA HORIZONTAL SUPERIOR //

// LEYENDA DE LÍNEAS DE DENSIDAD //
var ancho_linea = 0.07*ancho_canvas;
var separacion_leyendas = 0.3*ancho_canvas;

var leyendas_y = 0.92*alto_canvas;
var leyendas_y_abajo = 0.96*alto_canvas;

if(tamano_ventana < 600) {
	var leyenda1_x1 = 0.15*ancho_canvas;
}
else {
	var leyenda1_x1 = 0.2*ancho_canvas;
}

var leyenda1_x2 = leyenda1_x1 + ancho_linea;
var leyenda3_x1 = leyenda1_x2 + separacion_leyendas;
var leyenda3_x2 = leyenda3_x1 + ancho_linea;

if(tamano_ventana < 600) {
	lienzo.font = '8px "Tahoma"';
}
else {
	lienzo.font = '10px "Tahoma"';
}
dibujarLinea("blue", leyenda1_x1, leyendas_y, leyenda1_x2, leyendas_y);
lienzo.fillStyle = "black";
lienzo.fillText("Densidad de Poro", leyenda1_x2+5, leyendas_y+3);

dibujarLinea("green", leyenda1_x1, leyendas_y_abajo, leyenda1_x2, leyendas_y_abajo);
lienzo.fillStyle = "black";
lienzo.fillText("Densidad de Lodo", leyenda1_x2+5, leyendas_y_abajo+3);

dibujarLinea("orange", leyenda3_x1, leyendas_y, leyenda3_x2, leyendas_y);
lienzo.fillStyle = "black";
lienzo.fillText("Dens. de M. de Arrem.", leyenda3_x2+5, leyendas_y+3);

dibujarLinea("red", leyenda3_x1, leyendas_y_abajo, leyenda3_x2, leyendas_y_abajo);
lienzo.fillStyle = "black";
lienzo.fillText("Densidad de Fractura", leyenda3_x2+5, leyendas_y_abajo+3);



// FUNCIÓN PARA DIBUJAR LÍNEAS CON TRANSPARENCIA (2 PUNTOS) //
function dibujarLineaTrans(xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}


// LEYENDA DEL EJE Y (ROTADA) //
var x = margen/4; // COORDENADA X DONDE ESTARÁ EL TEXTO ROTADO //
var y = alto_canvas/2; // COORDENADA Y DONDE ESTARÁ EL TEXTO ROTADO //
lienzo.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
lienzo.translate(x,y); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
lienzo.rotate(-Math.PI / 2); // ESTABLECER EL ÁNGULO DE INCLINACIÓN DEL TEXTO (-90º) //
lienzo.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
if(tamano_ventana < 600) {
	lienzo.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
}
else {
	lienzo.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
}
lienzo.fillText("Profundidad (pies)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
lienzo.restore(); // REGRESAR EL CANVAS A SU ESTADO ORIGINAL, ANTES DE GRABARLO CON papel.save() //


// EJE X LEYENDA //
var x = ancho_canvas/2; // COORDENADA X DONDE ESTARÁ EL TEXTO //
var y = margen/2; // COORDENADA Y DONDE ESTARÁ EL TEXTO //
lienzo.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
lienzo.translate(x,y); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
lienzo.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
if(tamano_ventana < 600) {
	lienzo.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
}
else {
	lienzo.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
}
lienzo.fillText("Densidad Equivalente (lpg.)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
lienzo.restore();


// FUNCIÓN PARA TRAZAR UNA CURVA CONECTANDO LOS PUNTOS DADOS //
function CurvaDensidades(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.lineJoin = "round"; // Permite el trazo a mano alzada uniendo puntos //
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}


// FUNCIÓN QUE CAPTURA EL CANVAS SIN LAS CURVAS DE DENSIDADES //
function imageSinCurvas()
{
	ImageData = lienzo.getImageData(0, 0, ancho_canvas, alto_canvas);
}

function crearArray() {

	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var tabla = document.getElementById("tabla");
	var filas_cuerpotabla = tabla.getElementsByTagName("tr").length -1; // Cuento las filas, con "-1" para ignorar la cabecera
	
	var P_vs_PP = [];

	var MargenViaje = Number(document.getElementById("margen_viaje").value);
	var P_vs_DL = [];

	var P_vs_PF = [];

	var MargenArremetida = Number(document.getElementById("margen_arremetida").value);
	var P_vs_DA = [];

	var m;
	for(m=0; m<=filas_cuerpotabla-1; m=m+1)
	{
		// Prof vs PP //
		var cuerpo_tabla = document.getElementById("cuerpotabla");
		var fila1_cuerpo_tabla = cuerpo_tabla.children[m];
		var celda1_prof = fila1_cuerpo_tabla.firstElementChild;
		var Prof_1 = celda1_prof.firstElementChild;
		var Prof1 = (Prof_1.value)*factorY;
		
		var celda1_pporo = celda1_prof.nextElementSibling;
		var PreP_1 = celda1_pporo.firstElementChild;
		var PreP1 = (PreP_1.value)*factorX;

		if(PreP1 != 0) {
			P_vs_PP.push(PreP1, Prof1);
		}
		
		// Prof vs DL //
		var DL = Number((PreP_1.value)) + MargenViaje;
		var celda1_dl = celda1_pporo.nextElementSibling;
		var dl_1 = celda1_dl.firstElementChild;
		if(DL == MargenViaje) { // Si la presión de poro es 0 (o celda vacía) la celda de densidad de lodo no mostrará nada
			dl_1.innerHTML = "";
		}
		else
		{
			dl_1.innerHTML = DL.toFixed(1);
		}
		var dl1 = DL*factorX;

		if(DL != MargenViaje) {
			P_vs_DL.push(dl1, Prof1);
		}
		
		// Prof vs PF //
		var celda1_prof2 = celda1_dl.nextElementSibling.nextElementSibling;
		var Prof1_2 = celda1_prof2.firstElementChild;
		var Prof12 = (Prof1_2.value)*factorY;

		var celda1_pfrac = celda1_prof2.nextElementSibling.nextElementSibling;
		var PreF_1 = celda1_pfrac.firstElementChild;
		var PreF1 = (PreF_1.value)*factorX;

		if(PreF1 != 0) {
			P_vs_PF.push(PreF1, Prof12);
		}
		
		// Prof vs DA //
		var DA = Number((PreF_1.value)) - MargenArremetida;
		var celda1_da = celda1_prof2.nextElementSibling;
		var da_1 = celda1_da.firstElementChild;
		if(DA == -MargenArremetida)// Si la presión de fractura es 0 (o celda vacía) la celda de densidad de arremetida no mostrará nada
		{
			da_1.innerHTML = "";
		}
		else
		{
			da_1.innerHTML = DA.toFixed(1);
		}
		var da1 = DA*factorX;

		if(DA != -MargenArremetida) {
			P_vs_DA.push(da1, Prof12);
		}
	}
	var arrays = [P_vs_PP, P_vs_DL, P_vs_DA, P_vs_PF, factorX, factorY];
	return arrays;
}

function trazarCurva()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	// LÍNEAS TRANSPARENTES DE REFERENCIA DENTRO DEL GRÁFICO //
	// EJE Y //
	for(a = 1000; a <= max_prof; a = a+1000) // Línea cada 1000 pies //
	{
		dibujarLineaTrans(margen, a*factorY + margen, ancho + margen, a*factorY + margen);
	}

	// EJE X //
	for(a = 1; a <= max_densidad; a = a+1) // Línea cada 1 lpg //
	{
		dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
	}

	// ESCALA DE LOS EJES DE COORDENADAS //

	// EJE Y - GUIONES //
	for(a = 200; a <= max_prof; a = a+200) // Guión cada 200 pies //
	{
		if(tamano_ventana < 600) {
			if(a % 1000 == 0) // Guión largo cada 1000 pies //
			{
				dibujarLinea("black", margen-4, a*factorY + margen, margen+4, a*factorY + margen);
			}
			else // Guión corto cada 200 pies //
			{
				dibujarLinea("black", margen-2, a*factorY + margen, margen+2, a*factorY + margen);
			}
		}
		else {
			if(a % 1000 == 0) // Guión largo cada 1000 pies //
			{
				dibujarLinea("black", margen-6, a*factorY + margen, margen+6, a*factorY + margen);
			}
			else // Guión corto cada 200 pies //
			{
				dibujarLinea("black", margen-4, a*factorY + margen, margen+4, a*factorY + margen);
			}
		}
	}

	// EJE Y - VALORES //
	if(tamano_ventana < 600){
		lienzo.font = '7px "Tahoma"';
		lienzo.fillStyle = "black";
	}
	else{
		lienzo.font = '12px "Tahoma"';
		lienzo.fillStyle = "black";
	}
	
	for(a = 1000; a <= max_prof; a = a+1000)
	{
		lienzo.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
		if(tamano_ventana < 600) {
			lienzo.translate(margen-5,a*factorY+3 + margen); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
		}
		else {
			lienzo.translate(margen-7,a*factorY+3 + margen);
		}
		lienzo.textAlign = 'right'; // ESTABLECER ALINEACIÓN DEL TEXTO //
		lienzo.fillText(a,0,0);
		lienzo.restore();
	}

	// EJE X - GUIONES //
	for(a = 0.5; a <= max_densidad; a = a+0.5)
	{
		if(tamano_ventana < 600) {
			if(a % 2 == 0)
			{
				dibujarLinea("black", a*factorX + margen, margen-4, a*factorX + margen, margen+4); // Guiones largos para valores pares //
			}
			else
			{
				dibujarLinea("black", a*factorX + margen, margen-2, a*factorX + margen, margen+2); // Guiones cortos para los demás valores //
			}
		}
		else {
			if(a % 2 == 0) {
				dibujarLinea("black", a*factorX + margen, margen-6, a*factorX + margen, margen+6); // Guiones largos para valores pares //
			}
			else {
				dibujarLinea("black", a*factorX + margen, margen-4, a*factorX + margen, margen+4); // Guiones cortos para los demás valores //
			}
		}
	}

	// EJE X - VALORES //
	if(tamano_ventana < 600){
		lienzo.font = '8px "Tahoma"';
		lienzo.fillStyle = "black";
	}
	else{
		lienzo.font = '12px "Tahoma"';
		lienzo.fillStyle = "black";
	}

	for(a = 2; a <= max_densidad; a = a+2)
	{
		lienzo.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
		lienzo.fillText(a, a*factorX + margen, 0.0855*ancho_canvas);
	}
	lienzo.fillText(0, margen-5, 0.0855*alto_canvas); // Origen de coordenadas //
	lienzo.fillStyle = "purple"; // VALOR DE COLOR PÚRPURA //
	lienzo.textAlign = "center"; 
	lienzo.fillText(9, 9*factorX + margen, 0.0855*alto_canvas); // Valor de 9 lpg (Presión Normal) //
	lienzo.fillStyle = "black"; // REGRESAR A COLOR NEGRO //

	
	// ***GRAFICAR CURVAS*** //
	var arrays_densidades = crearArray();

	var P_vs_PP = arrays_densidades[0];
	var P_vs_DL = arrays_densidades[1];
	var P_vs_DA = arrays_densidades[2];
	var P_vs_PF = arrays_densidades[3];

	// Tomo en cuenta el array de mayor longitud, que debe ser siempre P_vs_PP
	var datosPP = P_vs_PP.length;

	// CICLO PARA TRAZAR LA CURVA //
	var limitePP = datosPP - 4; //Solo puedo dejar que el ciclo llegue a 4 posiciones antes del final para que no intente luego graficar valores que no existen en el array//
	var i = 0;

	while(i <= limitePP)
	{
		CurvaDensidades("blue", P_vs_PP[i] + margen, P_vs_PP[i+1] + margen, P_vs_PP[i+2] + margen, P_vs_PP[i+3] + margen);
		CurvaDensidades("green", P_vs_DL[i] + margen, P_vs_DL[i+1] + margen, P_vs_DL[i+2] + margen, P_vs_DL[i+3] + margen);
		CurvaDensidades("red", P_vs_PF[i] + margen, P_vs_PF[i+1] + margen, P_vs_PF[i+2] + margen, P_vs_PF[i+3] + margen);
		CurvaDensidades("orange", P_vs_DA[i] + margen, P_vs_DA[i+1] + margen, P_vs_DA[i+2] + margen, P_vs_DA[i+3] + margen);
		i = i+2; // Con esto me aseguro de que las coordenadas del próximo punto a graficar sean las mismas del último punto graficado para poder unir las líneas//
	}
}


// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML //
var boton_borrar = document.getElementById("borrar_curvas");
boton_borrar.addEventListener("click", borrarCurvas);

// FUNCIÓN QUE ELIMINA LAS CURVAS DE DENSIDAD, SUPERPONIENDO SOBRE EL CANVAS LA IMAGEN CAPTURADA ANTERIORMENTE //
function borrarCurvas ()
{
	lienzo.putImageData(ImageData, 0, 0);
}

/************* LÍNEAS DE DISEÑO ****************/

// CÓDIGO PARA MOSTRAR Y OCULTAR LA SECCIÓN DE LÍNEAS AUTOMÁTICAS //
var boton_mostrar_ocultar = document.getElementById("mostrar_ocultar_auto");
boton_mostrar_ocultar.addEventListener("click", mostrarOcultarAuto);

var datos_auto = document.getElementById("datos_auto");
datos_auto.style.display = "none";

function mostrarOcultarAuto()
{
	if(datos_auto.style.display == "none")
	{
		datos_auto.style.display = "block";
	}
	else if(datos_auto.style.display == "block")
	{
		datos_auto.style.display = "none";
	}
}

// ACCEDER AL BOTÓN "lineas_auto"
var auto = document.getElementById("lineas_auto");
auto.addEventListener("click", autoLineas);
auto.addEventListener("mouseup", image4Curvas);

// ACCEDER AL BOTÓN "deshacer" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN deshacerLineaDiseno AL DARLE CLICK //
var deshace_linea = document.getElementById("deshacer");
deshace_linea.addEventListener("click", deshacerLineaDiseno);
deshace_linea.addEventListener("click", eliminarTablaRev);


// FUNCIÓN PARA DIBUJAR LÍNEAS PUNTEADAS (2 PUNTOS) //
function dibujarLineaDiseno(color, xinicial, yinicial, xfinal, yfinal)
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

// FUNCIÓN PARA TRAZAR TODAS LAS LÍNEAS DE DISEÑO AUTOMÁTICAMENTE

function autoLineas()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var ultimaDL = (document.getElementById("DLaPT").value) * factorX;
	var ultimaProf = (document.getElementById("PT").value) * factorY;

	// ***GRAFICAR LÍNEAS DE DISEÑO*** //
	var MargenViaje = Number(document.getElementById("margen_viaje").value);
	var MargenArremetida = Number(document.getElementById("margen_arremetida").value);
	
	var arrays_densidades = crearArray();
	var P_vs_PP = arrays_densidades[0];
	var P_vs_DL = arrays_densidades[1];
	var P_vs_DA = arrays_densidades[2];
	var P_vs_PF = arrays_densidades[3];

	var x = ultimaDL;
	var y = ultimaProf;

	// Insertar la primerá fila (última profundidad) de la tabla de prof vs densidades, debajo de la primera fila (posición 0)
	var cuerpotabla_rev = document.getElementById("tabla_rev");
	var fila_nueva = cuerpotabla_rev.insertRow(1);
	var cell1 = fila_nueva.insertCell(0);
	var cell2 = fila_nueva.insertCell(1);
	var cell3 = fila_nueva.insertCell(2);
	var cell4 = fila_nueva.insertCell(3);
	var cell5 = fila_nueva.insertCell(4);
	cell1.innerHTML = y/factorY;
  	cell2.innerHTML = ((P_vs_PP[P_vs_PP.length-2])/factorX).toFixed(1);
  	cell3.innerHTML = (x/factorX).toFixed(1);
  	cell4.innerHTML = ((P_vs_DA[P_vs_DA.length-2])/factorX).toFixed(1);
  	cell5.innerHTML = ((P_vs_PF[P_vs_PF.length-2])/factorX).toFixed(1);

	while(x >= P_vs_DA[0])
	{
		// CICLO PARA QUE LA LÍNEA VERTICAL DE ÚLTIMA DENSIDAD DE LODO INTERSECTE A LA LÍNEA DE ARREMETIDA
		var n;
		var datosDA = P_vs_DA.length;
		var pendiente;
		var interseccion;
		var cuerpotabla_rev = document.getElementById("tabla_rev");
		
		for(n=0; n<=datosDA-1; n=n+2)
		{
			if(x >= P_vs_DA[n] && x< P_vs_DA[n+2])
			{
				pendiente = (P_vs_DA[n+3] - P_vs_DA[n+1]) / (P_vs_DA[n+2] - P_vs_DA[n]);
				if(pendiente == "Infinity") // Solución si la pendiente es infinito
				{
					var auto1 = P_vs_DA[n+3];
				}
				else
				{
					console.log("La pendiente de la recta de DA interceptada es: " + pendiente);
					interseccion = P_vs_DA[n+3] - (pendiente*P_vs_DA[n+2]);
					console.log(`La intersección con el eje Y de la recta de DA interceptada es: ${interseccion} px.`);
					var auto1 = pendiente*x + interseccion;
					console.log("La profundidad de asentamiento para " + x/factorX + " lpg. es: " + auto1 + " px. ó " + auto1/factorY + " pies.");
				}
				
				dibujarLineaDiseno("black", x + margen, y + margen, x + margen, auto1 + margen);

				var mostrar_y = (auto1/factorY).toFixed(0);
				if (mostrar_y >= 50) // Para que solo muestre valores de profundidad >= a 50 pies
				{
					lienzo.textAlign ="left";
					lienzo.fillText(mostrar_y + "'", ancho + margen + 5, auto1 + margen); // Mostrar en canvas los valores de profundidad calculados
				}
			}
		}

		// CICLO PARA QUE LA LÍNEA HORIZONTAL DE PROFUNDIDAD INTERSECTE A LA LÍNEA DE DENSIDAD DE LODO
		var p;
		var datosDL = P_vs_DL.length;
		var pendiente2;
		var interseccion2;

		for(p=0; p<=datosDL-1; p=p+2)
		{
			if(auto1 >= P_vs_DL[p+1] && auto1< P_vs_DL[p+3])
			{
				pendiente2 = (P_vs_DL[p+3] - P_vs_DL[p+1]) / (P_vs_DL[p+2] - P_vs_DL[p]);
				console.log("La pendiente de la recta de DL interceptada es: " + pendiente2);
				if(pendiente2 == 0) // Solución si la pendiente es cero y por ende auto2 sería infinito
				{
					var auto2 = P_vs_DL[p+2];
				}
				else if(pendiente2 == "Infinity") // Solución si la pendiente es infinito
				{
					var auto2 = P_vs_DL[p];
				}
				else
				{
					interseccion2 = P_vs_DL[p+3] - (pendiente2*P_vs_DL[p+2]);
					console.log("La intersección con el eje Y de la recta de DL interceptada es: " + interseccion2 + " px.");
					var auto2 = (auto1-interseccion2)/pendiente2;
				}
				console.log("La densidad de lodo para " + auto1/factorY + " pies. es " + auto2 + " px. ó " + auto2/factorX + "lpg.");

				if(auto1/factorY >= 50) // Para que solo dibuje líneas horizontales cuando la profunidad sea >= 50 pies
				{
					dibujarLineaDiseno("black", x + margen, auto1 + margen, auto2 + margen, auto1 + margen);
				}
			}
		}

		// Insertar las demás filas de la tabla de prof vs densidades, siempre debajo de la primera fila (posición 0)
		// Solo si la profundidad obtenida es >= 50 pies
		if(auto1/factorY >= 50) {
			var fila_nueva = cuerpotabla_rev.insertRow(1);
			var cell1 = fila_nueva.insertCell(0);
			var cell2 = fila_nueva.insertCell(1);
			var cell3 = fila_nueva.insertCell(2);
			var cell4 = fila_nueva.insertCell(3);
			var cell5 = fila_nueva.insertCell(4);
			cell1.innerHTML = mostrar_y;
			cell2.innerHTML = (auto2/factorX-MargenViaje).toFixed(1);
			cell3.innerHTML = (auto2/factorX).toFixed(1);
			cell4.innerHTML = (x/factorX).toFixed(1);
			cell5.innerHTML = (x/factorX+MargenArremetida).toFixed(1);
		}

		x = auto2;
		y = auto1;

		var fila_tabla_rev = cuerpotabla_rev.getElementsByTagName("tr");
		var numero_de_filas = fila_tabla_rev.length;

		// Código para que el ciclo pare luego de 8 revestidores
		var r = "La cantidad de revestidores obtenidos en el proceso de diseño es muy alta, verifique los valores de la tabla de densidades y repita el procedimiento si es necsario.";
		if(numero_de_filas == 9) {
			document.getElementById("aviso-num-rev").innerText = r;
			break;
		}
	}

	lienzo.fillText(ultimaProf/factorY +"'", ancho + margen + 5, ultimaProf + margen); // Mostrar valor de profundidad final en canvas //
	
	// Código para que se trace la última línea vertical
	if(x < P_vs_DA[0] || numero_de_filas == 9)
	{
		auto1 = 0;
		dibujarLineaDiseno("black", x + margen, y + margen, x + margen, auto1 + margen);
	}
}

// FUNCIÓN QUE CAPTURA EL CANVAS CON LAS CURVAS DE DENSIDADES //
function image4Curvas() {
	ImageData2 = lienzo.getImageData(0, 0, ancho_canvas, alto_canvas);
}

// FUNCIÓN QUE ELIMINA LAS CURVAS DE DISEÑO HORIZONTALES Y/O VERTICALES, SUPERPONIENDO SOBRE EL CANVAS LA IMAGEN CAPTURADA ANTERIORMENTE //
function deshacerLineaDiseno() {
	lienzo.putImageData(ImageData2, 0, 0);
}

function eliminarTablaRev() {
	var cuerpotabla_rev = document.getElementById("tabla_rev");
	var fila_tabla_rev = cuerpotabla_rev.getElementsByTagName("tr");
	var numero_de_filas = fila_tabla_rev.length;
	 
	for(i = 1; i < numero_de_filas; i++) {
		cuerpotabla_rev.deleteRow(1);
	}
}

/******* LÍNEAS DE DISEÑO MANUALES ********/

// CÓDIGO PARA MOSTRAR Y OCULTAR LA SECCIÓN DE LÍNEAS AUTOMÁTICAS //
var mostrar_ocultar_manual = document.getElementById("mostrar_ocultar_manual");
mostrar_ocultar_manual.addEventListener("click", mostrarOcultarManual);

var div_tablas = document.getElementById("div_tablas");
div_tablas.style.display = "none";

function mostrarOcultarManual()
{
	if(div_tablas.style.display == "none")
	{
		div_tablas.style.display = "block";
	}
	else if(div_tablas.style.display == "block")
	{
		div_tablas.style.display = "none";
	}
}

// ACCEDER AL BOTÓN "botoncito2" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN lineaDiseno AL DARLE CLICK //
var boton2 = document.getElementById("botoncito2");
boton2.addEventListener("click", lineaDiseno);
boton2.addEventListener("mouseup", image4Curvas);

// ACCEDER AL BOTÓN "deshacer" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN deshacerLineaDiseno AL DARLE CLICK //
var deshace_linea2 = document.getElementById("deshacer2");
deshace_linea2.addEventListener("click", deshacerLineaDiseno);

// ACCEDER AL BOTÓN "botoncito3" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN lineaDiseno2 AL DARLE CLICK //
var boton3 = document.getElementById("botoncito3");
boton3.addEventListener("click", lineaDiseno2);

// ACCEDER AL BOTÓN "botoncito4" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN lineaDiseno3 AL DARLE CLICK //
var boton4 = document.getElementById("botoncito4");
boton4.addEventListener("click", lineaDiseno3);

// ACCEDER AL BOTÓN "botoncito5" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN lineaDiseno4 AL DARLE CLICK //
var boton5 = document.getElementById("botoncito5");
boton5.addEventListener("click", lineaDiseno4);

// ACCEDER AL BOTÓN "botoncito6" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN lineaDiseno5 AL DARLE CLICK //
var boton6 = document.getElementById("botoncito6");
boton6.addEventListener("click", lineaDiseno5);

// ACCEDER AL BOTÓN "botoncito7" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN lineaDiseno5 AL DARLE CLICK //
var boton7 = document.getElementById("botoncito7");
boton7.addEventListener("click", lineaDiseno6);

// ACCEDER AL BOTÓN "botoncito7" DE HTML Y QUE EJECUTE EL EVENTO DE FUNCIÓN lineaDiseno5 AL DARLE CLICK //
var boton8 = document.getElementById("botoncito8");
boton8.addEventListener("click", lineaDiseno7);

// CÓDIGO PARA CAMBIAR EL TEXTO DE LOS BOTONES SI LA VENTANA DEL NAVEGADOR ES PEQUEÑA
if(tamano_ventana < 600) {
	boton2.innerText = "Trazar";
	boton3.innerText = "Trazar";
	boton4.innerText = "Trazar";
	boton5.innerText = "Trazar";
	boton6.innerText = "Trazar";
	boton7.innerText = "Trazar";
	boton8.innerText = "Trazar";
}

// FUNCIONES PARA CADA BOTÓN ARRIBA ACCESADOS //

function lineaDiseno()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var x1 = Number(document.getElementById("x1").value)* factorX;
	var y1 = Number(document.getElementById("y1").value) * factorY;
	var x2 = Number(document.getElementById("x2").value)* factorX;
	var y2 = Number(document.getElementById("y2").value) * factorY;

	dibujarLineaDiseno("black", x1 + margen, y1 + margen, x2 + margen, y2 + margen);

	var mostrar_y1 = (y1/factorY).toFixed(0);
	var mostrar_y2 = (y2/factorY).toFixed(0);
	
	if(y1 > y2) {
		lienzo.textAlign = "left";
		lienzo.fillText(mostrar_y1, ancho+margen+5, y1 + margen);
	}
	else {
		lienzo.textAlign = "left";
		lienzo.fillText(mostrar_y2, ancho+margen+5, y2 + margen);
	}
}

function lineaDiseno2()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var x3 = Number(document.getElementById("x3").value)* factorX;
	var y3 = Number(document.getElementById("y3").value)* factorY;
	var x4 = Number(document.getElementById("x4").value)* factorX;
	var y4 = Number(document.getElementById("y4").value)* factorY;

	dibujarLineaDiseno("black", x3 + margen, y3 + margen, x4 + margen, y4 + margen);

	if(y3 == y4) {
		var mostrar_y = (y3/factorY).toFixed(0);
		lienzo.textAlign = "left";
		lienzo.fillText(mostrar_y, ancho+margen+5, y3 + margen);
	}
}

function lineaDiseno3()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var x5 = Number(document.getElementById("x5").value)* factorX;
	var y5 = Number(document.getElementById("y5").value)* factorY;
	var x6 = Number(document.getElementById("x6").value)* factorX;
	var y6 = Number(document.getElementById("y6").value)* factorY;

	dibujarLineaDiseno("black", x5 + margen, y5 + margen, x6 + margen, y6 + margen);

	if(y5 == y6) {
		var mostrar_y = (y5/factorY).toFixed(0);
		lienzo.textAlign = "left";
		lienzo.fillText(mostrar_y, ancho+margen+5, y5 + margen);
	}
}

function lineaDiseno4()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var x7 = Number(document.getElementById("x7").value)* factorX;
	var y7 = Number(document.getElementById("y7").value)* factorY;
	var x8 = Number(document.getElementById("x8").value)* factorX;
	var y8 = Number(document.getElementById("y8").value)* factorY;

	dibujarLineaDiseno("black", x7 + margen, y7 + margen, x8 + margen, y8 + margen);

	if(y7 == y8) {
		var mostrar_y = (y7/factorY).toFixed(0);
		lienzo.textAlign = "left";
		lienzo.fillText(mostrar_y, ancho+margen+5, y7 + margen);
	}
}

function lineaDiseno5()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var x9 = Number(document.getElementById("x9").value)* factorX;
	var y9 = Number(document.getElementById("y9").value)* factorY;
	var x10 = Number(document.getElementById("x10").value)* factorX;
	var y10 = Number(document.getElementById("y10").value)* factorY;

	dibujarLineaDiseno("black", x9 + margen, y9 + margen, x10 + margen, y10 + margen);

	if(y9 == y10) {
		var mostrar_y = (y9/factorY).toFixed(0);
		lienzo.textAlign = "left";
		lienzo.fillText(mostrar_y, ancho+margen+5, y9 + margen);
	}
}

function lineaDiseno6()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var x11 = Number(document.getElementById("x11").value)* factorX;
	var y11 = Number(document.getElementById("y11").value)* factorY;
	var x12 = Number(document.getElementById("x12").value)* factorX;
	var y12 = Number(document.getElementById("y12").value)* factorY;

	dibujarLineaDiseno("black", x11 + margen, y11 + margen, x12 + margen, y12 + margen);

	if(y11 == y12) {
		var mostrar_y = (y11/factorY).toFixed(0);
		lienzo.textAlign = "left";
		lienzo.fillText(mostrar_y, ancho+margen+5, y11 + margen);
	}
}

function lineaDiseno7()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	var x13 = Number(document.getElementById("x13").value)* factorX;
	var y13 = Number(document.getElementById("y13").value)* factorY;
	var x14 = Number(document.getElementById("x14").value)* factorX;
	var y14 = Number(document.getElementById("y14").value)* factorY;

	dibujarLineaDiseno("black", x13 + margen, y13 + margen, x14 + margen, y14 + margen);

	if(y13 == y14) {
		var mostrar_y = (y13/factorY).toFixed(0);
		lienzo.textAlign = "left";
		lienzo.fillText(mostrar_y, ancho+margen+5, y13 + margen);
	}	
}


/*************** AJUSTE DE LAS PROFUNIDADES HALLADAS ******************/

//PROFUNDIDAD A LA CUAL LA PRESIÓN PASA DE NORMAL A ANORMAL//
var ProfNormalAnormal = document.getElementById("PNA");

//PROFUNDIDADES Y DENSIDADES DE LA FORMACIÓN MÁS PROPENSA A CAUSAR PEGA DIFERENCIAL//
var ProfZonaPropensa = document.getElementById("Valor_tituloPMP");
var DensidadEqZonaProp = document.getElementById("Valor_tituloDEMP");

//PROFUNDIDADES DE ASENTAMIENTO Y DENSIDADES DE LODO OBSERVADAS EN GRÁFICA//
var ProfRevSup = document.getElementById("PRS");
var DensidadFracEquivSup = document.getElementById("DFES");

var ProfRevInt = document.getElementById("PRI");
var DensidadZapInt = document.getElementById("DZI");

// CÓDIGO QUE CAUSA QUE AL HACER CLICK AL BOTÓN DE HTML SE ACTIVE LA FUNCIÓN EN JAVASCRIPT //
var boton_ajuste1 = document.getElementById("boton_ajuste_int");
boton_ajuste1.addEventListener("click", AnalisisIntermedio);

// FUNCIÓN QUE EJECUTA LA APARICIÓN DEl TEXTO DEL SPAN //
function AnalisisIntermedio()
{
	// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
	var max_densidad = document.getElementById("max_den_graf").value;
	var max_prof = document.getElementById("max_prof_graf").value;

	var factorX = ancho / max_densidad;
	var factorY = alto / max_prof;

	// VARIABLES //
	var Prof_Normal_Anormal = Number(ProfNormalAnormal.value);

	var Prof_Zona_Propensa = Number(ProfZonaPropensa.value);
	var Densidad_Eq_Zona_Propensa = Number(DensidadEqZonaProp.value);

	var Prof_Rev_Int = Number(ProfRevInt.value);
	var Densidad_Zap_Int = Number(DensidadZapInt.value);

	var Delta_Presion_Teorico;
	var Delta_Presion_Calculado;

	var Prof_Rev_Int_Correg;
	var Densidad_Zap_Int_Correg;

	if(Prof_Normal_Anormal != "" && Prof_Rev_Int != "" && Densidad_Zap_Int != "" && Prof_Zona_Propensa != "" && Densidad_Eq_Zona_Propensa != "")
	{
		if(Prof_Rev_Int > Prof_Normal_Anormal)
		{
			Delta_Presion_Teorico = 3000;
			console.log("El Delta Presión Teórico es " + Delta_Presion_Teorico + " lpc.");
		}
		else
		{
			Delta_Presion_Teorico = 2000;
			console.log("El Delta Presión Teórico es " + Delta_Presion_Teorico + " lpc.");
		}

		Delta_Presion_Calculado = 0.052 * (Densidad_Zap_Int - Densidad_Eq_Zona_Propensa) * Prof_Zona_Propensa;
		console.log("El Delta Presión Calculado es " + Delta_Presion_Calculado + " lpc.");

		if(Delta_Presion_Calculado < Delta_Presion_Teorico)
		{
			var x = `Presion Diferencial Teórica = ${Delta_Presion_Teorico} lpc.
			Presion Diferencial Calculada = ${Delta_Presion_Calculado.toFixed(1)} lpc.
			Presion Diferencial Calculada < Presion Diferencial Teórica.

			El revestidor PUEDE ASENTARSE a ${Prof_Rev_Int} pies sin riesgo de pega diferencial.`;
			document.getElementById("resultadoI").innerText = x;
		}
		else
		{
			var Densidad_Zap_Int_Correg = Number(((Delta_Presion_Teorico / (0.052 * Prof_Zona_Propensa)) + Densidad_Eq_Zona_Propensa).toFixed(2));

			var arrays_densidades = crearArray();
			var P_vs_PP = arrays_densidades[0];
			var P_vs_DL = arrays_densidades[1];
			var P_vs_DA = arrays_densidades[2];
			var P_vs_PF = arrays_densidades[3];

			//var w = Densidad_Zap_Int_Correg;
			var w= 11; // Eliminar cuando la app salga a producción
			
			// CICLO PARA QUE LA LÍNEA VERTICAL DE MÁXIMA DENSIDAD DE LODO PERMITIDA INTERSECTE A LA LÍNEA DE DL
			var n;
					
			var datosDL = P_vs_DL.length;
			var pendiente;
			var interseccion;

			for(n=0; n<=datosDL-1; n=n+2)
			{
				if(w >= P_vs_DL[n]/factorX && w< P_vs_DL[n+2]/factorX)
				{
					pendiente = (P_vs_DL[n+3] - P_vs_DL[n+1]) / (P_vs_DL[n+2] - P_vs_DL[n]);
					if(pendiente == "Infinity") // Solución si la pendiente es infinito
					{
						var auto1 = P_vs_DL[n+3];
					}
					else
					{
						console.log(pendiente);
						interseccion = P_vs_DL[n+3] - (pendiente*P_vs_DL[n+2]);
						console.log(interseccion);
						var auto1 = pendiente*w*factorX + interseccion;
						console.log("La profundidad de asentameinto corregida del revestidor por riesgo de pega diferencial es: " + auto1/factorY + " pies.");
					}
				}
			}

			// CICLO PARA QUE LA LÍNEA HORIZONTAL DE PROFUNDIDAD DE ASENTAMIENTO CORREGIDA INTERSECTE A LA LÍNEA DE DA
			var s;
					
			var datosDA = P_vs_DA.length;
			var pendienteDA;
			var interseccionDA;

			for(s=0; s<=datosDA-1; s=s+2)
			{
				if(auto1 >= P_vs_DA[s+1] && auto1 < P_vs_DA[s+3])
				{
					pendienteDA = (P_vs_DA[s+3] - P_vs_DA[s+1]) / (P_vs_DA[s+2] - P_vs_DA[s]);
					if(pendienteDA == "Infinity") // Solución si la pendiente es infinito
					{
						var auto2 = P_vs_DA[s+2];
					}
					else
					{
						console.log(pendienteDA);
						interseccionDA = P_vs_DA[s+3] - (pendienteDA*P_vs_DA[s+2]);
						console.log(interseccionDA);
						var auto2 = (auto1 - interseccionDA)/pendienteDA;
						console.log("La D.A. a la profundidad de " + auto1/factorY + " pies es: " + auto2/factorX + " lpg.");
					}
				}
			}


			// CICLO PARA QUE LA LÍNEA VERTICAL DE DA INTERSECTE A LA LÍNEA DE DL
			var q;
					
			var datosDL2 = P_vs_DL.length;
			var pendienteDL2;
			var interseccionDL2;

			for(q=0; q<=datosDL2-1; q=q+2)
			{
				if(auto2 >= P_vs_DL[q] && auto2 < P_vs_DL[q+2])
				{
					pendienteDL2 = (P_vs_DL[q+3] - P_vs_DL[q+1]) / (P_vs_DL[q+2] - P_vs_DL[q]);
					if(pendienteDL2 == "Infinity") // Solución si la pendiente es infinito
					{
						var auto3 = P_vs_DL[q+3];
					}
					else
					{
						console.log(pendienteDL2);
						interseccionDL2 = P_vs_DL[q+3] - (pendienteDL2*P_vs_DL[q+2]);
						console.log(interseccionDL2);
						var auto3 = (pendienteDL2*auto2 + interseccionDL2);
						console.log(auto3);
						console.log("La máxima profundidad de asentamiento del revestidor adicional es: " + auto3/factorY + " pies");
					}
				}
			}
			
			var x = `Presion Diferencial Teórica = ${Delta_Presion_Teorico} lpc.
			Presion Diferencial Calculada = ${Delta_Presion_Calculado.toFixed(1)} lpc.
			Presion Diferencial Calculada > Presion Diferencial Teórica.
			
			El revestidor NO PUEDE ASENTARSE a ${Prof_Rev_Int} pies por riesgo de pega diferencial.
			
			Para evitar este riesgo, la máxima densidad de lodo permitida en este hoyo es ${Densidad_Zap_Int_Correg} lpg.
			
			Para dicha densidad de lodo, la nueva Profundidad de Asentamiento es: ${(auto1/factorY).toFixed(0)} pies.
			
			IMPORTANTE: Se debe agregar una sarta de revestimiento adicional para cubrir el intervalo desnudo resultante de asentar este revestidor más arriba de lo diseñado.
			
			Elija la Profundidad de Asentamiento de la sarta de revestimiento adicional, la cual puede estar comprendida entre ${Prof_Rev_Int} pies y ${(auto3/factorY).toFixed(0)} pies, siendo esta última la máxima profundidad permisible.`;
			
			document.getElementById("resultadoI").innerText = x;
		}
	}
	else
	{
		alert("Todos los datos son necesarios para realizar el análisis. Por favor no deje ningún campo vacío.");
	}

	var datos = [Densidad_Zap_Int, Prof_Rev_Int, Densidad_Zap_Int_Correg, auto1/factorY, auto2/factorX, auto3/factorY];
	return datos;
}


// ANÁLISIS DEL REVESTIDOR SUPERFICIAL (ARREMETIDA) //
var boton_ajuste2 = document.getElementById("boton_ajuste_sup");
boton_ajuste2.addEventListener("click", AnalisisSuperficial);

// VARIABLES NECESARIAS
var ProfProxRev = document.getElementById("PProxR");
var DenProxRev = document.getElementById("DProxR");

function AnalisisSuperficial()
{
	var Prof_Rev_Sup = Number(ProfRevSup.value);
	var Densidad_Frac_Equiv_Sup = Number(DensidadFracEquivSup.value);

	var Prof_Prox_Rev = Number(ProfProxRev.value);
	var Den_Prox_Rev = Number(DenProxRev.value);

	var Densidad_Equiv_Fluido = Den_Prox_Rev + (Prof_Prox_Rev / Prof_Rev_Sup) * 0.5;
	console.log("La densidad eq. del fluido es: " + Densidad_Equiv_Fluido);

	if(Prof_Prox_Rev != "" && Den_Prox_Rev != "" && Prof_Rev_Sup != "" && Densidad_Frac_Equiv_Sup != "")
	{
		if(Densidad_Equiv_Fluido < Densidad_Frac_Equiv_Sup)
		{
			var w = `Densidad Equivalente de Fractura = ${Densidad_Frac_Equiv_Sup} lpg.
			Densidad Equivalente del Lodo luego del influjo = ${Densidad_Equiv_Fluido.toFixed(1)} lpg.
			Densidad Equivalente del Lodo < Densidad Equivalente de Fractura.
			
			El revestidor superficial PUEDE ASENTARSE a ${Prof_Rev_Sup} pies sin riesgo de falla por arremetida.`;
	
			document.getElementById("resultadoS").innerText = w;
		}
		else
		{
			var w = `Densidad Equivalente de Fractura = ${Densidad_Frac_Equiv_Sup} lpg.
			Densidad Equivalente del Lodo luego del influjo = ${Densidad_Equiv_Fluido.toFixed(1)} lpg.
			Densidad Equivalente del Lodo > Densidad Equivalente de Fractura.
			
			El revestidor superficial NO PUEDE ASENTARSE a ${Prof_Rev_Sup} pies por riesgo de falla por arremetida. Introduzca una profundidad de asentamiento mayor y su correspondiente Densidad de Fractura Equivalente.`;
			
			document.getElementById("resultadoS").innerText = w;
		}
	}
	else
	{
		alert("Todos los datos son necesarios para realizar el análisis. Por favor no deje ningún campo vacío.");
	}
}
