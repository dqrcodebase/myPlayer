<template>
  <div>
    <el-container>
      <el-header> <v-Header /></el-header>
      <el-main> <v-main /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import vHeader from './components/header.vue'
import vMain from './components/main.vue'

export default {
  components: {
    vHeader,
    vMain
  }
}
</script>
