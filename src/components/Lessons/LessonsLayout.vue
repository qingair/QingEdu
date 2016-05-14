<template>
  <div class="lessons">
    <h1>Lessons</h1>
    <ul>
      <li>
        <a v-link="{ path: '/lessons/list1' }">list1</a>
      </li>
      <li>
        <a v-link="{ path: '/lessons/list2' }">list2</a>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #b91f1f;
}
</style>
