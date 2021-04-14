function getDigitalData() {
    console.info("digitalData" + digitalData)
    return digitalData;
}

function clonarDataLayer(sdigitalData){
    digitalData = sdigitalData;
    window.digitalData = digitalData;
}

function getDigitalDataString() {
	return JSON.stringify(digitalData);
}

function setVersionDL(a) {
    digitalData.versionDL = a.toString();
}

function setPageInstanceID(a) {
    digitalData.pageInstanceID = a.toString()
}

function setPageIntent(a) {
    digitalData.page.pageInfo.pageIntent = a.toString()
}

function setPageSegment(a) {
    digitalData.page.pageInfo.pageSegment = a.toString()
}

function setSysEnv(a) {
    digitalData.page.pageInfo.sysEnv = a.toString()
}

function setVersion(a) {
    digitalData.page.pageInfo.version = a.toString()
}

function setChannel(a) {
    digitalData.page.pageInfo.channel = a.toString()
}

function setLanguage(a) {
    digitalData.page.pageInfo.language = a.toString()
}

function setGeoRegion(a) {
    digitalData.page.pageInfo.geoRegion = a.toString()
}

function setLevel(a, e) {
    switch (a) {
        case 1:
            digitalData.page.pageInfo.level1 = e.toString();
            break;
        case 2:
            digitalData.page.pageInfo.level2 = e.toString();
            break;
        case 3:
            digitalData.page.pageInfo.level3 = e.toString();
            break;
        case 4:
            digitalData.page.pageInfo.level4 = e.toString();
            break;
        case 5:
            digitalData.page.pageInfo.level5 = e.toString();
            break;
        case 6:
            digitalData.page.pageInfo.level6 = e.toString();
            break;
        case 7:
            digitalData.page.pageInfo.level7 = e.toString();
            break;
        case 8:
            digitalData.page.pageInfo.level8 = e.toString();
            break;
        case 9:
            digitalData.page.pageInfo.level9 = e.toString();
            break;
        case 10:
            digitalData.page.pageInfo.level10 = e.toString()
    }
}

function setArea() {
    digitalData.page.pageInfo.area = "publica"
}

/**function setPageName() {
    for (var a = digitalData.page.pageInfo.area, e = digitalData.page.pageInfo.pageSegment, t = [], i = 1; 11 > i && "" != digitalData.page.pageInfo["level" + i]; i++) t.push(digitalData.page.pageInfo["level" + i]);
    for (var n = a + ":" + e, i = 0; i < t.length; i++) 0 === i && (n += ":"), n += i == t.length - 1 ? "" + t[i] : "" + t[i] + ":";
    digitalData.page.pageInfo.pageName = n
}*/

function setPageName () {
	var sysenv = digitalData.page.pageInfo.sysEnv;
	var area = digitalData.page.pageInfo.area;
	var pageSegment = digitalData.page.pageInfo.pageSegment;
	var levels = [];
	for (var i = 1; i < 11; i++) {
		if (digitalData["page"]["pageInfo"]["level" + i] != "") {
			levels.push(digitalData["page"]["pageInfo"]["level" + i]);
		} else {
			break;
		}
	}
	var pageName = sysenv + ":" + area + ":" + pageSegment;
	for (var i = 0; i < levels.length; i++) {
		if (i === 0) {
			pageName += ":";
		}
		
		if (i == levels.length - 1) {
			pageName += "" + levels[i];
		} else {
			pageName += "" + levels[i] + ":";
		}
	}
	digitalData.page.pageInfo.pageName = pageName;
}

function setServer() {
	digitalData.page.pageInfo.server=window.location.hostname;
}

function setBusinessUnit(a) {
    digitalData.page.pageInfo.businessUnit = a;
}

function setSiteAppName(a) {
	digitalData.page.pageInfo.siteAppName = a;
}

function setUserAgent() {
    digitalData.user.device.userAgent = navigator.userAgent
}

