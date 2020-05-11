import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";
import Drug from "../models/Drug.js";
import History from "../services/History.js";

function getViewModel(drug) {
	let viewModel = {
		"view-leaflet": {
			"label": "View eLeaflet (pdf)"
		},
		"chapters": [
			{
				"icon": "resources/images/validity.png",
				"title": "Validity",
				"prop": "validityDate",
				"details": ""
			},
			{
				"icon": "resources/images/recommendations.png",
				"title": "Recommendations",
				"prop": "recommendations",
				"details": ""
			},
			{
				"icon": "resources/images/active_subs.png",
				"title": "Active Substances",
				"prop": "activeSubstances",
				"details": ""
			},
			{
				"icon": "resources/images/contraindications.png",
				"title": "Contra Indications",
				"prop": "contraIndications",
				"details": ""
			},
			{
				"icon": "resources/images/dosage.png",
				"title": "Dosage",
				"prop": "dosage",
				"details": ""
			}
		]
	};


	for(let chapterIndex in viewModel.chapters){
		let chapter = viewModel.chapters[chapterIndex];
		chapter.details = drug[chapter.prop];
	}

	return viewModel;
};

export default class DrugDetailController extends ContainerController {
	constructor(element, history) {
		super(element);
		let drug = new Drug();
		console.log("Adding to history");
		History.add(drug);
		this.model = this.setModel(getViewModel(drug));

	}
}