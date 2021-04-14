var FLUJO_PLD = "OTROS";
var FLUJO_VEHICULAR = "AUTO";
var FLUJO_VEHICULAR_NUEVO = "CREDITOAUTO";
var FLUJO_VEHICULAR_USADO = "AUTOSEGUNDA";
var FLUJO_ESTUDIOS = "ESTUDIOS";

var INDICADOR_PLD = "PLD";
var INDICADOR_VEHICULAR = "VEH";
var INDICADOR_ESTUDIOS = "EST";

var TAG_DESC_INICIAR_FUNNEL_AUTO = "BOTON AUTO FORMULARIO PLD";
var TAG_DESC_INICIAR_FUNNEL_ESTUDIOS = "BOTON ESTUDIOS FORMULARIO PLD";

var TAG_EVENTO_APP_ON_CLICK_START = "App On Click Start";
var TAG_EVENTO_APP_PAGE_VISIT = "App Page Visit";
var TAG_EVENTO_APP_STARTED = "App Started";

var TAG_EVENTO_APP_STEP_2 = "App Step 2";

var TAG_EVENTO_APP_STEP_3 = "App Step 3";
var TAG_EVENTO_APP_STEP_3_SIMULADOR_CYNC_CO = "App Step 3 Simulador Cliente y No Cliente Con Oferta";
var TAG_EVENTO_APP_STEP_3_EVALUACION_1_CYNC_SO = "App Step 3 Evaluacion 1 Cliente y No Cliente Sin Oferta";

var TAG_EVENTO_APP_STEP_4 = "App Step 4";
var TAG_EVENTO_APP_STEP_4_TYC_CCC_CO = "App Step 4 Terminos y Condiciones Cliente con Cuenta con Oferta";
var TAG_EVENTO_APP_STEP_4_FATCA_CSC_CO = "App Step 4 Fatca Cliente Sin Cuenta";
var TAG_EVENTO_APP_STEP_4_EVALUACION_2_NC = "App Step 4 Evaluacion 2 No Cliente sin oferta";
var TAG_EVENTO_APP_STEP_4_EVALUACION_2_C = "App Step 4 Evaluacion 2 Cliente Sin Oferta";
var TAG_EVENTO_APP_STEP_4_DATOS_1 = "App Step 4 Datos 1 No Cliente Con Oferta";

var TAG_EVENTO_APP_STEP_5 = "App Step 5";  
var TAG_EVENTO_APP_STEP_5_TYC_CSC_CO = "App Step 5 Cliente Sin Cuenta Con Oferta";
var TAG_EVENTO_APP_STEP_5_EVALUACION_3_NC = "App Step 5 Evaluacion 3 No Cliente Sin Oferta";
var TAG_EVENTO_APP_STEP_5_SIMULADOR_C_SO = "App Step 5 Simulador Cliente";
var TAG_EVENTO_APP_STEP_5_DATOS_2 = "App Step 5 No Cliente Sin Oferta";  

var TAG_EVENTO_APP_STEP_6 = "App Step 6";
var TAG_EVENTO_APP_STEP_6_SIMULADOR_NC = "App Step 6 Simulador No Cliente";
var TAG_EVENTO_APP_STEP_6_FATCA_CSC_SO = "App Step 6 Fatca Cliente sin Cuenta Sin Oferta";
var TAG_EVENTO_APP_STEP_6_FATCA_NC_CO = "App Step 6 Fatca No Cliente con Oferta";
var TAG_EVENTO_APP_STEP_6_TYC_CCC_SO = "App Step 6 TYC Cliente con Cuenta y Sin Oferta";

var TAG_EVENTO_APP_STEP_7 = "App Step 7";
var TAG_EVENTO_APP_STEP_7_FATCA_NC_SO = "App Step 7 No Cliente Sin Oferta";
var TAG_EVENTO_APP_STEP_7_TYC_CSC_SO = "App Step 7 Cliente Sin Cuenta y Sin Oferta";
var TAG_EVENTO_APP_STEP_7_TYC_NC_CO = "App Step 7 No Cliente Con Oferta";

var TAG_EVENTO_APP_STEP_8 = "App Step 8";
var TAG_EVENTO_APP_STEP_8_TYC_NC_SO = "App Step 8";

var TAG_EVENTO_APP_COMPLETED = "App Completed";
var TAG_EVENTO_APP_COMPLETED_SIN_OFERTA = "Sin Oferta";
var TAG_EVENTO_APP_COMPLETED_EXTRANJERO_NO_CLIENTE = "no cliente extranjero";
var TAG_EVENTO_APP_COMPLETED_LISTA_NEGRA = "Lista Negra";
var TAG_EVENTO_APP_COMPLETED_LISTA_NEGRA_SEGUROS = "Lista Negra Seguros";
var TAG_EVENTO_APP_COMPLETED_RECHAZADO_POR_EDAD = "Rechazado por Edad";
var TAG_EVENTO_APP_COMPLETED_PEP = "pep";
var TAG_EVENTO_APP_COMPLETED_CLIENTE_BLOQUEADO = "bloqueado preguntas candado";
var TAG_EVENTO_APP_COMPLETED_BLOQUEO_INTENTOS = "bloqueado por intentos";
var TAG_EVENTO_APP_COMPLETED_UMBRAL_SMS = "rechazado codigo contratacion";
var TAG_EVENTO_APP_COMPLETED_FATCA = "rechazado fatca";
var TAG_EVENTO_APP_COMPLETED_NO_VERIFICADO = "no verificado";

