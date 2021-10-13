const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const url = new ApiUrls()

const listCategories = () => Request(url.categories.CategoriesList)

const listCategoriesWithMarketData = () => Request(url.categories.CategoriesListMarketData)

module.exports = {
    listCategories : listCategories,
    listCategoriesWithMarketData : listCategoriesWithMarketData
}