<template>
  <div class="home">
    <div class="content-wrap">
      <div class="xq-Content-box">
        <div class="xq-Video" ref="xq_video">
          <div class="xq-Content-home">
            <div class="video-content">
              <div class="video-box">
                <div class="videos" id="videos"></div>
                <a style="font-size: 17px;" class="video-room" href>进入直播间</a>
              </div>
              <div class="video-tab">
                <div>
                  <template v-for="(item,index) in indexLive">
                    <div
                      v-if="item.thumb_mini == ''"
                      class="item-def video-tab-box"
                      :class="[index === 0? 'check_clik' : '']"
                      :key="index"
                    >
                      <div class="tab-hov"></div>
                      <img :src="item.thumb" alt="星期直播" />
                      <div></div>
                    </div>
                    <div
                      v-else
                      class="item-def video-tab-box"
                      :key="index"
                      :class="[index === 0? 'check_clik' : '']"
                    >
                      <div class="tab-hov"></div>
                      <img :src="item.thumb_mini" alt="星期" />
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
              <img src="http://140.143.31.4/public/home/images/hot.png" alt />
              <span>推荐</span>
            </div>
            <div></div>
          </div>
          <div>
            <div class="hot-content">
              <div v-for="(item,index) in recommend" class="xq-item" :key="index">
                <div class="item-img">
                  <a :href="'/' + item.uid" target="_blank">
                    <img :src="item.thumb" alt />
                  </a>
                  <div v-if="item.is_star == 1" class="star_activity"></div>
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
                          <i
                            style="margin-right: 6px;
                                            background-position-x: -35px;"
                          ></i>
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
              <img src="http://140.143.31.4/public/home/images/hot.png" alt />
              <span style="color: #ffffff;">热门分类</span>
            </div>
          </div>
          <div class="xq-class-content">
            <ul class="xq-class-ul">
              <li v-for="(item,index) in classList" :key="index">
                <a :href="'index.php?g=&m=LiveList&a=index&cat=' + item.id">
                  <div class="classify-box">
                    <div class="classify-img">
                      <img :src="item.thumb" alt />
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
      <div class="xq-Content-home xq-hot" v-for="(items,indexs) in itemArray" :key="indexs">
        <div class="xq-content-hot">
          <div class="hot-title">
            <div>
              <img :src="items.thumb" alt />
              <span>{{items.name}}</span>
            </div>
            <div></div>
          </div>
          <div>
            <div class="hot-content other-classify">
              <div class="xq-item" v-for="(item,index) in items.video" :key="index">
                <div class="item-img">
                  <a :href="'/' + item.uid" target="_blank">
                    <img :src="item.thumb" alt />
                  </a>
                </div>
                <div v-if="item.is_star == 1" class="star_activity"></div>
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
    <el-footer>
      <v-Footer />
    </el-footer>
  </div>
</template>
<script>
import vFooter from '@/layout/components/footer.vue'

