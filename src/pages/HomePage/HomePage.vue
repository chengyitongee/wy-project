<template>
  <div>
    <!--首页头部-->
    <header class="head_top">
      <img src="../../images/image/image5/indexLogo-a90bdaae6b.png" alt="">
      <div class="inputbox">
        <span class="iconfont icon-search"></span>
        <p class="text">搜索商品，共21839款好物</p>
      </div>
      <button class="but">登录</button>
    </header>
    <!--导航栏-->
    <div class="navigation">
      <ul class="scroll">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>礼品特色</li>
      </ul>
      <span class=" jiantou iconfont icon-iconfontjiantou"></span>
    </div>
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-image">
          <img src="../../images/image/image6/2ae75b3838cb9bd899a644fc188d5c57.jpg">
        </div>
      </div>
    </div>
    <!--网易自营品牌-->
    <div class="content-top">
      <ul>
        <li class="content-text">
          <span class="iconfont icon-yifabu"></span>
          <p>网易自营品牌</p>
        </li>
        <li class="content-text">
          <span class="iconfont icon-yiguanzhu"></span>
          <p>30天无忧退货</p>
        </li>
        <li class="content-text">
          <span class="iconfont icon-yixin"></span>
          <p>48小时快速退款</p>
        </li>
      </ul>
    </div>
    <!--内容分类-->
    <div class="content-classification">
      <ul class="content-Boss">
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/1.png" alt="">
            <span>居家生活</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/2.png" alt="">
            <span>服饰鞋包</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/3.png" alt="">
            <span>美食酒水</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/4.png" alt="">
            <span>个户清洁</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/5.png" alt="">
            <span>限时购</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/6.png" alt="">
            <span>母婴亲子</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/7.png" alt="">
            <span>运动旅行</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/8.png" alt="">
            <span>数码家电</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/9.png" alt="">
            <span>礼品特色</span>
          </a>

        </li>
        <li class="content-product">
          <a href="javascript:;">
            <img src="../../images/image/image-666/10.png" alt="">
            <span>超级会员</span>
          </a>

        </li>
      </ul>

    </div>
    <!--新人专享礼-->
    <div class="content-middle">
      <div class="content-middle-top">
        <span>
          -     新人专享礼     -
        </span>
        <div class="content-middle-center">
          <div class="content-middle-box">
            <div class="content-middle-lefttop">
              <span>新人专享礼包</span>
            </div>
              <a href="javascript:;" >
                <img class="content-middle-tupian1" src="../../images/image/over/xinrenzhuanxiang/xinrenzhuanxiang.png" alt="">
              </a>
          </div>
        </div>
      </div>
    </div>
    <!--品牌制造商导航-->
    <div class="pinpailogo">
        <span>品牌制造商直供</span>
        <a href="javascript:;">更多 ></a>
    </div>
  </div>


</template>

<script>
    export default {
        name: ""
    }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.head_top
  width 100%
  height 88px
  display flex
  justify-content space-around
  align-items center
  /*background #2e2e2e*/
  img
    width:138px
    height:44px
    margin-top 20px
    margin-left 28px
  .inputbox
    width 442px
    height:56px
    background #EDEDED
    border-radius 5%
    .iconfont
      line-height 56px
      margin-left 30px
    .text
      font-size 15px
      float right
      margin-right 20px
      line-height 56px
  .but
    border-radius 10%
    border 3px solid #F5E4E4
    background deeppink
    color #C21F39


.navigation
  width 100%
  height 60px
  display flex
  justify-content space-around
  align-items center
  margin-top 20px
  overflow hidden
  .scroll
    height:60px
    li
      float left
      line-height 60px
      text-indent 30px
      margin-left 35px
      font-size 30px
  .jiantou
    margin-right 50px


.swiper-container
  width: 100%
  .swiper-image
     img
      width 100%
      height 500px



.content-top
  width 100%
  height 100px

  .content-text
    display flex
    /*justify-content space-around*/
    align-items center
    float left
    font-size 20px
    color #EAC3C4
    margin-left 50px
    margin-top 40px


.content-classification
  width 100%
  height 341px
  .content-Boss
    display flex
    justify-content space-around
    flex-wrap wrap
    width 100%
    height 341px
    background #fff
    margin-top 30px

    .content-product
      width 20%
      a
        width 100%
        height 156px
        margin 10px 20px
        display flex
        flex-direction column
        align-items center
        img
          width 110px
          height 100px
          background #F4F4F4
          border-radius 30px
        span
          font-size 20px
.content-middle
  display flex
  width 100%
  height 558px
  /*background #C21F39*/
  .content-middle-top
    width 100%
    height 90px
    /*background #2b81af*/
    span
      line-height 90px
      display block
      text-align center
.content-middle-center
  width 100%
  height 517px
  background #F9E9CF
  display flex
  .content-middle-box
    width 450px
    height 517px
    /*background #E9DC51*/
    .content-middle-lefttop
      width 450px
      height 78px
      /*background green*/
      span
        float left
        margin-left 60px
    .content-middle-tupian1
      width 350px
      height 380px
      margin-left 50px



.pinpailogo
  width 100%
  height 100px
  background #2b81af
</style>
