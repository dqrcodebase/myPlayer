<template>
  <div class="xq-footer">
    <div class="xq-Content-home">
      <div class="footer-content">
        <div>
          <ul>
            <li>
              <a href>关于星旗</a>
            </li>
            <li>
              <a href>联系星旗客服</a>
            </li>
            <li>
              <a href>帮助中心</a>
            </li>
            <li>
              <a href="https://obsproject.com/zh-cn/download" target="_blank">直播工具</a>
            </li>
            <li>
              <a href="/" target="_blank">主播教程</a>
            </li>
            <li>
              <a href="/" target="_blank">充值协议</a>
            </li>
            <li>
              <a href="/" target="_blank">用户协议</a>
            </li>
            <li>
              <a href="/" target="_blank">星旗隐私政策</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="http://www.beian.miit.gov.cn/" target="_blank">{:getConfigPub()['copyright']}</a>
          <a href="http://wlj.xm.gov.cn/" target="_blank">闽网文（2020）3093-115号</a>工商网监
        </div>
        <div>
          © 2020-现在 {{domainName}} 厦门星旗互娱网络科技有限公司
          版权所有 All Rights Reserved XingQi 12318全国文化市场举报平台 中国互联网不良信息举报中心
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vfooter',
  data() {
    return {
      domainName: '',
    }
  },
  created() {
    this.domainName = window.location.host
  },
}
</script>

<style lang="css">
@import url('../../static/css/footer.css');
</style>
