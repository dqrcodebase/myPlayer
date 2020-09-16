<template>
  <div class="home">
    <div class="content-wrap">
      <div class="xq-Content-box">
        <div class="xq-Video"
             ref="xq_video">
          <div class="xq-Content-home">
            <div class="video-content">
              <div class="video-box">
                <div class="videos"
                     id="videos"></div>
                <a style="font-size: 17px;"
                   class="video-room"
                   href>进入直播间</a>
              </div>
              <div class="video-tab">
                <div>
                  <template v-for="(item,index) in indexLive">
                    <div v-if="item.thumb_mini == ''"
                         class="item-def video-tab-box"
                         :class="[index === 0? 'check_clik' : '']"
                         :key="index"
                         @click="cutCarouselHandle(index)">
                      <div class="tab-hov"></div>
                      <img :src="item.thumb"
                           alt="星期直播" />
                      <div></div>
                    </div>
                    <div v-else
                         class="item-def video-tab-box"
                         :key="index"
                         @click="cutCarouselHandle(index)"
                         :class="[index === carouselIndex ? 'check_clik' : '']">
                      <div class="tab-hov"></div>
                      <img :src="item.thumb_mini"
                           alt="星期" />
                      <div></div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xq-Content-home xq-hot">
        <div class="xq-content-hot">
          <div class="hot-title">
            <div>
              <img src="http://140.143.31.4/public/home/images/hot.png"
                   alt />
              <span>推荐</span>
            </div>
            <div></div>
          </div>
          <div>
            <div class="hot-content">
              <div v-for="(item,index) in recommend"
                   class="xq-item"
                   :key="index">
                <div class="item-img">
                  <a :href="'/' + item.uid"
                     target="_blank">
                    <img :src="item.thumb"
                         alt />
                  </a>
                  <div v-if="item.is_star == 1"
                       class="star_activity"></div>
                </div>
                <a :href="'/' + item.uid">
                  <div class="item-con">
                    <div class="con-box">
                      <div class="con-top">
                        <span>{{item.title}}</span>
                        <span>{{item.name}}</span>
                      </div>
                      <div class="con-bottom">
                        <div>
                          <i style="background-position-x: -12px;"></i>
                          <span style="margin-left: 4px;">{{item.user_nicename}}</span>
                        </div>
                        <div>
                          <i style="margin-right: 6px;
                                            background-position-x: -35px;"></i>
                          <span>{{item.hot_nums}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="clearfloat"></div>
          </div>
        </div>
      </div>
      <div class="xq-class-box">
        <div class="xq-Content-home xq-class">
          <div class="hot-title">
            <div>
              <img src="http://140.143.31.4/public/home/images/hot.png"
                   alt />
              <span style="color: #ffffff;">热门分类</span>
            </div>
          </div>
          <div class="xq-class-content">
            <ul class="xq-class-ul">
              <li v-for="(item,index) in classList"
                  :key="index">
                <a :href="'index.php?g=&m=LiveList&a=index&cat=' + item.id">
                  <div class="classify-box">
                    <div class="classify-img">
                      <img :src="item.thumb"
                           alt />
                    </div>
                    <div class="classify-text">
                      <div>{{item.name}}</div>
                      <div>{{item.des}}</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="clearfloat"></div>
        </div>
      </div>
      <div class="xq-Content-home xq-hot"
           v-for="(items,indexs) in itemArray"
           :key="indexs">
        <div class="xq-content-hot">
          <div class="hot-title">
            <div>
              <img :src="items.thumb"
                   alt />
              <span>{{items.name}}</span>
            </div>
            <div></div>
          </div>
          <div>
            <div class="hot-content other-classify">
              <div class="xq-item"
                   v-for="(item,index) in items.video"
                   :key="index">
                <div class="item-img">
                  <a :href="'/' + item.uid"
                     target="_blank">
                    <img :src="item.thumb"
                         alt />
                  </a>
                </div>
                <div v-if="item.is_star == 1"
                     class="star_activity"></div>
                <div class="item-con">
                  <div class="con-box">
                    <div class="con-top">
                      <span>{{item.title}}</span>
                      <span>{{item.name}}</span>
                    </div>
                    <div class="con-bottom">
                      <div>
                        <i style="background-position-x: -12px;"></i>
                        <span style="margin-left: 4px;">{{item.user_nicename}}</span>
                      </div>
                      <div>
                        <i style="margin-right: 6px;background-position-x: -35px;"></i>
                        <span>{{item.hot_nums}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfloat"></div>
          </div>
        </div>
      </div>
    </div>
    <el-footer style="padding:0;height:auto">
      <v-Footer />
    </el-footer>
  </div>
</template>
<script>
import vFooter from '@/layout/components/footer.vue'
import { indexList } from '@/api/index.js'

export default {
  name: 'home',
  components: {
    vFooter,
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      vm.$store.commit('clucencyHeader', { colorBoole: true, showBoole: true })
    })
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.$store.commit('clucencyHeader', { colorBoole: false, showBoole: true })
    next()
  },
  data () {
    return {
      // 顶部视频播放信息
      indexLive: [
        {
          anyway: '1',
          avatar: 'http://img.xingqitv.cn//rz/_1596007571.png',
          avatar_thumb:
            'http://img.xingqitv.cn//rz/_1596007571.png?imageView2/2/w/200/h/200',
          bulletin: '',
          city: '好像在火星',
          deviceinfo: '',
          fans_nums: '54',
          goodnum: '0',
          hotvotes: '0',
          ishot: '0',
          isinner_tester: '0',
          islive: '1',
          ismic: '0',
          isrecommend: '1',
          isshop: '0',
          isshowman: '0',
          isvideo: '0',
          lat: '',
          liveclassid: '12',
          lng: '',
          pkstream: '',
          pkuid: '0',
          province: '',
          pull: 'http://pull.xingqitv.cn/live/45255_1597022994.flv',
          showid: '1597022994',
          sortn: '0',
          starttime: '1597023121',
          stream: '45255_1597022994',
          thumb: 'http://img.xingqitv.cn//rz/_1594175863.png',
          thumb_mini: 'http://img.xingqitv.cn//rz/_1594175897.png',
          title: 'lllll',
          type: '0',
          type_val: '',
          uid: '45255',
          user_nicename: 'W1825086',
          wy_cid: '',
        },
        {
          anyway: '1',
          avatar: 'http://img.xingqitv.cn//rz/_1596007571.png',
          avatar_thumb:
            'http://img.xingqitv.cn//rz/_1596007571.png?imageView2/2/w/200/h/200',
          bulletin: '',
          city: '好像在火星',
          deviceinfo: '',
          fans_nums: '54',
          goodnum: '0',
          hotvotes: '0',
          ishot: '0',
          isinner_tester: '0',
          islive: '1',
          ismic: '0',
          isrecommend: '1',
          isshop: '0',
          isshowman: '0',
          isvideo: '0',
          lat: '',
          liveclassid: '12',
          lng: '',
          pkstream: '',
          pkuid: '0',
          province: '',
          pull: 'http://pull.xingqitv.cn/live/45255_1597022994.flv',
          showid: '1597022994',
          sortn: '0',
          starttime: '1597023121',
          stream: '45255_1597022994',
          thumb: 'http://img.xingqitv.cn//rz/_1594175863.png',
          thumb_mini: 'http://img.xingqitv.cn//rz/_1594175897.png',
          title: 'lllll',
          type: '0',
          type_val: '',
          uid: '45255',
          user_nicename: 'W1825086',
          wy_cid: '',
        },
        {
          anyway: '1',
          avatar: 'http://img.xingqitv.cn//rz/_1596007571.png',
          avatar_thumb:
            'http://img.xingqitv.cn//rz/_1596007571.png?imageView2/2/w/200/h/200',
          bulletin: '',
          city: '好像在火星',
          deviceinfo: '',
          fans_nums: '54',
          goodnum: '0',
          hotvotes: '0',
          ishot: '0',
          isinner_tester: '0',
          islive: '1',
          ismic: '0',
          isrecommend: '1',
          isshop: '0',
          isshowman: '0',
          isvideo: '0',
          lat: '',
          liveclassid: '12',
          lng: '',
          pkstream: '',
          pkuid: '0',
          province: '',
          pull: 'http://pull.xingqitv.cn/live/45255_1597022994.flv',
          showid: '1597022994',
          sortn: '0',
          starttime: '1597023121',
          stream: '45255_1597022994',
          thumb: 'http://img.xingqitv.cn//rz/_1594175863.png',
          thumb_mini: 'http://img.xingqitv.cn//rz/_1594175897.png',
          title: 'lllll',
          type: '0',
          type_val: '',
          uid: '45255',
          user_nicename: 'W1825086',
          wy_cid: '',
        },
        {
          anyway: '1',
          avatar: 'http://img.xingqitv.cn//rz/_1596007571.png',
          avatar_thumb:
            'http://img.xingqitv.cn//rz/_1596007571.png?imageView2/2/w/200/h/200',
          bulletin: '',
          city: '好像在火星',
          deviceinfo: '',
          fans_nums: '54',
          goodnum: '0',
          hotvotes: '0',
          ishot: '0',
          isinner_tester: '0',
          islive: '1',
          ismic: '0',
          isrecommend: '1',
          isshop: '0',
          isshowman: '0',
          isvideo: '0',
          lat: '',
          liveclassid: '12',
          lng: '',
          pkstream: '',
          pkuid: '0',
          province: '',
          pull: 'http://pull.xingqitv.cn/live/45255_1597022994.flv',
          showid: '1597022994',
          sortn: '0',
          starttime: '1597023121',
          stream: '45255_1597022994',
          thumb: 'http://img.xingqitv.cn//rz/_1594175863.png',
          thumb_mini: 'http://img.xingqitv.cn//rz/_1594175897.png',
          title: 'lllll',
          type: '0',
          type_val: '',
          uid: '45255',
          user_nicename: 'W1825086',
          wy_cid: '',
        },
        {
          anyway: '1',
          avatar: 'http://img.xingqitv.cn//rz/_1596007571.png',
          avatar_thumb:
            'http://img.xingqitv.cn//rz/_1596007571.png?imageView2/2/w/200/h/200',
          bulletin: '',
          city: '好像在火星',
          deviceinfo: '',
          fans_nums: '54',
          goodnum: '0',
          hotvotes: '0',
          ishot: '0',
          isinner_tester: '0',
          islive: '1',
          ismic: '0',
          isrecommend: '1',
          isshop: '0',
          isshowman: '0',
          isvideo: '0',
          lat: '',
          liveclassid: '12',
          lng: '',
          pkstream: '',
          pkuid: '0',
          province: '',
          pull: 'http://pull.xingqitv.cn/live/45255_1597022994.flv',
          showid: '1597022994',
          sortn: '0',
          starttime: '1597023121',
          stream: '45255_1597022994',
          thumb: 'http://img.xingqitv.cn//rz/_1594175863.png',
          thumb_mini: 'http://img.xingqitv.cn//rz/_1594175897.png',
          title: 'lllll',
          type: '0',
          type_val: '',
          uid: '45255',
          user_nicename: 'W1825086',
          wy_cid: '',
        },
        {
          anyway: '1',
          avatar: 'http://img.xingqitv.cn//rz/_1596007571.png',
          avatar_thumb:
            'http://img.xingqitv.cn//rz/_1596007571.png?imageView2/2/w/200/h/200',
          bulletin: '',
          city: '好像在火星',
          deviceinfo: '',
          fans_nums: '54',
          goodnum: '0',
          hotvotes: '0',
          ishot: '0',
          isinner_tester: '0',
          islive: '1',
          ismic: '0',
          isrecommend: '1',
          isshop: '0',
          isshowman: '0',
          isvideo: '0',
          lat: '',
          liveclassid: '12',
          lng: '',
          pkstream: '',
          pkuid: '0',
          province: '',
          pull: 'http://pull.xingqitv.cn/live/45255_1597022994.flv',
          showid: '1597022994',
          sortn: '0',
          starttime: '1597023121',
          stream: '45255_1597022994',
          thumb: 'http://img.xingqitv.cn//rz/_1594175863.png',
          thumb_mini: 'http://img.xingqitv.cn//rz/_1594175897.png',
          title: 'lllll',
          type: '0',
          type_val: '',
          uid: '45255',
          user_nicename: 'W1825086',
          wy_cid: '',
        },
      ],
      // 推荐位
      recommend: [],
      // 热门分类
      classList: [],
      // 其他分类
      itemArray: [],
      // 头部样式改变滚动条应滚动的距离
      rollingDistance: 0,
      carouselIndex: 0
    }
  },
  created () {
    this.rollExceedPlayer()
    indexList().then(data => {
      this.itemArray = data.info.itemArray
      this.classList = data.info.classList
      // eslint-disable-next-line prefer-destructuring
      this.recommend = data.info.array[0]
    })
  },
  mounted () {
    this.rollingDistance = this.$refs.xq_video.offsetTop + this.$refs.xq_video.offsetHeight
    // this.bus.$emit('rollingDistance', this.rollingDistance)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.rollExceedPlayer)
  },
  methods: {
    rollExceedPlayer () {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    handleScroll () {
      if (window.pageYOffset === 0) {
        this.$store.commit('clucencyHeader', { colorBoole: true, showBoole: true })
      } else if (window.pageYOffset > 0 && window.pageYOffset < this.rollingDistance) {
        this.$store.commit('clucencyHeader', { colorBoole: false, showBoole: false })
      } else if (window.pageYOffset > this.rollingDistance) {
        this.$store.commit('clucencyHeader', { colorBoole: false, showBoole: true })
      }
    },
    rollingDistanceHandle (val) {
      console.log(val)
      this.scrollDistance = val
    },
    cutCarouselHandle (index) {
      this.carouselIndex = index
    }
  },
}
</script>
<style lang="css">
@import url('../../static/css/home.css');
</style>
