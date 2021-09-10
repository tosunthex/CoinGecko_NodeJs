//Modules
const fs = require('fs');
const mocha = require('mocha');
const chai = require('chai');
var should = chai.should();

//Helpers
const CoinGecko = require('../../lib/CoinGecko');

const shared = require('../shared');

describe('CoinGecko', function () {
  before(function (done) {
    this.CoinGeckoClient = new CoinGecko();

    done();
  });

  describe('ping', function () {
    before(function (done) {
      this.CoinGeckoClient.ping().then((data) => {
        this.data = data;
        done();
      });
    });

    shared.shouldBeAValidRequest();
  });

  describe('Simple Token Price',function (){
    before(function (done){
      this.CoinGeckoClient.simple.tokenPrice({
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

  

  

});