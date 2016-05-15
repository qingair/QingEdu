<template>
  <div id="app">
    <md-nav class=" cyan">
      <!--<md-nav-logo href="#!/navbar" pos="">Logo</md-nav-logo>-->
      <md-nav-links pos="left">
        <li v-link="{path:'/',activeClass: 'active',exact: true }"><a>Home</a></li>
        <li v-link="{path:'/hello',activeClass: 'active',exact: true }"><a>Articles</a></li>
        <li v-link="{path:'/lessons',activeClass: 'active',exact: true }"><a>Lessons</a></li>
      </md-nav-links>
      <md-nav-links>
        <a icon-text="power_settings_new">
          <md-icon text="power_settings_new"></md-icon>
        </a>
      </md-nav-links>
    </md-nav>



    <div>
      <router-view class="view" transition="qing" transition-mode="out-in" keep-alive></router-view>
    </div>


    <p>
      Welcome to QingEdu
    </p>










  </div>
</template>

<script>
</script>

<style>
   @import "../node_modules/keen-ui/dist/keen-ui.css";
   @import "../node_modules/materialize-css/dist/css/materialize.css";
  body{
    margin: 0;
  }
  .qing-enter, .qing-leave {
    opacity: 0;
    transform: translate3d(2px,2px, 0);
  }
  .view {
    transition: all .2s ease;
  }

  .v-link-active {
    color: red;
  }
  [v-cloak] {
    display: none;
  }
</style>
