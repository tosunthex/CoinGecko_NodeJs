const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const url = new ApiUrls()

const  searchTrending = () => Request(url.trending)
module.exports ={
    searchTrending : searchTrending
}