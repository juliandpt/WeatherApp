<div class="searcher">
  <div class="container">
    {#await weatherPromise}

    <h1>Cargando ciudad...</h1>

    <div class="row" style="margin-top: 10vh; margin-bottom: 10vh;">
      <div class="col-12 col-md-6 col">
        <div class="card bg-light" style="padding: 1.5em;">
          <div style="display: flex;">
            <div style="display: flex;">
              <img src="icons/location-arrow.svg" class="me-3" width="16" height="auto" alt="location" />

              <h5 class="no-margin placeholder-glow">
                <span class="placeholder col-1"></span>
              </h5>
            </div>

            <div style="margin-left: auto;">
              <h5 class="no-margin placeholder-glow">
                <span class="placeholder col-4"></span>
              </h5>
            </div>
          </div>

          <div class="mt-5 mb-5" style="text-align: center;">
            <h1 class="no-margin placeholder-glow">
              <span class="placeholder col-4"></span>
            </h1>

            <span class="placeholder col-4"></span>
          </div>

          <div>
            <div style="display: flex;">
              <img src="icons/wind.svg" class="me-3" width="16" height="auto" alt="wind" />

              <span class="placeholder col-1"></span>
            </div>

            <div style="display: flex;">
              <img src="icons/tear.svg" class="me-3" width="16" height="auto" alt="tear" />

              <span class="placeholder col-1"></span>
            </div>

            <div style="display: flex;">
              <img src="icons/cloud.svg" class="me-3" width="16" height="auto" alt="cloud" />

              <span class="placeholder col-1"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="row height50">
          <div class="col-6 col">
            <div class="card bg-light height100">
              <div class="card-body">
                <h5 class="card-title">Min temp</h5>
                <h3 class="card-text placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-6 col">
            <div class="card bg-light height100">
              <div class="card-body">
                <h5 class="card-title">Max temp</h5>
                <h3 class="card-text placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="row height50">
          <div class="col-6 col">
            <div class="card bg-light height100">
              <div class="card-body">
                <h5 class="card-title">Feels like:</h5>
                <h3 class="card-text placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-6 col">
            <div class="card bg-light height100">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h3 class="card-text placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {:then data}

    <div class="row" style="margin-top: 10vh; margin-bottom: 10vh;">
      <div class="col-12 col-md-6 col">
        <div class="card bg-light" style="padding: 1.5em;">
          <div style="display: flex;">
            <div style="display: flex;">
              <img src="icons/location-arrow.svg" class="me-3" width="16" height="auto" alt="location" />

              <h5 class="no-margin">
                { data.city }
              </h5>
            </div>

            <div style="margin-left: auto;">
              <h5 class="no-margin">
                { localTime() }
              </h5>
            </div>
          </div>

          <div class="mt-5 mb-5" style="text-align: center;">
            <h1 class="no-margin">
              { formatedGrades(data.temp) } ºC
            </h1>

            <span class="text-muted">
              { data.description }
            </span>
          </div>

          <div>
            <div style="display: flex;">
              <img src="icons/wind.svg" class="me-3" width="16" height="auto" alt="wind" />

              <p class="text-muted">
                { data.wind } m/s
              </p>
            </div>

            <div style="display: flex;">
              <img src="icons/tear.svg" class="me-3" width="16" height="auto" alt="tear" />

              <p class="text-muted">
                { data.humidity } %
              </p>
            </div>

            <div style="display: flex;">
              <img src="icons/cloud.svg" class="me-3" width="16" height="auto" alt="cloud" />

              <p class="text-muted">
                { data.clouds } %
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="row height50">
          <div class="col-6 col">
            <div class="card bg-light height100">
              <div class="card-body">
                <h5 class="card-title">Min temp:</h5>

                <h3 class="card-text justify-content-md-center">
                  { formatedGrades(data.temp_min) } ºC
                </h3>
              </div>
            </div>
          </div>
          <div class="col-6 col">
            <div class="card bg-light height100">
              <div class="card-body">
                <h5 class="card-title">Max temp:</h5>

                <h3 class="card-text height100">
                  { formatedGrades(data.temp_max) } ºC
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="row height50">
          <div class="col-6 col">
            <div class="card bg-light height100">
              <div class="card-body">
                <h5 class="card-title">Feels like:</h5>
                <h3 class="card-text">
                  { formatedGrades(data.feels_like) } ºC
                </h3>
              </div>
            </div>
          </div>
          <div class="col-6 col">
            <div class="card bg-light height100">
              <div class="card-body">
                <h5 class="card-title">Weather:</h5>
                
                <img src="images/weathers/1.png" width="50" height="auto" alt="cloud" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/await}

    <div class="row">
      <h2 style="margin-bottom: 2%; margin:top 5%;">Popular cities...</h2>

      {#each popularCities as popularCity}
      <div class="col-6 col-sm-4 col-md-3 col-lg-2" style="margin-bottom: 24px;">
        <div class="card borderless">
          <img src="/images/states/{popularCity}.jpg" alt="{popularCity}" style="object-fit: cover; aspect-ratio: 20 / 19; border-radius: 1em; margin-bottom: 12px;" />
          
          <a href="/{popularCity}" class="card-link stretched-link">
            <h6>{ popularCity }</h6>
          </a>
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>

<style>
h1 { 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

p { 
  margin: 0;
}

.col {
  padding: 0 12px 12px 12px;
}

.borderless {
  border: none;
}

.height50 {
  min-height: 50%;
}

.height100 {
  min-height: 100%;
}

.no-margin {
  margin: 0;
}
</style>

<script>
import { getPopularCities } from "../services/cities.js"
import { getWeatherDataByLocation } from "../services/querys.js"
import { getDate, formatedGrades, uppercase } from "../services/index.js"

let popularCities = getPopularCities()

var localTime = () => {
  const now = new Date();
  const hour = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')

  return hour + ':' + minutes
}

var getPosition = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

let weatherPromise = getPosition()
  .then(async (position) => {
    let { latitude, longitude } = position.coords

    return await getWeatherDataByLocation(latitude, longitude)
  })
  .catch((err) => {
    console.error(err.message);
  });
</script>