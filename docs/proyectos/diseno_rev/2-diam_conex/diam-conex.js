// Para continuar con la manipulación dle grupo de radios https://desarrolloweb.com/articulos/1006.php

// FUNCIÓN QUE ABRE UNA VENTANA SECUNDARIA PARA MOSTRARA LAS INSTRUCCIONES DE USO DEL PROGRAMA
function ventanaSecundaria (URL)
{ 
   window.open(URL,"INSTRUCCIONES DE USO DE LA APLICACIÓN","width=800,height=400,scrollbars=YES");
}

/*************** PRIMER REVESTIDOR **************/

// FUNCIONES PARA MANIPULAR LOS INPUT RADIOS DE REVESTIDORES
function hoyoRevestido() {
    hoyo1Linea2.disabled = false;
    hoyo2Linea2.disabled = false;
    hoyo3Linea2.disabled = true;
    hoyo4Linea2.disabled = true;
    hoyo5Linea2.disabled = true;

    hoyo1Linea2_valor.style.fontWeight = "normal";
    hoyo2Linea2_valor.style.fontWeight = "bold";
    hoyo3Linea2_valor.style.fontWeight = "normal";
    hoyo4Linea2_valor.style.fontWeight = "normal";
    hoyo5Linea2_valor.style.fontWeight = "normal";
}

function hoyoRevestido_2() {
    hoyo1Linea2.disabled = true;
    hoyo2Linea2.disabled = false;
    hoyo3Linea2.disabled = false;
    hoyo4Linea2.disabled = true;
    hoyo5Linea2.disabled = true;

    hoyo1Linea2_valor.style.fontWeight = "normal";
    hoyo2Linea2_valor.style.fontWeight = "normal";
    hoyo3Linea2_valor.style.fontWeight = "bold";
    hoyo4Linea2_valor.style.fontWeight = "normal";
    hoyo5Linea2_valor.style.fontWeight = "normal";
}

function hoyoRevestido_3() {
    hoyo1Linea2.disabled = true;
    hoyo2Linea2.disabled = true;
    hoyo3Linea2.disabled = false;
    hoyo4Linea2.disabled = false;
    hoyo5Linea2.disabled = true;

    hoyo1Linea2_valor.style.fontWeight = "normal";
    hoyo2Linea2_valor.style.fontWeight = "normal";
    hoyo3Linea2_valor.style.fontWeight = "normal";
    hoyo4Linea2_valor.style.fontWeight = "bold";
    hoyo5Linea2_valor.style.fontWeight = "normal";
}

function hoyoRevestido_4() {
    hoyo1Linea2.disabled = true;
    hoyo2Linea2.disabled = true;
    hoyo3Linea2.disabled = true;
    hoyo4Linea2.disabled = false;
    hoyo5Linea2.disabled = false;

    hoyo1Linea2_valor.style.fontWeight = "normal";
    hoyo2Linea2_valor.style.fontWeight = "normal";
    hoyo3Linea2_valor.style.fontWeight = "normal";
    hoyo4Linea2_valor.style.fontWeight = "normal";
    hoyo5Linea2_valor.style.fontWeight = "bold";
}

// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
// Revestidores
var rev1Linea1 = document.getElementById("rev1-linea1");
rev1Linea1.addEventListener("click", hoyoRevestido);

var rev2Linea1 = document.getElementById("rev2-linea1");
rev2Linea1.addEventListener("click", hoyoRevestido_2);

var rev3Linea1 = document.getElementById("rev3-linea1");
rev3Linea1.addEventListener("click", hoyoRevestido_3);

var rev4Linea1 = document.getElementById("rev4-linea1");
rev4Linea1.addEventListener("click", hoyoRevestido_4);

// Hoyos
var hoyo1Linea2 = document.getElementById("hoyo1-linea2");
hoyo1Linea2.addEventListener("click", hoyoDesnudo);

var hoyo2Linea2 = document.getElementById("hoyo2-linea2");
hoyo2Linea2.addEventListener("click", hoyoDesnudo_2);

var hoyo3Linea2 = document.getElementById("hoyo3-linea2");
hoyo3Linea2.addEventListener("click", hoyoDesnudo_3);

var hoyo4Linea2 = document.getElementById("hoyo4-linea2");
hoyo4Linea2.addEventListener("click", hoyoDesnudo_4);

var hoyo5Linea2 = document.getElementById("hoyo5-linea2");
hoyo5Linea2.addEventListener("click", hoyoDesnudo_5);

// Valores de hoyos
var hoyo1Linea2_valor = document.getElementById("valor_h1l2");
var hoyo2Linea2_valor = document.getElementById("valor_h2l2");
var hoyo3Linea2_valor = document.getElementById("valor_h3l2");
var hoyo4Linea2_valor = document.getElementById("valor_h4l2");
var hoyo5Linea2_valor = document.getElementById("valor_h5l2");

// FUNCIONES PARA MANIPULAR LOS INPUT RADIO DE HOYOS

