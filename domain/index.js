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