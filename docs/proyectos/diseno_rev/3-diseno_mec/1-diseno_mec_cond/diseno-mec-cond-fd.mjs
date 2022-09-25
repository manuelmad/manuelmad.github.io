// FACTORES DE DISEÑO PDVSA //

// CONDUCTOR //
const FDcolapsoCond = 1.0;
const FDestallidoCond = 1.0; // No existe, lo coloco por conveniencia.
const FDtensionCond = 1.0; // No existe, lo coloco por conveniencia.

// SUPERFICIAL E INTERMEDIO //
const FDcolapsoSupInt = 1.0;
const FDestallidoSupInt = 1.1;
const FDtensionSupInt = 1.6;

// PRODUCCIÓN //
const FDcolapsoProd = 1.1;
const FDestallidoProd = 1.1;
const FDtensionProd = 1.6;


// ***************** FACTORES DE DISEÑO ******************** //

// // MOSTRAR Y OCULTAR A PLACER LA SECCIÓN DE FACTORES DE DISEÑO //
var mostrar_ocultar_SFD = document.getElementById("mostrar_ocultar_SFD");
mostrar_ocultar_SFD.addEventListener("click", mostrarOcultarSFD);

var div1FD = document.getElementById("div1FD");
div1FD.style.display = "none";

export function mostrarOcultarSFD()
{
	if(div1FD.style.display == "none")
	{
		div1FD.style.display = "block";
	}
	else if(div1FD.style.display == "block")
	{
		div1FD.style.display = "none";
	}
}