function hoyoDesnudo() {
    rev1Linea3.disabled = false;
    rev2Linea3.disabled = true;
    rev3Linea3.disabled = true;
    rev4Linea3.disabled = true;
    rev5Linea3.disabled = true;
    rev6Linea3.disabled = true;

    rev1Linea3_valor.style.fontWeight = "bold";
    rev2Linea3_valor.style.fontWeight = "normal";
    rev3Linea3_valor.style.fontWeight = "normal";
    rev4Linea3_valor.style.fontWeight = "normal";
    rev5Linea3_valor.style.fontWeight = "normal";
    rev6Linea3_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_2() {
    rev1Linea3.disabled = false;
    rev2Linea3.disabled = false;
    rev3Linea3.disabled = true;
    rev4Linea3.disabled = true;
    rev5Linea3.disabled = true;
    rev6Linea3.disabled = true;

    rev1Linea3_valor.style.fontWeight = "normal";
    rev2Linea3_valor.style.fontWeight = "bold";
    rev3Linea3_valor.style.fontWeight = "normal";
    rev4Linea3_valor.style.fontWeight = "normal";
    rev5Linea3_valor.style.fontWeight = "normal";
    rev6Linea3_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_3() {
    rev1Linea3.disabled = true;
    rev2Linea3.disabled = false;
    rev3Linea3.disabled = false;
    rev4Linea3.disabled = false;
    rev5Linea3.disabled = true;
    rev6Linea3.disabled = true;

    rev1Linea3_valor.style.fontWeight = "normal";
    rev2Linea3_valor.style.fontWeight = "normal";
    rev3Linea3_valor.style.fontWeight = "bold";
    rev4Linea3_valor.style.fontWeight = "bold";
    rev5Linea3_valor.style.fontWeight = "normal";
    rev6Linea3_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_4() {
    rev1Linea3.disabled = true;
    rev2Linea3.disabled = true;
    rev3Linea3.disabled = false;
    rev4Linea3.disabled = false;
    rev5Linea3.disabled = false;
    rev6Linea3.disabled = true;

    rev1Linea3_valor.style.fontWeight = "normal";
    rev2Linea3_valor.style.fontWeight = "normal";
    rev3Linea3_valor.style.fontWeight = "bold";
    rev4Linea3_valor.style.fontWeight = "bold";
    rev5Linea3_valor.style.fontWeight = "bold";
    rev6Linea3_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_5() {
    rev1Linea3.disabled = true;
    rev2Linea3.disabled = true;
    rev3Linea3.disabled = true;
    rev4Linea3.disabled = true;
    rev5Linea3.disabled = false;
    rev6Linea3.disabled = false;

    rev1Linea3_valor.style.fontWeight = "normal";
    rev2Linea3_valor.style.fontWeight = "normal";
    rev3Linea3_valor.style.fontWeight = "normal";
    rev4Linea3_valor.style.fontWeight = "normal";
    rev5Linea3_valor.style.fontWeight = "normal";
    rev6Linea3_valor.style.fontWeight = "bold";
}

// FUNCIÓN PARA LIMPIAR LOS INPUTS
var boton_limpiar = document.getElementById("limpiar-radios");
boton_limpiar.addEventListener("click", limpiarInputs);

function limpiarInputs () {
    var grupo_rev = document.getElementsByName("rev1");
    var grupo_hoyo = document.getElementsByName("hoyo1");
    var grupo_hoyo_valor = document.getElementsByName("hoyo1-valor");

    for(var p = 0; p < grupo_rev.length; p++) {
        var rad_rev = grupo_rev[p];
        rad_rev.checked = false;
    }
    for(var q = 0; q < grupo_hoyo.length; q++) {
        var rad_hoyo = grupo_hoyo[q];
        rad_hoyo.checked = false;
        rad_hoyo.disabled = false;
    }
    for(var r = 0; r < grupo_hoyo_valor.length; r++) {
        var span_hoyo = grupo_hoyo_valor[r];
        span_hoyo.style.fontWeight = "normal";
    }
}

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

// FUNCIONES PARA MANIPULAR LOS INPUT RADIOS DE REVESTIDORES
function hoyoRevestido_5() {
    hoyo1Linea4.disabled = false;
    hoyo2Linea4.disabled = false;
    hoyo3Linea4.disabled = true;
    hoyo4Linea4.disabled = true;
    hoyo5Linea4.disabled = true;
    hoyo6Linea4.disabled = true;

    hoyo1Linea4_valor.style.fontWeight = "normal";
    hoyo2Linea4_valor.style.fontWeight = "bold";
    hoyo3Linea4_valor.style.fontWeight = "normal";
    hoyo4Linea4_valor.style.fontWeight = "normal";
    hoyo5Linea4_valor.style.fontWeight = "normal";
    hoyo6Linea4_valor.style.fontWeight = "normal";
}

function hoyoRevestido_6() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = false;
    hoyo3Linea4.disabled = false;
    hoyo4Linea4.disabled = true;
    hoyo5Linea4.disabled = true;
    hoyo6Linea4.disabled = true;

    hoyo1Linea4_valor.style.fontWeight = "normal";
    hoyo2Linea4_valor.style.fontWeight = "bold";
    hoyo3Linea4_valor.style.fontWeight = "bold";
    hoyo4Linea4_valor.style.fontWeight = "normal";
    hoyo5Linea4_valor.style.fontWeight = "normal";
    hoyo6Linea4_valor.style.fontWeight = "normal";
}

function hoyoRevestido_7() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = false;
    hoyo3Linea4.disabled = false;
    hoyo4Linea4.disabled = false;
    hoyo5Linea4.disabled = true;
    hoyo6Linea4.disabled = true;

    hoyo1Linea4_valor.style.fontWeight = "normal";
    hoyo2Linea4_valor.style.fontWeight = "normal";
    hoyo3Linea4_valor.style.fontWeight = "normal";
    hoyo4Linea4_valor.style.fontWeight = "bold";
    hoyo5Linea4_valor.style.fontWeight = "normal";
    hoyo6Linea4_valor.style.fontWeight = "normal";
}

function hoyoRevestido_8() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = false;
    hoyo3Linea4.disabled = false;
    hoyo4Linea4.disabled = false;
    hoyo5Linea4.disabled = true;
    hoyo6Linea4.disabled = true;

    hoyo1Linea4_valor.style.fontWeight = "normal";
    hoyo2Linea4_valor.style.fontWeight = "normal";
    hoyo3Linea4_valor.style.fontWeight = "normal";
    hoyo4Linea4_valor.style.fontWeight = "bold";
    hoyo5Linea4_valor.style.fontWeight = "normal";
    hoyo6Linea4_valor.style.fontWeight = "normal";
}

function hoyoRevestido_9() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = true;
    hoyo3Linea4.disabled = true;
    hoyo4Linea4.disabled = false;
    hoyo5Linea4.disabled = false;
    hoyo6Linea4.disabled = true;

    hoyo1Linea4_valor.style.fontWeight = "normal";
    hoyo2Linea4_valor.style.fontWeight = "normal";
    hoyo3Linea4_valor.style.fontWeight = "normal";
    hoyo4Linea4_valor.style.fontWeight = "normal";
    hoyo5Linea4_valor.style.fontWeight = "bold";
    hoyo6Linea4_valor.style.fontWeight = "normal";
}