var TAG_EVENTO_APP_COMPLETED_FUERA_DE_HORARIO = "indisponibilidad horaria";

var TAG_EVENTO_APP_COMPLETED_ERROR_GENERICO = "error generico";
var TAG_EVENTO_APP_COMPLETED_ERROR_INDISPONIBILIDAD_SERVICIO = "indisponibilidad servicio";
var TAG_EVENTO_APP_COMPLETED_ERROR_PREGUNTAS_CANDADO = "error preguntas candado";
var TAG_EVENTO_APP_COMPLETED_ERROR_DIRECCION_NO_COINCIDE = "direccion no coincide";

var TAG_EVENTO_APP_COMPLETED_SIN_REGISTRO_MOI = "Sin Data MOI";
var TAG_EVENTO_APP_COMPLETED_EXEPCION_MOI = "Excepcion MOI";

var TAG_EVENTO_APP_COMPLETED_ERROR_SMS = "Error SMS";
var TAG_PANTALLA_SIMULADOR_LINK = "boton calcular";


var TAG_TIPO_DOCUMENTO = "TIPO DOCUMENTO";
var TAG_NUMERO_DOCUMENTO = "NUMERO DOCUMENTO";
var TAG_CELULAR = "CELULAR";
var TAG_EMAIL = "EMAIL";
var TAG_DISTRITO_RESIDENCIA = "DISTRITO DE RESIDENCIA";
var TAG_FECHA_NACIMIENTO = "FECHA DE NACIMIENTO";
var TAG_CHECKBOX_TDP = "CHECKBOX TDP";
var TAG_LABEL_TDP = "LABEL TDP";

var CONTADOR_APP_STARTED = 0;

var TRACKING = "";
var PROFILE = "";
var PROCESS = "";
var AMOUNT = "";
var PAYMENT_AMOUNT = "";
var PAYMENT_TYPE = "";
var PAYMENT_DATE = "";
var NUMBER_OF_PAYMENTS = "";
var INTEREST_RATE = "";
var CUSTOM_FIELDS = "";
var PERFIL = "";
var EDAD = "";
var CUENTA = "";
var CIVILSTATUS = "";
var EDUCATIONLEVEL = "";
var JOBTYPE = "";

var MOUNT_MAX = "";
var MOUNT_MIN = "";

var EVALUACION = false;
var OFERTA_MOTOR = 'sin oferta motor';

var REGLA_LISTA_NEGRA = '';

var FLUJO = "";

