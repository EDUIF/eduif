<template>
  <div class="ed-progress" :class="[`ed-progress--${type}`, {
    'is-label': isLabel,
    'is-striped': striped,
    'is-striped--animated': stripedAnimated,
  }]">
    <div class="ed-progress__inner" v-if="type === 'line'" :style="{backgroundColor: getColor, width: (percentage || 0) + '%'}">
      <div class="ed-progress__inner--text">{{ getValue }}</div>
    </div>
    <div class="" v-else>{{ getValue }}</div>
  </div>
</template>

<script>
import { getType, hasType } from '@utils/other';


export default {
  name: 'EdProgress',
  props: {
    isLabel: Boolean,
    striped: Boolean,
    percentage: Number,
    stripedAnimated: Boolean,
    type: { type: String, default: 'line' },
    defaultColor: { type: String, default: '#0d6efd' },
    color: { type: [String, Array, Function], default: '' },
  },
  computed: {
    colorArrayHandle () {
      if (hasType(this.color, 'array')) return this.color.reduce(function(value, item) {
        value[item.percentage] = item.color;
        return value;
      }, {});
      return {};
    },
    getColor () {
      let color = this.color;
      const types = getType(this.color);
      if ('function' === types) {
        color = this.color(this.percentage);
      } else if ('array' === types) {
        color = this.handleColorFunc();
      }
      return color || this.defaultColor;
    },
    getValue () {
      return this.isLabel ? this.percentage + '%' : '';
    },
  },
  methods: {
    handleColorFunc () {
      let color = '';
      const formList = Object.keys(this.colorArrayHandle).map(v => parseInt(v)).sort((a, b) => b - a);
      for (const percentage of formList) {
        if (this.percentage <= percentage) {
          color = this.colorArrayHandle[percentage];
        }
      }
      return color;
    },
  },
};
</script>
