/**
 * @description Build options for https.request
 * @function BuildRequestOptions
 * @protected
 * @param {string} path - Relative path for API
 * @param {object} params - Object representing query strings for url parameters
 * @returns {Object} - {path, method, host, port} Options for request
 */

const Utilities = require('./utilities.js');
const Constants = require('./constants.js');
const queryString = require('querystring');

const BuildRequestOptions = (path, params) => {
  //Stringify object params if exist
  if(Utilities.isObject(params)) 
    params = queryString.stringify(params);
  else 
    params = undefined;
  
  //Make relative path
  //Check if has params, append accordingly
  if(params == undefined) 
    path = `/api/v${Constants.API_VERSION}${path}`;
  else 
    path = `/api/v${Constants.API_VERSION}${path}?${params}`;

  //Return options
  return {
    path,
    method: 'GET',
    host: Constants.HOST,
    port: 443,
    timeout: Constants.TIMEOUT,
  };
};

module.exports = BuildRequestOptions;