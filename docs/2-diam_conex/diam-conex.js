/*************** PRIMER REVESTIDOR **************/

// FUNCIONES ARA MANIPULAR LOS INPUT RADIOS
function hoyoRevestido() {
    hoyo1Linea2.disabled = false;
    hoyo2Linea2.disabled = false;
    hoyo3Linea2.disabled = true;
    hoyo4Linea2.disabled = true;
    hoyo5Linea2.disabled = true;
}

function hoyoRevestido_2() {
    hoyo1Linea2.disabled = true;
    hoyo2Linea2.disabled = false;
    hoyo3Linea2.disabled = false;
    hoyo4Linea2.disabled = true;
    hoyo5Linea2.disabled = true;
}

function hoyoRevestido_3() {
    hoyo1Linea2.disabled = true;
    hoyo2Linea2.disabled = true;
    hoyo3Linea2.disabled = false;
    hoyo4Linea2.disabled = false;
    hoyo5Linea2.disabled = true;
}

function hoyoRevestido_4() {
    hoyo1Linea2.disabled = true;
    hoyo2Linea2.disabled = true;
    hoyo3Linea2.disabled = true;
    hoyo4Linea2.disabled = false;
    hoyo5Linea2.disabled = false;
}

// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
var rev1Linea1 = document.getElementById("rev1-linea1");
rev1Linea1.addEventListener("click", hoyoRevestido);

var rev2Linea1 = document.getElementById("rev2-linea1");
rev2Linea1.addEventListener("click", hoyoRevestido_2);

var rev3Linea1 = document.getElementById("rev3-linea1");
rev3Linea1.addEventListener("click", hoyoRevestido_3);

var rev4Linea1 = document.getElementById("rev4-linea1");
rev4Linea1.addEventListener("click", hoyoRevestido_4);

var hoyo1Linea2 = document.getElementById("hoyo1-linea2");
var hoyo2Linea2 = document.getElementById("hoyo2-linea2");
var hoyo3Linea2 = document.getElementById("hoyo3-linea2");
var hoyo4Linea2 = document.getElementById("hoyo4-linea2");
var hoyo5Linea2 = document.getElementById("hoyo5-linea2");

// CÓDIGO PARA SELECCIONAR CONEXIÓN

// VARIABLES PARA SELECCIONAR CONEXIÓN
var profAsent = document.getElementById("prof-asent");
var prof_asent = Number(profAsent.value);

var denZap = document.getElementById("den-zap");
var den_zap = Number(denZap.value);

var inclinacionHoyo = document.getElementById("inclinacion-hoyo");
var inclinacion_hoyo = Number(inclinacionHoyo.value);

var DLSHoyo = document.getElementById("DLS-hoyo");
var DLS_hoyo = Number(DLSHoyo.value);

var tipoRevestidor = document.getElementById("tipo-revestidor");
var tipoCamisa = document.getElementById("tipo-camisa");

var tipoSarta;
if(tipoRevestidor.checked == true) {
    tipoSarta = "Revestidor";
    console.log("El revestidor va hasta superficie");
}
else if(tipoCamisa.checked == true) {
    tipoSarta = "Camisa";
    console.log("El revestidor es camisa colgada");
}

var boton_recomendar_conexion = document.getElementById("recomendar-conexion");
// boton_recomendar_conexion.addEventListener("click", recomendarConexion);

var diametrosRevestidores = document.diametrosRevestidores.rev1;
var longitud_array = diametrosRevestidores.length;
console.log(diametrosRevestidores, longitud_array);
// PAra continuar con la manipulación dle grupo de radios https://desarrolloweb.com/articulos/1006.php

// function recomendarConexion() {
//     if()
// }

/************ SEGUNDO REVESTIDOR *************/




