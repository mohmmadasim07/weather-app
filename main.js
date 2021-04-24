const api = {
  key: "de559ff81f2bb0d32d06b55438e72ff2",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

const button = document.querySelector(".search");

const value = document.querySelector(".value");

button.addEventListener("click", setquery);

function setquery() {
  getResults(value.value);
}
function getResults(event) {
  fetch(`${api.baseurl}weather?q=${event}&units=metric&appid=${api.key}`)
    .then(function (weather) {
      return weather.json();
    })
    .then(displayResults)
    .catch(function () {
      console.log("something is broken");
    });
}
function displayResults(data) {
  let city = document.querySelector(".city");
  let temp = document.querySelector(".temp");
  let wind = document.querySelector(".wind");
  let pressure = document.querySelector(".pressure");
  let humidity = document.querySelector(".humidity");

  /*****/

  if (value.value === "") {
    city.innerHTML = "Please enter correct city";
  } else {
    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp + "<span>&#176;</span>";
    wind.innerHTML = data.wind.speed;
    pressure.innerHTML = data.main.pressure;
    humidity.innerHTML = data.main.humidity;
  }
}
