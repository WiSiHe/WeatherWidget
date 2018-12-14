var Oslo_Data = {};
var London_Data = {};
var Minsk_Data = {};

function setup() {
  Oslo_Data = loadJSON('http://api.openweathermap.org/data/2.5/weather?id=6453366&appid=1cbcfef8738f3d6aa9e6d2e813d312c2&units=metric',gotData);
  London_Data = loadJSON('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=1cbcfef8738f3d6aa9e6d2e813d312c2&units=metric',gotData_2);
  Minsk_Data = loadJSON('http://api.openweathermap.org/data/2.5/weather?id=625144&appid=1cbcfef8738f3d6aa9e6d2e813d312c2&units=metric',gotData_3);
}
function update_api(){
  Oslo_Data = loadJSON('http://api.openweathermap.org/data/2.5/weather?id=6453366&appid=1cbcfef8738f3d6aa9e6d2e813d312c2&units=metric',gotData);
  London_Data = loadJSON('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=1cbcfef8738f3d6aa9e6d2e813d312c2&units=metric',gotData_2);
  Minsk_Data = loadJSON('http://api.openweathermap.org/data/2.5/weather?id=625144&appid=1cbcfef8738f3d6aa9e6d2e813d312c2&units=metric',gotData_3);
}
function gotData(data){
  document.getElementById("Oslo_temp").innerHTML = Oslo_Data.main.temp;
  document.getElementById("Oslo_desc").innerHTML = Oslo_Data.weather[0].description;
  document.getElementById("Oslo_time").innerHTML = moment().format('hh:mm a'); 
}
function gotData_2(data){
  document.getElementById("London_temp").innerHTML = London_Data.main.temp;
  document.getElementById("London_desc").innerHTML = London_Data.weather[0].description;
  document.getElementById("London_time").innerHTML = moment().subtract(1, 'hours').format('hh:mm a');
}
function gotData_3(data){
  document.getElementById("Minsk_temp").innerHTML = Minsk_Data.main.temp;
  document.getElementById("Minsk_desc").innerHTML = Minsk_Data.weather[0].description;
  document.getElementById("Minsk_time").innerHTML = moment().add(2, 'hours').format('hh:mm a');
}
function update_all(){
  update_api();
  gotData(Oslo_Data);
  gotData_2(London_Data);
  gotData_3(Minsk_Data);
}

document.addEventListener("DOMContentLoaded", function(event) { 
  setInterval(function() {
    update_all();
  }, 60 * 1000);
});




