<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view v-if="!isCanUse">
      <view>
        <view class="header">
          <image src="@/static/logo-youhe.png"></image>
        </view>
        <view class="content">
          <view>申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像、地区等)</text>
        </view>

        <button
          class="bottom"
          type="primary"
          open-type="getUserInfo"
          withCredentials="true"
          lang="zh_CN"
          @getuserinfo="wxGetUserInfo"
        >
          授权登录
        </button>
      </view>
    </view>
    <div class="userInfo" v-if="isCanUse">
      <img class="avatar" :src="userInfo.avatarUrl" alt="" />
      <text>{{ userInfo.nickName }}</text>
    </div>
    <!-- #endif -->
  </view>
</template>

<script lang="ts">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { getTopics, login, getUserInfo } from "@/api/request";

@Component({
  name: ""
})
export default class extends Vue {
  isCanUse: boolean = false;
  userInfo: Partial<UniApp.UserInfo> = {}; //用户信息(头像/昵称)

  //获取用户信息
  wxGetUserInfo() {
    let _this = this;
    if (!this.isCanUse) {
      getUserInfo().then(rsp => {
        this.userInfo = rsp.userInfo;
        this.isCanUse = !this.isCanUse;
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  margin: 90rpx 0 90rpx 50rpx;
  border-bottom: 1px solid #ccc;
  text-align: center;
  width: 650rpx;
  height: 300rpx;
  line-height: 450rpx;
}

.header image {
  width: 200rpx;
  height: 200rpx;
}

.content {
  margin-left: 50rpx;
  margin-bottom: 90rpx;
}

.content text {
  display: block;
  color: #9d9d9d;
  margin-top: 40rpx;
}

.bottom {
  border-radius: 80rpx;
  margin: 70rpx 50rpx;
  font-size: 35rpx;
}
.userInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .avatar {
    width: 200rpx;
    height: 200rpx;
  }
}
</style>
