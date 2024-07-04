<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/devs">Developers</router-link></li>
      <li><router-link to="/how-its-work">How its Work</router-link></li>
    </ul>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  border: 1px solid black;
  padding: 1rem;
}

nav a {
  font-size: 1.2em;
  text-decoration: none;
  margin: 0 0.5rem;
  font-weight: bold;
  color: #2c3e50;
}
ul{
  border: 1px solid black;
  justify-content: center;
  display: flex;
  padding: 1rem;
}
li{

  list-style: none;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
