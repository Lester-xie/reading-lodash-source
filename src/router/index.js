import Vue from 'vue'
import Router from 'vue-router'

const views = [
  require('@/views/guide'),
  require('@/views/chunk'),
  require('@/views/compact'),
  require('@/views/concat')
].map(i => {
  let name = i.default.__file.split('/')[2].slice(0, -4)
  return {
    path: `/${name}`,
    name: name,
    component: i.default
  }
})

// 将路由信息挂在到Router原型上，便于main.js里调用，这样就不需要在App.vue重新定义路由路径了
Router.prototype.paths = views.map(i => {
  return i.name
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: {name: 'chunk'}
    }].concat(views)
})