function hoyoRevestido_10() {
    hoyo1Linea4.disabled = true;
    hoyo2Linea4.disabled = true;
    hoyo3Linea4.disabled = true;
    hoyo4Linea4.disabled = true;
    hoyo5Linea4.disabled = false;
    hoyo6Linea4.disabled = false;

    hoyo1Linea4_valor.style.fontWeight = "normal";
    hoyo2Linea4_valor.style.fontWeight = "normal";
    hoyo3Linea4_valor.style.fontWeight = "normal";
    hoyo4Linea4_valor.style.fontWeight = "normal";
    hoyo5Linea4_valor.style.fontWeight = "normal";
    hoyo6Linea4_valor.style.fontWeight = "bold";
}

// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
// Revestidores
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

// Hoyos
var hoyo1Linea4 = document.getElementById("hoyo1-linea4");
hoyo1Linea4.addEventListener("click", hoyoDesnudo_6);

var hoyo2Linea4 = document.getElementById("hoyo2-linea4");
hoyo2Linea4.addEventListener("click", hoyoDesnudo_7);

var hoyo3Linea4 = document.getElementById("hoyo3-linea4");
hoyo3Linea4.addEventListener("click", hoyoDesnudo_8);

var hoyo4Linea4 = document.getElementById("hoyo4-linea4");
hoyo4Linea4.addEventListener("click", hoyoDesnudo_9);

var hoyo5Linea4 = document.getElementById("hoyo5-linea4");
hoyo5Linea4.addEventListener("click", hoyoDesnudo_10);

var hoyo6Linea4 = document.getElementById("hoyo6-linea4");
hoyo6Linea4.addEventListener("click", hoyoDesnudo_11);

// Valores de Revestidores
var rev1Linea3_valor = document.getElementById("valor_r1l3");
var rev2Linea3_valor = document.getElementById("valor_r2l3");
var rev3Linea3_valor = document.getElementById("valor_r3l3");
var rev4Linea3_valor = document.getElementById("valor_r4l3");
var rev5Linea3_valor = document.getElementById("valor_r5l3");
var rev6Linea3_valor = document.getElementById("valor_r6l3");

// Valores de Hoyos
var hoyo1Linea4_valor = document.getElementById("valor_h1l4");
var hoyo2Linea4_valor = document.getElementById("valor_h2l4");
var hoyo3Linea4_valor = document.getElementById("valor_h3l4");
var hoyo4Linea4_valor = document.getElementById("valor_h4l4");
var hoyo5Linea4_valor = document.getElementById("valor_h5l4");
var hoyo6Linea4_valor = document.getElementById("valor_h6l4");

// FUNCIONES PARA MANIPULAR LOS INPUT RADIO DE HOYOS

