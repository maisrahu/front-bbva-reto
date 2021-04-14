var noIframeHeader = window.self === window.top;
		if (noIframeHeader) {
			document.getElementById('idMainHeader').style.display = "block";
			document.getElementById('divCabecera').style.display = "block";
		}