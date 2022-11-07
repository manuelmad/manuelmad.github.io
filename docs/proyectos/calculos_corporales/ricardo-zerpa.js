/* Cálculo de % de grasa por Deuremberg */

let peso_kg;

let altura_m;

let edad;

let IMC;

let factor_genero;

let genero;

let porcentaje_grasa;

let peso_grasa_kg;

let boton_calcular = document.getElementById("boton_calular");
boton_calcular.addEventListener("click", metodoDeuremberg);

function metodoDeuremberg() {
	peso_kg = document.getElementById("peso").value;
	console.log("Peso: ", peso_kg);

	altura_m = document.getElementById("altura").value;
	console.log("Altura: ", altura_m);

	edad = document.getElementById("edad").value;
	console.log("Edad: ", edad);

	IMC = peso_kg / altura_m**2;
	console.log("IMC: ", IMC);

	document.getElementById("indice_masa_muscular").innerHTML = IMC.toFixed(2);

	genero = document.getElementById("genero").value;

	if(genero == "hombre") {
		factor_genero = 10.8;
	} else if(genero == "mujer") {
		factor_genero = 0;
	}

	porcentaje_grasa = 1.2*IMC + 0.23*edad - factor_genero - 5.4;
	console.log("% grasa: ", porcentaje_grasa);

	document.getElementById("porcentaje_grasa").innerHTML = porcentaje_grasa.toFixed(2);

	peso_grasa_kg = peso_kg*porcentaje_grasa/100;
	console.log("Kg. grasa: ", peso_grasa_kg);

	document.getElementById("kilogramos_grasa").innerHTML = peso_grasa_kg.toFixed(2);
}