function llenarDataLayer(evento, elemento, flujo, subflujo) {
	limpiezaCamposDT();
	if (flujo === FLUJO_PLD) {
		setDataLayerBasicaPLD();
		if (TAG_EVENTO_APP_PAGE_VISIT === evento) {
			setAppPageVisitPld();
		} else if (TAG_EVENTO_APP_STARTED === evento) {
			setAppStartedPld(elemento);
		} else if (TAG_EVENTO_APP_STEP_2 === evento) {
			setAppStep2();
		} else if (TAG_EVENTO_APP_STEP_3_SIMULADOR_CYNC_CO === evento) {
			setAppStep3();
		} else if (TAG_EVENTO_APP_STEP_3_EVALUACION_1_CYNC_SO === evento) {
			setAppStep3DatosEvaluacion1();
		} else if (TAG_EVENTO_APP_STEP_4 === evento) {
			setAppStep4();
		} else if (TAG_EVENTO_APP_STEP_4_FATCA_CSC_CO === evento) {
			setAppStep4ClienteSinCuenta();
		} else if (TAG_EVENTO_APP_STEP_4_EVALUACION_2_C === evento) {
			setAppStep4Evaluacion2C();
		} else if (TAG_EVENTO_APP_STEP_4_EVALUACION_2_NC === evento) {
			setAppStep4Evaluacion2NC();
		} else if (TAG_EVENTO_APP_STEP_4_DATOS_1 === evento) {
			setAppStep4Datos1();
		} else if (TAG_PANTALLA_SIMULADOR_LINK === elemento) {
			setDatalayerLink(elemento)
		} else if (TAG_EVENTO_APP_STEP_5 === evento) {
			setAppStep5();
		} else if (TAG_EVENTO_APP_STEP_5_EVALUACION_3_NC === evento) {
			setAppStep5Evaluacion3NC();
		} else if (TAG_EVENTO_APP_STEP_5_SIMULADOR_C_SO === evento) {
			setAppStep5SimuladorCliente();
		} else if (TAG_EVENTO_APP_STEP_5_TYC_CSC_CO === evento) {
			setAppStep5TYCCLienteSinCuenta();
		} else if (TAG_EVENTO_APP_STEP_5_DATOS_2 === evento) {
			setAppStep5Datos2();
		} else if (TAG_EVENTO_APP_STEP_6 === evento) {
			setAppStep6();
		} else if (TAG_EVENTO_APP_STEP_6_SIMULADOR_NC === evento) {
			setAppStep6SimuladorNoCliente();
		} else if (TAG_EVENTO_APP_STEP_6_TYC_CCC_SO === evento) {
			setAppStep6TYCCliente();
		} else if (TAG_EVENTO_APP_STEP_6_FATCA_CSC_SO === evento) {
			setAppStep6FatcaClienteSinOferta();
		} else if (TAG_EVENTO_APP_STEP_6_FATCA_NC_CO === evento) {
			setAppStep6NoClienteConOferta();
		} else if (TAG_EVENTO_APP_STEP_7 === evento) {
			setAppStep7();
		} else if (TAG_EVENTO_APP_STEP_7_TYC_CSC_SO === evento) {
			setAppStep7();
		} else if (TAG_EVENTO_APP_STEP_7_FATCA_NC_SO === evento) {
			setAppStep7FatcaNoClienteSinOferta();
		} else if (TAG_EVENTO_APP_STEP_7_TYC_NC_CO === evento) {
			setAppStep7TYCNoClienteConOferta();
		} else if (TAG_EVENTO_APP_STEP_8 === evento) {
			setAppStep8();
		} else if (TAG_EVENTO_APP_STEP_8_TYC_NC_SO === evento) {
			setAppStep8();
		} else if (TAG_EVENTO_APP_COMPLETED === evento && FLUJO_PLD === flujo) {
			setAppCompleted();
		} else if (TAG_EVENTO_APP_COMPLETED_SIN_OFERTA === evento && FLUJO_PLD === flujo) {
			setAppCompletedSinOferta();
		} else if (TAG_EVENTO_APP_COMPLETED_EXTRANJERO_NO_CLIENTE === evento) {
			setAppCompletedExtranjeroNoCliente();
		} else if (TAG_EVENTO_APP_COMPLETED_LISTA_NEGRA === evento) {
			setAppCompletedListaNegra();
		} else if (TAG_EVENTO_APP_COMPLETED_LISTA_NEGRA_SEGUROS === evento) {
			setAppCompletedListaNegraSeguros();
		} else if (TAG_EVENTO_APP_COMPLETED_RECHAZADO_POR_EDAD === evento) {
			setAppCompletedRechazoEdad();
		} else if (TAG_EVENTO_APP_COMPLETED_PEP === evento) {
			setAppCompletedPep();
		} else if (TAG_EVENTO_APP_COMPLETED_CLIENTE_BLOQUEADO === evento) {
			setAppCompletedClienteBloqueado();
		} else if (TAG_EVENTO_APP_COMPLETED_BLOQUEO_INTENTOS === evento) {
			setAppCompletedBloqueoPorIntentos();
		} else if (TAG_EVENTO_APP_COMPLETED_UMBRAL_SMS === evento) {
			setAppCompletedUmbralSms();
		} else if (TAG_EVENTO_APP_COMPLETED_FATCA === evento) {
			setAppCompletedFatca();
		} else if (TAG_EVENTO_APP_COMPLETED_NO_VERIFICADO === evento) {
			setAppCompletedNoVerificado();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_GENERICO === evento) {
			setAppCompletedErrorGenerico();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_INDISPONIBILIDAD_SERVICIO === evento) {
			setAppCompletedIndisponibilidadDeServicio();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_PREGUNTAS_CANDADO === evento) {
			setAppCompletedErrorPreguntasCandado();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_DIRECCION_NO_COINCIDE === evento) {
			setAppCompletedDireccionNoCoincide();
		} else if (TAG_EVENTO_APP_COMPLETED_FUERA_DE_HORARIO === evento) {
			setAppCompletedHorarioDiferenciado();
		} else if (TAG_EVENTO_APP_COMPLETED_SIN_REGISTRO_MOI === evento) {
			setAppCompletedSinRegistroMoi();
		} else if (TAG_EVENTO_APP_COMPLETED_EXEPCION_MOI === evento) {
			setAppCompletedExepcionMoi();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_SMS === evento) {
			setAppCompletedErrorSMS();
		}

	} else if (flujo === FLUJO_VEHICULAR) {
		setDataLayerBasicaVehicular();
		if (TAG_EVENTO_APP_ON_CLICK_START === evento) {
			setOnClickStartAuto(TAG_DESC_INICIAR_FUNNEL_AUTO);
		} else if (TAG_EVENTO_APP_PAGE_VISIT === evento) {
			setAppPageVisitAuto();
		} else if (TAG_EVENTO_APP_STARTED === evento) {
			setAppStartedVehicular(elemento, subflujo);
		} else if (TAG_EVENTO_APP_STEP_2 === evento) {
			setAppStep2Auto();
		} else if (TAG_EVENTO_APP_STEP_3 === evento) {
			setAppStep3Auto();
		} else if (TAG_EVENTO_APP_STEP_4 === evento) {
			setAppStep4Auto();
		} else if (TAG_EVENTO_APP_COMPLETED === evento) {
			setAppCompletedAuto(subflujo);
		} else if (TAG_EVENTO_APP_COMPLETED_SIN_OFERTA === evento && subflujo === FLUJO_VEHICULAR_USADO) {
			setAppCompletedSinOfertaAutoUsado(subflujo);
		} else if (TAG_EVENTO_APP_COMPLETED_LISTA_NEGRA === evento) {
			setAppCompletedListaNegraAuto();
		} else if (TAG_EVENTO_APP_COMPLETED_PEP === evento) {
			setAppCompletedPepAuto();
		} else if (TAG_EVENTO_APP_COMPLETED_RECHAZADO_POR_EDAD === evento) {
			setAppCompletedRechazadoPorEdadAuto();
		} else if (TAG_EVENTO_APP_COMPLETED_CLIENTE_BLOQUEADO === evento) {
			setAppCompletedClienteBloqueadoAuto();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_PREGUNTAS_CANDADO === evento) {
			setAppCompletedErrorPreguntasCandadoVehicular();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_GENERICO === evento) {
			setAppCompletedErrorGenericoVehicular();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_INDISPONIBILIDAD_SERVICIO === evento) {
			setAppCompletedIndisponibilidadDeServicioVehicular();
		}

	} else if (flujo === FLUJO_ESTUDIOS) {
		setDataLayerBasicaEstudios();
		if (TAG_EVENTO_APP_ON_CLICK_START === evento) {
			setOnClickStartEstudios(TAG_DESC_INICIAR_FUNNEL_ESTUDIOS);
		} else if (TAG_EVENTO_APP_PAGE_VISIT === evento) {
			setAppPageVisitEstudios();
		} else if (TAG_EVENTO_APP_STARTED === evento) {
			setAppStartedEstudios(elemento);
		} else if (TAG_EVENTO_APP_STEP_2 === evento) {
			setAppStep2Estudios();
		} else if (TAG_EVENTO_APP_COMPLETED === evento) {
			setAppCompletedEstudios();
		} else if (TAG_EVENTO_APP_COMPLETED_SIN_OFERTA === evento) {
			setAppCompletedEstudiosSinOferta();
		} else if (TAG_EVENTO_APP_COMPLETED_SIN_REGISTRO_MOI === evento) {
			setAppCompletedSinRegistroMoiEstudios();
		} else if (TAG_EVENTO_APP_COMPLETED_LISTA_NEGRA === evento) {
			setAppCompletedListaNegraEstudios();
		} else if (TAG_EVENTO_APP_COMPLETED_PEP === evento) {
			setAppCompletedPepEstudios();
		} else if (TAG_EVENTO_APP_COMPLETED_CLIENTE_BLOQUEADO === evento) {
			setAppCompletedBloqueoPreguntasCandadoEstudios();
		} else if (TAG_EVENTO_APP_COMPLETED_EXEPCION_MOI === evento) {
			setAppCompletedExepcionMoiEstudios();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_SMS === evento) {
			setAppCompletedErrorSMSEstudios();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_GENERICO === evento) {
			setAppCompletedErrorGenericoEstudios();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_INDISPONIBILIDAD_SERVICIO === evento) {
			setAppCompletedIndisponibilidadDeServicioEstudio();
		} else if (TAG_EVENTO_APP_COMPLETED_ERROR_PREGUNTAS_CANDADO === evento) {
			setAppCompletedErrorPreguntasCandadoEstudio();
		}
	}
}


