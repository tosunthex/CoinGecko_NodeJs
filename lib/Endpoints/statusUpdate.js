const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const statusUpdate = (params) => request(url.statusUpdate,params);

module.exports = {
    statusUpdate
}

