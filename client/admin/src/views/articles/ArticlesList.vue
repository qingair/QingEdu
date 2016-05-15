<template>
  <div class="row">
    <div class="col s12">
      limit:{{articles.limit}}
      total:{{articles.total}}
      skip: {{articles.skip}}
      <table class="table striped">
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
        <tr v-for="article in articles.data">
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
      <Pagination></Pagination>
    </div>

  </div>
</template>

<script>
  import {articleService} from '../../services'
  import Pagination from '../../components/Pagination'
  export default {
    route: {
      data () {
        let params = {limit: 1}
        let self = this
        return articleService
             .find(params)
           .then(articles => (self.articles = articles))
      }
    },
    data () {
      return {
        articles: []
      }
    },
    components: {
      Pagination
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
