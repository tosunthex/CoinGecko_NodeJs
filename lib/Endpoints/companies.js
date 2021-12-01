const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const treasury = (params) => request((url.companies.treasury(params["coin_id"])),"");

module.exports = {treasury};