/*************************
 * FUNCIONES COMUNES
 *************************/

function cloneDatalayer(sdigitalData) {
	clonarDataLayer(sdigitalData);
}

function setDataLayerBasicaPLD() {
	setDataLayerBasicaComun();
	setApplicationType("contratacion");
	setApplicationGlobalApplication("onboarding loan");
	setFulfillmentModel("online/offline");
	setLevel(3, "formulario prestamo personal");
	setApplicationName("formulario prestamo personal");
	setProductSubtype("prestamos personales", 0);
	setProductName("prestamo de libre disponibilidad", 0);
}

function setDataLayerBasicaVehicular() {
	setDataLayerBasicaComun();
	setApplicationType("formulario");
	setApplicationGlobalApplication("onboarding car loan");
	setFulfillmentModel("online");
	setLevel(3, "formulario prestamo vehicular");
	setApplicationName("formulario prestamo vehicular");
	setProductSubtype("prestamo vehicular", 0);
	setProductName("", 0);
}

function setDataLayerBasicaEstudios() {
	setDataLayerBasicaComun();
	setApplicationType("formulario");
	setApplicationGlobalApplication("onboarding study loan");
	setFulfillmentModel("online");
	setLevel(3, "formulario prestamo estudios");
	setApplicationName("formulario prestamo estudios");
	setProductSubtype("prestamos personales", 0);
	setProductName("prestamo para estudios", 0);
}

function setDataLayerBasicaComun() {
	//Setear campos genericos
	setVersionDL(VERSION_DL)
	setPageInstanceID(obtenerEntorno());
	setPageIntent("transaccion");
	setPageSegment("personas");
	setSysEnv("escritorio");
	setVersion("1.0");
	setChannel("online");
	setLanguage("ES");
	setGeoRegion("");
	setLevel(1, "prestamos");
	setLevel(2, "personales");
	setArea("publica");
	setServer();
	setBusinessUnit("BBVA Peru");
	setSiteAppName("BBVA Peru");
	setUserAgent();
	setMobile();
	setUserState("no logado");
	setSegmentProfile("");
	 //preguntar a Carlos ->"offline" // preguntar a Araceli: que le querias preguntar a Carlos?
	setPrimaryCategory("prestamos", 0);
}

function limpiezaCamposDT() {
	setLevel(4, "");
	setApplicationState("");
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("");
	setIsQualifiedVisits("");
}

function limpiezaCamposDTAplication(){
	setTransactionID("");
	setApplicationType("");
	setApplicationName("");
	setFulfillmentModel("");
	setTypology("");
	setProgramTypeHired("");
	setOffer("");
	setOperationNumber("");
	setProcess("");
	setApplicationStep("");
	setApplicationInteractionLevel("");
	setIsQualifiedVisits("");
	setApplicationState("");
	setApplicationErrorType("");
	setApplicationEarnings("");
	setApplicationExpenses("");
	setApplicationCustomFields("");
	setApplicationGlobalApplication("");
}

function limpiezaDTProduct(){
	digitalData.products.attributes = [];
}

function obtenerTipoEmpleo() {
	return situacionLaboral;
}

function obtenerMonto() {
	var montoSalida = montoPrestamo.replace(",", "");
	return montoSalida;
}

function obtenerSegmentProfile() {
	var flujo = $("#idFlujo").val();
	var cadena = "";

	if (flujo === "102") {
		cadena = "circuito regular resto";
	} else if (flujo === "112") {
		cadena = "circuito regular alto";
	}

	return cadena;
}

