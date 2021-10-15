const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const url = new ApiUrls()

const global = () => Request(url.global.Global)

const globalDefi = () => Request(url.global.GlobalDefi)

module.exports = {
    global : global,
    globalDefi : globalDefi
}