<template>
  <span class="ed-breadcrumb-item">
    <span class="ed-breadcrumb-item__label" :class="{'is-like': to}" @click="handleItemClick">
      <slot>{{ label }}</slot>
    </span>
    <i v-if="_separatorClass" class="ed-breadcrumb-item__separator" :class="_separator"></i>
    <span v-else class="ed-breadcrumb-item__separator">{{ _separator }}</span>
  </span>
</template>

<script>
import { throwError } from '@utils/error';

export default {
  name: 'EdBreadcrumbItem',
  inject: ['separator', 'separatorClass'],
  props: {
    to: String,
    label: String,
    replace: Boolean,
  },
  computed: {
    _separator () {
      return this._separatorClass || (this['separator'] && this['separator']()) || '/';
    },
    _separatorClass () {
      return (this['separatorClass'] && this['separatorClass']());
    },
  },
  methods: {
    handleItemClick (event) {
      this.$emit('click', event);
      if (this.to) {
        if (!this.$route) throwError('Breadcrumb', '缺少 Vue.$router');
        return this.$router[this.replace !== false ? 'replace' : 'push']({ path: this.to });
      }
    },
  },
};
</script>
