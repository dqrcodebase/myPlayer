<template>
  <div class="layout">
    <el-container>
      <v-Header />
      <el-main> <v-main /></el-main>
    </el-container>
  </div>
</template>
<script>
import vHeader from './components/header.vue'
import vMain from './components/main.vue'

export default {
  components: {
    vHeader,
    vMain,
  }
}
</script>
<style lang="css">
.layout .el-main{
  padding:0;
  overflow: initial;
}
</style>
