<template>
  <div class="log-box">
    <img class="logo" src="@/static/logo-youhe.png" alt="" />
    <text>你已登录</text>
  </div>
</template>

<script lang="ts">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  name: ""
})
export default class extends Vue {
  created() {}
  mounted() {}
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.log-box {
  .logo {
    width: 100rpx;
    height: 100rpx;
  }
}
</style>
