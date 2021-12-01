const Request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const global = () => Request(url.global.global);

const globalDefi = () => Request(url.global.globalDefi);

module.exports = {
    global,
    globalDefi
}