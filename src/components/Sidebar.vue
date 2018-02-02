<template>
  <div class="wrap">
  <input type="text" placeholder="Search" id="search" v-model="search">
  <ul class="sidebar">
    <li v-for="path in paths" :key="path" :class="active === path && 'activeClass'" v-show="path.indexOf(search) > -1">
      <a :href="`#/${path}`">{{path}}</a>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    paths: Array
  },
  mounted: function () {
    this.active = this.$route.name
  },
  watch: {
    '$route': function (e) {
      this.active = e.name
    }
  },
  data () {
    return {
      active: 'chunk',
      search: ''
    }
  }
}
</script>
