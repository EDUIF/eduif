<template>
  <div class="ed-input" :class="{
    'is-suffix': prefixIcon,
    'is-prefix': suffixIcon,
    'is-disabled': disabled,
    'is-group--append': $slots.append,
    'is-group--prepend': $slots.prepend,
    'is-group': $slots.prepend || $slots.append,
  }" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="ed-input__prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="ed-input__inner" :class="{'is-focus': hasFocus}" @click.stop="focus">
      <div class="ed-input__prefix" v-if="prefixIcon">
        <i class="ed-input__prefix--icon" :class="prefixIcon" />
      </div>
      <input
        ref="EdInput"
        v-bind="$attrs"
        autocomplete="off"
        @blur="handleBlur"
        @input="handleInput"
        @focus="handleFocus"
        @change="handleChange"
        :type="showPassword && passwordVisible  ? 'text' : type"
      />
      <div class="ed-input__suffix" v-if="suffixIcon || showClearable || showPassword">
        <i class="ed-input__icon ed-icon-x-circle" v-if="showClearable" style="cursor: pointer" @click="handleClearableClick" />
        <i class="ed-input__icon" v-if="suffixIcon" :class="suffixIcon" />
        <i class="ed-input__icon" v-if="showPassword" :class="'ed-icon-' + (passwordVisible ? 'hide' : 'show')" style="cursor: pointer" @click="handlePasswordVisible" />
      </div>
    </div>
    <div class="ed-input__append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdInput',
  inheritAttrs: false,
  model: { prop: 'value', event: 'input' },
  props: {
    value: {},
    type: { type: String, default: 'text' },
    prefixIcon: String,
    suffixIcon: String,
    disabled: Boolean,
    readonly: Boolean,
    clearable: Boolean,
    showPassword: Boolean,
  },
  data: function() {
    return {
      hover: false,
      hasFocus: false,
      passwordVisible: false,
    };
  },
  watch: {
    value () {
      this.$nextTick(this.setInputValue);
    },
  },
  computed: {
    getInput () {
      return this.$refs.EdInput;
    },
    inputValue () {
      return this.value ? String(this.value) : '';
    },
    showClearable () {
      return this.clearable && this.hover && this.inputValue;
    },
  },
  methods: {
    focus () {
      this.getInput.focus();
    },
    blur () {
      this.getInput.blur();
    },
    handleFocus (event) {
      this.hasFocus = true;
      this.$emit('focus', event);
    },
    handleBlur (event) {
      this.hasFocus = false;
      this.$emit('blur', event);
    },
    handleChange (event) {
      this.$emit('change', event.target.value);
    },
    setInputValue () {
      const input = this.getInput;
      if (!input || input.value === this.inputValue) return;
      input.value = this.inputValue;
    },
    handleInput (event) {
      if (event.target.value === this.inputValue) return false;
      this.$emit('input', event.target.value);
      this.$nextTick(this.setInputValue);
    },
    handleClearableClick () {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible;
      this.$nextTick(() => {
        this.focus();
      });
    },
  },
  mounted () {
    this.setInputValue();
  },
};
</script>
