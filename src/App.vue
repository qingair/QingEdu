<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">


    <p>
      Welcome to QingEdu
    </p>


    <ul>
      <li>
        <a v-link="{ path: '/' }">Go to home</a>
      </li>
      <li>
        <a v-link="{ path: '/hello' }">Go to hello</a>
      </li>
      <li>
        <a v-link="{ path: '/lessons' }">Go to Lessons</a>
      </li>
    </ul>



    <router-view></router-view>



  </div>
</template>

<script>
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
