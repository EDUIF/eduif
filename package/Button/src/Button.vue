<template>
  <button class="ed-button" :type="nativeType" :class="classes" :disabled="disabled" @click="handleClick">
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>

export default {
  name: 'EdButton',
  inject: { formItem: { default: '' } },
  props: {
    size: String,
    plain: Boolean,
    round: Boolean,
    disabled: Boolean,
    type: { type: String, default: 'default' },
    nativeType: { type: String, default: 'button' },
  },
  computed: {
    _formItemSize () {
      return ((this.formItem && this.formItem()) || {}).size;
    },
    _size () {
      return this.size || this._formItemSize || this.$EDMENT.size;
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
  methods: {
    handleClick (event) {
      this.$emit('click', event);
    },
  },
};
</script>
