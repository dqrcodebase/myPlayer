<template>
  <header :class="{headerColor:headerColor,headerShow:headerShow}">
    <div class="header">
      <div class="header_left">
        <div class="logo_wrap">
          <img src="http://xingqitv.cn/public/new/image/header/logo.png" alt />
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/liveList">直播</el-menu-item>
          <el-menu-item index="/category">分类</el-menu-item>
          <el-menu-item index="/index">榜单</el-menu-item>
        </el-menu>
      </div>
      <div class="header_right">
        <el-input v-model="input" placeholder="请输入内容">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <div class="header_operation">
          <ul>
            <li class="downLoad">
              <i></i>
              <span class="nav_text">下载</span>
              <div class="header_down">
                <img src="@/static/images/code2.png" alt />
                <p style="text-align: center;">扫描二维码</p>
                <p style="text-align: center;">进入下载页面</p>
              </div>
            </li>
            <li class="focus">
              <router-link to="/index">
                <i></i>
                <span class="nav_text">关注</span>
              </router-link>
            </li>
            <li class="startLive">
              <i></i>
              <span class="nav_text">开播</span>
            </li>
            <li class="hd_login">
              <div class="portrait_box">
                <img class="no-login" src="@/static/images/top_sign_def.png" alt />
              </div>
              <div class="login_btns">
                <div class="hd-login-bg">
                  <div class="hd-loginImg">
                    <img src="@/static/images/pic_hd.png" alt />
                  </div>
                  <div>
                    <p>登录享高清观看体验</p>
                    <div class="hd-login-content">
                      <div>
                        <div>
                          <img src="@/static/images/hd.png" alt />
                        </div>
                        <span>蓝光高清</span>
                      </div>
                      <div>
                        <div>
                          <img src="@/static/images/gift.png" alt />
                        </div>
                        <span>每日好礼</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd-login-tip">
                  <div class="js-login">登录</div>
                  <div class="js-reg">注册</div>
                  <!-- <span class="triangle-top"></span> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '/home',
      scrollDistance: 0,
      headerColor: false,
      headerShow: true,
    }
  },
  created () {
    // this.rollExceedPlayer()
    this.bus.$on('rollingDistance', this.rollingDistance)
  },
  mounted() {},
  beforeDestroy() {
    document.removeEventListener('scroll', this.rollExceedPlayer)
  },
  methods: {
    rollExceedPlayer() {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    handleScroll() {
      if (window.pageYOffset === 0) {
        this.headerColor = false
        this.headerShow = true
      } else if (window.pageYOffset > 0 && window.pageYOffset < this.scrollDistance) {
        this.headerColor = false
        this.headerShow = false
      } else if (window.pageYOffset > this.scrollDistance) {
        this.headerColor = true
        this.headerShow = true
      }
    },
    rollingDistance(val) {
      this.scrollDistance = val
    },
  },
}
</script>
<style lang="scss">
@import url('../../static/css/header.sass');
</style>
