<template>
  <div class="app full-height">
    <router-link :to="{ name: 'login'}"></router-link>
    <router-view></router-view>
  </div>
</template>

<style>
  @import "./common/css/main.css";
  @import "./common/css/color-dark.css";
  html,body{
    height: 100%;
  }
  .app,.full-height{
    height: 100%;
  }
</style>
