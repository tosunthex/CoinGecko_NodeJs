const coinGecko =  require("./CoinGecko.js")
const CoinGeckoClient = new coinGecko()

var func = async() => {
    let data = await CoinGeckoClient.ping()
    console.log(data)
}

func()