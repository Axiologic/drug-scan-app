function generateProductCode(length) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export default class Drug {
	productCode = generateProductCode(20);
	commercialName = "Propoli PLUS";
	validityDate = "02/08/2025";
	recommendations = "Cough / Sore throat";
	activeSubstances = "Propolis / Vitamin C";
	contraIndications = "Headache";
	dosage = "3 pills/day/4days";
}