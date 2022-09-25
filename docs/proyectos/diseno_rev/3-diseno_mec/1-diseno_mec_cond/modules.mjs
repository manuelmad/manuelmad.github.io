// GENERAL

var boton_limpiar = document.getElementById("boton_limpiar_campos");
boton_limpiar.addEventListener("click", limpiarCampos);

function limpiarCampos() {
	location.reload();
}

// ESTALLIDO //

import {calcularTablaE} from "./diseno-mec-cond-estallido.mjs";
import {borrarLinea} from "./diseno-mec-cond-estallido.mjs";
import {disenoConductorEstallido} from "./diseno-mec-cond-estallido.mjs";
import {mostrarOcultarEC} from "./diseno-mec-cond-estallido.mjs";

// AÑADIR EL EVENTO DE CALCULAR TABLA DE DISEÑO AL BOTÓN DE HTML //
var boton_tabla = document.getElementById("calculo_tabla_diseno");
boton_tabla.addEventListener("click", calcularTablaE);

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL BOTÓN DE HTML //
var boton_borrar_diseno = document.getElementById("boton_borrar_diseno");
boton_borrar_diseno.addEventListener("click", borrarLinea);

// AÑADIR EL EVENTO DE MOSTRAR LÍNEAS DE DISEÑO Y REVESTIDOR AL BOTÓN DE HTML //
var boton = document.getElementById("boton_diseno");
boton.addEventListener("click", disenoConductorEstallido);

// MOSTRAR Y OCULTAR A PLACER LA TABLA DE RESISTENCIA AL ESTALLIDO CORREGIDA //
var mostrar_ocultar_EC = document.getElementById("mostrar_ocultar_EC");
mostrar_ocultar_EC.addEventListener("click", mostrarOcultarEC);


// COLAPSO

import {calcularTablaC} from "./diseno-mec-cond-colapso.mjs";
import {borrarLineaC} from "./diseno-mec-cond-colapso.mjs";
import {ocultarAvisosFallaColapso} from "./diseno-mec-cond-colapso.mjs";
import {graficarColapso} from "./diseno-mec-cond-colapso.mjs";
import {mostrarOcultarCC} from "./diseno-mec-cond-colapso.mjs";


// AÑADIR EL EVENTO DE CALCULAR TABLA GRAFICAR AL BOTÓN DE HTML //
var boton_tablaC = document.getElementById("boton_tablaC");
boton_tablaC.addEventListener("click", calcularTablaC);

// AÑADIR EL EVENTO DE GRAFICAR LÍNEAS AL BOTÓN DE HTML //
var boton_grafica_colapso = document.getElementById("boton_grafica_colapso");
boton_grafica_colapso.addEventListener("click", graficarColapso);

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML //
var boton_borrar_disenoC = document.getElementById("boton_borrar_disenoC");
boton_borrar_disenoC.addEventListener("click", borrarLineaC);
boton_borrar_disenoC.addEventListener("click", ocultarAvisosFallaColapso); // Que el botón también borre los avisos

// MOSTRAR Y OCULTAR A PLACER LA TABLA DE RESISTENCIA AL COLAPSO CORREGIDA //
var mostrar_ocultar_CC = document.getElementById("mostrar_ocultar_CC");
mostrar_ocultar_CC.addEventListener("click", mostrarOcultarCC);


// TENSIÓN

import {disenoConductorTension} from "./diseno-mec-cond-tension.mjs";
import {borrarLineaT} from "./diseno-mec-cond-tension.mjs";
import {ocultarAvisosFallaTension} from "./diseno-mec-cond-tension.mjs";
import {graficaTensionyBiaxial} from "./diseno-mec-cond-tension.mjs";
import {graficaBiaxial} from "./diseno-mec-cond-tension.mjs";
import {borrarBiaxial} from "./diseno-mec-cond-tension.mjs";

// AÑADIR EL EVENTO DE REALIZAR CÁLCULOS Y LLENAR TABLAS AL BOTÓN DE HTML //
var boton5 = document.getElementById("boton_disenoT");
boton5.addEventListener("click", disenoConductorTension);

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML //
var boton_borrar_disenoT = document.getElementById("boton_borrar_disenoT");
boton_borrar_disenoT.addEventListener("click", borrarLineaT);
boton_borrar_disenoT.addEventListener("click", ocultarAvisosFallaTension);

// AÑADIR EL EVENTO DE MOSTRAR LÍNEA DE DISEÑO AL BOTÓN DE HTML //
var grafica_tension_biaxial = document.getElementById("grafica_tension_biaxial");
grafica_tension_biaxial.addEventListener("click", graficaTensionyBiaxial);

// EVENTO PARA EL BOTÓN DE GRÁFICA ELIPSE Y CORREGIGAS
var graficas_biaxial = document.getElementById("graficas_biaxial");
graficas_biaxial.addEventListener('click', graficaBiaxial);

// EVENTO PARA BORRAR ELIPSE Y GRAFICAS CORREGIGAS
var borrar_biaxial = document.getElementById("borrar_biaxial");
borrar_biaxial.addEventListener("click", borrarBiaxial);


// FACTORES DE DISEÑO

// import {mostrarOcultarSFD} from "./diseno-mec-cond-fd.mjs";
import {calculoFactores} from "./diseno-mec-cond-fd.mjs";

// MOSTRAR Y OCULTAR A PLACER LA SECCIÓN DE FACTORES DE DISEÑO //
// var mostrar_ocultar_SFD = document.getElementById("mostrar_ocultar_SFD");
// mostrar_ocultar_SFD.addEventListener("click", mostrarOcultarSFD);

var boton_FD = document.getElementById("botonFD"); // ACCESO AL BOTÓN DE CÁLCULO DE FACTORES DE DISEÑO //
boton_FD.addEventListener("click", calculoFactores); // OTORGO AL BOTÓN EL EVENTO DE EFECTUAR LA FUNCION calculoFactores AL DARLE CLICK //