function hoyoDesnudo_6() {
    rev1Linea5.disabled = false;
    rev2Linea5.disabled = false;
    rev3Linea5.disabled = false;
    rev4Linea5.disabled = true;
    rev5Linea5.disabled = true;
    rev6Linea5.disabled = true;
    rev7Linea5.disabled = true;
    rev8Linea5.disabled = true;

    rev1Linea5_valor.style.fontWeight = "normal";
    rev2Linea5_valor.style.fontWeight = "bold";
    rev3Linea5_valor.style.fontWeight = "bold";
    rev4Linea5_valor.style.fontWeight = "normal";
    rev5Linea5_valor.style.fontWeight = "normal";
    rev6Linea5_valor.style.fontWeight = "normal";
    rev7Linea5_valor.style.fontWeight = "normal";
    rev8Linea5_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_7() {
    rev1Linea5.disabled = true;
    rev2Linea5.disabled = false;
    rev3Linea5.disabled = false;
    rev4Linea5.disabled = true;
    rev5Linea5.disabled = true;
    rev6Linea5.disabled = true;
    rev7Linea5.disabled = true;
    rev8Linea5.disabled = true;

    rev1Linea5_valor.style.fontWeight = "normal";
    rev2Linea5_valor.style.fontWeight = "bold";
    rev3Linea5_valor.style.fontWeight = "bold";
    rev4Linea5_valor.style.fontWeight = "normal";
    rev5Linea5_valor.style.fontWeight = "normal";
    rev6Linea5_valor.style.fontWeight = "normal";
    rev7Linea5_valor.style.fontWeight = "normal";
    rev8Linea5_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_8() {
    rev1Linea5.disabled = true;
    rev2Linea5.disabled = false;
    rev3Linea5.disabled = false;
    rev4Linea5.disabled = false;
    rev5Linea5.disabled = true;
    rev6Linea5.disabled = true;
    rev7Linea5.disabled = true;
    rev8Linea5.disabled = true;

    rev1Linea5_valor.style.fontWeight = "normal";
    rev2Linea5_valor.style.fontWeight = "normal";
    rev3Linea5_valor.style.fontWeight = "normal";
    rev4Linea5_valor.style.fontWeight = "bold";
    rev5Linea5_valor.style.fontWeight = "normal";
    rev6Linea5_valor.style.fontWeight = "normal";
    rev7Linea5_valor.style.fontWeight = "normal";
    rev8Linea5_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_9() {
    rev1Linea5.disabled = true;
    rev2Linea5.disabled = true;
    rev3Linea5.disabled = true;
    rev4Linea5.disabled = false;
    rev5Linea5.disabled = true;
    rev6Linea5.disabled = true;
    rev7Linea5.disabled = true;
    rev8Linea5.disabled = true;

    rev1Linea5_valor.style.fontWeight = "normal";
    rev2Linea5_valor.style.fontWeight = "normal";
    rev3Linea5_valor.style.fontWeight = "normal";
    rev4Linea5_valor.style.fontWeight = "bold";
    rev5Linea5_valor.style.fontWeight = "normal";
    rev6Linea5_valor.style.fontWeight = "normal";
    rev7Linea5_valor.style.fontWeight = "normal";
    rev8Linea5_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_10() {
    rev1Linea5.disabled = true;
    rev2Linea5.disabled = true;
    rev3Linea5.disabled = true;
    rev4Linea5.disabled = true;
    rev5Linea5.disabled = false;
    rev6Linea5.disabled = false;
    rev7Linea5.disabled = true;
    rev8Linea5.disabled = true;

    rev1Linea5_valor.style.fontWeight = "normal";
    rev2Linea5_valor.style.fontWeight = "normal";
    rev3Linea5_valor.style.fontWeight = "normal";
    rev4Linea5_valor.style.fontWeight = "normal";
    rev5Linea5_valor.style.fontWeight = "bold";
    rev6Linea5_valor.style.fontWeight = "bold";
    rev7Linea5_valor.style.fontWeight = "normal";
    rev8Linea5_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_11() {
    rev1Linea5.disabled = true;
    rev2Linea5.disabled = true;
    rev3Linea5.disabled = true;
    rev4Linea5.disabled = true;
    rev5Linea5.disabled = true;
    rev6Linea5.disabled = true;
    rev7Linea5.disabled = false;
    rev8Linea5.disabled = false;

    rev1Linea5_valor.style.fontWeight = "normal";
    rev2Linea5_valor.style.fontWeight = "normal";
    rev3Linea5_valor.style.fontWeight = "normal";
    rev4Linea5_valor.style.fontWeight = "normal";
    rev5Linea5_valor.style.fontWeight = "normal";
    rev6Linea5_valor.style.fontWeight = "normal";
    rev7Linea5_valor.style.fontWeight = "bold";
    rev8Linea5_valor.style.fontWeight = "bold";
}

// FUNCIÓN PARA LIMPIAR LOS INPUTS
var boton_limpiar2 = document.getElementById("limpiar-radios2");
boton_limpiar2.addEventListener("click", limpiarInputs2);

function limpiarInputs2 () {
    var grupo_rev2 = document.getElementsByName("rev2");
    var grupo_hoyo2 = document.getElementsByName("hoyo2");
    var grupo_rev2_valor = document.getElementsByName("rev2-valor");
    var grupo_hoyo2_valor = document.getElementsByName("hoyo2-valor");
    
    for(var r = 0; r < grupo_rev2.length; r++) {
        var rad_rev2 = grupo_rev2[r];
        rad_rev2.checked = false;
        rad_rev2.disabled = false;
        var span_rev = grupo_rev2_valor[r];
        span_rev.style.fontWeight = "normal";
    }
    for(var s = 0; s < grupo_hoyo2.length; s++) {
        var rad_hoyo2 = grupo_hoyo2[s];
        rad_hoyo2.checked = false;
        rad_hoyo2.disabled = false;
        var span_hoyo = grupo_hoyo2_valor[s];
        span_hoyo.style.fontWeight = "normal";
    }
}

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
    // hoyo1Linea6_valor.style.fontWeight = "bold";
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = true;
    hoyo4Linea6.disabled = true;

    hoyo1Linea6_valor.style.fontWeight = "bold";
    hoyo2Linea6_valor.style.fontWeight = "normal";
    hoyo3Linea6_valor.style.fontWeight = "normal";
    hoyo4Linea6_valor.style.fontWeight = "normal";
}

function hoyoRevestido_12() {
    hoyo1Linea6.disabled = false;
    hoyo2Linea6.disabled = false;
    // hoyo2Linea6_valor.style.fontWeight = "bold";
    hoyo3Linea6.disabled = true;
    hoyo4Linea6.disabled = true;

    hoyo1Linea6_valor.style.fontWeight = "normal";
    hoyo2Linea6_valor.style.fontWeight = "bold";
    hoyo3Linea6_valor.style.fontWeight = "normal";
    hoyo4Linea6_valor.style.fontWeight = "normal";
}

function hoyoRevestido_13() {
    hoyo1Linea6.disabled = false;
    hoyo2Linea6.disabled = false;
    // hoyo2Linea6_valor.style.fontWeight = "bold";
    hoyo3Linea6.disabled = true;
    hoyo4Linea6.disabled = true;

    hoyo1Linea6_valor.style.fontWeight = "normal";
    hoyo2Linea6_valor.style.fontWeight = "bold";
    hoyo3Linea6_valor.style.fontWeight = "normal";
    hoyo4Linea6_valor.style.fontWeight = "normal";
}

function hoyoRevestido_14() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = false;
    hoyo3Linea6.disabled = false;
    // hoyo3Linea6_valor.style.fontWeight = "bold";
    hoyo4Linea6.disabled = true;

    hoyo1Linea6_valor.style.fontWeight = "normal";
    hoyo2Linea6_valor.style.fontWeight = "normal";
    hoyo3Linea6_valor.style.fontWeight = "bold";
    hoyo4Linea6_valor.style.fontWeight = "normal";
}

function hoyoRevestido_15() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = false;
    // hoyo3Linea6_valor.style.fontWeight = "bold";
    hoyo4Linea6.disabled = true;

    hoyo1Linea6_valor.style.fontWeight = "normal";
    hoyo2Linea6_valor.style.fontWeight = "normal";
    hoyo3Linea6_valor.style.fontWeight = "bold";
    hoyo4Linea6_valor.style.fontWeight = "normal";
}

function hoyoRevestido_16() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = false;
    // hoyo3Linea6_valor.style.fontWeight = "bold";
    hoyo4Linea6.disabled = true;

    hoyo1Linea6_valor.style.fontWeight = "normal";
    hoyo2Linea6_valor.style.fontWeight = "normal";
    hoyo3Linea6_valor.style.fontWeight = "bold";
    hoyo4Linea6_valor.style.fontWeight = "normal";
}

function hoyoRevestido_17() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = false;
    hoyo4Linea6.disabled = false;
    // hoyo4Linea6_valor.style.fontWeight = "bold";

    hoyo1Linea6_valor.style.fontWeight = "normal";
    hoyo2Linea6_valor.style.fontWeight = "normal";
    hoyo3Linea6_valor.style.fontWeight = "normal";
    hoyo4Linea6_valor.style.fontWeight = "bold";
}

