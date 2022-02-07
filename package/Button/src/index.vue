<template>
  <button class="ed-button" :class="['ed-button--' + this.type, 'ed-button--' + this._size,{
    'is-round': this.round,
    'is-plain': this.plain,
    'is-disabled': this.disabled,
    }]" :type="nativeType" :disabled="disabled" @click="handleClick">
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
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event);
    },
  },
};
</script>