export function calculoFactores()
{
	var ProfCS = document.getElementById("profSuperfTablaB2");
	var prof_cond_sup = ProfCS.innerHTML;
	document.getElementById("profSuperfTablaF").innerHTML = prof_cond_sup;

	var ProfCF = document.getElementById("profFondoTablaB2");
	var prof_asent_cond = ProfCF.innerHTML;
	document.getElementById("profFondoTablaF").innerHTML = prof_asent_cond;

	// ESTALLIDO //

	// SUPERFICIE //
	var PDESuperf = document.getElementById("presionSuperfTablaE"); // Accedo a etiqueta span //
	var PDE_S = PDESuperf.innerHTML; // Tomo el contenido de la etiqueta span a la cual conseguí acceso //

	var COREstSup = document.getElementById("resisEstCorregSuperfTablaB2");
	var correccion_estallido_sup = COREstSup.innerHTML;

	var FDE_S = correccion_estallido_sup / PDE_S;

	document.getElementById("FDESuperfTablaF").innerHTML = FDE_S.toFixed(2);

	/* NO EXISTE FACTOR DE DISEÑO PARA ESTALLIDO, ASÍ QUE NO SE DEBERÍA COLOCARÁ NINGÚN AVISO DE FALLA PARA ESTA CONDICIÓN */
	if(FDE_S < FDestallidoCond) // DENOTAR QUE EL REVESTIDOR FALLA EN SUPERFICIE //
	{
		document.getElementById("aviso_falla_estallidoCorregidoS").style.display = "block";
		document.getElementById("aviso_falla_estallidoCorregidoS").innerHTML = "AVISO: El revestidor falla por estallido en superficie luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBSuperfE").style.display = "block";
		document.getElementById("OBSuperfE").innerHTML = "- El revestidor falla por estallido en superficie luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDESuperfTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_estallidoCorregidoS").innerHTML = "";
		document.getElementById("OBSuperfE").innerHTML = "";
		document.getElementById("FDESuperfTablaF").style.color = "black";
	}

	// FONDO //
	var PDEFondo = document.getElementById("presionFondoTablaE");
	var PDE_F = PDEFondo.innerHTML;

	var COREstFondo = document.getElementById("resisEstCorregFondoTablaB2");
	var correccion_estallido_fondo = COREstFondo.innerHTML;

	var FDE_F = correccion_estallido_fondo / PDE_F;

	document.getElementById("FDEFondoTablaF").innerHTML = FDE_F.toFixed(2);

	/* NO EXISTE FACTOR DE DISEÑO PARA ESTALLIDO, ASÍ QUE NO SE DEBERÍA COLOCARÁ NINGÚN AVISO DE FALLA PARA ESTA CONDICIÓN */
	if(FDE_F < FDestallidoCond) // DENOTAR QUE EL REVESTIDOR FALLA EN FONDO //
	{
		document.getElementById("aviso_falla_estallidoCorregidoF").style.display = "block";
		document.getElementById("aviso_falla_estallidoCorregidoF").innerHTML = "AVISO: El revestidor falla por estallido en fondo luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBFondoE").style.display = "block";
		document.getElementById("OBFondoE").innerHTML = "- El revestidor falla por estallido en fondo luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDEFondoTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_estallidoCorregidoF").innerHTML = "";
		document.getElementById("OBFondoE").innerHTML = "";
		document.getElementById("FDEFondoTablaF").style.color = "black";
	}

	// COLAPSO //

	// SUPERFICIE //
	var PDCSuperf = document.getElementById("presionSuperfTablaC");
	var PDC_S = PDCSuperf.innerHTML;

	var CORColSuperf = document.getElementById("resisColCorregSuperfTablaB2");
	var correccion_colapso_sup = CORColSuperf.innerHTML;

	var FDC_S = correccion_colapso_sup / PDC_S;

	//Condicional para que cuando el denominador sea cero, no aparezca "Infinity" sino "-" (Siempre será Infinity en superficie)//
	if(FDC_S == "Infinity")
	{
		document.getElementById("FDCSuperfTablaF").innerHTML = "-";
	}
	else
	{
		document.getElementById("FDCSuperfTablaF").innerHTML = FDC_S.toFixed(2);
	}

	if(FDC_S < FDcolapsoCond) // DENOTAR QUE EL REVESTIDOR FALLA EN SUPERFICIE //
	{
		document.getElementById("aviso_falla_colapsoCorregidoS").style.display = "block";
		document.getElementById("aviso_falla_colapsoCorregidoS").innerHTML = "AVISO: El revestidor falla por colapso en superficie luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBSuperfC").style.display = "block";
		document.getElementById("OBSuperfC").innerHTML = "- El revestidor falla por colapso en superficie luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDCSuperfTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_colapsoCorregidoS").innerHTML = "";
		document.getElementById("OBSuperfC").innerHTML = "";
		document.getElementById("FDCSuperfTablaF").style.color = "black";
	}

	// FONDO //
	var PDCFondo = document.getElementById("presionFondoTablaC");
	var PDC_F = PDCFondo.innerHTML;

	var CORColFondo = document.getElementById("resisColCorregFondoTablaB2");
	var correccion_colapso_fondo = CORColFondo.innerHTML;

	var FDC_F = correccion_colapso_fondo / PDC_F;

	document.getElementById("FDCFondoTablaF").innerHTML = FDC_F.toFixed(2);	

	if(FDC_F < FDcolapsoCond) // DENOTAR QUE EL REVESTIDOR FALLA EN FONDO //
	{
		document.getElementById("aviso_falla_colapsoCorregidoF").style.display = "block";
		document.getElementById("aviso_falla_colapsoCorregidoF").innerHTML = "AVISO: El revestidor falla por colapso en fondo luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBFondoC").style.display = "block";
		document.getElementById("OBFondoC").innerHTML = "- El revestidor falla por colapso en fondo luego de la corrección por tensión. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDCFondoTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_colapsoCorregidoF").innerHTML = "";
		document.getElementById("OBFondoC").innerHTML = "";
		document.getElementById("FDCFondoTablaF").style.color = "black";
	}
	

	// TENSIÓN //
	var resistencia_tesion_cond = Number(document.getElementById("RT_rev_cond").value);

	// SUPERFICIE //
	var FaxOs = document.getElementById("tensionOverpullSuperfTablaT");
	var Fax_Os = FaxOs.innerHTML;
	var FDT_S = resistencia_tesion_cond / Fax_Os;

	document.getElementById("FDTSuperfTablaF").innerHTML = FDT_S.toFixed(2);

	/* NO EXISTE FACTOR DE DISEÑO PARA ESTALLIDO, ASÍ QUE NO SE DEBERÍA COLOCARÁ NINGÚN AVISO DE FALLA PARA ESTA CONDICIÓN */
	if(FDT_S < FDtensionCond) // DENOTAR QUE EL REVESTIDOR FALLA EN SUPERFICIE //
	{
		document.getElementById("aviso_falla_tensionCorregidoS").style.display = "block";
		document.getElementById("aviso_falla_tensionCorregidoS").innerHTML = "AVISO: El revestidor falla por tensión en superficie. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBSuperfT").style.display = "block";
		document.getElementById("OBSuperfT").innerHTML = "- El revestidor falla por tensión en superficie. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDTSuperfTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_tensionCorregidoS").innerHTML = "";
		document.getElementById("OBSuperfT").innerHTML = "";
		document.getElementById("FDTSuperfTablaF").style.color = "black";
	}

	// FONDO //
	var FaxOf = document.getElementById("tensionOverpullFondoTablaT");
	var Fax_Of = FaxOf.innerHTML;
	var FDT_F = resistencia_tesion_cond / Fax_Of;

	if(FDT_F > 0 || FDT_F != "Infinity") {
		document.getElementById("FDTFondoTablaF").innerHTML = FDT_F.toFixed(2);
	}
	else {
		document.getElementById("FDTFondoTablaF").innerHTML = "-";
	}

	/* NO EXISTE FACTOR DE DISEÑO PARA ESTALLIDO, ASÍ QUE NO SE DEBERÍA COLOCARÁ NINGÚN AVISO DE FALLA PARA ESTA CONDICIÓN */
	if(FDT_F < FDtensionCond) // DENOTAR QUE EL REVESTIDOR FALLA EN FONDO //
	{
		document.getElementById("aviso_falla_tensionCorregidoF").style.display = "block";
		document.getElementById("aviso_falla_tensionCorregidoF").innerHTML = "AVISO: El revestidor falla por tension en fondo. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("OBFondoT").style.display = "block";
		document.getElementById("OBFondoT").innerHTML = "- El revestidor falla por tension en fondo. Elegir nuevo revestidor y reiniciar el estudio desde el primer paso (Estallido).";
		document.getElementById("FDTFondoTablaF").style.color = "red";
	}
	else
	{
		document.getElementById("aviso_falla_tensionCorregidoF").innerHTML = "";
		document.getElementById("OBFondoT").innerHTML = "";
		document.getElementById("FDTFondoTablaF").style.color = "black";
	}

	if(FDE_S > FDestallidoCond && FDE_F > FDestallidoCond && FDC_S > FDcolapsoCond && FDC_F > FDcolapsoCond && FDT_S > FDtensionCond && FDT_F > FDtensionCond) {
		document.getElementById("rev_apto").innerHTML = "El revestidor seleccionado es apto para las condiciones de estallido, colapso, tensión y corrección biaxial actuales.";
	}
	else {
		document.getElementById("rev_apto").innerHTML = "";
	}
}