export default {
  neme: 'home',
  components: {
    vFooter,
  },
  data() {
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
      recommend: [
        {
          avatar: 'http://img.xingqitv.cn/20200520/5ec4ff38b5384.jpg',
          avatar_thumb:
            'http://img.xingqitv.cn/20200520/5ec4ff38b5384.jpg?imageView2/2/w/200/h/200',
          city: '好像在火星',
          hot_nums: '0',
          is_star: '1',
          islive: '1',
          nums: '0',
          signature: '水水水水水',
          stream: '45458_1597224523',
          thumb:
            'http://img.xingqitv.cn/20200713110949_49281fb9f7919b8aa4e1ee69bd85ddc6?imageView2/2/w/600/h/600',
          title: '明年',
          type: '0',
          uid: '45458',
          user_nicename: '121212',
        },
        {
          avatar: 'http://img.xingqitv.cn/20200624/5ef2fe477f712.png',
          avatar_thumb: 'http://img.xingqitv.cn/20200624/5ef2fe477f712.png',
          city: '好像在火星',
          hot_nums: '0',
          is_star: null,
          islive: '1',
          nums: '0',
          signature: '这家伙很懒，什么都没留下',
          stream: '45555_1596617674',
          thumb: 'http://img.xingqitv.cn/20200624/5ef2fe477f712.png',
          title: '',
          type: '0',
          uid: '45555',
          user_nicename: '手机用户0012',
        },
      ],
      // 热门分类
      classList: [
        {
          des: '',
          id: '30',
          name: 'LOL云顶之弈',
          orderno: '0',
          thumb: 'http://img.xingqitv.cn/20200519/5ec3784411d06.png',
        },
        {
          des: '星秀精彩直播内容全天不间断直播',
          id: '22',
          name: '星旗颜值秀场',
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
          des: '',
          id: '30',
          name: 'LOL云顶之弈',
          orderno: '0',
          thumb: 'http://img.xingqitv.cn/20200519/5ec3784411d06.png',
        },
        {
          des: '星秀精彩直播内容全天不间断直播',
          id: '22',
          name: '星旗颜值秀场',
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
          des: '',
          id: '30',
          name: 'LOL云顶之弈',
          orderno: '0',
          thumb: 'http://img.xingqitv.cn/20200519/5ec3784411d06.png',
        },
        {
          des: '星秀精彩直播内容全天不间断直播',
          id: '22',
          name: '星旗颜值秀场',
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
          des: '',
          id: '30',
          name: 'LOL云顶之弈',
          orderno: '0',
          thumb: 'http://img.xingqitv.cn/20200519/5ec3784411d06.png',
        },
        {
          des: '星秀精彩直播内容全天不间断直播',
          id: '22',
          name: '星旗颜值秀场',
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
          des: '',
          id: '30',
          name: 'LOL云顶之弈',
          orderno: '0',
          thumb: 'http://img.xingqitv.cn/20200519/5ec3784411d06.png',
        },
        {
          des: '星秀精彩直播内容全天不间断直播',
          id: '22',
          name: '星旗颜值秀场',
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
      ],
      // 其他分类
      itemArray: [
        {
          des: '',
          id: '30',
          name: 'LOL云顶之弈',
          orderno: '0',
          thumb: 'http://img.xingqitv.cn/20200519/5ec3784411d06.png',
          video: [
            {
              avatar: 'http://img.xingqitv.cn/20200520/5ec4ff38b5384.jpg',
              avatar_thumb:
                'http://img.xingqitv.cn/20200520/5ec4ff38b5384.jpg?imageView2/2/w/200/h/200',
              city: '好像在火星',
              hot_nums: '0',
              is_star: '1',
              islive: '1',
              nums: '0',
              signature: '水水水水水',
              stream: '45458_1597224523',
              thumb:
                'http://img.xingqitv.cn/20200713110949_49281fb9f7919b8aa4e1ee69bd85ddc6?imageView2/2/w/600/h/600',
              title: '明年',
              type: '0',
              uid: '45458',
              user_nicename: '121212',
            },
            {
              avatar: 'http://img.xingqitv.cn/20200513/5ebba8380c563.jpg',
              avatar_thumb: 'http://img.xingqitv.cn/20200513/5ebba8380c563.jpg',
              city: '好像在火星',
              hot_nums: '0',
              is_star: null,
              islive: '1',
              nums: '0',
              signature: '',
              stream: '45473_1596618519',
              thumb: 'http://img.xingqitv.cn/20200513/5ebba8380c563.jpg',
              title: '',
              type: '0',
              uid: '45473',
              user_nicename: '测试701',
            },
          ],
        },
        {
          des: '星秀精彩直播内容全天不间断直播',
          id: '22',
          name: '星旗颜值秀场',
          orderno: '1',
          thumb: 'http://img.xingqitv.cn/20200519/5ec374ffeb715.png',
          video: [
            {
              avatar: 'http://img.xingqitv.cn/20200624/5ef303460b957.jpg',
              avatar_thumb: 'http://img.xingqitv.cn/20200624/5ef303460b957.jpg',
              city: '好像在火星',
              hot_nums: '0',
              is_star: null,
              islive: '1',
              nums: '0',
              signature: '',
              stream: '45537_1596617549',
              thumb: 'http://img.xingqitv.cn/20200624/5ef303460b957.jpg',
              title: '',
              type: '0',
              uid: '45537',
              user_nicename: 'a010',
            },
          ],
        },
      ],
      // 头部样式改变滚动条应滚动的距离
      rollingDistance: 0
    }
  },
  mounted() {
    this.rollingDistance = this.$refs.xq_video.offsetTop + this.$refs.xq_video.offsetHeight
    this.bus.$emit('rollingDistance', this.rollingDistance)
  },
}
</script>
<style lang="css">
@import url('../../static/css/home.css');
</style>
