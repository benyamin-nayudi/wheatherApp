// `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=04e6727b1951a0214305fe9bde8394e4`
const container = document.querySelector('#cardContainer')

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = form.city.value;
    console.log(city)

    getWeather(city).then(res => {
        const weatherData = res
        const iranTimeZone = 3.5 * 60 * 60 * 1000;
        const citySunset = weatherData.sys.sunset * 1000 ; 
        const citySunrise = weatherData.sys.sunrise * 1000 ;
        const cityTimezone = weatherData.timezone * 1000 ; 

        let citySunsetTime = new Date(citySunset - iranTimeZone + cityTimezone).getTime()

        let citySunriseTime = new Date(citySunrise - iranTimeZone + cityTimezone).getTime()

        const cityCurrentTime = new Date().getTime() - (3.5 * 60 * 60 * 1000) + (cityTimezone)

        
        let src ;
        let icon ;
        if(cityCurrentTime > citySunriseTime && cityCurrentTime < citySunsetTime){
            if (weatherData.weather[0].main === 'Clouds'){
                src = 'img/cloudy-day.jpg'
                icon = '<i class="fas fa-cloud"></i>'
            }else{
                src = 'img/clear-day.jpg'
                icon = '<i class="far fa-sun"></i>'
            }
        }else{
            if (weatherData.weather[0].main === 'Clouds'){
                src = 'img/cloudy-night.jpg'
                icon = '<i class="fas fa-cloud-moon"></i>'
            }else{
                src = 'img/clear-night.jpg'
                icon = '<i class="fas fa-moon"></i>'
            }
            
        }

        container.innerHTML = `
        <div class="card mx-auto mt-4 cardDiv" style="width: 18rem;">
            <img src=${src} class="card-img-top" alt="weather">
            <div class="card-body cardBody">
                <div class="font-awesome">
                   ${icon}
                </div>
                <div class="cardText pt-3">
                    <p class="city-name">${weatherData.name.toUpperCase()}</p>
                    <p class="weather">${weatherData.weather[0].main}</p>
                    <p class="degree">${Math.floor(weatherData.main.temp - 273)} °C</p>
                </div>
            </div>
        </div>
        `
    })

})

const getWeather = async (city) => {
    try {
        const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04e6727b1951a0214305fe9bde8394e4`)
        const data = await weatherApi.json();
        return data
    } catch (err) {
        console.log(err)
    }

}