function obtenerSegmentProfilePantallaFinal() {
	var flujo = flujoActual;
	var cadena = "";

	if (flujo === "102") {
		cadena = "circuito regular resto";
	} else if (flujo === "112") {
		cadena = "circuito regular alto";
	}

	return cadena;
}

function obtenerPerfilPantallaFinal() {
	var perfil = motivo;
	perfil = perfil.replace("_", " ");
	return perfil;
}

function obtenerPerfil() {
	var perfil = FLUJO;
	perfil = perfil.replace("_", " ");
	return perfil;
}

function obtenerProcess(process) {
	return process.replace("%20", " ");
}

function obtenerEntorno() {
	return ("bbvaperuprod" === amb_tag) ? "pro" : "ei";
}

function obtenerTipoAuto(perfil) {
	var descripcion = "";
	if (perfil === "CREDITOAUTO") {
		descripcion = "prestamo auto nuevo";
	} else if (perfil === "AUTOSEGUNDA") {
		descripcion = "prestamo auto de segunda";
	}

	return descripcion;
}

function obtenerTipoPreAprobado() {
	var flujo = $("#idFlujo").val();
	var cadena = "";

	if (flujo === "101") {
		cadena = "pre aprobado";
	} else if (flujo === "201") {
		cadena = "pat";
	}

	return cadena;
}

function obtenerTipoPreAprobadoPantallaFinal() {
	var flujo = flujoActual;
	var cadena = "";

	if (flujo === "101") {
		cadena = "pre aprobado";
	} else if (flujo === "201") {
		cadena = "pat";
	}
	return cadena;
}

function obtenerFlujo() {
	var flujo = $("#idFlujo").val();
	return flujo;
}

function obtenerTracking() {
	var tracking = "";

	if ($("#tracking").length) {
		if ($("#tracking").val() != "") {
			tracking = $("#tracking").val();
		}
	}
	return tracking;
}

/*************************
 * TAGUEO VEHICULAR
 *************************/

function setAppStartedVehicular(elemento, subflujo) {
	setApplicationStep(subflujo);
	setProductName("prestamo " + subflujo, 0);
	setLevel(4, "1 tipo de auto");
	setPageName();
	digitalLink("App Started", digitalData);
}

function setOnClickStartAuto(elemento) {
	setLevel(4, "1 mi prestamo");
	setApplicationStep("app on click start:" + elemento);
	setPageName();

	digitalLink("App On Click Start", digitalData);
}

function setAppPageVisitAuto() {
	setLevel(4, "1 tipo de auto");
	setApplicationStep("1 tipo de auto");
	setApplicationState("inicio");
	setTypology("");
	setPageName();
	setIsQualifiedVisits("true");
	digitalView("App Page Visit", digitalData);
}

function setAppStep2Auto() {
	setLevel(4, "2 ingresa tus datos");
	setPageName();
	setApplicationStep("2 ingresa tus datos");
	setApplicationState("");
	setProductName(obtenerTipoAuto(FLUJO), 0);

	digitalView("App Step 2", digitalData);
}

function setAppStep3Auto() {
	setLevel(4, "3 preguntas candado");
	setPageName();
	setApplicationStep("3 preguntas candado");
	setProductName(obtenerTipoAuto(FLUJO), 0);
	setOperationNumber(TRACKING);
	digitalView("App Step 3", digitalData);
}

function setAppStep4Auto() {
	setLevel(4, "4 datos riesgo");
	setPageName();
	setApplicationStep("4 datos riesgo");
	setProductName(obtenerTipoAuto(FLUJO), 0);
	digitalView("App Step 4", digitalData);
}

function setAppCompletedAuto(subflujo) {
	setLevel(4, "pagina exitosa");
	setPageName();
	setAmount(obtenerMonto(), 0);
	setCurrency("PEN", 0);
	setApplicationStep("pagina exitosa");
	setApplicationState("finalizado");
	setProductName(obtenerTipoAuto(PERFIL), 0);
	setTypology(subflujo + ' ' + obtenerProcess(PROCESS));
	digitalView("App Completed", digitalData);
}

function setAppCompletedSinOfertaAutoUsado(subflujo) {
	setLevel(4, "pagina exitosa");
	setPageName();
	setAmount("", 0);
	setCurrency("PEN", 0);
	setApplicationStep("pagina exitosa");
	setApplicationState("finalizado");
	setProductName(obtenerTipoAuto(idPerfil), 0);
	setTypology(subflujo + ' sin oferta');
	digitalView("App Completed", digitalData);
}

function setAppCompletedListaNegraAuto() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setSegmentProfile("lista negra");
	setApplicationStep("pagina exitosa");
	setApplicationState("rechazado");
	setProductName(obtenerTipoAuto(idPerfil), 0);;
	digitalView("App Completed", digitalData);
}

function setAppCompletedPepAuto() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setSegmentProfile("pep");
	setApplicationStep("pagina exitosa");
	setApplicationState("rechazado");
	setProductName(obtenerTipoAuto(idPerfil), 0);;
	digitalView("App Completed", digitalData);
}

function setAppCompletedRechazadoPorEdadAuto() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setSegmentProfile("rechazado por edad");
	setApplicationStep("pagina exitosa");
	setApplicationState("rechazado");
	setProductName(obtenerTipoAuto(idPerfil), 0);;
	digitalView("App Completed", digitalData);
}

