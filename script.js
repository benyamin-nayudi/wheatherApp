// `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=04e6727b1951a0214305fe9bde8394e4`
const container = document.querySelector('#cardContainer')

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = form.city.value;
    console.log(city)
    getWeather(city).then(res => {
        const weatherData = res.list[0]
        console.log(
            new Date(weatherData.dt * 1000)
        )
        console.log(weatherData);
        const time = new Date()
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
        const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=04e6727b1951a0214305fe9bde8394e4`)
        const data = await weatherApi.json();
        return data
    } catch (err) {
        console.log(err)
    }

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04e6727b1951a0214305fe9bde8394e4`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}