<template>
  <div class="top ">
    <div class="dropdown">
      <!--      <li role="presentation" class="active"><a href="#"><img class="logo"-->
      <!--                                                              alt="测试背景"></a></li>-->
      <ul class="nav  nav-tabs">
        <li role="presentation"><a href="/" title="点击进入主页"><span
          class="glyphicon glyphicon-home "
          aria-hidden="false"></span>首页</a></li>

        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
               aria-expanded="false">
          详细选项 <span class="caret"></span>
        </a>
          <ul class="dropdown-menu">

            <li role="presentation"><a class="" href="#" title="查看详细信息"><span
              class="glyphicon glyphicon-user"
              aria-hidden="false"></span> 个人信息</a></li>
            <li role="presentation"><a class="jc col-xs-6 col-md-4" href="#" title="查看公共消息"><span
              class="glyphicon glyphicon-th-large"
              aria-hidden="false"></span>我们的故事</a></li>
          </ul>
        </li>
        <li role="presentation" class="login-reght" id="login"><a href="/" title="点击进入主页"><span
          class="glyphicon glyphicon glyphicon-user "
          aria-hidden="false"></span>登录</a></li>
        <li id="login-list" role="presentation" class="dropdown login-reght">
          <a class=" dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
             aria-expanded="false">
            用户管理 <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li role="presentation"><a href="#">个人信息</a></li>
            <li role="presentation"><a href="#">退出登录</a></li>
          </ul>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
  export default {
    name: "top",
    methods: {
      "login": function () {
        var login = $.cookie("login");

        if (login != null) {
          var success = $.get("/login/loginAuth", function (data, status) {
            return data.success
          })
          if (success === true) {
            $("#login-list").show();
            $("#login").hide();
          } else if (success === false) {
            $("#login").show();
            $("#login-list").hide();
            $.cookie("login",null)
          }
        } else {
          $("#login").show();
          $("#login-list").hide();
        }


        $("#login")
      }
    }

  }
</script>

<style scoped>
  .login-reght {
    float: right;

  }

</style>
