//Helpers
const CoinGecko = require("../../lib/CoinGecko");
const _client = new CoinGecko()
const shared = require('./shared');

describe('CoinGecko', function () {
  
  describe('ping', function () {
    before(function (done) {
      _client.ping().then((data) => {
        this.data = data;
        done();
      });
    });

    shared.shouldBeAValidRequest(this.data);
  });
});


describe('Simple',function(){

  describe('Simple Token Price',function (){
    before(function (done){
      _client.simple.tokenPrice({
        id : "ethereum",
        contract_addresses : ['0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,0xb6ed7644c69416d67b522e20bc294a9a9b405b31'],
        vs_currencies : 'usd'
                            }).then((data) => {
                          this.data = data;
                          done()
      });
    });

    shared.shouldBeAValidRequest();
  });

  describe('Simple Price',function (){
    before(function (done){
      _client.simple.price({
        ids : "bitcoin",
        vs_currencies : "usd"}
        ).then((data) => {
                          this.data = data;
                          done()
      });
    });

    shared.shouldBeAValidRequest();
  });
  

  describe('Simple Supported vs Currencies',function (){
    before(function (done){
      _client.simple.supportedVsCurrencies()
            .then((data) => {
                          this.data = data;
                          done()
      });
    });

    shared.shouldBeAValidRequest();
  });

});

describe('Coins',function() {
  
  describe('Coins List',function(){
    before(function(done){
      _client.coins.list().then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })

  describe('Coin Markets',function(){
    before(function(done){
      _client.coins.markets({
        vs_currency : 'usd',
        ids : ['ethereum','bitcoin']
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })

  describe('Coin By Id',function(){
    before(function(done){
      _client.coins.coinById({
        id : ['ethereum']
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })

  describe('Tickers By Id',function(){
    before(function(done){
      _client.coins.tickersById({
        id : 'ethereum',
        tickersById : ['binance','ftx_spot']        
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })

  describe('History By Id',function(){
    before(function(done){
      _client.coins.tickersById({
        id : 'ethereum',
        date : '12.09.2021'
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })

  describe('Market Chart By Id',function(){
    before(function(done){
      _client.coins.marketChartById({
        id : 'ethereum',
        vs_currency : 'usd',
        days : '1'
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })

  describe('Market Chart Range By Id',function(){
    before(function(done){
      _client.coins.marketChartRangeById({
        id : 'ethereum',
        vs_currency : 'usd',
        from : '1392577232',
        to : '1422577232'
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })   

  describe('Status Update By Id',function(){
    before(function(done){
      _client.coins.statusUpdateById({
        id : 'ethereum'
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })   

  describe('OHLC By Id',function(){
    before(function(done){
      _client.coins.ohlcById({
        id : 'ethereum',
        vs_currency : 'usd',
        days : '1'
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })   
})

describe('Contract',function(){
  describe('Get Coin Info',function(){
    before(function(done){
      _client.contract.getCoinInfo({
        id : 'ethereum',
        contract_address : '0x0D8775F648430679A709E98d2b0Cb6250d2887EF'
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  }),
  describe('Get Market Chart',function(){
    before(function(done){
      _client.contract.getMarketChart({
        id : 'ethereum',
        contract_address : '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
        vs_currency : 'usd',
        days : '1'
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  }),
  describe('Get Market Chart Range',function(){
    before(function(done){
      _client.contract.getMarketChartRange({
        id : 'ethereum',
        contract_address : '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
        vs_currency : 'usd',
        from : '1577836800',
        to : '1592611200'
      }).then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })
})

describe('Asset Platform',function(){
  before(function(done){
    _client.assetPlatform().then((data) => {
      this.data = data
      done()
      })
    })

  shared.shouldBeAValidRequest();
})   

describe('Categories', function () {
  
  describe('Categories List', function () {
    before(function (done) {
      _client.categories.listCategories().then((data) => {
        this.data = data;
        done();
      });
    });

    shared.shouldBeAValidRequest(this.data);
  });

  describe('Categories List With Market Data', function () {
    before(function (done) {
      _client.categories.listCategoriesWithMarketData({
        order : "market_cap_asc"
      }).then((data) => {
        this.data = data;
        done();
      });
    });

    shared.shouldBeAValidRequest(this.data);
  });

});

describe('Exchanges',function(){
  
  describe('List All Exchanges',function(){
    before(function(done){
      _client.exchanges.exchanges().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('List All Market Id and Name',function(){
    before(function(done){
      _client.exchanges.exchangesList().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('Get Exchange Volume in BTC',function(){
    before(function(done){
      _client.exchanges.exchangesById({
        id : 'binance'
      }).then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('Get Exchange Tickers',function(){
    before(function(done){
      _client.exchanges.tickerById({
        id : 'binance',
        coin_ids:'avalanche-2'
      }).then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('Get Status Updates',function(){
    before(function(done){
      _client.exchanges.statusUpdatesById({
        id : 'binance'
      }).then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('Get Volume Chart',function(){
    before(function(done){
      _client.exchanges.volumeChartById({
        id : 'binance',
        coin_ids:'avalanche-2'
      }).then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

})


describe('Finance',function(){
  
  describe('Finance Platforms',function(){
    before(function(done){
      _client.finance.platforms().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('Finance Products',function(){
    before(function(done){
      _client.finance.products().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

})

describe('Index',function(){
  
  describe('List all Market Indexes',function(){
    before(function(done){
      _client.index.indexes().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('Get Market Index By Market Id',function(){
    before(function(done){
      _client.index.byMarketIdandId({
        market_id : 'ftx',
        id : 'ADA'
      }).then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('List Market Indexes Id and Name',function(){
    before(function(done){
      _client.index.list().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })
})

describe('Derivatives',function(){
  
  describe('List all Derivative Tickers',function(){
    before(function(done){
      _client.derivatives.derivatives().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('List all Derivative Exchange',function(){
    before(function(done){
      _client.derivatives.Exchanges().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('List all Derivative Exchange Data',function(){
    before(function(done){
      _client.derivatives.ExchangesById({
        id:'binance_futures'
      }).then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('List all Derivative Exchange name and Identifier',function(){
    before(function(done){
      _client.derivatives.ExchangesList().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })
})

describe('Status Update',function(){
  
    before(function(done){
      _client.statusUpdate().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
})

describe('Exchange Rates',function(){  
  
    before(function(done){
      _client.exchangeRates().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
})

describe('Trending',function(){  
  
  before(function(done){
    _client.trending().then((data)=>{
      this.data = data;
      done();
    })
  })
  shared.shouldBeAValidRequest(this.data)
})

describe('Global',function(){
  
  describe('Global',function(){
    before(function(done){
      _client.global.global().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })

  describe('Global Defi',function(){
    before(function(done){
      _client.global.globalDefi().then((data)=>{
        this.data = data;
        done();
      })
    })
    shared.shouldBeAValidRequest(this.data)
  })
})

describe('Companies',function(){
  before(function(done){
    _client.companies.treasury({
      coin_id:'bitcoin'
    }).then((data)=>{
      this.data = data;
      done();
    })
  })
  shared.shouldBeAValidRequest(this.data)
})

describe('Search',function(){
  before(function(done){
    _client.search.coinsCategoriesMarkets({
      query:'bitcoin'
    }).then((data)=>{
      this.data = data;
      done();
    })
  })
  shared.shouldBeAValidRequest(this.data)
})

