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
})

