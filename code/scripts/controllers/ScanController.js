import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

export default class ScanController extends ContainerController {
	constructor(element, history) {
		super(element);
		this.model = this.setModel({
			"productCode": {
				label: "Product code",
				name: "product_code",
				required: true,
				placeholder: "Scan or Insert Product Code",
				value: '223432EWe234'
			}
		});

		this.on("submit", (...args)=>{
			console.log("Submit", ...args);
			history.push("/drug-details");
		}, {capture: true});

		this.on("reset-form", (...args)=>{
			console.log("Reset", ...args);
		}, {capture: true});
	}
}