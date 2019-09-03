

function query() {
  var apiKey = '92cdcdc2ac5c211e6900789a350685d6';
  var city = document.getElementById("weatherinput").innerHTML;
  var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  console.log(city);
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    var data = this.response;
    var weather = JSON.parse(data);
    var message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    document.getElementById("weather").innerHTML = message;
  }
  request.send();
}

