var inputEl = document.querySelector(".city");
var btn = document.querySelector("#btn");
var cityNameEl = document.querySelector("#city-name");


var apikey = "e34bcd1bd1fa58858404a93981307a77"

function getCurrWeather (cityName) {
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
    console.log(queryUrl)
    fetch(queryUrl)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        const name = data.name;
        const humidity = data.main.humidity;
        const temp = data.main.temp;
        const feels_like = data.main.feels_like;
        const wind = data.main.wind;
        document.getElementById("current-city-name").textContent = `City Name: ${name}`;
        document.getElementById("current-city-temp").textContent = `Temperature: ${temp}`;
        document.getElementById("current-city-humidity").textContent = `Humidity: ${humidity}`;
        document.getElementById("current-city-feels_like").textContent = `Feels Like: ${feels_like}`;
        document.getElementById("current-city-wind").textContent = `Wind Speed: ${wind}`;



       // cityNameEl.textContent = 'City Name: ${humidity}'
        // cityNameEl.textContent = `City Name: ${data.name}`
        // cityNameEl.textContent = `City Name: ${data.name}`
    })
}
function fiveDayForecast (cityName) {
    var queryUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apikey}`
    console.log(queryUrl2)
    fetch(queryUrl2)
    .then(function (response) {
        console.log(response)
        return response.json()
})

.then(function(data) {
console.log(data);

const name = data.city.name;

const day1Forecast= data.list[0].dt_txt;
const day2Forecast = data.list[1].dt_txt;
const day3Forecast = data.list[2].dt_txt;
const day4Forecast = data.list[3].dt_txt;
const day5Forecast = data.list[4].dt_txt;

const day1Temp= data.list[0].main.temp;
const day2Temp = data.list[1].main.temp;
const day3Temp = data.list[2].main.temp;
const day4Temp = data.list[3].main.temp;
const day5Temp = data.list[4].main.temp;

const day1Wind= data.list[0].wind.speed;
const day2Wind = data.list[1].wind.speed;
const day3Wind = data.list[2].wind.speed;
const day4Wind = data.list[3].wind.speed;
const day5Wind = data.list[4].wind.speed;

document.getElementById("Monday").textContent = `City Name: ${name}`;
document.getElementById("Monday").textContent = `Monday: ${day1Forecast}`;
document.getElementById("Teusday").textContent = `Tuesday: ${day2Forecast}`;
document.getElementById("Wednesday").textContent = `Wednesday: ${day3Forecast}`;
document.getElementById("Thursday").textContent = `Thursday: ${day4Forecast}`;
document.getElementById("Friday").textContent = `Friday: ${day5Forecast}`;


document.getElementById("Monday-temp").textContent = `Temp: ${day1Temp}`;
document.getElementById("Teusday-temp").textContent = `Temp: ${day2Temp}`;
document.getElementById("Wednesday-temp").textContent = `Temp: ${day3Temp}`;
document.getElementById("Thursday-temp").textContent = `Temp: ${day4Temp}`;
document.getElementById("Friday-temp").textContent = `Temp: ${day5Temp}`;

document.getElementById("Monday-wind").textContent = `Wind Speed: ${day1Wind} mph`;
document.getElementById("Teusday-wind").textContent = `Wind Speed: ${day2Wind}`;
document.getElementById("Wednesday-wind").textContent = `Wind Speed: ${day3Wind}`;
document.getElementById("Thursday-wind").textContent = `Wind Speed: ${day4Wind}`;
document.getElementById("Friday-wind").textContent = `Wind Speed: ${day5Wind}`;

})


   // })
  
}


btn.addEventListener("click", function (event) {
    // prevent default prevents the browser from default behaviour of relading/refreshing when this button is clicked
    event.preventDefault()
    console.log(inputEl.value)
    getCurrWeather(inputEl.value)
    fiveDayForecast(inputEl.value)


})
// getCurrWeather(inputEl.value)

