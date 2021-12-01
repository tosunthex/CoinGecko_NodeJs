const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const exchangeRates = () => request(url.exchangeRates);

module.exports = {
    exchangeRates
};