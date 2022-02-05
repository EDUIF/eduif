<template>
  <div id="app" class="ed-theme">
    <div class="" @click="setTheme('dark')">set dark {{ themeType === 'dark' }}</div>
    <div class="" @click="setTheme('light')">set light {{ themeType === 'light' }}</div>
    <div class="" @click="setTheme('auth')">set auth {{ themeHasAuth }}</div>
    <div>
      <div class="">
        <h3>type</h3>
        <div>
          <ed-button v-for="(item,key) in buttonTypeList" :key="`type-${key}`" :type="item">{{ item }}</ed-button>
        </div>
        <div style="padding-top: 5px;">
          <ed-button v-for="(item,key) in buttonTypeList" :key="`type-${key}-plain`" :type="item" disabled>{{ item }}</ed-button>
        </div>
        <div style="padding-top: 5px;">
          <ed-button v-for="(item,key) in buttonTypeList" :key="`type-${key}-plain`" :type="item" plain>{{ item }}</ed-button>
        </div>
        <div style="padding-top: 5px;">
          <ed-button v-for="(item,key) in buttonTypeList" :key="`type-${key}-plain`" :type="item" plain disabled>{{ item }}</ed-button>
        </div>
      </div>
      <div class="">
        <h3>Size</h3>
        <ed-button v-for="(item,key) in buttonSizeList" :key="`size-${key}`" :size="item">{{ item }}</ed-button>
        <ed-button v-for="(item,key) in buttonSizeList" :key="`size-${key}`" :size="item" round>{{ item }}</ed-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      themeType: '',
      themeHasAuth: false,
      buttonTypeList: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'],
      buttonSizeList: ['large', 'normal', 'small'],
    };
  },
  methods: {
    setTheme (type) {
      const domClass = this.$el.classList;
      if (['dark', 'light'].includes(type)) {
        const className = 'ed-theme__' + type;
        if (this.themeType !== type) {
          this.themeType = type;
          domClass.remove('ed-theme__' + ('dark' === type ? 'light' : 'dark'));
        } else {
          this.themeType = '';
        }
        domClass.toggle(className);
      } else if ('auth' === type) {
        this.themeHasAuth = !this.themeHasAuth;
        domClass.toggle('ed-theme--auth');
      }
    },
  },
};
</script>

<style>
body {
  font-size: 14px;
}
</style>