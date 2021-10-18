// api.openweathermap.org/data/2.5/weather?q={city name}&appid=04e6727b1951a0214305fe9bde8394e4

const form = document.querySelector('form')
form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const city = form.city.value;
    console.log(city)
    // getWeater(city)
    fetch(`api.openweathermap.org/data/2.5/weather?q=miami&appid=04e6727b1951a0214305fe9bde8394e4`)
    .then(res => res.json())
    .then(data => console.log(data))

})

const getWeater = async(city) => {
    // try{
    //     const weatherApi = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=04e6727b1951a0214305fe9bde8394e4`)
    //     const data = await weatherApi.json();
    //     console.log(data)
    // } catch(err){
    //     console.log(err)
    // }

    
}