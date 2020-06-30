import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

export default class DisplayLeafletController extends ContainerController {
	constructor(element, history) {
		super(element);

		if (typeof history.location.state !== "undefined") {
			this.SGTIN = history.location.state.SGTIN;
		}

		if (typeof $$.interactions === "undefined") {
			require('callflow').initialise();
			const se = require("swarm-engine");
			const identity = "test/agent/007";
			se.initialise(identity);
			const SRPC = se.SmartRemoteChannelPowerCord;
			let swUrl = "http://localhost:8080/";
			const powerCord = new SRPC([swUrl]);
			$$.swarmEngine.plug(identity, powerCord);
		}

		let hash = "leaflet";
		let leafletPath = `/data/${hash}`;
		$$.interactions.startSwarmAs("test/agent/007", "leafletLoader", "mountDSU", "/app"+leafletPath, this.SGTIN).onReturn((err, result)=>{
			if(err){
				console.log(err);
				return;
			}

			this.setModel({leaflet_src:leafletPath+"/attachment.png"});

			this.DSUStorage.getItem('/data/drugsHistory.json', 'json', (err, drugsHistory) => {
				if (err) {
					drugsHistory = [];
				}

				let scanDate = new Date();
				scanDate = `scanned at ${scanDate.getDay()}/${scanDate.getMonth()}/${scanDate.getFullYear()} ${scanDate.getHours()}:${scanDate.getMinutes()	}`

				drugsHistory.push({sgtin: history.location.state.SGTIN, scanDate});

				this.DSUStorage.setItem('/data/drugsHistory.json', JSON.stringify(drugsHistory), err => {
					if (err) {
						throw err;
					}
				});
			});
		});
	}
}