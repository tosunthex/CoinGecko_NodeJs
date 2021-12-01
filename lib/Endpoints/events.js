const request = require("../helpers/request");
const ApiUrls = require("../helpers/ApiUrls");
const url = new ApiUrls();

const events = (params) => request(url.events.events,params);

const eventsCountries = () => request(url.events.eventsCountries);

const eventTypes = () => request(url.events.eventsTypes);

module.exports = {
    events,
    eventsCountries,
    eventTypes
};