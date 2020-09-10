<template>
  <header
    :class="{headerColor:this.$store.state.headerColor,headerShow:this.$store.state.headerShow}"
  >
    <div class="header">
      <div class="header_left">
        <div class="logo_wrap">
          <img src="http://xingqitv.cn/public/new/image/header/logo.png" alt />
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/liveList">直播</el-menu-item>
          <el-menu-item index="/category">分类</el-menu-item>
          <el-menu-item index="/list">榜单</el-menu-item>
        </el-menu>
      </div>
      <div class="header_right">
        <el-input v-model="searchiInput" placeholder="请输入内容">
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
  data() {
    return {
      activeIndex: this.$route.path,
      scrollDistance: 0,
      headerColor: this.$store.state.headerColor,
      headerShow: this.$store.state.headerShow,
      searchiInput: '',
    }
  },
  created() {
    console.log(this.$store.state);
    this.bus.$on('rollingDistance', this.rollingDistance)
  },
  methods: {
    rollingDistance() {},
  },
}
</script>
<style lang="scss" scoped>
$header_height: 60px;
header {
  background-color: transparent;
  width: 100%;
  height: $header_height;
  position: fixed;
  z-index: 10;
  background-color: #ffffff;
  display: none;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);
  &.headerColor {
    background-color: transparent;
    box-shadow: none;
  }
  &.headerShow {
    display: block;
  }
  a {
    text-align: center;
    font-size: 0;
    text-decoration: none;
    color: #000000;
  }
  p {
    margin: 0;
  }
  .header {
    display: flex;
    width: 1424px;
    height: 100%;
    margin: auto;
    justify-content: space-between;
    .header_left {
      display: flex;
      height: 100%;
      align-items: center;
      .el-menu.el-menu--horizontal {
        border: none;
        margin-left: 70px;
        background-color: transparent;
        .el-menu-item {
          height: 32px;
          line-height: 32px;
          margin: 0 10px;
          border: none;
          padding: 0 16px;
          border-radius: 16px;
          color: #222222;
          font-size: 16px;
          &:hover {
            border: none;
            background-color: rgba(255, 185, 59, 1);
            color: #ffffff;
            /** border-radius: 16px;
            padding: 0 16px; **/
          }
          &.is-active {
            border: none;
            background-color: rgba(255, 185, 59, 1);
            color: #ffffff;
            border-radius: 16px;
            padding: 0 16px;
          }
        }
      }
      .el-menu-item .logo_wrap {
        width: 132px;
        height: 36px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    ::v-deep .header_right {
      display: flex;
      align-items: center;
      .el-input__inner {
        height: 32px;
        line-height: 32px;
        background-color: rgba(244, 244, 244, 1);
        border-radius: 19px;
        border: none;
      }
      .el-input__suffix {
        margin-top: -4px;
        .el-input__suffix-inner {
          cursor: pointer;
        }
      }
      .header_operation {
        height: 100%;
        ul {
          display: flex;
          height: 100%;
          margin: 0;
          padding: 0;
          li {
            width: 48px;
            height: 100%;
            text-align: center;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            &:hover {
              i {
                background-image: url('../../static/images/header-hover.png');
              }
              .nav_text {
                color: rgba(255, 185, 59, 1);
              }
            }
            i {
              display: block;
              width: 24px;
              height: 24px;
              background-image: url('../../static/images/header.png');
              background-position-y: -11px;
              margin: 0 auto;
            }
            span {
              font-size: 12px;
            }

            &.downLoad {
              i {
                background-position-x: -37px;
              }
              .header_down {
                display: none;
                position: absolute;
                top: $header_height;
                padding: 10px 0;
                background-color: #ffffff;
                left: calc(50% - 50px);
                box-shadow: 0px 4px 12px #666666;
                width: 126px;
                cursor: default;
                p {
                  font-size: 12px;
                  margin: 5px;
                }
              }
              &:hover {
                .header_down {
                  display: inline-block;
                }
              }
            }
            &.focus {
              i {
                background-position-x: -71px;
              }
            }
            &.startLive {
              i {
                background-position-x: -105px;
              }
            }
            &.hd_login {
              cursor: default;
              .portrait_box {
                width: 40px;
                height: 40px;
                cursor: pointer;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .login_btns {
                position: absolute;
                display: none;
                top: $header_height;
                width: 276px;
                right: -4px;
                background-color: #ffffff;
                border-radius: 8px;
                .hd-login-bg {
                  background-color: #f2b74b;
                  display: flex;
                  border-radius: 8px 8px 0 0;
                  padding: 12px 0;
                  color: #ffffff;
                  & > div {
                    &:last-of-type {
                      margin-top: 7px;
                    }
                  }
                  .hd-loginImg {
                    width: 138px;
                    height: 94px;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .hd-login-content {
                    display: flex;
                    justify-content: space-around;
                    & > div {
                      font-size: 0;
                      margin-top: 14px;
                      & > div {
                        width: 28px;
                        height: 28px;
                        margin: auto;
                        img {
                          width: 100%;
                          height: 100%;
                        }
                      }
                    }
                  }
                  p {
                    font-size: 14px;
                  }
                }
                .hd-login-tip {
                  display: flex;
                  padding: 15px 0;
                  justify-content: space-around;
                  & > div {
                    padding: 8px 30px;
                    border: 1px solid #ffb93b;
                    font-size: 12px;
                    border-radius: 5px;
                    &.js-login {
                      background-color: #ffb93b;
                      color: #ffffff;
                      cursor: pointer;
                    }
                    &.js-reg {
                      color: #ffb93b;
                      cursor: pointer;
                    }
                  }
                }
                &::after {
                  content: '';
                  position: absolute;
                  width: 0;
                  height: 0;
                  border: 7px solid transparent;
                  border-bottom-color: #f2b74b;
                  top: -14px;
                  right: 24px;
                }
              }
              &:hover {
                .login_btns {
                  display: block;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
