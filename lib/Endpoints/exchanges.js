const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const parameterChecker = require("../helpers/parameterChecker");
const url = new ApiUrls();

const exchanges = (params) => request(url.exchanges.Exchanges,params);

const exchangesList = () => request(url.exchanges.ExchangesList);

const exchangeById = (params) => {   
    return request(url.exchanges.getExchangeById(params["id"]),parameterChecker(params,["id"],["id"]));
}

const exchangeTickerById = (params) => {
    return request(url.exchanges.getExchangeTickerById(params["id"]),parameterChecker(params,["id"],["id"]));
}

const exchangesStatusUpdatesById = (params) => {
    return request(url.exchanges.getStatusUpdatesById(params["id"]),parameterChecker(params,["id"],["id"]));
}

const exchangesVolumeChartById = (params) => {
    return request(url.exchanges.getVolumeChartById(params["id"]),parameterChecker(params,["id"],["id"]));
}

module.exports = {
    exchanges,
    exchangesList,
    exchangeById,
    exchangeTickerById,
    exchangesStatusUpdatesById,
    exchangesVolumeChartById
}