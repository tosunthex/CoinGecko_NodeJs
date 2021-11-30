[![Run tests](https://github.com/tosunthex/CoinGecko_NodeJs/actions/workflows/ci.yml/badge.svg)](https://github.com/tosunthex/CoinGecko_NodeJs/actions/workflows/ci.yml)
[![version](https://badgen.net/npm/v/coin-gecko-pro-api)](https://badgen.net/npm/v/coin-gecko-pro-api)

# CoinGecko Api Pro NodeJs Wrapper
Coin Gecko Api Node js wrapper 
- [Official document here](https:/www.coingecko.com/api/documentations/v3)

# Sample Usage 
```sh
npm i coingecko-api-pro
```

```javascript
//1. Import coingeckojs
const CoinGecko = require('npm i coingecko-api-pro');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.ping();
};
```

You can also find the another sample usages and test files on the 
- [Test Repository](https://github.com/tosunthex/CoinGecko_NodeJS_test)


## Supported API method


| **Ping**                                                   |                           **function** | 
| :-----------------------------------------------------------| ---------------------------------: |
| /ping                                                      |             _client.ping() |


| **Simple**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /simple/price                                              | _client.simple.tokenPrice()|
| /simple/token_price/:id                                    |     _client.simple.price() |
| /simple/supported_vs_currencies                            |_client.simple.supportedVsCurrencies() |


| **Coins**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /coins/list                                                |                  _client.coins.list() |
| /coins/markets                                             |               _client.coins.markets() |
| /coins/:id                                                 |                    _client.coins.coinById() |
| /coins/:id/tickers                                         |             _client.coins.tickersById() |
| /coins/:id/history                                         |             client.coinIdHistory() |
| /coins/id/market_chart                                     |         _client.coins.marketChartById() |
| /coins/{id}/market_chart/range                             |    _client.coins.marketChartRangeById() |
| /coins/{id}/status_updates                                 |       _client.coins.statusUpdateById() |
| /coins/{id}/ohlc                                           |                _client.coins.ohlcById() |


| **Contract**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /coins/{id}/contract/{contract_address}                    |                  _client.contract.getCoinInfo() |
| /coins/{id}/contract/{contract_address}/market_chart/      |       _client.contract.getMarketChart() |
| /coins/{id}/contract/{contract_address}/market_chart/range |  _client.contract.getMarketChartRange() |


| **Asset Platforms**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /asset_platforms                                           |                 _client.assetPlatform() |


| **Categories**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /coins/categories/list                                     |                 _client.categories.listCategories() |
| /coins/categories                                          |                 _client.categories.listCategoriesWithMarketData() |


| **Exchanges**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /exchanges                                                 |                 _client.exchanges.exchanges() |
| /exchanges/list                                            |              _client.exchanges.exchangesList() |
| /exchanges/{id}                                    |        _client.exchanges.exchangesById() |
| /exchanges/{id}/tickers                                    |       _client.exchanges.tickerById() |
| /exchanges/{id}/status_update                              |   _client.exchanges.statusUpdatesById() |
| /exchanges/{id}/volume_chart                               |     _client.exchanges.volumeChartById() |


| **Finance**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /finance_platforms                                         |          _client.finance.platforms() |
| /finance_products                                          |           _client.finance.products() |


| **Indexes**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /indexes                                                   |                   _client.index.indexes() |
| /indexes/{market_id}/{id}                                  |           _client.index.byMarketIdandId() |
| /indexes/list                                              |               _client.index.indexesList() |


| **Derivatives**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /derivatives                                               |              _client.derivatives.derivatives() |
| /derivatives/exchanges                                     |     _client.derivatives.Exchanges() |
| /derivatives/exchanges/{id}                                |   _client.derivatives.ExchangesById() |
| /derivatives/exchanges/list                                |   _client.derivatives.ExchangesList() |


| **Status Update**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /status_updates                                            |             _client.statusUpdate() |


| **Exchange Rates**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /exchange_rates                                            |             _client.exchangeRates() |


| **Trending**                                                   |                           **function** |
| :-----------------------------------------------------------| ---------------------------------: |
| /search/trending                                           |                  _client.trending() |
|  |  |  |
| **Global**                                                   |                           **function** |
| /global                                                    |                    _client.global.global() |
| /global/decentralized_finance_defi                        |                _client.global.globalDefi() |
