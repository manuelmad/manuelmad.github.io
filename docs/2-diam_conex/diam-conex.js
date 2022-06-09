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

/************ TERCER REVESTIDOR *************/

// FUNCIONES PARA MANIPULAR LOS INPUT RADIOS
function hoyoRevestido_11() {
    hoyo1Linea6.disabled = false;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = true;
    hoyo4Linea6.disabled = true;
}

function hoyoRevestido_12() {
    hoyo1Linea6.disabled = false;
    hoyo2Linea6.disabled = false;
    hoyo3Linea6.disabled = true;
    hoyo4Linea6.disabled = true;
}

function hoyoRevestido_13() {
    hoyo1Linea6.disabled = false;
    hoyo2Linea6.disabled = false;
    hoyo3Linea6.disabled = true;
    hoyo4Linea6.disabled = true;
}

function hoyoRevestido_14() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = false;
    hoyo3Linea6.disabled = false;
    hoyo4Linea6.disabled = true;
}

function hoyoRevestido_15() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = false;
    hoyo4Linea6.disabled = true;
}

function hoyoRevestido_16() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = false;
    hoyo4Linea6.disabled = true;
}

function hoyoRevestido_17() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = false;
    hoyo4Linea6.disabled = false;
}

function hoyoRevestido_18() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = false;
    hoyo4Linea6.disabled = false;
}

// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
var rev1Linea5 = document.getElementById("rev1-linea5");
rev1Linea5.addEventListener("click", hoyoRevestido_11);

var rev2Linea5 = document.getElementById("rev2-linea5");
rev2Linea5.addEventListener("click", hoyoRevestido_12);

var rev3Linea5 = document.getElementById("rev3-linea5");
rev3Linea5.addEventListener("click", hoyoRevestido_13);

var rev4Linea5 = document.getElementById("rev4-linea5");
rev4Linea5.addEventListener("click", hoyoRevestido_14);

var rev5Linea5 = document.getElementById("rev5-linea5");
rev5Linea5.addEventListener("click", hoyoRevestido_15);

var rev6Linea5 = document.getElementById("rev6-linea5");
rev6Linea5.addEventListener("click", hoyoRevestido_16);

var rev7Linea5 = document.getElementById("rev7-linea5");
rev7Linea5.addEventListener("click", hoyoRevestido_17);

var rev8Linea5 = document.getElementById("rev8-linea5");
rev8Linea5.addEventListener("click", hoyoRevestido_18);


var hoyo1Linea6 = document.getElementById("hoyo1-linea6");
var hoyo2Linea6 = document.getElementById("hoyo2-linea6");
var hoyo3Linea6 = document.getElementById("hoyo3-linea6");
var hoyo4Linea6 = document.getElementById("hoyo4-linea6");


// CÓDIGO PARA SELECCIONAR CONEXIÓN

// VARIABLES PARA SELECCIONAR CONEXIÓN
var profAsent3 = document.getElementById("prof-asent3");

var denZap3 = document.getElementById("den-zap3");

var inclinacionHoyo3 = document.getElementById("inclinacion-hoyo3");

var DLSHoyo3 = document.getElementById("DLS-hoyo3");

var boton_recomendar_conexion3 = document.getElementById("recomendar-conexion3");
boton_recomendar_conexion3.addEventListener("click", recomendarConexion3);

var diametros_revestidores3 = document.diametrosRevestidores3.rev3; //Crea un array con los inputs radio (revestidor) que están dentro de la form
var longitud_array_rev3 = diametros_revestidores3.length;

var diametros_hoyo3 = document.diametrosHoyo3.hoyo3; //Crea un array con los inputs radio (hoyo) que están dentro de la form
var longitud_array_hoyo3 = diametros_hoyo3.length;

var tipo_revestimiento3 = document.tipoRevestimiento3.tipo3; //Crea un array con los inputs radio (tipo) que están dentro de la form
var longitud_array_tipo3 = tipo_revestimiento3.length;

