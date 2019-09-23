class Weather {
  constructor(city, state) {
    this.apikey = '48991cc58c0a5fa0f95fe12a805786b6';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={48991cc58c0a5fa0f95fe12a805786b6}.json`)

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}