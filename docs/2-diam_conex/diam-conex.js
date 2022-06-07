// Para continuar con la manipulación dle grupo de radios https://desarrolloweb.com/articulos/1006.php

/*************** PRIMER REVESTIDOR **************/

// FUNCIONES PARA MANIPULAR LOS INPUT RADIOS
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

var denZap = document.getElementById("den-zap");

var inclinacionHoyo = document.getElementById("inclinacion-hoyo");

var DLSHoyo = document.getElementById("DLS-hoyo");

var boton_recomendar_conexion = document.getElementById("recomendar-conexion");
boton_recomendar_conexion.addEventListener("click", recomendarConexion);

var diametros_revestidores = document.diametrosRevestidores.rev1; //Crea un array con los inputs radio (revestidor) que están dentro de la form
var longitud_array_rev = diametros_revestidores.length;

var diametros_hoyo = document.diametrosHoyo.hoyo1; //Crea un array con los inputs radio (hoyo) que están dentro de la form
var longitud_array_hoyo = diametros_hoyo.length;

var tipo_revestimiento = document.tipoRevestimiento.tipo1; //Crea un array con los inputs radio (tipo) que están dentro de la form
var longitud_array_tipo = tipo_revestimiento.length;

function recomendarConexion() {
    var diam_rev;
    var diam_hoyo;
    var holgura;
    var tipo_rev;

    var prof_asent = Number(profAsent.value);
    var den_zap = Number(denZap.value);
    var inclinacion_hoyo = Number(inclinacionHoyo.value);
    var DLS_hoyo = Number(DLSHoyo.value);

    for(i=0; i < longitud_array_rev; i++) {
        if(diametros_revestidores[i].checked == true) {
            break;
        }
    }
    var diam_rev = Number(diametros_revestidores[i].value);
    console.log("El diámetro del revestidor es " + diam_rev + " pulg.");

    for(j=0; j < longitud_array_hoyo; j++) {
        if(diametros_hoyo[j].checked == true) {
            break;
        }
    }
    var diam_hoyo = Number(diametros_hoyo[j].value);
    console.log("El diámetro del hoyo es " + diam_hoyo + " pulg.");

    for(k=0; k < longitud_array_tipo; k++) {
        if(tipo_revestimiento[k].checked == true) {
            break;
        }
    }
    var tipo_rev = tipo_revestimiento[k].value;
    console.log("El tipo de revestimiento es " + tipo_rev + ".");

    holgura = (diam_hoyo-diam_rev)/2;
    console.log("La holgura entre hoyo y revestidor es " + holgura + " pulg.");

    if(inclinacion_hoyo > 45 || holgura < 0.75) {
        if(tipo_rev == "Camisa") {
            var lista = document.getElementById("conexionlinea1");
            for(l = lista.options.length; l >= 0; l--) {
                lista.remove(l);
            }
            var option1 = document.createElement("option");
            option1.text = "STL";
            var option2 = document.createElement("option");
            option2.text = "511";
            lista.appendChild(option1);
            lista.appendChild(option2);
            console.log("Las conexiones recomendadas son STL y 511");
            console.log("La máxima inclinación del hoyo es: " + inclinacion_hoyo);
        }
        else {
            var lista = document.getElementById("conexionlinea1");
            for(l = lista.options.length; l >= 0; l--) {
                lista.remove(l);
            }
            var option1 = document.createElement("option");
            option1.text = "SLX";
            var option2 = document.createElement("option");
            option2.text = "NJO";
            lista.appendChild(option1);
            lista.appendChild(option2);
            console.log("Las conexiones recomendadas son SLX y NJO");
            console.log("La máxima inclinación del hoyo es: " + inclinacion_hoyo);
        }
    }
    else {
        var presion = 0.052*den_zap*prof_asent;
        console.log("La presión en fondo es: " + presion + " lpc.");
        if(presion > 5000 || DLS_hoyo > 10) {
            var lista = document.getElementById("conexionlinea1");
            for(l = lista.options.length; l >= 0; l--) {
                lista.remove(l);
            }
            var option1 = document.createElement("option");
            option1.text = "NK35B";
            var option2 = document.createElement("option");
            option2.text = "TC-II";
            lista.appendChild(option1);
            lista.appendChild(option2);
            console.log("Las conexiones recomendadas son NK35B y TC-II");
            console.log("La máxima DLS del hoyo es: " + DLS_hoyo);
        }
        else {
            var lista = document.getElementById("conexionlinea1");
            for(l = lista.options.length; l >= 0; l--) {
                lista.remove(l);
            }
            var option1 = document.createElement("option");
            option1.text = "Buttress";
            lista.appendChild(option1);
            console.log("Las conexión recomendada es Buttress");
            console.log("La máxima DLS del hoyo es: " + DLS_hoyo);
        }
    }
}

