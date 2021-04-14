window.onresize = resizeAllAside;
$(document).ready(function () {
	$('.js-example-placeholder-single').select2({
		placeholder: "Seleccionar"
	});
	
	agregarTooltip('tooltip-sms-tyc', false, 'Recuerda que dispones de 3 intentos para ingresar el c\u00F3digo.');
	agregarTooltip('tooltip-correo-tyc', false, 'Puedes solicitar el cambio de la forma de env\u00EDo de tu estado de cuenta (a tu domicilio) comunic\u00e1ndote a nuestra Banca por Tel\u00e9fono o en alguna oficina BBVA.  Aplica una comisi\u00f3n mensual de S/ 10.00', 'auto');
	agregarTooltip('tooltipSms', false, 'Al ingresar este c\u00F3digo aceptas la solicitud.');
	agregarTooltip('tooltipSms-pld', false, 'Al ingresar este c\u00F3digo aceptas la solicitud.');
	agregarTooltip('iconoTooltip-final-01', false, 'Monto que se debe pagar peri\u00f3dicamente luego de adquirir un pr\u00e9stamo, con el fin de ir devolviendo parte de este y, a la vez, ir pagando los intereses.');
	agregarTooltip('iconoTooltip-final-02', false, 'Monto que se debe pagar peri\u00f3dicamente luego de adquirir un pr\u00e9stamo, con el fin de ir devolviendo parte de este y, a la vez, ir pagando los intereses.');
	agregarTooltip('tooltipCelOblig', false, 'Se enviar\u00e1 un c\u00f3digo de confirmaci\u00f3n');
	agregarTooltip('tooltip-simulador-cuenta', false, 'A esta cuenta te depositaremos el monto del pr\u00E9stamo y te descontaremos el pago de las cuotas.');
	agregarTooltip('tooltip-simulador-tea', false, 'La tasa de inter\u00E9s efectiva anual calcula el costo o valor de inter\u00E9s esperado en 360 d\u00EDas.');
	agregarTooltip('tooltip-simulador-tcea', false, 'La tasa de costo efectivo anual representa el costo total que se pagar\u00E1 en 360 d\u00EDas, incluyendo TEA, comisiones, gastos y seguros.');
	agregarTooltip('tooltip-monto-prestamo', false, 'Recuerda, el monto ingresado debe ser m\u00faltiplo de 100.');
	agregarTooltip('tooltip-ingresos', false, 'Los ingresos mensuales netos son el sueldo que percibes luego de los descuentos de ley.');
	agregarTooltip('tooltip-ingresos-MRC', false, 'Recuerda, el monto ingresado debe ser mayor o igual al sueldo m\u00ednimo (S/ 930).');
	agregarTooltip('tooltip-ingresos-MRNC', false, 'Recuerda, el monto ingresado debe ser mayor o igual al sueldo m\u00ednimo (S/ 930).');
	agregarTooltip('imgTooltipSms',false,'Recuerda que dispones de 3 intentos para ingresar el c\u00F3digo.');

	
	$('.formDigitoSMS input[type=number]').numeric(INPUT_DIGITOSMS);
	$('#celularSMS').numeric(INPUT_CELLPHONE);

	$('#numIngresoSlider').numeric(INPUT_MONTO);
	$('#numEdad').numeric(INPUT_EDAD);
	$('#numMiembros').numeric(INPUT_ONLY_2_NUMBERS);
	$('#numAntiguedad').numeric(INPUT_ONLY_2_NUMBERS);
	$('#numAntiguedadAlto').numeric(INPUT_ONLY_NUMBERS);
	$('#numIngFijo').numeric(INPUT_ONLY_6_NUMBERS);
	$('#numIngVariable').numeric(INPUT_ONLY_6_NUMBERS);
	$('#numGastosAlquiler').numeric(INPUT_ONLY_6_NUMBERS);
	$('#txtDistrito').alphanum(INPUT_ONLY_TEXT);
	$('#txtTycCorreoEECC').alphanum(INPUT_EMAIL);
	$('#txtTelefonoReenvio').numeric(INPUT_CELLPHONE);
	$('#diaPago').numeric(INPUT_ONLY_NUMBERS);
	$('#montoPrestamo').numeric(INPUT_ONLY_5_NUMBERS);
	$('#distrito-nopld').alphanum(INPUT_ONLY_TEXT);
//	$('#fechaNacimiento-nopld').alphanum(INPUT_DATE_OTHER);
	$('#txtTycCorreoDocs').alphanum(INPUT_EMAIL);

	// MR Cliente
	$('#miembrosDependientesMR').numeric(INPUT_ONLY_2_NUMBERS);
	$('#numGastosAlquilerMR').numeric(INPUT_ONLY_NUMBERS);
	$('#fechaNacimientoMR').alphanum(INPUT_DATE_OTHER);
	$('#txtDistritoMR').alphanum(INPUT_ONLY_TEXT);
	$('#numIngFijoMR').numeric(INPUT_ONLY_6_NUMBERS);
	$('#numIngVariableMR').numeric(INPUT_ONLY_6_NUMBERS);
	$('#numIngFijoMRNC').numeric(INPUT_ONLY_6_NUMBERS);
	$('#numIngVariableMRNC').numeric(INPUT_ONLY_6_NUMBERS);
	$('#numAntiguedadLaboralMR').numeric(INPUT_ONLY_2_NUMBERS);
	
	$("#miembrosDependientesDP").numeric(INPUT_ONLY_2_NUMBERS);
	$("#numAntiguedadMRNC").numeric(INPUT_ONLY_2_NUMBERS);
	$("#ingresosDP").numeric(INPUT_ONLY_6_NUMBERS);
	
	
	setTimeout(function(){$('.go-scroll-to').click();}, 2000 );
	
	
	$("#spanTextoReenvioSMS").html(MENSAJES_REENVIO.POR_ENVIAR);
	
	$('#spanListaDocumentosContratacion').on('click', function(){
		var obj = $('#divListaDocumentosContratacion');
		if($(obj).css('max-height')!=='0px'){
			$(obj).css('max-height','0px');
		}else{
			$(obj).css('max-height',$(obj)[0].scrollHeight+'px');
		}
		$('.flecha-expansion').toggleClass('flecha-expansion__expandido');
	});


	$('#label-cta-facil').on('click', function () {
			window.open('https://www.bbva.pe/content/dam/public-web/peru/local-tools/documents/productos/cuentas/detalle-cuenta-independencia.pdf', '_blank');
	});
	
	$(".tyc__digito-sms").on('input', function () {
		if (this.value.length > this.maxLength) {
			this.value = this.value.replace(/\D/g, '');
			var valsig = this.value.substring(1);
			this.value = this.value.slice(0, this.maxLength);
			var idBase = this.id.substring(0, 11);
			var idNumSig = Number(this.id.substring(11, 12)) + 1;
			var idSig = idBase + idNumSig;
			if (idNumSig <= 6) {
				if (valsig.length > 0) {
					$("#" + idSig).val(valsig);
					document.getElementById(idSig).focus();
					$("#" + idSig).trigger('input');
				} else {
					document.getElementById(idSig).focus();
				}
			}
		}
	});
	
	$('#montoPrestamo-mask').on('focus', function(){
		let valorMonto = $(this).data('monto');
	    setTimeout(() => {
			$('#montoPrestamo').val(valorMonto);
			$(this).addClass('hidden');
			$('#montoPrestamo').removeClass('hidden');
	    }, 100);
		$('#montoPrestamo').focus();
	    
	})
	
	$('#montoPrestamo').on('blur', function(){ 
		let valorMonto = $(this).val();
		let porcentaje = 0;
		let valorMinimo = parseInt($("#montoMinPrestamo").data('monto'));
		let valorMaximo = parseInt($("#montoMaxPrestamo").data('monto'));
		let valido = false;
		
		$(this).parent().removeClass('is-invalid');
		
		if(valorMonto == ""){
			valorMonto = redondearMultiplo100(valorMinimo, true);
			$('#montoPrestamo').val(valorMonto);
			$('#inputMontoPrestamo').addClass('is-focused');
			$('#inputMontoPrestamo').addClass('is-dirty');
			createPlazo(valorMonto);
			valido = true;
		}else if(!/^\d+$/.test(valorMonto)){
			porcentaje = 0;
			$("#id-ul-numCuotas").text("");$('#numCuotas').val("");
			$(this).parent().addClass('is-invalid');
			valido = false;
		}else if(valorMonto > valorMaximo){
			valorMonto = redondearMultiplo100(valorMaximo, false);
			$('#montoPrestamo').val(valorMonto);
			porcentaje = 100;
			valido = true;
			createPlazo(valorMonto);
		}else if(valorMonto < valorMinimo){
			valorMonto = redondearMultiplo100(valorMinimo, true);
			$('#montoPrestamo').val(valorMonto);
			createPlazo(valorMonto);
			valido = true;
		}else{
			valorMonto = redondearMultiplo100(valorMonto, true) > valorMaximo ? redondearMultiplo100(valorMonto, false) : redondearMultiplo100(valorMonto, true);
			$('#montoPrestamo').val(valorMonto);
			porcentaje = ((valorMonto- valorMinimo +1) / (valorMaximo - valorMinimo +1))*100;
			createPlazo(valorMonto);
			valido = true;
		}
		
		if(valido){
			$('#montoPrestamo-mask').val(formato_moneda('S/', 2, valorMonto));
			$('#montoPrestamo-mask').data('monto', valorMonto);
			$('#montoPrestamo').data('montomask', formato_moneda('S/', 2, valorMonto));
			$('#montoPrestamo').addClass('hidden');
			$('#montoPrestamo-mask').removeClass('hidden');
			simular();
		}
		
	}).on('change',function(){
		actualizarBotonesSimulador('reiniciado');
	});
	
	$('#diaPago').on('blur', function(){
		var diaPago = $(this).val();
		$(this).parent().removeClass('is-invalid');
		if(!/^\d+$/.test(diaPago) || diaPago>=32 || diaPago <= 0){
			$(this).parent().addClass('is-invalid');
		}
	}).on('change',function(){
		actualizarBotonesSimulador('reiniciado');
	});

	$('#numCuotas').on('change',function(){
		actualizarBotonesSimulador('reiniciado');
	});

	$('#indiceCuenta').on('change',function(){
		$('#select-cuenta').removeClass('is-invalid');
		actualizarBotonesSimulador('cta_ok');
		
		var valor = $('#montoPrestamo').val();
		if(valor >= MOUNT_MIN && valor <= MOUNT_MAX){
			simular();
		}
	});

	$('#numCuotas').on('change',function(){
		var valor = $('#montoPrestamo').val();
		if(valor >= MOUNT_MIN && valor <= MOUNT_MAX){
			simular();
		}
	});

	$('#diaPago').on('blur',function(){
		var valor = $('#montoPrestamo').val();
		if(valor >= MOUNT_MIN && valor <= MOUNT_MAX){
			simular();
		}
	});

	$('#paso-simulador').on('click', function(){
		var indiceCuenta = null;
		if(!V_CT_NUEVA){
			indiceCuenta = $('#indiceCuenta').data('val');
			setTimeout(() => {
				if(indiceCuenta===''){
					$('#select-cuenta').addClass('is-invalid');
					return false;
				}
			}, 500);
			
		}
		
		var datasimulacionfinal = {
				idSesion: ID_SESION,
				indiceCta: indiceCuenta,
				digitalData: getDigitalDataString()
		};
		var headers = {
				'track-lead': TRACKING,
				'track-front': ID_SESION
		    };
		$.ajax({
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			url: CONTEXT_AJAX + 'ajax/confirmar-simulacion',
			data: JSON.stringify(datasimulacionfinal),
			headers: headers,
			success: function (jsonObj) {
				if (jsonObj.error) {
					salida(jsonObj.error.errorCode);
				} else {
					$('.paso-simulador-gif').removeClass('hidden');
					var dataObj = jsonObj.data;
					if(dataObj.estado === '0' && PROFILE === "crossell"){
						if(V_CT_NUEVA === true){
							$('.img-cargar').addClass('hidden');
							transicionPasoxPaso($('#seccion-simulador'), $('#seccion-fatca'));
							if(EVALUACION === true){
								llenarDataLayer(TAG_EVENTO_APP_STEP_6_FATCA_CSC_SO, "", FLUJO_PLD);
							}else{
								llenarDataLayer(TAG_EVENTO_APP_STEP_4_FATCA_CSC_CO, "", FLUJO_PLD);
							}
						} else {
							//FIXME ___ definir tagueo para este paso
							mostrarPantallaTyc(dataObj, $('#seccion-simulador'));
							
							if(EVALUACION === true){
								llenarDataLayer(TAG_EVENTO_APP_STEP_6_TYC_CCC_SO, "", FLUJO_PLD);
							}else{
								llenarDataLayer(TAG_EVENTO_APP_STEP_4_TYC_CCC_CO, "", FLUJO_PLD);
							}
						}
					}else if(dataObj.estado==='0' && PROFILE === 'open market'){
						pasoActual++;
						if(OFERTA_MOTOR === 'con oferta motor' && EVALUACION === true){
							$('#paso-actual-datos-personales').html(pasoActual);
							$('#paso-actual-fatca').html(pasoActual);
							transicionPasoxPaso($('#seccion-simulador'), $('#seccion-fatca'));
							llenarDataLayer(TAG_EVENTO_APP_STEP_7_FATCA_NC_SO, "", FLUJO_PLD);
						}else {
							llenarCombosDatosDireccion(jsonObj.vars);
							$('#paso-actual-datos-personales').html(pasoActual);
							transicionPasoxPaso($('#seccion-simulador'), $('#seccion-direccion'));
							llenarDataLayer(TAG_EVENTO_APP_STEP_4_DATOS_1, "", FLUJO_PLD);
						}
					}
					$('.paso-simulador-gif').addClass('hidden');
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				errorHandler(jqXHR);
			}
		});

	});
		
	$('#paso-otros-segmentos').on('click', function () {

	    var validado = true;
	    var tipoDeIngreso = null;
	    var tipoDeVivienda = null;
	    var ingresosFijos = null;
	    var ingresosVariables = null;
	    var ingresosNetos = null;
	    var gastosDeAlquiler = null;
	    var gradoDeEstudio = null;
	    var sitLaboral = null;
	    var antiguedadDeEmpleo = null;
	    var codigoSexo = null;
	    var codigoECivil = null;
	    var edadI = null;
	    var codigoUbigeo = null;
	    var numFamilia = null;
	    var codigoProfesion = null;
	    var codigoActEco = null;
	    
	    if(!validacionFormOtrosSegmentosPersona()){
	    	validado = false;
	    }
	    
	    if(!validacionFormOtrosSegmentosVivienda()){
	    	validado = false;
	    }
	    
	    if(!validacionFormOtrosSegmentosLaboral()){
	    	validado = false;
	    }	    

	    ingresosFijos = $('#numIngFijo').length ? $('#numIngFijo').val().trim() : null;
	    ingresosVariables = $('#numIngVariable').length ? $('#numIngVariable').val().trim() : null;
	    tipoDeVivienda = $('#select-situacion-vivienda').val();
	    if (!$('.form-gastos-alquiler').hasClass("hidden")) {
	        gastosDeAlquiler = $('#numGastosAlquiler').val().trim();
	    }
	    if (!$('.form-input-antiguedad-laboral').hasClass("hidden")) {
	        antiguedadDeEmpleo = $('#numAntiguedad').length ? $('#numAntiguedad').val().trim() : null;
	    }

	    gradoDeEstudio = $('#select-estudios').val();
	    sitLaboral = $('#select-situacion-laboral').data('val');
	    codigoSexo = $('#select-sexo').val();
	    codigoECivil = $('#select-estado-civil').val();
	    edadI = $('#numEdad').length ? $('#numEdad').val().trim() : null;
	    numFamilia = $('#numMiembros').length ? $('#numMiembros').val().trim() : null;
	    codigoProfesion = $('#select-profesion').val();
	    codigoActEco = $('#select-actividad-economica').val();
	    codigoUbigeo = $('#txtDistrito').data('coddistrito');
	    
	    if (!validado) {
	        return;
	    }

	    $('#paso-otros-segmentos').prop('disabled', true);
		    var datosPersonalesAutoNuevo = {
		        idSesion: ID_SESION,
		        digitalData: getDigitalDataString(),
		        sexo: codigoSexo,
		        edad: edadI,
		        estadoCivil: codigoECivil,
		        nivelInstruccion: gradoDeEstudio,
		        profesion: codigoProfesion,
		        distritoResidencia: codigoUbigeo,
		        situacionVivienda: tipoDeVivienda,
		        miembrosDeFamilia: numFamilia,
		        situacionLaboral: sitLaboral,
		        actividadEconomica: codigoActEco,
		        tipoIngreso: tipoDeIngreso,      
		        ingresosNetos: ingresosNetos,
		        ingresosFijos: ingresosFijos,
		        ingresosVariables: ingresosVariables,
		        gastosAlquiler: gastosDeAlquiler,
		        antiguedadLaboral: antiguedadDeEmpleo
		    };
		    $('.img-cargar').removeClass('hidden');
		    var headers = {
		            'track-lead': TRACKING,
		            'track-front': ID_SESION
		            };
		    $.ajax({
		        type: 'POST',
		        contentType: 'application/json; charset=utf-8',
		        dataType: 'json',
		        url: CONTEXT_AJAX + 'ajax/guardar-datos-auto-nuevo',
		        data: JSON.stringify(datosPersonalesAutoNuevo),
		        headers: headers,
		        success: function (jsonObj) {
		        	$('.img-cargar').removeClass('hidden');
		            if (jsonObj.error) {
		                salida(jsonObj.error.errorCode);
		            } else {
		                finalizarProceso(flujoActual);
		            }
		            $('.img-cargar').addClass('hidden');
		        },
		        error: function (jqXHR, textStatus, errorThrown) {
		            errorHandler(jqXHR);
		            $('.img-cargar').addClass('hidden');
		        }
		    });
	    
	    });

	
	$('.pregunta-cuota').on('click', '.mdl-radio', function(){
		$($(this).parent()).removeClass('error');
		$($(this).parent().children(".mdl-radio")).removeClass('error');
	});
	
	$('#preguntas-candado').on('click', function(){
		$('#preguntas-candado').prop('disabled', true);
		var datapep = $('.espacio-pep').data('pep');
		var valido = true;
		var valorPep;
		var preguntas = [];
		if (datapep == '1') {
			valorPep = $('input[name="pregunta-pep"]:checked').val();
			if(typeof valorPep === "undefined"){
				$('.pregunta-candado-pld').addClass('error');
				$('#preguntas-candado').prop('disabled', false);
				valido = false;
			}
		}
		
		for(i=1; i<=3; i++){
			var respuesta;
			var pregunta = {respuesta : '', id : ''};
			if($('.pregunta-candado-'+i).data('tipo') == "SI_NO"){
				respuesta = $('input[name="candado-'+i+'"]:checked').val();
				if(typeof respuesta == "undefined"){
					$('.pregunta-candado-'+i+' label').addClass('error');
					$('#preguntas-candado').prop('disabled', false);
					valido = false;
				}else{
					pregunta.respuesta = respuesta;
					pregunta.id = $('input[name="candado-'+i+'"]:checked').data('id');
					preguntas[i-1] = pregunta;
				}
				
			}else{
				respuesta = $('#txtCandado-'+i).val();
				if(respuesta == ""){
					$('.pregunta-candado-'+i+' #input-txtCandado-'+i).addClass('is-invalid');
					$('#input-txtCandado-'+i+' .mdl-textfield__error').html("Por favor, contesta la pregunta para continuar");
					$('#preguntas-candado').prop('disabled', false);
					valido = false;
					$('.input-txtCandado-'+i+' .mdl-textfield__error').html("Por favor, contesta la pregunta para continuar");
				}else if($('#txtCandado-'+i).data('validacion') != null){
					var expreVal = new RegExp($('#txtCandado-'+i).data('validacion'));
					if(!expreVal.test(respuesta)){
						$('#preguntas-candado').prop('disabled', false);
						valido = false;
						if($('#txtCandado-'+i)[0].placeholder == "Ej. 01/01/2001"){
							$('.pregunta-candado-'+i+' #input-txtCandado-'+i).addClass('is-invalid');
							$('#input-txtCandado-'+i+' .mdl-textfield__error').html("Ingresa una fecha válida.");
						}else if($('#txtCandado-'+i)[0].placeholder == "Ej. 140101"){
							$('.pregunta-candado-'+i+' #input-txtCandado-'+i).addClass('is-invalid');
							$('#input-txtCandado-'+i+' .mdl-textfield__error').html("Ingresa el formato correcto.");
						}else{
							$('.pregunta-candado-'+i+' #input-txtCandado-'+i).addClass('is-invalid');
							$('#input-txtCandado-'+i+' .mdl-textfield__error').html("Por favor, contesta la pregunta para continuar");
						}
						
					}else{
						pregunta.respuesta = respuesta;
						pregunta.id = $('#txtCandado-'+i).data('id');
						preguntas[i-1] = pregunta;
					}
					
				}else{
					pregunta.respuesta = respuesta;
					pregunta.id = $('#txtCandado-'+i).data('id');
					preguntas[i-1] = pregunta;
				}
				
			}
		}		
		if(valido){
			obtenerDiaActual();
			var preguntas,valorPep;
			requestValidaPreguntaCandado(preguntas, valorPep);
		}else{
			console.error('no pasar');
		}
		
	});

	$('#chkDDJJMotorRiesgos').click(function(){
		validaCheck('chkDDJJMotorRiesgos');
	});
	
	$('#paso-motorRiesgos').on('click', function () {

		var validado = true;
	
		var codigoSexo = null;
		// var fechaNacimiento = null;
		var codigoECivil = null;
		var codigoUbigeo = null;
		var numFamilia = null;
		var tipoDeVivienda = null;
		var gastosDeAlquiler = null;
		var codigoProfesion = null;
		var sitLaboral = null;
		var codigoActEco = null;
		var antiguedadDeEmpleo = null;
		var ingresosFijos = null;
		var ingresosVariables = null;
		var centroLabores = null;

		if(PROFILE === 'crossell') {
			if (!validacionFormDatosPersonalesMotorRiesgos()) {
				validado = false;
			}
	
			if (!validacionFormDatosViviendaMotorRiesgos()) {
				validado = false;
			}
	
			if (!validacionFormDatosProfesionMotorRiesgos()) {
				validado = false;
			}

			codigoSexo = $('#select-sexoMR').val();
			codigoECivil = $('#select-estado-civilMR').val();
			codigoUbigeo =  $('#txtDistritoMR').data('ubigeohost');
			numFamilia = $('#miembrosDependientesMR').length ? $('#miembrosDependientesMR').val().trim() : null;
			tipoDeVivienda = $('#select-situacion-viviendaMR').val();
			
			if (!$('#inputGastosAlquilerMR').hasClass("hidden")) {
				gastosDeAlquiler = $('#numGastosAlquilerMR').val().trim();
			}
			
			codigoProfesion = $('#select-profesionMR').val();
			sitLaboral = $('#select-situacion-laboral-MR').val();
			codigoActEco = $('#select-actividad-economica-MR').val();
	
			antiguedadDeEmpleo = $('#numAntiguedadLaboralMR').length ? $('#numAntiguedadLaboralMR').val().trim() : null;
			
			ingresosFijos = $('#numIngFijoMR').length ? $('#numIngFijoMR').val().trim() : null;
			ingresosVariables = $('#numIngVariableMR').length ? $('#numIngVariableMR').val().trim() : null;
			ingresosNetos = parseInt(ingresosFijos) + parseInt(ingresosVariables);

			PROFESION = $('#select2-select-profesionMR-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-profesionMR-container').text().trim();
			MIEMBROS_DEPENDIENTES = $('#miembrosDependientesMR').val();
			SITUACION_VIVIENDA = $('#select2-select-situacion-viviendaMR-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-situacion-viviendaMR-container').text().trim();
			SITUACION_VIVIENDA_TAGUEO = $('#select2-select-situacion-viviendaMR-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-situacion-viviendaMR-container').text().trim();
			SITUACION_LABORAL = $('#select2-select-situacion-laboral-MR-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-situacion-laboral-MR-container').text().trim();
			ACTIVIDAD_ECONOMICA = $('#select2-select-actividad-economica-MR-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-actividad-economica-MR-container').text().trim();
			ANTIGUEDAD_LABORAL = $('#txtAntiguedadLaboralMR').val();

		} else {
			// caso PROFILE === 'open market'
			if(!validacionFormDatosPersonalesMotorRiesgosNoCliente()){
				validado = false;
			}

			codigoUbigeo =  DISTRITO ;
			numFamilia = MIEMBROS_DEPENDIENTES;
			tipoDeVivienda = SITUACION_VIVIENDA_NC;
			gastosDeAlquiler = GASTOS_ALQUILER;
			
			codigoProfesion = $('#select-profesionMRNC').val();
			sitLaboral = $('#select-situacion-laboral-MRNC').val();
			codigoActEco = $('#select-actividad-economica-MRNC').val();
	
			antiguedadDeEmpleo = $('#numAntiguedadMRNC').length ? $('#numAntiguedadMRNC').val().trim() : null;
			
			ingresosFijos = $('#numIngFijoMRNC').length ? $('#numIngFijoMRNC').val().trim() : null;
			ingresosVariables = $('#numIngVariableMRNC').length ? $('#numIngVariableMRNC').val().trim() : null;

			ingresosNetos = parseInt(ingresosFijos) + parseInt(ingresosVariables);
			centroLabores = $('#centroLaboresMRNC').length ? $('#centroLaboresMRNC').val().trim() : null;
						
			PROFESION =  $('#select2-select-profesionMRNC-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-profesionMRNC-container').text().trim();
			SITUACION_LABORAL = $('#select2-select-situacion-laboral-MRNC-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-situacion-laboral-MRNC-container').text().trim();
			ACTIVIDAD_ECONOMICA = $('#select2-select-actividad-economica-MRNC-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-actividad-economica-MRNC-container').text().trim();
			ANTIGUEDAD_LABORAL = $('#numAntiguedadMRNC').val().trim();
		}
	
		CUSTOM_FIELDS = resumenDatosEvaluacion (PROFESION, MIEMBROS_DEPENDIENTES, SITUACION_VIVIENDA_TAGUEO, SITUACION_LABORAL, ACTIVIDAD_ECONOMICA, ANTIGUEDAD_LABORAL);

		GANANCIAS = ingresosNetos;

		var ValidaCheckLPDMR = validaCheck('chkDDJJMotorRiesgos').campoValido;
	
		if(ValidaCheckLPDMR && validado){
			$('#paso-motorRiesgos').prop('disabled', true);
			var datosMotorRiesgo = {
				idSesion: ID_SESION,
				digitalData: getDigitalDataString(),
				dataEvaluacion : {
					codigoProfesion: codigoProfesion,
					codigoUbigeo: codigoUbigeo,
					tipoDeVivienda: tipoDeVivienda,
					numFamilia: numFamilia,
					gastosDeAlquiler: gastosDeAlquiler,
					sitLaboral: sitLaboral,
					codigoActEco:codigoActEco,
					antiguedadDeEmpleo: antiguedadDeEmpleo,
					codigoECivil: codigoECivil,
					codigoSexo: codigoSexo,
					ingresosFijos: ingresosFijos,
					ingresosVariables: ingresosVariables,
					centroLabores: centroLabores
				}
		
			};
		
			$('.img-cargar').removeClass('hidden');
			var headers = {
				'track-lead': TRACKING,
				'track-front': ID_SESION
			};
	
			if(PROFILE === "crossell"){
				llenarDataLayer(TAG_EVENTO_APP_STEP_4_EVALUACION_2_C, "", FLUJO_PLD);
			}else{
				llenarDataLayer(TAG_EVENTO_APP_STEP_5_EVALUACION_3_NC, "", FLUJO_PLD);
			}
			$('.img__evaluando').each(function(){
				$(this).attr('src',$(this).data('src'));
			})
			transicionPasoxPaso($('#seccion-motor-riesgos'), $('#seccion-evaluacion'), 500);
			$.ajax({
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				url: CONTEXT_AJAX + 'ajax/evaluacion-oferta',
				data: JSON.stringify(datosMotorRiesgo),
				headers: headers,
				success: function (jsonObj) {
					$('.img-cargar').removeClass('hidden');
					if (jsonObj.error) {
						localStorage.setItem('REGLA_RECHAZO', JSON.stringify(jsonObj.vars.REGLA_RECHAZO));
						salida(jsonObj.error.errorCode);
					} else if (jsonObj.data.sinOferta === true) {
						salida("009");PROCESS =  "sin oferta" ;
					}else {
						//Ir a Simulador
						if (jsonObj.data.fueraDeHorario === true){
							localStorage.setItem('dataSimulador', JSON.stringify(jsonObj.data));
							seteo(jsonObj.data);
							localStorage.setItem('noVerificado', true);
							simularNoVerificadoHorario('horario-diferenciado')							
						} else {
							var ofertas = jsonObj.data.ofertas;
							MOUNT_MIN = jsonObj.data.montoMinimo;
							MOUNT_MAX = jsonObj.data.montoMaximo;
							OFERTA_MOTOR = (ofertas == null || ofertas == undefined ||  ofertas.length<= 0)  ? 'sin oferta motor'  : 'con oferta motor';
							localStorage.setItem('dataSimulador', JSON.stringify(jsonObj.data));
							seteo(jsonObj.data);
							pasoActual++;
							$('#paso-actual-simulador-orden').html(pasoActual);
		
							
							setTimeout(() => {
								transicionPasoxPaso($('#seccion-evaluacion'), $('#seccion-simulador'));
							}, 200);
							
		
							if(PROFILE === "crossell"){
								llenarDataLayer(TAG_EVENTO_APP_STEP_5_SIMULADOR_C_SO, "", FLUJO_PLD);
							}else{
								llenarDataLayer(TAG_EVENTO_APP_STEP_6_SIMULADOR_NC, "", FLUJO_PLD);
							}
		
							actualizarBotonesSimulador('reiniciado');
							V_CT_NUEVA = jsonObj.data.nuevaC;
							if(V_CT_NUEVA){
								//CUENTA = SIN_CUENTA;
								$('#divDisclaimerCuentaFacil').removeClass('hidden');
								actualizarBotonesSimulador('cta_ok');
								simular();
							}else if (!V_CT_NUEVA){
								//CUENTA = CON_CUENTA;
								mostrarListaCuentas(jsonObj.data.listaCuentas);
								simular();
							} else {
								//CUENTA = "";
							}
						}
					}
					$('.img-cargar').addClass('hidden');
				},
				error: function (jqXHR, textStatus, errorThrown) {
					errorHandler(jqXHR);
					$('.img-cargar').addClass('hidden');
				}
			});
		}
	
	});	
	
	$('.espacio-candado').on('click', '.mdl-radio', function(){
		$($(this).parent()).removeClass('error');
		$($(this).parent().children(".mdl-radio")).removeClass('error');
	});
	
	$('#btnVerCronogramar-texto').on('click', function(){
		
		if (top !== window) {
			var topModalTDP = $("#seccion-simulador").offset().top;
			$('#cronograma-simulador').css("top", topModalTDP + 100);
		}
		
		$('#cronograma-simulador').modal({
	        show: 'true',
	        backdrop: 'static',
	        keyboard: false,
	        escapeClose: false,
	        clickClose: false,
	        showClose: false 
	    });
	});

	$('.select2__situacionVivienda').change(function(){
		var value = $(this).val();
		if (value === "RENTED" || value === "3") {
			$('.input__situacionVivienda').removeClass('hidden');
		} else {
			$('.input__situacionVivienda').addClass('hidden');
		}
	});
	
	$("#gastosAlquilerDP").blur(function () {
		MascaraMoneda('#numAlquilerDC', '#gastosAlquilerDP');
	}).focus(function () {
		$("#gastosAlquilerDP").val($("#numAlquilerDC").val());
	});
	
	$("#ingresosDP").blur(function () {
		MascaraMoneda('#numIngresosDP', '#ingresosDP');
	}).focus(function () {
		$("#ingresosDP").val($("#numIngresosDP").val());
	});
	 
	$('#btnDireccion').on('click', function(){
		var direccion = {
				tipoVia: $('#select-tipoViaDP').val(),
				tipoZonaUrbana: $('#select-zonaDP').val(), 
				nombreVia: $('#nombreTipoViaDP').val().length ? $('#nombreTipoViaDP').val() : '' ,
				zonaUrbana: $('#nombreZonaDP').val().length ? $('#nombreZonaDP').val() : '' , 
				manzana: $('#manzanaDP').val().length ? $('#manzanaDP').val() : '' , 
				lote: $('#loteDP').val().length ? $('#loteDP').val() : '', 
				numeroExterior: $('#nroExteriorDP').val().length ? $('#nroExteriorDP').val() : '', 
				numeroInterior: $('#inputDptoDP').val().length ? $('#inputDptoDP').val() : '', 
				distrito: $('#select-distritoDP').val().slice(4,6),
				departamento: $('#select-distritoDP').val().slice(0,2) ,
				provincia: $('#select-distritoDP').val().slice(2,4),
				referencia: $('#referenciaDP').val().length ? $('#referenciaDP').val() : '' ,
				tipoVivienda: $('#select-situacionViviviendaDP').val() ,
				digitalData: getDigitalDataString(),
				idSesion: ID_SESION,
				situacionViviendaMotor: SITUACION_VIVIENDA_MOTOR
		};
		SITUACION_VIVIENDA_TAGUEO = $("#select2-select-situacionViviviendaDP-container").text().trim();
		if(EVALUACION === true){
			MIEMBROS_DEPENDIENTES = $('#miembrosDependientesDP').val().trim();
			CUSTOM_FIELDS =  resumenDatosDireccionEvaluacion(MIEMBROS_DEPENDIENTES, SITUACION_VIVIENDA_TAGUEO);
		} else {
			CUSTOM_FIELDS =  resumenDatosDireccion(SITUACION_VIVIENDA_TAGUEO);
		}
			
		var headers = {
				'track-lead': TRACKING,
				'track-front': ID_SESION
			};

		SITUACION_VIVIENDA_NC = $('#select-situacionViviviendaDP').val();
		//SITUACION_VIVIENDA_TAGUEO = $('#select2-select-select-situacionViviviendaDP-container').val();
		DISTRITO = $('#select-distritoDP').val();

		if (!$('#inputGastosAlquilerDP').hasClass("hidden")) {
			GASTOS_ALQUILER = $('#numAlquilerDC').val();
		}

		if (!$('#col-miembros-dependientes').hasClass("hidden")) {
			MIEMBROS_DEPENDIENTES = $('#miembrosDependientesDP').val();
		}

		var formularioDireccionValido = true;

		if (!validarFormularioDireccion()) {
			formularioDireccionValido = false;
		}

		if (!validarFormularioOtrosDatosDireccion()) {
			formularioDireccionValido = false;
		}

		if (!formularioDireccionValido) {
			return;
		}

		$('#btnDireccion').prop('disabled', true);
		$.ajax({
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			url: CONTEXT_AJAX + 'ajax/validarDireccion',
			data: JSON.stringify(direccion),
			headers: headers,
			success: function (jsonObj) {
				if (jsonObj.error) {
					salida(jsonObj.error.errorCode);
				} else {
					$('.img-cargar').removeClass('hidden');
					var dataObj = jsonObj.data;
					if(dataObj.estado === "1"){
						if(PROFILE === 'open market' ) {
							if(PROCESS === 'sin oferta') {
								pasoActual++;
								$('#paso-actual-ocupacion').html(pasoActual);
								$('.datosRiesgo-Cliente').addClass('hidden');
								$('.datosRiesgo-NoCliente').removeClass('hidden');
								transicionPasoxPaso($('#seccion-direccion'), $('#seccion-motor-riesgos'));
								llenarDataLayer(TAG_EVENTO_APP_STEP_4_EVALUACION_2_NC, "", FLUJO_PLD);
							}else if(PROCESS === 'con oferta')  {
								pasoActual++;
								$('#paso-actual-ocupacion').html(pasoActual);
								$('.datosRiesgo-NoCliente').addClass('hidden');
								$('.datosRiesgo-Cliente').removeClass('hidden');
								transicionPasoxPaso($('#seccion-direccion'), $('#seccion-ocupacion'));
								llenarDataLayer(TAG_EVENTO_APP_STEP_5_DATOS_2, "", FLUJO_PLD);
							}else {
								console.info('caso no existente');
							}
						}else{
							console.info('caso no existente');
						}
					}
					$('.img-cargar').addClass('hidden');
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				errorHandler(jqXHR);
				$('.img-cargar').addClass('hidden');
			}
		});
	});
	
	$('#datosOcupacion').on('click', function(){
		var validacionCheckTDP = validaCheck('chkDDJJDatosPersonales').campoValido;
		var profesion = $("#select-profesionDP").val();
		var centroLabores = $('#centroLaboresDP').val().trim();
		var ingresosMensualesNetos = $('#numIngresosDP').val().trim();


		if(validacionOcupacion() && validacionCheckTDP){
			var datosOcupacion = {
					idSesion: ID_SESION,
					digitalData: getDigitalDataString(),
					codigoProfesion: profesion,
					centroLabores: centroLabores,
					ingresosNetos: ingresosMensualesNetos
			}
			var headers = {
					'track-lead': TRACKING,
					'track-front': ID_SESION
				};
			
			PROFESION =  $('#select2-select-profesionDP-container').text().trim() === 'Seleccionar' ? '' : $('#select2-select-profesionDP-container').text().trim();
			CENTRO_LABORES = $('#centroLaboresDP').val().trim();
			GANANCIAS = $('#numIngresosDP').val().trim();

			CUSTOM_FIELDS = resumenDatosPersonales (PROFESION, SITUACION_VIVIENDA_TAGUEO);

			$.ajax({
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				url: CONTEXT_AJAX + 'ajax/guardarDatosOcupacion',
				data: JSON.stringify(datosOcupacion),
				headers: headers,
				success: function (jsonObj) {
					if (jsonObj.error) {
						salida(jsonObj.error.errorCode);
					} else {
						$('.img-cargar').removeClass('hidden');
						var dataObj = jsonObj.data;
						transicionPasoxPaso($('#seccion-ocupacion'), $('#seccion-fatca'));
						llenarDataLayer(TAG_EVENTO_APP_STEP_6_FATCA_NC_CO, "", FLUJO_PLD);
						$('.img-cargar').addClass('hidden');
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					errorHandler(jqXHR);
					$('.img-cargar').addClass('hidden');
				}
			});
			
			pasoActual++;
			$('#paso-actual-fatca').html(pasoActual);
			
		}
		
	});
	
	function validacionOcupacion(){
		let resp = false;
	    var ocupacion = encenderValidacionDropDown('#select-profesionDP',MENSAJE_ERROR.PROFESION_VACIO);
		var centroLabores = encenderValidarCentroLabores('#centroLaboresDP');
		var datoIngresos = encenderValidarIngresos('#ingresosDP');
			
		if(ocupacion.campoValido && centroLabores.campoValido && datoIngresos.campoValido){
			resp = true;
		}else{
			resp = false;
		}
		return resp;
	}

	for (var i = 1; i <= 6; i++) {
		if (i < 6) {
			$('#digiSMS-0' + i).keyup(function () {
				var idBase = this.id.substring(0, 9);
				var idNumSig = Number(this.id.substring(9, 10)) + 1;
				var idSig = idBase + idNumSig;
				if (this.value.length > 0) {
					$('#' + idSig).focus();
				}
			})
		}
		$('#digiSMS-0' + i).focus(function () {

			$('#' + this.id).select();
		});
	}
	for (var i = 1; i <= 6; i++) {
		$('#digiSMS-0' + i).on('keypress', function (e) {
			e.preventDefault();
			$(this).val(String.fromCharCode(e.which));
//			String.fromCharCode(e.which);
		});
	}
	
	function notificarEnviado(ocultarOpcion){
		$("#spanTextoReenvioSMS").fadeOut(function(){
			$("#spanTextoReenvioSMS").html(MENSAJES_REENVIO.ENVIADO).fadeIn();
		});

		setTimeout(function () {
			if (ocultarOpcion) {
			} else {
				$("#spanTextoReenvioSMS").fadeOut(function () {
					$("#spanTextoReenvioSMS").html(MENSAJES_REENVIO.POR_ENVIAR).fadeIn();
					$("#btnSolicitarReenvioSMS").fadeIn();
				});
			}
		}, 10000);
	}

	/*-- Slider Monto e input Monto --*/
	$('#sliderIngresos').on('input', function () {
		var valSliderIngreso = $(this).val();
		$('#numIngresoSlider').val(valSliderIngreso);
		$('#inputIngresoSlider').addClass('is-focused');
		$('#txtIngresoSlider').val('S/ ' + montoMiles(valSliderIngreso));

	});

	$('#numIngresoSlider').on('change', function () {
		var ingresoInput = $(this).val();
		var monto = parseInt(ingresoInput);
		if (monto > 50000) {
			ingresoInput = 50000;
			$('#numIngresoSlider').val(ingresoInput);
		}
		if (monto < 850) {
			ingresoInput = 850;
		}

		if ((monto >= 850 && monto <= 50000)) {
			$('#inputIngresoSlider').removeClass('is-invalid');
			$('#numIngresoSlider').val(monto);
			$('#txtIngresoSlider').val('S/ ' + montoMiles(monto));
			document.getElementById('sliderIngresos').MaterialSlider.change(monto);
		} else {
			if (ingresoInput == 850 || ingresoInput == 50000) {
				$('#inputIngresoSlider').removeClass('is-invalid');
				$('#numIngresoSlider').val(ingresoInput);
				$('#txtIngresoSlider').val('S/ ' + montoMiles(ingresoInput));
				document.getElementById('sliderIngresos').MaterialSlider.change(ingresoInput);
			}
		}
		$('#txtIngresoSlider').removeClass('hidden');
		$('#numIngresoSlider').addClass('hidden');

	});



	$('#txtIngresoSlider').on('change', function () {
		var ingresoInput = $(this).val();
		var monto = parseInt(ingresoInput);
		if (monto > 50000) {
			ingresoInput = 50000;
			$('#numIngresoSlider').val(ingresoInput);
		}
		if (monto < 850) {
			ingresoInput = 850;
		}

		if ((monto >= 850 && monto <= 50000)) {
			$('#inputIngresoSlider').removeClass('is-invalid');
			$('#numIngresoSlider').val(monto);
			$('#txtIngresoSlider').val('S/ ' + montoMiles(monto));
			document.getElementById('sliderIngresos').MaterialSlider.change(monto);
		} else {
			if (ingresoInput == 850 || ingresoInput == 50000) {
				$('#inputIngresoSlider').removeClass('is-invalid');
				$('#numIngresoSlider').val(ingresoInput);
				$('#txtIngresoSlider').val('S/ ' + montoMiles(ingresoInput));
				document.getElementById('sliderIngresos').MaterialSlider.change(ingresoInput);
			}
		}

	});

	$('#numIngresoSlider').on('blur', function () {
		$('#inputIngresoSlider').addClass('is-focused');
		$('#txtIngresoSlider').removeClass('hidden');
		$('#numIngresoSlider').addClass('hidden');
	});

	$('#numIngresoSlider').on('focus', function () {
		var divPadre = $(this).parent();
		divPadre.addClass('is-focused');
	});

	$('#txtIngresoSlider').on('blur', function () {
		$('#inputIngresoSlider').addClass('is-focused');
	});

	$('#txtIngresoSlider').on('click', function () {
		$('#inputIngresoSlider').addClass('is-focused');
		$('#numIngresoSlider').removeClass('hidden');
		$('#txtIngresoSlider').addClass('hidden');
		setTimeout(function () { $('#numIngresoSlider').focus(); }, 1);


	});
	/*-- FIN Slider Monto e input Monto --*/

	
	/*-- Funcionalidad Mascara inputs --*/
	function mascaraInputs(idElement, idElementMascara, mascara){
		$(idElement).on('change', function () {
			var valor = $(this).val();
			var cambio = valor;
			if (valor != '' && valor >= 1) {
				cambio = valor + ' ' + mascara;
			} else {
				cambio = '';
				$(this).val('');
			}
			$(idElementMascara).val(cambio);
		});
	}


	$('#numAntiguedadLaboralMR').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor >= 1) {
			cambio = valor + ' años';
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtAntiguedadLaboralMR').val(cambio);
	});

	$('#numEdad').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor >= 18) {
			cambio = valor + ' años';
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtEdad').val(cambio);
	});

	$('#numMiembros').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '') {
			if (valor == 1) {
				cambio = valor + ' miembro de familia';
			} else {
				cambio = valor + ' miembros de familia';
			}
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtMiembros').val(cambio);
	});
	
	$('#numAntiguedad').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			if (valor == 1) {
				cambio = valor + ' año';
			} else {
				cambio = valor + ' años';
			}
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtAntiguedad').val(cambio);
	});

	$('#numAntiguedadMRNC').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			if (valor == 1) {
				cambio = valor + ' año';
			} else {
				cambio = valor + ' años';
			}
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtAntiguedadMRNC').val(cambio);
	});

	$('#numAntiguedadAlto').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			if (valor == 1) {
				cambio = valor + ' año';
			} else {
				cambio = valor + ' años';
			}
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtAntiguedadAlto').val(cambio);
	});
	
	$('#numGastosAlquiler').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			cambio = 'S/ ' + montoMiles(valor);
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtGastosAlquiler').val(cambio);
	});

	$('#numGastosAlquilerMR').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			cambio = 'S/ ' + montoMiles(valor);
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtGastosAlquilerMR').val(cambio);
	});

	$('#numIngFijo').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			cambio = 'S/ ' + montoMiles(valor);
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtIngFijo').val(cambio);
	});

	$('#numIngFijoMR').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			cambio = 'S/ ' + montoMiles(valor);
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtIngFijoMR').val(cambio);
	});

	$('#numIngFijoMRNC').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			cambio = 'S/ ' + montoMiles(valor);
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtIngFijoMRNC').val(cambio);
	});

	$('#numIngVariable').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			cambio = 'S/ ' + montoMiles(valor);
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtIngVariable').val(cambio);
	});

	$('#numIngVariableMR').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			cambio = 'S/ ' + montoMiles(valor);
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtIngVariableMR').val(cambio);
	});

	$('#numIngVariableMRNC').on('change', function () {
		var valor = $(this).val();
		var cambio = valor;
		if (valor != '' && valor != 0) {
			cambio = 'S/ ' + montoMiles(valor);
		} else {
			cambio = '';
			$(this).val('');
		}
		$('#txtIngVariableMRNC').val(cambio);
	});

	/*-- FIN Funcionalidad Mascara inputs --*/

	$('#chkDDJJFatca').click(function(){
		validaCheck('chkDDJJFatca');
	});
	$('input:radio[name=radFatca]').click(function(){
		validaFatcaRadFatca();
	});
	
	$('#btnEnviarSms').on('click', function() {
		var val1 = validaCelular('txtTelefonoReenvio').campoValido;
		$('#divMsjReenviado').addClass('hidden');
		
		if(val1){
			$('#btnEnviarSms').prop('disabled', true);
			var dataAjax = {
				idSesion: ID_SESION,
				digitalData: getDigitalDataString(),
				celular: $('#txtTelefonoReenvio').val()
			};
			$('.img-cargar').removeClass('hidden');
			var headers = {
					'track-lead': TRACKING,
					'track-front': ID_SESION
			    };
			$.ajax({
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				url: CONTEXT_AJAX + 'ajax/reenviar-sms',
				data: JSON.stringify(dataAjax),
				headers: headers,
				success: function(jsonObj) {
					if(jsonObj.error){
						$('btnEnviarSms').prop('disabled', false);
						salida(jsonObj.error.errorCode);
					}else{
						var dataObj = jsonObj.data;
						
						if(dataObj.codValidacion==="0" || dataObj.codValidacion==='0311'){
							$('#divMsjReenviado').removeClass('hidden');
							if(dataObj.codValidacion==='0311'){
								$('#btnEnviarSms').hide();
								$('#divCajaNumeroTelefono').hide();
								$('#txtTelefonoReenvio').prop('disabled', true);
							}else{
								setTimeout(function(){
									$('#btnEnviarSms').prop('disabled', false);
								}, 10000);
							}
						}else{
							salida(dataObj.codValidacion);
						}
					}
					$('.img-cargar').addClass('hidden');
				},
				error: function(jqXHR, textStatus, errorThrown) {
					errorHandler(jqXHR);
					$('.img-cargar').addClass('hidden');
				}
			});
		}
	});
	
	$('#paso-fatca').on('click', function() {
		var rpta = $('input:radio[name=radFatca]:checked').val();
		var val1 = validaFatcaRadFatca();
		var val2 = validaCheck('chkDDJJFatca').campoValido;
		
		if(val1 && val2){
			$('#paso-fatca').prop('disabled', true);
			var dataAjax = {
				idSesion: ID_SESION,
				digitalData: getDigitalDataString(),
				rpta: rpta
			};
			var headers = {
					'track-lead': TRACKING,
					'track-front': ID_SESION
			    };
			$('.img-cargar').removeClass('hidden');
			$.ajax({
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				url: CONTEXT_AJAX + 'ajax/fatca',
				data: JSON.stringify(dataAjax),
				headers: headers,
				success: function(jsonObj) {
					$('.img-cargar').removeClass('hidden');
					if(jsonObj.error){
						$('#paso-fatca').prop('disabled', false);
						salida(jsonObj.error.errorCode);
					} else {
						var dataObj = jsonObj.data;		
						if(dataObj.estado==="0"){
							if(PROFILE === "crossell"){
								if( EVALUACION === true ){
									llenarDataLayer(TAG_EVENTO_APP_STEP_7_TYC_CSC_SO, "", FLUJO_PLD);
								}else{
									llenarDataLayer(TAG_EVENTO_APP_STEP_5_TYC_CSC_CO, "", FLUJO_PLD);
								}
							}else{
								if( EVALUACION === true ){
									llenarDataLayer(TAG_EVENTO_APP_STEP_8_TYC_NC_SO, "", FLUJO_PLD);
								}else{
									llenarDataLayer(TAG_EVENTO_APP_STEP_7_TYC_NC_CO, "", FLUJO_PLD);
								}
							}	

							mostrarPantallaTyc(dataObj, $('#seccion-fatca'));
						}else{
							$('#paso-fatca').prop('disabled', false);
							salida("0308");
						}
					}
					$('.img-cargar').addClass('hidden');
				},
				error: function (jqXHR, textStatus, errorThrown) {
					errorHandler(jqXHR);
					$('.img-cargar').addClass('hidden');
				}
			});
		}


	});
	
	var mostrarPantallaTyc = function(dataObj, origen){
		$('#txtTycCorreoEECC').val(dataObj.inputTyc.correoEECC);
		$('#txtTycCorreoEECC').parent().addClass('is-dirty');
		$('#txtTycCorreoDocs').val(dataObj.correoDocs);
		$('#txtTycCorreoDocs').parent().addClass('is-dirty');
		$('#txtTelefonoReenvio').val(dataObj.inputTyc.celular);
		var objListaDocs = $('#divListaDocumentosContratacion');
		var plantilla = '<div class="col-xs-12">'+
						'<span class="tyc__documentos__item" onclick="mostrarDoc(\'%URL%\');">%DESC%</span>'+
						'</div>';
		dataObj.inputTyc.documentos.forEach(function(kvp){
			var html = plantilla;
			html = html.replace(/%URL%/, kvp.value);
			html = html.replace(/%DESC%/, kvp.key);
			objListaDocs.append(html);
		});
		transicionPasoxPaso(origen, $('#seccion-tyc'));
		setTimeout(function(){ resizeAllAside(); }, 100);
	};
	
	$('#chkTyc').click(function(){
		validaCheck('chkTyc');
	});
	
	$('.tyc__digito-sms').on('change', function(){
		$('#divErrorClaveSms').addClass('hidden');
		$('.tyc__digito-sms').removeClass('text-error-input');
	});
	
	$('#paso-tyc').on('click', function() {
		var rpta = $('input:radio[name=radFatca]:checked').val();
		var val1 = encenderValidacionTycCorreoEECC().campoValido;
		var val3 = validaCheck('chkTyc').campoValido;
		var val4 = validaTycCodigoSms();
		
		if(val1 && val3 && val4){
			$('#paso-tyc').prop('disabled', true);
			var dataAjax = {
				idSesion: ID_SESION,
				digitalData: getDigitalDataString(),
				correoEECC: $('#txtTycCorreoEECC').val(),
				codigoContratacion: $('#sms-digito-1').val()+$('#sms-digito-2').val()+
						$('#sms-digito-3').val()+$('#sms-digito-4').val()+
						$('#sms-digito-5').val()+$('#sms-digito-6').val()
			};
			$('.img-cargar').removeClass('hidden');
			var headers = {
					'track-lead': TRACKING,
					'track-front': ID_SESION
			    };
			$.ajax({
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				url: CONTEXT_AJAX + 'ajax/confirmar',
				data: JSON.stringify(dataAjax),
				headers: headers,
				success: function(jsonObj) {
					$('.img-cargar').removeClass('hidden');
					if(jsonObj.error){
						salida(jsonObj.error.errorCode);
					} else if(jsonObj.data.estado==='0'){
						finalizarProceso('final-contratacion')
					} else if(jsonObj.data.estado==='0309') {
						$('#divErrorClaveSms').removeClass('hidden');
						$('.tyc__digito-sms').addClass('text-error-input');
					} else if(jsonObj.data.estado==='0397') {
					} else{
						salida(jsonObj.data.estado);
					}
					$('#paso-tyc').prop('disabled', false);
					$('.img-cargar').addClass('hidden');
				},
				error: function(jqXHR, textStatus, errorThrown) {
					errorHandler(jqXHR);
					$('#paso-tyc').prop('disabled', false);
					$('.img-cargar').addClass('hidden');
				}
			});
		}
		
			
	});
		
	//sugerirDistritos($('#txtDistrito'));

}); //Fin del ready


