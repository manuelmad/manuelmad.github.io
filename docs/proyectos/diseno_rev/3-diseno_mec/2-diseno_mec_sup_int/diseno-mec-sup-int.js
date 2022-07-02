// FACTORES DE DISEÑO  PDVSA //

// CONDUCTOR //

var FDcolapsoCond = 1.0;

// SUPERFICIAL //

var FDcolapsoSup = 1.0;
var FDestallidoSup = 1.1;
var FDtensionSup = 1.6;

// INTERMEDIO //

var FDcolapsoInt = 1.0;
var FDestallidoInt = 1.1;
var FDtensionInt = 1.6;

// PRODUCCIÓN //

var FDcolapsoProd = 1.1;
var FDestallidoProd = 1.1;
var FDtensionProd = 1.6;


// ****************************** ESTALLIDO ***************************** //

// DEFINIR EL CONTEXTO DE CANVAS "conductor_estallido" //

var e = document.getElementById("conductor_estallido");
var papel = e.getContext("2d");

// DIMENSIONES DEL CANVAS //
var ancho_canvas = e.width;
var alto_canvas = e.height;

// DIMESIONES DEL GRÁFICO //
var ancho = 0.78*ancho_canvas;
var centro = ancho / 2;
var alto = 0.78*alto_canvas;


// MÁRGENES DEL GRÁFICO (EL MISMO PARA LOS 4 LADOS) //
var margen = (ancho_canvas-ancho)/2;
var medio_margen = margen / 2;


// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS) //
function dibujarLineaPapel(color, xinicial, yinicial, xfinal, yfinal)
{
	papel.beginPath();
	papel.strokeStyle = (color);
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
	
}

// EJES DE COORDENADAS (ÁREA DE DIBUJO CUADRADA DE 300X300) CON ORIGEN EN (40,40) //

dibujarLineaPapel("blue", margen, margen-5, margen, alto+margen+5); // LÍNEA VERTICAL IZQUIERDA //
dibujarLineaPapel("blue", margen-5, margen, ancho+margen+5, margen); // LÍNEA HORIZONTAL SUPERIOR //

// LEYENDA DE LAS LÍNEAS DE REVESTIDORES //

dibujarLineaPapel("black", margen, alto_canvas-medio_margen, margen+30, alto_canvas-medio_margen);
papel.font = '10px "Tahoma"';
papel.fillStyle = "black";
papel.fillText("Línea de Diseño", margen+35, (alto_canvas-medio_margen)+3);

dibujarLineaSeleccionPapel("green", margen+160, alto_canvas-medio_margen, margen+200, alto_canvas-medio_margen);
papel.fillText("Línea de Revestidor", margen+205, (alto_canvas-medio_margen)+3);

dibujarLineaSeleccionPapel("red", margen+160, alto_canvas-medio_margen/2, margen+200, alto_canvas-medio_margen/2);
papel.fillText("Línea de Rev. Corregida", margen+205, (alto_canvas-medio_margen/2)+3);


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