function setAppCompletedClienteBloqueadoAuto() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setSegmentProfile("cliente bloqueado");
	setApplicationStep("pagina exitosa");
	setApplicationState("rechazado");
	setProductName(obtenerTipoAuto(idPerfil), 0);;
	digitalView("App Completed", digitalData);
}

function setAppCompletedErrorPreguntasCandadoVehicular() {
	setLevel(4, "error preguntas candado");
	setCurrency("", 0);
	setPageName();
	setErrorPage("error preguntas candado");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	digitalView("Page View", digitalData);
}

function setAppCompletedErrorGenericoVehicular() {
	setLevel(4, "error general");
	setCurrency("", 0);
	setPageName();
	setErrorPage("error general");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	digitalView("Page View", digitalData);
}

function setAppCompletedIndisponibilidadDeServicioVehicular() {
	setLevel(4, "indisponibilidad servicio");
	setCurrency("", 0);
	setPageName();
	setErrorPage("indisponibilidad servicio");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	digitalView("Page View", digitalData);
}


/*************************
 * TAGUEO ESTUDIOS
 ************************/

function setOnClickStartEstudios(elemento) {
	setLevel(4, "1 mi prestamo");
	setPageName();
	setApplicationStep("app on click start:" + elemento);

	digitalLink("App On Click Start", digitalData);
}

function setAppStartedEstudios(elemento) {
	setLevel(4, "1 datos basicos");
	setApplicationStep("1 datos basicos");
	setApplicationStep(elemento);
	setPageName();
	digitalLink("App Started", digitalData);
}

function setAppStartedPld(elemento) {
	setLevel(4, "1 datos basicos");
	setApplicationStep("1 datos basicos");
	setApplicationStep(elemento);
	setPageName();
	
	digitalLink("App Started", digitalData);
}


function setAppPageVisitEstudios() {
	setLevel(4, "1 datos basicos");
	setPageName();
	setApplicationStep("1 datos basicos");
	setApplicationState("inicio");
	setIsQualifiedVisits("true");
	digitalView("App Page Visit", digitalData);
}

function setAppPageVisitPld() {
	setLevel(4, "1 datos basicos");
	setFulfillmentModel("online/offline");
	setApplicationStep("1 datos basicos");
	setApplicationState("inicio");
	setIsQualifiedVisits("true");
	setPageName();

	digitalView("App Page Visit", digitalData);
}

function setAppStep2Estudios() {
	setLevel(4, "2 preguntas candado");
	setPageName();
	setSegmentProfile(obtenerSegmentProfile());
	setApplicationStep("2 preguntas candado");
	setOperationNumber(TRACKING);
	digitalView("App Step 2", digitalData);
}

function setAppCompletedEstudios() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setAmount(obtenerMonto(), 0);
	setCurrency("PEN", 0);
	setApplicationStep("pagina exitosa");
	setApplicationState("finalizado");
	setTypology('estudios' + ' ' + obtenerProcess(PROCESS));
	digitalView("App Completed", digitalData);
}

function setAppCompletedEstudiosSinOferta() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setAmount("", 0);
	setCurrency("", 0);
	setTypology('estudios sin oferta');
	setApplicationStep("pagina exitosa");
	setApplicationState("finalizado");
	digitalView("App Completed", digitalData);
}

function setAppCompletedBloqueoPreguntasCandadoEstudios() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setSegmentProfile("cliente bloqueado");
	setApplicationStep("pagina exitosa");
	setApplicationState("rechazado");
	digitalView("App Completed", digitalData);
}

function setAppCompletedListaNegraEstudios() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setSegmentProfile("lista negra");
	setApplicationStep("pagina exitosa");
	setApplicationState("rechazado");
	digitalView("App Completed", digitalData);
}

function setAppCompletedPepEstudios() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile("pep");
	setCurrency("", 0);
	setPageName();
	setErrorPage("");
	setApplicationStep("pagina exitosa");

	digitalView("App Completed", digitalData);
}

function setAppCompletedSinRegistroMoiEstudios() {
	setLevel(4, "pagina exitosa");
	setPageName();
	setSegmentProfile("error moi");
	setApplicationStep("pagina exitosa");
	setApplicationState("rechazado");
	digitalView("App Completed", digitalData);
}

function setAppCompletedExepcionMoiEstudios() {
	setLevel(4, "error excepcion");
	setPageName();
	setErrorPage("error excepcion");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	digitalView("Page View", digitalData);
}

function setAppCompletedErrorSMSEstudios() {
	setLevel(4, "2 codigo sms");
	setPageName();
	limpiezaCamposDTAplication();
	limpiezaDTProduct();	
	setApplicationErrorType("error excedido sms");
	digitalLink('Site Error',digitalData);
}

function setAppCompletedErrorPreguntasCandadoEstudio() {
	setLevel(4, "error preguntas candado");
	setCurrency("", 0);
	setPageName();
	setErrorPage("error preguntas candado");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	digitalView("Page View", digitalData);
}

function setAppCompletedErrorGenericoEstudios() {
	setLevel(4, "error general");
	setCurrency("", 0);
	setPageName();
	setErrorPage("error general");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	digitalView("Page View", digitalData);
}


function setAppCompletedIndisponibilidadDeServicioEstudio() {
	setLevel(4, "indisponibilidad servicio");
	//setProductName("")
	setCurrency("", 0);
	setPageName();
	setErrorPage("indisponibilidad servicio");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	digitalView("Page View", digitalData);
}

/**************************
 * TAGUEO PLD
 *************************/

function setAppPageVisit() {
	setLevel(4, "1 mi prestamo");
	setApplicationState("inicio");
	setPageName();
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("1 mi prestamo");

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Page Visit", digitalData);
}

