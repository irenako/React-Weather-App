import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="app">
          <div class="search">
            <form class="search-form" id="search-form">
              <div class="row">
                <div class="col-6">
                  <input
                    type="text"
                    placeholder="Enter a city"
                    required
                    autocomplete="off"
                    class="form-control"
                    id="input-city"
                  />
                </div>
                <div class="col-3">
                  <button
                    type="submit"
                    class="form-control btn btn-dark"
                    id="search-button"
                    value="Search"
                  >
                    Find
                  </button>
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-outline-dark" id="btn2">
                    📍
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="description-full">
            <ul>
              <li class="city" id="currentCity">
                Kyiv
              </li>
              <li class="day" id="currentDayTime">
                Tuesday 11:40
              </li>
              <li class="description" id="currentDescription">
                Description
              </li>
            </ul>
          </div>
          <div class="current-weather">
            <div class="row">
              <div class="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="sun"
                  class="weather-icon float-left"
                  id="icon"
                />
                <span class="temperature" id="currenttemp">
                  30
                </span>
                <a href="/#" id="celcius">
                  °C
                </a>
                |
                <a href="/#" id="fahrenheit">
                  °F
                </a>
              </div>
              <div class="col-6">
                <ul>
                  <li id="humidity">Humidity: 44%</li>
                  <li id="wind">Wind: 11km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="weather-week" id="forecast"></div>
          <p>
            Open-source code
            <a
              href="https://github.com/irenako/React-Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub
            </a>
            and
            <a
              href="react-weather-app-irena-koval.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
            by Irena Koval
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
