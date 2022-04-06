const Constants = require("./helpers/constants");
const _ping = require("./Endpoints/ping");
const _simple = require("./Endpoints/simple");
const _coins = require("./Endpoints/coins");
const _contract = require("./Endpoints/contract");
const _assetPlatform = require("./Endpoints/assetPlatform");
const _categories = require("./Endpoints/categories");
const _exchanges = require("./Endpoints/exchanges");
const _indexes = require("./Endpoints/indexes");
const _financePlatforms = require("./Endpoints/financePlatforms");
const _derivatives = require("./Endpoints/derivatives");
const _statusUpdates = require("./Endpoints/statusUpdate");
const _events = require("./Endpoints/events");
const _exchangeRates = require("./Endpoints/exchangeRates");
const _trending = require("./Endpoints/trending");
const _global = require("./Endpoints/global");
const _companies = require("./Endpoints/companies");
const _search = require("./Endpoints/search");

//Helpers

class CoinGecko {
    ping() {
        return _ping.pingRequest();
    }

    get simple() {
        return {
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
            price: (params = {}) => _simple.price(params),

            /**
             * @description Get current price of tokens (using contract addresses) for a given platform in any other currency that you need
             * @function simple.tokenPrice()
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
            tokenPrice: (params = {}) => _simple.tokenPrice(params),

            /**
             * @description  Get list of supported_vs_currencies
             * @function simple.supportedVsCurrencies()
             */
            supportedVsCurrencies: () => _simple.supportedVsCurrencies()
        };
    }

    get coins() {
        return {
            /**
             * @description Use this to obtain all the coins" id in order to make API calls
             * @param {object} params - Parameters to pass through to the request
             * @param {boolean} params.include_platform [default: false] - flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens).valid values: true, false  
             * @returns {ReturnObject}
             */
            list: (params = {}) => _coins.coinsList(params),

            /**
             * @description List all supported coins price, market cap, volume, and market related data
             * @param {object} params - Parameters to pass through to the request
             * @param {string} params.vs_currency - The target currency of market data (usd, eur, jpy, etc.)
             * @param {string | array} params.ids - The ids of the coin, comma separated crytocurrency symbols (base). refers to /coins/list.When left empty, returns numbers the coins observing the params limit and start
             * @param {string} params.category - filter by coin category. Refer to /coin/categories/list
             * @param {string} params.order  [default: market_cap_desc] - valid values: market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc sort results by field.
             * @param {integer} params.per_page  [default: 100] - valid values: 1..250 Total results per page
             * @param {integer} params.page  [default: 1] - Page through results
             * @param {boolean} params.sparkline  [default: false] - Page through results
             * @param {string} params.price_change_percentage  [default: false] - Include price change percentage in 1h, 24h, 7d, 14d, 30d, 200d, 1y (eg. "1h,24h,7d" comma-separated, invalid values will be discarded)
             * @returns {ReturnObject}
             */
             markets: (params = {}) => _coins.coinMarkets(params),

            /**
             * @description Get current data (name, price, market, ... including exchange tickers) for a coin
             * @param {object} params - Parameters to pass through to the request
             * @param {string} params.id - pass the coin id (can be obtained from /coins) eg. bitcoin
             * @param {string} params.localization  [default: true] - Include all localized languages in response (true/false)
             * @param {boolean} params.tickers  [default: true]- Include tickers data (true/false)
             * @param {boolean} params.market_data [default: true] - Include market_data (true/false) 
             * @param {boolean} params.community_data [default: true] - Include community_data data (true/false)
             * @param {boolean} params.developer_data [default: true] - Include developer_data data (true/false)
             * @param {boolean} params.sparkline [default: false] - Include sparkline 7 days data (eg. true, false)
             * @returns {ReturnObject}
             */
             coinById : (params = {}) => _coins.coinById(params),

            /**
             * @description Get coin tickers (paginated to 100 items)
             * @param {object} params - Parameters to pass through to the request
             * @param {string} params.id - pass the coin id (can be obtained from /coins) eg. bitcoin
             * @param {string} params.exchange_ids - filter results by exchange_ids (ref: v3/exchanges/list)
             * @param {string} params.include_exchange_logo - flag to show exchange_logo
             * @param {integer} params.page - Page through results 
             * @param {string} params.order - valid values: trust_score_desc (default), trust_score_asc and volume_desc
             * @param {string} params.depth - flag to show 2% orderbook depth. valid values: true, false
             * @returns {ReturnObject}
             */
             tickersById : (params = {}) => _coins.tickersById(params),

            /**
             * @description Get historical data (name, price, market, stats) at a given date for a coin
             * @param {object} params  - Parameters to pass through to the request
             * @param {string} params.id - pass the coin id (can be obtained from /coins) eg. bitcoin
             * @param {string} params.date - The date of data snapshot in dd-mm-yyyy eg. 30-12-2017
             * @param {string} params.localization - Set to false to exclude localized languages in response
             * @returns {ReturnObject}
             */
             historyById : (params = {}) => _coins.historyById(params),
            
            /**
             * @description Get historical market data include price, market cap, and 24h volume (granularity auto)
             * @param {object} params  - Parameters to pass through to the request
             * @param {string} params.id - pass the coin id (can be obtained from /coins) eg. bitcoin
             * @param {string} params.vs_currency - The target currency of market data (usd, eur, jpy, etc.)
             * @param {string} params.days - Data up to number of days ago (eg. 1,14,30,max)
             * @param {string} params.interval - Data interval. Possible value: daily
             * @returns {ReturnObject}
             */
             marketChartById : (params = {}) => _coins.marketChartById(params),
            
            /**
             * @description Get historical market data include price, market cap, and 24h volume (granularity auto)
             * @param {object} params  - Parameters to pass through to the request
             * @param {object} params.id - pass the coin id (can be obtained from /coins) eg. bitcoin
             * @param {string} params.vs_currency - The target currency of market data (usd, eur, jpy, etc.)
             * @param {string} params.from - From date in UNIX Timestamp (eg. 1392577232)
             * @param {string} params.to - To date in UNIX Timestamp (eg. 1422577232)
             * @returns {ReturnObject} 
             */
             marketChartRangeById : (params = {}) => _coins.marketChartRangeById(params),

            /**
             * @description Get historical market data include price, market cap, and 24h volume (granularity auto)
             * @param {object} params  - Parameters to pass through to the request
             * @param {object} params.id - pass the coin id (can be obtained from /coins) eg. bitcoin
             * @param {string} params.per_page - Total results per page
             * @param {string} params.page - Page through results
             * @returns {ReturnObject} 
             */
             statusUpdateById : (params = {}) => _coins.statusUpdateById(params),

            /**
             * @description Get historical market data include price, market cap, and 24h volume (granularity auto)
             * @param {object} params  - Parameters to pass through to the request
             * @param {object} params.id - pass the coin id (can be obtained from /coins) eg. bitcoin
             * @param {string} params.vs_currency - The target currency of market data (usd, eur, jpy, etc.)
             * @param {string} params.days - Data up to number of days ago (eg. 1,14,30,max)
             * @returns {ReturnObject} 
             */
             ohlcById : (params = {}) => _coins.ohlcById(params)            
        };
    }

    
    get contract() {
        return {
            /**
            * @description Get coin info from contract address
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.id - Asset platform (See asset_platforms endpoint for list of options)
            * @param {string} params.contract_address - Token's contract address
            * @returns {ReturnObject} 
            */
            getCoinInfo : (params = {}) =>  _contract.getCoinInfo(params),

            /**
            * @description Get historical market data include price, market cap, and 24h volume (granularity auto)
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.id - The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
            * @param {string} params.contract_address - Token's contract address
            * @param {string} params.vs_currency  - The target currency of market data (usd, eur, jpy, etc.)
            * @param {string} params.days  - Data up to number of days ago (eg. 1,14,30,max)
            * @returns {ReturnObject} 
            */
            getMarketChart : (params = {}) => _contract.getMarketChart(params),

            /**
            * @description Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.id - The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
            * @param {string} params.contract_address - Token's contract address
            * @param {string} params.vs_currency  - The target currency of market data (usd, eur, jpy, etc.)
            * @param {string} params.from  - From date in UNIX Timestamp (eg. 1392577232)
            * @param {string} params.to  - To date in UNIX Timestamp (eg. 1422577232)
            * @returns {ReturnObject} 
            */            
            getMarketChartRange : (params ={}) => _contract.getMarketChartRange(params)
        };
    }

