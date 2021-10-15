const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const deleteParameter = require('../helpers/deleteParameter')

const url = new ApiUrls()

const indexes = (params) => Request(url.indexes.Indexes,params)

const indexesByMarketIdandId = (params) => Request(
    url.indexes.GetIndexByMarketIdAndId(params['market_id'],params['id']),
    deleteParameter(['market_id','id'],params))

const indexesList = () => Request(url.indexes.GetMarketIndexes)

module.exports = {
    indexes : indexes,
    indexesByMarketIdandId : indexesByMarketIdandId,
    indexesList : indexesList
}
 
