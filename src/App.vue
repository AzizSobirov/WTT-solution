<template>
  <div id="main">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import './css/style.css'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
