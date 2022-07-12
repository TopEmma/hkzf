<template>
  <div>
    <!-- 已登录S -->
    <div class="banner LoggedIn" v-if="user && user.token">
      <div class="banner2">
        <img :src="'http://liufusong.top:8080' + userInfo.avatar" alt="" />
        <div class="username">{{ userInfo.nickname }}</div>
        <van-button
          type="primary"
          to="login"
          size="normal"
          @click="$store.commit('setUser', '')"
          >退出</van-button
        >
      </div>
    </div>
    <!-- 已登录E -->
    <!-- 登录前S -->
    <div class="banner beforeLogin" v-else>
      <div class="banner2">
        <img src="@/assets/avatar.png" alt="" />
        <div class="username">用户名</div>
        <van-button type="primary" to="login" size="normal">去登录</van-button>
      </div>
    </div>
    <!-- 登录前E -->
    <!-- Grid宫格 -->
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="paid" text="成为房主" />
      <van-grid-item icon="user-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <!-- 加入我们 -->
    <img src="@/assets/join.png" alt="" class="footer-img" />
  </div>
</template>

<script>
import { getUserInfo } from '@/api/mine'
import { mapState } from 'vuex'
export default {
  created () {
    this.getUserInfo()
  },
  data () {
    return {
      userInfo: {} // 用户个人信息
    }
  },
  methods: {
    async getUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.body
        // console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.banner {
  position: relative;
  width: 750px;
  height: 600px;
  background: #fff url("@/assets/bg.png") no-repeat;
  background-size: contain;
  text-align: center;
  .banner2 {
    position: absolute;
    width: 640px;
    height: 320px;
    background-color: #fff;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    box-shadow: 0 0 1px 1px #ccc;
    text-align: center;
    img {
      width: 120px;
      height: 120px;
      margin-top: -30px;
      // margin-bottom: 10px;
    }
    .username {
      text-align: center;
      margin: 15px 0 30px;
    }
  }
  img {
    width: 345px;
    height: 85px;
  }
}
.van-grid {
  width: 690px;
  height: 170px;
  margin: 30px 30px;
}
.footer-img {
  width: 100%;
  margin-top: 180px;
}
</style>
