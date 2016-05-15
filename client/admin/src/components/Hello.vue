<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ui-button>dsdf</ui-button>
  </div>
</template>

<script>
  import { UiAlert, UiButton } from 'keen-ui'
  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    },
    components: {
      UiAlert,
      UiButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