function setMobile() {
    var a = !1;
    ! function(e) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge|maemo|midp|mmp|mobile.+firefox|netfront|operam(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windowsce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|awa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r|s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-||_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt|kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-||o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g|nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (a = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), a ? digitalData.user.device.mobile = "si" : digitalData.user.device.mobile = "no"
}

function setUserState(a) {
    digitalData.user.userState = a.toString()
}

function setProfileID(a) {
    digitalData.user.profileID = a.toString()
}

function setSegmentGlobal(a) {
    digitalData.user.segment.global = a.toString()
}

function setSegmentProfile(a) {
	digitalData.user.segment.profile = a.toString()
}

function setGender(a) {
    digitalData.user.gender = a.toString()
}

function setCountry(a) {
    digitalData.user.country = a.toString()
}

function setState(a) {
    digitalData.user.state = a.toString()
}

function setAge(a) {
    digitalData.user.age = a.toString()
}

function setTracking(a) {
    "true" == a && _satellite.track("peru privada login")
}

function setErrorPage(a) {
    digitalData.page.pageInfo.errorPage = a.toString()
}

function setPrimaryCategory(a,posicion) {
    digitalData.products.attributes[posicion].primaryCategory = a.toString();
}

function setProductSubtype(a,posicion) {
    digitalData.products.attributes[posicion].productSubtype = a.toString();
}

function setProductName(a,posicion) {
    digitalData.products.attributes[posicion].productName = a.toLowerCase().toString();
}

function setProductCode(a,posicion) {
    digitalData.products.attributes[posicion].productCode = a.toString();
}

function setProductQuantity(a,posicion) {
    digitalData.products.attributes[posicion].quantity = a.toString();
}

function setHuellaBasicaBancaPersonasPrivada() {
    if ("" == digitalData.pageInstanceID) {
        var a = $("#taggeo").val().split("-")[1];
        "produccion" == a ? setPageInstanceID("pro") : "calidad" == a ? setPageInstanceID("qa") : "local" == a ? setPageInstanceID("des") : "test" == a && setPageInstanceID("ei")
    }
    setPageSegment("personas"), "" == digitalData.page.pageInfo.version && setVersion(getBrowser().version), setChannel("online"), setLanguage("ES"), setArea(), "" == digitalData.page.pageInfo.server && setServer(window.location.hostname), setBusinessUnit("BBVA Peru"), setUserAgent(), "" == digitalData.user.device.mobile && setMobile(), setSysEnv("escritorio"), setUserState("logado"), "" == digitalData.user.profileID && setProfileID($("#codigoCliente").val()), "" == digitalData.user.segment.global && setSegmentGlobal("SI" == $("#taggeo").val().split("-")[0] ? "001002" : "001001"), console.info(">>>" + digitalData.user.segment.global)
}

function setLevelN(a) {
    for (var e = 1; 11 > e; e++)
        if ("" == digitalData.page.pageInfo["level" + e]) {
            digitalData.page.pageInfo["level" + e] = a.toString();
            break
        }
}

function addProduct() {
	let newProductAttributes = {
			"primaryCategory":"",
			"productSubtype":"",
			"productName":"",
			"productCode":"",
			"quantity":"",
			"amount":"",
			"paymentAmount":"",
			"numberOfPayments":"",
			"paymentDate":"",
			"paymentType":"",
			"serviceCharge":"",
			"currency":"",
			"numberOfHolders":"",
			"interestRate":{
				"tin":"",
				"tae":"",
				"rate":""
			},
			"term":"",
			"group":"",
			"state":""
		};
	digitalData.products.attributes.push(newProductAttributes);
	return (digitalData.products.attributes.length - 1);
}

function getFuncionalidad() {
    var a = digitalData.page.pageInfo.level2;
    return a.indexOf(" ") >= 0 && (a = a.split(" ").join("_")), a
}

function getLevelMax() {
    for (var a = 0, e = 1; 11 > e; e++) "" != digitalData.page.pageInfo["level" + e] && (a = e > a ? e : a);
    return a
}

function removeLevel(a) {
    digitalData.page.pageInfo["level" + a] = ""
}

function setApplicationType(a) {
    digitalData.application.application.type = a.toString();
}

function setApplicationName(a) {
    digitalData.application.application.name = a.toString();
}

function setFulfillmentModel(a) {
    digitalData.application.fulfillmentModel = a.toString();
}

function setAmount(a, posicion) {
	digitalData.products.attributes[posicion].amount = a.toString();
}

function setPaymentAmount(a, posicion) {
	digitalData.products.attributes[posicion].paymentAmount = a.toString();
}

function setNumberOfPayments(a, posicion) {
	digitalData.products.attributes[posicion].numberOfPayments = a.toString();
}

function setPaymentDate(a, posicion) {
	digitalData.products.attributes[posicion].paymentDate = a.toString();
}

function setPaymentType(a, posicion) {
	digitalData.products.attributes[posicion].paymentType = a.toLowerCase().toString();
}

function setTypology(a) {
    digitalData.application.typology = a.toLowerCase().toString();
}

function setServiceCharge(a, posicion) {
	digitalData.products.attributes[posicion].serviceCharge = a.toString();
}

function setCurrency(a, posicion) {
	digitalData.products.attributes[posicion].currency = a.toString();
}

function setOperationNumber(a) {
    digitalData.application.operationNumber = a.toString();
}

function setTerm(a, posicion) {
	digitalData.products.attributes[posicion].term = a.toString();
}

function setInterestRateTin (a, posicion) {
	digitalData.products.attributes[posicion].interestRate.tin = a.toString();
}

function setInterestRateTae (a, posicion) {
	digitalData.products.attributes[posicion].interestRate.tae = a.toString();
}

function setInterestRateRate (a, posicion) {
	digitalData.products.attributes[posicion].interestRate.rate = a.toString();
}

function setProcess(a) {
    digitalData.application.process = a.toLowerCase().toString();
}

function setApplicationStep(a) {
    digitalData.application.step = a.toLowerCase().toString();
}

function setApplicationInteractionLevel(a) {
    digitalData.application.interactionLevel = a.toString();
}

function setLinkName(a) {
    digitalData.page.pageActivity.link.name = a.toString();
}

function setLinkUrl(a) {
    digitalData.page.pageActivity.link.url = a.toString();
}

function setLinkExt(a) {
    digitalData.page.pageActivity.link.ext = a.toString();
}

function setLinkAux1(a) {
    digitalData.page.pageActivity.link.aux1 = a;
}

function setLinkAux2(a) {
    digitalData.page.pageActivity.link.aux2 = a;
}

function setLinkAux3(a) {
    digitalData.page.pageActivity.link.aux3 = a;
}

function setApplicationState(a) {
    digitalData.application.state = a.toLowerCase().toString();
}

function setApplicationErrorType(a) {
    digitalData.application.errorType = a.toLowerCase().toString();
}

function setApplicationNumberOfHolders(a) {
    digitalData.application.numberOfHolders = a.toString();
}

function setApplicationEarnings(a) {
    digitalData.application.earnings = a.toString();
}

function setApplicationExpenses(a) {
    digitalData.application.expenses = a.toString();
}

function setApplicationCustomFields(a) {
    digitalData.application.customFields = a.toLowerCase().toString();
}

function setApplicationGlobalApplication(a) {
    digitalData.application.globalApplication = a.toString();
}

function setProgramTypeHired(a) {
    digitalData.application.programTypeHired = a.toString();
}

function getPreviousDigitalData() {
    return JSON.parse(JSON.stringify(digitalData))
}

function restoreDigitalData(a) {
    digitalData = a
}

function getBrowser() {
    var a, e = navigator.userAgent,
        t = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    return /trident/i.test(t[1]) ? (a = /\brv[ :]+(\d+)/g.exec(e) || [], {
        name: "IE",
        version: a[1] || ""
    }) : "Chrome" === t[1] && (a = e.match(/\bOPR\/(\d+)/), null != a) ? {
        name: "Opera",
        version: a[1]
    } : (t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (a = e.match(/version\/(\d+)/i)) && t.splice(1, 1, a[1]), {
        name: t[0],
        version: t[1]
    })
}

function setIsQualifiedVisits(a) {
    digitalData.application.isQualifiedVisits = a.toLowerCase().toString();
}

function setTransactionID(a){
	digitalData.application.transactionID = a.toLowerCase().toString();
}

function setOffer(a){
	digitalData.application.offer = a.toLowerCase().toString();
}

function setJobType(a){
	digitalData.user.jobType = a.toLowerCase().toString();
}