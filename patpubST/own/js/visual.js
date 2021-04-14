var _aSecciones = ["seccion-motor-riesgos",
					"seccion-datosPersonales-VEH",
					"seccion-simulador",
					"seccion-evaluacion",
					"seccion-direccion",
					"seccion-ocupacion",
					"seccion-fatca",
					"seccion-tyc"];


var _aPasos = {
		"cand" : [null,null,null,null,null,null,null,null],
		"pld-c-cofe-ccta": [null,null,"Paso 1 de 2",null,null,null,null,"Paso 2 de 2"],
		"pld-c-cofe-scta": [null,null,"Paso 1 de 3",null,null,null,"Paso 2 de 3","Paso 3 de 3"],
		"pld-c-sofe-ccta": ["Paso 1 de 3",null,"Paso 2 de 3",null,null,null,null,"Paso 3 de 3"], //flujo futuro
		"pld-c-sofe-scta": ["Paso 1 de 4",null,"Paso 2 de 4",null,null,null,"Paso 3 de 4","Paso 4 de 4"], //flujo futuro
	    "pld-nc-cofe": [null,null,"Paso 1 de 5",null,"Paso 2 de 5","Paso 3 de 5","Paso 4 de 5","Paso 5 de 5"],
	    "pld-nc-sofe": ["Paso 2 de 5",null,"Paso 3 de 5",null,"Paso 1 de 5",null,"Paso 4 de 5","Paso 5 de 5"], //flujo futuro
	    "veh-nc-sofe": ["Paso 2 de 3",null,"Paso 3 de 3",null,null,null,null]
	};

function resizeAllAside() {
	var window_height = $(window).height();
	var window_width = $(window).width();
	
	$('.hst-seccion').each(function(){
		resizeAside(window_width, window_height, "#"+this.id);
	});
}

function resizeAside(window_width, window_height, nombreElemento){
	if(top == window){
		var alturaSeccion = $(nombreElemento).outerHeight(true);
//		if(window_height > alturaSeccion){
//			resizeHeightPx(window_height, $(nombreElemento + ' .bbva-aside'));
//			resizeHeightPx(window_height, $(nombreElemento + ' .hst-closed'));
//		}else{
			resizeHeightPx(alturaSeccion, $(nombreElemento + ' .bbva-aside'));
//			resizeHeightPx(alturaSeccion, $(nombreElemento + ' .hst-closed'));
//		}
	}else{
		resizeHeightDiv($(nombreElemento), $(nombreElemento + ' .bbva-aside'));
//		resizeHeightDiv($(nombreElemento), $(nombreElemento + ' .hst-closed'));
	}
}


function resizeHeightPx(pxAltura, divCambio) {
	divCambio.css('height', (pxAltura));
}

function resizeHeightDiv(divAltura, divCambio) {
	var alturaSeccion = divAltura.outerHeight(true);
	divCambio.css('height', (alturaSeccion));
}


function transicionPasoxPaso(divOcultar, divMostrar, tiempo = 750){
	divOcultar.fadeOut(tiempo);
	setTimeout(function() {
		divMostrar.fadeIn(tiempo);
    },(tiempo+100));	
	if ('parentIFrame' in window) {
        parentIFrame.scrollTo(0, 0);
    }
}

function agregarNumeroPasos(flj,cli,ofe,ctas){
	var tipo = '';
	if(flj===FLUJO_PLD){
		tipo = tipo + 'pld';
		if(cli){
			tipo = tipo + '-c';
		}else{
			tipo = tipo + '-nc';
		}
		
		if(ofe){
			tipo = tipo + '-cofe';
		}else{
			tipo = tipo + '-sofe';
		}
		
		if(cli){
			if(ctas){
				tipo = tipo + '-ccta';
			}else{
				tipo = tipo + '-scta';
			}
		}
	}else if(flj===FLUJO_VEHICULAR_NUEVO){
		tipo = tipo + 'pld';
		if(!cli && !ofe){
			tipo = 'veh-nc-sofe';
		}
	}else{
		tipo = 'cand';
	}
	console.log('tipo: '+tipo);
	if(_aPasos[tipo]!==undefined){
		
		for(var i=0; i<_aSecciones.length; i++){
			var nombreSeccion = _aSecciones[i];
			if(_aPasos[tipo][i]!==null){
				$('.label_pasos-desktop','#'+nombreSeccion).html(
						'<span class="span-paso-pantalla hidden-xs">' + _aPasos[tipo][i] + '</span>'
				);

				$('.label_pasos-mobile','#'+nombreSeccion).html(
						_aPasos[tipo][i]
				);
				
			}
		}
		
	}
}