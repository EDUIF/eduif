<template>
  <div class="App">
    <ed-button @click="onRouterPush('/')">首页</ed-button>
    <ed-button @click="onRouterPush('/package')">组件</ed-button>
    <router-view key="App"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onRouterPush (path) {
      this.$router.push({ path });
    },
  },
};
</script>
