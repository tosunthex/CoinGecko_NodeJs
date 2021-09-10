const request  = require("../helpers/request.js")
const ApiUrls = require('../helpers/ApiUrls.js')
const url = new ApiUrls()
const pingRequest = () => request(url.ping)

module.exports = {
    pingRequest : pingRequest
}