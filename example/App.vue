<template>
  <div id="app">
    <ul>
      <li @click="go('/')">
        Home
      </li>
      <li @click="go('/about')">
        About
      </li>
    </ul>
    <component v-if="current" :is="current"></component>
  </div>
</template>

<script>
  import url from 'url'
  import qs from 'querystring'
  import pathMatch from 'path-match'

  import About from './About.vue'
  import NotFound from './NotFound.vue'
  import createRouter from '../src'

  const routes = {
    About,
    NotFound
  }

  const router = createRouter()


  window.router = router

  export default {
    data() {
      return {
        current: null
      }
    },
    mounted() {
      router.add('/', (ctx) => {
        console.log(ctx)
        this.current = {
          render(h) {
            return h('h2', 'Home')
          }
        }
      })
      router.add('/about', () => {
        this.current = routes.About
      })
      router.add('*', () => {
        this.current = routes.NotFound
      })
      router.init()
    },
    methods: {
      go(route) {
        router.go(route)
      }
    }
  }
</script>

<style scoped>
    ul {
      li {
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
    }
</style>
