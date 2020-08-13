<template>
  <div>
    <el-container>
<<<<<<< HEAD
      <el-header> <v-Header /></el-header>
=======
      <v-Header />
>>>>>>> dbadfff18b356ef6af545b56901cb58ed45b3078
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