/************ SEGUNDO REVESTIDOR *************/

// FUNCIONES PARA MANIPULAR LOS INPUT RADIOS
function hoyoRevestido_5() {
    hoyo1Linea4.disabled = false;
    hoyo2Linea4.disabled = false;
    hoyo3Linea4.disabled = true;
    hoyo4Linea4.disabled = true;
    hoyo5Linea4.disabled = true;
    hoyo6Linea4.disabled = true;
}

function hoyoRevestido_6() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = false;
    hoyo3Linea4.disabled = false;
    hoyo4Linea4.disabled = true;
    hoyo5Linea4.disabled = true;
    hoyo6Linea4.disabled = true;
}

function hoyoRevestido_7() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = false;
    hoyo3Linea4.disabled = false;
    hoyo4Linea4.disabled = false;
    hoyo5Linea4.disabled = true;
    hoyo6Linea4.disabled = true;
}

function hoyoRevestido_8() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = false;
    hoyo3Linea4.disabled = false;
    hoyo4Linea4.disabled = false;
    hoyo5Linea4.disabled = true;
    hoyo6Linea4.disabled = true;
}

function hoyoRevestido_9() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = true;
    hoyo3Linea4.disabled = true;
    hoyo4Linea4.disabled = false;
    hoyo5Linea4.disabled = false;
    hoyo6Linea4.disabled = true;
}

function hoyoRevestido_10() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = true;
    hoyo3Linea4.disabled = true;
    hoyo4Linea4.disabled = true;
    hoyo5Linea4.disabled = false;
    hoyo6Linea4.disabled = false;
}

// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
var rev1Linea3 = document.getElementById("rev1-linea3");
rev1Linea3.addEventListener("click", hoyoRevestido_5);

var rev2Linea3 = document.getElementById("rev2-linea3");
rev2Linea3.addEventListener("click", hoyoRevestido_6);

var rev3Linea3 = document.getElementById("rev3-linea3");
rev3Linea3.addEventListener("click", hoyoRevestido_7);

var rev4Linea3 = document.getElementById("rev4-linea3");
rev4Linea3.addEventListener("click", hoyoRevestido_8);

var rev5Linea3 = document.getElementById("rev5-linea3");
rev5Linea3.addEventListener("click", hoyoRevestido_9);

var rev6Linea3 = document.getElementById("rev6-linea3");
rev6Linea3.addEventListener("click", hoyoRevestido_10);


var hoyo1Linea4 = document.getElementById("hoyo1-linea4");
var hoyo2Linea4 = document.getElementById("hoyo2-linea4");
var hoyo3Linea4 = document.getElementById("hoyo3-linea4");
var hoyo4Linea4 = document.getElementById("hoyo4-linea4");
var hoyo5Linea4 = document.getElementById("hoyo5-linea4");
var hoyo6Linea4 = document.getElementById("hoyo6-linea4");

// CÓDIGO PARA SELECCIONAR CONEXIÓN

// VARIABLES PARA SELECCIONAR CONEXIÓN
var profAsent2 = document.getElementById("prof-asent2");

var denZap2 = document.getElementById("den-zap2");

var inclinacionHoyo2 = document.getElementById("inclinacion-hoyo2");

var DLSHoyo2 = document.getElementById("DLS-hoyo2");

var boton_recomendar_conexion2 = document.getElementById("recomendar-conexion2");
boton_recomendar_conexion2.addEventListener("click", recomendarConexion2);

