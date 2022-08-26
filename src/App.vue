<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/mas.jpeg" width="280" height="280"/>

    <div class="wrapper">
      <!-- <HelloWorld msg="ali marsam" /> -->
        <RouterView />
      <nav>
        <RouterLink to="/">Profile</RouterLink>
        <RouterLink to="/skill">Keahlian</RouterLink>
        <RouterLink to="/sosmed">Sosial Media</RouterLink>
      </nav>

       <!-- <div class="card-footer text-muted">
       <footer><h4>Sosial media</h4></footer>

       <a href=""><i class="sosmed fa-brands fa-instagram"></i></a>
       <a href=""><i class="sosmed fa-brands fa-github"></i></a>
       <a href=""><i class="sosmed fa-solid fa-envelope"></i></a>
       <a href=""><i class="sosmed fa-brands fa-whatsapp"></i></a>
       </div>
     -->

    <div class="card-footerin text-muted">
    Copyright@ali marsam
    </div>


    </div>
  </header>
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 75vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-evenly;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    /* font-size: 25px; */
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 15px;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .wrapper{
    font-size: 12px;
  }
  .card-footerin{
    margin-left: 5px;
    margin-right: 5px;
    padding-right: 20px;
  }
}
</style>
