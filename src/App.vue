<template>
  <div id="root">
    <RouterView/>
    <Fotter/>
  </div>
</template>

<script>
  import Fotter from './components/Fotter/Fotter'


export default {
  name: 'App',
  components: {
    Fotter
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
