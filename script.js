const apiKey = '77c75aa03fa0d8bfb9d4e053cc9b56c0';
var cityInput = "Atlanta";
var title = document.getElementById("title");
var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHumidity = document.getElementById("currentHumidity");
var searchBtn = document.getElementById("searchButton");
var WeatherDisplay = document.getElementById("currentWeatherDisplay");
var fiveDayReport = document.getElementById("fiveDayReport");
searchBtn.addEventListener('click', mainFunction)

function mainFunction(event) {
 event.preventDefault();
 cityInput = document.querySelector('input').value;
 console.log(cityInput);

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=${apiKey}`) 
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var lat = data[0].lat;
    var lon = data[0].lon;

    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`) 
    .then(function (response) {
      return response.json();
})
    .then(function (data) {
        WeatherDisplay.style.display = "block";
        fiveDayReport.style.display = "block";
        console.log(data);
        currentWeatherDisplay(data.list[0]);
        firstDay(data.list[7]);
        secondDay(data.list[15]);
        thirdDay(data.list[23]);
        fourthDay(data.list[31]);
        fifthDay(data.list[9]);

})

})
}


function currentWeatherDisplay(data) {
    let date = new Date().toLocaleDateString();
    console.log(date);
    console.log(data);
    var currentWeatherIcon = src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    document.getElementById("currentWeatherIcon").src = currentWeatherIcon;
    title.innerHTML = `${cityInput} (${date}) `;
    var currentTempFar = tempConverter(data.main.temp);
    currentTemp.innerHTML = `Temp: ${currentTempFar}°F`;
    currentWind.innerHTML = `Wind: ${data.wind.speed} MPH`;
    currentHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
}

function firstDay (data) {
    var reportTitle1 = document.getElementById("reportTitle1");
    var temp1 = document.getElementById("temp1");
    var wind1 = document.getElementById("wind1");
    var humidity1 = document.getElementById("humidity1");
    var tempFar1 = tempConverter(data.main.temp);
    var WeatherIcon1 = src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.getElementById("WeatherIcon1").src = WeatherIcon1;
    temp1.innerHTML = `Temp: ${tempFar1}°F`;
    wind1.innerHTML = `Wind: ${data.wind.speed} MPH`;
    humidity1.innerHTML = `Humidity: ${data.main.humidity}%`;
}

function secondDay (data) {
    // const today = new Date().toLocaleDateString;
    // const tomorrow = new Date().toLocaleDateString;
    // tomorrow.setDate(today.getDate() + 1);
    // console.log(tomorrow);
    var reportTitle2 = document.getElementById("reportTitle2");
    var temp2 = document.getElementById("temp2");
    var wind2 = document.getElementById("wind2");
    var humidity2 = document.getElementById("humidity2");
    var tempFar = tempConverter(data.main.temp);
    var WeatherIcon2 = src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.getElementById("WeatherIcon2").src = WeatherIcon2;
    temp2.innerHTML = `Temp: ${tempFar}°F`;
    wind2.innerHTML = `Wind: ${data.wind.speed} MPH`;
    humidity2.innerHTML = `Humidity: ${data.main.humidity}%`;
}

function thirdDay (data) {
    var reportTitle3 = document.getElementById("reportTitle3");
    var temp3 = document.getElementById("temp3");
    var wind3 = document.getElementById("wind3");
    var humidity3 = document.getElementById("humidity3");
    var tempFar = tempConverter(data.main.temp);
    var WeatherIcon3 = src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.getElementById("WeatherIcon3").src = WeatherIcon3;
    temp3.innerHTML = `Temp: ${tempFar}°F`;
    wind3.innerHTML = `Wind: ${data.wind.speed} MPH`;
    humidity3.innerHTML = `Humidity: ${data.main.humidity}%`;
}

function fourthDay (data) {
    var reportTitle4 = document.getElementById("reportTitle4");
    var temp4 = document.getElementById("temp4");
    var wind4 = document.getElementById("wind4");
    var humidity4 = document.getElementById("humidity4");
    var tempFar = tempConverter(data.main.temp);
    var WeatherIcon4 = src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.getElementById("WeatherIcon4").src = WeatherIcon4;
    temp4.innerHTML = `Temp: ${tempFar}°F`;
    wind4.innerHTML = `Wind: ${data.wind.speed} MPH`;
    humidity4.innerHTML = `Humidity: ${data.main.humidity}%`;
}

function fifthDay (data) {
    var reportTitle5 = document.getElementById("reportTitle5");
    var temp5 = document.getElementById("temp5");
    var wind5 = document.getElementById("wind5");
    var humidity5 = document.getElementById("humidity5");
    var tempFar = tempConverter(data.main.temp);
    var WeatherIcon5 = src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.getElementById("WeatherIcon5").src = WeatherIcon5;
    temp5.innerHTML = `Temp: ${tempFar}°F`;
    wind5.innerHTML = `Wind: ${data.wind.speed} MPH`;
    humidity5.innerHTML = `Humidity: ${data.main.humidity}%`;
}


function tempConverter (tempKelvin) {
    var tempFar = (tempKelvin - 273.15) * 9/5 + 32;
    tempFar = tempFar.toFixed(2);
    return tempFar; 
}