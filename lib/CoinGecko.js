const Constants = require("./helpers/constants.js")
const _ping = require('./Endpoints/ping.js')
const _simple = require('./Endpoints/simple.js')
//Helpers

class CoinGecko{
    ping(){
        return _ping.pingRequest()
    }

    get simple(){
        return{
            /**
             * @description Get the current price of any cryptocurrencies in any other supported currencies that you need
             * @function simple.price()
             * @param {object} params - Parameters to pass through to the request
             * @param {array|string} params.ids - (Required) A single id or a list of coin ids to filter if you want specific results. Use coins.list() for a list of coin ids.
             * @param {array|string} params.vs_currencies [default: usd] - A single id or a list of ids. Use simple.supportedVsCurrencies() for a list of vsCurrency ids.
             * @param {array|string} params.include_market_cap [default: false] - true/false to include market_cap.
             * @param {boolean} params.include_24hr_vol [default: false] - To include 24hr_vol (true/false)
             * @param {boolean} params.include_24hr_change [default: false] - true/false to include 24hr_change
             * @param {boolean} params.include_last_updated_at [default: false] - true/false to include last_updated_at of price
             * @returns {ReturnObject}
             */
            price : (params = {}) =>{
                return _simple.priceRequest(params)
            },

            /**
             * @description Get current price of tokens (using contract addresses) for a given platform in any other currency that you need
             * @function simple.fetchTokenPrice()
             * @param {object} params - Parameters to pass through to the request
             * @param {string} params.id [default: ethereum] - (Required) Asset platform (only ethereum is supported at this moment)
             * @param {string|array} params.contract_addresses - (Required) Token’s contract address
             * @param {string|array} params.vs_currencies - (Required) vs_currency of coins. Use simple.supportedVsCurrencies() for a list of vsCurrency ids.
             * @param {boolean} params.include_market_cap [default: false] - Include market cap in results or not
             * @param {boolean} params.include_24hr_vol [default: false] - Include 24hr volume in results or not
             * @param {boolean} params.include_24hr_change [default: false] - Include 24hr change in results or not
             * @param {boolean} params.include_last_updated_at [default: false] - Include last updated date in results or not
             * @returns {ReturnObject}
             */
            tokenPrice: (params = {}) => {
                return _simple.tokenPrice(params)
            }
        }
        
    }
}

//Set Constants
CoinGecko.API_VERSION = Constants.API_VERSION;
CoinGecko.REQUESTS_PER_SECOND = Constants.REQUESTS_PER_SECOND;
CoinGecko.ORDER = Constants.ORDER;
CoinGecko.STATUS_UPDATE_CATEGORY = Constants.STATUS_UPDATE_CATEGORY;
CoinGecko.STATUS_UPDATE_PROJECT_TYPE = Constants.STATUS_UPDATE_PROJECT_TYPE;
CoinGecko.EVENT_TYPE = Constants.EVENT_TYPE;
CoinGecko.TIMEOUT = Constants.TIMEOUT;

//

module.exports = CoinGecko;