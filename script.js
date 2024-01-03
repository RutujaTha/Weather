const apiKey = "58932f6ebb93b38c5e84b66387379cec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Nagpur";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
}

checkWeather();