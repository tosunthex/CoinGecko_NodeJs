const utils = require("./utilities");
const deleteParameter = require("./deleteParameter");
const mandatory = require("./mandatoryParameterControl");

const ParameterChecker = (params,mandatoryFields,ParametersToRemove) => {
	if (!utils.isObject(params)) {
		utils._WARN_("Invalid parameter", "params must be of type: Object");
	}

	mandatory(mandatoryFields,params);

	return deleteParameter([ParametersToRemove],params);
};

module.exports = ParameterChecker;