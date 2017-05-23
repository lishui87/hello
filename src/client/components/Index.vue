<template>
  <div class="wrapper">
    <top></top>
    <left></left>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import top from './Top.vue'
import left from './Left.vue'
export default {
  components: {
    top,
    left
  }
}
</script>

