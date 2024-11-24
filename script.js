


// 3181c732432941ab5232504df31a4509
//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={APIkey}
//  https://www.freeiconspng.com/images/weather-icon-png
// http://openweathermap.org/img/wn/${iconCode}.png




let user_input = document.querySelector("input");
let btn = document.querySelector("button");
let cont = document.querySelector(".data_cont");

btn.addEventListener("click", () => {
    let city = user_input.value;
    getweatherdata(city);
});

const getweatherdata = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3181c732432941ab5232504df31a4509`);
    const data = await response.json();
    console.log(data);

    const weatherIcon = data.weather[0].main;
    const { name, main } = data;
    renderData(name, main, weatherIcon);
};

const weatherIcons = [
    { type: "Thunderstorm", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-rain.svg" },
    { type: "Drizzle", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg" },
    { type: "Rain", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg" },
    { type: "Snow", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-snow.svg" },
    { type: "Mist", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-haze.svg" },
    { type: "Smoke", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg" },
    { type: "Haze", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-haze.svg" },
    { type: "Dust", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hurricane.svg" },
    { type: "Fog", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-fog.svg" },
    { type: "Sand", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hurricane.svg" },
    { type: "Ash", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hurricane.svg" },
    { type: "Squall", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg" },
    { type: "Tornado", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/tornado.svg" },
    { type: "Clear", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg" },
    { type: "Clouds", icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme.svg" }
]; 

const renderData = (name, tempData, weatherIcon) => {
    const currRenderData = weatherIcons.find((data) => data.type === weatherIcon);

    cont.innerHTML = `



    
        <div class="icon">
            <img src="${currRenderData.icon}" alt="icon" />
        </div>
        <div class="type">${currRenderData.type}</div>
        <div class="cityname">${name}</div>
        <div class="temp">${Math.floor(tempData.temp - 273.15)}ºC</div>
        <div class="description">extra</div>
    `;
};
