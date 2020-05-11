class History {
	constructor() {
		const pskCommunicationNodeAddrs = ["http://localhost:8080/"];
		const se = require("swarm-engine");
		se.initialise();
		const powerCord = new se.SmartRemoteChannelPowerCord(pskCommunicationNodeAddrs);
		$$.swarmEngine.plug("*", powerCord);
	}

	add(drug) {
		$$.interactions.startSwarmAs("demo/agent/system", "history", "add", drug).onReturn((err, result) => {
				if (err) {
					throw err;
				}
				console.log(result);
			});
	}

	getTrack(callback) {
		$$.interactions.startSwarmAs("demo/agent/system", "history", "getTrack").onReturn(callback);
	}

	clear(callback){
		$$.interactions.startSwarmAs("demo/agent/system", "history", "clear").onReturn(callback);
	}
}

export default new History();