/* Nueva Validacion */

/* Formulario Inicial */


function validaTycCodigoSms(){
	$('#divErrorClaveSms').addClass('hidden');
	var sms = $('#sms-digito-1').val()+$('#sms-digito-2').val()+
				$('#sms-digito-3').val()+$('#sms-digito-4').val()+
				$('#sms-digito-5').val()+$('#sms-digito-6').val();
	if(sms.length==6){
		$('.tyc__digito-sms').removeClass('text-error-input');
		return true;
	}else{
		$('.tyc__digito-sms').addClass('text-error-input');
		return false;
	}
}

function encenderValidacionTycCorreoEECC() {
	var divElemento = $('#txtTycCorreoEECC');
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaEmail('txtTycCorreoEECC');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}
	
	return validoObj;
}

function encenderValidacionTycCorreoDocs() {
	var divElemento = $('#txtTycCorreoDocs');
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaEmail('txtTycCorreoDocs');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}
	
	return validoObj;
}

function validaSMS() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	for (i = 1; i <= 6; i++) {
		var divElemento = $('#digiSMS-0' + i);
		var valueElemento = divElemento.val();
		var evaluador = /^[0-9]+$/;
		if (evaluador.test(valueElemento)) {
			if (valueElemento.length === 1) {
				respuesta.campoValido = true;
				respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
			} else {
				respuesta.campoValido = false;
				respuesta.mensaje = MENSAJE_ERROR.DIGITO_SMS_VACIO;
				break;
			}
		} else {
			respuesta.campoValido = false;
			respuesta.mensaje = MENSAJE_ERROR.DIGITO_SMS_INVALIDO;
			break;
		}
	}

	return respuesta;

}

