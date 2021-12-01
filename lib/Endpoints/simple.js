const ApiUrls = require("../helpers/ApiUrls.js");
const request = require("../helpers/request.js");
const Utils = require("../helpers/utilities.js");
const parameterChecker = require("../helpers/parameterChecker");

const url = new ApiUrls();

const price = (params) => {
    if (Utils.isArray(params["vs_currencies"])) {
      params.vs_currencies = params.vs_currencies.join(",");
    }

    if (Utils.isArray(params["ids"])) {
      params.ids = params.ids.join(",");
    }
    
    return request(url.simple.price, parameterChecker(params,["ids","vs_currencies"],""));
}
const tokenPrice = (params) => { 
  if (Utils.isArray(params["contract_addresses"])) {
    params.contract_addresses = params.contract_addresses.join(",");
  }

  if (Utils.isArray(params["vs_currencies"])) {
    params.vs_currencies = params.vs_currencies.join(",");
  }
  return request(url.simple.tokenPrice(params["id"]), parameterChecker(params,["id","contract_addresses","vs_currencies"]));
}

const supportedVsCurrencies = () => {
  return request(url.simple.supportedVsCurrencies);
}

module.exports = {
    price,
    tokenPrice,
    supportedVsCurrencies
}