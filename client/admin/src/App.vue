<template>
  <div id="app">

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


    <img class="logo" src="./assets/logo.png">


    <p>
      Welcome to QingEdu
    </p>






    <router-view></router-view>



  </div>
</template>

<script>
</script>

<style>

</style>
