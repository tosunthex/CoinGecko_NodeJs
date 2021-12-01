const Request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const listCategories = () => Request(url.categories.categoriesList);

const listCategoriesWithMarketData = (params) => Request(url.categories.categoriesListMarketData,params);

module.exports = {
    listCategories,
    listCategoriesWithMarketData
};