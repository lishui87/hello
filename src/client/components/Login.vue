<template>
  <div class="bigBox" :style="bgImg">
    <div class='loginBox'>
      <div class='top'>
        <img :src='src'>
        <span>徳孝登录系统</span>
      </div>
      <div class='bottom'>
        <form action=''>
          <label for='username' class='lab'>用户名</label><input v-model="name" type='text' id='username'><br/>
          <label for='pwd'>密码</label><input v-model="password" type='text' id='pwd'><br/>
          <input type='button' value='登录' @click="get">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: '/images/2.1.jpg',
      bgImg: {
        background: "url('/images/18.jpg')",
        backgroundSize: '100% 100%'
      },
      name: '',
      password: ''
    }
  },
  methods: {
    get() {
      let para = {
        name: this.name,
        password: this.password
      }
      this.$http.get('/admin/login', {
        params: para
      }, {
        emulateJSON: true
      }).then(function(data) {
        if (data.body.state === 1) {
          this.$router.push({ path: '/readme' })
        } else {
          alert('请输入正确的用户名和密码！！！')
        }
      })
    }
  }
}
</script>
<style scoped>
  .bigBox {
    height: 100%;
  }
  .loginBox{
    width: 350px;
    height: 350px;
    border: 2px solid #ccc;
    background-color: rgba(255,255,255,0.2);
    position: relative;
    top: 80px;
    left: 50%;
    margin-left: -175px;
  }
  .loginBox .top {
    height: 60px;
    line-height: 60px;
  }
  .loginBox .top img {
    display: block;
    float: left;
    width: 60px;
    height: 60px;
  }
  .loginBox .top span {
    display: block;
    float: left;
    padding-left: 15px;
    height: 60px;
    font: 600 20px/60px '微软雅黑';
    color: #000;
  }
  .bottom label {
    display: inline-block;
    margin-top: 30px;
    width: 100px;
    text-align: right;
    padding-right: 10px;
  }
  .bottom .lab {
    margin-top: 50px;
  }
  .bottom input[type="button"] {
    display: inline-block;
    width: 100px;
    margin: 40px 0 30px 110px;

  }
</style>
