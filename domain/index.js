//Add specific code here (swarms, flows, assets, transactions)

function createDummyLeafletDossier(productCode){
	//here will be the logic to convert productCode into DSU Seed information
	return "SEED_OF_DOSSIER";
}

$$.swarms.describe("eLeafLet", {
	getLeafletDossier: function(productCode){
		this.return(undefined, createDummyLeafletDossier(productCode));
	}
});

let history_track = [];
$$.swarms.describe("history", {
	add: function(drug){
		console.log("Adding", drug);
		history_track.push({
			drug,
			accessDate: new Date().toUTCString()
		});
		this.return();
	},
	getTrack: function(){
		console.log("getting track", history_track);
		this.return(undefined, history_track);
	},
	clear: function(){
		history_track.splice(0,history_track.length);
		this.return(undefined, history_track);
	}
});

console.log("Domain constitution loaded!");