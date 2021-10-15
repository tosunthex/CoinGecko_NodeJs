const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const url = new ApiUrls()

const exchange_Rates = () => Request(url.exchange_Rates)

module.exports = {
    exchange_Rates : exchange_Rates
}