const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const url = new ApiUrls()

const statusUpdate = (params) => Request(url.statusUpdate,params)

module.exports = {
    statusUpdate
}

