<template>
  <div class="row">
    <h3 class="cyan-text">Articles</h3>

    <table class="striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>CreatAt</th>
        <th>Category</th>
        <th>User</th>
        <th>Actions</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="article in articles">
        <td>1</td>
        <td><a>{{article.text}}</a></td>
        <td>2015-06-21</td>
        <td>
          <div class="chip">
          Jane Doe
          </div>
        </td>
        <td>
          <div class="chip">
           iallai
          </div>
        </td>
        <td>
          <a><i class="small material-icons">insert_chart</i></a>
          <a><i class="small material-icons">edit</i></a>
          <a><i class="small material-icons">edit</i></a>
        </td>
      </tr>

      </tbody>
    </table>


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
</style>
