//Modules
const fs = require('fs');
const mocha = require('mocha');
const chai = require('chai');
var should = chai.should();

//Helpers
const CoinGecko = require('../../lib/CoinGecko');
const CoinGeckoClient = new CoinGecko()
const shared = require('../shared');


describe('CoinGecko', function () {
  
  describe('ping', function () {
    before(function (done) {
      CoinGeckoClient.ping().then((data) => {
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
      CoinGeckoClient.simple.tokenPrice({
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
      CoinGeckoClient.simple.price(
        {ids : "bitcoin"},
        {vs_currencies : "usd"})
            .then((data) => {
                          this.data = data;
                          done()
      });
    });

    shared.shouldBeAValidRequest();
  });
  

  describe('Simple Supported vs Currencies',function (){
    before(function (done){
      CoinGeckoClient.simple.supportedVsCurrencies()
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
      CoinGeckoClient.coins.list().then((data) => {
        this.data = data
        done()
        })
      })

    shared.shouldBeAValidRequest();
  })

  describe('Coin Markets',function(){
    before(function(done){
      CoinGeckoClient.coins.markets({
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
      CoinGeckoClient.coins.coinById({
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
      CoinGeckoClient.coins.tickersById({
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
      CoinGeckoClient.coins.tickersById({
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
      CoinGeckoClient.coins.marketChartById({
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
      CoinGeckoClient.coins.marketChartRangeById({
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
      CoinGeckoClient.coins.statusUpdateById({
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
      CoinGeckoClient.coins.ohlcById({
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
      CoinGeckoClient.contract.getCoinInfo({
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
      CoinGeckoClient.contract.getMarketChart({
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
      CoinGeckoClient.contract.getMarketChartRange({
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
    CoinGeckoClient.assetPlatform().then((data) => {
      this.data = data
      done()
      })
    })

  shared.shouldBeAValidRequest();
})   

describe('Categories', function () {
  
  describe('Categories List', function () {
    before(function (done) {
      CoinGeckoClient.categories.listCategories().then((data) => {
        this.data = data;
        done();
      });
    });

    shared.shouldBeAValidRequest(this.data);
  });

  describe('Categories List With Market Data', function () {
    before(function (done) {
      CoinGeckoClient.categories.listCategoriesWithMarketData({
        order : "market_cap_asc"
      }).then((data) => {
        this.data = data;
        done();
      });
    });

    shared.shouldBeAValidRequest(this.data);
  });

});

