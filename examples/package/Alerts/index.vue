<template>
  <div>
    <h3>Alerts</h3>
    <ed-alerts>alerts in default</ed-alerts>
    <ed-alerts title="Title">alerts in default</ed-alerts>
    <ed-alerts title="Title" type="success" >alerts in default</ed-alerts>
    <ed-alerts title="Title" type="success" plain>alerts in default</ed-alerts>
    <ed-alerts title="Title" type="success" plain show-icon>alerts in default</ed-alerts>
    <h3>Type</h3>
    <ed-alerts v-for="(item, key) in typeList" :key="`type-${key}`" show-icon :type="item" show-close>alerts in {{ item }}</ed-alerts>
    <h3>Plain</h3>
    <ed-alerts v-for="(item, key) in typeList" :key="`type-${key}-plain`" show-icon :type="item" plain show-close>alerts in {{ item }}</ed-alerts>
  </div>
</template>

<script>
import EdAlerts from '@package/Alerts/src/Alerts';

export default {
  name: 'Alerts',
  components: { EdAlerts },
  data: function() {
    return {
      typeList: ['success', 'warning', 'danger', 'info'],
    };
  },
};
</script>
<style lang="scss">
.ed-alerts {
  & + & {
    margin-top: 10px;
  }
}
</style>