function encenderValidacionTycTelefonoReenvio() {
	var divElemento = $('#txtTelefonoReenvio');
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaCelular('txtTelefonoReenvio');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}
}

function validaMontoSlider() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#numIngresoSlider');
	var valueElemento = divElemento.val();
	var evaluador = /^[0-9]+$/;

	if (valueElemento != '' && valueElemento != 0) {
		if (evaluador.test(valueElemento) && (valueElemento > 850 && valueElemento <= 50000)) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.MONTO_NO_VALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.MONTO_VACIO;
	}

	return respuesta;
}

function encenderValidacionMontoSlider() {
	var divElemento = $('#numIngresoSlider');
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaMontoSlider();

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function encenderValidacionTipoIngresoSlider() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#tipoIngresoSlider');
	var divPadre = divElemento.parent();
	divPadre.removeClass('is-invalid');
	var valueElemento = divElemento.data('val');
	if (valueElemento != '-1') {
		respuesta.campoValido = true;
		respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
	} else {
		respuesta.mensaje = MENSAJE_ERROR.TIPO_INGRESOS_VACIO;
		divPadre.addClass('is-invalid');
	}

	return respuesta;
}

function encenderValidacionTipoEmpleoSlider() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#tipoEmpleoSlider');
	var divPadre = divElemento.parent();
	divPadre.removeClass('is-invalid');
	var valueElemento = divElemento.data('val');
	if (valueElemento != '-1') {
		respuesta.campoValido = true;
		respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
	} else {
		respuesta.mensaje = MENSAJE_ERROR.TIPO_EMPLEO_VACIO;
		divPadre.addClass('is-invalid');
	}

	return respuesta;
}