    /**
    * @description List all asset platforms
    * @returns {ReturnObject} 
    */
    assetPlatform(){
        return _assetPlatform.assetPlatformRequest();
    }

    get categories () {
        return {
            /**
            * @description List all categories
            * @returns {ReturnObject} 
            */
            listCategories : () =>  { return _categories.listCategories();},
            /**
            * @description List all categories
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.order - valid values: market_cap_desc (default), market_cap_asc, name_desc, name_asc, market_cap_change_24h_desc and market_cap_change_24h_asc
            * @returns {ReturnObject} 
            */
            listCategoriesWithMarketData : (params = {}) => {return _categories.listCategoriesWithMarketData(params);}
        };
    }

    get exchanges() {
        return {
            /**
            * @description List all exchanges
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.page - page through results
            * @returns {ReturnObject} 
            */ 
            exchanges : (params = {}) => _exchanges.exchanges(params),
            
            /**
            * @description Use this to obtain all the markets' id in order to make API calls
            * @returns {ReturnObject} 
            */ 
            exchangesList : () => _exchanges.exchangesList(),

            /**
            * @description Get exchange volume in BTC and tickers
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.id - pass the exchange id (can be obtained from /exchanges/list) eg. binance
            * @returns {ReturnObject} 
            */ 
            exchangesById : (params = {}) => _exchanges.exchangeById(params),

            /**
            * @description Get exchange tickers (paginated)
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.id - pass the exchange id (can be obtained from /exchanges/list) eg. binance
            * @param {object} params.coin_ids - filter tickers by coin_ids (ref: v3/coins/list)
            * @param {object} params.include_exchange_logo - flag to show exchange_logo
            * @param {object} params.page - Page through results
            * @param {object} params.depth - flag to show 2% orderbook depth i.e., cost_to_move_up_usd and cost_to_move_down_usd
            * @param {object} params.order - valid values: trust_score_desc (default), trust_score_asc and volume_desc
            * @returns {ReturnObject} 
            */ 
            tickerById : (params = {}) => _exchanges.exchangeTickerById(params),

            /**
            * @description Get status updates for a given exchange
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.id - pass the exchange id (can be obtained from /exchanges/list) eg. binance
            * @param {object} params.per_page - Total results per page
            * @param {object} params.page - Page through results
            * @returns {ReturnObject} 
            */ 
            statusUpdatesById : (params = {}) => _exchanges.exchangesStatusUpdatesById(params),

            /**
            * @description Get volume_chart data for a given exchange
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.id - pass the exchange id (can be obtained from /exchanges/list) eg. binance
            * @param {object} params.days  - Data up to number of days ago (eg. 1,14,30)
            * @returns {ReturnObject} 
            */ 
            volumeChartById : (params = {}) => _exchanges.exchangesStatusUpdatesById(params)
        };
    }

