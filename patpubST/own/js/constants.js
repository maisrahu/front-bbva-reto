//PARAMETROS RESTRICTIVOS EN LOS INPUTS
var INPUT_TYPE_DNI = {
	allowMinus : false,
	maxDigits : 8,
	allowThouSep : false,
	allowDecSep : false
};

var INPUT_TYPE_OTHER = {
	disallow : '',
	allowSpace : false,
	allowNewline : false,
	allowNumeric : true,
	allowLatin : true,
	allowOtherCharSets : false,
	maxLength : 11
};

var INPUT_ONLY_TEXT = {
	allow : 'ñáéíóúäëïöüÑÁÉÍÓÚÄËÏÖÜ',
	disallow : '',
	allowSpace : true,
	allowNewline : false,
	allowNumeric : false,
	allowLatin : true,
	allowOtherCharSets : false,
	maxLength : 50
};
var INPUT_ALPHA = {
		allow : 'ñáéíóúäëïöüÑÁÉÍÓÚÄËÏÖÜ',
		disallow : '',
		allowSpace : true,
		allowNewline : false,
		allowNumeric : true,
		allowLatin : true,
		allowOtherCharSets : false,
		maxLength : NaN
	};
var INPUT_CELLPHONE = {
	allowMinus : false,
	maxDigits : 9,
	allowThouSep : false,
	allowDecSep : false
};

var INPUT_EMAIL = {
	allow : '-_.@',
	disallow : '',
	allowSpace : false,
	allowNewline : false,
	allowNumeric : true,
	allowLatin : true,
	allowOtherCharSets : false,
	maxLength : 50
};

var INPUT_DIGITOSMS = {
		allowPlus           : false, // Allow the + sign
		allowMinus          : false,  // Allow the - sign
		allowThouSep        : false,  // Allow the thousands separator, default is the comma eg 12,000
		allowDecSep         : false,  // Allow the decimal separator, default is the fullstop eg 3.141
		allowLeadingSpaces  : false,
		maxDigits           : 1,   // The max number of digits
		maxDecimalPlaces    : NaN,   // The max number of decimal places
		maxPreDecimalPlaces : NaN,   // The max number digits before the decimal point
		max                 : 9,   // The max numeric value allowed
		min                 : 0    // The min numeric value allowed
//		allow :    '\u0008', // Specify characters to allow
	}

var INPUT_MONTO = {
		allowPlus           : false, // Allow the + sign
		allowMinus          : false,  // Allow the - sign
		allowThouSep        : false,  // Allow the thousands separator, default is the comma eg 12,000
		allowDecSep         : false,  // Allow the decimal separator, default is the fullstop eg 3.141
		allowLeadingSpaces  : false,
		maxDigits           : NaN,   // The max number of digits
		maxDecimalPlaces    : NaN,   // The max number of decimal places
		maxPreDecimalPlaces : NaN,   // The max number digits before the decimal point
		max                 : NaN,   // The max numeric value allowed
		min                 : 850    // The min numeric value allowed
	}

var INPUT_EDAD = {
		allowPlus           : false, // Allow the + sign
		allowMinus          : false,  // Allow the - sign
		allowThouSep        : false,  // Allow the thousands separator, default is the comma eg 12,000
		allowDecSep         : false,  // Allow the decimal separator, default is the fullstop eg 3.141
		allowLeadingSpaces  : false,
		maxDigits           : NaN,   // The max number of digits
		maxDecimalPlaces    : NaN,   // The max number of decimal places
		maxPreDecimalPlaces : NaN,   // The max number digits before the decimal point
		max                 : 100,   // The max numeric value allowed
		min                 : 18    // The min numeric value allowed
	}

var INPUT_ONLY_NUMBERS = {
		allowPlus           : false, // Allow the + sign
		allowMinus          : false,  // Allow the - sign
		allowThouSep        : false,  // Allow the thousands separator, default is the comma eg 12,000
		allowDecSep         : false,  // Allow the decimal separator, default is the fullstop eg 3.141
		allowLeadingSpaces  : false,
		maxDigits           : NaN,   // The max number of digits
		maxDecimalPlaces    : NaN,   // The max number of decimal places
		maxPreDecimalPlaces : NaN,   // The max number digits before the decimal point
		max                 : NaN,   // The max numeric value allowed
		min                 : 0    // The min numeric value allowed
	}