function recomendarConexion3() {
    var diam_rev;
    var diam_hoyo;
    var holgura;
    var tipo_rev;

    var prof_asent = Number(profAsent3.value);
    var den_zap = Number(denZap3.value);
    var inclinacion_hoyo = Number(inclinacionHoyo3.value);
    var DLS_hoyo = Number(DLSHoyo3.value);

    for(i=0; i < longitud_array_rev3; i++) {
        if(diametros_revestidores3[i].checked == true) {
            break;
        }
    }
    var diam_rev = Number(diametros_revestidores3[i].value);
    console.log("El diámetro del revestidor es " + diam_rev + " pulg.");

    for(j=0; j < longitud_array_hoyo3; j++) {
        if(diametros_hoyo3[j].checked == true) {
            break;
        }
    }
    var diam_hoyo = Number(diametros_hoyo3[j].value);
    console.log("El diámetro del hoyo es " + diam_hoyo + " pulg.");

    for(k=0; k < longitud_array_tipo3; k++) {
        if(tipo_revestimiento3[k].checked == true) {
            break;
        }
    }
    var tipo_rev = tipo_revestimiento3[k].value;
    console.log("El tipo de revestimiento es " + tipo_rev + ".");

    holgura = (diam_hoyo-diam_rev)/2;
    console.log("La holgura entre hoyo y revestidor es " + holgura + " pulg.");

    if(inclinacion_hoyo > 45 || holgura < 0.75) {
        if(tipo_rev == "Camisa") {
            var lista = document.getElementById("conexionlinea3");
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
            var lista = document.getElementById("conexionlinea3");
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
            var lista = document.getElementById("conexionlinea3");
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
            var lista = document.getElementById("conexionlinea3");
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

/************ CUARTO REVESTIDOR *************/

// FUNCIONES PARA MANIPULAR LOS INPUT RADIOS
function hoyoRevestido_19() {
    hoyo1Linea8.disabled = false;
    hoyo2Linea8.disabled = true;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = true;
}

function hoyoRevestido_20() {
    hoyo1Linea8.disabled = false;
    hoyo2Linea8.disabled = true;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = true;
}

function hoyoRevestido_21() {
    hoyo1Linea8.disabled = false;
    hoyo2Linea8.disabled = false;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = true;
}

function hoyoRevestido_22() {
    hoyo1Linea8.disabled = false;
    hoyo2Linea8.disabled = false;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = true;
}

function hoyoRevestido_23() {
    hoyo1Linea8.disabled = true;
    hoyo2Linea8.disabled = false;
    hoyo3Linea8.disabled = false;
    hoyo4Linea8.disabled = false;
}

function hoyoRevestido_24() {
    hoyo1Linea8.disabled = true;
    hoyo2Linea8.disabled = true;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = false;
}


// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
var rev1Linea7 = document.getElementById("rev1-linea7");
rev1Linea7.addEventListener("click", hoyoRevestido_19);

var rev2Linea7 = document.getElementById("rev2-linea7");
rev2Linea7.addEventListener("click", hoyoRevestido_20);

var rev3Linea7 = document.getElementById("rev3-linea7");
rev3Linea7.addEventListener("click", hoyoRevestido_21);

var rev4Linea7 = document.getElementById("rev4-linea7");
rev4Linea7.addEventListener("click", hoyoRevestido_22);

var rev5Linea7 = document.getElementById("rev5-linea7");
rev5Linea7.addEventListener("click", hoyoRevestido_23);

var rev6Linea7 = document.getElementById("rev6-linea7");
rev6Linea7.addEventListener("click", hoyoRevestido_24);

var hoyo1Linea8 = document.getElementById("hoyo1-linea8");
var hoyo2Linea8 = document.getElementById("hoyo2-linea8");
var hoyo3Linea8 = document.getElementById("hoyo3-linea8");
var hoyo4Linea8 = document.getElementById("hoyo4-linea8");


// CÓDIGO PARA SELECCIONAR CONEXIÓN

// VARIABLES PARA SELECCIONAR CONEXIÓN
var profAsent4 = document.getElementById("prof-asent4");

var denZap4 = document.getElementById("den-zap4");

var inclinacionHoyo4 = document.getElementById("inclinacion-hoyo4");

var DLSHoyo4 = document.getElementById("DLS-hoyo4");

var boton_recomendar_conexion4 = document.getElementById("recomendar-conexion4");
boton_recomendar_conexion4.addEventListener("click", recomendarConexion4);

var diametros_revestidores4 = document.diametrosRevestidores4.rev4; //Crea un array con los inputs radio (revestidor) que están dentro de la form
var longitud_array_rev4 = diametros_revestidores4.length;

var diametros_hoyo4 = document.diametrosHoyo4.hoyo4; //Crea un array con los inputs radio (hoyo) que están dentro de la form
var longitud_array_hoyo4 = diametros_hoyo4.length;

var tipo_revestimiento4 = document.tipoRevestimiento4.tipo4; //Crea un array con los inputs radio (tipo) que están dentro de la form
var longitud_array_tipo4 = tipo_revestimiento4.length;

function recomendarConexion4() {
    var diam_rev;
    var diam_hoyo;
    var holgura;
    var tipo_rev;

    var prof_asent = Number(profAsent4.value);
    var den_zap = Number(denZap4.value);
    var presion = 0.052*den_zap*prof_asent;
    var inclinacion_hoyo = Number(inclinacionHoyo4.value);
    var DLS_hoyo = Number(DLSHoyo4.value);

    for(i=0; i < longitud_array_rev4; i++) {
        if(diametros_revestidores4[i].checked == true) {
            break;
        }
    }
    var diam_rev = Number(diametros_revestidores4[i].value);
    console.log("El diámetro del revestidor es " + diam_rev + " pulg.");

    for(j=0; j < longitud_array_hoyo4; j++) {
        if(diametros_hoyo4[j].checked == true) {
            break;
        }
    }
    var diam_hoyo = Number(diametros_hoyo4[j].value);
    console.log("El diámetro del hoyo es " + diam_hoyo + " pulg.");

    for(k=0; k < longitud_array_tipo4; k++) {
        if(tipo_revestimiento4[k].checked == true) {
            break;
        }
    }
    var tipo_rev = tipo_revestimiento4[k].value;
    console.log("El tipo de revestimiento es " + tipo_rev + ".");

    holgura = (diam_hoyo-diam_rev)/2;
    console.log("La holgura entre hoyo y revestidor es " + holgura + " pulg.");
    if(diam_rev > 16) {
        console.log("La presión en fondo es: " + presion + " lpc.");
        if(prof_asent > 1000 || presion > 2000) {
            var lista = document.getElementById("conexionlinea4");
            for(m = lista.options.length; m >= 0; m--) {
                lista.remove(m);
            }
            var option1 = document.createElement("option");
            option1.text = "Big Omega";
            var option2 = document.createElement("option");
            option2.text = "BTB";
            lista.appendChild(option1);
            lista.appendChild(option2);
            console.log("Las conexiones recomendadas son Big Omega y BTB");
        }
        else {
            var lista = document.getElementById("conexionlinea4");
            for(m = lista.options.length; m >= 0; m--) {
                lista.remove(m);
            }
            var option1 = document.createElement("option");
            option1.text = "Buttress";
            lista.appendChild(option1);
            console.log("Las conexión recomendada es Buttress");
        }
    }
    else {
        if(inclinacion_hoyo > 45 || holgura < 0.75) {
            if(tipo_rev == "Camisa") {
                var lista = document.getElementById("conexionlinea4");
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
                var lista = document.getElementById("conexionlinea4");
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
            console.log("La presión en fondo es: " + presion + " lpc.");
            if(presion > 5000 || DLS_hoyo > 10) {
                var lista = document.getElementById("conexionlinea4");
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
                var lista = document.getElementById("conexionlinea4");
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
}


/************ QUINTO REVESTIDOR *************/

// FUNCIONES PARA MANIPULAR LOS INPUT RADIOS
function hoyoRevestido_25() {
    hoyo1Linea10.disabled = false;
    hoyo2Linea10.disabled = false;
    hoyo3Linea10.disabled = false;
    profAsent5.disabled = false;
    denZap5.disabled = false;
    inclinacionHoyo5.disabled = false;
    DLSHoyo5.disabled = false;
}

function hoyoRevestido_26() {
    hoyo1Linea10.disabled = true;
    hoyo2Linea10.disabled = true;
    hoyo3Linea10.disabled = false;
    profAsent5.disabled = false;
    denZap5.disabled = false;
    inclinacionHoyo5.disabled = true;
    DLSHoyo5.disabled = true;
}

function hoyoRevestido_27() {
    hoyo1Linea10.disabled = true;
    hoyo2Linea10.disabled = true;
    hoyo3Linea10.disabled = true;
    profAsent5.disabled = true;
    denZap5.disabled = true;
    inclinacionHoyo5.disabled =  true;
    DLSHoyo5.disabled = true;
}

function hoyoRevestido_28() {
    hoyo1Linea10.disabled = true;
    hoyo2Linea10.disabled = true;
    hoyo3Linea10.disabled = true;
    profAsent5.disabled = true;
    denZap5.disabled = true;
    inclinacionHoyo5.disabled =  true;
    DLSHoyo5.disabled = true;
}

// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
var rev1Linea9 = document.getElementById("rev1-linea9");
rev1Linea9.addEventListener("click", hoyoRevestido_25);

var rev2Linea9 = document.getElementById("rev2-linea9");
rev2Linea9.addEventListener("click", hoyoRevestido_26);

var rev3Linea9 = document.getElementById("rev3-linea9");
rev3Linea9.addEventListener("click", hoyoRevestido_27);

var rev4Linea9 = document.getElementById("rev4-linea9");
rev4Linea9.addEventListener("click", hoyoRevestido_28);

var hoyo1Linea10 = document.getElementById("hoyo1-linea10");
var hoyo2Linea10 = document.getElementById("hoyo2-linea10");
var hoyo3Linea10 = document.getElementById("hoyo3-linea10");

// CÓDIGO PARA SELECCIONAR CONEXIÓN

// VARIABLES PARA SELECCIONAR CONEXIÓN
var profAsent5 = document.getElementById("prof-asent5");

var denZap5 = document.getElementById("den-zap5");

var inclinacionHoyo5 = document.getElementById("inclinacion-hoyo5");

var DLSHoyo5 = document.getElementById("DLS-hoyo5");

var boton_recomendar_conexion5 = document.getElementById("recomendar-conexion5");
boton_recomendar_conexion5.addEventListener("click", recomendarConexion5);

var diametros_revestidores5 = document.diametrosRevestidores5.rev5; //Crea un array con los inputs radio (revestidor) que están dentro de la form
var longitud_array_rev5 = diametros_revestidores5.length;

var diametros_hoyo5 = document.diametrosHoyo5.hoyo5; //Crea un array con los inputs radio (hoyo) que están dentro de la form
var longitud_array_hoyo5 = diametros_hoyo5.length;

var tipo_revestimiento5 = document.tipoRevestimiento5.tipo5; //Crea un array con los inputs radio (tipo) que están dentro de la form
var longitud_array_tipo5 = tipo_revestimiento5.length;

function recomendarConexion5() {
    var diam_rev;
    var diam_hoyo;
    var holgura;
    var tipo_rev;

    var prof_asent = Number(profAsent5.value);
    var den_zap = Number(denZap5.value);
    var presion = 0.052*den_zap*prof_asent;
    var inclinacion_hoyo = Number(inclinacionHoyo5.value);
    var DLS_hoyo = Number(DLSHoyo5.value);

    for(i=0; i < longitud_array_rev5; i++) {
        if(diametros_revestidores5[i].checked == true) {
            break;
        }
    }
    var diam_rev = Number(diametros_revestidores5[i].value);
    console.log("El diámetro del revestidor es " + diam_rev + " pulg.");

    for(j=0; j < longitud_array_hoyo5; j++) {
        if(diametros_hoyo5[j].checked == true) {
            break;
        }
    }
    if(diametros_hoyo5[j] == undefined) {
        diam_hoyo = 0; // Para que corra el código
    }
    else {
        var diam_hoyo = Number(diametros_hoyo5[j].value);
    }
    console.log("El diámetro del hoyo es " + diam_hoyo + " pulg.");
    
    

    for(k=0; k < longitud_array_tipo5; k++) {
        if(tipo_revestimiento5[k].checked == true) {
            break;
        }
    }
    var tipo_rev = tipo_revestimiento5[k].value;
    console.log("El tipo de revestimiento es " + tipo_rev + ".");

    holgura = (diam_hoyo-diam_rev)/2;
    console.log("La holgura entre hoyo y revestidor es " + holgura + " pulg.");

    if(diam_rev > 20) {
        console.log("Es un revestidor conductor hincado.");
        var lista = document.getElementById("conexionlinea5");
            for(n = lista.options.length; n >= 0; n--) {
                lista.remove(n);
            }
            var option1 = document.createElement("option");
            option1.text = "Drillequib";
            var option2 = document.createElement("option");
            option2.text = "RL-4S";
            lista.appendChild(option1);
            lista.appendChild(option2);
            console.log("Las conexiones recomendadas son Drillequib y RL-4S");
    }
    else {
        if(diam_rev > 16) {
            console.log("La presión en fondo es: " + presion + " lpc.");
            if(prof_asent > 1000 || presion > 2000) {
                var lista = document.getElementById("conexionlinea5");
                for(m = lista.options.length; m >= 0; m--) {
                    lista.remove(m);
                }
                var option1 = document.createElement("option");
                option1.text = "Big Omega";
                var option2 = document.createElement("option");
                option2.text = "BTB";
                lista.appendChild(option1);
                lista.appendChild(option2);
                console.log("Las conexiones recomendadas son Big Omega y BTB");
            }
            else {
                var lista = document.getElementById("conexionlinea5");
                for(m = lista.options.length; m >= 0; m--) {
                    lista.remove(m);
                }
                var option1 = document.createElement("option");
                option1.text = "Buttress";
                lista.appendChild(option1);
                console.log("Las conexión recomendada es Buttress");
            }
        }
        else {
            if(inclinacion_hoyo > 45 || holgura < 0.75) {
                if(tipo_rev == "Camisa") {
                    var lista = document.getElementById("conexionlinea5");
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
                    var lista = document.getElementById("conexionlinea5");
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
                console.log("La presión en fondo es: " + presion + " lpc.");
                if(presion > 5000 || DLS_hoyo > 10) {
                    var lista = document.getElementById("conexionlinea5");
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
                    var lista = document.getElementById("conexionlinea5");
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
    }  
}