// LEYENDA DEL EJE Y (ROTADA) //
var x = margen-30; // COORDENADA X DONDE ESTARÁ EL TEXTO ROTADO //
var y = alto_canvas/2; // COORDENADA Y DONDE ESTARÁ EL TEXTO ROTADO //
papel.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
papel.translate(x,y); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
papel.rotate(-Math.PI / 2); // ESTABLECER EL ÁNGULO DE INCLINACIÓN DEL TEXTO (-90º) //
papel.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
papel.font = '14px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
papel.fillText("Profundidad (pies)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
papel.restore(); // REGRESAR EL CANVAS A SU ESTADO ORIGINAL, ANTES DE GRABARLO CON papel.save() //


// EJE X LEYENDA //

var x = ancho_canvas/2; // COORDENADA X DONDE ESTARÁ EL TEXTO //
var y = margen-30; // COORDENADA Y DONDE ESTARÁ EL TEXTO //
papel.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
papel.translate(x,y); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
papel.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
papel.font = '14px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
papel.fillText("Presión (lpc.)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
papel.restore();


// FUNCIÓN QUE CAPTURA EL CANVAS SIN LA LÍNEA DE DISEÑO //
function imageSinLineaDiseno()
{
	ImageData = papel.getImageData(0, 0, ancho_canvas, alto_canvas);
}

// FUNCIÓN QUE ELIMINA LA LÍNEA DE DISEÑO, SUPERPONIENDO SOBRE EL CANVAS LA IMAGEN CAPTURADA ANTERIORMENTE //

function borrarLinea ()
{
	papel.putImageData(ImageData, 0, 0);
}

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML //
var boton_borrar_diseno = document.getElementById("boton_borrar_diseno");
boton_borrar_diseno.addEventListener("click", borrarLinea);


// AÑADIR EL EVENTO DE CALCULAR TABLA DE DISEÑO AL BOTÓN DE HTML //

var boton_tabla = document.getElementById("calculo_tabla_diseno");
boton_tabla.addEventListener("click", calcularTabla);

// AÑADIR EL EVENTO DE MOSTRAR LÍNEA DE DISEÑO AL BOTÓN DE HTML //
var boton = document.getElementById("boton_diseno");
boton.addEventListener("click", disenoConductorEstallido);
boton.addEventListener("mouseup", imageSinLineaDiseno); // EVENTO PARA CAPTURAR IMAGEN DEL CANVAS SIN LA LÍNEA DE DISEÑO //


// ANÁLISIS DEL REVESTIDOR POR ESTALLIDO //

// FUNCIÓN PARA REALIZAR EL CÁLCULO DE DISEÑO //
function calcularTabla()
{
	// a) Máxima carga de estallido: Prueba de Presión de la sarta de tubería de revestimiento cementada. //

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


// FUNCIÓN PARA GRAFICAR EL ANÁLISIS //

function disenoConductorEstallido()
{
	
	// Medidas del gráfico //

	var max_prof = document.getElementById("max_prof_graf").value;
	var max_presion = document.getElementById("max_pres_graf").value;

	var factorX = ancho / max_presion;
	var factorY = alto / max_prof;


	// LÍNEAS TRANSPARENTES DENTRO DEL GRÁFICO //
	// EJE Y //
	if(max_prof <= 2000)
	{
		for(a = 50; a <= max_prof; a = a+50) // Línea cada 50 pies //
		{
			dibujarLineaTrans(margen, a*factorY + margen, ancho + margen, a*factorY + margen);
		}
	}

	else if(max_prof > 2000 && max_prof <= 8000)
	{
		for(a = 250; a <= max_prof; a = a+250) // Línea cada 50 pies //
		{
			dibujarLineaTrans(margen, a*factorY + margen, ancho + margen, a*factorY + margen);
		}
	}
	else
	{
		for(a = 500; a <= max_prof; a = a+500) // Línea cada 50 pies //
		{
			dibujarLineaTrans(margen, a*factorY + margen, ancho + margen, a*factorY + margen);
		}
	}
	

	// EJE X //
	if(max_presion <= 2000)
	{
		for(a = 100; a <= max_presion; a = a+100) // Línea cada 100 lpc //
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}
	else if(max_presion > 2000 && max_presion <= 8000)
	{
		for(a = 200; a <= max_presion; a = a+200) // Línea cada 100 lpc //
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}
	else
	{
		for(a = 1000; a <= max_presion; a = a+1000) // Línea cada 100 lpc //
		{
			dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto + margen);
		}
	}
	

	// EJES DE COORDENADAS A ESCALA //

	// EJE Y - GUIONES //

	if(max_prof <= 2000)
	{
		for(a = 50; a <= max_prof; a = a+50) // Guión cada 50 pies //
		{
			if(a % 100 == 0)
			{
				dibujarLineaPapel("blue", margen-4, (a*factorY)+margen, margen+4, (a*factorY)+margen); // Guiones largos para múltiplos de 100 //
				
			}
			else
			{
				dibujarLineaPapel("blue", margen-2, (a*factorY)+margen, margen+2, (a*factorY)+margen); // Guiones cortos para los demás valores //
			}
			
		}
	}
	else
	{
		for(a = 500; a <= max_prof; a = a+500) // Guión cada 50 pies //
		{
			if(a % 1000 == 0)
			{
				dibujarLineaPapel("blue", margen-4, (a*factorY)+margen, margen+4, (a*factorY)+margen); // Guiones largos para múltiplos de 100 //
				
			}
			else
			{
				dibujarLineaPapel("blue", margen-2, (a*factorY)+margen, margen+2, (a*factorY)+margen); // Guiones cortos para los demás valores //
			}
			
		}
	}

	
	// EJE Y - VALORES //
	
	papel.fillStyle = "black";
	papel.textAlign ="right";

	papel.fillText(0, margen-6, margen-10); // Número cero (0)//

	if(max_prof <= 2000)
	{
	
		for(a = 100; a <= max_prof; a = a+100)
		{
			papel.font = '8px "Tahoma"';
			papel.fillText(a, margen-6, (a*factorY+3)+margen);
		}
	}
	else if(max_prof > 2000 && max_prof <= 8000)
	{
		
		for(a = 500; a <= max_prof; a = a+500)
		{
			papel.font = '8px "Tahoma"';
			papel.fillText(a, margen-6, (a*factorY+3)+margen);
		}
	}
	else
	{
		
		for(a = 1000; a <= max_prof; a = a+1000)
		{
			papel.font = '7px "Tahoma"';
			papel.fillText(a, margen-6, (a*factorY+3)+margen);
		}
	}
	


	// EJE X - GUIONES //
	if(max_presion <= 2000)
	{
		for(a = 100; a <= max_presion; a = a+100)
		{
			if(a % 500 == 0)
			{
				dibujarLineaPapel("blue", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500 //
			}
			else
			{
				dibujarLineaPapel("blue", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores //
			}
			
		}
	}
	else if(max_presion > 2000 && max_presion <= 10000)
	{
		for(a = 200; a <= max_presion; a = a+200)
		{
			if(a % 1000 == 0)
			{
				dibujarLineaPapel("blue", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500 //
			}
			else
			{
				dibujarLineaPapel("blue", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores //
			}
			
		}
	}
	else
	{
		for(a = 1000; a <= max_presion; a = a+1000)
		{
			if(a % 2000 == 0)
			{
				dibujarLineaPapel("blue", (a*factorX)+margen, margen-4, (a*factorX)+margen, margen+4); // Guiones largos para valores múltiplos de 500 //
			}
			else
			{
				dibujarLineaPapel("blue", (a*factorX)+margen, margen-2, (a*factorX)+margen, margen+2); // Guiones cortos para los demás valores //
			}
			
		}
	}
	


	// EJE X - VALORES //
	papel.fillStyle = "black";
	papel.textAlign ="center";
	
	if(max_presion <= 1000)
	{
		papel.font = '10px "Tahoma"';
		for(a = 100; a <= max_presion; a = a+100)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	if(max_presion > 1000 && max_presion <= 2000)
	{
		papel.font = '10px "Tahoma"';
		for(a = 500; a <= max_presion; a = a+500)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else if(max_presion > 2000 && max_presion <=10000)
	{
		papel.font = '10px "Tahoma"';
		for(a = 1000; a <= max_presion; a = a+1000)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	else
	{
		papel.font = '9px "Tahoma"';
		for(a = 2000; a <= max_presion; a = a+2000)
		{
			papel.fillText(a, (a*factorX)+margen, margen-10);
		}
	}
	
	// GRAFICAR LÍNEA DE DISEÑO //
	var presionSuperfTablaE = document.getElementById("presionSuperfTablaE");
	var pres_D_sup_cond = presionSuperfTablaE.innerHTML;

	var profSuperfTablaE = document.getElementById("profSuperfTablaE");
	var prof1_cond = profSuperfTablaE.innerHTML;

	var presionFondoTablaE = document.getElementById("presionFondoTablaE");
	var pres_D_fondo_cond = presionFondoTablaE.innerHTML;

	var profFondoTablaE = document.getElementById("profFondoTablaE");
	var prof_asent_cond = profFondoTablaE.innerHTML;


	dibujarLineaPapel("black", (pres_D_sup_cond* factorX)+margen, (prof1_cond* factorY)+margen, (pres_D_fondo_cond* factorX)+margen, (prof_asent_cond* factorY)+margen);


	// GRAFICAR LA LÍNEA DEL REVESTIDOR SELECCIONADO //

	var presion_estallido_cond = Number(document.getElementById("PE_rev_cond").value);

	dibujarLineaSeleccionPapel("green", (presion_estallido_cond*factorX)+margen, (prof1_cond*factorY)+margen, (presion_estallido_cond*factorX)+margen, (prof_asent_cond*factorY)+margen);
}


// FUNCIÓN PARA DIBUJAR LÍNEAS PUNTEADAS (2 PUNTOS) DEL REVESTIDOR SELECCIONADO //

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

