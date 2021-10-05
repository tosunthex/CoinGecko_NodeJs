class ApiUrls {
    get ping () {
        return '/ping'
    }

    get simple(){
        return{
            price : '/simple/price'
            ,
            /**
             * @param {id} The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
             */
            tokenPrice : (id) => {
                return '/simple/token_price/'+id
            },
            supportedVsCurrencies : '/simple/supported_vs_currencies'
        }
    }

    get coins(){
        
        return {
            list : '/coins/list',
            market : '/coins/markets',
            coinById : (id) => {
                return '/coins/' + id
            },
            tickersById : (id) => {
                return '/coins/' + id + '/tickers'
            },
            historyById : (id) => {
                return '/coins/' + id + '/history'
            },
            marketChartById : (id) => {
                return '/coins/' + id + '/market_chart'
            },
            marketChartRangeById : (id) => {
                return '/coins/' + id + '/market_chart/range'
            },
            statusUpdateById : (id) => {
                return '/coins/' + id + '/status_updates'
            },
            ohlcById : (id) => {
                return '/coins/' + id + '/ohlc'
            }
        }
    }

    get contracts(){
        return{
            GetCoinInfoByContractAddressAndId: (id,contract_address) =>{
                return '/coins/'+id+'/contract/'+contract_address 
            },
            GetMarketChart : (id,contract_address) =>{
                return '/coins/' + id + '/contract/' + contract_address + '/market_chart'
            },
            GetMarketChartRange : (id,contract_address) =>{
                return '/coins/' + id + '/contract/' + contract_address + '/market_chart/range'
            }
        }
    }
}
module.exports = ApiUrls