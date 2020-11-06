<template>
  <div class="test flex-box">
    <img class="img" src="@/static/logo.png" alt="" />
    <button class="login-button" type="default" @click="login">登录</button>
  </div>
</template>

<script lang="ts">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  name: ""
})
export default class extends Vue {
  title: string = "djskfh s";
  login() {
    uni.request({
      url:
        "https://www.easy-mock.com/mock/5f85187a29d84206ef0e7510/api/test/one",
      success: res => {
        console.log(res.data);
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img {
    width: 100rpx;
    height: 100rpx;
  }
  .login-button {
    margin-top: 50rpx;
    width: 200rpx;
  }
}
</style>
