const coinGecko =  require("./CoinGecko.js")
const CoinGeckoClient = new coinGecko()

var func = async() => {
    
    let data = await CoinGeckoClient.simple.tokenPrice(
        {
            id : "ethereum",
            contract_addresses : ['0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,0xb6ed7644c69416d67b522e20bc294a9a9b405b31'],
            vs_currencies : 'usd'
    })
/*
    let data = await CoinGeckoClient.simple.price(
            {ids : "bitcoin"})    
   
        let data = await CoinGeckoClient.ping()
    */   
    console.log(data)
}

func()