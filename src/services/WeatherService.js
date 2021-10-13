import axios from "axios";

const API_KEY = "b162087553094b02a74122317211310"

export default class WeatherService{
    getWeather(city){
      return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${3}`)  
    }
}