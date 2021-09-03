const Constants = require("./helpers/constants.js")
const request  = require("./helpers/request.js")
//Helpers

class CoinGecko{
    ping(){
        const path = '/ping'
        return request(path)
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