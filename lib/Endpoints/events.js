const Request = require('../helpers/request')
const ApiUrls = require('../helpers/ApiUrls')
const url = new ApiUrls()

const events = (params) => Request(url.events.Events,params)

const eventsCountries = () => Request(url.events.EventsCountries)

const eventTypes = () => Request(url.events.EventsTypes)

module.exports = {
    events : events,
    eventsCountries : eventsCountries,
    eventTypes : eventTypes
}