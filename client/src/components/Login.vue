<template>
  <div>
    <input type="text" name="username" v-model="username" />
    <br />
    <input type="password" name="password" v-model="password" />
    <br />
    <input type="button" value="登录" @click="login" />
  </div>
</template>
<script>
export default {
  name: "component_name",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        alert("请填写用户名或密码");
      }
      let data = { username: this.username, password: this.password };
      // 发送请求
      this.$axios.post("http://localhost:3000/login", data).then((res) => {
        console.log(res);
        if (res.data.code == "1") {
          window.localStorage.setItem("token", res.data.token);
          alert("登录成功");
          this.$router.replace("/home");
        }
      });
    },
  },
};
</script>
<style scoped>
</style>