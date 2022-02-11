<template>
  <div style="background-color: #ffffff; padding: 20px;">
    <h3>Input 输入框</h3>
    <div> value: {{ value }}</div>
    <ed-input v-model="value"></ed-input>
    <ed-input v-model="value" clearable></ed-input>
    <ed-input v-model="value" type="password"></ed-input>
    <ed-input v-model="value" type="password" show-password clearable></ed-input>
    <ed-input v-model="value" placeholder="请输入" prefix-icon="ed-icon-x" suffix-icon="ed-icon-home"></ed-input>
    <ed-input v-model="value" placeholder="请输入" prefix-icon="ed-icon-x" suffix-icon="ed-icon-home" readonly>
      <template slot="append">append</template>
      <template slot="prepend">prepend</template>
    </ed-input>
    <ed-input v-model="value" placeholder="请输入" prefix-icon="ed-icon-x" suffix-icon="ed-icon-home" clearable disabled>
      <template slot="append">append</template>
      <template slot="prepend">prepend</template>
    </ed-input>
  </div>
</template>

<script>
import EdInput from '@package/Input';

export default {
  name: 'Input',
  components: { EdInput },
  data: function() {
    return {
      value: '',
    };
  },
};
</script>
<style>
.ed-input + .ed-input {
  margin-top: 10px;
}
</style>