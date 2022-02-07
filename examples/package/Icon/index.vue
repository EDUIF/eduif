<template>
  <div>
    <h3>Icon 图标</h3>
    <div class="icons-list-box" v-for="(icons, keys) in IconsName" :key="keys">
      <h3>{{ keys }}</h3>
      <div style="display: flex; flex-wrap: wrap;">
        <div class="icons-list" v-for="(item, key) in icons" :key="key">
          <ed-icon :name="item" style="font-size: 30px;"></ed-icon>
          <div class="icons-list-span">
            <span>ed-icon-{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  computed: {
    IconsName () {
      return this.$EDMENT.IconsName;
    },
  },
};
</script>
<style lang="scss">
.icons-list {
  padding: 10px;
  text-align: center;
  background: #ffffff;
  width: calc(100% / 7);
  box-sizing: border-box;
  border: 1px solid #eeeeee;

  &-span {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>