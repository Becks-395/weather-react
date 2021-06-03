import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main-sizing">
          <div className="weather-app">
            <div className="weather-info">
              <div className="row">
                <div className="col-6">
                  <h1 id="city">Barcelona</h1>
                  <ul>
                    <li>
                      Last updated: <span id="date"></span>,{" "}
                      <span id="description"></span>
                    </li>
                    <li>
                      Humidity:{" "}
                      <strong>
                        <span id="humidity">20</span>%
                      </strong>
                      , Wind:{" "}
                      <strong>
                        <span id="wind">3</span>km/h
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="col-6 current-temp">
                  <img src="" alt="" id="icon" />
                  <span id="temperature"></span>
                  <small className="weather-unit">
                    <a href="#" id="celcius-link" className="active">
                      20°C
                    </a>{" "}
                    |
                    <a href="#" id="farenheit-link">
                      °F
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <form id="search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control search-input"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    className="btn btn-primary w-100"
                    value="Search"
                  />
                </div>
              </div>
            </form>
            <div className="weather-forecast" id="forecast"></div>
          </div>
          <small>
            <a
              href="https://github.com/Becks-395/vanilla-weather-app"
              target="_blank"
            >
              Open source code
            </a>
            , by Becks Yates
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
