const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const deleteParameter = require('../helpers/deleteParameter')
const mandatoryParameterControl = require('../helpers/mandatoryParameterControl')
const url = new ApiUrls()

const exchanges = (params) =>  Request(url.exchanges.Exchanges,params)

const exchangesList = (params) =>  Request(url.exchanges.ExchangesList,params)

const exchangeById = (params) => {
    mandatoryParameterControl(params['id'],params)
    return Request(url.exchanges.GetExchangeById(params['id'],deleteParameter(['id'],params)))
}

const exchangeTickerById = (params) => {
    mandatoryParameterControl(params['id'],params)
    return Request(url.exchanges.GetExchangeTickerById(params['id']),deleteParameter(['id'],params))
}

const exchangesStatusUpdatesById = (params) => {
    mandatoryParameterControl(params['id'],params)
    return Request(url.exchanges.GetStatusUpdatesById(params['id']),deleteParameter(['id'],params))
}

const exchangesVolumeChartById = (params) => {
    mandatoryParameterControl(params['id'],params)
    return Request(url.exchanges.GetStatusUpdatesById(params['id'],deleteParameter(['id'],params)))
}
