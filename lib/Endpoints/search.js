const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();
const parameterChecker = require("../helpers/parameterChecker");

const coinsCategoriesMarkets = (params) => request(url.search,parameterChecker(params,["query"]));

module.exports = {
    coinsCategoriesMarkets
};