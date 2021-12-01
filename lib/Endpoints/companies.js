const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const CompaniesTreasury = () => request(url.companies.CompaniesTreasury); 

module.exports = {
    CompaniesTreasury
};