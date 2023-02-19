const API_URL = 'https://api.openweathermap.org';
const API_KEY = 'e4c4a816105585e0decb59b122fb2e21';
import Notiflix from 'notiflix';
import { format } from 'date-fns';
// const test = document.querySelector(".container")
async function getWeatherStandart(){
    try{
        const response = await fetch(`${API_URL}/data/2.5/weather?q=Toronto&units=metric&appid=${API_KEY}`);
        return await response.json();
    }
        catch(err){
            Notiflix.Notify.failure(err.text);
        }
    }
    
async function getWeatherGeo(position){
    try{
        const response = await fetch(`${API_URL}/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`);
        return await response.json();
        }
        catch(err){
            Notiflix.Notify.failure(err.text);
        }
    }

async function createMarkup(promise){
        try{
            const {main, weather, dt, name} = await promise.then(res=>res);
            const date = dt*1000;
            const markUp = `<div class="weather-card">
    <div class="weather-card__top">
    <p class="weather-card__temp">${Math.round(main.temp)}°</p>
    <div class="weather-card__location">
    <p class="weather-card__mood">${weather[0].main}</p> 
    <p class="weather-card__city-name weather-card__text--block">
    <svg class = "weather-card__icon">
    <use href="/symbol-defs.a8b2e413.svg#icon-location"></use></svg>${name}</p>
    </div>
    </div> 
    <img src=https://openweathermap.org/img/wn/${weather[0].icon}@4x.png alt="weather icon" class="weather-card__img"/>
    <p class="weather-card__date">${format(new Date(date), 'eee')}</p>
    <p class="weather-card__date">${format(new Date(date), 'dd LLL y')}</p>
    <a  href="https://sinoptik.ua" class="weather-card__link weather-card__text--block">weather for week</a></div>`;
    const element = document.querySelector(".weather");
    // element.innerHTM="";
    // element.innerHTML=markUp;
    element.insertAdjacentHTML('beforeend',markUp);
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
        Notiflix.Notify.warning("We haven`t got your geolocation, so look at weather in Toronto");
    }
    if (!navigator.geolocation) {
        error();
        Notiflix.Notify.failure('Geolocation is not supported by your browser');
    } else {
    return navigator.geolocation.getCurrentPosition(success, error); 
   
    }
  }