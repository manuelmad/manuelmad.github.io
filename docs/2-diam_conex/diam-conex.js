
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






