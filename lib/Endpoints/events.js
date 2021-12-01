const Request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const events = (params) => Request(url.events.events,params);

const eventsCountries = () => Request(url.events.eventsCountries);

const eventTypes = () => Request(url.events.eventsTypes);

module.exports = {
    events,
    eventsCountries,
    eventTypes
}