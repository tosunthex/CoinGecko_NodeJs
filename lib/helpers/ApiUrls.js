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
}
module.exports = ApiUrls