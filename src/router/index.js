import Vue from 'vue'
import Router from 'vue-router'

const views = [
  require('@/views/chunk'),
  require('@/views/compact'),
  require('@/views/guide')
].map(i => {
  let name = i.default.__file.split('/')[2].slice(0, -4)
  return {
    path: `/${name}`,
    name: name,
    component: i.default
  }
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'chunk' }
    }].concat(views)
})