function hoyoRevestido_18() {
    hoyo1Linea6.disabled = true;
    hoyo2Linea6.disabled = true;
    hoyo3Linea6.disabled = false;
    hoyo4Linea6.disabled = false;
    // hoyo4Linea6_valor.style.fontWeight = "bold";

    hoyo1Linea6_valor.style.fontWeight = "normal";
    hoyo2Linea6_valor.style.fontWeight = "normal";
    hoyo3Linea6_valor.style.fontWeight = "normal";
    hoyo4Linea6_valor.style.fontWeight = "bold";
}

// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
// Revestidores
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

// Hoyos
var hoyo1Linea6 = document.getElementById("hoyo1-linea6");
hoyo1Linea6.addEventListener("click", hoyoDesnudo_12);

var hoyo2Linea6 = document.getElementById("hoyo2-linea6");
hoyo2Linea6.addEventListener("click", hoyoDesnudo_13);

var hoyo3Linea6 = document.getElementById("hoyo3-linea6");
hoyo3Linea6.addEventListener("click", hoyoDesnudo_14);

var hoyo4Linea6 = document.getElementById("hoyo4-linea6");
hoyo4Linea6.addEventListener("click", hoyoDesnudo_15);

// Valores de Revestidores
var rev1Linea5_valor = document.getElementById("valor_r1l5");
var rev2Linea5_valor = document.getElementById("valor_r2l5");
var rev3Linea5_valor = document.getElementById("valor_r3l5");
var rev4Linea5_valor = document.getElementById("valor_r4l5");
var rev5Linea5_valor = document.getElementById("valor_r5l5");
var rev6Linea5_valor = document.getElementById("valor_r6l5");
var rev7Linea5_valor = document.getElementById("valor_r7l5");
var rev8Linea5_valor = document.getElementById("valor_r8l5");

// Valores de Hoyos
var hoyo1Linea6_valor = document.getElementById("valor_h1l6");
var hoyo2Linea6_valor = document.getElementById("valor_h2l6");
var hoyo3Linea6_valor = document.getElementById("valor_h3l6");
var hoyo4Linea6_valor = document.getElementById("valor_h4l6");

