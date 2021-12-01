const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const exchange_Rates = () => request(url.exchange_Rates);

module.exports = {
    exchange_Rates
}