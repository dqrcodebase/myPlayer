<template>
  <div>
    <input type="checkbox" name="aside_state" id="aside_state" class="xq_specialStateInput" />
    <aside class="broadside">
      <div class="aside_main_expand">
          <el-menu :default-active="activeIndex" class="el-menu-demo aside-nav" mode="vertical" router>
            <el-menu-item index="/home">
              <i class="aside_icon aside_attention"></i>
              <span>我的关注</span>
            </el-menu-item>
            <el-menu-item index="/liveList">
              <i class="aside_icon aside_live"></i>
              <span>全部直播</span>
            </el-menu-item>
            <el-menu-item index="/list">
              <i class="aside_icon aside_ranking"></i>
              <span>排行榜</span>
            </el-menu-item>
          </el-menu>
        <div class="aside_classify_live">
          <div class="aside_title">直播分类</div>
          <div class="aside_classify_wrap">
            <a href>
              <div class="aside_item">王者荣耀</div>
            </a>
            <a href>
              <div class="aside_item">王者荣耀</div>
            </a>
            <a href>
              <div class="aside_item">王者荣耀</div>
            </a>
            <a href>
              <div class="aside_item">王者荣耀</div>
            </a>
            <a href>
              <div class="aside_item">荣耀</div>
            </a>
            <a href>
              <div class="aside_item">王者荣耀</div>
            </a>
            <a href>
              <div class="aside_item">王者荣耀</div>
            </a>
            <a href>
              <div class="aside_item">王者荣耀王者荣耀王者荣耀王者荣耀</div>
            </a>
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
      <label class="aside_toggle" for="aside_state">
        <i></i>
      </label>
    </aside>
  </div>
</template>
<script>
import { categoryList } from '@/api/category'
export default {
  name: 'navigation',
  data() {
    return {
      navigationIndex: this.$route.path,
      liveclasses: [
        {
          des: '星秀精彩直播内容全天不间断直播',
          id: '22',
          name: '星旗秀场',
          orderno: '1',
          thumb: 'http://img.xingqitv.cn/20200519/5ec374ffeb715.png',
        },
        {
          des: '颜值秀',
          id: '18',
          name: '颜值',
          orderno: '2',
          thumb: 'http://img.xingqitv.cn/20200519/5ec33b412e211.png',
        },
        {
          des: '且随疾风前行，身后亦需留心',
          id: '12',
          name: '英雄联盟',
          orderno: '3',
          thumb: 'http://img.xingqitv.cn/20200519/5ec375621ec42.png',
        },
        {
          des: '大吉大利，今晚吃鸡',
          id: '10',
          name: '绝地求生',
          orderno: '4',
          thumb: 'http://img.xingqitv.cn/20200519/5ec375c32a72c.png',
        },
      ],
      activeIndex:'/liveList'
    }
  },
  created() {
    categoryList().then(data => {
      console.log(data)
    })
  },
}
</script>
<style lang="css" scoped>
@import url('../../static/css/navigation.css');
</style>
