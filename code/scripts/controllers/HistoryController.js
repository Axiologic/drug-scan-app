import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";
import History from "../services/History.js";

export default class HistoryController extends ContainerController {
	constructor(element, history) {
		super(element);
		console.log("Preparing to set up the view model");
		let viewModel = {
			clearHistoryBtn:{
				label: "Clear History",
				eventName: "clearHistory"
			},
			viewDrugBtn:{
				label: ">",
				eventName: "viewDrug"
			}
		}
		this.model = this.setModel(viewModel);
		let self = this;

		this.model.addExpression('historyLoaded', function () {
			return typeof self.model.scannedDrugs !== undefined;
		}, 'scannedDrugs');

		History.getTrack(function (err, track){
			self.model.scannedDrugs = track;
		});

		this.on("clearHistory", (event)=>{
			console.log("Start clearing drug scan history");
			History.clear(function(err, track){
				console.log("History cleared");
				if(!err){
					self.model.scannedDrugs = [];
				}
			});
		});

		this.on("viewDrug", (event)=>{
			console.log("Caught event", event);
		}, {capture: true});
	}
}