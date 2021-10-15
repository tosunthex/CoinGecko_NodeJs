const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const deleteParameter = require('../helpers/deleteParameter')
const url = new ApiUrls()

const derivatives = (params) => Request(url.derivatives.Derivatives,params)

const derivativesExchanges = (params) => Request(url.derivatives.DerivativesExchange,params)

const derivativesExchangeById = (params) => Request(url.derivatives.DerivativesExchangeById(params['id']),deleteParameter(['id'],params))

const derivativesExchangeList = () => Request(url.derivatives.DerivativesExchangeList)

module.exports = {
    derivatives : derivatives,
    derivativesExchanges : derivativesExchanges,
    derivativesExchangeById : derivativesExchangeById,
    derivativesExchangeList : derivativesExchangeList
}