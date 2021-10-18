// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04e6727b1951a0214305fe9bde8394e4`
const container = document.querySelector('#cardContainer')

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = form.city.value;
    console.log(city)
    getWeather(city).then(res => {
        const icon = <i class="fas fa-cloud-moon"></i>

        console.log(res);
        container.innerHTML = `
         <div class="card mx-auto mt-4 cardDiv" style="width: 18rem;">
                <img src="img/cloudy-day.jpg" class="card-img-top" alt="weather">
                <div class="card-body cardBody">
                    <div class="font-awesome">
                        <i class="fas fa-cloud-moon"></i>
                    </div>
                    <div class="cardText pt-3">
                        <p class="city-name">MIAMI</p>
                        <p class="weather">clear</p>
                        <p class="degree">15.4 C</p>
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