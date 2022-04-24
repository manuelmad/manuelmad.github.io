// ACCESO AL BOTÓN DE CÁLCULO Y EVENTO PARA QUE EJECUTE LA FUNCIÓN //
var boton_calcular = document.getElementById("interpolar");
boton_calcular.addEventListener("click", interpolar);


function interpolar()
{
	// VARIABLES //
	var prof_1 = document.getElementById("prof1").value;
	var prof1 = Number(prof_1);

	var den_1 = document.getElementById("den1").value;
	var den1 = Number(den_1);

	var prof_2 = document.getElementById("prof2").value;
	var prof2 = Number(prof_2);

	var den_2 = document.getElementById("den2").value;
	var den2 = Number(den_2);

	var prof_3 = document.getElementById("prof3").value;
	var prof3 = Number(prof_3);

	var den_3 = document.getElementById("den3").value;
	var den3 = Number(den_3);

	var resultado;

	if(prof_1 == "")
	{
		resultado = prof3 - ((prof3-prof2)*(den3-den1)/(den3-den2));
		document.getElementById("resultado").innerHTML = resultado.toFixed(0);
	}
	else if(den_1 == "")
	{
		resultado = den3 - ((prof3-prof1)*(den3-den2)/(prof3-prof2));
		document.getElementById("resultado").innerHTML = resultado.toFixed(1);
	}
	else if(prof_2 == "")
	{
		resultado = prof3 - ((prof3-prof1)*(den3-den2)/(den3-den1));
		document.getElementById("resultado").innerHTML = resultado.toFixed(0);
	}
	else if(den_2 == "")
	{
		resultado = den3 - ((prof3-prof2)*(den3-den1)/(prof3-prof1));
		document.getElementById("resultado").innerHTML = resultado.toFixed(1);
	}
	else if(prof_3 == "")
	{
		resultado = prof1 - ((prof1-prof2)*(den1-den3)/(den1-den2));
		document.getElementById("resultado").innerHTML = resultado.toFixed(0);
	}
	else if(den_3 == "")
	{
		resultado = den1 - ((prof1-prof3)*(den1-den2)/(prof1-prof2));
		document.getElementById("resultado").innerHTML = resultado.toFixed(1);
	}
}

