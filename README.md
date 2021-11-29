# CoinGecko_NodeJs
Coin Gecko Api Node js wrapper 
- [Official document here](https:/www.coingecko.com/api/documentations/v3)


## Supported API method

| Endpoint                                                   |                           function | tested? |
| -----------------------------------------------------------| ---------------------------------: | :-----: |
| /ping                                                      |             _client.ping() |   ✅    |
|  |  |  |
| **Simple**                                                   |                           **function** | **tested?** |
| /simple/price                                              | _client.simple.tokenPrice()|   ✅    |
| /simple/token_price/:id                                    |     _client.simple.price() |   ✅    |
| /simple/supported_vs_currencies                            |_client.simple.supportedVsCurrencies() |   ✅    |
|  |  |  |
| **Coins**                                                   |                           **function** | **tested?** |
| /coins/list                                                |                  _client.coins.list() |   ✅    |
| /coins/markets                                             |               _client.coins.markets() |   ✅    |
| /coins/:id                                                 |                    _client.coins.coinById() |   ✅    |
| /coins/:id/tickers                                         |             _client.coins.tickersById() |   ✅    |
| /coins/:id/history                                         |             client.coinIdHistory() |   ✅    |
| /coins/id/market_chart                                     |         _client.coins.marketChartById() |   ✅    |
| /coins/{id}/market_chart/range                             |    _client.coins.marketChartRangeById() |   ✅    |
| /coins/{id}/status_updates                                 |       _client.coins.statusUpdateById() |   ✅    |
| /coins/{id}/ohlc                                           |                _client.coins.ohlcById() |   ✅    |
|  |  |  |
| **Contract**                                                   |                           **function** | **tested?** |
| /coins/{id}/contract/{contract_address}                    |                  _client.contract.getCoinInfo() |   ✅    |
| /coins/{id}/contract/{contract_address}/market_chart/      |       _client.contract.getMarketChart() |   ✅    |
| /coins/{id}/contract/{contract_address}/market_chart/range |  _client.contract.getMarketChartRange() |   ✅    |
|  |  |  |
| **Asset Platforms**                                                   |                           **function** | **tested?** |
| /asset_platforms                                           |                 _client.assetPlatform() |   ✅    |
|  |  |  |
| **Categories**                                                   |                           **function** | **tested?** |
| /coins/categories/list                                     |                 _client.categories.listCategories() |   ✅    |
| /coins/categories                                          |                 _client.categories.listCategoriesWithMarketData() |   ✅    |
|  |  |  |
| **Exchanges**                                                   |                           **function** | **tested?** |
| /exchanges                                                 |                 _client.exchanges.exchanges() |   ✅    |
| /exchanges/list                                            |              _client.exchanges.exchangesList() |   ✅    |
| /exchanges/{id}                                    |        _client.exchanges.exchangesById() |   ✅    |
| /exchanges/{id}/tickers                                    |       _client.exchanges.tickerById() |   ✅    |
| /exchanges/{id}/status_update                              |   _client.exchanges.statusUpdatesById() |   ✅    |
| /exchanges/{id}/volume_chart                               |     _client.exchanges.volumeChartById() |   ✅    |
|  |  |  |
| **Finance**                                                   |                           **function** | **tested?** |
| /finance_platforms                                         |          _client.finance.platforms() |   ✅    |
| /finance_products                                          |           _client.finance.products() |   ✅    |
|  |  |  |
| **Indexes**                                                   |                           **function** | **tested?** |
| /indexes                                                   |                   _client.index.indexes() |   ✅    |
| /indexes/{market_id}/{id}                                  |           _client.index.byMarketIdandId() |   ✅    |
| /indexes/list                                              |               _client.index.indexesList() |   ✅    |
|  |  |  |
| **Derivatives**                                                   |                           **function** | **tested?** |
| /derivatives                                               |              client./derivatives() |   ✅    |
| /derivatives/exchanges                                     |     client./derivativesExchanges() |   ✅    |
| /derivatives/exchanges/{id}                                |   client./derivativesExchangesId() |   ✅    |
|  |  |  |
| **Status Update**                                                   |                           **function** | **tested?** |
| /status_updates                                            |             client.statusUpdates() |   ✅    |
|  |  |  |
| **Exchange Rates**                                                   |                           **function** | **tested?** |
| /exchange_rates                                            |             client.exhangesRates() |   ✅    |
|  |  |  |
| **Trending**                                                   |                           **function** | **tested?** |
| /search/trending                                           |                  client.trending() |   ✅    |
|  |  |  |
| **Global**                                                   |                           **function** | **tested?** |
| /global                                                    |                    client.global() |   ✅    |
| /global/decentralized_finance_defi                        |                client.globalDefi() |   ✅    |