function setAppStarted(elemento) {
	setLevel(4, "1 mi prestamo");
	setApplicationStep(elemento);
	setPageName();
	digitalLink("App Started", digitalData);
}

function setAppStep2() {
	setLevel(4, "2 seguridad");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setAge(EDAD);
	setErrorPage("");
	setApplicationStep("2 seguridad");
	setTypology("");
	setOperationNumber(TRACKING);
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;
	digitalView("App Step 2", digitalData);
}

function setAppStep3() {
	setLevel(4, "6 simulador");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setProcess(CUENTA);
	setTypology(PROCESS)
	setApplicationStep("6 simulador");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 6", digitalData);
}

function setAppStep3DatosEvaluacion1() {
	setLevel(4, "3 datos evaluacion 1");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("3 datos evaluacion 1");
	setTypology(PROCESS);
	setProcess(CUENTA);
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 3", digitalData);
}

function setAppStep4() {
	setLinkName("");
	setLevel(4, "10 terminos y condiciones");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("10 terminos y condiciones");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 10", digitalData);
}

function setAppStep4ClienteSinCuenta() {
	setLinkName("");
	setLevel(4, "9 fatca");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setAmount(AMOUNT, 0);
	setPaymentAmount(PAYMENT_AMOUNT, 0);
	setPaymentType(PAYMENT_TYPE, 0);
	setPaymentDate(PAYMENT_DATE, 0);
	setNumberOfPayments(NUMBER_OF_PAYMENTS, 0);
	setInterestRateTae(INTEREST_RATE, 0);
	setApplicationStep("9 fatca");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 9", digitalData);
}

function setAppStep4Evaluacion2C() {
	setLevel(4, "5 evaluacion");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("5 evaluacion");
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setApplicationEarnings(GANANCIAS);
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 5", digitalData);
}

function setAppStep4Evaluacion2NC() {
	setLevel(4, "4 datos evaluacion 2");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("4 datos evaluacion 2");
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 4", digitalData);
}

function setAppStep4Datos1() {
	setLinkName("");
	setLevel(4, "7 datos personales 1");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setAmount(AMOUNT, 0);
	setPaymentAmount(PAYMENT_AMOUNT, 0);
	setPaymentType(PAYMENT_TYPE, 0);
	setPaymentDate(PAYMENT_DATE, 0);
	setNumberOfPayments(NUMBER_OF_PAYMENTS, 0);
	setInterestRateTae(INTEREST_RATE, 0);
	setErrorPage("");
	setApplicationStep("7 datos personales 1");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 7", digitalData);
}

function setAppStep5() {
	setLinkName("");
	setLevel(4, "5 datos basicos");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setAmount(AMOUNT, 0);
	setPaymentAmount(PAYMENT_AMOUNT, 0);
	setPaymentType(PAYMENT_TYPE, 0);
	setPaymentDate(PAYMENT_DATE, 0);
	setNumberOfPayments(NUMBER_OF_PAYMENTS, 0);
	setInterestRateTae(INTEREST_RATE, 0);
	setErrorPage("");
	setApplicationStep("5 datos basicos");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 5", digitalData);
}

function setAppStep5Evaluacion3NC() {
	setLevel(4, "5 evaluacion");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("5 evaluacion");
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 5", digitalData);
}

function setAppStep5SimuladorCliente() {
	setLevel(4, "6 simulador");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("6 simulador");
	setProcess(CUENTA);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setApplicationEarnings(GANANCIAS);
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 6", digitalData);
}

function setAppStep5TYCCLienteSinCuenta() {
	setLevel(4, "10 terminos y condiciones");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("10 terminos y condiciones");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 10", digitalData);
}

function setAppStep5Datos2() {
	setLinkName("");
	setLevel(4, "8 datos personales 2");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setApplicationStep("8 datos personales 2");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 8", digitalData);
}

function setAppStep6() {
	setLevel(4, "9 fatca");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setAmount(AMOUNT, 0);
	setPaymentAmount(PAYMENT_AMOUNT, 0);
	setPaymentType(PAYMENT_TYPE, 0);
	setPaymentDate(PAYMENT_DATE, 0);
	setNumberOfPayments(NUMBER_OF_PAYMENTS, 0);
	setInterestRateTae(INTEREST_RATE, 0);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setErrorPage("");
	setApplicationStep("9 fatca");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 9", digitalData);
}

function setAppStep6SimuladorNoCliente() {
	setLevel(4, "6 simulador");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("6 simulador");
	setProcess(CUENTA);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setApplicationEarnings(GANANCIAS);
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 6", digitalData);
}

function setAppStep6TYCCliente() {
	setLevel(4, "10 terminos y condiciones");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setErrorPage("");
	setApplicationStep("10 terminos y condiciones");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 10", digitalData);
}

function setAppStep6NoClienteConOferta() {
	setLevel(4, "9 fatca");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setApplicationEarnings(GANANCIAS);
	setErrorPage("");
	setApplicationStep("9 fatca");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 9", digitalData);
}

function setAppStep6FatcaClienteSinOferta() {
	setLevel(4, "9 fatca");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setAmount(AMOUNT, 0);
	setPaymentAmount(PAYMENT_AMOUNT, 0);
	setPaymentType(PAYMENT_TYPE, 0);
	setPaymentDate(PAYMENT_DATE, 0);
	setNumberOfPayments(NUMBER_OF_PAYMENTS, 0);
	setInterestRateTae(INTEREST_RATE, 0);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setErrorPage("");
	setApplicationStep("9 fatca");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 9", digitalData);
}

