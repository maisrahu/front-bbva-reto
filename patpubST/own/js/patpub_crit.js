var listaDistritos;
var CTE_FLUJO_PRE_APROBADO = '101';
var CTE_FLUJO_PAT = '201';
var CTE_FLUJO_REGULAR_ALTO = '112';
var CTE_FLUJO_REGULAR_RESTO = '102';
var V_CRONOGRAMA_ACTUAL;
var V_CT_NUEVA = false;
var SUELDO_MIN_ACTUAL = "930";


var PROFESION = '';
var MIEMBROS_DEPENDIENTES = '';
var SITUACION_VIVIENDA = '';
var SITUACION_VIVIENDA_NC = '';
var SITUACION_VIVIENDA_TAGUEO = '';
var SITUACION_LABORAL = '';
var ACTIVIDAD_ECONOMICA = '';
var ANTIGUEDAD_LABORAL = '';
var GANANCIAS = '';

var CENTRO_LABORES = '';

var GASTOS_ALQUILER = '';
var DISTRITO = '';
var SITUACION_VIVIENDA_MOTOR = false;

var navegadorUser = '';
var soUser = '';
var tramaInformationUser = '';
var modeloDispositivo = '';
var direccionIp = '';
var pasoActual = 1;
var pasoTotal = 0;

var ID_SESION = '';
var SIN_CUENTA = "";
var CON_CUENTA = "";
var flujoActual = "";

var CONTEXT_APP_SUBDOMAIN = 'prestamos.bbva.pe';
var CONTEXT_PATH = $('#baseUrl').val();
var CONTEXT_AJAX = '';

if(window.location.host === CONTEXT_APP_SUBDOMAIN) {
	CONTEXT_AJAX = '/';
	CONTEXT_PATH = '';
} else {
	CONTEXT_AJAX = CONTEXT_PATH + '/';
}

