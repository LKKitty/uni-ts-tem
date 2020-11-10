<template>
  <view>
    <p>11111</p>
    <input
      type="text"
      v-model="value"
      @input="inputChange"
      placeholder="这是一个输入框"
    />

    <button
      class="bottom"
      type="primary"
      open-type="getUserInfo"
      withCredentials="true"
      lang="zh_CN"
      @click="showCalender"
    >
      日历
    </button>
    <!-- 插件 -->
    <Calender v-if="showPop" />
  </view>
</template>

<script lang="ts">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import Calender from "@/components/uni-calendar/uni-calendar.vue";
import { component } from "vue/types/umd";

@Component({
  name: "",
  components: {
    Calender
  }
})
export default class extends Vue {
  title: string = "djskfh s";
  value: string = "";
  showPop: boolean = false;
  inputChange(e) {
    // this.value = e.detail.value;
    console.log(this.value);
  }
  showCalender() {
    this.showPop = !this.showPop;
  }
}
</script>
<style lang="scss" scoped>
.test {
  p {
    color: red;
    font-size: 30px;
  }
}
</style>