function setAppStep7() {
	setLevel(4, "10 terminos y condiciones");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setErrorPage("");
	setApplicationStep("10 terminos y condiciones");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 10", digitalData);
}

function setAppStep7FatcaNoClienteSinOferta() {
	setLevel(4, "9 fatca");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setAmount(AMOUNT, 0);
	setPaymentAmount(PAYMENT_AMOUNT, 0);
	setPaymentType(PAYMENT_TYPE, 0);
	setPaymentDate(PAYMENT_DATE, 0);
	setNumberOfPayments(NUMBER_OF_PAYMENTS, 0);
	setInterestRateTae(INTEREST_RATE, 0);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setErrorPage("");
	setApplicationStep("9 fatca");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 9", digitalData);
}

function setAppStep7TYCNoClienteConOferta() {
	setLevel(4, "10 terminos y condiciones");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("10 terminos y condiciones");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 10", digitalData);
}


function setAppStep8() {
	setLevel(4, "10 terminos y condiciones");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setApplicationCustomFields(CUSTOM_FIELDS);
	setJobType(JOBTYPE);
	setErrorPage("");
	setApplicationStep("10 terminos y condiciones");
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalView("App Step 10", digitalData);
}

function setDatalayerLink(elemento) {
	setLevel(4, "6 simulador");
	setApplicationState("");
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("6 simulador");
	setLinkName(elemento);
	setPageName();

	var digitalData = getDigitalData();
	window.digitalData = digitalData;

	digitalLink("Internal Link", digitalData);
}

function setAppCompleted() {
	let productIndex = addProduct();
	
	setLevel(4, "pagina exitosa");
	setApplicationState("contratado");
	setPrimaryCategory("cuentas", productIndex);
	setProductSubtype("cuentas ahorro", productIndex);
	setProductName("cuenta independencia bbva", productIndex);
	setCurrency("", 0);
	setSegmentProfile(PROFILE);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedSinOferta() {
	setLevel(4, "pagina exitosa");
	setApplicationState("en revision");
	setCurrency("", 0);
	setErrorPage("");
	setProcess("sin oferta");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedExtranjeroNoCliente() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile(TAG_EVENTO_APP_COMPLETED_EXTRANJERO_NO_CLIENTE);
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedListaNegra() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile(reglaRechazo.clasificacion.toLowerCase());
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedListaNegraSeguros() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile("lista negra seguros");
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedRechazoEdad() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile("rechazado por edad");
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedPep() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile("pep");
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedClienteBloqueado() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile(TAG_EVENTO_APP_COMPLETED_CLIENTE_BLOQUEADO);
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedHorarioDiferenciado() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile(TAG_EVENTO_APP_COMPLETED_FUERA_DE_HORARIO);
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);	
}

function setAppCompletedBloqueoPorIntentos() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile(TAG_EVENTO_APP_COMPLETED_BLOQUEO_INTENTOS);
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedUmbralSms() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile(TAG_EVENTO_APP_COMPLETED_UMBRAL_SMS);
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedFatca() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile(TAG_EVENTO_APP_COMPLETED_FATCA);
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedNoVerificado() {
	setLevel(4, "pagina exitosa");
	setApplicationState("rechazado");
	setSegmentProfile("no verificado");
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedErrorGenerico() {
	setLevel(4, "error general");
	setCurrency("", 0);
	setErrorPage("error general");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	setPageName();
	
	digitalView("Page View", digitalData);
}

function setAppCompletedIndisponibilidadDeServicio() {
	setLevel(4, "indisponibilidad servicio");
	setCurrency("", 0);
	setErrorPage("indisponibilidad servicio");
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	setPageName();
	
	digitalView("Page View", digitalData);
}

function setAppCompletedErrorPreguntasCandado() {
	setLevel(4, "error preguntas candado");
	setCurrency("", 0);
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	setApplicationErrorType("error preguntas candado");
	setPageName();

	digitalLink('Site Error',digitalData);
}

function setAppCompletedDireccionNoCoincide() {
	// setPrimaryCategory("", 0);
	// setProductSubtype("", 0);
	// setProductName("", 0);
	// setLevel(4, "direccion no coincide");
	// setCurrency("");
	// setPageName();
	// setErrorPage("direccion no coincide");
	// digitalView("Page View", digitalData);

	setLevel(4, "pagina exitosa");
	setApplicationState("en revision");
	setSegmentProfile("lead fuvex");
	setCurrency("", 0);
	setErrorPage("");
	setApplicationStep("pagina exitosa");
	setPageName();

	digitalView("App Completed", digitalData);
}

function setAppCompletedSinRegistroMoi() {
	setLevel(4, "pagina exitosa");
	setSegmentProfile("error moi");
	setTypology("");
	setFulfillmentModel("online");
	setApplicationStep("pagina exitosa");
	setApplicationState("rechazado");
	setPageName();
	
	digitalView("App Completed", digitalData);
}

function setAppCompletedExepcionMoi() {
	setLevel(4, "error excepcion");
	setUserState("no logado");
	setErrorPage("error excepcion");
	setPageName();
	limpiezaCamposDTAplication();
	limpiezaDTProduct();

	digitalView("Page View", digitalData);
}

function setAppCompletedErrorSMS() {
	setLevel(4, "3 codigo sms");
	setPageName();
	limpiezaCamposDTAplication();
	limpiezaDTProduct();
	setApplicationErrorType("error excedido sms");
	
	digitalLink('Site Error',digitalData);
}

