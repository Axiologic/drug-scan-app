import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

export default class DrugDetailController extends ContainerController {
	constructor(element, history) {
		super(element);
		this.model = this.setModel({
			"view-leaflet":{
				"label": "View eLeaflet (pdf)"
			},
			"chapters": [
				{
					"icon":"resources/images/validity.png",
					"title":"Validity",
					"prop":"",
					"details":"02/08/2025"
				},
				{
					"icon":"resources/images/recommendations.png",
					"title":"Recommendations",
					"prop":"",
					"details":"Cough / Sore throat"
				},
				{
					"icon":"resources/images/active_subs.png",
					"title":"Active Substances",
					"prop":"",
					"details":"Propolis / Vitamin C"
				},
				{
					"icon":"resources/images/contraindications.png",
					"title":"Contra Indications",
					"prop":"",
					"details":"Headache"
				},
				{
					"icon":"resources/images/dosage.png",
					"title":"Dosage",
					"prop":"",
					"details":"3 pills/day/4days"
				}
			]
		});

	}
}