window.onresize = resizeAllAside;
$(document).ready(function () {

	ID_SESION = $("#idSesion").val();
	var ansActual = "";
	var tipoDocumento;
	
	if(errorInicial.trim() != ''){
		salida(errorInicial);
	}
	
	$("#contenedorRecaptcha").addClass('hidden');

	resizeAllAside();

	$('#celularOpcion').val("");
	$('#inputCelOpc').addClass('hidden');

	function noCopyPaste(arr){
		for(i = 0 ; i < arr.length ; i ++ ){
			var id = arr[i];
			$(id).on('paste', function () {
				var element = this; //grab the element that was pasted into
				setTimeout(function () {
					var text = $(element).val();
					text = text
						.replace(/\u2013|\u2014/g, "-")     //Fix dashes
						.replace(/[\u2018\u2019]/g, "'")    //Fix single quotes
						.replace(/[\u201C\u201D]/g, '"');   //Fix double quotes
					$(element).val('');
				}, 100);
			  });//end on.paste
		}
	}

	noCopyPaste(['#numDocDni','#numDocOtro', '#celularObligatorio', '#email', '#distrito-nopld', '#fechaNacimiento-nopld']);

	$('#numDocDni').numeric(INPUT_TYPE_DNI);
	$('#numDocOtro').alphanum(INPUT_TYPE_OTHER);
	$('#nombres').alphanum(INPUT_ONLY_TEXT);
	$('#apePat').alphanum(INPUT_ONLY_TEXT);
	$('#apeMat').alphanum(INPUT_ONLY_TEXT);
	$('#celularObligatorio').numeric(INPUT_CELLPHONE);
	$('#celularOpcion').numeric(INPUT_CELLPHONE);
	$('#email').alphanum(INPUT_EMAIL);
	
	function inIframe() {
	    try {
	        return window.parent.self !== window.parent.top;
	    } catch (e) {
	        return true;
	    }
	}
	
	setTimeout(function(){$('.go-scroll-to').click();}, 2000 );	

	$('#tipoDoc').on('click', function () {
		if ((FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, TAG_TIPO_DOCUMENTO, FLUJO);
			CONTADOR_APP_STARTED ++;
		} 
	});

	$('#numDocDni').on('click', function () {
		if ((FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, TAG_NUMERO_DOCUMENTO, FLUJO);
			CONTADOR_APP_STARTED ++;
		} 
	});

	$('#celularObligatorio').on('click', function () {
		if ((FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, TAG_CELULAR, FLUJO);
			CONTADOR_APP_STARTED ++;
		}
	});

	$('#email').on('click', function () {
		if ((FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, TAG_EMAIL, FLUJO);
			CONTADOR_APP_STARTED ++;
		}
	});
	
	$('#distrito-nopld').on('click', function () {
		if ((FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, TAG_DISTRITO_RESIDENCIA, FLUJO);
			CONTADOR_APP_STARTED ++;
		}
	});

	$('#fechaNacimiento-nopld').on('click', function () {
		if ((FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, TAG_FECHA_NACIMIENTO, FLUJO);
			CONTADOR_APP_STARTED ++;
		}
	});

	$('#chkboxTDP').on('click', function () {
		if ((FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, TAG_CHECKBOX_TDP, FLUJO);
			CONTADOR_APP_STARTED ++;
		}
	});

	$('#label-tdp').on('click', function () {
		if ((FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, TAG_LABEL_TDP, FLUJO);
			CONTADOR_APP_STARTED ++;
		}

		window.open('https://www.bbva.pe/content/dam/public-web/peru/documents/prefooter/proteccion-de-datos-personales/clausula-ley-proteccion-datos-personales.pdf', '_blank');
		
	});

	$('#paso01').on('click', function() {
		$('#paso01').prop('disabled', true );
		var validacionCaptcha = true;
		if (grecaptcha.getResponse() == '') {
			grecaptcha.execute();
			setTimeout(function () {
				if ($.active == 0) {
					validacionCaptcha = false;
					$('#paso01').prop('disabled', false);
				}
			}, 1000);
			return false;
		}

		if ( (FLUJO == FLUJO_ESTUDIOS || FLUJO == FLUJO_PLD) && CONTADOR_APP_STARTED == 0) {
			llenarDataLayer(TAG_EVENTO_APP_STARTED, "CONTINUAR", FLUJO);
			CONTADOR_APP_STARTED ++;
		}
		
		var numeroDoc = $('#numDocDni').val() != '' ? $('#numDocDni').val() : $('#numDocOtro').val();
		
//		var fechaNac = $('#fechaNacimiento-nopld').val().slice(0,10);
//		EDAD = calculateAge(fechaNac);
		if(validacionFormularioInicio() && validacionCaptcha){
			$('#paso01').prop('disabled', true);
			var dataalta = {
				idSesion: ID_SESION,
				digitalData: getDigitalDataString(),
				tipoDocumento : $('#tipoDoc').data('val'),
				numeroDocumento : numeroDoc,
				telefono1: $("#celularObligatorio").val(),
				telefono2: $("#celularOpcion").val(),
				correo: $("#email").val(),
//				distritoWeb : $('#distrito-nopld').val(),
				indicador: indicadorEntrada,
				motivoPerfil: FLUJO,
				recaptcha: grecaptcha.getResponse(),
				flagTdp: $('#chkboxTDP').is(':checked')?"1":"0",
				navegadorUser: cortarString(navegadorUser, 40),
				soUser: cortarString(soUser, 40),
				modeloDispositivo: cortarString(modeloDispositivo, 40),
				tramaInformationUser : cortarString(tramaInformationUser, 150),
				dirIP: direccionIp,
//				fechaNacimiento: fechaNac
			};
			
			var headers = {
				'track-lead': TRACKING,
				'track-front': ID_SESION
		    };

			$('.paso-01-gif').removeClass('hidden');
			
			$.ajax({
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				url: CONTEXT_AJAX + 'ajax/alta',
				data: JSON.stringify(dataalta),
				headers: headers,
				success: function(respuestaAjax) {
					if(respuestaAjax.error){
						$('#paso01').prop('disabled', false);
						localStorage.setItem('REGLA_RECHAZO', JSON.stringify(respuestaAjax.vars.REGLA_RECHAZO));
						salida(respuestaAjax.error.errorCode);
						$('.paso-01-gif').addClass('hidden');
					}else{
						var rptaData = respuestaAjax.data;
						var rptaVars = respuestaAjax.vars;
						
						PROFILE = respuestaAjax.data.crossell ? "crossell" : "open market" ;
						ansActual = rptaData.ans;
						flujoActual = rptaData.flujo;
						flagLn = rptaData.flagLn;
						TRACKING = rptaData.tracking;
						llenarConteoPasos(respuestaAjax.data.crossell);
						$('#seccion-preguntas-candado').removeClass('hidden');
						$('#seccion-preguntas-candado .hst-closed').removeClass('hidden');
						resizeAllAside();

						 objPreguntas = rptaVars; 
						 var htmlPreguntaPep = "";
						 var htmlPreguntasCandado = "";
						 var preguntasCandado = objPreguntas.preguntasCandado;

						 for (i = 0; i < preguntasCandado.length; i++) {
						 	$('.pregunta-candado-' + (i + 1) + ' .texto-pregunta').html(preguntasCandado[i].descripcion);
						 	$('.pregunta-candado-' + (i + 1)).data('tipo', preguntasCandado[i].presentacion);

						 	if (preguntasCandado[i].presentacion == 'TEXTO') {
						 		$('.pregunta-candado-' + (i + 1) + ' .mdl-textfield').removeClass('hidden');
						 		$('.pregunta-candado-' + (i + 1) + ' input').attr('placeholder', preguntasCandado[i].ayuda);
						 		$('.pregunta-candado-' + (i + 1) + ' input').data('validacion', preguntasCandado[i].validacion);
						 		$('.pregunta-candado-' + (i + 1) + ' input').data('id', preguntasCandado[i].id);
						 		if(preguntasCandado[i].descripcion == 'Ingresa el ubigeo de nacimiento que aparece en tu DNI'){
						 			$('.pregunta-candado-' + (i + 1) + ' input').attr('type', "tel");
						 			$('.pregunta-candado-' + (i + 1) + ' input').attr('maxlength', "6");
						 		}else if (preguntasCandado[i].descripcion == 'Ingresa la fecha de emisión que aparece en tu DNI'){
//							 			$('.pregunta-candado-' + (i + 1) + ' input').attr('type', "date");
						 			$('.pregunta-candado-' + (i + 1) + ' input').attr('maxlength', "10");
						 		}else{
						 			$('.pregunta-candado-' + (i + 1) + ' input').attr('type', "text");
						 		}
						 	} else {
						 		$('.pregunta-candado-' + (i + 1) + ' .mdl-radio').removeClass('hidden');
						 		$('.pregunta-candado-' + (i + 1) + ' .mdl-radio__button').data('id', preguntasCandado[i].id);
						 	}

						 }

						 if (typeof objPreguntas.preguntaPEP != "undefined") {
						 	var preguntaPep = objPreguntas.preguntaPEP;
						 	$('.espacio-pep').data('pep', 1);
						 	$('.espacio-pep .texto-pregunta').html(preguntaPep.descripcion);
						 	$('.espacio-pep').removeClass('hidden');

						 }

						 resizeAllAside();
						 $('#seccion-02 .hst-closed').removeClass('hidden');
						 $('#seccion-preguntas-candado .hst-closed').addClass('hidden');
						 if($('#seccion-01').is(':visible')){
							 transicionPasoxPaso($('#seccion-01'), $('#seccion-preguntas-candado'));
						 }else{
							 transicionPasoxPaso($('#seccion-02'), $('#seccion-preguntas-candado'));
						 }
						
						if (FLUJO == FLUJO_VEHICULAR_NUEVO) {
							//llenarDataLayer(TAG_EVENTO_APP_STEP_3, "", FLUJO_VEHICULAR, FLUJO_VEHICULAR_NUEVO);
						} else if(FLUJO == FLUJO_VEHICULAR_USADO) {
							llenarDataLayer(TAG_EVENTO_APP_STEP_3, "", FLUJO_VEHICULAR,FLUJO_VEHICULAR_USADO);
						} else if (FLUJO == FLUJO_ESTUDIOS) {
							llenarDataLayer(TAG_EVENTO_APP_STEP_2, "", FLUJO_ESTUDIOS);
						} else if(FLUJO == FLUJO_PLD) {
							llenarDataLayer(TAG_EVENTO_APP_STEP_2, "", FLUJO_PLD);
						}

//						 $('#inicio-formulario').show();
						 setTimeout(function(){ resizeAllAside(); }, 100);
						 $('.paso-01-gif').addClass('hidden');
						 hideFooter();
							 
					}
				},
					error: function (jqXHR, textStatus, errorThrown) {
						errorHandler(jqXHR);
						$('.paso-01-gif').addClass('hidden');
					}
				});
		
		}else{
			$('.paso-01-gif').addClass('hidden');
			$('#paso01').prop('disabled', false );
		}
		
	});
	
	$('.getmdl-select').on('click', '.mdl-menu__item', function () {
		var valorSeleccion = $(this).data('val');
		var valorText = $(this).text();
		var divSelect = $(this).parent().parent().parent();
		var inputSelect = divSelect.find('input[type=text].mdl-textfield__input');
		inputSelect.val(valorText);
		inputSelect.css("color", "");
		inputSelect.data('val', valorSeleccion);
		divSelect.removeClass('is-invalid');
	});

	$('#select-tipo-documento').on('click', '.mdl-menu__item',
		function () {
			var valorSeleccion = $(this).data('val');
			tipoDocumento = valorSeleccion;
			if (valorSeleccion != 'DNI') {
				$('#inputNumDocOtro').removeClass('hidden');
				$('#inputNumDocDni').addClass('hidden');
				resetDocuments();
			} else {
				$('#inputNumDocOtro').addClass('hidden');
				$('#inputNumDocDni').removeClass('hidden');
				resetDocuments();
			}
		});


	$('.hst-card').on('click', function () {
		var dataPerfil = $(this).data('perfilid');
		ventanaAncho = $(window).width();
		$('.hst-card').removeClass('error');
		FLUJO = dataPerfil;
			
		$('.hst-card').removeClass('active');
		$(this).addClass('active');

		$('.form-inicial').addClass('hidden');
		$('#inputCelOpc').addClass('hidden');
		$("#aside-form-inicial").addClass('hidden');
		$('#aside-form-inicial-mobile').addClass('hidden');
		$('.correo-pld').removeClass('col-md-12');
		$('.correo-pld').removeClass('col-sm-12');
		$('.correo-pld').addClass('col-md-6');
		$('.correo-pld').addClass('col-sm-6');
		$("#contenedor-form-inicial").removeClass("col-md-9");
		$("#contenedor-form-inicial").removeClass("col-md-8_5");
		$("#contenedor-form-inicial").removeClass("col-sm-8");
		$(".top-banners-pld").removeClass('hidden');
		
		if(dataPerfil === FLUJO_PLD){
			FLUJO = FLUJO_PLD;
			$('#seccion-02 .hst-closed').addClass('hidden');
			$('#seccion-01 .hst-closed').removeClass('hidden');
			transicionPasoxPaso($('#seccion-01'), $('#seccion-02'));
		}else if(dataPerfil === FLUJO_VEHICULAR){
			$('#perfilado_opciones-vehicular').removeClass('hidden');
			pasoTotal = 3;
			llenarDataLayer(TAG_EVENTO_APP_ON_CLICK_START,"",FLUJO_VEHICULAR);
			llenarDataLayer(TAG_EVENTO_APP_PAGE_VISIT,"",FLUJO_VEHICULAR);			
			$("#motivoPld").hide();
			$("#btnRegresar").show();
			$("#contiAuto").show();
			$("#SegundoAuto").show();
			$("#card").flip(true);

		}else if(dataPerfil === FLUJO_VEHICULAR_NUEVO || dataPerfil === FLUJO_VEHICULAR_USADO){
			if(dataPerfil === FLUJO_VEHICULAR_NUEVO){
				FLUJO = FLUJO_VEHICULAR_NUEVO;
				//llenarDataLayer(TAG_EVENTO_APP_STARTED, dataPerfil, FLUJO_VEHICULAR,FLUJO_VEHICULAR_NUEVO);
			}else if(dataPerfil === FLUJO_VEHICULAR_USADO) {
				FLUJO = FLUJO_VEHICULAR_USADO;
				llenarDataLayer(TAG_EVENTO_APP_STARTED, dataPerfil, FLUJO_VEHICULAR,FLUJO_VEHICULAR_USADO);
			}
			pasoTotal = 3;
			$('#tituloFormDatosIniciales').text('Vehicular');
			$('#seccion-02 .hst-closed').addClass('hidden');
			$('#seccion-01 .hst-closed').removeClass('hidden');
			
			transicionPasoxPaso($('#seccion-01'), $('#seccion-02'));

			if(dataPerfil === FLUJO_VEHICULAR_USADO){
				llenarDataLayer(TAG_EVENTO_APP_STEP_2, "", FLUJO_VEHICULAR);
			}

		}else if (dataPerfil === FLUJO_ESTUDIOS) {
			pasoTotal = 3;
			FLUJO=FLUJO_ESTUDIOS;
			llenarDataLayer(TAG_EVENTO_APP_ON_CLICK_START, "", FLUJO_ESTUDIOS);
			llenarDataLayer(TAG_EVENTO_APP_PAGE_VISIT, "", FLUJO_ESTUDIOS);
			$('#tituloFormDatosIniciales').text('de Estudios');
			$('#seccion-02 .hst-closed').addClass('hidden');
			$('#seccion-01 .hst-closed').removeClass('hidden');
			transicionPasoxPaso($('#seccion-01'), $('#seccion-02'));	
			// llenarDataLayer(TAG_EVENTO_APP_STEP_2, "", FLUJO_ESTUDIOS);
		}
		resizeAllAside();
	});

	/*-- Mascara input Generico --*/
	$('.hstMsk-textfield__view').on('focus', function () {

		var divPadre = $(this).parent();
		var inputHidden = divPadre.find('.hstMsk-textfield__hidden');
		var iThis = $(this);
		iThis.addClass('hidden');
		inputHidden.removeClass('hidden');
		setTimeout(function () { inputHidden.focus(); }, 1);

	});

	$('.hstMsk-textfield__hidden').on('focus', function () {
		var divPadre = $(this).parent();
		divPadre.addClass('is-focused');
	});

	$('.hstMsk-textfield__hidden').on('blur', function () {
		var divPadre = $(this).parent();
		var inputView = divPadre.find('.hstMsk-textfield__view');
		var iThis = $(this);
		iThis.addClass('hidden');
		inputView.removeClass('hidden');
		divPadre.removeClass('is-focused');
		divPadre.removeClass('is-invalid');
		if (iThis.val() == '' || iThis.val() == 0) {
			$(this).parent().removeClass('is-dirty');
		}else{
			$(this).parent().addClass('is-dirty');
		}
	});

	/*-- FIN Mascara input Generico --*/

	
	
	
	$('#pasoFin-101').on('click', function() {
		window.parent.location.href = 'https://bbvacontinental.pe/';
	});
	$('#pasoFin-201').on('click', function () {
		window.parent.location.href = 'https://bbvacontinental.pe/';
	});
	$('#pasoFin-112').on('click', function () {
		window.parent.location.href = 'https://bbvacontinental.pe/';
	});
	$('#pasoFin-102').on('click', function () {
		window.parent.location.href = 'https://bbvacontinental.pe/';
	});
	
	sugerirDistritos($('#txtDistrito'));

	$("#card").flip({
		trigger: 'manual'
	})

	$("#btnRegresar").click(function (event) {

		$("#motivoPld").show();
		$("#contiAuto").hide();
		$("#SegundoAuto").hide();
		$('.hst-card').removeClass('active');
		$("#card").flip('toggle');

		llenarDataLayer(TAG_EVENTO_APP_PAGE_VISIT, "", FLUJO_PLD);
	});
	
	$('#fechaNacimiento-nopld').inputmask();
    $('#inputfechaNacimiento').datetimepicker(
		{
			viewMode: 'days',
			format: 'DD/MM/YYYY',
			locale: 'es'
		});
    $("#fechaNacimiento-nopld").focus(function () {
    	$('#inputfechaNacimiento').datetimepicker('show');
			var fechaNacimiento = $('#fechaNacimiento-nopld').val().slice(0,10);
			var fechaActual = new Date();
			var dd = fechaActual.getDate(); 
			var mm = fechaActual.getMonth()+1; 
			var yyyy = fechaActual.getFullYear(); 
			if(dd<10){dd='0'+dd}
			if(mm<10){mm='0'+mm} 
			var fechaActual = dd+'/'+mm+'/'+yyyy; 
			if(fechaNacimiento === fechaActual){
				$('#fechaNacimiento-nopld').val('');  
			}
    });
    
    $('#fechaNacimiento-nopld').on('blur', function(){
  		$('#inputfechaNacimiento').datetimepicker('hide');
  		var fechaNacimiento = $('#fechaNacimiento-nopld').val().slice(0,10);
  		if(!parmRegex.DATE_LIMIT_FORMAT.test(fechaNacimiento)){
  			encenderValidarFechaNacimiento('#fechaNacimiento-nopld');
  			$('#fechaNacimiento-nopld').val(''); 
	  	}else{
	  		$('#inputfechaNacimiento').removeClass('is-invalid');
	  	}
    });
	

	
}); //Fin del ready

