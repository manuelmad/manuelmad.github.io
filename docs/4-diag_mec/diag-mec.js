// FUNCIÓN PARA QUE LAS INSTRUCCIONES SE ABRAN EN UNA VENTANA DE TAMAÑO REDUCIDO
function ventanaSecundaria (URL)
{ 
   window.open(URL,"INSTRUCCIONES DE USO DE LA APLICACIÓN","width=800,height=400,scrollbars=YES");
}

// HABILITAR-DESHABILITAR INPUTS //

// ** CONDUCTOR ** //

// ACCESO A LOS INPUT //
var PRC = document.getElementById("PRC");
var DRC = document.getElementById("DRC");
var WRC = document.getElementById("WRC");
var GRC = document.getElementById("GRC");

// FUNCIÓN QUE HABILITA TODOS LOS INPUT CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber0 () {
	PRC.disabled = false;
	DRC.disabled = false;
	WRC.disabled = false;
	GRC.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber0" //
var conductorsi = document.getElementById("conductorsi");
conductorsi.addEventListener("click", habilitarNumber0);

// FUNCIÓN QUE DESHABILITA TODOS LOS INPUT CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber1 () {
	PRC.disabled = true;
	DRC.disabled = true;
	WRC.disabled = true;
	GRC.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber1" //
var conductorno = document.getElementById("conductorno");
conductorno.addEventListener("click", habilitarNumber1);


// ** SUPERFICIAL ** //

// ACCESO A LOS INPUT //
var PRS = document.getElementById("PRS");
var DRS = document.getElementById("DRS");
var WRS = document.getElementById("WRS");
var GRS = document.getElementById("GRS");

// FUNCIÓN QUE HABILITA LOS INPUT CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber2 () {
	PRS.disabled = false;
	DRS.disabled = false;
	WRS.disabled = false;
	GRS.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber2" //
var superficialsi = document.getElementById("superficialsi");
superficialsi.addEventListener("click", habilitarNumber2);


// FUNCIÓN QUE DESHABILITA LOS INPUT CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber3 () {
	PRS.disabled = true;
	DRS.disabled = true;
	WRS.disabled = true;
	GRS.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber3" //
var superficialno = document.getElementById("superficialno");
superficialno.addEventListener("click", habilitarNumber3);


// ** SUPERFICIAL II ** //

// ACCESO AL INPUT NUMBER DE PROFUNDIDAD //
var PRSII = document.getElementById("PRSII");
var DRSII = document.getElementById("DRSII");
var WRSII = document.getElementById("WRSII");
var GRSII = document.getElementById("GRSII");

// FUNCIÓN QUE HABILITA EL INPUT NUMBER "PRSII" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber4 () {
	PRSII.disabled = false;
	DRSII.disabled = false;
	WRSII.disabled = false;
	GRSII.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber4" //
var superficialIIsi = document.getElementById("superficialIIsi");
superficialIIsi.addEventListener("click", habilitarNumber4);


// FUNCIÓN QUE DESHABILITA EL INPUT NUMBER "PRSII" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber5 () {
	PRSII.disabled = true;
	DRSII.disabled = true;
	WRSII.disabled = true;
	GRSII.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber5" //
var superficialIIno = document.getElementById("superficialIIno");
superficialIIno.addEventListener("click", habilitarNumber5);


// ** INTERMEDIO ** //

// ACCESO A LOS INPUT //
var PRi = document.getElementById("PRi");
var DRi = document.getElementById("DRi");
var WRi = document.getElementById("WRi");
var GRi = document.getElementById("GRi");

// FUNCIÓN QUE HABILITA LOS INPUT CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
function habilitarNumber6 () {
	PRi.disabled = false;
	DRi.disabled = false;
	WRi.disabled = false;
	GRi.disabled = false;
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber6" //
var intermediosi = document.getElementById("intermediosi");
intermediosi.addEventListener("click", habilitarNumber6);


// FUNCIÓN QUE DESHABILITA LOS INPUT CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber7 () {
	PRi.disabled = true;
	DRi.disabled = true;
	WRi.disabled = true;
	GRi.disabled = true;
}

// EVENTO PARA QUE EL INPUT RADIO "NO" LLAME A LA FUNCIÓN "habilitarNumber7" //
var intermediono = document.getElementById("intermediono");
intermediono.addEventListener("click", habilitarNumber7);


// ** INTERMEDIO II ** //

// ACCESO A LOS INPUT, A LA LISTA DE OPCIONES "tipoDeRiII", AL INPUT NUMBER DE PROFUNDIDAD DE COLGADOR "PColgiII" Y A LA LISTA DE OPCIONES TIEBACK "reqTieBackiII" //
var PRiII = document.getElementById("PRiII");
var DRiII = document.getElementById("DRiII");
var WRiII = document.getElementById("WRiII");
var GRiII = document.getElementById("GRiII");

var tipoDeRiII = document.getElementById("tipoDeRiII");
var PColgiII = document.getElementById("PColgiII");
var reqTieBackiII = document.getElementById("reqTieBackiII");

// FUNCIÓN QUE HABILITA LOS INPUT Y LA LISTA DE OPCIONES "tipoDeRiII" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
// ADEMÁS, SI LA OPCIÓN "2" ESTÁ ELEGIDA EN "tipoDeRiII", HABILITA TAMBIÉN AL INPUT NUMBER "PColgiII" Y A LA LISTA DE OPCIONES "reqTieBackiII" //
function habilitarNumber8 () {
	PRiII.disabled = false;
	DRiII.disabled = false;
	WRiII.disabled = false;
	GRiII.disabled = false;

	tipoDeRiII.disabled = false;
	if(tipoDeRiII.value == "2"){
		PColgiII.disabled = false;
		reqTieBackiII.disabled = false;
	}
}