var diametros_revestidores2 = document.diametrosRevestidores2.rev2; //Crea un array con los inputs radio (revestidor) que están dentro de la form
var longitud_array_rev2 = diametros_revestidores2.length;

var diametros_hoyo2 = document.diametrosHoyo2.hoyo2; //Crea un array con los inputs radio (hoyo) que están dentro de la form
var longitud_array_hoyo2 = diametros_hoyo2.length;

var tipo_revestimiento2 = document.tipoRevestimiento2.tipo2; //Crea un array con los inputs radio (tipo) que están dentro de la form
var longitud_array_tipo2 = tipo_revestimiento2.length;

function recomendarConexion2() {
    var diam_rev;
    var diam_hoyo;
    var holgura;
    var tipo_rev;

    var prof_asent = Number(profAsent2.value);
    var den_zap = Number(denZap2.value);
    var inclinacion_hoyo = Number(inclinacionHoyo2.value);
    var DLS_hoyo = Number(DLSHoyo2.value);

    for(i=0; i < longitud_array_rev2; i++) {
        if(diametros_revestidores2[i].checked == true) {
            break;
        }
    }
    var diam_rev = Number(diametros_revestidores2[i].value);
    console.log("El diámetro del revestidor es " + diam_rev + " pulg.");

    for(j=0; j < longitud_array_hoyo2; j++) {
        if(diametros_hoyo2[j].checked == true) {
            break;
        }
    }
    var diam_hoyo = Number(diametros_hoyo2[j].value);
    console.log("El diámetro del hoyo es " + diam_hoyo + " pulg.");

    for(k=0; k < longitud_array_tipo2; k++) {
        if(tipo_revestimiento2[k].checked == true) {
            break;
        }
    }
    var tipo_rev = tipo_revestimiento2[k].value;
    console.log("El tipo de revestimiento es " + tipo_rev + ".");

    holgura = (diam_hoyo-diam_rev)/2;
    console.log("La holgura entre hoyo y revestidor es " + holgura + " pulg.");

    if(inclinacion_hoyo > 45 || holgura < 0.75) {
        if(tipo_rev == "Camisa") {
            var lista = document.getElementById("conexionlinea2");
            for(l = lista.options.length; l >= 0; l--) {
                lista.remove(l);
            }
            var option1 = document.createElement("option");
            option1.text = "STL";
            var option2 = document.createElement("option");
            option2.text = "511";
            lista.appendChild(option1);
            lista.appendChild(option2);
            console.log("Las conexiones recomendadas son STL y 511");
            console.log("La máxima inclinación del hoyo es: " + inclinacion_hoyo);
        }
        else {
            var lista = document.getElementById("conexionlinea2");
            for(l = lista.options.length; l >= 0; l--) {
                lista.remove(l);
            }
            var option1 = document.createElement("option");
            option1.text = "SLX";
            var option2 = document.createElement("option");
            option2.text = "NJO";
            lista.appendChild(option1);
            lista.appendChild(option2);
            console.log("Las conexiones recomendadas son SLX y NJO");
            console.log("La máxima inclinación del hoyo es: " + inclinacion_hoyo);
        }
    }
    else {
        var presion = 0.052*den_zap*prof_asent;
        console.log("La presión en fondo es: " + presion + " lpc.");
        if(presion > 5000 || DLS_hoyo > 10) {
            var lista = document.getElementById("conexionlinea2");
            for(l = lista.options.length; l >= 0; l--) {
                lista.remove(l);
            }
            var option1 = document.createElement("option");
            option1.text = "NK35B";
            var option2 = document.createElement("option");
            option2.text = "TC-II";
            lista.appendChild(option1);
            lista.appendChild(option2);
            console.log("Las conexiones recomendadas son NK35B y TC-II");
            console.log("La máxima DLS del hoyo es: " + DLS_hoyo);
        }
        else {
            var lista = document.getElementById("conexionlinea2");
            for(l = lista.options.length; l >= 0; l--) {
                lista.remove(l);
            }
            var option1 = document.createElement("option");
            option1.text = "Buttress";
            lista.appendChild(option1);
            console.log("Las conexión recomendada es Buttress");
            console.log("La máxima DLS del hoyo es: " + DLS_hoyo);
        }
    }
}