function llenarConteoPasos(crossell){
	if(pasoTotal == 0){
		if(crossell){
			$('#seccion-preguntas-candado .label-pasos').html("Paso 2 de 5");
			$('#seccion-simulador .label-pasos').html("Paso 3 de 5");
			$('#seccion-fatca .label-pasos').html("Paso 4 de 5");
			$('#seccion-tyc .label-pasos').html("Paso 5 de 5");
		}else{
			$('#seccion-preguntas-candado .label-pasos').html("Paso 2 de 6");
			$('#seccion-simulador .label-pasos').html("Paso 3 de 6");
			$('#seccion-seccionDireccion .label-pasos').html("Paso 4 de 6");
			$('#seccion-fatca .label-pasos').html("Paso 5 de 6");
			$('#seccion-tyc .label-pasos').html("Paso 6 de 6");
		}
	}else{
		$('#seccion-preguntas-candado .label-pasos').html("Paso 2 de 3");
		$('#seccion-datosPersonales-VEH .label-pasos').html("Paso 3 de 3");
	}
	
}

function retornoRecaptcha() {
	if (grecaptcha.getResponse().length > 0) {
		$("#paso01").trigger('click');
	}
};

$(window).on('load', function () {
	if (indicadorEntrada === 'VEH') {
		llenarDataLayer(TAG_EVENTO_APP_PAGE_VISIT, "", FLUJO_VEHICULAR);
		FLUJO = FLUJO_VEHICULAR;
	} else if (indicadorEntrada === 'EST') {
		llenarDataLayer(TAG_EVENTO_APP_PAGE_VISIT, "", FLUJO_ESTUDIOS);
		FLUJO = FLUJO_ESTUDIOS;
	} else {
		llenarDataLayer(TAG_EVENTO_APP_PAGE_VISIT, "", FLUJO_PLD);
		FLUJO = FLUJO_PLD;
	}


});

