// ESTALLIDO //

import {mostrarOcultarEC} from "./diseno-mec-cond.mjs";
import {calcularTablaE} from "./diseno-mec-cond.mjs";
import {borrarLinea} from "./diseno-mec-cond.mjs";
import {disenoConductorEstallido} from "./diseno-mec-cond.mjs";

// MOSTRAR Y OCULTAR A PLACER LA TABLA DE RESISTENCIA AL ESTALLIDO CORREGIDA //
var mostrar_ocultar_EC = document.getElementById("mostrar_ocultar_EC");
mostrar_ocultar_EC.addEventListener("click", mostrarOcultarEC);

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL BOTÓN DE HTML //
var boton_borrar_diseno = document.getElementById("boton_borrar_diseno");
boton_borrar_diseno.addEventListener("click", borrarLinea);

// AÑADIR EL EVENTO DE CALCULAR TABLA DE DISEÑO AL BOTÓN DE HTML //
var boton_tabla = document.getElementById("calculo_tabla_diseno");
boton_tabla.addEventListener("click", calcularTablaE);

// AÑADIR EL EVENTO DE MOSTRAR LÍNEAS DE DISEÑO Y REVESTIDOR AL BOTÓN DE HTML //
var boton = document.getElementById("boton_diseno");
boton.addEventListener("click", disenoConductorEstallido);