const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const Utils = require('../helpers/utilities')
const deleteParameter = require('../helpers/deleteParameter')
const mandatory = require('../helpers/mandatoryParameterControl')

const url = new ApiUrls()

const coinsList = (params) => {
	return Request(url.coins.list,params)
}

const coinMarkets = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');
	
	mandatory(['vs_currency'],params)

	if (Utils.isArray(params['ids'])) {
		params.ids = params.ids.join(',');
	}	

	return Request(url.coins.market,params)
}

const coinById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	mandatory(['id'],params)

	return Request(url.coins.coinById(params['id']),deleteParameter(['id'],params))
}

const tickersById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	mandatory(['id'],params)

	return Request(url.coins.tickersById(params['id']),deleteParameter(['id'],params))

}

const historyById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	mandatory(['id','date'],params)

	return Request(url.coins.historyById(params['id']),deleteParameter(['id'],params))

}

const marketChartById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	mandatory(['id','vs_currency','days'],params)

	return Request(url.coins.marketChartById(params['id']),deleteParameter(['id'],params))
}

const marketChartRangeById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	mandatory(['id','vs_currency','from','to'],params)

	return Request(url.coins.marketChartRangeById(params['id']),deleteParameter(['id'],params))
}

const statusUpdateById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	mandatory(['id'],params)
	
	return Request(url.coins.statusUpdateById(params['id']),deleteParameter(['id'],params))
}

const ohlcById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	mandatory(['id','vs_currency','days'],params)

	return Request(url.coins.ohlcById(params['id']),deleteParameter(['id'],params))
}

module.exports = {
	coinsList : coinsList,
	coinMarkets : coinMarkets,
	coinById : coinById,
	tickersById : tickersById,
	historyById : historyById,
	marketChartById : marketChartById,
	marketChartRangeById : marketChartRangeById,
	statusUpdateById : statusUpdateById,
	ohlcById : ohlcById
}