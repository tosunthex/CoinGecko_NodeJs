class ApiUrls {
    get ping()  { 
        return "/ping";
    }
    
    get simple(){
        return{
            price : "/simple/price",
            tokenPrice : (id) => "/simple/token_price/"+id,
            supportedVsCurrencies : "/simple/supported_vs_currencies"
        };
    }

    get coins(){        
        return {
            list : "/coins/list",
            market : "/coins/markets",
            coinById : (id) => `/coins/${id}/`,
            tickersById : (id) => `/coins/${id}/tickers`,
            historyById : (id) => `/coins/${id}/history`,
            marketChartById : (id) => `/coins/${id}/market_chart`,
            marketChartRangeById : (id) => `/coins/${id}/market_chart/range`,
            statusUpdateById : (id) => `/coins/${id}/status_updates`,
            ohlcById : (id) => `/coins/${id}/ohlc`
        };
    }

    get contracts(){
        return{
            GetCoinInfoByContractAddressAndId: (id,contract_address) => `/coins/${id}/contract/${contract_address}`,
            GetMarketChart : (id,contract_address) => `/coins/${id}/contract/${contract_address}/market_chart`,
            GetMarketChartRange : (id,contract_address) => `/coins/${id}/contract/${contract_address}/market_chart/range`,
        };
    }

    get assetPlatform () { return "/asset_platforms";}

    get categories(){
        return {
            categoriesList : "/coins/categories/list",
            categoriesListMarketData : "/coins/categories"
        };
    }

    get exchanges(){
        return {
            Exchanges : "/exchanges",
            ExchangesList : "/exchanges/list",
            getExchangeById : (id) => `/exchanges/${id}`,
            getExchangeTickerById : (id) => `/exchanges/${id}/tickers`,
            getStatusUpdatesById : (id) => `/exchanges/${id}/status_updates`,
            getVolumeChartById : (id) => `/exchanges/${id}/volume_chart`,
            };
    }
        

    get finance(){
        return {
            financePlatforms : "/finance_platforms",
            financeProducts : "/finance_products"
            };
    }
    

    get indexes(){
        return {
            Indexes : "/indexes",
            GetIndexByMarketIdAndId : (market_id,id) => `/indexes/${market_id}/${id}`,
            GetMarketIndexes : "/indexes/list"
        };
    }

    get derivatives(){
        return {
            Derivatives : "/derivatives",
            DerivativesExchange : "/derivatives/exchanges",
            DerivativesExchangeById : (id) =>  `/derivatives/exchanges/${id}`,
            DerivativesExchangeList : "/derivatives/exchanges/list"
        };
    }

    get statusUpdate() {return "/status_updates"}

    get events(){
        return {
            events : "/events",
            eventsCountries : "​/events​/countries",
            eventsTypes : "/events/types"
        };
    }

    get exchangeRates() {return "/exchange_rates";}

    get trending()  {return "/search/trending";}

    get global(){
        return {
            global : "/global",
            globalDefi : "/global/decentralized_finance_defi"
        };
    }

    get companies() { 
        return{
            treasury : (coin_id) => `/companies/public_treasury/${coin_id}`
        };
    }
}

module.exports = ApiUrls