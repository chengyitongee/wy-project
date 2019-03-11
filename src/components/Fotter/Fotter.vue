<template>
  <ul class="footer">
    <li @click="goPath('/')">
      <a href="javascript:;">
        <div class="iconfont icon-shouye"></div>
        <div class="text">首页</div>
      </a>
    </li>
    <li @click="goPath( '/sort')">
      <a href="javascript:;">
        <div class="iconfont icon-leimupinleifenleileibie2"></div>
        <div class="text">分类</div>
      </a>
    </li>
    <li @click="goPath('/see')">
      <a href="javascript:;">
        <div class="inconfont icon-xiankuangjiazaishibaidaitiicon"></div>
        <div class="text">识物</div>
      </a>
    </li>
    <li @click="goPath('/cart')">
      <a href="javascript:;">
        <div class="inconfont icon-gouwuche"></div>
        <div class="text">购物车</div>
      </a>
    </li>
    <li @click="goPath('/person')">
      <a href="javascript:;">
        <div class="inconfont icon-icon-"></div>
        <div class="text">个人</div>
      </a>
    </li>
  </ul>
</template>

<script>
    export default {
        methods:{
          goPath(path){
            this.$router.replace(path)
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    position fixed
    left 0
    bottom 0
    display flex
    justify-content space-around
    width 100%
    height 98px



</style>
