<template>
  <div class="lessons">
    list1- aticles

    <table class="striped">
      <thead>
      <tr>
        <th data-field="id">#</th>
        <th data-field="name">Name</th>
        <th>CreatAt</th>
        <th data-field="price">Category</th>
        <th data-field="price">User</th>
        <th data-field="price">Actions</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td><a>article1</a></td>
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

          <!--<a class=" btn small"><i class="material-icons small">edit</i></a>-->
          <!--<a class="waves-effect waves-light btn"><i class="material-icons Tiny">edit</i></a>-->
          <!--<a class="waves-effect waves-light btn"><i class="material-icons ">edit</i></a>-->
        </td>
      </tr>

      </tbody>
    </table>
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
