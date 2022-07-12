<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item replace to="/information" icon="description"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/mine" icon="user-o">{{
        $store.state.user ? "我的" : "未登录"
      }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
