<template>
<<<<<<< HEAD
  <div>
    <aside class="broadside">
      <div class="aside_main_expand">
        <ul class="aside-nav">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                class="el-menu-demo"
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
            <a v-for="(item,index) in liveclasses"
             href="/index.php?m=LiveList&a=index&cat={$item.id}" :key="index">
              <div class="aside_item is-active">{{item.name}}</div>
            </a>
=======
    <div>
      <aside class="broadside">
          <div class="aside_main_expand">
              <ul class="aside-nav">
                  <li>
                    <a class="aside_skip"  onclick="tomyself()">
                      <i class="aside_icon aside_attention"></i>
                      <strong>我的关注</strong>
                    </a></li>
                  <li>
                    <a class="aside_skip basicdata-active"
                       href="/index.php?m=LiveList&a=index" >
                    <i class="aside_icon aside_live"></i>
                    <strong>全部直播</strong>
                    </a>
                  </li>
                  <li><a href="/index.php?g=&m=list&a=index" class="aside_skip">
                    <i class="aside_icon aside_ranking"></i>
                    <strong>排行榜</strong>
                  </a></li>
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
                <strong>关注</strong></a>
              <a href="/" class="aside_skip">
                <i class="aside_icon aside_live"></i>
                <strong>直播</strong>
              </a>
              <a href="/" class="aside_skip">
                <i class="aside_icon aside_ranking"></i>
                <strong>排行榜</strong>
              </a>
>>>>>>> parent of 3fce903... 分类页封装
          </div>
      </aside>
    </div>
</template>
<script>
import {categoryList} from '@/api/category'
export default {
<<<<<<< HEAD
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
    }
  },
  created() {
    categoryList()
  },
=======
  name: 'navigation'
>>>>>>> parent of 3fce903... 分类页封装
}
</script>
<style lang="css" scoped>
@import url('../../static/css/navigation.css');

</style>
