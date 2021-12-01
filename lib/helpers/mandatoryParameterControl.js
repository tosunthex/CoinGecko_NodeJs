const Utils = require("./utilities");
const mandatoryParameterControl = (mandatory= [],allParams = {}) => {
    mandatory.forEach((param) => {
        if (typeof allParams[param] === "undefined") {
            Utils._WARN_("Missing parameter", "params must include `"+ param +"` and be a of type: String or Object");
        }
    });
};
module.exports = mandatoryParameterControl;