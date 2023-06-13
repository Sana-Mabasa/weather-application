let now = new Date();
let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
let day = days[now.getDay()];
let month = months[now.getMonth()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
let date = now.getDate();

let h1 = document.querySelector("h1");
h1.innerHTML = ` ${day} ${date}  ${month}`;
let h5 = document.querySelector("h5");
h5.innerHTML = `${hours}:${minutes}`;

// feature 2
function enter(event) {
  event.preventDefault();
  place.innerHTML = ` ${searchInput.value}`;

  function displayWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let humiditySpeed = Math.round(response.data.main.humidity);
    let windSpeed = response.data.wind.speed;
    let h2 = document.querySelector("#temp");
    h2.innerHTML = `${temperature}°`;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = ` HUMIDITY :${humiditySpeed}%`;
    let wind = document.querySelector("#wind");
    wind.innerHTML = ` WIND : ${windSpeed} KM/H`;
  }
  let apiKey = `2daf65f0cdaa917f11026e8a128ce271`;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  axios.get(url).then(displayWeather);
}

let form = document.querySelector("#search");
form.addEventListener("submit", enter);
let searchInput = document.querySelector("#search-input");
let place = document.querySelector(".city");
