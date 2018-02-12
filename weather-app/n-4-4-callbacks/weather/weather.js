const request = require('request');

var getWeather= (latitude, longitude, callback) =>{
    
    
      request({
    url: `https://api.darksky.net/forecast/02b10cd12e9245e4af358b3369327a11/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(error){
        console.log("Unable to connect to Forecast.io servers")
    }else if(response.statusCode === 400){
        console.log("Unable to fetch weatcher")
        
    }else if(!error && response.statusCode === 200){
        console.log("temperature:" +  body.currently.temperature);
    }
      
    
  });
    
    
    
    
};


module.exports.getWeather = getWeather;



const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;