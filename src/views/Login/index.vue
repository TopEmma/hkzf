<template>
  <div>
    <!-- NavBar导航栏 -->
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="$router.back('/mine')"
    />
    <!-- form表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入手机号"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请输入密码' },
          { pattern: /^\d{6}$/, message: '密码格式不正确' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="login_btn"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: '17301850805',
      password: '111111'
    }
  },
  methods: {
    async onSubmit () {
      // console.log('submit', values)
      try {
        const res = await login({
          username: this.username,
          password: this.password
        })
        console.log(res)
        this.$store.commit('setUser', res.data.body)
        this.$router.push({ name: 'mine' })
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login_btn {
  background-color: #21b97a;
  color: #fff;
}
</style>
