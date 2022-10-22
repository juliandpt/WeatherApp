<div class="glass sticky-top flex-nav">
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid my-2">
        <a class="navbar-brand" href="/">
          <img src="images/logo.png" width="auto" height="50" alt="logo">
        </a>
      
        <div class="form-group">
          <img src="icons/search.svg" class="icon" width="auto" height="20" alt="logo" />
          <input class="form-control" type="search" placeholder="Search..." on:keypress={onKeyPress} bind:value={value}>
        </div>
      </div>
    </nav>
  </div>
</div>

<style>
.glass {
  backdrop-filter: blur(12px);
}

.form-group {
  position: relative;
}

.form-control {
  left: .5em;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 3.5rem;
}
.icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: auto;
}
</style>

<script>
import { goto } from '$app/navigation';
import { Country, State, City }  from 'country-state-city';

let value = ""
let cities = City.getAllCities()

const onKeyPress = e => {
  if (e.charCode === 13) routeToPage(value);
};

function routeToPage(route) {
  goto(`/${route}`) 
}
</script>