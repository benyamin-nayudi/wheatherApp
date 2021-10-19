// `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=04e6727b1951a0214305fe9bde8394e4`
const container = document.querySelector('#cardContainer')


// console.log(new Date().toUTCString().slice(17,26))
// console.log(new Date(new Date().getTime() - (3.5 * 60 * 60 * 1000) + (3600 * 1000)))


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = form.city.value;
    console.log(city)

    getWeather(city).then(res => {
        const weatherData = res
        let icon;
        const iranTimeZone = 3.5 * 60 * 60 * 1000;
        const citySunset = weatherData.sys.sunset * 1000 ; 
        const citySunrise = weatherData.sys.sunrise * 1000 ;
        const cityTimezone = weatherData.timezone * 1000 ; 

        let citySunsetTime = new Date(citySunset - iranTimeZone + cityTimezone).getTime()
        console.log("citySunsetTime:", new Date(citySunsetTime).getHours())

        let citySunriseTime = new Date(citySunrise - iranTimeZone + cityTimezone).getTime()
        console.log("citySunriseTime:", new Date(citySunriseTime).getHours())

        const cityCurrentTime = new Date().getTime() - (3.5 * 60 * 60 * 1000) + (cityTimezone)
        console.log("cityCurrentTime:", new Date(cityCurrentTime).getHours())

        
        let src ;
        if(cityCurrentTime > citySunriseTime && cityCurrentTime < citySunsetTime){
            src =  'jasem' 
        }else{
            src =  'sfsdfsfd' 
            console.log('night')
            
        }

        console.log(src)

        // console.log(weatherData, " cityTime :" + time, 'now: ' + now);


        container.innerHTML = `
        <div class="card mx-auto mt-4 cardDiv" style="width: 18rem;">
            <img src="img/cloudy-day.jpg" class="card-img-top" alt="weather">
            <div class="card-body cardBody">
                <div class="font-awesome">
                   <i class="far fa-sun"></i>
                </div>
                <div class="cardText pt-3">
                    <p class="city-name">${weatherData.name.toUpperCase()}</p>
                    <p class="weather">${weatherData.weather[0].main}</p>
                    <p class="degree">${weatherData.main.temp} °C</p>
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

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04e6727b1951a0214305fe9bde8394e4`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}