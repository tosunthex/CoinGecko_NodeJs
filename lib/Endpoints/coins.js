const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const Utils = require("../helpers/utilities");
const ParameterChecker = require("../helpers/parameterChecker");

const url = new ApiUrls();

const coinsList = (params) => {
	return request(url.coins.list,params);
}

const coinMarkets = (params) => {
	
	params = ParameterChecker(params,["vs_currency"],"");

	if (Utils.isArray(params["ids"])) {
		params.ids = params.ids.join(",");
	}	

	return request(url.coins.market,params);
}

const coinById = (params) => {
	return request(url.coins.coinById(params["id"]),ParameterChecker(params,["id"],["id"]));
}

const tickersById = (params) => {
	return request(url.coins.tickersById(params["id"]),ParameterChecker(params,["id"],["id"]));
}

const historyById = (params) => {
	return request(url.coins.historyById(params["id"]),ParameterChecker(params,["id","date"],["id"]));
}

const marketChartById = (params) => {
	return request(url.coins.marketChartById(params["id"]),ParameterChecker(params,["id","vs_currency","days"],["id"]));
}

const marketChartRangeById = (params) => {
	return request(url.coins.marketChartRangeById(params["id"]),ParameterChecker(params,["id","vs_currency","from","to"],["id"]));
}

const statusUpdateById = (params) => {
	return request(url.coins.statusUpdateById(params["id"]),ParameterChecker(params,["id"],["id"]));
}

const ohlcById = (params) => {
	return request(url.coins.ohlcById(params["id"]),ParameterChecker(params,["id","vs_currency","days"],["id"]));
}


module.exports = {
	coinsList,
	coinMarkets,
	coinById,
	tickersById,
	historyById,
	marketChartById,
	marketChartRangeById,
	statusUpdateById,
	ohlcById
}