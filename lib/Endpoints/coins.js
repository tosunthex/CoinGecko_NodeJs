const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const Utils = require('../helpers/utilities')
const deleteParameter = require('../helpers/deleteParameter')

const url = new ApiUrls()

const coinsList = (params) => {
	return Request(url.coins.list,params)
}

const coinMarkets = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	if (!params['vs_currency']) 
		Utils._WARN_('Missing parameter', 'params must include `vs_currency` and be a of type: String or Object');

	if (Utils.isArray(params['ids'])) {
		params.ids = params.ids.join(',');
	}
	
	if (!Utils.isString(params['order']) || Utils.isStringEmpty(params['order'])) {
		params.order = 'market_cap_desc';
	}

	if (!Utils.isString(params['per_page']) || Utils.isStringEmpty(params['per_page'])) {
		params.per_page = '100';
	}

	if (!Utils.isString(params['page']) || Utils.isStringEmpty(params['page'])) {
		params.page = '1';
	}

	if (!Utils.isString(params['sparkline']) || Utils.isStringEmpty(params['sparkline'])) {
		params.sparkline = 'false';
	}

	return Request(url.coins.market,params)
}

const coinById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	if (!params['id']) Utils._WARN_('Missing parameter', 'params must include `id` and be a of type: String');

	return Request(url.coins.coinById(params['id']),deleteParameter(['id'],params))
}

const tickersById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	if (!params['id']) Utils._WARN_('Missing parameter', 'params must include `id` and be a of type: String');

	return Request(url.coins.tickersById(params['id']),deleteParameter(['id'],params))

}

const historyById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	if (!params['id']) Utils._WARN_('Missing parameter', 'params must include `id` and be a of type: String');
	if (!params['date']) Utils._WARN_('Missing parameter', 'params must include `date` and be a of type: String or Object');

	return Request(url.coins.historyById(params['id']),deleteParameter(['id'],params))

}

const marketChartById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	if (!params['id']) Utils._WARN_('Missing parameter', 'params must include `id` and be a of type: String');
	if (!params['vs_currency']) Utils._WARN_('Missing parameter', 'params must include `vs_currency` and be a of type: String');
	if (!params['days']) Utils._WARN_('Missing parameter', 'params must include `days` and be a of type: String');

	return Request(url.coins.marketChartById(params['id']),deleteParameter(['id'],params))
}

const marketChartRangeById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	if (!params['id']) Utils._WARN_('Missing parameter', 'params must include `id` and be a of type: String');
	if (!params['vs_currency']) Utils._WARN_('Missing parameter', 'params must include `vs_currency` and be a of type: String');
	if (!params['from']) Utils._WARN_('Missing parameter', 'params must include `from` and be a of type: String');
	if (!params['to']) Utils._WARN_('Missing parameter', 'params must include `to` and be a of type: String');

	return Request(url.coins.marketChartRangeById(params['id']),deleteParameter(['id'],params))
}

const ohlcById = (params) => {
	if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

	if (!params['id']) Utils._WARN_('Missing parameter', 'params must include `id` and be a of type: String');
	if (!params['vs_currency']) Utils._WARN_('Missing parameter', 'params must include `vs_currency` and be a of type: String');
	if (!params['days']) Utils._WARN_('Missing parameter', 'params must include `days` and be a of type: String');

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