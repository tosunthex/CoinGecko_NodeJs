const Request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const parameterChecker = require("../helpers/parameterChecker");
const url = new ApiUrls()

const exchanges = (params) => Request(url.exchanges.Exchanges,params)

const exchangesList = () => Request(url.exchanges.ExchangesList)

const exchangeById = (params) => {   
    return Request(url.exchanges.GetExchangeById(params["id"],parameterChecker(params,["id"],["id"])))
}

const exchangeTickerById = (params) => {
    return Request(url.exchanges.GetExchangeTickerById(params["id"]),parameterChecker(params,["id"],["id"]))
}

const exchangesStatusUpdatesById = (params) => {
    return Request(url.exchanges.GetStatusUpdatesById(params["id"]),parameterChecker(params,["id"],["id"]))
}

const exchangesVolumeChartById = (params) => {
    return Request(url.exchanges.GetStatusUpdatesById(params["id"],parameterChecker(params,["id"],["id"])))
}

module.exports = {
    exchanges,
    exchangesList,
    exchangeById,
    exchangeTickerById,
    exchangesStatusUpdatesById,
    exchangesVolumeChartById
}