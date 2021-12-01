const buildRequestOptions = require("./BuildRequestOptions.js");
const returnObject = require("./returnObject.js");
const https = require("https");

const request = (path, params) => {
    let options = buildRequestOptions(path, params);

    return new Promise((resolve, reject) => {
      //Perform request
      let req = https.request(options, (res) => {
        let body = [];

        //Set body on data
        res.on("data", (chunk) => {
          body.push(chunk);
        });

        //On end, end the Promise
        res.on("end", () => {
          try {
            body = Buffer.concat(body);
            body = body.toString();

            //Check if page is returned instead of JSON
            if (body.startsWith("<!DOCTYPE html>")) {
              Utils._WARN_("Invalid request", "There was a problem with your request. The parameter(s) you gave are missing or incorrect.");
            } else if (body.startsWith("Throttled")) {
              Utils._WARN_("Throttled request", "There was a problem with request limit.");
            }

            //Attempt to parse
            body = JSON.parse(body);
          }
          catch (error) {
            reject(error);
          }

          //Create return object
          resolve(
            returnObject(
              !(res.statusCode < 200 || res.statusCode >= 300),
              res.statusMessage,
              res.statusCode,
              body
            )
          );
        });
      });

      //On error, reject the Promise
      req.on("error", (error) => reject(error));

      //On timeout, reject the Promise
      req.on("timeout", () => {
        req.abort();
        reject(new Error(`CoinGecko API request timed out. Current timeout is: ${CoinGecko.TIMEOUT} milliseconds`));
      });

      //End request
      req.end();
    });
};

module.exports = request;
