const API_URL = 'https://api.openweathermap.org';
const API_KEY = 'e4c4a816105585e0decb59b122fb2e21';
import axios from 'axios';
import Notiflix from 'notiflix';
async function getWeatherStandart(){
    try{
        const response = await axios.get(`${API_URL}/data/2.5/weather?q=Kyiv&units=metric&appid=${API_KEY}`);
        return response.data;
    }
        catch(err){
            Notiflix.Notify.failure(err);
        }
    }
    
async function getWeatherGeo(position){
    const searchParams = new URLSearchParams({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        units: "metric",
        appid: API_KEY,
      });
    try{
        const response = await axios.get(`${API_URL}/data/2.5/weather?${searchParams}`);
        return response.data;
        }
        catch(err){
            Notiflix.Notify.failure(err);
        }
    }
export {getWeatherStandart,getWeatherGeo};