<template>
  <div>
    <div class="home_search">
      <!-- 自定义按钮 -->
      <van-search
        v-model="value"
        show-action
        label="地址"
        placeholder="请输入小区或地址"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">
            <van-icon name="location-o" />
          </div>
        </template>
      </van-search>
    </div>
    <!-- swipe轮播 -->
    <van-swipe class="my-swipe" :autoplay="1500" indicator-color="white">
      <van-swipe-item><img src="@/assets/1.png" alt="" /></van-swipe-item>
      <van-swipe-item><img src="@/assets/2.png" alt="" /></van-swipe-item>
      <van-swipe-item><img src="@/assets/3.png" alt="" /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () { }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-swipe {
  width: 100%;
  height: 424px;
}
img {
  width: 100%;
  height: 424px;
}
</style>