var INPUT_ONLY_2_NUMBERS = {
		allowPlus           : false, // Allow the + sign
		allowMinus          : false,  // Allow the - sign
		allowThouSep        : false,  // Allow the thousands separator, default is the comma eg 12,000
		allowDecSep         : false,  // Allow the decimal separator, default is the fullstop eg 3.141
		allowLeadingSpaces  : false,
		maxDigits           : 2,   // The max number of digits
		maxDecimalPlaces    : NaN,   // The max number of decimal places
		maxPreDecimalPlaces : NaN,   // The max number digits before the decimal point
		max                 : NaN,   // The max numeric value allowed
		min                 : 0    // The min numeric value allowed
	}

var INPUT_ONLY_5_NUMBERS = {
		allowPlus           : false, // Allow the + sign
		allowMinus          : false,  // Allow the - sign
		allowThouSep        : false,  // Allow the thousands separator, default is the comma eg 12,000
		allowDecSep         : false,  // Allow the decimal separator, default is the fullstop eg 3.141
		allowLeadingSpaces  : false,
		maxDigits           : 5,   // The max number of digits
		maxDecimalPlaces    : NaN,   // The max number of decimal places
		maxPreDecimalPlaces : NaN,   // The max number digits before the decimal point
		max                 : NaN,   // The max numeric value allowed
		min                 : 0    // The min numeric value allowed
	}
var INPUT_ONLY_6_NUMBERS = {
		allowPlus           : false, // Allow the + sign
		allowMinus          : false,  // Allow the - sign
		allowThouSep        : false,  // Allow the thousands separator, default is the comma eg 12,000
		allowDecSep         : false,  // Allow the decimal separator, default is the fullstop eg 3.141
		allowLeadingSpaces  : false,
		maxDigits           : 6,   // The max number of digits
		maxDecimalPlaces    : NaN,   // The max number of decimal places
		maxPreDecimalPlaces : NaN,   // The max number digits before the decimal point
		max                 : NaN,   // The max numeric value allowed
		min                 : 0    // The min numeric value allowed
}

var INPUT_DATE_OTHER = {
		allow : '/',
		disallow : '',
		allowSpace : false,
		allowNewline : false,
		allowNumeric : true,
		allowLatin : false,
		allowOtherCharSets : false,
		maxLength : 10
	}

/* MENSAJES DE ERROR */