/* Nueva Validacion */

/* Formulario Inicial */


function validaDocumentoDNI() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#numDocDni');
	var valueElemento = divElemento.val();
	var evaluador = /^\d+$/;

	if (valueElemento.trim().length !== 0) {
		if (valueElemento.length === 8) {
			if (evaluador.test(valueElemento)) {
				respuesta.campoValido = true;
				respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
			} else {
				respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_INVALIDO;
			}
		} else {
			respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_DNI_VACIO;
	}
	return respuesta;
}

function validaDocumento() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#numDocOtro');
	var valueElemento = divElemento.val();
	var evaluador = /[A-z-0-9]/;

	if (valueElemento.trim().length !== 0) {
		if (valueElemento.length >= 1 && valueElemento.length < 13) {
			if (evaluador.test(valueElemento)) {
				if (valueElemento.split('-').length === 2) {
					if (valueElemento.split('-')[0].length > 0) {
						if (valueElemento.split('-')[1].length > 0) {
							respuesta.campoValido = true;
							respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
						} else {
							respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_INVALIDO;
						}
					} else {
						respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_INVALIDO;
					}
				} else {
					if (valueElemento.split('-').length === 1) {
						respuesta.campoValido = true;
						respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
					} else {
						respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_INVALIDO;
					}
				}
			} else {
				respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_INVALIDO;
			}
		} else {
			respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.DOCUMENTO_VACIO;
	}
	return respuesta;
}

