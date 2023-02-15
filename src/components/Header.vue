<template>
  <!-- 必须要有一个父标签 -->
  <div>
    <!--头部-->
    <div class="public-head">
      <div class="public-head-nav">
        <div class="public-head-left">
          <h1 class="public-head-logo">
            <a href="javascript:;">
              <img src="@/assets/image/logo.png" alt="" />
            </a>
          </h1>
          <ul class="public-head-list">
            <li><a href="index.html" target="_blank">主页</a></li>
            <li class="public-head-hover">
              <a href="javascript:void(0);">我要投资</a>
              <!--二级导航-->
              <div class="two-title">
                <a href="javascript:;">优先类产品</a>
                <a href="javascript:;">三标类产品</a>
              </div>
            </li>
            <li><a href="user_center.html" target="_blank">借款人信息</a></li>
            <li><a href="javascript:;" target="_blank">信息披露</a></li>
            <li><a href="javascript:;" target="_blank">安全计划</a></li>
          </ul>
        </div>
        <div class="public-head-right">
          <a href="login.html" target="_blank">登录</a>
          <a href="register.html" target="_blank">注册</a>
        </div>
      </div>
    </div>
    <!--end-->

  </div>
</template>
           

<script>
export default {
  name: "Header", //组件名
  components: {
    //包含的子组件
  },
  data() {
    //双向绑定的数据
    return {};
  },
  methods: {
    //自定义方法
  },
  mounted() {
    //钩子函数-vue加载完时，执行的函数
  },
//   created() {
//     //vue对象创建时执行
//   },
//   beforeUpdate() {
//     //组件更改之前执行的函数
//   },
//   updated() {
//     //组件 更改时 执行的函数
//   },
//   destroyed() {
//     //组件销毁时执行的函数
//   },
};
</script>

<style>
</style>