// EVENTO PARA QUE EL INPUT RADIO "SÍ" LLAME A LA FUNCIÓN "habilitarNumber8" //
var intermedioIIsi = document.getElementById("intermedioIIsi");
intermedioIIsi.addEventListener("click", habilitarNumber8);


// FUNCIÓN QUE DESHABILITA LOS INPUT, A LA LISTA DE OPCIONES "tipoDeRiII", AL INPUT NUMBER "PColgiII" Y A LA LISTA DE OPCIONES "reqTieBackiII" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber9 () {
	PRiII.disabled = true;
	DRiII.disabled = true;
	WRiII.disabled = true;
	GRiII.disabled = true;
	
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

// ACCESO A LOS INPUT, A LA LISTA DE OPCIONES "tipoDeRP", AL INPUT NUMBER "PColgP", Y LA LISTA DE OPCIONES "reqTieBackP" //
var PRP = document.getElementById("PRP");
var DRP = document.getElementById("DRP");
var WRP = document.getElementById("WRP");
var GRP = document.getElementById("GRP");

var tipoDeRP = document.getElementById("tipoDeRP");
var PColgP = document.getElementById("PColgP");
var reqTieBackP = document.getElementById("reqTieBackP");
var tipoDeLinerP = document.getElementById("tipoDeLinerP");

