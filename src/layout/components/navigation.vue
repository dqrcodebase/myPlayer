<template>
  <div>
    <aside class="broadside">
      <div class="aside_main_expand">
        <ul class="aside-nav">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                class="el-menu-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="transparent"
                text-color="#999999"
                active-text-color="#ffb93b"
                :default-active="navigationIndex"
                mode="vertical"
                router
              >
                <el-menu-item index="/home">
                  <i class="aside_icon aside_attention"></i>
                  <strong>我的关注</strong>
                </el-menu-item>
                <el-menu-item index="/liveList">
                  <i class="aside_icon aside_live"></i>
                  <strong>全部直播</strong>
                </el-menu-item>
                <el-menu-item index="/list">
                  <i class="aside_icon aside_ranking"></i>
                  <strong>榜单</strong>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </ul>
        <div class="aside_classify_live">
          <div class="aside_title">直播分类</div>
          <div class="aside_classify_wrap">
            <volist name="liveclasses" id="item">
              <a href="/index.php?m=LiveList&a=index&cat={$item.id}">
                <div class="aside_item is-active">{$item.name}</div>
              </a>
            </volist>
          </div>
        </div>
      </div>
      <div class="aside_main_shrink">
        <a href="/" class="aside_skip">
          <i class="aside_icon aside_attention"></i>
          <strong>关注</strong>
        </a>
        <a href="/" class="aside_skip">
          <i class="aside_icon aside_live"></i>
          <strong>直播</strong>
        </a>
        <a href="/" class="aside_skip">
          <i class="aside_icon aside_ranking"></i>
          <strong>排行榜</strong>
        </a>
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  name: 'navigation',
  data() {
    return {
      navigationIndex: this.$route.path,
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>
<style lang="css" scoped>
@import url('../../static/css/navigation.css');
</style>