function encenderValidacionNivelInstruccionSlider() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#instruccionSlider');
	var divPadre = divElemento.parent();
	divPadre.removeClass('is-invalid');
	var valueElemento = divElemento.data('val');
	if (valueElemento != '-1') {
		respuesta.campoValido = true;
		respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
	} else {
		respuesta.mensaje = MENSAJE_ERROR.TIPO_INSTRUCION_VACIO;
		divPadre.addClass('is-invalid');
	}

	return respuesta;
}

function encenderValidacionDropDown(elemento, mensajeError) {
	var respuesta = {
		campoValido: false,
	};
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divError = divElemento.parent()[0].querySelector('.mdl-textfield__error')
	divPadre.removeClass('is-invalid');
	divError.innerHTML = '';
	var valueElemento = divElemento.val();
	if (valueElemento != '') {
		respuesta.campoValido = true;
		divError.innerHTML = '';
	} else {
		divError.innerHTML = mensajeError;
		divPadre.addClass('is-invalid');
	}

	return respuesta;
}

function validaMiembros(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var valueElemento = divElemento.val();
	var evaluador = /^[0-9]+$/;

	if (valueElemento != '') {
		if (evaluador.test(valueElemento)) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.MIEMBROS_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.MIEMBROS_VACIO;
	}

	return respuesta;
}

