const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const deleteParameter = require('../helpers/deleteParameter')
const mandatoryParameterControl = require('../helpers/mandatoryParameterControl')
const url = new ApiUrls()

const exchanges = (params) => Request(url.exchanges.Exchanges,params)

const exchangesList = () => Request(url.exchanges.ExchangesList)

const exchangeById = (params) => {
    mandatoryParameterControl(['id'],params)
    return Request(url.exchanges.GetExchangeById(params['id'],deleteParameter(['id'],params)))
}

const exchangeTickerById = (params) => {
    mandatoryParameterControl(['id'],params)
    return Request(url.exchanges.GetExchangeTickerById(params['id']),deleteParameter(['id'],params))
}

const exchangesStatusUpdatesById = (params) => {
    mandatoryParameterControl(['id'],params)
    return Request(url.exchanges.GetStatusUpdatesById(params['id']),deleteParameter(['id'],params))
}

const exchangesVolumeChartById = (params) => {
    mandatoryParameterControl(['id'],params)
    return Request(url.exchanges.GetStatusUpdatesById(params['id'],deleteParameter(['id'],params)))
}

module.exports = {
    exchanges : exchanges,
    exchangesList : exchangesList,
    exchangeById : exchangeById,
    exchangeTickerById : exchangeTickerById,
    exchangesStatusUpdatesById : exchangesStatusUpdatesById,
    exchangesVolumeChartById : exchangesVolumeChartById
}