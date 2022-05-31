// HABILITACIÓN-DESHABILITACIÓN DE INPUTS NUMBER DE PROFUNIDAD //

// ** CONDUCTOR ** //

// ACCESO AL INPUT NUMBER DE PROFUNDIDAD //
var PRC = document.getElementById("PRC");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "PRC" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber0 () {
	console.log('Vamos a habilitar el input text');
	PRC.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber0" //
var conductorsi = document.getElementById("conductorsi");
conductorsi.addEventListener("click", habilitarNumber0);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "PRC" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber1 () {
	console.log('Vamos a deshabilitar el input text');
	PRC.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber1" //
var conductorno = document.getElementById("conductorno");
conductorno.addEventListener("click", habilitarNumber1);


// ** SUPERFICIAL ** //

// ACCESO AL INPUT NUMBER DE PROFUNDIDAD //
var PRS = document.getElementById("PRS");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "PRS" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber2 () {
	console.log('Vamos a habilitar el input text');
	PRS.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber2" //
var superficialsi = document.getElementById("superficialsi");
superficialsi.addEventListener("click", habilitarNumber2);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "PRs" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber3 () {
	console.log('Vamos a deshabilitar el input text');
	PRS.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber3" //
var superficialno = document.getElementById("superficialno");
superficialno.addEventListener("click", habilitarNumber3);


// ** SUPERFICIAL II ** //

// ACCESO AL INPUT NUMBER DE PROFUNDIDAD //
var PRSII = document.getElementById("PRSII");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "PRSII" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber4 () {
	console.log('Vamos a habilitar el input text');
	PRSII.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber4" //
var superficialIIsi = document.getElementById("superficialIIsi");
superficialIIsi.addEventListener("click", habilitarNumber4);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "PRSII" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber5 () {
	console.log('Vamos a deshabilitar el input text');
	PRSII.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber5" //
var superficialIIno = document.getElementById("superficialIIno");
superficialIIno.addEventListener("click", habilitarNumber5);


// ** INTERMEDIO ** //

// ACCESO AL INPUT NUMBER DE PROFUNDIDAD //
var PRi = document.getElementById("PRi");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "PRi" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber6 () {
	console.log('Vamos a habilitar el input text');
	PRi.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber6" //
var intermediosi = document.getElementById("intermediosi");
intermediosi.addEventListener("click", habilitarNumber6);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "PRi" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber7 () {
	console.log('Vamos a deshabilitar el input text');
	PRi.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber7" //
var intermediono = document.getElementById("intermediono");
intermediono.addEventListener("click", habilitarNumber7);


// ** INTERMEDIO II ** //

// ACCESO AL INPUT NUMBER DE PROFUNDIDAD "PRiII", A LA LISTA DE OPCIONES "tipoDeRiII", AL INPUT NUMBER DE PROFUNDIDAD DE COLGADOR "PColgiII" Y A LA LISTA DE OPCIONES TIEBACK "reqTieBackiII" //
var PRiII = document.getElementById("PRiII");
var tipoDeRiII = document.getElementById("tipoDeRiII");
var PColgiII = document.getElementById("PColgiII");
var reqTieBackiII = document.getElementById("reqTieBackiII");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "PRiII" Y A LA LISTA DE OPCIONES "tipoDeRiII" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
// ADEMÁS, SI LA OPCIÓN "2" ESTÁ ELEGIDA EN "tipoDeRiII", HABILITA TAMBIÉN AL INPUT NUMBER "PColgiII" Y A LA LISTA DE OPCIONES "reqTieBackiII" //
function habilitarNumber8 () {
	console.log('Vamos a habilitar el input text');
	PRiII.disabled = false;
	tipoDeRiII.disabled = false;
	if(tipoDeRiII.value == "2"){
		PColgiII.disabled = false;
		reqTieBackiII.disabled = false;
	}
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber8" //
var intermedioIIsi = document.getElementById("intermedioIIsi");
intermedioIIsi.addEventListener("click", habilitarNumber8);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "PRiII", A LA LISTA DE OPCIONES "tipoDeRiII", AL INPUT NUMBER "PColgiII" Y A LA LISTA DE OPCIONES "reqTieBackiII" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber9 () {
	console.log('Vamos a deshabilitar el input text');
	PRiII.disabled = true;
	tipoDeRiII.disabled = true;
	PColgiII.disabled = true;
	reqTieBackiII.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber9" //
var intermedioIIno = document.getElementById("intermedioIIno");
intermedioIIno.addEventListener("click", habilitarNumber9);


// FUNCIÓN PARA QUE LA OPCIÓN "Colgado a" HABILITE EL INPUT NUMBER DE PROFUNDIDAD DE COLGADOR "PColgiII" Y A LA LISTA DE OPCIONES "reqTieBackiII" //
// ADEMÁS, LA OPCIÓN "Hasta superficie" DESHABILITA TODO LO ANTES DICHO //

function habilitarProfColgiII(){
	var tipoDeRiII_value = tipoDeRiII.value;
	if(tipoDeRiII_value == "1"){
		PColgiII.disabled = true;
		reqTieBackiII.disabled = true;
	}
	else if(tipoDeRiII_value == "2"){
		PColgiII.disabled = false;
		reqTieBackiII.disabled = false;
	}
}


// ** PRODUCCIÓN ** //

// ACCESO AL INPUT NUMBER DE PROFUNDIDAD "PRP, A LA LISTA DE OPCIONES "tipoDeRP", AL INPUT NUMBER "PColgP", Y LA LISTA DE OPCIONES "reqTieBackP" //
var PRP = document.getElementById("PRP");
var tipoDeRP = document.getElementById("tipoDeRP");
var PColgP = document.getElementById("PColgP");
var reqTieBackP = document.getElementById("reqTieBackP");
var tipoDeLinerP = document.getElementById("tipoDeLinerP");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "PRP" Y A LA LISTA DE OPCIONES "tipoDeRP" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
// ADEMÁS, SI LA OPCIÓN "2" ESTÁ ELEGIDA EN "tipoDeRP", HABILITA TAMBIÉN AL INPUT NUMBER "PColgP" Y A LAS LISTAS DE OPCIONES "reqTieBackP" Y "tipoDeLinerP" //
function habilitarNumber10 () {
	console.log('Vamos a habilitar el input text');
	PRP.disabled = false;
	tipoDeRP.disabled = false;
	if(tipoDeRP.value == "2"){
		PColgP.disabled = false;
		reqTieBackP.disabled = false;
		tipoDeLinerP.disabled = false;
	}
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber10" //
var produccionsi = document.getElementById("produccionsi");
produccionsi.addEventListener("click", habilitarNumber10);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "PRP", A LA LISTA DE OPCIONES "tipoDeRP", AL INPUT NUMBER "PColgP" Y LAS LISTAS DE OPCIONES "reqTieBackP" Y "tipoDeLinerP" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber11 () {
	console.log('Vamos a deshabilitar el input text');
	PRP.disabled = true;
	tipoDeRP.disabled = true;
	PColgP.disabled = true;
	reqTieBackP.disabled = true;
	tipoDeLinerP.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber11" //
var produccionno = document.getElementById("produccionno");
produccionno.addEventListener("click", habilitarNumber11);

// FUNCIÓN PARA QUE LA OPCIÓN "Colgado a" HABILITE EL INPUT NUMBER DE PROFUNDIDAD DE COLGADOR "PColgP" Y LAS LISTAS DE OPCIONES "reqTieBackP" Y "tipoDeLinerP" //
// ADEMÁS, LA OPCIÓN "Hasta superficie" DESHABILITA TODO LO ANTES DICHO //

function habilitarProfColgP(){
	var tipoDeRP_value = tipoDeRP.value;
	if(tipoDeRP_value == "1"){
		PColgP.disabled = true;
		reqTieBackP.disabled = true;
		tipoDeLinerP.disabled = true;
	}
	else if(tipoDeRP_value == "2"){
		PColgP.disabled = false;
		reqTieBackP.disabled = false;
		tipoDeLinerP.disabled = false;
	}
}

// ** PRODUCCIÓN II ** //

// ACCESO AL INPUT NUMBER "PRPII", A LA LISTA DE OPCIONES "tipoDeRPII", AL INPUT NUMBER "PColgPII" Y A LA LISTA DE OPCIONES "reqTieBackPII" //
var PRPII = document.getElementById("PRPII");
var tipoDeRPII = document.getElementById("tipoDeRPII");
var PColgPII = document.getElementById("PColgPII");
var reqTieBackPII = document.getElementById("reqTieBackPII");
var tipoDeLinerPII = document.getElementById("tipoDeLinerPII");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "PRiII" Y A LA LISTA DE OPCIONES "tipoDeRPII" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
// ADEMÁS, SI LA OPCIÓN "2" ESTÁ ELEGIDA EN "tipoDeRPII", HABILITA TAMBIÉN AL INPUT NUMBER "PColgPII" Y A LA LISTA DE OPCIONES "reqTieBackPII" //
function habilitarNumber12 () {
	console.log('Vamos a habilitar el input text');
	PRPII.disabled = false;
	tipoDeRPII.disabled = false;
	if(tipoDeRPII.value == "2"){
		PColgPII.disabled = false;
		reqTieBackPII.disabled = false;
		tipoDeLinerPII.disabled = false;
	}
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber12" //
var produccionIIsi = document.getElementById("produccionIIsi");
produccionIIsi.addEventListener("click", habilitarNumber12);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "PRiII", A LA LISTA DE OPCIONES "tipoDeRPII", AL UNPUT NUMBER "PColgPII" Y A LA LISTA DE OPCIONES "reqTieBackPII" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber13 () {
	console.log('Vamos a deshabilitar el input text');
	PRPII.disabled = true;
	tipoDeRPII.disabled = true;
	PColgPII.disabled = true;
	reqTieBackPII.disabled = true;
	tipoDeLinerPII.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber13" //
var produccionIIno = document.getElementById("produccionIIno");
produccionIIno.addEventListener("click", habilitarNumber13);


// FUNCIÓN PARA QUE LA OPCIÓN "Colgado a" HABILITE EL INPUT NUMBER DE PROFUNDIDAD DE COLGADOR "PColgPII" Y A LA LISTA DE OPCIONES "reqTieBackPII" //
// ADEMÁS, LA OPCIÓN "Hasta superficie" DESHABILITA TODO LO ANTES DICHO //

function habilitarProfColgPII(){
	var tipoDeRPII_value = tipoDeRPII.value;
	if(tipoDeRPII_value == "1"){
		PColgPII.disabled = true;
		reqTieBackPII.disabled = true;
		tipoDeLinerPII.disabled = true;
	}
	else if(tipoDeRPII_value == "2"){
		PColgPII.disabled = false;
		reqTieBackPII.disabled = false;
		tipoDeLinerPII.disabled = false;
	}
}

// ******************************************************************************* //

// DEFINIR EL CONTEXTO DE CANVAS //

var d = document.getElementById("diag_mec");
var lienzo = d.getContext("2d");
var ancho = d.width;
var centro = ancho / 2;
var alto = d.height;

// AÑADIR EL EVENTO DE ELABORAR EL GRÁFICO AL BOTÓN DE HTML //
var boton = document.getElementById("boton_diagrama");
boton.addEventListener("click", diagramaMecanico);


// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS) //
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	
}

// FUNCIÓN PARA DIBUJAR LÍNEAS Y RELLENAR EL ÁREA (3 PUNTOS) DELIMITADA POR ELLAS //
function zapatas(color, xinicial, yinicial, xtrans, ytrans, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.fillStyle = (color);
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xtrans,ytrans);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.closePath();
	lienzo.fill();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS PUNTEADAS (2 PUNTOS) //
function dibujarLinerRanurado(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.setLineDash([5,5]);
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.setLineDash([]);
}

// MARCO (FUERA DE LA FUNCIÓN DE DIBUJO "diagramaMecanico" PARA QUE SEA SIEMPRE VISIBLE) //

	dibujarLinea("blue", 1, 1, 1, alto - 1); // LÍNEA VERTICAL IZQUIERDA //
	dibujarLinea("blue", 1, alto - 1, ancho - 1, alto - 1); // LÍNEA HORIZONTAL INFERIOR //
	dibujarLinea("blue", 1, 1, ancho - 1, 1); // LÍNEA HORIZONTAL SUPERIOR //
	dibujarLinea("blue", ancho - 1, 1, ancho - 1, alto - 1); // ´LÍNEA VERTICAL DERECHA //

// FUNCIÓN PARA ELABORACIÓN DEL DIAGRAMA MECÁNICO RESULTANTE AL HACER CLICK EN EL BOTÓN DE HTML //

function diagramaMecanico(){

	// DEFINIR LAS VARIABLES FALTANTES QUE SE UTILIZARÁN PARA EL DIBUJO //
	var Prof_Rev_Cond = PRC.value;
	var Prof_Rev_Sup = PRS.value;
	var Prof_Rev_SupII = PRSII.value;
	var Prof_Rev_Int = PRi.value;
	var Prof_Rev_IntII = PRiII.value;
		var tipo_de_rev_IntII = tipoDeRiII.value; // "1": Hasta Superficie, "2": Colgado a //
		var Prof_Colg_IntII = PColgiII.value;
		var Req_Tie_Back_intII = reqTieBackiII.value; // "1": No requiere, "2": Requiere //
	var Prof_Rev_Prod = PRP.value;
		var tipo_de_rev = tipoDeRP.value; // "1": Hasta Superficie, "2": Colgado a //
		var Prof_Colg = PColgP.value;
		var Req_Tie_Back_Prod = reqTieBackP.value; // "1": No requiere, "2": Requiere //
		var Tipo_de_Liner_Prod = tipoDeLinerP.value; // "1": Liso, "2": Ranurado //
	var Prof_Rev_ProdII = PRPII.value;
		var tipo_de_rev_ProdII = tipoDeRPII.value; // "1": Hasta Superficie, "2": Colgado a //
		var Prof_Colg_ProdII = PColgPII.value;
		var Req_Tie_Back_ProdII = reqTieBackPII.value; // "1": No requiere, "2": Requiere //
		var Tipo_de_Liner_ProdII = tipoDeLinerPII.value; // "1": Liso, "2": Ranurado //

	var YRevProd = (12/15)*alto;

	


	// REVESTIDOR CONDUCTOR //
	if(Prof_Rev_Cond != "" && PRC.disabled == false){
	dibujarLinea("black", centro - (ancho/8), 0, centro - (ancho/8), (YRevProd*(Prof_Rev_Sup/3))/Prof_Rev_Prod);
	dibujarLinea("black", centro + (ancho/8), 0, centro + (ancho/8), (YRevProd*(Prof_Rev_Sup/3))/Prof_Rev_Prod);
	}
	// REVESTIDOR SUPERFICIAL //
	if(PRS.disabled == false){
	dibujarLinea("black", centro - (ancho/10), 0, centro - (ancho/10), (YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod);
	dibujarLinea("black", centro + (ancho/10), 0, centro + (ancho/10), (YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod);
	}

	// REVESTIDOR SUPERFICIAL II //
	if(PRSII.disabled == false){
	dibujarLinea("black", centro - (ancho/12), 0, centro - (ancho/12), (YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod);
	dibujarLinea("black", centro + (ancho/12), 0, centro + (ancho/12), (YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod);
	}

	// REVESTIDOR INTERMEDIO //
	if(PRi.disabled == false){
	dibujarLinea("black", centro - (ancho/15), 0, centro - (ancho/15), (YRevProd)*Prof_Rev_Int/Prof_Rev_Prod);
	dibujarLinea("black", centro + (ancho/15), 0, centro + (ancho/15), (YRevProd)*Prof_Rev_Int/Prof_Rev_Prod);
	}

	// REVESTIDOR INTERMEDIO II //

	if(tipo_de_rev_IntII == "1" && PRiII.disabled == false){
		dibujarLinea("black", centro - (ancho/20), 0, centro - (ancho/20), (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod);
		dibujarLinea("black", centro + (ancho/20), 0, centro + (ancho/20), (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod);
	}
	else if(tipo_de_rev_IntII == "2" && PColgiII.disabled == false && PRiII.disabled == false){

		dibujarLinea("black", centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod, centro - (ancho/20), (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod); // LÍNEA VERTICAL IZQUIERDA //
		dibujarLinea("black", centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod, centro + (ancho/20), (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod); // LÍNEA VERTICAL DERECHA //
		dibujarLinea("black", centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod, centro - (ancho/15), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod); // LÍNEA HORIZONTAL IZQUIERDA //
		dibujarLinea("black", centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod, centro + (ancho/15), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod); // LÍNEA HORIZONTAL DERECHA //
		// COLGADOR (IZQUIERDA) //
		dibujarLinea("black", centro - (ancho/15), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod, centro - (ancho/20), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL ASCENDENTE //
		dibujarLinea("black", centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod, centro - (ancho/15), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL DESCENDENTE //
		dibujarLinea("black", centro - (ancho/15), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5, centro - (ancho/20), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5); // LÍNEA HORIZONTAL SUPERIOR //
		dibujarLinea("black", centro - (ancho/20), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5, centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod); // LÍNEA VERTICAL DERECHA //
		// COLGADOR (DERECHA) //
		dibujarLinea("black", centro + (ancho/15), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod, centro + (ancho/20), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL DESCENDENTE //
		dibujarLinea("black", centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod, centro + (ancho/15), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL ASCENDENTE //
		dibujarLinea("black", centro + (ancho/15), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5, centro + (ancho/20), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5); // LÍNEA HORIZONTAL SUPERIOR //
		dibujarLinea("black", centro + (ancho/20), ((YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod)-5, centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod); // LÍNEA VERTICAL IZQUIERDA //
		if(Req_Tie_Back_intII == "2"){
			dibujarLinea("black", centro - (ancho/20), 0, centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod); // LÍNEA IZQUIERDA DEL TIE BACK //
			dibujarLinea("black", centro + (ancho/20), 0, centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/Prof_Rev_Prod); // LÍNEA DERECHA DEL TIE BACK //
		}
	}


	// REVESTIDOR DE PRODUCCIÓN //

	if(tipo_de_rev == "1" && PRP.disabled == false)
	{
		dibujarLinea("black", centro - (ancho/30), 0, centro - (ancho/30), (YRevProd)*(Prof_Rev_Prod/Prof_Rev_Prod));
		dibujarLinea("black", centro + (ancho/30), 0, centro + (ancho/30), (YRevProd)*(Prof_Rev_Prod/Prof_Rev_Prod));
	}
	else if(tipo_de_rev == "2" && PRP.disabled == false && PColgP.disabled == false)
	{
		
		if(Req_Tie_Back_Prod == "2")
		{
			dibujarLinea("black", centro - (ancho/30), 0, centro - (ancho/30), (YRevProd)*(Prof_Colg/Prof_Rev_Prod)); // LÍNEA IZQUIERDA DEL TIE BACK //
			dibujarLinea("black", centro + (ancho/30), 0, centro + (ancho/30), (YRevProd)*(Prof_Colg/Prof_Rev_Prod)); // LÍNEA DERECHA DEL TIE BACK //
		}

		if(Prof_Rev_IntII == "" || PRiII.disabled == true)
		{
			
			if(Tipo_de_Liner_Prod == "1")
			{
				console.log("Liner Prod Es liso");
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/30), (YRevProd));
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/30), (YRevProd));
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/15), (YRevProd)*Prof_Colg/Prof_Rev_Prod);
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/15), (YRevProd)*Prof_Colg/Prof_Rev_Prod);
			}
			else if(Tipo_de_Liner_Prod =="2")
			{
				console.log("Liner Prod Es ranurado");
				dibujarLinerRanurado("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/30), (YRevProd));
				dibujarLinerRanurado("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/30), (YRevProd));
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/15), (YRevProd)*Prof_Colg/Prof_Rev_Prod);
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/15), (YRevProd)*Prof_Colg/Prof_Rev_Prod);
			}

			// COLGADOR (IZQUIERDA) //
			dibujarLinea("black", centro - (ancho/15), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/15), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro - (ancho/15), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5, centro - (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro - (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5, centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod); // LÍNEA VERTICAL DERECHA //
			// COLGADOR (DERECHA) //
			dibujarLinea("black", centro + (ancho/15), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/15), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro + (ancho/15), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5, centro + (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro + (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5, centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod); // LÍNEA VERTICAL IZQUIERDA //
		}

		else
		{
			if(Tipo_de_Liner_Prod =="1")
			{
				console.log("Liner Prod Es liso");
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/30), (YRevProd));
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/30), (YRevProd));
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/20), (YRevProd)*Prof_Colg/Prof_Rev_Prod);
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/20), (YRevProd)*Prof_Colg/Prof_Rev_Prod);
			}
			else if(Tipo_de_Liner_Prod =="2")
			{
				console.log("Liner Prod Es ranurado");
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/20), (YRevProd)*Prof_Colg/Prof_Rev_Prod);
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/20), (YRevProd)*Prof_Colg/Prof_Rev_Prod);
				dibujarLinerRanurado("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/30), (YRevProd));
				dibujarLinerRanurado("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/30), (YRevProd));

			}
			
			// COLGADOR (IZQUIERDA) //
			dibujarLinea("black", centro - (ancho/20), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro - (ancho/20), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro - (ancho/20), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5, centro - (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro - (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5, centro - (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod); // LÍNEA VERTICAL DERECHA //
			// COLGADOR (DERECHA) //
			dibujarLinea("black", centro + (ancho/20), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod, centro + (ancho/20), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro + (ancho/20), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5, centro + (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro + (ancho/30), ((YRevProd)*Prof_Colg/Prof_Rev_Prod)-5, centro + (ancho/30), (YRevProd)*Prof_Colg/Prof_Rev_Prod); // LÍNEA VERTICAL IZQUIERDA //
		}
	}


	// REVESTIDOR DE PRODUCCIÓN II //

	if(Prof_Rev_ProdII != "" && PRPII.disabled == false){

		if(tipo_de_rev_ProdII == "1"){
			dibujarLinea("black", centro - (ancho/60), 0, centro - (ancho/60), ((Prof_Rev_ProdII/Prof_Rev_Prod)*YRevProd));
			dibujarLinea("black", centro + (ancho/60), 0, centro + (ancho/60), ((Prof_Rev_ProdII/Prof_Rev_Prod)*YRevProd));
		}
		else if(tipo_de_rev_ProdII == "2" && PColgPII.disabled == false)
		{
				
				if (Tipo_de_Liner_ProdII == "1")
				{
					console.log("Liner Prod II Es liso");
					dibujarLinea("black", centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro - (ancho/60), ((Prof_Rev_ProdII/Prof_Rev_Prod)*YRevProd));
					dibujarLinea("black", centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro + (ancho/60), ((Prof_Rev_ProdII/Prof_Rev_Prod)*YRevProd));
					dibujarLinea("black", centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro - (ancho/30), ((Prof_Colg_ProdII/Prof_Rev_Prod)*YRevProd)); // LÍNEA HORIZONTAL INFERIOR DEL COLGADOR IZQ. //
					dibujarLinea("black", centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro + (ancho/30), ((Prof_Colg_ProdII/Prof_Rev_Prod)*YRevProd)); // LÍNEA HORIZONTAL INFERIOR DEL COLGADOR DER. //
				}
				else if(Tipo_de_Liner_ProdII =="2")
				{
					console.log("Liner Prod II Es ranurado");
					dibujarLinea("black", centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro - (ancho/30), ((Prof_Colg_ProdII/Prof_Rev_Prod)*YRevProd)); // LÍNEA HORIZONTAL INFERIOR DEL COLGADOR IZQ. //
					dibujarLinea("black", centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro + (ancho/30), ((Prof_Colg_ProdII/Prof_Rev_Prod)*YRevProd)); // LÍNEA HORIZONTAL INFERIOR DEL COLGADOR DER. //
					dibujarLinerRanurado("black",centro - (ancho/60),(YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod,centro - (ancho/60),((Prof_Rev_ProdII/Prof_Rev_Prod)*YRevProd));
					dibujarLinerRanurado("black", centro + (ancho/60),(YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro + (ancho/60),((Prof_Rev_ProdII/Prof_Rev_Prod)*YRevProd));
				}
				// COLGADOR (IZQUIERDA) //
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro - (ancho/60), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL ASCENDENTE //
				dibujarLinea("black", centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro - (ancho/30), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL DESCENDENTE //
				dibujarLinea("black", centro - (ancho/30), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5, centro - (ancho/60), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5); // LÍNEA HORIZONTAL SUPERIOR //
				dibujarLinea("black", centro - (ancho/60), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5, centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod); // LÍNEA VERTICAL DERECHA //
				// COLGADOR (DERECHA) //
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro + (ancho/60), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL DESCENDENTE //
				dibujarLinea("black", centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod, centro + (ancho/30), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5); // LÍNEA DIAGONAL ASCENDENTE //
				dibujarLinea("black", centro + (ancho/30), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5, centro + (ancho/60), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5); // LÍNEA HORIZONTAL SUPERIOR //
				dibujarLinea("black", centro + (ancho/60), ((YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod)-5, centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/Prof_Rev_Prod); // LÍNEA VERTICAL IZQUIERDA //
				
				if(Req_Tie_Back_ProdII == "2")
				{
					dibujarLinea("black", centro - (ancho/60), 0, centro - (ancho/60), ((Prof_Colg_ProdII/Prof_Rev_Prod)*YRevProd)); // LÍNEA IZQUIERDA DEL TIE BACK //
					dibujarLinea("black", centro + (ancho/60), 0, centro + (ancho/60), ((Prof_Colg_ProdII/Prof_Rev_Prod)*YRevProd)); // LÍNEA DERECHA DEL TIE BACK //
				}
		}
	}

	// ZAPATAS //


	// CONDUCTOR //
	if(Prof_Rev_Cond != "" && PRC.disabled == false)
	{
	zapatas("blue", centro - (ancho/8), (YRevProd)*(Prof_Rev_Sup/3)/Prof_Rev_Prod, (centro - (ancho/8)) - (ancho/60), (YRevProd)*(Prof_Rev_Sup/3)/Prof_Rev_Prod, centro - (ancho/8), ((YRevProd)*(Prof_Rev_Sup/3)/Prof_Rev_Prod)-(alto/60));
	zapatas("blue", centro + (ancho/8), (YRevProd)*(Prof_Rev_Sup/3)/Prof_Rev_Prod, (centro + (ancho/8)) + (ancho/60), (YRevProd)*(Prof_Rev_Sup/3)/Prof_Rev_Prod, centro + (ancho/8), ((YRevProd)*(Prof_Rev_Sup/3)/Prof_Rev_Prod)-(alto/60));
	}
	// SUPERFICIAL //
	if(PRS.disabled == false)
	{
	zapatas("blue", centro - (ancho/10), (YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod, (centro - (ancho/10)) - (ancho/60), (YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod, centro - (ancho/10), ((YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod)-(alto/60));
	zapatas("blue", centro + (ancho/10), (YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod, (centro + (ancho/10)) + (ancho/60), (YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod, centro + (ancho/10), ((YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod)-(alto/60));
	}
	// SUPERFICIAL II//
	if(PRSII.disabled == false)
	{
	zapatas("blue", centro - (ancho/12), (YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod, (centro - (ancho/12)) - (ancho/60), (YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod, centro - (ancho/12), ((YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod)-(alto/60));
	zapatas("blue", centro + (ancho/12), (YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod, (centro + (ancho/12)) + (ancho/60), (YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod, centro + (ancho/12), ((YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod)-(alto/60));
	}
	// INTERMEDIO //
	if(PRi.disabled == false)
	{
	zapatas("blue", centro - (ancho/15), (YRevProd)*Prof_Rev_Int/Prof_Rev_Prod, (centro - (ancho/15)) - (ancho/60), (YRevProd)*Prof_Rev_Int/Prof_Rev_Prod, centro - (ancho/15), ((YRevProd)*Prof_Rev_Int/Prof_Rev_Prod)-(alto/60));
	zapatas("blue", centro + (ancho/15), (YRevProd)*Prof_Rev_Int/Prof_Rev_Prod, (centro + (ancho/15)) + (ancho/60), (YRevProd)*Prof_Rev_Int/Prof_Rev_Prod, centro + (ancho/15), ((YRevProd)*Prof_Rev_Int/Prof_Rev_Prod)-(alto/60));
	}
	// INTERMEDIO II //
	if(PRiII.disabled == false)
	{
	zapatas("blue", centro - (ancho/20), (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod, (centro - (ancho/20)) - (ancho/60), (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod, centro - (ancho/20), ((YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod)-(alto/60));
	zapatas("blue", centro + (ancho/20), (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod, (centro + (ancho/20)) + (ancho/60), (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod, centro + (ancho/20), ((YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod)-(alto/60));
	}
	// PRODUCCIÓN //
	if(PRP.disabled == false)
	{
	zapatas("blue", centro - (ancho/30), (YRevProd*(Prof_Rev_Prod/Prof_Rev_Prod)), (centro - (ancho/30)) - (ancho/60), (YRevProd*(Prof_Rev_Prod/Prof_Rev_Prod)), centro - (ancho/30), (YRevProd)-(alto/60));
	zapatas("blue", centro + (ancho/30), (YRevProd*(Prof_Rev_Prod/Prof_Rev_Prod)), (centro + (ancho/30)) + (ancho/60), (YRevProd*(Prof_Rev_Prod/Prof_Rev_Prod)), centro + (ancho/30), (YRevProd)-(alto/60));
	}
	// PRODUCCIÓN II//
	if(PRPII.disabled == false)
	{
	zapatas("blue", centro - (ancho/60), (YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod)), (centro - (ancho/60)) - (ancho/60), (YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod)), centro - (ancho/60), (YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod))-(alto/60));
	zapatas("blue", centro + (ancho/60), (YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod)), (centro + (ancho/60)) + (ancho/60), (YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod)), centro + (ancho/60), (YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod))-(alto/60));
	}


	// TEXTOS EN EL DIAGRAMA //

	lienzo.font = '11px "Tahoma"';
	lienzo.fillStyle = "black";

	// CONDUCTOR //
	if(Prof_Rev_Cond != "" && PRC.disabled == false)
	{
	lienzo.fillText(Prof_Rev_Cond+"'", ((centro - (ancho/8)) - (ancho/60))-30, (YRevProd)*(Prof_Rev_Sup/3)/Prof_Rev_Prod);
	lienzo.fillText("Rev. Conductor", ((centro + (ancho/8)) + (ancho/60))+10, (YRevProd)*(Prof_Rev_Sup/3)/Prof_Rev_Prod);
	}

	// SUPERFICIAL //
	if(PRS.disabled == false)
	{
	lienzo.fillText(Prof_Rev_Sup+"'", ((centro - (ancho/10)) - (ancho/60))-35, (YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod);
	lienzo.fillText("Rev. Superficial", ((centro + (ancho/10)) + (ancho/60))+10, (YRevProd)*Prof_Rev_Sup/Prof_Rev_Prod);
	}
	// SUPERFICIAL II //
	if(PRSII.disabled == false)
	{
	lienzo.fillText(Prof_Rev_SupII+"'", ((centro - (ancho/12)) - (ancho/60))-35, (YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod);
	lienzo.fillText("Rev. Superficial II", ((centro + (ancho/12)) + (ancho/60))+10, (YRevProd)*Prof_Rev_SupII/Prof_Rev_Prod);
	}
	// INTERMEDIO //
	if(PRi.disabled == false)
	{
	lienzo.fillText(Prof_Rev_Int+"'", ((centro - (ancho/15)) - (ancho/60))-35, (YRevProd)*Prof_Rev_Int/Prof_Rev_Prod);
	lienzo.fillText("Rev. Intermedio", ((centro + (ancho/15)) + (ancho/60))+10, (YRevProd)*Prof_Rev_Int/Prof_Rev_Prod);
	}
	// INTERMEDIO II //
	if(PRiII.disabled == false)
	{
		lienzo.fillText(Prof_Rev_IntII+"'", ((centro - (ancho/20)) - (ancho/60))-35, (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod);
		if(Prof_Colg_IntII == "")
		{
			lienzo.fillText("Rev. Intermedio II", ((centro + (ancho/20)) + (ancho/60))+10, (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod);
		}
		else
		{
			lienzo.fillText("Liner Intermedio II", ((centro + (ancho/20)) + (ancho/60))+10, (YRevProd)*Prof_Rev_IntII/Prof_Rev_Prod);
		}
	}
	// PRODUCCIÓN //
	if(PRP.disabled == false)
	{
		lienzo.fillText(Prof_Rev_Prod+"'", ((centro - (ancho/30)) - (ancho/60))-35, YRevProd*(Prof_Rev_Prod/Prof_Rev_Prod));
		if(Prof_Colg == "")
		{
			lienzo.fillText("Rev. de Prod.", ((centro + (ancho/30)) + (ancho/60))+10, YRevProd*(Prof_Rev_Prod/Prof_Rev_Prod));
		}
		else
		{
			lienzo.fillText("Liner de Prod.", ((centro + (ancho/30)) + (ancho/60))+10, YRevProd*(Prof_Rev_Prod/Prof_Rev_Prod));
		}
	}
	// PRODUCCIÓN II //
	if(PRPII.disabled == false)
	{
		lienzo.fillText(Prof_Rev_ProdII+"'", ((centro - (ancho/60)) - (ancho/60))-35, YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod));
		if(Prof_Colg_ProdII == "")
		{
			lienzo.fillText("Rev. de Prod. II", ((centro + (ancho/60)) + (ancho/60))+10, YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod));
		}
		else
		{
			lienzo.fillText("Liner de Prod. II", ((centro + (ancho/60)) + (ancho/60))+10, YRevProd*(Prof_Rev_ProdII/Prof_Rev_Prod));
		}
	}
}

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML //
var boton2 = document.getElementById("borrar_diagrama");
boton2.addEventListener("click", borrarDiagramaMecanico);

// FUNCIÓN PARA BORRAR EL DIAGRAMA MECÁNICO RESULTANTE AL HACER CLICK EN EL BOTÓN DE HTML //

function borrarDiagramaMecanico ()
{
	lienzo.clearRect(2, 2, ancho-4, alto-4);
}