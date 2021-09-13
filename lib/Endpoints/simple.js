const ApiUrls = require('../helpers/ApiUrls.js');
const Request = require('../helpers/request.js')
const Utils = require('../helpers/utilities.js')

const url = new ApiUrls()

const price = (params) => {
    //Must be object
    if (!Utils.isObject(params)) 
    {
      Utils._WARN_('Invalid parameter', 'params must be of type: Object');
    }

    //Check the params.vs_currencies
    //If is string, ok. If is array, convert to string
    if (Utils.isArray(params['vs_currencies'])) {
      params.vs_currencies = params.vs_currencies.join(',');
    }

    //If no params.vs_currency, set to default: 'usd'
    if (!Utils.isString(params['vs_currencies']) || Utils.isStringEmpty(params['vs_currencies'])) {
      params.vs_currencies = 'usd';
    }

    //Check the params.ids
    //If is string, ok. If is array, convert to string
    if (Utils.isArray(params['ids'])) {
      params.ids = params.ids.join(',');
    }

    //Must have params.ids
    if (!Utils.isString(params['ids']) || Utils.isStringEmpty(params['ids'])) 
    {
      Utils._WARN_('Invalid parameter', 'params.ids must be of type: String or Array and greater than 0 characters.');
    }

    //
    
    return Request(url.simple.price, params);
}
const tokenPrice = (params) => {
  if (!Utils.isObject(params)) Utils._WARN_('Invalid parameter', 'params must be of type: Object');

  //Must have assetPlatform
  if (!Utils.isString(params['id']) || Utils.isStringEmpty(params['id'])) Utils._WARN_('Invalid parameter', 'id must be of type: String and greater than 0 characters.');

  //Must have contract_addresses, vs_currencies
  if (!params['contract_addresses']) Utils._WARN_('Missing parameter', 'params must include `contract_addresses` and be a of type: String or Object');
  if (!params['vs_currencies']) Utils._WARN_('Missing parameter', 'params must include `vs_currencies` and be a of type: String or Object');

  //If are arrays, convert to string
  if (Utils.isArray(params['contract_addresses'])) {
    params.contract_addresses = params.contract_addresses.join(',');
  }

  if (Utils.isArray(params['vs_currencies'])) {
    params.vs_currencies = params.vs_currencies.join(',');
  }
  var _id = params['id']
  delete params['id']
  return Request(url.simple.tokenPrice(_id), params);
}

const supportedVsCurrencies = () => {
  return Request(url.simple.supportedVsCurrencies)
}

module.exports = {
    price : price,
    tokenPrice : tokenPrice,
    supportedVsCurrencies : supportedVsCurrencies
}