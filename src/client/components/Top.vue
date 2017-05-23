<template>
  <div class="header">
    <div class="logo">徳孝后台管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img class="user-logo" src="../common/img/img.jpg">
          {{name}}
          <span @click="logout" class="loginout"><i class="el-icon-warning"></i> 注销</span>
        </span>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'admin'
    }
  },
  methods: {
    logout() {
      this.$http.get('/admin/logout', {
      }, {
        emulateJSON: true
      }).then(function(data) {
        if (data.body.state === 1) {
          this.$router.push({ path: '/' })
        }
      })
    }
  }
}
</script>

<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
  }
  .header .logo{
    float: left;
    width:250px;
    text-align: center;
  }
  .user-info {
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
  }
  .user-info .el-dropdown-link{
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
  }
  .user-info .user-logo{
    position: absolute;
    left:0;
    top:15px;
    width:40px;
    height:40px;
    border-radius: 50%;
  }
  .loginout{
    padding-left: 20px;
    color:red;
  }
</style>
