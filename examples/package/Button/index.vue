<template>
  <div>
    <h3>Button 按钮</h3>
    <ed-button>按钮</ed-button>
    <h3>Type</h3>
    <ed-button v-for="(item, key) in typeList" :key="'type'+key" :type="item">按钮</ed-button>
    <h3>Plain</h3>
    <ed-button v-for="(item, key) in typeList" :key="'type'+key" :type="item" plain>按钮</ed-button>
    <h3>Group</h3>
    <ed-button-group>
      <ed-button v-for="(item, key) in typeList" :key="'type'+key" :type="item" plain>按钮</ed-button>
    </ed-button-group>
  </div>
</template>

<script>
import EdButton from '@package/Button';
import EdButtonGroup from '@package/ButtonGroup';

export default {
  name: 'Button',
  components: { EdButtonGroup, EdButton },
  data: function() {
    return {
      typeList: ['primary', 'success', 'warning', 'danger', 'info'],
    };
  },
};
</script>