var MENSAJE_ERROR = {
	DOCUMENTO_INVALIDO 			: 'Ingresa un documento válido.',
	DOCUMENTO_VACIO 			: 'Ingresa un número de documento.',
	DOCUMENTO_DNI_VACIO 		: 'Ingresa un número de documento.',
	NOMBRE_INVALIDO				: 'Ingresa un nombre válido.',
	NOMBRE_VACIO				: 'Ingresa un nombre.',
	APELLIDO_INVALIDO			: 'Ingresa un apellido válido.',
	APEPAT_VACIO				: 'Ingresa apellido paterno.',
	APEMAT_VACIO				: 'Ingresa apellido materno.',
	CELULAR_INVALIDO			: 'Ingresa un número de celular válido.',
	CELULAR_VACIO				: 'Ingresa un número de celular',
	EMAIL_INVALIDO				: 'Ingresa un correo electrónico válido',
	EMAIL_VACIO					: 'Ingresa un correo electrónico',
	PERFIL_INVALIDO				: 'Perfil inválido.',
	PERFIL_VACIO				: 'Ingresa un perfil.',
	DIGITO_SMS_INVALIDO			: 'Ingrese un código SMS válido.',
	DIGITO_SMS_VACIO			: 'Ingrese un código SMS válido.',
	CODIGO_SMS_NO_VALIDO		: 'El código SMS ingresado no es válido.',
	MONTO_VACIO					: 'Ingresa monto.',
	MONTO_NO_VALIDO				: 'Ingresa un monto válido.',
	TIPO_INGRESOS_VACIO			: 'Selecciona el tipo de ingreso.',
	TIPO_EMPLEO_VACIO			: 'Selecciona el empleo.',
	TIPO_INSTRUCION_VACIO		: 'Selecciona la instruccion.',
	SEXO_VACIO					: 'Selecciona el campo sexo.',
	EDAD_INVALIDO				: 'Ingresa una edad válida.',
	EDAD_VACIO					: 'Ingresa edad.',
	ESTADO_CIVIL_VACIO			: 'Ingresa estado civil.',
	ESTUDIOS_VACIO				: 'Ingresa nivel de instrucción',
	PROFESION_VACIO				: 'Ingresa profesión.',
//	DISTRITO_INVALIDO			: 'Ingresar un Distrito válido.',
//	DISTRITO_VACIO				: 'Ingresar Distrito.',
	MIEMBROS_INVALIDO			: 'Ingresa un valor valido.',
	MIEMBROS_VACIO				: 'Ingresa miembros de familia.',
	SIT_VIVIENDA_VACIO			: 'Seleccione una opción.',
	SIT_LABORAL_VACIO			: 'Seleccione una opción.',
	ACT_ECONOMICA_VACIO			: 'Seleccione una opción.',
	ANTIGUEDAD_INVALIDO			: 'Ingresa un valor válido.',
	ANTIGUEDAD_VACIO			: 'Ingresa antigüedad.',
	INGRESO_FIJO_INVALIDO		: 'Ingresa un valor válido.',
	INGRESO_FIJO_VACIO			: 'Ingresa ingreso fijo.',
	INGRESO_VARIABLE_INVALIDO	: 'Ingresa un valor válido.',
	INGRESO_VARIABLE_VACIO		: 'Ingresa ingreso variable.',
	GASTOS_ALQUILER_INVALIDO	: 'Ingresa un valor válido.',
	GASTOS_ALQUILER_VACIO		: 'Ingresa los gastos de alquiler.',
	
    DIRECCION_OK : 'direccion-valida',
    DIRECCION_TIPO_NO_APLICA : 'No aplica',
    DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA : 'UNCATEGORIZED',
    DIRECCION_NOMBREVIA_VACIO : 'Ingresa un nombre de Vía.',
    DIRECCION_NOMBREVIA_MAYOR_50 : 'Ingresa un nombre menor a 50 caracteres.',
    DIRECCION_NOMBREVIA_CARACTERES_INVALIDOS : 'Ingresa caracteres válidos.',
    DIRECCION_NOMBREZONA_VACIO : 'Ingresa un nombre de zona.',
    DIRECCION_NOMBREZONA_MAYOR_30 : 'Ingresa un nombre menor a 30 caracteres.',
    DIRECCION_NOMBREZONA_CARACTERES_INVALIDOS : 'Ingresa caracteres válidos.',
    DIRECCION_NOMBREZONA_Y_NOMBREVIA_NO_APLICAN : 'Ingresa un nombre de zona o un tipo de vía.',
    DIRECCION_CODZONA_Y_CODVIA_NO_APLICAN : 'Ingresa un tipo de vía y una zona al mismo tiempo.',
    DIRECCION_CODTIPOVIA_NULO_O_VACIO : 'Ingresa un tipo de vía.',
    DIRECCION_CODZONA_NULO_O_VACIO : 'Ingresa una zona.',
    DIRECCION_CODDISTRITO_NULO_O_VACIO : 'Ingresa un distrito.',
    DIRECCION_NUMEXTERIOR_Y_MANZANA_VACIOS : 'Ingresa N°.Ext. o Mz.',
    DIRECCION_NUMEROEXTERIOR_Y_MANZANA_LLENOS : 'El nro. exterior y la Mz. no pueden ser ingresados al mismo tiempo.',
    DIRECCION_NUMEROEXTERIOR_MAYOR_8 : 'Ingresa un Nro. mayor a 8 caracteres.',
    DIRECCION_NUMEROEXTERIOR_CARACTERES_INVALIDOS : 'Ingresa un número válido.',
    DIRECCION_DPTO_MAYOR_8 : 'Ingresa un nro. mayor a 8 caracteres.',
    DIRECCION_DPTO_CARACTERES_INVALIDOS : 'Ingresa un número válido.',
    DIRECCION_MANZANA_MAYOR_8 : 'Ingresa un nro. mayor a 8 caracteres.',
    DIRECCION_MANZANA_CARACTERES_INVALIDOS : 'Ingresa caracteres válidos.',
    DIRECCION_LOTE_MAYOR_8 : 'Ingresa un número menor a 8 caracteres.',
    DIRECCION_LOTE_CARACTERES_INVALIDOS : 'Ingreso un número válido.',
    DIRECCION_REFERENCIA_MAYOR_50 : 'Ingresa una referencia menor a 50 caracteres.',
    DIRECCION_REFERENCIA_CARACTERES_INVALIDOS : 'Ingresa caracteres válidos.',
    DIRECCION_REFERENCIA_OBLIGATORIA : 'Ingresa una Referencia.',
    
    OCUPACION_NO_INGRESADA :'Ingresa una ocupación',
    CENTRO_LABORES_NO_INGRESADO : 'Ingresa un centro de labores',	    
    SITUACION_VIVIENDA_NO_INGRESADA: 'Ingresa una situación de vivienda',
    GASTOS_ALQUILER_NO_INGRESADO: 'Ingresa gastos de alquiler',
    INGRESOS_NO_INGRESADO: 'Ingresa un monto',
    DISTRITO_INVALIDO : 'Ingresa un distrito de residencia',
    DISTRITO_VACIO : 'Ingresa un distrito de residencia',
	FECHA_INVALIDA : 'Ingresa una fecha válida',
	FECHA_VACIO : 'Ingresa una fecha'
}

