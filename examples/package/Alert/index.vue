<template>
  <div>
    <h3>alert</h3>
    <ed-alert>alert in default</ed-alert>
    <ed-alert title="Title" icon-name="ed-icon-x" show-icon>alert in default</ed-alert>
    <ed-alert title="Title" type="success">alert in default</ed-alert>
    <ed-alert title="Title" type="success" plain>alert in default</ed-alert>
    <ed-alert title="Title" type="success" plain show-icon>alert in default</ed-alert>
    <h3>Type</h3>
    <ed-alert v-for="(item, key) in typeList" :key="`type-${key}`" show-icon :type="item" show-close>alert in {{ item }}</ed-alert>
    <h3>Plain</h3>
    <ed-alert v-for="(item, key) in typeList" :key="`type-${key}-plain`" show-icon :type="item" plain show-close>alert in {{ item }}</ed-alert>
  </div>
</template>

<script>
import EdAlert from '@package/Alert';

export default {
  name: 'Alert',
  components: { EdAlert },
  data: function() {
    return {
      typeList: ['success', 'warning', 'danger', 'info'],
    };
  },
};
</script>
<style lang="scss">
.ed-alert {
  & + & {
    margin-top: 10px;
  }
}
</style>
