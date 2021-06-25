<template>
  <VueBlockie />
  <PackageVueBlockie seed="MenaJennyMarkus" />
</template>

<script>
import VueBlockie from './components/VueBlockie.vue'
import PackageVueBlockie from 'vue-blockies'

export default {
  name: "App",
  components: {
    PackageVueBlockie,
    VueBlockie,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>