<template>
  <div style="padding: 20px; background-color: #fff">
    <h3>Progress 进度条</h3>
    <ed-progress :percentage="percentage"></ed-progress>
    <ed-progress :percentage="percentage" :color="handleColor"></ed-progress>
    <ed-progress :percentage="percentage" :color="handleColorFunc"></ed-progress>
    <ed-progress :percentage="percentage" is-label></ed-progress>
    <ed-progress :percentage="percentage" is-label striped></ed-progress>
    <ed-progress :percentage="percentage" is-label striped striped-animated></ed-progress>
  </div>
</template>

<script>
import EdProgress from '@package/Progress/src';

export default {
  name: 'Progress',
  components: { EdProgress },
  data: function() {
    return {
      percentage: 0,
      timeout: null,
      handleColor: [
        { percentage: 75, color: '' },
        { percentage: 100, color: '#67c23a' },
        { percentage: 50, color: '#e6a23c' },
        { percentage: 25, color: '#f56c6c' },
      ],
    };
  },
  methods: {
    handleColorFunc (percentage) {
      if (percentage <= 25) return '#f56c6c';
      if (percentage <= 50) return '#e6a23c';
      if (percentage <= 75) return '';
      if (percentage <= 100) return '#67c23a';
    },
  },
  mounted () {
    if (this.timeout) clearInterval(this.timeout);
    this.timeout = setInterval(() => {
      this.percentage += 5;
      if (this.percentage > 100) {
        this.percentage = 0;
      }
    }, 1000);
  },
};
</script>
<style>
.ed-progress + .ed-progress {
  margin-top: 10px;
}
</style>