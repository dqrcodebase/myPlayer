<template>
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
          </div>
      </aside>
    </div>
</template>
<script>
export default {
  name: 'navigation'
}
</script>
<style lang="css" scoped>
@import url('../../static/css/navigation.css');

</style>
