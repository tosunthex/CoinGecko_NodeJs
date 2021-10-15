const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const deleteParameter = require('../helpers/deleteParameter')
const mandatoryParameterControl = require('../helpers/mandatoryParameterControl')
const url = new ApiUrls()

const financePlatforms = (params) => Request(url.finance.FinancePlatforms,params)

const financeProducts = (params) => Request(url.finance.FinanceProducts,params)

module.exports = {
    financePlatforms : financePlatforms,
    financeProducts : financeProducts
}