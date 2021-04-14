var VERSION_DL = "20190718_4.0";
var digitalData = {
		"versionDL":"",
		"pageInstanceID":"",
		"page":{
			"pageInfo":{
				"pageName":"",
				"pageIntent":"",
				"pageSegment":"",
				"sysEnv":"",
				"version":"",
				"channel":"",
				"language":"",
				"geoRegion":"",
				"level1":"",
				"level2":"",
				"level3":"",
				"level4":"",
				"level5":"",
				"level6":"",
				"level7":"",
				"level8":"",
				"level9":"",
				"level10":"",
				"area":"",
				"server":"",
				"businessUnit":"",
				"siteAppName":"",
				"projectName":"",
				"errorPage":""
			},
			"pageActivity":{
				"search":{
					"onSiteSearchResults":"",
					"onSiteSearchTerm":"",
					"onSiteSearchEnterTerm":""
				},
				"link":{
					"name":"",
					"url":"",
					"ext":"",
					"aux1":"",
					"aux2":"",
					"aux3":""
				},
				"video":{
					"nameOfVideoDisplayed":""
				},
				"audio":{
					"nameOfPodcastDisplayed":""
				},
				"loginType":""
			}
		},
		"optimization":{
			"attributes":[],
			"event":{
				"eventName":"",
				"optimizationEvent":""
			}
		},
		"internalCampaign":{
			"attributes":[],
			"event":{
				"eventInfo":{
					"eventName":"",
					"siteActionName":""
				}
			}
		},
		"user":{
			"device":{
				"userAgent":"",
				"mobile":"",
				"root":""
			},
			"userState":"",
			"profileID":"",
			"userID":"",
			"prospectID":"",
			"segment":{
				"global":"",
				"profile":""
			},
			"gender":"",
			"country":"",
			"state":"",
			"age":"",
			"civilStatus":"",
			"educationLevel":"",
			"jobType":""
		},
		"application":{
			"transactionID":"",
			"application":{
				"type":"",
				"name":"formulario prestamo personal"
			},
			"fulfillmentModel":"",
			"typology":"",
			"programTypeHired":"",
			"offer":"",
			"operationNumber":"",
			"process":"",
			"step":"",
			"interactionLevel":"",
			"isQualifiedVisits":"",
			"state":"",
			"errorType":"",
			"earnings":"",
			"expenses":"",
			"customFields":"",
			"globalApplication":""
		},
		"products":{
			"attributes":[
				{
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
				}
			],
			"productPortfolio":[]
		}
	};

	var jsonProductPortfolio = {
	    productName: "",
	    balance: "",
	    currency: "",
	    productCode: ""
	};

	var jsonInternalCampaingAtributes = {
	    location: "",
	    campaignFormat: "",
	    collectiveCode: "",
	    campaignName: "",
	    product: "",
	    productCode: "",
	    quantity: ""
	};	
	
	var jsonOptimmizationAtributes = {
	    idOptimization: "",
	    experience: "",
	    place: "",
	    type: "",
	    executor: "",
	    audience: ""
	};
	