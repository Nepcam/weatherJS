// Init weather object
const weather = new Weather('Boston', 'MA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');


weather.getWeather()
  .then(results => {
    console.log(results)
  })
  .catch(err => console.log(err));