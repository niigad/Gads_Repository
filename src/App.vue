<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/hola">HolaMundo</router-link> |
      <router-link to="/github">GitHub</router-link>|
      <router-link to="/vue-tutorials">Vue Tutorials</router-link> |


    </nav>
    <router-view />
  </div>
</template>

<script>


</script>

<style scoped>

h1, h2 {

font-weight: normal;
}

.results {
  margin: 10px 150px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #18064c;
  margin-top: 60px;
}
</style>
