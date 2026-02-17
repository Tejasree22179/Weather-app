function getWeather(){

let city=document.getElementById("city").value;

if(city===""){
alert("Enter city name");
return;
}

/* Fake realistic weather generator */

let temp=Math.floor(Math.random()*15)+20;
let humidity=Math.floor(Math.random()*40)+40;
let wind=Math.floor(Math.random()*10)+3;

let conditions=["Sunny","Cloudy","Rainy","Windy","Stormy"];
let condition=conditions[Math.floor(Math.random()*conditions.length)];

document.getElementById("weather").innerHTML=`

<h2>${city}</h2>

<div class="temp">${temp}°C</div>

<div class="info">Condition : ${condition}</div>
<div class="info">Humidity : ${humidity}%</div>
<div class="info">Wind Speed : ${wind} km/h</div>

`;

}
