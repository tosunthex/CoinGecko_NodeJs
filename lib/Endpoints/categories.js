const Request = require('../helpers/request');
const ApiUrls = require('../helpers/ApiUrls');
const url = new ApiUrls();

const listCategories = () => Request(url.categories.CategoriesList);

const listCategoriesWithMarketData = (params) => Request(url.categories.CategoriesListMarketData,params);

module.exports = {
    listCategories,
    listCategoriesWithMarketData
}