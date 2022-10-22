<svelte:head>
  <title>{ uppercase($page.params.city) } | Weather?</title>
</svelte:head>

<div class="container">
  <div class="row my-5">
    {#await weatherPromise}

    <div class="card" aria-hidden="true">
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12"></span>
        </p>
      </div>
    </div>

    {:then data}

    <div class="col-12 p-3">
      <div class="card text-bg-light">
        <div class="card-body d-flex justify-content-between align-center px-5 py-5">
          <div>
            <p class="mb-2">
              { data.description }
            </p>

            <div class="d-flex justify-center align-center">
              <h1 class="display-2 me-5 mb-0">
                <strong>{formatedGrades(data.temp)}º</strong>
              </h1>

              <div class="d-flex flex-column justify-center align-center my-auto">
                <span class="mb-1">
                  { getDate() }
                </span>

                <div class="d-flex justify-center align-center">
                  <img src="icons/location.svg" width="24" height="auto" alt="location" class="me-1">

                  { data.city }, { data.country }
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src="images/weathers/{ data.icon }.png" width="200" height="auto" alt="icon">
          </div>
        </div>
      </div>
    </div>

    <div class="col-3 p-3">
      <div class="card text-bg-light d-flex flex-column">
        <div class="card-body">
          <p class="card-title">
            Feels like:
          </p>

          <h1 class="card-text display-6 text-center">
            { formatedGrades(data.feels_like) }º
          </h1>
        </div>
      </div>
    </div>

    <div class="col-3 p-3">
      <div class="card text-bg-light">
        <div class="card-body">
          <p class="card-title">
            Max:
          </p>

          <h1 class="card-text display-6 text-center">
            { formatedGrades(data.temp_max) }º
          </h1>
        </div>
      </div>
    </div>

    <div class="col-3 p-3">
      <div class="card text-bg-light">
        <div class="card-body">
          <p class="card-title">
            Min:
          </p>

          <h1 class="card-text display-6 text-center">
            { formatedGrades(data.temp_min) }º
          </h1>
        </div>
      </div>
    </div>

    <div class="col-3 p-3">
      <div class="card text-bg-light">
        <div class="card-body">
          <p class="card-title">
            Wind:
          </p>

          <h1 class="card-text display-6 text-center">
            { data.wind } m/s
          </h1>
        </div>
      </div>
    </div>

    <div class="col-3 p-3">
      <div class="card text-bg-light">
        <div class="card-body">
          <p class="card-title">
            Humidity:
          </p>

          <h1 class="card-text display-6 text-center">
            { data.humidity }%
          </h1>
        </div>
      </div>
    </div>

    <div class="col-3 p-3">
      <div class="card text-bg-light">
        <div class="card-body">
          <p class="card-title">
            Clouds:
          </p>

          <h1 class="card-text display-6 text-center">
            { data.clouds }%
          </h1>
        </div>
      </div>
    </div>

    {/await}
  </div>
</div>

<script>

import { page } from "$app/stores"
import { getWeatherDataByQuery } from "../services/querys.js"
import { getDate, formatedGrades, uppercase } from "../services/index.js"

const weatherPromise = getWeatherDataByQuery($page.params.city)
</script>