function encenderValidacionMiembros(elemento) {
	var divElemento = $(elemento);
	var divPadre = divElemento.parent().parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var validoObj = validaMiembros(elemento);
	
	var divCheck = divPadre.find('img');
	divCheck.addClass('hidden');
	
	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	} else {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function encenderValidacionSituacionVivienda(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	divPadre.removeClass('is-invalid');
	var valueElemento = divElemento.data('val');
	if (valueElemento != '-1') {
		respuesta.campoValido = true;
		respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
	} else {
		respuesta.mensaje = MENSAJE_ERROR.SIT_VIVIENDA_VACIO;
		divPadre.addClass('is-invalid');
	}

	return respuesta;
}

function encenderValidacionSituacionLaboral(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	divPadre.removeClass('is-invalid');
	var valueElemento = divElemento.data('val');
	if (valueElemento != '-1') {
		respuesta.campoValido = true;
		respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
	} else {
		respuesta.mensaje = MENSAJE_ERROR.SIT_LABORAL_VACIO;
		divPadre.addClass('is-invalid');
	}

	return respuesta;
}

function validaAntiguedad(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var valueElemento = divElemento.val();
	var evaluador = /^[0-9]+$/;

	if (valueElemento != '' && valueElemento != 0) {
		if (evaluador.test(valueElemento)) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.ANTIGUEDAD_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.ANTIGUEDAD_VACIO;
	}

	return respuesta;
}

function validaAntiguedadAlto() {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $('#numAntiguedadAlto');
	var valueElemento = divElemento.val();
	var evaluador = /^[0-9]+$/;

	if (valueElemento != '' && valueElemento != 0) {
		if (evaluador.test(valueElemento)) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.ANTIGUEDAD_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.ANTIGUEDAD_VACIO;
	}

	return respuesta;
}

function encenderValidacionAntiguedad(elemento) {
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaAntiguedad(elemento);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function encenderValidacionAntiguedadAlto() {
	var divElemento = $('#numAntiguedadAlto');
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaAntiguedadAlto();

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function validaIngresoFijo(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var valueElemento = divElemento.val();
	var evaluador = /^[0-9]+$/;

	if (valueElemento != '' && valueElemento != 0) {
		if (evaluador.test(valueElemento) && parseInt(valueElemento) >= parseInt(SUELDO_MIN_ACTUAL)) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.INGRESO_FIJO_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.INGRESO_FIJO_VACIO;
	}

	return respuesta;
}

function validaIngresoVariable(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var valueElemento = divElemento.val();
	var evaluador = /^[0-9]+$/;

	if (valueElemento != '' && valueElemento != 0) {
		if (evaluador.test(valueElemento)) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.INGRESO_VARIABLE_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.INGRESO_VARIABLE_VACIO;
	}

	return respuesta;
}

function encenderValidacionIngresoVariable(elemento) {
	var divElemento = $(elemento);
	var divPadre = divElemento.parent().parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var validoObj = validaIngresoVariable(elemento);
	var divCheck = divPadre.find('img');
	divCheck.addClass('hidden');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	} else {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function encenderValidacionIngresoFijo(elemento) {
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	var validoObj = validaIngresoFijo(elemento);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function validaGastosAlquiler(elemento) {
	var respuesta = {
		campoValido: false,
		mensaje: ''
	};
	var divElemento = $(elemento);
	var valueElemento = divElemento.val();
	var evaluador = /^[0-9]+$/;

	if (valueElemento != '' && valueElemento != 0) {
		if (evaluador.test(valueElemento)) {
			respuesta.campoValido = true;
			respuesta.mensaje = MENSAJE_NO_ERROR.SUCCESS;
		} else {
			respuesta.mensaje = MENSAJE_ERROR.GASTOS_ALQUILER_INVALIDO;
		}
	} else {
		respuesta.mensaje = MENSAJE_ERROR.GASTOS_ALQUILER_VACIO;
	}

	return respuesta;
}

function encenderValidacionGastosAlquiler(elemento) {
	var divElemento = $(elemento);
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputGastosAlquilerDP');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var divCheck = $('#checkGasAlq');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	divCheck.addClass('hidden');
	var validoObj = validaGastosAlquiler(elemento);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	} else if(divElemento.val() != null && divElemento.val() != '') {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function validacionFormDatosPersonalesMotorRiesgos(){
	var validaPersona = true;

	if(!encenderValidacionDropDown('#select-sexoMR',MENSAJE_ERROR.SEXO_VACIO).campoValido){
		validaPersona = false;
	}

	if(!encenderValidacionDropDown('#select-estado-civilMR',MENSAJE_ERROR.ESTADO_CIVIL_VACIO).campoValido){
		validaPersona = false;
	}
	
	if(!encenderValidacionDropDown('#select-situacion-viviendaMR',MENSAJE_ERROR.SITUACION_VIVIENDA_NO_INGRESADA).campoValido){
		validaPersona = false;
	}

	return validaPersona;
}


function validacionFormDatosPersonalesMotorRiesgosNoCliente(){
	var validaPersonaNoCliente = true;
	
	if(!encenderValidacionDropDown('#select-profesionMRNC',MENSAJE_ERROR.PROFESION_VACIO).campoValido){
		validaPersonaNoCliente = false;
	}

	if(!encenderValidarCentroLabores('#centroLaboresMRNC').campoValido){
		validaPersonaNoCliente = false;
	}

	if(!encenderValidacionDropDown('#select-situacion-laboral-MRNC',MENSAJE_ERROR.SIT_LABORAL_VACIO).campoValido){
		validaPersonaNoCliente = false;
	}

	if(!encenderValidacionDropDown('#select-actividad-economica-MRNC',MENSAJE_ERROR.ACT_ECONOMICA_VACIO).campoValido){
		validaPersonaNoCliente = false;
	}

	if(!encenderValidacionIngresoFijo('#numIngFijoMRNC').campoValido){
		validaPersonaNoCliente = false;
	}

	if(!encenderValidacionAntiguedad('#numAntiguedadMRNC').campoValido){
		validaPersonaNoCliente = false;
	}

	return validaPersonaNoCliente;
}

function validacionFormDatosViviendaMotorRiesgos(){
	var validaVivienda = true;
	
	if(!encenderValidacionDistrito('#txtDistritoMR').campoValido){
		validaVivienda = false;
	}
	
	if(!encenderValidacionMiembros('#miembrosDependientesMR').campoValido){
		validaVivienda = false;
	}

	if(!encenderValidacionDropDown('#select-situacion-viviendaMR',MENSAJE_ERROR.SIT_VIVIENDA_VACIO).campoValido){
		validaVivienda = false;
	}

	if (!$('#inputGastosAlquilerMR').hasClass("hidden")) {
		if(!encenderValidacionGastosAlquiler('#numGastosAlquilerMR').campoValido){
			validaVivienda = false;
		}
	}

	return validaVivienda;
}

function validacionFormDatosProfesionMotorRiesgos(){
	var validaProfesion= true;

	if(!encenderValidacionDropDown('#select-profesionMR',MENSAJE_ERROR.PROFESION_VACIO).campoValido){
		validaProfesion = false;
	}

	if(!encenderValidacionDropDown('#select-actividad-economica-MR',MENSAJE_ERROR.ACT_ECONOMICA_VACIO).campoValido){
		validaProfesion = false;
	}

	if(!encenderValidacionDropDown('#select-situacion-laboral-MR',MENSAJE_ERROR.SIT_LABORAL_VACIO).campoValido){
		validaProfesion = false;
	}

	if(!encenderValidacionAntiguedad('#numAntiguedadLaboralMR').campoValido){
		validaProfesion = false;
	}

	if(!encenderValidacionIngresoFijo('#numIngFijoMR').campoValido){
		validaProfesion = false;
	}

	return validaProfesion;
}

function validacionFormOtrosSegmentosPersona() {
	var validaPersona = true;
	
	if(!encenderValidacionDropDown('#select-sexo',MENSAJE_ERROR.SEXO_VACIO).campoValido){
		validaPersona = false;
	}
	
	if(!encenderValidacionEdad().campoValido){
		validaPersona = false;
	}
	
	if(!encenderValidacionDropDown('#select-estado-civil',MENSAJE_ERROR.ESTADO_CIVIL_VACIO).campoValido){
		validaPersona = false;
	}
	
	if(!encenderValidacionDropDown('#select-estudios',MENSAJE_ERROR.ESTUDIOS_VACIO)){
		validaPersona = false;
	}
	
	if(!encenderValidacionDropDown('#select-profesion',MENSAJE_ERROR.PROFESION_VACIO).campoValido){
		validaPersona = false;
	}
	
	return validaPersona;
}

function validacionFormOtrosSegmentosVivienda() {
	var validaVivienda = true;
	
	if(!encenderValidacionDistrito('#txtDistrito').campoValido){
		validaVivienda = false;
	}
	
	if(!encenderValidacionDropDown('#select-situacion-vivienda',MENSAJE_ERROR.SIT_VIVIENDA_VACIO).campoValido){
		validaVivienda = false;
	}
	
	if(!encenderValidacionMiembros('#numMiembros').campoValido){
		validaVivienda = false;
	}
	
	if (!$('.form-gastos-alquiler').hasClass("hidden")) {
		if(!encenderValidacionGastosAlquiler('#numGastosAlquiler').campoValido){
			validaVivienda = false;
		}
	}

	return validaVivienda;
}

function validacionFormOtrosSegmentosLaboral() {
	var validaLaboral = true;
	
	if(!encenderValidacionDropDown('#select-situacion-laboral',MENSAJE_ERROR.SIT_LABORAL_VACIO).campoValido){
		validaLaboral = false;
	}
	
	if(!encenderValidacionDropDown('#select-actividad-economica',MENSAJE_ERROR.ACT_ECONOMICA_VACIO).campoValido){
		validaLaboral = false;
	}
	
	if(!encenderValidacionIngresoFijo('#numIngFijo').campoValido){
		validaLaboral = false;
	}

	// if(!encenderValidacionIngresoVariable('#numIngVariable').campoValido){
	// 	validaLaboral = false;
	// }
	
	if (!$('.form-input-antiguedad-laboral').hasClass("hidden")) {
		if(!encenderValidacionAntiguedad('#numAntiguedad').campoValido){
			validaLaboral = false;
		}
	}

	return validaLaboral;
}

function validaFatcaRadFatca(){
	var rpta = $('input:radio[name=radFatca]:checked').val();
	if (rpta === undefined) {
		$('#divRadFatca').addClass('radio__error');
		return false;
	} else {
		$('#divRadFatca').removeClass('radio__error');
		return true;
	}
}

function agregarTooltip(id, tipoError, texto, placement) {
	if(placement===null){
		placement='top';
	}
	
	if (tipoError) {
		setTimeout(function () {
			$('#' + id).tooltip({
				trigger: 'hover',
				title: texto,
				placement: placement
			}).addClass('errorTooltip').trigger('mouseover');
		}, 150);
	} else {
		setTimeout(function () {
			$('#' + id).tooltip({
				trigger: 'hover',
				title: texto,
				placement: placement
			});
		}, 150);
	}
}

function getCodeSMS() {
	var dataCodeSMS = {
		valSMS: '',
		valValidar: false
	};
	var valSms = '';
	for (i = 1; i <= 6; i++) {
		valSms += $('#digiSMS-0' + i).val();
	}

	if (valSms.length === 6) {
		dataCodeSMS.valSMS = valSms;
		dataCodeSMS.valValidar = true;
	}

	return dataCodeSMS;
}

function montoMiles(numero) {
	return numero.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function mostrarDoc(url){
	if(top !== window){
		var topModal = $("#seccion-tyc").offset().top;
		$('#modal-docs').css("top", topModal + 100);
	}
	if($(window).width() > 768){
		$('#iframeModalDocs').attr('src','about:blank');
		$('#modal-docs').modal({
	        show: 'true',
	        backdrop: 'static',
	        keyboard: true,
	        escapeClose: true,
	        clickClose: true,
	        showClose: true 
	    });
		setTimeout(function(){
			$('#iframeModalDocs').attr('src','https://docs.google.com/gview?url='+url+'&embedded=true#');
		}, 200);
	}else{
		window.open(url, '_blank');
	}
}

function requestValidaPreguntaCandado(preguntas, pep){
	
	var respuestaPep = {
			idPregunta: '',
			respuesta: pep
		};		
	var temp = [];
	preguntas.forEach(function(element) { 
	var respuestaIn = {
				idPregunta: element.id,
				respuesta: element.respuesta
			};
	temp.push(respuestaIn);	
	});
	
	var respuestasCandadoIn = {
				idSesion: ID_SESION,
				idSolicitud: "",
				respuestaPep:respuestaPep,
				respuestasCandado:temp,
				digitalData: getDigitalDataString()
			};
	ofertasMoi(respuestasCandadoIn);	
}

function ofertasMoi(respuestasCandadoIn){
	localStorage.removeItem('dataSimulador');
	var headers = {
			'track-lead': TRACKING,
			'track-front': ID_SESION
	    };
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		url: CONTEXT_AJAX + 'ajax/validar-respuestas',
		data: JSON.stringify(respuestasCandadoIn),
		headers: headers,
		success: function (jsonObj) {			
			if (jsonObj.error) {
				localStorage.setItem('REGLA_RECHAZO', JSON.stringify(jsonObj.vars.REGLA_RECHAZO));
				salida(jsonObj.error.errorCode);
			} else {
				MOUNT_MIN = jsonObj.data.montoMinimo;
				MOUNT_MAX = jsonObj.data.montoMaximo;
				var nombreCliente = jsonObj.data.nombrePersona + ' ' + jsonObj.data.apellidoPersona;
				$('#nombrePersona').text(nombreCliente);
				$('#nombrePersonaDireccion').text(nombreCliente);
				var mot = jsonObj.data.perfil;
				$('.preguntas-candado-gif').removeClass('hidden');
				var ofertas = jsonObj.data.ofertas;
				EVALUACION = jsonObj.data.evaluacion;
				PROCESS = (ofertas == null || ofertas == undefined ||  ofertas.length<= 0)  ? "sin oferta"  : "con oferta";
				var montoMaximo = jsonObj.data.montoMaximo
				var montoMaximoPrestamo = formato_moneda('S/', 2, redondearMultiplo100(montoMaximo, false));
				var sinOferta = jsonObj.data.sinOferta;
				V_CT_NUEVA = jsonObj.data.nuevaC;
				if(mot ===  FLUJO_PLD){
					if(jsonObj.data.verificacionDireccionPendiente === true) {
						localStorage.setItem('dataSimulador', JSON.stringify(jsonObj.data));
						seteo(jsonObj.data);
						localStorage.setItem('noVerificado', true);
						simularNoVerificadoHorario('verificacion-pendiente')
					} else if (jsonObj.data.ofertaExtranjera === true) {
						localStorage.setItem('dataSimulador', JSON.stringify(jsonObj.data));
						seteo(jsonObj.data);
						simularNoVerificadoHorario('cliente-extranjero')
//					} else if (jsonObj.data.estudios === true) {
//						finalizarProceso('estudios');
					} else if (jsonObj.data.sinOferta === true) {
						salida("009"); PROCESS =  "sin oferta" ;
					} else if (jsonObj.data.evaluacion === true) {
						pasoActual++;
						if(PROFILE === "crossell" ){
							$('.datosRiesgo-NoCliente').addClass('hidden');
							$('.datosRiesgo-Cliente').removeClass('hidden');
							transicionPasoxPaso($('#seccion-preguntas-candado'), $('#seccion-motor-riesgos'));
							$('#paso-actual-motor-riesgos').html(pasoActual);
							sugerirDistritos($('#txtDistritoMR'));
							llenarCombosDatosRiesgoCliente(jsonObj.vars);
						}else {
							SITUACION_VIVIENDA_MOTOR = true;
							llenarCombosDatosDireccion(jsonObj.vars);
							llenarCombosDatosRiesgoNoCliente(jsonObj.vars);
							pasoActual++;
							$('#paso-actual-datos-personales').html(pasoActual);
							$('#col-miembros-dependientes').removeClass('hidden');
							transicionPasoxPaso($('#seccion-preguntas-candado'), $('#seccion-direccion'));
						}
						llenarDataLayer(TAG_EVENTO_APP_STEP_3_EVALUACION_1_CYNC_SO, "", FLUJO_PLD);
					} else {
						if(jsonObj.data.fueraDeHorario === true){
							localStorage.setItem('dataSimulador', JSON.stringify(jsonObj.data));
							seteo(jsonObj.data);
							simularNoVerificadoHorario('horario-diferenciado')
						} else {
							localStorage.setItem('dataSimulador', JSON.stringify(jsonObj.data));
							seteo(jsonObj.data);
							transicionPasoxPaso($('#seccion-preguntas-candado'), $('#seccion-simulador'));
							actualizarBotonesSimulador('reiniciado');
							if(V_CT_NUEVA){
								// CUENTA = SIN_CUENTA;
								$('#divDisclaimerCuentaFacil').removeClass('hidden');
								actualizarBotonesSimulador('cta_ok');
								simular();
							}else if(!V_CT_NUEVA){
								// CUENTA = CON_CUENTA;
								simular();
								mostrarListaCuentas(jsonObj.data.listaCuentas);
							} else {
								// CUENTA = "";
							}						
							llenarDataLayer(TAG_EVENTO_APP_STEP_3_SIMULADOR_CYNC_CO, "", FLUJO_PLD);
						}
					}
				} else if (mot === FLUJO_VEHICULAR_NUEVO){
					var sinOferta = jsonObj.data.sinOferta;
					if(sinOferta){
						transicionPasoxPaso($('#seccion-preguntas-candado'), $('#seccion-datosPersonales-VEH'));
					}else {
						finalizarProceso('auto-nuevo');
					}
					
				} else if (mot === FLUJO_VEHICULAR_USADO) {
					finalizarProceso('auto-segunda');
				} else if (mot === FLUJO_ESTUDIOS){
					finalizarProceso('estudios');
				}
				$('.preguntas-candado-gif').addClass('hidden');
				
				agregarNumeroPasos(FLUJO,(PROFILE === 'crossell'),(PROCESS === 'con oferta'),(!V_CT_NUEVA));
								
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			errorHandler(jqXHR);
			$('.preguntas-candado-gif').addClass('hidden');
		}
	});
}

function obtenerCronograma(objCronograma){
	var divData = $('#data-tabla');
	var html = "";
	for(i=0; i<objCronograma.length; i++){
		cronogramaItem = objCronograma[i];
		html +=`
			<div class="tabla-fila">
				<div class="tabla-columna tabla-celda--index"><div class="tabla-sub-cabecera">Mes</div><div class="tabla-celda">${cronogramaItem.mes}</div></div>
				<div class="tabla-columna"><div class="tabla-sub-cabecera">Día</div><div class="tabla-celda">${cronogramaItem.dia}</div></div>
				<div class="tabla-columna"><div class="tabla-sub-cabecera">Amortización</div><div class="tabla-celda">${formato_moneda('S/', 2, cronogramaItem.amortizacion)}</div></div>
				<div class="tabla-columna"><div class="tabla-sub-cabecera">Interés</div><div class="tabla-celda">${formato_moneda('S/', 2, cronogramaItem.interes)}</div></div>
				<div class="tabla-columna"><div class="tabla-sub-cabecera">Seguro desgravamen</div><div class="tabla-celda">${formato_moneda('S/', 2, cronogramaItem.seguro)}</div></div>
				<div class="tabla-columna"><div class="tabla-sub-cabecera">Total a pagar</div><div class="tabla-celda">${formato_moneda('S/', 2, cronogramaItem.total)}</div></div>
				<div class="tabla-columna"><div class="tabla-sub-cabecera">Saldo</div><div class="tabla-celda">${formato_moneda('S/', 2, cronogramaItem.saldo)}</div></div>
			</div>
		`;
	}
	
	$('#data-tabla').html('');
	$('#data-tabla').html(html);
	
}

function simularNoVerificadoHorario(ruta){
	var valorMonto = $('#montoPrestamo').val();
	var diaPago = $('#diaPago').val();
	var cuota = $('#numCuotas').val();
	var valido = true;
	$('#inputMontoPrestamo').parent().removeClass('is-invalid');
	$('#diaPago').parent().removeClass('is-invalid');
	$('.pregunta-cuota').removeClass('error');
	$('#select-cuotas').removeClass('is-invalid');

	if(!/^\d+$/.test(valorMonto) || valorMonto.length <= 0){
		$('#inputMontoPrestamo').addClass('is-invalid');
		valido = false;
	}

	if(!/^\d+$/.test(diaPago) || diaPago <= 0 || diaPago >= 32){
		$('#diaPago').parent().addClass('is-invalid');
		valido = false;
	}

	if(cuota.length == 0){
		$('#select-cuotas').addClass('is-invalid');
		valido = false;
	}

	if(valido){
		$('.img-cargar').removeClass('hidden');
		var datasimulacion = {
				idSesion: ID_SESION,
				digitalData: getDigitalDataString(),
				monto: valorMonto,
				plazo: cuota,
				diaPago: diaPago
		};
		
		var headers = {
				'track-lead': TRACKING,
				'track-front': ID_SESION
			};
		
		$('#montoPrestamo').attr("disabled","disabled");
		$('#numCuotas').attr("disabled","disabled");
		$('#diaPago').attr("disabled","disabled");
//		$('#indiceCuenta').attr("disabled","disabled");

		$.ajax({
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			url: CONTEXT_AJAX + 'ajax/simular',
			data: JSON.stringify(datasimulacion),
			headers: headers,
			success: function (jsonObj) {
				if (jsonObj.error) {
					salida(jsonObj.error.errorCode);
				} else {
					var dataObj = jsonObj.data;
					AMOUNT = dataObj.simulacion.monto.toFixed(0);
					PAYMENT_AMOUNT =  dataObj.simulacion.cuota.toFixed(2);
					PAYMENT_DATE = dataObj.simulacion.diaPago;
					NUMBER_OF_PAYMENTS = dataObj.simulacion.plazo;
					INTEREST_RATE = dataObj.simulacion.tea.toFixed(2);
					V_CRONOGRAMA_ACTUAL = dataObj.simulacion.cronograma;
					obtenerCronograma(dataObj.simulacion.cronograma);
					$('#btnVerCronogramar-texto').removeClass('hidden');
					$('#span-seguro-desgravamen').html(formato_moneda('S/', 2, dataObj.simulacion.cronograma[0].seguro));
					var descTipoCuota = (dataObj.simulacion.tipoCuota==='S')?'Simple':'Doble';
					PAYMENT_TYPE = descTipoCuota;
					$('#datoSimulacionCuota').html(formato_moneda('S/', 2, dataObj.simulacion.cuota.toFixed(2)));
					$('#datoSimulacionTipoCuota').html(descTipoCuota);
					$('#datoSimulacionTea').html(dataObj.simulacion.tea.toFixed(2) + '%');
					$('#datoSimulacionTcea').html(dataObj.simulacion.tcea.toFixed(2) + '%');
					
					actualizarBotonesSimulador('simulado');

					$('#montoPrestamo').removeAttr("disabled");
					$('#numCuotas').removeAttr("disabled");
					$('#diaPago').removeAttr("disabled");
					$('#select-cuotas').removeClass('is-disabled');
					$('#indiceCuenta').removeAttr("disabled");
					resizeAllAside();
				}
				$('.img-cargar').addClass('hidden');
				finalizarProceso(ruta);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				errorHandler(jqXHR);
			}
		});
	}
}

function simular(){
	// llenarDataLayer(TAG_PANTALLA_SIMULADOR_LINK, "boton calcular", FLUJO_PLD);
	var valorMonto = $('#montoPrestamo').val();
	var diaPago = $('#diaPago').val();
	var cuota = $('#numCuotas').val();
	var valido = true;
	$('#inputMontoPrestamo').parent().removeClass('is-invalid');
	$('#diaPago').parent().removeClass('is-invalid');
	$('.pregunta-cuota').removeClass('error');
	$('#select-cuotas').removeClass('is-invalid');

	if(!/^\d+$/.test(valorMonto) || valorMonto.length <= 0){
		$('#inputMontoPrestamo').addClass('is-invalid');
		valido = false;
	}

	if(!/^\d+$/.test(diaPago) || diaPago <= 0 || diaPago >= 32){
		$('#diaPago').parent().addClass('is-invalid');
		valido = false;
	}

	if(cuota.length == 0){
		$('#select-cuotas').addClass('is-invalid');
		valido = false;
	}
	
//	if(!V_CT_NUEVA && $('#indiceCuenta').data('val')===''){
//		$('#select-cuenta').addClass('is-invalid');
//		valido = false;
//	}

	if(valido){
		$('.img-cargar').removeClass('hidden');
		var datasimulacion = {
				idSesion: ID_SESION,
				digitalData: getDigitalDataString(),
				monto: valorMonto,
				plazo: cuota,
				diaPago: diaPago
		};
		
		var headers = {
				'track-lead': TRACKING,
				'track-front': ID_SESION
			};
		
		$('#montoPrestamo').attr("disabled","disabled");
		$('#numCuotas').attr("disabled","disabled");
		$('#diaPago').attr("disabled","disabled");
//		$('#indiceCuenta').attr("disabled","disabled");

		$.ajax({
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			url: CONTEXT_AJAX + 'ajax/simular',
			data: JSON.stringify(datasimulacion),
			headers: headers,
			success: function (jsonObj) {
				if (jsonObj.error) {
					salida(jsonObj.error.errorCode);
				} else {
					var dataObj = jsonObj.data;
					AMOUNT = dataObj.simulacion.monto.toFixed(0);
					PAYMENT_AMOUNT =  dataObj.simulacion.cuota.toFixed(2);
					PAYMENT_DATE = dataObj.simulacion.diaPago;
					NUMBER_OF_PAYMENTS = dataObj.simulacion.plazo;
					INTEREST_RATE = dataObj.simulacion.tea.toFixed(2);
					V_CRONOGRAMA_ACTUAL = dataObj.simulacion.cronograma;
					obtenerCronograma(dataObj.simulacion.cronograma);
					$('#btnVerCronogramar-texto').removeClass('hidden');
					$('#span-seguro-desgravamen').html(formato_moneda('S/', 2, dataObj.simulacion.cronograma[0].seguro));
					var descTipoCuota = (dataObj.simulacion.tipoCuota==='S')?'Simple':'Doble';
					PAYMENT_TYPE = descTipoCuota;
					$('#datoSimulacionCuota').html(formato_moneda('S/', 2, dataObj.simulacion.cuota.toFixed(2)));
					$('#datoSimulacionTipoCuota').html(descTipoCuota);
					$('#datoSimulacionTea').html(dataObj.simulacion.tea.toFixed(2) + '%');
					$('#datoSimulacionTcea').html(dataObj.simulacion.tcea.toFixed(2) + '%');
					
					actualizarBotonesSimulador('simulado');

					$('#montoPrestamo').removeAttr("disabled");
					$('#numCuotas').removeAttr("disabled");
					$('#diaPago').removeAttr("disabled");
					$('#select-cuotas').removeClass('is-disabled');
					$('#indiceCuenta').removeAttr("disabled");
					resizeAllAside();
				}
				$('.img-cargar').addClass('hidden');
			},
			error: function (jqXHR, textStatus, errorThrown) {
				errorHandler(jqXHR);
			}
		});
	}

}


function mostrarListaCuentas(lista){
	lista.forEach(function(dato){
		$("#id-ul-indiceCuenta").append( '<li class="mdl-menu__item" data-val="'+dato.indice+'">' +dato.numeroCuentaOfuscada+'</li>');
	});
	getmdlSelect.init('#select-cuenta');
	// $('#select-cuenta').css('width','');
	// $('#divSeleccionCuentaAsociada').removeClass('hidden');
}

function seteo(dataSimulador){
	var montoMaximo=dataSimulador.montoMaximo;
	
	$("#montoMinPrestamo").text("Mín. " + formato_moneda('S/', 2, dataSimulador.montoMinimo));
	$("#montoMinPrestamo").data('monto', dataSimulador.montoMinimo);
	$("#montoMaxPrestamo").text("Máx. " + formato_moneda('S/', 2, redondearMultiplo100(montoMaximo, false)));
	$("#montoMaxPrestamo").data('monto', montoMaximo);
	$('#montoPrestamo-mask').val(formato_moneda('S/', 2, redondearMultiplo100(montoMaximo, false)));
	$('#montoPrestamo-mask').data('monto', redondearMultiplo100(montoMaximo, false));
	$('#montoPrestamo').val(redondearMultiplo100(montoMaximo, false));
	$('#montoPrestamo').data('montomask', formato_moneda('S/', 2, redondearMultiplo100(montoMaximo, false)));
	$('#inputMontoPrestamo').addClass('is-focused');
	$('#inputMontoPrestamo').addClass('is-dirty');
	createPlazo(montoMaximo);
}

function redondearMultiplo100(value, mayor_o_menor) {
	return mayor_o_menor ? (~~((parseInt(value) + 99) / 100) * 100) : (~~(parseInt(value) / 100) * 100);
}

function formato_moneda(simbolo, decimales, monto){
	   var montoFormato = parseFloat(monto).toFixed(decimales);
	   var montoFinal = simbolo + ' ' + new Intl.NumberFormat().format(montoFormato);
	  return montoFinal;
	}

function createPlazo(montoPrestamo){
	$("#id-ul-numCuotas").text("");
	var aValue = JSON.parse(localStorage.getItem('dataSimulador'));
	var tasaMax=0;
	var arrayPlazos = [];
	var isPlazo=true;
	aValue.ofertas.forEach(function(element) {
		if(element.montoMin<=montoPrestamo && montoPrestamo<=element.montoMax){
			if(tasaMax<=parseInt(element.plazo)){
				tasaMax=parseInt(element.plazo);
			}
			if(arrayPlazos.indexOf(element.plazo)===-1){
				isPlazo=false;
				$("#id-ul-numCuotas").append( '<li class="mdl-menu__item" data-val="'+element.plazo+'">' +element.plazo+'</li>');
				arrayPlazos.push(element.plazo);
			}			
		}
	});
	if(isPlazo){
		$('#inputMontoPrestamo').addClass('is-invalid');
		$('#montoPrestamo-mask').addClass('is-invalid');
		$('#select-cuotas').addClass('is-invalid');
	} else{
		$('#select-cuotas').removeClass('is-invalid');
		$('#inputMontoPrestamo').removeClass('is-invalid');
		$('#montoPrestamo-mask').removeClass('is-invalid');
	}
	getmdlSelect.init('#select-cuotas');
	$('#select-cuotas').css('width','');
	$('#numCuotas').val(tasaMax);
}

function obtenerDiaActual(){
	var fecha = new Date();
	$("#diaPago").val(fecha.getDate());
	$('#diaPago').parent().addClass('is-dirty');
}

function actualizarBotonesSimulador(estado) {
	if (estado === 'reiniciado') {
		$('#paso-simulador').data('simulado', false);
	} else if (estado === 'simulado') {
		$('#paso-simulador').data('simulado', true);
	} else if (estado === 'cta_ok') {
		$('#paso-simulador').data('check', true);
	} else if (estado === 'check_off') {
		$('#paso-simulador').data('check', false);
	}

	var nuevoEstadoCalcular = (!$('#paso-simulador').data('simulado'));
	var nuevoEstadoContinuar = ($('#paso-simulador').data('simulado') && $('#paso-simulador').data('check'));

	$('#calcular-simulador').prop('disabled', !nuevoEstadoCalcular);
	$('#paso-simulador').prop('disabled', !nuevoEstadoContinuar);
	
	if(nuevoEstadoCalcular){
		$('#datoSimulacionCuota').html('S/ 0');
		$('#datoSimulacionMonto').html('S/ 0');
		$('#datoSimulacionPlazo').html('0 meses');
		$('#datoSimulacionDiaPago').html('0');
		$('#datoSimulacionTipoCuota').html('Simple');
		$('#datoSimulacionTea').html('0 %');
		$('#datoSimulacionTcea').html('0 %');
		$('#btnVerCronogramar-texto').addClass('hidden');
	}
}

	 
	function llenarCombosDatosDireccion(vars) {
		llenarComboClaveValor("#select-tipoViaDP", vars.cmbTipoVia);
		llenarComboClaveValor("#select-zonaDP", vars.cmbTipoZona);
		llenarComboClaveValor("#select-profesionDP", vars.cmbOcupacion);	
		llenarComboDistrito("#select-distritoDP", vars.cmbDireccion);
		if( PROFILE === 'open market' && PROCESS === 'con oferta'){
			llenarComboClaveValor("#select-situacionViviviendaDP", vars.cmbSituacionVivienda);
		}	
	}

	function llenarCombosDatosRiesgoCliente(vars) {
		llenarComboClaveValor("#select-sexoMR", vars.tipoSexo);
		llenarComboClaveValor("#select-estado-civilMR", vars.tipoEstadoCivil);
		llenarComboClaveValor("#select-situacion-viviendaMR", vars.situacionVivienda);
		llenarComboClaveValor("#select-profesionMR", vars.tipoProfesion);
		llenarComboClaveValor("#select-actividad-economica-MR", vars.tipoActividadEconomica);
	}

	function llenarCombosDatosRiesgoNoCliente(vars) {
		llenarComboClaveValor("#select-situacionViviviendaDP", vars.situacionVivienda);
		llenarComboClaveValor("#select-actividad-economica-MRNC", vars.tipoActividadEconomica);
		llenarComboClaveValor("#select-profesionMRNC", vars.tipoProfesion);
	}

	function llenarComboClaveValor(idCombo, arr) {
		arr.forEach(function (element) {
			$(idCombo).append('<option value="'+ element.clave +'">' + element.valor + '</option>');
		});
	}
	 
	function llenarComboDistrito(idCombo,arr){
		 arr.forEach(function(element) {
			 $(idCombo).append('<option value="'+ element.ubigeoReniec +'">' + element.nombreDistrito + '</option>');
		 });
	}
	
//Funciones de Validacion de Direccion

function encenderValidarCodigoTipoVia(elemento){
		var divElemento = $(elemento);
		var divPadre = divElemento.parent();
		var divMensaje = divElemento.parent()[0].querySelector('.mdl-textfield__error');
		var codigoTipoVia = $(elemento).val();
		divPadre.removeClass('is-invalid');
		var validoObj = validarCodigoTipoVia(codigoTipoVia);

		if (!validoObj.campoValido) {
			divMensaje.innerText = validoObj.mensaje ;
			divPadre.addClass('is-invalid');
		}

		return validoObj;
}

function validarCodigoTipoVia(codigoTipoVia){
	var codigoTipoZona = $('#select-zonaDP').val();
	var nombreVia = $('#nombreTipoViaDP');
	var inputNombreTipoVia = $('#inputTipoViaDP');
	var divCheck = $('#checkNomVia');
	var respuesta = {
		campoValido: true,
		mensaje: ''
	};

	if (codigoTipoVia === MENSAJE_ERROR.DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA) {
		nombreVia.val('No Aplica');
		nombreVia.prop('disabled', true);
		inputNombreTipoVia.addClass('is-dirty');
		inputNombreTipoVia.removeClass('is-invalid');
		inputNombreTipoVia.removeClass('is-valid');
		divCheck.addClass('hidden');
	} else if(codigoTipoVia !== MENSAJE_ERROR.DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA 
			  && codigoTipoVia !=='' && nombreVia.val() === 'No Aplica') {
		nombreVia.val('');
		nombreVia.prop('disabled', false);
		inputNombreTipoVia.removeClass('is-dirty');
	}

	if (codigoTipoVia == null || codigoTipoVia === '') {
		respuesta.campoValido = false;
		respuesta.mensaje = MENSAJE_ERROR.DIRECCION_CODTIPOVIA_NULO_O_VACIO;
	}
    
    if(codigoTipoVia ===  MENSAJE_ERROR.DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA && codigoTipoZona ===  MENSAJE_ERROR.DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA){
    	respuesta.campoValido = false;
    	respuesta.mensaje =  MENSAJE_ERROR.DIRECCION_CODZONA_Y_CODVIA_NO_APLICAN;
    }
    
	return respuesta;
}

function encenderValidarNombreVia(elemento){
	var divElemento = $(elemento);
	
	var divPadre = divElemento.parent().parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var nombreTipoVia = $(elemento).val();
	
	var divCheck = divPadre.find('img');
	divCheck.addClass('hidden');
	
	var validoObj = validarNombreVia(nombreTipoVia);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	} else {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function validarNombreVia(nombreTipoVia){
	var nombreTipoZona = $('#nombreZonaDP').val();
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
    if(nombreTipoVia == null || nombreTipoVia === ''){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NOMBREVIA_VACIO;

    }else if(nombreTipoVia.length > 50){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NOMBREVIA_MAYOR_50;

    }else if(!parmRegex.ALPHANUMERIC.test(nombreTipoVia)){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NOMBREVIA_CARACTERES_INVALIDOS;
    }
    
    if(nombreTipoVia === MENSAJE_ERROR.DIRECCION_TIPO_NO_APLICA || nombreTipoZona === MENSAJE_ERROR.DIRECCION_TIPO_NO_APLICA){
        if(this.referencia == null || this.referencia == ''){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NOMBREZONA_Y_NOMBREVIA_NO_APLICAN;
        }
    }
    
	return respuesta;
}

function encenderValidarCodigoTipoZona(elemento){
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divMensaje = divElemento.parent()[0].querySelector('.mdl-textfield__error');
	var codigoTipoZona = $(elemento).val();
	divPadre.removeClass('is-invalid');
	var validoObj = validarCodigoTipoZona(codigoTipoZona);

	if (!validoObj.campoValido) {
		divMensaje.innerText = validoObj.mensaje;
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function validarCodigoTipoZona(codigoTipoZona){
	var codigoTipoVia = $('#select-tipoViaDP').val();
	var nombreZona = $('#nombreZonaDP');
	var inputNombreTipoZona = $('#inputNombreZonaDP');
	var respuesta = {
		campoValido: true,
		mensaje: ''
	};

	if (codigoTipoZona === MENSAJE_ERROR.DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA) {
		nombreZona.val('No Aplica');
		nombreZona.prop('disabled', true);
		inputNombreTipoZona.addClass('is-dirty');
		inputNombreTipoZona.removeClass('is-invalid');
		inputNombreTipoZona.removeClass('is-valid');
		$('#checkNomZon').addClass('hidden');
	} else if (codigoTipoZona !== MENSAJE_ERROR.DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA 
		       && codigoTipoZona !== '' && nombreZona.val() === 'No Aplica') {
		nombreZona.val('');
		nombreZona.prop('disabled', false);
		inputNombreTipoZona.removeClass('is-dirty');
	}

	if (codigoTipoZona == null || codigoTipoZona === '') {
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_CODZONA_NULO_O_VACIO;
    } else if(codigoTipoVia ==  MENSAJE_ERROR.DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA && codigoTipoZona == MENSAJE_ERROR.DIRECCION_TIPO_ZONA_Y_VIA_VALOR_NO_APLICA){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_CODZONA_Y_CODVIA_NO_APLICAN;
    }
    
	return respuesta;
}

function encenderValidarNombreZona(elemento){
	var divElemento = $(elemento);
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputNombreZonaDP');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var nombreZona = $(elemento).val();
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var validoObj = validarNombreZona(nombreZona);
	var divCheck = $('#checkNomZon');
	divCheck.addClass('hidden');

	if (!validoObj.campoValido) {
		divMensaje.innerText = validoObj.mensaje;
		divPadre.addClass('is-invalid');
		divCheck.addClass('hidden');
	} else {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function validarNombreZona(nombreTipoZona){
	var nombreTipoVia =  $('#nombreTipoViaDP').val();
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
    if(nombreTipoZona == null || nombreTipoZona === ''){
        respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NOMBREZONA_VACIO;
    }else if(nombreTipoZona.length > 30){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NOMBREZONA_MAYOR_30;
    }else if(!parmRegex.ALPHANUMERIC.test(nombreTipoZona)){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NOMBREZONA_CARACTERES_INVALIDOS;
    }else if(nombreTipoZona == MENSAJE_ERROR.DIRECCION_TIPO_NO_APLICA || nombreTipoVia == MENSAJE_ERROR.DIRECCION_TIPO_NO_APLICA){
        if(this.referencia == null || this.referencia === ''){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NOMBREZONA_Y_NOMBREVIA_NO_APLICAN;
        }
    }
    
	return respuesta;
}

function encenderValidarManzana(elemento){
	var divElemento = $(elemento);
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputManzanaDP');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var divCheck = $('#checkMzn');
	var manzana = $(elemento).val();
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var validoObj = validarManzana(manzana);

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

function validarManzana(manzana){
	var numeroExterior = $('#nroExteriorDP').val();
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
    if(manzana != null && manzana != ''){
    	$('#nroExteriorDP').parent().parent().removeClass('is-invalid');
    	$('#dptoDP').parent().parent().removeClass('is-invalid');
    	$('#nroExteriorDP').val('');
    	$('#dptoDP').val('');
    	$('#nroExteriorDP').parent().parent().removeClass('is-dirty');
    	$('#dptoDP').parent().parent().removeClass('is-dirty');
    	$('#nroExteriorDP').attr("disabled","disabled");
    	$('#dptoDP').attr("disabled","disabled");
        if(manzana.length > 8){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_MANZANA_MAYOR_8;  
        }else if(parmRegex.ALPHANUMERIC.test(manzana)){
            if(!parmRegex.ALPHANUMERIC_ALL.test(manzana)){
            	respuesta.campoValido = false;
            	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_MANZANA_CARACTERES_INVALIDOS;   
            }
        }else{
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_MANZANA_CARACTERES_INVALIDOS;
        }
    } else if((numeroExterior == null || numeroExterior === '') && (manzana == null || manzana === '')){
    	$('#nroExteriorDP').parent().addClass('is-invalid');
    	$('#nroExteriorDP').removeAttr("disabled");
    	$('#dptoDP').removeAttr("disabled");
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NUMEXTERIOR_Y_MANZANA_VACIOS;
    }
	
	return respuesta;
}

function encenderValidarLote(elemento){
	var divElemento = $(elemento);
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputLoteDP');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var lote = $(elemento).val();
	var divCheck = $('#checkLote');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	divCheck.addClass('hidden');
	var validoObj = validarLote(lote);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');	
	} else if(lote != null && lote != ''){
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function validarLote(lote){
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
	
    if(lote != null && lote != ''){
        if(lote.length > 8){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_LOTE_MAYOR_8;        
        }else if(parmRegex.ALPHANUMERIC.test(lote)){
            if(!parmRegex.ALPHANUMERIC_ALL.test(lote)){
            	respuesta.campoValido = false;
            	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_LOTE_CARACTERES_INVALIDOS;
            }
        }else{
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_LOTE_CARACTERES_INVALIDOS;   
        }
    } else {
    	respuesta.campoValido = true;
    	respuesta.mensaje = '';
    }
	return respuesta;
}

function encenderValidarNumExterior(elemento){
	var divElemento = $(elemento);
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputNroExteriorDP');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var numeroExterior = $(elemento).val();
	var divCheck = $('#checkNumExt');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var validoObj = validarNumExterior(numeroExterior);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
		divCheck.addClass('hidden');
	} else if(numeroExterior != null && numeroExterior != ''){
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function validarNumExterior(numeroExterior){
	$('#manzanaDP').removeAttr("disabled");
	$('#loteDP').removeAttr("disabled");
	var manzana = $('#manzanaDP').val();
	var lote = $('#loteDP').val();
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
		
    if(numeroExterior != null && numeroExterior != ''){
    	$('#manzanaDP').parent().parent().removeClass('is-invalid');
    	$('#loteDP').parent().parent().removeClass('is-invalid');
    	$('#manzanaDP').val('');
    	$('#loteDP').val('');
    	$('#manzanaDP').parent().parent().removeClass('is-dirty');
    	$('#loteDP').parent().parent().removeClass('is-dirty');
    	$('#manzanaDP').attr("disabled", "disabled");
    	$('#loteDP').attr("disabled", "disabled");	
        if(numeroExterior.length > 8){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NUMEROEXTERIOR_MAYOR_8;
            
        }else if(parmRegex.ALPHANUMERIC.test(numeroExterior)){
            if(!parmRegex.ALPHANUMERIC_ALL.test(numeroExterior)){
            	respuesta.campoValido = false;
            	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NUMEROEXTERIOR_CARACTERES_INVALIDOS;   
            }
        }else{
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NUMEROEXTERIOR_CARACTERES_INVALIDOS;   
        }     
        
    } else if ((numeroExterior == null || numeroExterior === '') && (manzana == null || manzana === '')){
    	$('#manzanaDP').parent().addClass('is-invalid');
    	$('#nroExteriorDP').removeAttr("disabled");
    	$('#dptoDP').removeAttr("disabled");
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_NUMEXTERIOR_Y_MANZANA_VACIOS;
    }
    
	return respuesta;
}

function encenderValidarDpto(elemento){
	var divElemento = $(elemento);
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputDptoDP');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var departInterno = $(elemento).val();
	var divCheck = $('#checkDpto');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	divCheck.addClass('hidden');
	var validoObj = validarDpto(departInterno);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	} else if(departInterno != null && departInterno != ''){
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}
	
	return validoObj;
}

function validarDpto(departInterno){
	var numeroExterior = $('#nroExteriorDP').val();
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
	if(numeroExterior !== null && numeroExterior !== ''){
	    if(departInterno != null && departInterno != ''){
	        if(departInterno.length > 8){
	            respuesta.campoValido = false;
	        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_DPTO_MAYOR_8;
	            
	        }else if(parmRegex.ALPHANUMERIC.test(departInterno)){
	            if(!parmRegex.ALPHANUMERIC_ALL.test(departInterno)){
	            	respuesta.campoValido = false;
	            	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_DPTO_CARACTERES_INVALIDOS;
	            }
	        }else{
	        	respuesta.campoValido = false;
	        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_DPTO_CARACTERES_INVALIDOS;   
	        }
	        
	    } else {
	    	respuesta.campoValido = true;
	    	respuesta.mensaje = '';
	    }
	}
	return respuesta;
}

function encenderValidarReferencia(elemento){
	var divElemento = $(elemento);
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputReferenciaDP');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var referencia = $(elemento).val();
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var validoObj = validarReferencia(referencia);
	var divCheck = $('#checkRef');
	divCheck.addClass('hidden');

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	} else if(referencia != null && referencia != ''){
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}
	return validoObj;
}

function validarReferencia(referencia){
	var numeroExt =  $('#nroExteriorDP').val();
	var manzana = $('#manzanaDP').val();
	var nombreVia = $('#nroExteriorDP').val();
	var nombreZona = $('#nombreZonaDP').val();;
	
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
	
    if(referencia != null && referencia != ''){
        if(referencia.length > 50){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_REFERENCIA_MAYOR_50;     
        }else if(!parmRegex.ALPHANUMERIC_ALL.test(referencia)){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_REFERENCIA_CARACTERES_INVALIDOS;  
        }
    } else if((numeroExt == null || numeroExt === '') && (manzana != null && manzana != '') && (referencia == null || referencia === '')){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_REFERENCIA_OBLIGATORIA;
    } else if(parmRegex.NUM_NATURAL_NO_ZERO.test(nombreVia) || parmRegex.NUM_NATURAL_NO_ZERO.test(nombreZona)){
        if(referencia == null || referencia === ''){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_REFERENCIA_OBLIGATORIA;
        }
    }else if(nombreVia == MENSAJE_ERROR.DIRECCION_TIPO_NO_APLICA || nombreZona == MENSAJE_ERROR.DIRECCION_TIPO_NO_APLICA){
        if(referencia == null || referencia == ''){
        	respuesta.campoValido = false;
        	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_REFERENCIA_OBLIGATORIA;
        }
    }else if(manzana != null && manzana != ''){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_REFERENCIA_OBLIGATORIA;
    }
    
    
	return respuesta;
}

function encenderValidarDistrito(elemento){
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divMensaje = divElemento.parent()[0].querySelector('.mdl-textfield__error');
	var distrito = $(elemento).val();
	divPadre.removeClass('is-invalid');
	var validoObj = validarDistrito(distrito);

	if (!validoObj.campoValido) {
		divMensaje.innerText = validoObj.mensaje;
		divPadre.addClass('is-invalid');
	}

	return validoObj;
}

function  validarDistrito(distrito){
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
    if(distrito == null || distrito == ''){
    	respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.DIRECCION_CODDISTRITO_NULO_O_VACIO;      
    } else {
    	respuesta.campoValido = true;
    	respuesta.mensaje = '';
    }
	return respuesta;
}

function encenderValidarCentroLabores(elemento){
	
	var divElemento = $(elemento);
	var divPadre =divElemento.parent().parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var centroLabores = $(elemento).val();
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	var divCheck = divPadre.find('img');
	divCheck.addClass('hidden');
	
	var validoObj = validarCentroLabores(centroLabores);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	} else {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
}

function  validarCentroLabores(centroLabores){
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
    if(centroLabores == ''){
        respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.CENTRO_LABORES_NO_INGRESADO;
    }else {
    	respuesta.campoValido = true;
    	respuesta.mensaje = '';
    }
	return respuesta;
}

function encenderValidarSituacionVivienda(elemento){
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var situacionVivienda = $(elemento)[0].getAttribute('data-val');
	divPadre.removeClass('is-invalid');
	var validoObj = validarSituacionVivienda(situacionVivienda);

	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}
	return validoObj;
}

function validarSituacionVivienda(situacionVivienda){
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
    if(situacionVivienda == ''){
        respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.SITUACION_VIVIENDA_NO_INGRESADA;
    }else {
    	respuesta.campoValido = true;
    	respuesta.mensaje = '';
    }
	return respuesta;
} 

function encenderValidarGastosAlquiler(elemento){
	var divElemento = $(elemento);
	//var divPadre = divElemento.parent();
	var divPadre = $('#inputGastosAlquilerDP');
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var gastosAlquiler = $(elemento).val();
	var divCheck = $('#checkGasAlq');
	divPadre.removeClass('is-invalid');
	divPadre.removeClass('is-valid');
	divCheck.addClass('hidden');
	
	var validoObj = validarGastosAlquiler(gastosAlquiler,divPadre); ;
	
	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	} else {
		divPadre.addClass('is-valid');
		divCheck.removeClass('hidden');
	}

	return validoObj;
} 

function validarGastosAlquiler(gastosAlquiler,divPadre){
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
		idParentGastosAlquiler = divPadre.id; 
	if ($('#' + idParentGastosAlquiler).is(":visible") && gastosAlquiler == '') {
		respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.GASTOS_ALQUILER_NO_INGRESADO;
	} else{
		respuesta.campoValido = true;
    	respuesta.mensaje = '';
	}
	
	return respuesta;
}

function encenderValidarIngresos(elemento){
	var divElemento = $(elemento);
	var divPadre = divElemento.parent();
	var divMensaje = divPadre.children('.mdl-textfield__error');
	var ingresos = $(elemento).val();
	divPadre.removeClass('is-invalid');
	var validoObj = validarIngresos(ingresos);
	
	if (!validoObj.campoValido) {
		divMensaje.text(validoObj.mensaje);
		divPadre.addClass('is-invalid');
	}

	return validoObj;
} 

function validarIngresos(monto){
	var respuesta = {
			campoValido: true,
			mensaje: ''
		};
	
	if (monto == '') {
		respuesta.campoValido = false;
    	respuesta.mensaje = MENSAJE_ERROR.INGRESOS_NO_INGRESADO;
	} else{
		respuesta.campoValido = true;
    	respuesta.mensaje = '';
	}
	
	return respuesta;
}

// Mascara Moneda 
function MascaraMoneda(idCampoNumerico,idCampoTexto){
	var objNumerico = $(idCampoNumerico);
	var objTexto = $(idCampoTexto);
	
	if (objTexto.val() != objNumerico.val()) {
		var val = Math.abs(parseInt(objTexto.val().replace(/,/g, ""), 10) || 0);
		objTexto.val(val);
		objNumerico.val(objTexto.val());
	}
	if (objNumerico.val() != 0) {
		objTexto.val("S/ " + montoMiles(objNumerico.val()));
	} else {
		objTexto.val("");
	}
}

function validarFormularioDireccion(){

	var resp = false;
	
	var codigoTipoVia = encenderValidarCodigoTipoVia('#select-tipoViaDP');
	var nombreVia = encenderValidarNombreVia('#nombreTipoViaDP');
	var codigoTipoZona = encenderValidarCodigoTipoZona('#select-zonaDP');
	var nombreZona = encenderValidarNombreZona('#nombreZonaDP');
	var manzana = encenderValidarManzana('#manzanaDP');
	var lote = encenderValidarLote('#loteDP');
	var numExt = encenderValidarNumExterior('#nroExteriorDP');
	var dpto = encenderValidarDpto('#dptoDP');
	var referencia = encenderValidarReferencia('#referenciaDP');
	var distrito = encenderValidarDistrito('#select-distritoDP');
	
	if (codigoTipoVia.campoValido && nombreVia.campoValido &&
		codigoTipoZona.campoValido && nombreZona.campoValido &&
		manzana.campoValido && lote.campoValido && numExt.campoValido &&
		dpto.campoValido && referencia.campoValido && distrito.campoValido) {
		resp = true;
	} else {
		resp = false;
	}
	
	return resp;
}

function validarFormularioOtrosDatosDireccion(){
	var resp = false;

	var situacionVivienda = encenderValidacionDropDown('#select-situacionViviviendaDP',MENSAJE_ERROR.SIT_VIVIENDA_VACIO);
	var gastosAlquiler = '';
	var miembrosDependientes = '';

	var miembrosDependientesValido = false;

	if (!$('#col-miembros-dependientes').hasClass("hidden")) {
		miembrosDependientes = encenderValidacionMiembros('#miembrosDependientesDP');
		miembrosDependientesValido = miembrosDependientes.campoValido;
	} else {
		miembrosDependientesValido = true;
	}

	if (!$('#inputGastosAlquilerDP').hasClass("hidden")) {
		gastosAlquiler = encenderValidacionGastosAlquiler('#numAlquilerDC');
		gastosAlquilerValido = gastosAlquiler.campoValido;
	} else {
		gastosAlquilerValido = true;
	} 


	if(situacionVivienda.campoValido && gastosAlquilerValido && miembrosDependientesValido) {
		resp = true;
	}

	return resp;
}

function resumenDatosCliente(profesion, situacionVivienda) {
	var resumen = "situacion vivienda:$situacionvivienda$";
	if(PROFILE === 'crossell' ){
		JOBTYPE = profesion;
		resumen = resumen.replace('$situacionvivienda$', situacionVivienda);
	}
	return resumen;
}

function resumenDatosDireccionEvaluacion(miembrosfamilia, situacionVivienda) {
	var resumen = "miembros familia:$miembrosfamilia$,situacion vivienda:$situacionvivienda$";
	resumen = resumen.replace('$miembrosfamilia$', miembrosfamilia);
	resumen = resumen.replace('$situacionvivienda$', situacionVivienda);
	return resumen;
}

function resumenDatosDireccion(situacionVivienda) {
	var resumen = "situacion vivienda:$situacionvivienda$";
	resumen = resumen.replace('$situacionvivienda$', situacionVivienda);
	return resumen;
}

function resumenDatosEvaluacion(profesion, miembrosfamilia, situacionVivienda, situacionLaboral, actividadEconomica, antiguedadLaboral) {
	var resumen = "miembros familia:$miembrosfamilia$,situacion vivienda:$situacionvivienda$,situacion laboral:$situacionLaboral$,actividad economica:$actividadEconomica$,antiguedad laboral:$antiguedadLaboral$";
	JOBTYPE = profesion;
	resumen = resumen.replace('$miembrosfamilia$', miembrosfamilia);
	resumen = resumen.replace('$situacionvivienda$', situacionVivienda);
	resumen = resumen.replace('$situacionLaboral$', situacionLaboral);
	resumen = resumen.replace('$actividadEconomica$', actividadEconomica);
	resumen = resumen.replace('$antiguedadLaboral$', antiguedadLaboral);
	return resumen;
}

function resumenDatosPersonales(profesion, situacionVivienda) {
	var resumen = "situacion vivienda:$situacionvivienda$";
	JOBTYPE = profesion;
	resumen = resumen.replace('$situacionvivienda$', situacionVivienda);
	return resumen;
}