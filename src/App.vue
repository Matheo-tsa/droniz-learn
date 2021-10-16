<template>
  <div id="app">
    <HelloWorld msg="Droniz"/>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer
  }
}
</script>
