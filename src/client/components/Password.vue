<template>
  <div class='user'>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i> 系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <form action="">
      <label for="old">原来密码</label><input type="password" id="old"><br/>
      <label for="new">新密码</label><input type="password" id="new"><br/>
      <label for="again">确认密码</label><input type="password" id="again"><br/>
      <input type="submit" value="提交">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .user {
    width: 100%;
    height:95%;
    padding-top: 5px;
  }
  .user label {
    display: inline-block;
    width: 150px;
    height: 20px;
    margin-top: 20px;
    text-align: right;
    padding-right: 10px;
  }
  .user input[type='password']{
    display: inline-block;
    width: 150px;
    height: 20px;
  }
  .user input[type='submit']{
    display: inline-block;
    width: 150px;
    height: 20px;
    margin: 30px 0 0 150px;
  }
</style>
