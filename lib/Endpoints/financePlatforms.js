const Request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const financePlatforms = (params) => Request(url.finance.financePlatforms,params);

const financeProducts = (params) => Request(url.finance.financeProducts,params);

module.exports = {
    financePlatforms,
    financeProducts
}