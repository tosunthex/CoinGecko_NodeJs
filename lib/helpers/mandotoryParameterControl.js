const Utils = require('../helpers/utilities')

module.exports = mandotoryParameterControl = (mandotory= [],allParams = {}) =>{
    mandotory.forEach(param =>{
        if (!allParams[param]) 
            Utils._WARN_('Missing parameter', 'params must include `'+ param +'` and be a of type: String or Object');
    })
}