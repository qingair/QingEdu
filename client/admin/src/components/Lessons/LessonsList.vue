<template>
  <div class="lessons">
    list1- aticles
<ul>
  <li v-for="article in articles">
    <a href="#">{{ article.text }}</a>
  </li>
</ul>

  </div>
</template>

<script>
  import * as services from '../../services'
  export default {
    route: {
      data () {
        let params = {}
        let self = this
        return services.articleService
             .find(params)
           .then(articles => (self.articles = articles.data))
      }
    },
    data () {
      return {
        articles: []
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #b91f1f;
}
</style>
