const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const Utils = require('../helpers/utilities')
const deleteParameter = require('../helpers/deleteParameter')
const mandotory = require('../helpers/mandotoryParameterControl')

const url = new ApiUrls()

const getCoinInfo = (params) => {
    if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

    mandotory(['id','contract_address'],params)

	return Request(url.contracts.GetCoinInfoByContractAddressAndId(params['id'],params['contract_address']),deleteParameter(['id','contract_addresses'],params))
}

const getMarketChart = (params) => {
    if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

    mandotory(['id','contract_address','vs_currency','days'],params)

	return Request(url.contracts.GetMarketChart(params['id'],params['contract_address']),deleteParameter(['id','contract_addresses'],params))
}

const getMarketChartRange = (params) => {
    if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

    mandotory(['id','contract_address','vs_currency','from','to'],params)

	return Request(url.contracts.GetMarketChartRange(params['id'],params['contract_address']),deleteParameter(['id','contract_addresses'],params))
}

module.exports = {
    getCoinInfo : getCoinInfo,
    getMarketChart : getMarketChart,
    getMarketChartRange : getMarketChartRange
}