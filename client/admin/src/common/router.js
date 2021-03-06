/**
 * Created by iallai on 15/5/2016.
 */
import Lessons from '../views/lessons/Lessons.vue'
import lesson1 from '../views/lessons/LessonsList.vue'
import lesson2 from '../views/lessons/LessonsList2.vue'

import Articles from '../views/articles/Articles.vue'
import ArticlesList from '../views/articles/ArticlesList.vue'
export function configRouter (router) {
  router.map({
    '/lessons': {
      component: Lessons,
      name: 'lesssons',
      subRoutes: {
        '/': {
          // This component will be rendered into Foo's <router-view>
          // when /foo is matched. Using an inline component definition
          // here for convenience.
          component: {
            template: '<p>Default Lessons</p>'
          }
        },
        '/list1': {
          // Bar will be rendered inside Foo's <router-view>
          // when /foo/bar is matched
          component: lesson1
        },
        '/list2': {
          // same for Baz, but only when /foo/baz is matched
          component: lesson2
        }
      }
    },
    '/articles': {
      component: Articles,
      name: 'Articles',
      subRoutes: {
        '/': {
          // This component will be rendered into Foo's <router-view>
          // when /foo is matched. Using an inline component definition
          // here for convenience.
          component: ArticlesList
        },
        '/add': {
          // This component will be rendered into Foo's <router-view>
          // when /foo is matched. Using an inline component definition
          // here for convenience.
          component: require('../views/articles/ArticlesDetail.vue')
        }
      }
    }

  })
  router.redirect({
    '*': '/lessons'
  })
}
