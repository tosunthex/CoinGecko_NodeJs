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
  

  

});