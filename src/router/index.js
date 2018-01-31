import Vue from 'vue'
import Router from 'vue-router'
import Chunk from '@/views/chunk'
import Compact from '@/views/compact'
import Guide from '@/views/guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'chunk' }
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    {
      path: '/chunk',
      name: 'chunk',
      component: Chunk
    },
    {
      path: '/compact',
      name: 'compact',
      component: Compact
    }
  ]
})
