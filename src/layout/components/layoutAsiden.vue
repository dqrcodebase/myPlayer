<template>
     <div class="layoutAsiden">
        <v-Navigation />
        <router-view />
    </div>
</template>
<script>
import vNavigation from './navigation.vue'

export default {
  name: 'layoutAsiden',
  components: {
    vNavigation
  }
}
</script>
<style lang="css">
.layoutAsiden{
    padding-top:60px
}
</style>
