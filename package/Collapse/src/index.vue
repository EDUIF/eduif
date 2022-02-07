<template>
  <div class="ed-collapse" :class="{'is-card': this.card}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'EdCollapse',
  model: { prop: 'value', event: 'change' },
  props: {
    card: Boolean,
    accordion: Boolean,
    value: { type: [Array, String, Number], default: () => [] },
  },
  data: function() {
    return {
      activeNames: [].concat(this.value),
    };
  },
  watch: {
    value (value) {
      this.activeNames = [].concat(value);
    },
  },
  provide () {
    const self = this;
    return {
      activeNames: () => self.activeNames,
    };
  },
  created () {
    this.$on('item-click', this.handleItemClick);
  },
  methods: {
    setActiveName (activeNames) {
      const value = this.accordion ? activeNames[0] : activeNames;
      this.$emit('change', value);
    },
    handleItemClick (name) {
      const index = this.activeNames.indexOf(name);
      if (index >= 0) {
        this.activeNames.splice(index, 1);
      } else {
        if (this.accordion) this.activeNames = [];
        this.activeNames.push(name);
      }
      this.setActiveName(this.activeNames);
    },
  },
};
</script>
