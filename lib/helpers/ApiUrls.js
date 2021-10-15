class ApiUrls {
    ping = '/ping'
    
    get simple(){
        return{
            price : '/simple/price',
            tokenPrice : (id) => '/simple/token_price/'+id,
            supportedVsCurrencies : '/simple/supported_vs_currencies'
        }
    }

    get coins(){        
        return {
            list : '/coins/list',
            market : '/coins/markets',
            coinById : (id) => `/coins/${id}/`,
            tickersById : (id) => `/coins/${id}/tickers`,
            historyById : (id) => `/coins/${id}/history`,
            marketChartById : (id) => `/coins/${id}/market_chart`,
            marketChartRangeById : (id) => `/coins/${id}/market_chart/range`,
            statusUpdateById : (id) => `/coins/${id}/status_updates`,
            ohlcById : (id) => `/coins/${id}/ohlc`
        }
    }

    get contracts(){
        return{
            GetCoinInfoByContractAddressAndId: (id,contract_address) =>`/coins/${id}/contract/${contract_address}`,
            GetMarketChart : (id,contract_address) =>`/coins/${id}/contract/${contract_address}/market_chart`,
            GetMarketChartRange : (id,contract_address) =>`/coins/${id}/contract/${contract_address}/market_chart/range`,
            }
        }

    assetPlatform = '/asset_platforms'

    get categories(){
        return {
            CategoriesList : '/coins/categories/list',
            CategoriesListMarketData : '/coins/categories'
        }
    }

    get exchanges(){
        return {
            Exchanges : '/exchanges',
            ExchangesList : '/exchanges/list',
            GetExchangeById : (id) => `/exchanges/${id}`,
            GetExchangeTickerById : (id) => `/exchanges/${id}/tickers`,
            GetStatusUpdatesById : (id) => `/exchanges/${id}/status_updates`,
            GetVolumeChartById : (id) => `/exchanges/${id}/volume_chart`,
            }
    }
        

    get finance(){
        return {
            FinancePlatforms : '/finance_platforms',
            FinanceProducts : '/finance_products'
            }
    }
    

    get indexes(){
        return {
            Indexes : '/indexes',
            GetIndexByMarketIdAndId : (market_id,id) => `/indexes/${market_id}/${id}`,
            GetMarketIndexes : '/indexes/list'
        }
    }

    get derivatives(){
        return {
            Derivatives : '/derivatives',
            DerivativesExchange : '/derivatives/exchanges',
            DerivativesExchangeById : (id) =>  `/derivatives/exchanges/${id}`,
            DerivativesExchangeList : '/derivatives/exchanges/list'
        }
    }

    statusUpdate = 'status_updates'

    get events(){
        return {
            Events : '/events',
            EventsCountries : '​/events​/countries',
            EventsTypes : '/events/types'
        }
    }

    exchange_Rates = '/exchange_rates'

    trending = '/search/trending'

    get global(){
        return {
            Global : '/global',
            GlobalDefi : '​/global​/decentralized_finance_defi'
        }
    } 

    get companies() { 
        return{
            CompaniesTreasury : (coin_id) => {
                return  `​/companies​/public_treasury​/${coin_id}`
            }
        }
    }
}

module.exports = ApiUrls