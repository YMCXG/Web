<template>
  <div id="app">
    <div class="nav-bg">
      <div class="nav-box">
        <router-link to="/" tag="span" class="logo">
          <img class="imgLogo" src="@/assets/img/AJ_logo_black.jpg" alt="">
          <span class="wordLogo">sneakers</span>
        </router-link>
        <ul class="tabList">
            <router-link to="/shoeList" tag="li" active-class="tab-active">AJ鞋款介绍</router-link>
            <router-link to="/about" tag="li" active-class="tab-active">关于我</router-link>
        </ul>
      </div>
    </div>
      
    <div class="content">
      <router-view class="body clearfix"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
