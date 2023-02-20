const API_URL = 'https://api.openweathermap.org';
const API_KEY = 'e4c4a816105585e0decb59b122fb2e21';
import axios from 'axios';
import Notiflix from 'notiflix';
import { format } from 'date-fns';
// const test = document.querySelector(".container")
async function getWeatherStandart(){
    try{
        const response = await axios.get(`${API_URL}/data/2.5/weather?q=Toronto&units=metric&appid=${API_KEY}`);
        return response.data;
    }
        catch(err){
            // Notiflix.Notify.failure("Something went wrong");
            console.log(err)
        }
    }
    
async function getWeatherGeo(position){
    try{
        const response = await axios.get(`${API_URL}/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`);
        return response.data;
        }
        catch(err){
            Notiflix.Notify.failure(err);
        }
    }

async function createMarkup(promise){
    // console.log(`LOOK HERE${promise}`)
        try{
            const {main, weather, dt, name} = await promise;
            const date = dt*1000;
            const markUp = `<div class="weather-card">
    <div class="weather-card__top">
    <p class="weather-card__temp">${Math.round(main.temp)}°</p>
    <div class="weather-card__location">
    <p class="weather-card__mood">${weather[0].main}</p> 
    <p class="weather-card__city-name weather-card__text--block">
    <svg class = "weather-card__icon" viewBox="0 0 37 32"><path d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z"></path>
    </svg>${name}</p>
    </div>
    </div> 
    <img src=https://openweathermap.org/img/wn/${weather[0].icon}@4x.png alt="weather icon" class="weather-card__img"/>
    <p class="weather-card__date">${format(new Date(date), 'eee')}</p>
    <p class="weather-card__date">${format(new Date(date), 'dd LLL y')}</p>
    <a  href="https://sinoptik.ua" class="weather-card__link weather-card__text--block" target="_blank" rel="noreferrer noopener">weather for week</a></div>`;
    const element = document.querySelector(".weather");
    // element.insertAdjacentHTML('beforeend',markUp);
    element.innerHTML = markUp;
    }
    catch(err){
        // Notiflix.Notify.failure(err.text);
        console.log(err);
    }
}
// https://openweathermap.org/img/wn/${y.weather[0].icon}@4x.png />`

 export function addWeather() {
    let markUp = "";
    function success(position) {
        createMarkup(getWeatherGeo(position))
    }
    function error() {
        createMarkup(getWeatherStandart())
    }
    error()
    if (!navigator.geolocation) {
        error();
        Notiflix.Notify.failure('Geolocation is not supported by your browser');
    } else {
    return navigator.geolocation.getCurrentPosition(success, error); 
   
    }
  }