// FUCIONES PARA MANIPULAR INUTS RADIO DE HOYOS

function hoyoDesnudo_12() {
    rev1Linea7.disabled = false;
    rev2Linea7.disabled = false;
    rev3Linea7.disabled = true;
    rev4Linea7.disabled = true;
    rev5Linea7.disabled = true;
    rev6Linea7.disabled = true;

    rev1Linea7_valor.style.fontWeight = "bold";
    rev2Linea7_valor.style.fontWeight = "bold";
    rev3Linea7_valor.style.fontWeight = "normal";
    rev4Linea7_valor.style.fontWeight = "normal";
    rev5Linea7_valor.style.fontWeight = "normal";
    rev6Linea7_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_13() {
    rev1Linea7.disabled = true;
    rev2Linea7.disabled = true;
    rev3Linea7.disabled = false;
    rev4Linea7.disabled = false;
    rev5Linea7.disabled = true;
    rev6Linea7.disabled = true;

    rev1Linea7_valor.style.fontWeight = "normal";
    rev2Linea7_valor.style.fontWeight = "normal";
    rev3Linea7_valor.style.fontWeight = "bold";
    rev4Linea7_valor.style.fontWeight = "bold";
    rev5Linea7_valor.style.fontWeight = "normal";
    rev6Linea7_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_14() {
    rev1Linea7.disabled = true;
    rev2Linea7.disabled = true;
    rev3Linea7.disabled = true;
    rev4Linea7.disabled = true;
    rev5Linea7.disabled = false;
    rev6Linea7.disabled = true;

    rev1Linea7_valor.style.fontWeight = "normal";
    rev2Linea7_valor.style.fontWeight = "normal";
    rev3Linea7_valor.style.fontWeight = "normal";
    rev4Linea7_valor.style.fontWeight = "normal";
    rev5Linea7_valor.style.fontWeight = "bold";
    rev6Linea7_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_15() {
    rev1Linea7.disabled = true;
    rev2Linea7.disabled = true;
    rev3Linea7.disabled = true;
    rev4Linea7.disabled = true;
    rev5Linea7.disabled = true;
    rev6Linea7.disabled = false;

    rev1Linea7_valor.style.fontWeight = "normal";
    rev2Linea7_valor.style.fontWeight = "normal";
    rev3Linea7_valor.style.fontWeight = "normal";
    rev4Linea7_valor.style.fontWeight = "normal";
    rev5Linea7_valor.style.fontWeight = "normal";
    rev6Linea7_valor.style.fontWeight = "bold";
}

// FUNCIÓN PARA LIMPIAR LOS INPUTS
var boton_limpiar3 = document.getElementById("limpiar-radios3");
boton_limpiar3.addEventListener("click", limpiarInputs3);

function limpiarInputs3 () {
    var grupo_rev3 = document.getElementsByName("rev3");
    var grupo_hoyo3 = document.getElementsByName("hoyo3");
    var grupo_rev3_valor = document.getElementsByName("rev3-valor");
    var grupo_hoyo3_valor = document.getElementsByName("hoyo3-valor");
    
    for(var t = 0; t < grupo_rev3.length; t++) {
        var rad_rev3 = grupo_rev3[t];
        rad_rev3.checked = false;
        rad_rev3.disabled = false;
        var span_rev = grupo_rev3_valor[t];
        span_rev.style.fontWeight = "normal";
    }
    for(var u = 0; u < grupo_hoyo3.length; u++) {
        var rad_hoyo3 = grupo_hoyo3[u];
        rad_hoyo3.checked = false;
        rad_hoyo3.disabled = false;
        var span_hoyo = grupo_hoyo3_valor[u];
        span_hoyo.style.fontWeight = "normal";
    }
}

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

    hoyo1Linea8_valor.style.fontWeight = "bold";
    hoyo2Linea8_valor.style.fontWeight = "normal";
    hoyo3Linea8_valor.style.fontWeight = "normal";
    hoyo4Linea8_valor.style.fontWeight = "normal";

    inclinacionHoyo4.disabled = false;
    DLSHoyo4.disabled = false;
}

function hoyoRevestido_20() {
    hoyo1Linea8.disabled = false;
    hoyo2Linea8.disabled = true;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = true;

    hoyo1Linea8_valor.style.fontWeight = "bold";
    hoyo2Linea8_valor.style.fontWeight = "normal";
    hoyo3Linea8_valor.style.fontWeight = "normal";
    hoyo4Linea8_valor.style.fontWeight = "normal";

    inclinacionHoyo4.disabled = false;
    DLSHoyo4.disabled = false;
}

function hoyoRevestido_21() {
    hoyo1Linea8.disabled = false;
    hoyo2Linea8.disabled = false;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = true;

    hoyo1Linea8_valor.style.fontWeight = "normal";
    hoyo2Linea8_valor.style.fontWeight = "bold";
    hoyo3Linea8_valor.style.fontWeight = "normal";
    hoyo4Linea8_valor.style.fontWeight = "normal";

    inclinacionHoyo4.disabled = false;
    DLSHoyo4.disabled = false;
}

function hoyoRevestido_22() {
    hoyo1Linea8.disabled = false;
    hoyo2Linea8.disabled = false;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = true;

    hoyo1Linea8_valor.style.fontWeight = "normal";
    hoyo2Linea8_valor.style.fontWeight = "bold";
    hoyo3Linea8_valor.style.fontWeight = "normal";
    hoyo4Linea8_valor.style.fontWeight = "normal";

    inclinacionHoyo4.disabled = false;
    DLSHoyo4.disabled = false;
}

function hoyoRevestido_23() {
    hoyo1Linea8.disabled = true;
    hoyo2Linea8.disabled = false;
    hoyo3Linea8.disabled = false;
    hoyo4Linea8.disabled = false;

    hoyo1Linea8_valor.style.fontWeight = "normal";
    hoyo2Linea8_valor.style.fontWeight = "normal";
    hoyo3Linea8_valor.style.fontWeight = "bold";
    hoyo4Linea8_valor.style.fontWeight = "bold";

    inclinacionHoyo4.disabled = false;
    DLSHoyo4.disabled = false;
}

function hoyoRevestido_24() {
    hoyo1Linea8.disabled = true;
    hoyo2Linea8.disabled = true;
    hoyo3Linea8.disabled = true;
    hoyo4Linea8.disabled = false;

    hoyo1Linea8_valor.style.fontWeight = "normal";
    hoyo2Linea8_valor.style.fontWeight = "normal";
    hoyo3Linea8_valor.style.fontWeight = "normal";
    hoyo4Linea8_valor.style.fontWeight = "bold";

    inclinacionHoyo4.disabled = true;
    DLSHoyo4.disabled = true;
}


// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
// Revestidores
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

// Hoyos
var hoyo1Linea8 = document.getElementById("hoyo1-linea8");
hoyo1Linea8.addEventListener("click", hoyoDesnudo_16);

var hoyo2Linea8 = document.getElementById("hoyo2-linea8");
hoyo2Linea8.addEventListener("click", hoyoDesnudo_17);

var hoyo3Linea8 = document.getElementById("hoyo3-linea8");
hoyo3Linea8.addEventListener("click", hoyoDesnudo_18);

var hoyo4Linea8 = document.getElementById("hoyo4-linea8");
hoyo4Linea8.addEventListener("click", hoyoDesnudo_19);

// Valores de Revestidores (spans)
var rev1Linea7_valor = document.getElementById("valor_r1l7");
var rev2Linea7_valor = document.getElementById("valor_r2l7");
var rev3Linea7_valor = document.getElementById("valor_r3l7");
var rev4Linea7_valor = document.getElementById("valor_r4l7");
var rev5Linea7_valor = document.getElementById("valor_r5l7");
var rev6Linea7_valor = document.getElementById("valor_r6l7");

// Valores de Hoyos (spans)
var hoyo1Linea8_valor = document.getElementById("valor_h1l8");
var hoyo2Linea8_valor = document.getElementById("valor_h2l8");
var hoyo3Linea8_valor = document.getElementById("valor_h3l8");
var hoyo4Linea8_valor = document.getElementById("valor_h4l8");

// FUNCIONES PARA MANIPULAR LOS INPUT RADIO DE HOYOS

function hoyoDesnudo_16() {
    rev1Linea9.disabled = false;
    rev2Linea9.disabled = true;
    rev3Linea9.disabled = true;
    rev4Linea9.disabled = true;

    rev1Linea9_valor.style.fontWeight = "bold";
    rev2Linea9_valor.style.fontWeight = "normal";
    rev3Linea9_valor.style.fontWeight = "normal";
    rev4Linea9_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_17() {
    rev1Linea9.disabled = true;
    rev2Linea9.disabled = false;
    rev3Linea9.disabled = true;
    rev4Linea9.disabled = true;

    rev1Linea9_valor.style.fontWeight = "normal";
    rev2Linea9_valor.style.fontWeight = "bold";
    rev3Linea9_valor.style.fontWeight = "normal";
    rev4Linea9_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_18() {
    rev1Linea9.disabled = true;
    rev2Linea9.disabled = true;
    rev3Linea9.disabled = false;
    rev4Linea9.disabled = true;

    rev1Linea9_valor.style.fontWeight = "normal";
    rev2Linea9_valor.style.fontWeight = "normal";
    rev3Linea9_valor.style.fontWeight = "bold";
    rev4Linea9_valor.style.fontWeight = "normal";
}

function hoyoDesnudo_19() {
    rev1Linea9.disabled = true;
    rev2Linea9.disabled = true;
    rev3Linea9.disabled = true;
    rev4Linea9.disabled = false;

    rev1Linea9_valor.style.fontWeight = "normal";
    rev2Linea9_valor.style.fontWeight = "normal";
    rev3Linea9_valor.style.fontWeight = "normal";
    rev4Linea9_valor.style.fontWeight = "bold";
}

// FUNCIÓN PARA LIMPIAR LOS INPUTS
var boton_limpiar4 = document.getElementById("limpiar-radios4");
boton_limpiar4.addEventListener("click", limpiarInputs4);

function limpiarInputs4 () {
    var grupo_rev4 = document.getElementsByName("rev4");
    var grupo_hoyo4 = document.getElementsByName("hoyo4");
    var grupo_rev4_valor = document.getElementsByName("rev4-valor");
    var grupo_hoyo4_valor = document.getElementsByName("hoyo4-valor");
    
    for(var v = 0; v < grupo_rev4.length; v++) {
        var rad_rev4 = grupo_rev4[v];
        rad_rev4.checked = false;
        rad_rev4.disabled = false;
        var span_rev = grupo_rev4_valor[v];
        span_rev.style.fontWeight = "normal";
    }
    for(var w = 0; w < grupo_hoyo4.length; w++) {
        var rad_hoyo4 = grupo_hoyo4[w];
        rad_hoyo4.checked = false;
        rad_hoyo4.disabled = false;
        var span_hoyo = grupo_hoyo4_valor[w];
        span_hoyo. style.fontWeight = "normal";
    }
}

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

    hoyo1Linea10_valor.style.fontWeight = "normal";
    hoyo2Linea10_valor.style.fontWeight = "bold";
    hoyo3Linea10_valor.style.fontWeight = "bold";

    profAsent5.disabled = false;
    denZap5.disabled = false;
    inclinacionHoyo5.disabled = false;
    DLSHoyo5.disabled = false;
}

function hoyoRevestido_26() {
    hoyo1Linea10.disabled = true;
    hoyo2Linea10.disabled = true;
    hoyo3Linea10.disabled = false;

    hoyo1Linea10_valor.style.fontWeight = "normal";
    hoyo2Linea10_valor.style.fontWeight = "normal";
    hoyo3Linea10_valor.style.fontWeight = "bold";

    profAsent5.disabled = false;
    denZap5.disabled = false;
    inclinacionHoyo5.disabled = true;
    DLSHoyo5.disabled = true;
}

function hoyoRevestido_27() {
    hoyo1Linea10.disabled = true;
    hoyo2Linea10.disabled = true;
    hoyo3Linea10.disabled = true;

    hoyo1Linea10_valor.style.fontWeight = "normal";
    hoyo2Linea10_valor.style.fontWeight = "normal";
    hoyo3Linea10_valor.style.fontWeight = "normal";

    profAsent5.disabled = true;
    denZap5.disabled = true;
    inclinacionHoyo5.disabled =  true;
    DLSHoyo5.disabled = true;
}

function hoyoRevestido_28() {
    hoyo1Linea10.disabled = true;
    hoyo2Linea10.disabled = true;
    hoyo3Linea10.disabled = true;

    hoyo1Linea10_valor.style.fontWeight = "normal";
    hoyo2Linea10_valor.style.fontWeight = "normal";
    hoyo3Linea10_valor.style.fontWeight = "normal";

    profAsent5.disabled = true;
    denZap5.disabled = true;
    inclinacionHoyo5.disabled =  true;
    DLSHoyo5.disabled = true;
}

// VARIABLES Y EVENTOS PARA MANIPULAR LOS INPUT RADIOS
// Revestidores
var rev1Linea9 = document.getElementById("rev1-linea9");
rev1Linea9.addEventListener("click", hoyoRevestido_25);

var rev2Linea9 = document.getElementById("rev2-linea9");
rev2Linea9.addEventListener("click", hoyoRevestido_26);

var rev3Linea9 = document.getElementById("rev3-linea9");
rev3Linea9.addEventListener("click", hoyoRevestido_27);

var rev4Linea9 = document.getElementById("rev4-linea9");
rev4Linea9.addEventListener("click", hoyoRevestido_28);

// Hoyos
var hoyo1Linea10 = document.getElementById("hoyo1-linea10");
var hoyo2Linea10 = document.getElementById("hoyo2-linea10");
var hoyo3Linea10 = document.getElementById("hoyo3-linea10");

// Valores de Revestidores (span)
rev1Linea9_valor = document.getElementById("valor_r1l9");
rev2Linea9_valor = document.getElementById("valor_r2l9");
rev3Linea9_valor = document.getElementById("valor_r3l9");
rev4Linea9_valor = document.getElementById("valor_r4l9");

// Valores de hoyos (span)
var hoyo1Linea10_valor = document.getElementById("valor_h1l10");
var hoyo2Linea10_valor = document.getElementById("valor_h2l10");
var hoyo3Linea10_valor = document.getElementById("valor_h3l10");

// FUNCIÓN PARA LIMPIAR LOS INPUTS
var boton_limpiar5 = document.getElementById("limpiar-radios5");
boton_limpiar5.addEventListener("click", limpiarInputs5);

function limpiarInputs5 () {
    var grupo_rev5 = document.getElementsByName("rev5");
    var grupo_hoyo5 = document.getElementsByName("hoyo5");
    var grupo_rev5_valor = document.getElementsByName("rev5-valor");
    var grupo_hoyo5_valor = document.getElementsByName("hoyo5-valor");
    
    for(var x = 0; x < grupo_rev5.length; x++) {
        var rad_rev5 = grupo_rev5[x];
        rad_rev5.checked = false;
        rad_rev5.disabled = false;
        var span_rev = grupo_rev5_valor[x];
        span_rev.style.fontWeight = "normal";
    }
    for(var y = 0; y < grupo_hoyo5.length; y++) {
        var rad_hoyo5 = grupo_hoyo5[y];
        rad_hoyo5.checked = false;
        rad_hoyo5.disabled = false;
        var span_hoyo = grupo_hoyo5_valor[y];
        span_hoyo.style.fontWeight = "normal";
    }
}

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