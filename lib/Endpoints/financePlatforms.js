const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const url = new ApiUrls()

const financePlatforms = (params) => Request(url.finance.FinancePlatforms,params)

const financeProducts = (params) => Request(url.finance.FinanceProducts,params)

module.exports = {
    financePlatforms,
    financeProducts
}