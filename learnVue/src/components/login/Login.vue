<template>
  <div>
    <div class="login_form">
      <input type="text" placeholder="用户名" v-model="userName">
      <input type="text" placeholder="密码" v-model="password">
      <button class="login_btn" type="primary" round>登录</button>
    </div>
  </div>
</template>
 
 
<script>
//  import { userLogin } from '../../api/api';
 
  export default {
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        } 
      }
    }
  }
</script>
<style>
  .login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .login_btn {
    width: 10%;
    font-size: 16px;
  }
</style>
