<template>
  <div>
    1111
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
  created() {}
  mounted() {}
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