// FUNCIÓN QUE HABILITA LOS INPUT Y A LA LISTA DE OPCIONES "tipoDeRP" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
// ADEMÁS, SI LA OPCIÓN "2" ESTÁ ELEGIDA EN "tipoDeRP", HABILITA TAMBIÉN AL INPUT NUMBER "PColgP" Y A LAS LISTAS DE OPCIONES "reqTieBackP" Y "tipoDeLinerP" //
function habilitarNumber10 () {
	PRP.disabled = false;
	DRP.disabled = false;
	WRP.disabled = false;
	GRP.disabled = false;

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


// FUNCIÓN QUE DESHABILITA A LOS INPUT, A LA LISTA DE OPCIONES "tipoDeRP", AL INPUT NUMBER "PColgP" Y LAS LISTAS DE OPCIONES "reqTieBackP" Y "tipoDeLinerP" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber11 () {
	PRP.disabled = true;
	DRP.disabled = true;
	WRP.disabled = true;
	GRP.disabled = true;

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

// ACCESO A LOS INPUT, A LA LISTA DE OPCIONES "tipoDeRPII", AL INPUT NUMBER "PColgPII" Y A LA LISTA DE OPCIONES "reqTieBackPII" //
var PRPII = document.getElementById("PRPII");
var DRPII = document.getElementById("DRPII");
var WRPII = document.getElementById("WRPII");
var GRPII = document.getElementById("GRPII");

var tipoDeRPII = document.getElementById("tipoDeRPII");
var PColgPII = document.getElementById("PColgPII");
var reqTieBackPII = document.getElementById("reqTieBackPII");
var tipoDeLinerPII = document.getElementById("tipoDeLinerPII");

// FUNCIÓN QUE HABILITA A LOS INPUT Y A LA LISTA DE OPCIONES "tipoDeRPII" CUANDO EL INPUT RADIO "SÍ" ES ELEGIDO //
// ADEMÁS, SI LA OPCIÓN "2" ESTÁ ELEGIDA EN "tipoDeRPII", HABILITA TAMBIÉN AL INPUT NUMBER "PColgPII" Y A LA LISTA DE OPCIONES "reqTieBackPII" //
function habilitarNumber12 () {
	PRPII.disabled = false;
	DRPII.disabled = false;
	WRPII.disabled = false;
	GRPII.disabled = false;

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


// FUNCIÓN QUE DESHABILITA LOS INPUT, A LA LISTA DE OPCIONES "tipoDeRPII", AL UNPUT NUMBER "PColgPII" Y A LA LISTA DE OPCIONES "reqTieBackPII" CUANDO EL INPUT RADIO "NO" ES ELEGIDO //
function habilitarNumber13 () {
	PRPII.disabled = true;
	DRPII.disabled = true;
	WRPII.disabled = true;
	GRPII.disabled = true;

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

// Tamaño de canvas responsivo
var tamano_ventana = window.innerWidth;
console.log(tamano_ventana);
if(tamano_ventana < 600) {
	d.setAttribute("width", 280);
	d.setAttribute("height", 280);
}
else if(tamano_ventana >= 600 && tamano_ventana < 1024) {
	d.setAttribute("width", 550);
	d.setAttribute("height", 550);
}
else if(tamano_ventana >= 1024) {
	d.setAttribute("width", 720);
	d.setAttribute("height", 720);
}

var ancho = d.width;
var centro = ancho / 2;
var alto = d.height;

// AÑADIR EL EVENTO DE ELABORAR EL GRÁFICO AL BOTÓN DE HTML //
var boton = document.getElementById("boton_diagrama");
boton.addEventListener("click", diagramaMecanico);
boton.addEventListener("mouseup", imageSinCurvas);

// FUNCIÓN QUE CAPTURA EL CANVAS SIN LOS REVESTIDORES //
function imageSinCurvas()
{
	ImageData = lienzo.getImageData(0, 0, ancho, alto);
}

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
	dibujarLinea("black", 1, 1, 1, alto - 1); // LÍNEA VERTICAL IZQUIERDA //
	dibujarLinea("black", 1, alto - 1, ancho - 1, alto - 1); // LÍNEA HORIZONTAL INFERIOR //
	dibujarLinea("black", 1, 1, ancho - 1, 1); // LÍNEA HORIZONTAL SUPERIOR //
	dibujarLinea("black", ancho - 1, 1, ancho - 1, alto - 1); // ´LÍNEA VERTICAL DERECHA //

// FUNCIÓN PARA ELABORACIÓN DEL DIAGRAMA MECÁNICO RESULTANTE AL HACER CLICK EN EL BOTÓN DE HTML
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

	var array_inputs = [PRC, PRS, PRSII, PRi, PRiII, PRP, PRPII];
	var array_rev = [];

	// Ciclo para agregar al array_rev los valores de los inputs que estén habilitados
	for(i=0; i < array_inputs.length; i++) {
		if(array_inputs[i].disabled == false) {
			array_rev.push(array_inputs[i].value);
		}
	}

	// Los inputs y valores están ordenados obligatoriamente de menor a mayor en la aplicación. Por eso el mayor valor es simplemente el último elemento del array
	var rev_mas_prof = array_rev[array_rev.length-1];

	var YRevCond = (8/225)*alto; // Profundidad en px fija para el conductor
	var YRevProd = (12/15)*alto; // Profundidad en px fija para el más profundo

	
	// REVESTIDOR CONDUCTOR //
	if(Prof_Rev_Cond != "" && PRC.disabled == false){
	dibujarLinea("black", centro - (ancho/8), 0, centro - (ancho/8), YRevCond);
	dibujarLinea("black", centro + (ancho/8), 0, centro + (ancho/8), YRevCond);
	}
	// REVESTIDOR SUPERFICIAL //
	if(Prof_Rev_Sup!= "" && PRS.disabled == false){
	dibujarLinea("black", centro - (ancho/10), 0, centro - (ancho/10), (YRevProd)*Prof_Rev_Sup/rev_mas_prof);
	dibujarLinea("black", centro + (ancho/10), 0, centro + (ancho/10), (YRevProd)*Prof_Rev_Sup/rev_mas_prof);
	}

	// REVESTIDOR SUPERFICIAL II //
	if(PRSII.disabled == false){
	dibujarLinea("black", centro - (ancho/12), 0, centro - (ancho/12), (YRevProd)*Prof_Rev_SupII/rev_mas_prof);
	dibujarLinea("black", centro + (ancho/12), 0, centro + (ancho/12), (YRevProd)*Prof_Rev_SupII/rev_mas_prof);
	}

	// REVESTIDOR INTERMEDIO //
	if(PRi.disabled == false){
	dibujarLinea("black", centro - (ancho/15), 0, centro - (ancho/15), (YRevProd)*Prof_Rev_Int/rev_mas_prof);
	dibujarLinea("black", centro + (ancho/15), 0, centro + (ancho/15), (YRevProd)*Prof_Rev_Int/rev_mas_prof);
	}

	// REVESTIDOR INTERMEDIO II //

	if(tipo_de_rev_IntII == "1" && PRiII.disabled == false){
		dibujarLinea("black", centro - (ancho/20), 0, centro - (ancho/20), (YRevProd)*Prof_Rev_IntII/rev_mas_prof);
		dibujarLinea("black", centro + (ancho/20), 0, centro + (ancho/20), (YRevProd)*Prof_Rev_IntII/rev_mas_prof);
	}
	else if(tipo_de_rev_IntII == "2" && PColgiII.disabled == false && PRiII.disabled == false){

		dibujarLinea("black", centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof, centro - (ancho/20), (YRevProd)*Prof_Rev_IntII/rev_mas_prof); // LÍNEA VERTICAL IZQUIERDA //
		dibujarLinea("black", centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof, centro + (ancho/20), (YRevProd)*Prof_Rev_IntII/rev_mas_prof); // LÍNEA VERTICAL DERECHA //
		dibujarLinea("black", centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof, centro - (ancho/15), (YRevProd)*Prof_Colg_IntII/rev_mas_prof); // LÍNEA HORIZONTAL IZQUIERDA //
		dibujarLinea("black", centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof, centro + (ancho/15), (YRevProd)*Prof_Colg_IntII/rev_mas_prof); // LÍNEA HORIZONTAL DERECHA //
		// COLGADOR (IZQUIERDA) //
		dibujarLinea("black", centro - (ancho/15), (YRevProd)*Prof_Colg_IntII/rev_mas_prof, centro - (ancho/20), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5); // LÍNEA DIAGONAL ASCENDENTE //
		dibujarLinea("black", centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof, centro - (ancho/15), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5); // LÍNEA DIAGONAL DESCENDENTE //
		dibujarLinea("black", centro - (ancho/15), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5, centro - (ancho/20), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5); // LÍNEA HORIZONTAL SUPERIOR //
		dibujarLinea("black", centro - (ancho/20), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5, centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof); // LÍNEA VERTICAL DERECHA //
		// COLGADOR (DERECHA) //
		dibujarLinea("black", centro + (ancho/15), (YRevProd)*Prof_Colg_IntII/rev_mas_prof, centro + (ancho/20), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5); // LÍNEA DIAGONAL DESCENDENTE //
		dibujarLinea("black", centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof, centro + (ancho/15), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5); // LÍNEA DIAGONAL ASCENDENTE //
		dibujarLinea("black", centro + (ancho/15), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5, centro + (ancho/20), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5); // LÍNEA HORIZONTAL SUPERIOR //
		dibujarLinea("black", centro + (ancho/20), ((YRevProd)*Prof_Colg_IntII/rev_mas_prof)-5, centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof); // LÍNEA VERTICAL IZQUIERDA //
		if(Req_Tie_Back_intII == "2"){
			dibujarLinea("black", centro - (ancho/20), 0, centro - (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof); // LÍNEA IZQUIERDA DEL TIE BACK //
			dibujarLinea("black", centro + (ancho/20), 0, centro + (ancho/20), (YRevProd)*Prof_Colg_IntII/rev_mas_prof); // LÍNEA DERECHA DEL TIE BACK //
		}
	}


	// REVESTIDOR DE PRODUCCIÓN //
	// Hasta superficie
	if(tipo_de_rev == "1" && PRP.disabled == false)
	{
		dibujarLinea("black", centro - (ancho/30), 0, centro - (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof));
		dibujarLinea("black", centro + (ancho/30), 0, centro + (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof));
	}
	// Colgado
	else if(tipo_de_rev == "2" && PRP.disabled == false && PColgP.disabled == false)
	{	
		// Con tieback
		if(Req_Tie_Back_Prod == "2")
		{
			dibujarLinea("black", centro - (ancho/30), 0, centro - (ancho/30), (YRevProd)*(Prof_Colg/rev_mas_prof)); // LÍNEA IZQUIERDA DEL TIE BACK //
			dibujarLinea("black", centro + (ancho/30), 0, centro + (ancho/30), (YRevProd)*(Prof_Colg/rev_mas_prof)); // LÍNEA DERECHA DEL TIE BACK //
		}
		// Colgado al Intermedio I
		if(Prof_Rev_IntII == "" || PRiII.disabled == true)
		{
			if(Tipo_de_Liner_Prod == "1")
			{
				console.log("El liner de producción es liso");
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)); // Línea vertical izquierda
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)); // Línea vertical derecha
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/15), (YRevProd)*Prof_Colg/rev_mas_prof); // Línea horizontal inferior izquierda
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/15), (YRevProd)*Prof_Colg/rev_mas_prof); // Línea horizontal inferior derecha
			}
			else if(Tipo_de_Liner_Prod =="2")
			{
				console.log("El liner de producción es ranurado");
				dibujarLinerRanurado("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)); // Línea vertical izquierda
				dibujarLinerRanurado("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)); // Línea vertical derecha
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/15), (YRevProd)*Prof_Colg/rev_mas_prof); // Línea horizontal superior izquierda
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/15), (YRevProd)*Prof_Colg/rev_mas_prof);  // Línea horizontal superior derecha
			}

			// COLGADOR (IZQUIERDA) //
			dibujarLinea("black", centro - (ancho/15), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/15), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro - (ancho/15), ((YRevProd)*Prof_Colg/rev_mas_prof)-5, centro - (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro - (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5, centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof); // LÍNEA VERTICAL DERECHA //
			// COLGADOR (DERECHA) //
			dibujarLinea("black", centro + (ancho/15), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/15), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro + (ancho/15), ((YRevProd)*Prof_Colg/rev_mas_prof)-5, centro + (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro + (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5, centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof); // LÍNEA VERTICAL IZQUIERDA //
		}
		// Colgado al Intermedio II
		else
		{
			if(Tipo_de_Liner_Prod =="1")
			{
				console.log("El Liner de Producción es liso");
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)); // Línea izquierda
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)); // Línea derecha
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/20), (YRevProd)*Prof_Colg/rev_mas_prof); // Línea horizontal inferior izquierda
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/20), (YRevProd)*Prof_Colg/rev_mas_prof); // Línea horizontal inferior derecha
			}
			else if(Tipo_de_Liner_Prod =="2")
			{
				console.log("El liner de producción es ranurado");
				dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/20), (YRevProd)*Prof_Colg/rev_mas_prof); // Línea horizontal inferior izquierda
				dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/20), (YRevProd)*Prof_Colg/rev_mas_prof); // Línea horizontal inferior derecha
				dibujarLinerRanurado("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)); // Línea vertical izquierda
				dibujarLinerRanurado("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)); // Línea vertical derecha
			}
			
			// COLGADOR (IZQUIERDA) //
			dibujarLinea("black", centro - (ancho/20), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro - (ancho/20), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro - (ancho/20), ((YRevProd)*Prof_Colg/rev_mas_prof)-5, centro - (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro - (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5, centro - (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof); // LÍNEA VERTICAL DERECHA //
			// COLGADOR (DERECHA) //
			dibujarLinea("black", centro + (ancho/20), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof, centro + (ancho/20), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro + (ancho/20), ((YRevProd)*Prof_Colg/rev_mas_prof)-5, centro + (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro + (ancho/30), ((YRevProd)*Prof_Colg/rev_mas_prof)-5, centro + (ancho/30), (YRevProd)*Prof_Colg/rev_mas_prof); // LÍNEA VERTICAL IZQUIERDA //
		}
	}


	// REVESTIDOR DE PRODUCCIÓN II //
	if(Prof_Rev_ProdII != "" && PRPII.disabled == false){
		// Hasta superficie
		if(tipo_de_rev_ProdII == "1"){
			dibujarLinea("black", centro - (ancho/60), 0, centro - (ancho/60), ((Prof_Rev_ProdII/rev_mas_prof)*YRevProd));
			dibujarLinea("black", centro + (ancho/60), 0, centro + (ancho/60), ((Prof_Rev_ProdII/rev_mas_prof)*YRevProd));
		}
		// Colgado
		else if(tipo_de_rev_ProdII == "2" && PColgPII.disabled == false)
		{		
			if (Tipo_de_Liner_ProdII == "1")
			{
				console.log("El liner de producción II es liso");
				dibujarLinea("black", centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro - (ancho/60), ((Prof_Rev_ProdII/rev_mas_prof)*YRevProd)); // Línea vertical izquierda
				dibujarLinea("black", centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro + (ancho/60), ((Prof_Rev_ProdII/rev_mas_prof)*YRevProd)); // Línea vertical derecha
				dibujarLinea("black", centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro - (ancho/30), ((Prof_Colg_ProdII/rev_mas_prof)*YRevProd)); // LÍNEA HORIZONTAL INFERIOR DEL COLGADOR IZQ. //
				dibujarLinea("black", centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro + (ancho/30), ((Prof_Colg_ProdII/rev_mas_prof)*YRevProd)); // LÍNEA HORIZONTAL INFERIOR DEL COLGADOR DER. //
			}
			else if(Tipo_de_Liner_ProdII =="2")
			{
				console.log("El liner de producción II es ranurado");
				dibujarLinea("black", centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro - (ancho/30), ((Prof_Colg_ProdII/rev_mas_prof)*YRevProd)); // LÍNEA HORIZONTAL INFERIOR DEL COLGADOR IZQ. //
				dibujarLinea("black", centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro + (ancho/30), ((Prof_Colg_ProdII/rev_mas_prof)*YRevProd)); // LÍNEA HORIZONTAL INFERIOR DEL COLGADOR DER. //
				dibujarLinerRanurado("black",centro - (ancho/60),(YRevProd)*Prof_Colg_ProdII/rev_mas_prof,centro - (ancho/60),((Prof_Rev_ProdII/rev_mas_prof)*YRevProd)); // Línea vertical izquierda
				dibujarLinerRanurado("black", centro + (ancho/60),(YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro + (ancho/60),((Prof_Rev_ProdII/rev_mas_prof)*YRevProd)); // Línea vertical derecha
			}
			// COLGADOR (IZQUIERDA) //
			dibujarLinea("black", centro - (ancho/30), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro - (ancho/60), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro - (ancho/30), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro - (ancho/30), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5, centro - (ancho/60), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro - (ancho/60), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5, centro - (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof); // LÍNEA VERTICAL DERECHA //

			// COLGADOR (DERECHA) //
			dibujarLinea("black", centro + (ancho/30), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro + (ancho/60), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5); // LÍNEA DIAGONAL DESCENDENTE //
			dibujarLinea("black", centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof, centro + (ancho/30), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5); // LÍNEA DIAGONAL ASCENDENTE //
			dibujarLinea("black", centro + (ancho/30), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5, centro + (ancho/60), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5); // LÍNEA HORIZONTAL SUPERIOR //
			dibujarLinea("black", centro + (ancho/60), ((YRevProd)*Prof_Colg_ProdII/rev_mas_prof)-5, centro + (ancho/60), (YRevProd)*Prof_Colg_ProdII/rev_mas_prof); // LÍNEA VERTICAL IZQUIERDA //
				
			if(Req_Tie_Back_ProdII == "2")
			{
				dibujarLinea("black", centro - (ancho/60), 0, centro - (ancho/60), ((Prof_Colg_ProdII/rev_mas_prof)*YRevProd)); // LÍNEA IZQUIERDA DEL TIE BACK //
				dibujarLinea("black", centro + (ancho/60), 0, centro + (ancho/60), ((Prof_Colg_ProdII/rev_mas_prof)*YRevProd)); // LÍNEA DERECHA DEL TIE BACK //
			}
		}
	}

	// ZAPATAS //

	// CONDUCTOR //
	if(Prof_Rev_Cond != "" && PRC.disabled == false)
	{
		zapatas("blue", centro - (ancho/8), YRevCond, (centro - (ancho/8)) - (ancho/60), YRevCond, centro - (ancho/8), YRevCond-(alto/60));
		zapatas("blue", centro + (ancho/8), YRevCond, (centro + (ancho/8)) + (ancho/60), YRevCond, centro + (ancho/8), YRevCond-(alto/60));
	}

	// SUPERFICIAL //
	if(PRS.disabled == false)
	{
		zapatas("blue", centro - (ancho/10), (YRevProd)*Prof_Rev_Sup/rev_mas_prof, (centro - (ancho/10)) - (ancho/60), (YRevProd)*Prof_Rev_Sup/rev_mas_prof, centro - (ancho/10), ((YRevProd)*Prof_Rev_Sup/rev_mas_prof)-(alto/60));
		zapatas("blue", centro + (ancho/10), (YRevProd)*Prof_Rev_Sup/rev_mas_prof, (centro + (ancho/10)) + (ancho/60), (YRevProd)*Prof_Rev_Sup/rev_mas_prof, centro + (ancho/10), ((YRevProd)*Prof_Rev_Sup/rev_mas_prof)-(alto/60));
	}

	// SUPERFICIAL II//
	if(PRSII.disabled == false)
	{
		zapatas("blue", centro - (ancho/12), (YRevProd)*Prof_Rev_SupII/rev_mas_prof, (centro - (ancho/12)) - (ancho/60), (YRevProd)*Prof_Rev_SupII/rev_mas_prof, centro - (ancho/12), ((YRevProd)*Prof_Rev_SupII/rev_mas_prof)-(alto/60));
		zapatas("blue", centro + (ancho/12), (YRevProd)*Prof_Rev_SupII/rev_mas_prof, (centro + (ancho/12)) + (ancho/60), (YRevProd)*Prof_Rev_SupII/rev_mas_prof, centro + (ancho/12), ((YRevProd)*Prof_Rev_SupII/rev_mas_prof)-(alto/60));
	}

	// INTERMEDIO //
	if(PRi.disabled == false)
	{
		zapatas("blue", centro - (ancho/15), (YRevProd)*Prof_Rev_Int/rev_mas_prof, (centro - (ancho/15)) - (ancho/60), (YRevProd)*Prof_Rev_Int/rev_mas_prof, centro - (ancho/15), ((YRevProd)*Prof_Rev_Int/rev_mas_prof)-(alto/60));
		zapatas("blue", centro + (ancho/15), (YRevProd)*Prof_Rev_Int/rev_mas_prof, (centro + (ancho/15)) + (ancho/60), (YRevProd)*Prof_Rev_Int/rev_mas_prof, centro + (ancho/15), ((YRevProd)*Prof_Rev_Int/rev_mas_prof)-(alto/60));
	}

	// INTERMEDIO II //
	if(PRiII.disabled == false)
	{
		zapatas("blue", centro - (ancho/20), (YRevProd)*Prof_Rev_IntII/rev_mas_prof, (centro - (ancho/20)) - (ancho/60), (YRevProd)*Prof_Rev_IntII/rev_mas_prof, centro - (ancho/20), ((YRevProd)*Prof_Rev_IntII/rev_mas_prof)-(alto/60));
		zapatas("blue", centro + (ancho/20), (YRevProd)*Prof_Rev_IntII/rev_mas_prof, (centro + (ancho/20)) + (ancho/60), (YRevProd)*Prof_Rev_IntII/rev_mas_prof, centro + (ancho/20), ((YRevProd)*Prof_Rev_IntII/rev_mas_prof)-(alto/60));
	}

	// PRODUCCIÓN //
	if(PRP.disabled == false)
	{
		zapatas("blue", centro - (ancho/30), (YRevProd*(Prof_Rev_Prod/rev_mas_prof)), (centro - (ancho/30)) - (ancho/60), (YRevProd*(Prof_Rev_Prod/rev_mas_prof)), centro - (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)-(alto/60));
		zapatas("blue", centro + (ancho/30), (YRevProd*(Prof_Rev_Prod/rev_mas_prof)), (centro + (ancho/30)) + (ancho/60), (YRevProd*(Prof_Rev_Prod/rev_mas_prof)), centro + (ancho/30), (YRevProd)*(Prof_Rev_Prod/rev_mas_prof)-(alto/60));
	}

	// PRODUCCIÓN II//
	if(PRPII.disabled == false)
	{
		zapatas("blue", centro - (ancho/60), (YRevProd*(Prof_Rev_ProdII/rev_mas_prof)), (centro - (ancho/60)) - (ancho/60), (YRevProd*(Prof_Rev_ProdII/rev_mas_prof)), centro - (ancho/60), (YRevProd*(Prof_Rev_ProdII/rev_mas_prof))-(alto/60));
		zapatas("blue", centro + (ancho/60), (YRevProd*(Prof_Rev_ProdII/rev_mas_prof)), (centro + (ancho/60)) + (ancho/60), (YRevProd*(Prof_Rev_ProdII/rev_mas_prof)), centro + (ancho/60), (YRevProd*(Prof_Rev_ProdII/rev_mas_prof))-(alto/60));
	}


	// TEXTOS EN EL DIAGRAMA //
	if(tamano_ventana < 600) {
		lienzo.font = '8px "Tahoma"';
	}
	else {
		lienzo.font = '11px "Tahoma"';
	}
	lienzo.fillStyle = "black";

	// CONDUCTOR //
	var diam_cond = document.getElementById("DRC").value;
	var peso_cond = document.getElementById("WRC").value;
	var grado_cond = document.getElementById("GRC").value;

	var array_carac_cond = [diam_cond, peso_cond, grado_cond];
	
	var texto_cond;
	for(i=0; i < array_carac_cond.length; i++) {
		if(array_carac_cond[i] != "") {
			if(i == 0) {
				texto_cond = array_carac_cond[i] + '"';
			}
			else if(i == 1) {
				if(texto_cond != undefined) {
					texto_cond = texto_cond + ", " + array_carac_cond[i] + " lbs/pie";
				}
				else {
					texto_cond = array_carac_cond[i] + " lbs/pie";
				}
				
			}
			else if(i == 2) {
				if(texto_cond != undefined) {
					texto_cond = texto_cond + ", " + array_carac_cond[i];
				}
				else {
					texto_cond = array_carac_cond[i];
				}
			}
		}
	}

	if(Prof_Rev_Cond != "" && PRC.disabled == false)
	{
		lienzo.textAlign = 'right';
		lienzo.fillText(Prof_Rev_Cond+"'", ((centro - (ancho/8)) - (ancho/60))-5, YRevCond);
		lienzo.textAlign = 'left';
		lienzo.fillText("Rev. Conductor", ((centro + (ancho/8)) + (ancho/60))+5, YRevCond);
		if(texto_cond != undefined) {
			if(tamano_ventana < 600) {
				lienzo.fillText(texto_cond, ((centro + (ancho/8)) + (ancho/60))+5, YRevCond+8);
			}
			else {
				lienzo.fillText(texto_cond, ((centro + (ancho/8)) + (ancho/60))+5, YRevCond+11);
			}
		}
	}

	// SUPERFICIAL //
	var diam_sup = document.getElementById("DRS").value;
	var peso_sup = document.getElementById("WRS").value;
	var grado_sup = document.getElementById("GRS").value;

	var array_carac_sup = [diam_sup, peso_sup, grado_sup];
	var texto_sup;
	for(i=0; i < array_carac_sup.length; i++) {
		if(array_carac_sup[i] != "") {
			if(i == 0) {
				texto_sup = array_carac_sup[i] + '"';
			}
			else if(i == 1) {
				if(texto_sup != undefined) {
					texto_sup = texto_sup + ", " + array_carac_sup[i] + " lbs/pie";
				}
				else {
					texto_sup = array_carac_sup[i] + " lbs/pie";
				}
				
			}
			else if(i == 2) {
				if(texto_sup != undefined) {
					texto_sup = texto_sup + ", " + array_carac_sup[i];
				}
				else {
					texto_sup = array_carac_sup[i];
				}
			}
		}
	}

	if(PRS.disabled == false)
	{
		lienzo.textAlign = 'right';
		lienzo.fillText(Prof_Rev_Sup+"'", ((centro - (ancho/10)) - (ancho/60))-5, (YRevProd)*Prof_Rev_Sup/rev_mas_prof);
		lienzo.textAlign = 'left';
		lienzo.fillText("Rev. Superficial", ((centro + (ancho/10)) + (ancho/60))+5, (YRevProd)*Prof_Rev_Sup/rev_mas_prof);
		if(texto_sup != undefined) {
			if(tamano_ventana < 600) {
				lienzo.fillText(texto_sup, ((centro + (ancho/10)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_Sup)/rev_mas_prof)+8);
			}
			else {
				lienzo.fillText(texto_sup, ((centro + (ancho/10)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_Sup)/rev_mas_prof)+11);
			}
		}
	}

	// SUPERFICIAL II //
	var diam_supII = document.getElementById("DRSII").value;
	var peso_supII = document.getElementById("WRSII").value;
	var grado_supII = document.getElementById("GRSII").value;

	var array_carac_supII = [diam_supII, peso_supII, grado_supII];
	var texto_supII;
	for(i=0; i < array_carac_supII.length; i++) {
		if(array_carac_supII[i] != "") {
			if(i == 0) {
				texto_supII = array_carac_supII[i] + '"';
			}
			else if(i == 1) {
				if(texto_supII != undefined) {
					texto_supII = texto_supII + ", " + array_carac_supII[i] + " lbs/pie";
				}
				else {
					texto_supII = array_carac_supII[i] + " lbs/pie";
				}
				
			}
			else if(i == 2) {
				if(texto_supII != undefined) {
					texto_supII = texto_supII + ", " + array_carac_supII[i];
				}
				else {
					texto_supII = array_carac_supII[i];
				}
			}
		}
	}

	if(PRSII.disabled == false)
	{
		lienzo.textAlign = 'right';
		lienzo.fillText(Prof_Rev_SupII+"'", ((centro - (ancho/12)) - (ancho/60))-5, (YRevProd)*Prof_Rev_SupII/rev_mas_prof);
		lienzo.textAlign = 'left';
		lienzo.fillText("Rev. Superficial II", ((centro + (ancho/12)) + (ancho/60))+5, (YRevProd)*Prof_Rev_SupII/rev_mas_prof);
		if(texto_supII != undefined) {
			if(tamano_ventana < 600) {
				lienzo.fillText(texto_supII, ((centro + (ancho/12)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_SupII)/rev_mas_prof)+8);
			}
			else {
				lienzo.fillText(texto_supII, ((centro + (ancho/12)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_SupII)/rev_mas_prof)+11);
			}
		}
	}

	// INTERMEDIO //
	var diam_int = document.getElementById("DRi").value;
	var peso_int = document.getElementById("WRi").value;
	var grado_int = document.getElementById("GRi").value;

	var array_carac_int = [diam_int, peso_int, grado_int];
	var texto_int;
	for(i=0; i < array_carac_int.length; i++) {
		if(array_carac_int[i] != "") {
			if(i == 0) {
				texto_int = array_carac_int[i] + '"';
			}
			else if(i == 1) {
				if(texto_int != undefined) {
					texto_int = texto_int + ", " + array_carac_int[i] + " lbs/pie";
				}
				else {
					texto_int = array_carac_int[i] + " lbs/pie";
				}
				
			}
			else if(i == 2) {
				if(texto_int != undefined) {
					texto_int = texto_int + ", " + array_carac_int[i];
				}
				else {
					texto_int = array_carac_int[i];
				}
			}
		}
	}

	if(PRi.disabled == false)
	{
		lienzo.textAlign = 'right';
		lienzo.fillText(Prof_Rev_Int+"'", ((centro - (ancho/15)) - (ancho/60))-5, (YRevProd)*Prof_Rev_Int/rev_mas_prof);
		lienzo.textAlign = 'left';
		lienzo.fillText("Rev. Intermedio", ((centro + (ancho/15)) + (ancho/60))+5, (YRevProd)*Prof_Rev_Int/rev_mas_prof);
		if(texto_int != undefined) {
			if(tamano_ventana < 600) {
				lienzo.fillText(texto_int, ((centro + (ancho/15)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_Int)/rev_mas_prof)+8);
			}
			else {
				lienzo.fillText(texto_int, ((centro + (ancho/15)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_Int)/rev_mas_prof)+11);
			}
		}
	}

	// INTERMEDIO II //
	var diam_intII = document.getElementById("DRiII").value;
	var peso_intII = document.getElementById("WRiII").value;
	var grado_intII = document.getElementById("GRiII").value;

	var array_carac_intII = [diam_intII, peso_intII, grado_intII];
	var texto_intII;
	for(i=0; i < array_carac_intII.length; i++) {
		if(array_carac_intII[i] != "") {
			if(i == 0) {
				texto_intII = array_carac_intII[i] + '"';
			}
			else if(i == 1) {
				if(texto_intII != undefined) {
					texto_intII = texto_intII + ", " + array_carac_intII[i] + " lbs/pie";
				}
				else {
					texto_intII = array_carac_intII[i] + " lbs/pie";
				}
				
			}
			else if(i == 2) {
				if(texto_intII != undefined) {
					texto_intII = texto_intII + ", " + array_carac_intII[i];
				}
				else {
					texto_intII = array_carac_intII[i];
				}
			}
		}
	}

	if(PRiII.disabled == false)
	{
		lienzo.textAlign = 'right';
		lienzo.fillText(Prof_Rev_IntII+"'", ((centro - (ancho/20)) - (ancho/60))-5, (YRevProd)*Prof_Rev_IntII/rev_mas_prof);
		lienzo.textAlign = 'left';
		if(Prof_Colg_IntII == "")
		{
			lienzo.fillText("Rev. Intermedio II", ((centro + (ancho/20)) + (ancho/60))+5, (YRevProd)*Prof_Rev_IntII/rev_mas_prof);
		}
		else
		{
			lienzo.fillText("Liner Intermedio II", ((centro + (ancho/20)) + (ancho/60))+5, (YRevProd)*Prof_Rev_IntII/rev_mas_prof);
		}
		if(texto_intII != undefined) {
			if(tamano_ventana < 600) {
				lienzo.fillText(texto_intII, ((centro + (ancho/20)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_IntII)/rev_mas_prof)+8);
			}
			else {
				lienzo.fillText(texto_intII, ((centro + (ancho/20)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_IntII)/rev_mas_prof)+11);
			}
		}
	}

	// PRODUCCIÓN //
	var diam_prod = document.getElementById("DRP").value;
	var peso_prod = document.getElementById("WRP").value;
	var grado_prod = document.getElementById("GRP").value;

	var array_carac_prod = [diam_prod, peso_prod, grado_prod];
	var texto_prod;
	for(i=0; i < array_carac_prod.length; i++) {
		if(array_carac_prod[i] != "") {
			if(i == 0) {
				texto_prod = array_carac_prod[i] + '"';
			}
			else if(i == 1) {
				if(texto_prod != undefined) {
					texto_prod = texto_prod + ", " + array_carac_prod[i] + " lbs/pie";
				}
				else {
					texto_prod = array_carac_prod[i] + " lbs/pie";
				}
				
			}
			else if(i == 2) {
				if(texto_prod != undefined) {
					texto_prod = texto_prod + ", " + array_carac_prod[i];
				}
				else {
					texto_prod = array_carac_prod[i];
				}
			}
		}
	}

	if(PRP.disabled == false)
	{
		lienzo.textAlign = 'right';
		lienzo.fillText(Prof_Rev_Prod+"'", ((centro - (ancho/30)) - (ancho/60))-5, YRevProd*(Prof_Rev_Prod/rev_mas_prof));
		lienzo.textAlign = 'left';
		if(Prof_Colg == "")
		{
			lienzo.fillText("Rev. de Producción", ((centro + (ancho/30)) + (ancho/60))+5, YRevProd*(Prof_Rev_Prod/rev_mas_prof));
		}
		else
		{
			lienzo.fillText("Liner de Producción", ((centro + (ancho/30)) + (ancho/60))+5, YRevProd*(Prof_Rev_Prod/rev_mas_prof));
		}
		if(texto_prod != undefined) {
			if(tamano_ventana < 600) {
				lienzo.fillText(texto_prod, ((centro + (ancho/30)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_Prod)/rev_mas_prof)+8);
			}
			else {
				lienzo.fillText(texto_prod, ((centro + (ancho/30)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_Prod)/rev_mas_prof)+11);
			}
		}
	}

	// PRODUCCIÓN II //
	var diam_prodII = document.getElementById("DRPII").value;
	var peso_prodII = document.getElementById("WRPII").value;
	var grado_prodII = document.getElementById("GRPII").value;

	var array_carac_prodII = [diam_prodII, peso_prodII, grado_prodII];
	var texto_prodII;
	for(i=0; i < array_carac_prodII.length; i++) {
		if(array_carac_prodII[i] != "") {
			if(i == 0) {
				texto_prodII = array_carac_prodII[i] + '"';
			}
			else if(i == 1) {
				if(texto_prodII != undefined) {
					texto_prodII = texto_prodII + ", " + array_carac_prodII[i] + " lbs/pie";
				}
				else {
					texto_prodII = array_carac_prodII[i] + " lbs/pie";
				}
				
			}
			else if(i == 2) {
				if(texto_prodII != undefined) {
					texto_prodII = texto_prodII + ", " + array_carac_prodII[i];
				}
				else {
					texto_prodII = array_carac_prodII[i];
				}
			}
		}
	}

	if(PRPII.disabled == false)
	{
		lienzo.textAlign = 'right';
		lienzo.fillText(Prof_Rev_ProdII+"'", ((centro - (ancho/60)) - (ancho/60))-5, YRevProd*(Prof_Rev_ProdII/rev_mas_prof));
		lienzo.textAlign = 'left';
		if(Prof_Colg_ProdII == "")
		{
			lienzo.fillText("Rev. de Producción II", ((centro + (ancho/60)) + (ancho/60))+5, YRevProd*(Prof_Rev_ProdII/rev_mas_prof));
		}
		else
		{
			lienzo.fillText("Liner de Producción II", ((centro + (ancho/60)) + (ancho/60))+5, YRevProd*(Prof_Rev_ProdII/rev_mas_prof));
		}
		if(texto_prodII != undefined) {
			if(tamano_ventana < 600) {
				lienzo.fillText(texto_prodII, ((centro + (ancho/60)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_ProdII)/rev_mas_prof)+8);
			}
			else {
				lienzo.fillText(texto_prodII, ((centro + (ancho/60)) + (ancho/60))+5, ((YRevProd)*(Prof_Rev_ProdII)/rev_mas_prof)+11);
			}
		}
	}
}

// AÑADIR EL EVENTO DE BORRAR EL GRÁFICO AL OTRO BOTÓN DE HTML //
var boton2 = document.getElementById("borrar_diagrama");
boton2.addEventListener("click", borrarDiagramaMecanico);

// FUNCIÓN PARA BORRAR EL DIAGRAMA MECÁNICO RESULTANTE AL HACER CLICK EN EL BOTÓN DE HTML //

function borrarDiagramaMecanico ()
{
	lienzo.putImageData(ImageData, 0, 0);
}