var MENSAJE_NO_ERROR = {
		SUCCESS					: 'Success'
}

var MENSAJES_REENVIO = {
		POR_ENVIAR				: '¿No te llegó el código? Te enviamos <br class="visible-xs-block">otro al ',
		ENVIADO					: 'Te enviamos un nuevo código al '
}

var CODIGO_SMS = {
		ENVIADO					: '0',
		NO_CONCUERDA			: '2',
		EXCESO_REENVIOS			: '3',
		EXCESO_ERRORES			: '011'
}

var INICIO_FORMULARIO = {
		PLD : 'inicio-pld',
		ESTUDIO : 'inicio-estudio',
		VEHICULO : 'inicio-vehicular'
}

var ERRORES = {
		SEGUROS : "error-lista-negra-seguros",
		FATCA : "error-cliente-fatca",
		ERROR_GENERICO : "error-generico",
		ERROR_LISTA_NEGRA : "error-lista-negra",
		ERROR_LISTA_NEGRA_SEGUROS : "error-lista-negra-seguros",
		ERROR_INGRESO_MAXIMO : "error-maximo-ingreso-formulario",
		ERROR_PERSONA_PEP : "error-persona-pep",
		ERROR_PREGUNTAS_CANDADO : "error-preguntas-candado",
		ERROR_BLOQUEADO_PREGUNTAS_CANDADO : "error-bloqueado-preguntas-candado",
		ERROR_SIN_OFERTA : "error-sin-oferta",
		ERROR_CODIGO_SMS : "error-codigo-sms",
		ERROR_CLIENTE_FATCA : "error-cliente-fatca",
		ERROR_NO_VERIFICADO : "error-no-verificado",
		ERROR_PERSONA_EDAD_INVALIDA: "error-rechazo-por-edad",
		ERROR_DIRECCION_NO_COINDE_CON_RENIEC: "error-direccion-no-coincide-con-reniec",
		ERROR_SIN_OFERTA_VEH_NUEVO: "auto-nuevo-sin-oferta",
		ERROR_SIN_OFERTA_AUTO_USADO: "error-sin-oferta-auto-usado",
		ERROR_SIN_OFERTA_AUTO_NUEVO: "error-sin-oferta-auto-nuevo",
		ERROR_FECHA_NACIMIENTO: "error-fecha-nacimiento",
}


const parmRegex = {
	    NUMERIC : /^[0-9]+$/,
	    INTEGER : /^\-?[0-9]+$/,
	    DECIMAL : /^\-?[0-9]*\.?[0-9]+$/,
	    EMAIL : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	    ALPHA : /^[a-z]+$/i,
	    ALPHANUMERIC_NO_SPACE : /^[ña-z0-9]+$/i,
	    ALPHANUMERIC : /^[\sñáéíóúüa-z0-9.]+$/i,
	    ALPHANUMERIC_NO_POINT : /^[\sña-z0-9]+$/i,
	    ALPHANUMERIC_ALL : /^[\s°&,#ñáéíóúü\-a-z0-9.]+$/i,
	    ALPHA_DASH : /^[a-z0-9_\-]+$/i,
	    NUM_NATURAL : /^[0-9]+$/i,
	    CODIGO_DISTRITO : /^[0-9]{6}-[0-9]{6}$/,
	    NUM_NATURAL_NO_ZERO : /^[1-9][0-9]*$/i,
	    IP : /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
	    BASE64 : /[^a-zA-Z0-9\/\+=]/i,
	    NUMERIC_DASH : /^[\d\-\s]+$/,
	    URL : /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
	    DATE_YYYY_MM_DD : /\d{4}-\d{1,2}-\d{1,2}/,
	    DATA_DD_MM_YYYY :  /\d{1,2}-\d{1,2}-\d{4}/,
	    DATE_OTHER_FORMAT : /\d{2}\/\d{2}\/\d{4}/,
	    DATE_LIMIT_FORMAT : /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
	}