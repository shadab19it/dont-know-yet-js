const locInput = document.querySelector(".loc-input");
const submitBtn = document.querySelector("#submit-btn");
const cityName = document.querySelector(".city-name");
const temp = document.querySelector(".temp");
const weatherView = document.querySelector(".weather-view-box");
const loading = document.querySelector(".loading");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "7e3c59f85c99bce6a9d92c566118f043";

submitBtn.addEventListener("click", async () => {
  try {
    let query = locInput.value;
    loading.style.display = "block";
    // fetch a data from api
    const res = await fetch(`${API_LINK}${query}&units=metric&apikey=${API_KEY}`);
    const result = await res.json();
    console.log(result);

    if (result) {
      weatherView.style.display = "block";
      loading.style.display = "none";
      if (result.cod === "404") {
        weatherView.classList.add("weather-notFound");
        weatherView.classList.remove("weather-Found");
        temp.textContent = `${result.message}`;
      } else if (result.cod === "400") {
        weatherView.classList.add("weather-notFound");
        weatherView.classList.remove("weather-Found");
        temp.textContent = "Please Enter any City Name";
      } else {
        weatherView.classList.add("weather-Found");
        weatherView.classList.remove("weather-notFound");
        cityName.textContent = result?.name;
        temp.textContent = `${result?.main.temp.toFixed(1)}`;

        // create a deg tag
        let degNode = document.createElement("sup");
        degNode.classList.add("deg");
        let degText = document.createTextNode("o");
        degNode.appendChild(degText);
        temp.appendChild(degNode);
      }
    }
  } catch (err) {
    console.log(err);
  }
});
