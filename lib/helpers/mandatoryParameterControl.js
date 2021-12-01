const Utils = require('./utilities')

module.exports = mandatoryParameterControl = (mandatory= [],allParams = {}) =>{
    mandatory.forEach((param) => {
        if (allParams[param] === undefined) 
            Utils._WARN_('Missing parameter', 'params must include `'+ param +'` and be a of type: String or Object');
    })
}