    get finance() {
        return {
            /**
            * @description List all finance platforms


            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.per_page - Total results per page
            * @param {object} params.page  - page of results (paginated to 100 by default)
            * @returns {ReturnObject} 
            */ 
            platforms : (params = {}) => _financePlatforms.financePlatforms(params),

            /**
            * @description List all finance products
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.per_page - Total results per page
            * @param {object} params.page  - page of results (paginated to 100 by default)
            * @param {object} params.start_at - start date of the financial products
            * @param {object} params.end_at  - end date of the financial products
            * @returns {ReturnObject} 
            */ 
            products : (params = {}) => _financePlatforms.financeProducts(params)
        };
    }

    get index(){
        return{
            /**
            * @description List all market indexes
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.per_page - Total results per page
            * @param {object} params.page  - page of results (paginated to 100 by default)
            * @returns {ReturnObject} 
            */ 
            indexes : (params = {}) => _indexes.indexes(params),
            /**
            * @description get market index by market id and index id
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.market_id - pass the market id
            * @param {object} params.id  - pass the index id (can be obtained from /indexes/list)
            * @returns {ReturnObject} 
            */ 
            byMarketIdandId : (params = {}) => _indexes.indexesByMarketIdandId(params),
            /**
            * @description list market indexes id and name
            * @returns {ReturnObject} 
            */ 
            list : () => _indexes.indexesList()
        };
    }

    get derivatives(){
        return{
            /**
            * @description List all derivative tickers
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.include_tickers - ['all', 'unexpired'] - expired to show unexpired tickers, all to list all tickers, defaults to unexpired
            * @returns {ReturnObject} 
            */ 
            derivatives : (params = {}) => _derivatives.derivatives(params),

            /**
            * @description List all derivative exchanges
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.order - order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
            * @param {object} params.per_page - Total results per page
            * @param {object} params.page - Page through results
            * @returns {ReturnObject} 
            */
            Exchanges : (params = {}) => _derivatives.derivativesExchanges(params),

            /**
            * @description show derivative exchange data
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.id  - pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex
            * @param {object} params.include_tickers - ['all', 'unexpired'] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
            * @returns {ReturnObject} 
            */
            ExchangesById : (params = {}) => _derivatives.derivativesExchangeById(params),

            /**
            * @description List all derivative exchanges name and identifier
            * @returns {ReturnObject} 
            */
            ExchangesList : () => _derivatives.derivativesExchangeList()
        };
    }

    statusUpdate(){
        /**
            * @description List all derivative exchanges name and identifier
            * @param {object} params  - Parameters to pass through to the request
            * @param {object} params.category  - Filtered by category (eg. general, milestone, partnership, exchange_listing, software_release, fund_movement, new_listings, event)
            * @param {object} params.project_type  - Filtered by Project Type (eg. coin, market). If left empty returns both status from coins and markets.
            * @param {object} params.per_page  - Total results per page
            * @param {object} params.page  - Page through results
            * @returns {ReturnObject} 
            */
        return _statusUpdates.statusUpdate();
    }

    get events(){
        return{
            events : (params = {}) => _events.events(params),
            eventCountries : (params = {}) => _events.eventsCountries(),
            eventTypes : (params = {}) => _events.eventTypes()
        };
    }

    exchangeRates(){
        return _exchangeRates.exchangeRates();
    }

    get search(){
        return{
            coinsCategoriesMarkets : (params = {}) => _search.coinsCategoriesMarkets(params)
        }
    }

    trending(){
        return _trending.searchTrending();
    }

    get global(){
        return {
            global : () => _global.global(),
            globalDefi : () => _global.globalDefi()
        };
    }

    get companies(){
        return {
            treasury : (params = {}) => _companies.treasury(params)
        };
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

module.exports = exports = CoinGecko;