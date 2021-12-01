const request = require('../helpers/request');
const ApiUrls = require('../helpers/ApiUrls');
const deleteParameter = require('../helpers/deleteParameter');
const url = new ApiUrls();

const derivatives = (params) => request(url.derivatives.Derivatives,params);

const derivativesExchanges = (params) => request(url.derivatives.DerivativesExchange,params);

const derivativesExchangeById = (params) => request(url.derivatives.DerivativesExchangeById(params['id']),deleteParameter(['id'],params));

const derivativesExchangeList = () => request(url.derivatives.DerivativesExchangeList);

module.exports = {
    derivatives,
    derivativesExchanges,
    derivativesExchangeById,
    derivativesExchangeList
}