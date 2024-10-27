const inputBar = document.getElementById("input");
const searchbtn = document.getElementById("btn");
const weatherIcon = document.getElementById("weather-icon");
const  temp = document.getElementById("temp");
const city = document.getElementById("city");
const  humidity= document.getElementById("humidity");
const  wind= document.getElementById("wind");
const error = document.getElementById("error");
const weather = document.getElementById("weather");
const apiKey = "f0c274504d925a1211c3d086348ecaa8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(town){
    const response = await fetch(apiUrl + town + `&appid=${apiKey}`);
     
     if(response.status == 404){
        error.style.display = "block";
        weather.style.display= "none";
     }else{
        var data = await response.json();
     
        console.log(data);
    
        city.innerHTML= data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main== "Clouds"){
                weatherIcon.src="images/clouds.png";
            }else if(data.weather[0].main== "Clear"){
                weatherIcon.src="images/clear.png";
            }else if(data.weather[0].main== "Rain"){
                weatherIcon.src="images/rain.png";
            }else if(data.weather[0].main== "Drizzle"){
                weatherIcon.src="images/drizzle.png";
            }else if(data.weather[0].main== "Mist"){
                weatherIcon.src="images/mist.png";
            };
           weather.style.display = "block";
           error.style.display = "none";
     }

    
    }

searchbtn.addEventListener("click",()=>{
    checkWeather(inputBar.value)
});
inputBar.addEventListener("keydown",e=>{
    if(e.key === "Enter"){
        searchbtn.click()
    }
});