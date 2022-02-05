<template>
  <button class="ed-button" :class="classes" :disabled="disabled">
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>

export default {
  name: 'EdButton',
  inject: { formItem: { default: '' } },
  props: {
    type: { type: String, default: 'default' },
    size: String,
    plain: Boolean,
    round: Boolean,
    disabled: Boolean,
  },
  computed: {
    _formItemSize () {
      return ((this.formItem && this.formItem()) || {}).size;
    },
    _size () {
      return this.size || this._formItemSize || this.$ELEMENT.size;
    },
    classes () {
      const classes = ['ed-button--' + this._size];
      if (this.type) classes.push('ed-button--' + this.type);
      classes.push({
        'is-round': this.round,
        'is-plain': this.plain,
        'is-disabled': this.disabled,
      });
      return classes;
    },
  },
};
</script>
