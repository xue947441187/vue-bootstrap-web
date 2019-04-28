<template>
  <div class="login row">
    <div class="col-xs-6 col-sm-4"></div>
    <div class="col-xs-6 col-sm-4 tab">
      <span><h1 class="size">用户注册页面</h1></span>
      <div class="input-group input-div">
        <span class="input-group-addon" id="basic-addon1">帐号</span>
        <input :onblur="loginAuth" v-model="authlist.username" id="username" title="输入字母数字下划线，最少输入6位" type="text"
               class="form-control"
               placeholder="Username"
               aria-describedby="basic-addon1">
        <span class="tishi-1"></span>
      </div>
      <div class="input-group input-div">
        <span class="input-group-addon" id="basic-addon2">密码</span>
        <input :onblur="loginAuth" v-model="authlist.password" id="password" title="请输入字母数字下划线，最少输入六位且不可与用户名相同"
               type="password"
               class="form-control"
               placeholder="password" aria-describedby="basic-addon1">
        <span class="tishi-2"></span>
      </div>
      <div class="input-group input-div">
        <span class="input-group-addon" id="basic-addon3">电子邮箱</span>
        <input :onblur="loginAuth" v-model="authlist.email" id="email" type="text" title="输入您的邮箱，目前仅支持163邮箱以及qq邮箱"
               class="form-control"
               placeholder="email"
               aria-describedby="basic-addon1">
        <span class="input-group-addon" id="basic-addon4 email">
          <div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="true">
                                      <span class="caret"></span>
                                    @163.com</button>
                                    <ul class="dropdown-menu login-reght" aria-labelledby="dropdownMenu1">
                                      <li><a href="#">@qq.com</a></li>
                                    </ul></div>
                                           </span>
        <span class="tishi-3"></span>
      </div>
      <div class="input-group input-div">
        <span class="input-group-addon" id="basic-addon5">手机号</span>
        <input :onblur="loginAuth" v-model="authlist.phone" id="phone" type="text" class="form-control"
               placeholder="phone"
               aria-describedby="basic-addon1">
        <span class="tishi-4"></span>
      </div>
      <div class="input-group input-div">
        <span class="input-group-addon" id="basic-addon6">用户名</span>
        <input :onblur="loginAuth" v-model="authlist.name" id="name" title="请输入一个用户名，如不输入则默认为帐号" type="text"
               class="form-control"
               placeholder="name"
               aria-describedby="basic-addon1">
        <span class="tishi-5"></span>
      </div>
    </div>
    <div class="col-xs-6 col-sm-4"></div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        authlist: {
          "username": '',
          "password": $("#password").text(),
          "phone": '',
          "email": "",
          "name": "",
          "user": 123
        }
      }
    },
    methods: {
      "username": function () {
        re_username = /^(\d|\s|\_){6,}$/
        if (!re_username.match(this.data().username()) || this.data().username() != null) {
          $(".tishi-1").text("用户名输入错误")
          return 0;
        }
      },
      "password": function () {
        re_password = /^(\d|\s|\_){6,}$/
        if (!re_password.match(this.data().password() || this.data().password() != null)) {
          $(".tishi-2").text("密码输入错误")
          return 0;
        }
        if (this.data().password() !== this.data().username()) {
          $(".tishi-2").text("账户名和密码不能重复")
          return 0;
        }
      },
      "phone": function () {
        re_phone = /^1[3|4|5|8][0-9]\d{4,8}$'/
        if (!re_phone.match(this.data().phone())) {
          $(".tishi-4").text("输入的手机号不符合规则")
          return 0;
        }
      },
      "email": function () {
        re_email = /^.*\@(163|qq)\.com$/
        if (re_email.match(this.authlist.email+$("#dropdownMenu1").text())) {
          $(".tishi-3").text("输入的邮箱不符合规则")
          return 0;
        }
      },
      "name": function () {
        re_name = /^([\u4E00-\u9FA5]|\d|\s|\_){3,20}$/
        if (re_name.match(this.authlist.name)) {
          $(".tishi-5").text("输入的用户名不符合规则")
          return 0;
        }
      },
      "loginAuth": function () {
        this.username()
        this.password()
        this.email()
        this.phone()
        this.name()
        if (this.authlist.name != null ||
          this.authlist.password != null ||
          this.authlist.email != null ||
          this.authlist.phone != null ||
          this.authlist.username != null) {
          alert("发送到后端服务器")
        }
      }
    },
  }
</script>

<style scoped>
  .size {
    text-align: center
  }

  .login-reght {
    float: right;

  }

  .input-div {
    padding-top: 20px;
    padding-bottom: 20px;

  }

  .tab {
    border: 1px dashed darkgreen;
  }

</style>
