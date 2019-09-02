// function getWeatherUpdate() {

//     let getInputValue = querySelector('input').value;
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5651b311f4bde3b478a18fbf9b55efcd`)
//         .then(function(response) {
//             weatherData = response;
//             console.log(response);
//             // handle success  
//             document.querySelector('p').innerHTML = response.data.weather[0].main;
//             document.querySelector('p').innerHTML = `City: ${response.data.name}`;
//             document.querySelector('p').innerHTML = `Now: ${response.data.weather[0].description}`

//         })
//         .catch(function(error) {
//             alert("City not found");
//         })
//         .finally(function() {
//             // always executed
//         });
// }

function getWeather() {

    let city = document.querySelector('input').value;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5651b311f4bde3b478a18fbf9b55efcd`)
        .then(function(response) {
            // handle success  
            weatherData = response;
            console.log(response);
            // document.querySelector('heading h2').style = "display:none";
            let icone = weatherData.data.weather[0].icon;
            temperature = Math.round(temperature = weatherData["data"]["main"]["temp"]);
            document.querySelector('p').innerHTML = `City: ${city}`;
            document.querySelector("p").innerHTML = weatherData.data.weather[0].description;
            document.querySelector('p').innerHTML = ` <br>Now : ${Math.floor(response.data.main.temp - 273.15)} <span>°C</span>`;
            //document.querySelector('').innerHTML = `Wind Speed: ${response.data.wind.speed} min/sec`;

        })
        .catch(function(error) {
            // alert("City not found");
        })
        .finally(function() {
            // always executed
        });

}