function validaNombre() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#nombres');
	var valueElemento = divElemento.val();
	var evaluador = /^[a-zA-Z_áéíóúñ\s]*$/;

	if (valueElemento.trim().length !== 0) {
		if (valueElemento.length <= 50) {
			if (evaluador.test(valueElemento)) {
				respuesta.campoValido = true;
				respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
			} else {
				respuesta.mensaje = MENSAJE_ERROR.NOMBRE_INVALIDO;
			}
		} else {
			respuesta.mensaje = MENSAJE_ERROR.NOMBRE_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.NOMBRE_VACIO;
	}

	return respuesta;
}

function validaDistritoNoPLD() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#distrito-nopld');
	var valueElemento = divElemento.val();
	var evaluador = /^[a-zA-Z_áéíóúñ\s]*$/;

	if (valueElemento.trim().length !== 0) {
		if (valueElemento.length <= 50) {
			if (evaluador.test(valueElemento) && valueElemento !='') {
				respuesta.campoValido = true;
				respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
			} else {
				respuesta.mensaje = MENSAJE_ERROR.DISTRITO_INVALIDO;
			}
		} else {
			respuesta.mensaje = MENSAJE_ERROR.DISTRITO_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.DISTRITO_VACIO;
	}

	return respuesta;
}

function validaFechaNacimiento(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var valueElemento = divElemento.val().trim();
	if(valueElemento.indexOf('/') === -1){
		var dia = valueElemento.slice(0,2);
		var mes = valueElemento.slice(2,4);
		var anio = valueElemento.slice(4,8);
		valueElemento = dia + '/' + mes + '/' + anio;
	}
	
	if(parmRegex.DATE_LIMIT_FORMAT.test(valueElemento)){
		respuesta.campoValido = true;
		respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
	} else if(valueElemento === ''){
		respuesta.mensaje = MENSAJE_ERROR.FECHA_INVALIDA;
	}else {
		respuesta.mensaje = MENSAJE_ERROR.FECHA_VACIO;
	}

	return respuesta;
}

function validaEmail(objId) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#'+objId);
	var valueElemento = divElemento.val();

	var evaluador = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/; 

	if (valueElemento.trim().length !== 0 && evaluador.test(valueElemento)) {
		respuesta.campoValido = true;
	} else if(valueElemento === '') {
		respuesta.mensaje = MENSAJE_ERROR.EMAIL_VACIO;
	} else{
		respuesta.mensaje = MENSAJE_ERROR.EMAIL_INVALIDO;
	}

	return respuesta;
}

function validaCheck(objId){
	$('#'+objId+"Error").addClass('hidden');
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	
	var obj = $('#'+objId)
	respuesta.campoValido = obj.is(':checked');
	if(respuesta.campoValido){
		obj.parent().removeClass('checkbox__error');
	}else{
		$('#'+objId+"Error").removeClass('hidden');
		obj.parent().addClass('checkbox__error');
	}
	return respuesta;
}

function validacionFormularioInicio() {
	var botonHabilitar = false;
	var numeroDocumento = false;
	var celular = false;
	var email = false; 
//	var distrito = false;
	
	if ($('#inputNumDocDni').is(':visible')) {
		numeroDocumento = encenderValidacionDocumentoDNI();
	} else {
		numeroDocumento = encenderValidacionDocumento();
	}
	
//	if($('#inputDistrito').is(':visible')){
//		distrito = encenderValidacionDistritoNoPLD();
//	}
//	
//	if($('#inputfechaNacimiento').is(':visible')){
//		fechaNacimiento = encenderValidarFechaNacimiento('#fechaNacimiento-nopld');
//	}
	
	celular = encenderValidacionCelular();
	email = encenderValidacionEmail();
	if (numeroDocumento.campoValido && celular.campoValido && email.campoValido) {
		botonHabilitar = true;
	}

	return botonHabilitar;
}

