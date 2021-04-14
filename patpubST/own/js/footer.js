		var noIframe = window.self === window.top;
		if (noIframe) {
			document.getElementById('idMainHeader').style.display = "block";
			document.getElementById('divCabecera').style.display = "block";
			document.getElementById('divFooter').style.display = "block"
		}
	
		var classSplitTop = document.getElementById('split-top-cuerpo');
		var iconSplitTop = document.getElementById('iconCmbTop');
		var classSplitBot = document.getElementById('split-bot-cuerpo');
		var iconSplitBot = document.getElementById('iconCmbBot');
		
		function hideFooter(){
			document.getElementById('divFooter').style.display = "none";
		}

		function onSplitTop() {
			classSplitTop.style.minHeight = 0 + 'px';

			if (classSplitTop.classList) { 
				if(classSplitTop.classList.contains('split--close')){
					classSplitTop.classList.remove("split--close");
					classSplitTop.classList.add("split--open");
					iconSplitTop.classList.remove("bbva-icon__2_020_expand");
					iconSplitTop.classList.add("bbva-icon__2_021_contract");
					classSplitTop.style.minHeight = document.getElementById('splitTop').getBoundingClientRect().height + 100 + 'px';
					if(classSplitBot.classList.contains('split--open')){
						classSplitBot.classList.remove("split--open");
						classSplitBot.classList.add("split--close");
						classSplitBot.style.minHeight = 0 + 'px';
						iconSplitBot.classList.remove("bbva-icon__2_021_contract");
						iconSplitBot.classList.add("bbva-icon__2_020_expand");
					}
				}else if(classSplitTop.classList.contains('split--open')){
					classSplitTop.classList.remove("split--open");
					classSplitTop.classList.add("split--close");
					classSplitTop.style.minHeight = 0 + 'px';
					iconSplitTop.classList.remove("bbva-icon__2_021_contract");
					iconSplitTop.classList.add("bbva-icon__2_020_expand");
				}

			} else {
				//para explorer To_Do
			}
		}

		function onSplitBot() {			
			classSplitBot.style.minHeight = 0 + 'px';

			if (classSplitBot.classList) { 
				if(classSplitBot.classList.contains('split--close')){
					classSplitBot.classList.remove("split--close");
					classSplitBot.classList.add("split--open");
					iconSplitBot.classList.remove("bbva-icon__2_020_expand");
					iconSplitBot.classList.add("bbva-icon__2_021_contract");
					classSplitBot.style.minHeight = document.getElementById('splitBot').getBoundingClientRect().height + 100 + 'px';
					if(classSplitTop.classList.contains('split--open')){
						classSplitTop.classList.remove("split--open");
						classSplitTop.classList.add("split--close");
						classSplitTop.style.minHeight = 0 + 'px';
						iconSplitTop.classList.remove("bbva-icon__2_021_contract");
						iconSplitTop.classList.add("bbva-icon__2_020_expand");
					}
				}else if(classSplitBot.classList.contains('split--open')){
					classSplitBot.classList.remove("split--open");
					classSplitBot.classList.add("split--close");
					classSplitBot.style.minHeight = 0 + 'px';
					iconSplitBot.classList.remove("bbva-icon__2_021_contract");
					iconSplitBot.classList.add("bbva-icon__2_020_expand");
				}
			} else {
				//para explorer To_Do
			}
    	}
		onSplitBot();