function encenderValidacionDocumentoDNI() {
	var divElemento = $('#numDocDni');
	var divPadre = $('#inputNumDocDni');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var validoObj = validaDocumentoDNI();
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var divCheck = $('#checkDni');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
		divCheck.addClass('hidden');
	} else {
		//VALIDO
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function encenderValidacionDocumento() {
	var divElemento = $('#numDocOtro');
	var divPadre =  $('#inputNumDocOtro'); 
	var divMensaje = divPadre.children('.mdl-textfield__error');
	//divPadre.removeClass('is-invalid');
	var validoObj = validaDocumento();
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var divCheck = $('#checkDoc');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
		divCheck.addClass('hidden');
	} else {
		//VALIDO
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function encenderValidacionDistritoNoPLD() {
	var divElemento = $('#distrito-nopld');
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaDistritoNoPLD();

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function encenderValidarFechaNacimiento(elemento) {
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaFechaNacimiento(elemento);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function encenderValidacionCelular() {
	var divElemento = $('#celularObligatorio');
	var divPadre = $('#inputCelOblig');
	var divCheck = $('#checkCel');
	
	//var divPadre = divElemento.parent();
	
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var validoObj = validaCelular('celularObligatorio');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
		divCheck.addClass('hidden');
	} else {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function encenderValidacionEmail() {
	var divElemento = $('#inputEmail');
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputEmail');
	var divCheck = $('#checkEmail');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var validoObj = validaEmail('email');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
		divCheck.addClass('hidden');
	} else {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function validaCelular(idObj) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#'+idObj);
	var valueElemento = divElemento.val();
	var evaluador = /^9{1}[0-9]+$/;

	if (valueElemento.trim().length !== 0) {
		if (valueElemento.length === 9) {
			if (evaluador.test(valueElemento)) {
				respuesta.campoValido = true;
				respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
			} else {
				respuesta.mensaje = MENSAJE_ERROR.CELULAR_INVALIDO;
			}
		} else {
			respuesta.mensaje = MENSAJE_ERROR.CELULAR_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.CELULAR_VACIO;
	}
	return respuesta;
}

function validaEdad() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#numEdad');
	var valueElemento = divElemento.val();
	var evaluador = /^[0-9]+$/;

	if (valueElemento != '' && valueElemento != 0) {
		if (evaluador.test(valueElemento) && valueElemento >= 18) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.EDAD_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.EDAD_VACIO;
	}

	return respuesta;
}

function encenderValidacionEdad() {
	var divElemento = $('#numEdad');
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaEdad();

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function validaDistrito(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	divPadre.removeClass('is-invalid');
	var valueElemento = divElemento.data('ubigeohost');
	var evaluador = parmRegex.NUMERIC;

	if (valueElemento != '' && valueElemento != 0 && valueElemento != undefined) {
		if (evaluador.test(valueElemento)) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.DISTRITO_INVALIDO;
			divPadre.addClass('is-invalid');
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.DISTRITO_VACIO;
		divPadre.addClass('is-invalid');
	}

	return respuesta;
}

function encenderValidacionDistrito(elemento) {
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaDistrito(elemento);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function verCaracteristicasPld(name) {
	transicionPantalla($('#seccion-02'), 1000);
	$('#' + name).modal({
		show: 'true',
		backdrop: 'static',
		keyboard: false,
		escapeClose: false,
		clickClose: false,
		showClose: false
	});
}

function viewPantallaFinal(flujo) {
	$('.flujo-101').addClass('hidden');
	$('..flujo-201').addClass('hidden');
	$('.flujo-112').addClass('hidden');
	$('.flujo-102').addClass('hidden');
	switch (flujo) {
		case 101:
			$('.flujo-101').removeClass('hidden');
			break;
		case 201:
			$('.flujo-201').removeClass('hidden');
			break;
		case 112:
			$('.flujo-112').removeClass('hidden');
			break;
		case 102:
			$('.flujo-102').removeClass('hidden');
			break;
		default:
			$('.flujo-102').removeClass('hidden');
			break;
	}
	resizeAllAside();
}

function errorHandler(jqXHR) {
	salida('000');
}

function salida(codigo) {
	var motivo = FLUJO;
	var urlBase = CONTEXT_PATH + '/error';
	var ind = indicadorEntrada;
	
	if(codigo==null){
		codigo = '000';
	}
	
	//Error de la carga inicial
	if(codigo=='000I'){
		motivo = "x";
		codigo = '000';
	}

	if (motivo == FLUJO_ESTUDIOS) {
		ind = INDICADOR_ESTUDIOS;
	}else if (motivo == FLUJO_VEHICULAR_NUEVO  || motivo == FLUJO_VEHICULAR_USADO) {
		ind = INDICADOR_VEHICULAR;
	} else {
		ind = INDICADOR_PLD;
	}

	switch(true){
	case codigo === '000':	
		urlBase = ERRORES.ERROR_GENERICO;
		break;
	case codigo === '999' ||  codigo === '0990' || codigo === '402' || 
		 codigo === '403' ||  codigo === '404'  || codigo === '405' || 
		 codigo === '406' ||  codigo === '407'  || codigo === '408' || 
		 codigo === '409' ||  codigo === '410':
		 urlBase = ERRORES.ERROR_LISTA_NEGRA;
		break;
	case codigo === '012':
		urlBase = ERRORES.ERROR_LISTA_NEGRA_SEGUROS;
		break;
	case codigo === '013':
		urlBase = ERRORES.ERROR_INGRESO_MAXIMO;
		break;
	case codigo === '014':
		urlBase = ERRORES.ERROR_PERSONA_PEP;
		break;
	case codigo === '015':
		urlBase = ERRORES.ERROR_PREGUNTAS_CANDADO;
		break;
	case codigo === '016':
		urlBase = ERRORES.ERROR_BLOQUEADO_PREGUNTAS_CANDADO;
		break;
	case codigo === '009':
		urlBase = ERRORES.ERROR_SIN_OFERTA;
		break;
	case codigo === '020':
		urlBase = ERRORES.ERROR_SIN_OFERTA;
		break;
	case codigo === '411':
		urlBase = ERRORES.ERROR_SIN_OFERTA;
		break;	
	case codigo === '412':
		urlBase = ERRORES.ERROR_SIN_OFERTA;
		break;	
	case codigo === '0308':
		urlBase = ERRORES.ERROR_CLIENTE_FATCA;
		break;
	case codigo === '0310':
		urlBase = ERRORES.ERROR_CODIGO_SMS;
		break;
	case codigo === '018': 
		urlBase = ERRORES.ERROR_NO_VERIFICADO;
		break;
	case codigo === '0418': 
		urlBase = ERRORES.ERROR_PERSONA_EDAD_INVALIDA;
		break;
	case codigo ==='0419': 
		urlBase = ERRORES.ERROR_DIRECCION_NO_COINDE_CON_RENIEC;
		break;
	case codigo === '011': 
		urlBase = ERRORES.ERROR_SIN_OFERTA_AUTO_USADO;
		break;
	case codigo === '1005': 
		urlBase = ERRORES.ERROR_FECHA_NACIMIENTO;
		break;
	case codigo === '0024':
		// 0024: ERROR_ANTIFRAUDE_CORREO
		grecaptcha.reset();
		return $('#inputEmail').addClass('is-invalid');		
	case codigo === '0025':
		// 0025: ERROR_ANTIFRAUDE_CELULAR
		grecaptcha.reset();
		return $('#inputCelOblig').addClass('is-invalid');
	case codigo === '0027':
		// 0027: ERROR_ANTIFRAUDE_MAXIMO_NUMERO_DOC_X_MES
		urlBase = ERRORES.ERROR_INGRESO_MAXIMO;
		break;
	case codigo === '010': 
		urlBase = ERRORES.ERROR_SIN_OFERTA_VEH_NUEVO;
		return window.location.replace(urlBase +'/'+ ID_SESION + '/' + motivo + '/' + 'vehicularUsado/' + PROCESS);
	default:
		urlBase = ERRORES.ERROR_GENERICO;
		break;
	}
	window.location.replace(urlBase +'/'+ ID_SESION + '/' + motivo + '/' + ind + '/' + codigo);	
}

function finalizarProceso(flujo){
	var motivo = FLUJO;
	var url = '';

	switch(flujo){
		case 'final-contratacion':
			url = CONTEXT_PATH + '/' + flujo + '/' + ID_SESION + '/' + motivo;
		break;
		default:
			// 'horario-diferenciado', 'verificacion-pendiente',  'auto-nuevo'
			// 'cliente-extranjero', 'estudios'
			url = CONTEXT_PATH + '/' + flujo + '/' + ID_SESION + '/' + motivo+ '/oferta/' + PROCESS;
		break;    		
	}
	window.location.replace(url);
}

function cortarString(str, longitud) {
	 if(str.length > longitud){
		 return str.slice(0, longitud).trim();
	 }else{
		 return str.trim()
	 }
}

function pintarDato(contenedor) {
	var item = $(contenedor);
	var codDistrito = item.data('coddistrito');
	var codProvincia = item.data('codprovincia');
	var codDepartamento = item.data('coddepartamento');
	var ubigeoReniec = item.data('ubigeoreniec');
	var ubigeoHost = item.data('ubigeohost');
	var htmlItem = item.html();
	// var divDireccion = contenedor;
	var idMask = contenedor.parentElement.parentElement.parentElement.querySelector('.hstMsk-textfield__hidden').id;
	var divDireccionMask = $('#' + idMask);
	divDireccionMask.val(htmlItem);
	divDireccionMask.data("coddistrito", codDistrito);
	divDireccionMask.data("codprovincia", codProvincia);
	divDireccionMask.data("coddepartamento", codDepartamento);
	divDireccionMask.data("ubigeoreniec", ubigeoReniec);
	divDireccionMask.data("ubigeohost", ubigeoHost);
	divDireccionMask.data("lleno", "1");
	$(".acom-resultado.acom-resultado-estilo").addClass("hidden");
}

function get_ip(obj){
	direccionIp = obj.ip;
}

function getBrowserInfo() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
};

// Funcion para sugerir distritos
function sugerirDistritos(elemento){
	elemento.on('blur', function () {
		var divPadre = $(this).parent();
		var inputView = divPadre.find('.hstMsk-textfield__view');
		var iThis = $(this);
		iThis.removeClass('hidden');
		inputView.addClass('hidden');
		if (iThis.val().length < 3) {
			inputView.val('');
			iThis.val('')
			divPadre.removeClass('is-focused');
		}
	});
	
	elemento.keyup(function (e) {
		var distrito = $(this).val().trim();
		var tamDistrito = distrito.length;
		var divPadre = $(this).parent();
		var divHiddenMenu = divPadre.find('.acom-resultado');
		var divItems = divPadre.find('.acom-items');
		//	    var KeyID = event.keyCode;
		var KeyID = (document.all) ? event.keyCode : e.which;
		if (KeyID == 8 || KeyID == 46) {
			elemento.data("coddistrito", "");
			elemento.data("codprovincia", "");
			elemento.data("coddepartamento", "");
			elemento.data("ubigeoreniec", "");
			elemento.data("ubigeohost", "");
			elemento.data("lleno", "0");
		} 
		divItems.html('');
		if (tamDistrito >= 3) {
			var distritoObj = { cadena: distrito,
								digitalData: getDigitalDataString() };
			var headers = {
					'track-lead': TRACKING,
					'track-front': ID_SESION
				};
			$.ajax({
				type: "POST",
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				async: true,
				url: CONTEXT_AJAX + 'ajax/buscar-distrito',
				data: JSON.stringify(distritoObj),
				headers: headers,
				success: function (jsonObj) {
					var listaTemp = jsonObj.data.ubigeos;
					listaDistritos = listaTemp.slice();
					divItems.html('');
					var htmlTemp = '';
					var tamList = listaTemp.length;
					if (tamList > 0) {
						for (i = 0; i < tamList; i++) {
							htmlTemp += '<div class="acom-sugerencia" onclick="pintarDato(this)" data-coddistrito="' + listaTemp[i].codigoDistrito + '" data-codprovincia="' + listaTemp[i].codigoProvincia + '" data-coddepartamento="' + listaTemp[i].codigoDepartamento + '" data-ubigeoreniec="' + listaTemp[i].ubigeoReniec + '" data-ubigeohost="' + listaTemp[i].ubigeoHost + '">';
							htmlTemp += listaTemp[i].nombreDistrito + ', ' + listaTemp[i].nombreProvincia + ', ' + listaTemp[i].nombreDepartamento;
							htmlTemp += '</div>';
						}

					} else {
						htmlTemp += '<div class="acom-no-result">';
						htmlTemp += "No se encontraron resultados"
						htmlTemp += '</div>';

						var idResultado = $(".acom-resultado").parent()[0].querySelector('.acom-input').id;
						$('#' + idResultado).removeData('ubigeohost');
						$('#' + idResultado).removeData('coddistrito');
						$('#' + idResultado).removeData('codprovincia');
						$('#' + idResultado).removeData('coddepartamento');
						$('#' + idResultado).removeData('ubigeoreniec');
						$('#' + idResultado).removeData('lleno');
					}
					$(".acom-items").append(htmlTemp);
					$(".acom-resultado.acom-resultado-estilo").removeClass("hidden");
				},
				error: function (jqXHR, textStatus, errorThrown) {
					console.error("Error: " + jqXHR);
				}
			});
		} else {
			switch (KeyID) {
				case 38:
					break;
				case 40:
					break;
				default:
					$(".acom-resultado.acom-resultado-estilo").addClass("hidden");
					break;
			}
		}
	});
};
//encontrar navegador de cualquier dispositivo(mozilla) y asignarlo a la variable navegadorUser
navegadorUser = getBrowserInfo();

// enviar trama compvara de la información del dispositivo.
tramaInformationUser = navigator.userAgent;

//modelo  y S.O de todos los dispositivos
	 if( navigator.userAgent.match(/Windows Phone/i)){
		 soUser = "Windows Phone" + navigator.userAgent.split('Windows Phone')[1].split(';')[0];
		 modeloDispositivo = navigator.userAgent.split(')')[0].split(';').pop();
	 }
	 else if( navigator.userAgent.match(/MeeGo/i)){
		 soUser = "MeeGo";
		 modeloDispositivo = navigator.userAgent.split(')')[0].split(';').pop();
	 }
	 else if( navigator.userAgent.match(/Android/i)){
		 if(navegadorUser.match("Firefox")){
			modeloDispositivo = "Modelo no disponible";
			soUser = 'Android' + navigator.userAgent.split('Android')[1].split(';')[0];
		 }else{
			 soUser = 'Android' + navigator.userAgent.split('Android')[1].split(';')[0];
			 modeloDispositivo = navigator.userAgent.split('Build')[0].split(';').pop();
		 }
	 }
	 else if( navigator.userAgent.match(/Mac/i)){
		 if(navigator.userAgent.match(/iPhone/i)){
			 soUser = "Mac" + navigator.userAgent.split('like')[0].split('iPhone').pop();
			 modeloDispositivo = "Iphone";
		 }
		 else if(navigator.userAgent.match(/iPad/i)){
			 soUser = "Mac" + navigator.userAgent.split('like')[0].split('CPU').pop();
			 modeloDispositivo = "iPad";
		 }
		 else if(navigator.userAgent.match(/Macintosh/i)){
			 soUser = "Mac OS" + navigator.userAgent.split('Mac OS')[1].split(')')[0];
			 modeloDispositivo = "PC";
		 }
		 else{
			 soUser = "Mac OS";
			 modeloDispositivo = "Modelo no disponible";
		 }
	 }
	 else if( navigator.userAgent.match(/Build/i)){
		 soUser = "Sistema operativo desconocido";
		 modeloDispositivo = navigator.userAgent.split('Build')[0].split(';').pop();
	 }
	 else if( navigator.userAgent.match(/BlackBerry/i)){
		 modeloDispositivo = "BlackBerry";
		 soUser = "Sistema operativo desconocido";
	 }
	 else if( navigator.userAgent.match(/webOS/i)){
		 modeloDispositivo =  "Sistema operativo desconocido";
		 soUser = "webOS";
	 }
	 else{
		// encontrar sistema de operativo de una computadora y asignar a variable soUser
			if (navigator.appVersion.indexOf("Win")!==-1) {
				soUser="Windows";
				modeloDispositivo = "PC";
			} else if (navigator.appVersion.indexOf("X11")!==-1) {
				soUser="UNIX";
				modeloDispositivo = "PC";
			} else if (navigator.appVersion.indexOf("Linux")!==-1) {
				soUser="Linux";
				modeloDispositivo = "PC";
			} else {
				soUser = "Sistema operativo desconocido";
				modeloDispositivo = "Modelo no disponible";
			}
	 }
	 

function calculateAge(birthday) {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function resetDocuments(){
	$('#numDocOtro').val('');
	$('#numDocDni').val('');
	$('#checkDni').addClass('hidden');
	$('#checkDoc').addClass('hidden');
	$('#inputNumDocDni').removeClass('is-valid');
	$('#inputNumDocDni').removeClass('is-invalid');
	$('#inputNumDocOtro').removeClass('is-valid');
	$('#inputNumDocOtro').removeClass('is-invalid');
}
