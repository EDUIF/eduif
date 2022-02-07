<template>
  <div class="ed-alert" :class="[`ed-alert--${this.type}`,{
    'is-plain': this.plain,
    'is-icon': this.showIcon && this.iconsName,
    'is-title': this.title || this.$slots.title,
  }]" :style="{zIndex: _zIndex}">
    <i class="ed-alert__icon" v-if="showIcon && iconsName" :class="iconsName"></i>
    <div class="ed-alert__content">
      <div class="ed-alert__title" v-if="title || $slots.title">
        <slot name="title"><span>{{ title }}</span></slot>
      </div>
      <div class="ed-alert__description" v-if="description || $slots.default">
        <slot>{{ description }}</slot>
      </div>
    </div>
    <i class="ed-alert__close ed-icon-x" v-if="showClose" @click="handleClose"></i>
  </div>
</template>

<script>
const TYPE_ICON = {
  'success': 'ed-icon-check-circle',
  'warning': 'ed-icon-error-circle',
  'danger': 'ed-icon-x-circle',
  'info': 'ed-icon-help-circle',
};
export default {
  name: 'EdAlert',
  props: {
    title: String,
    plain: Boolean,
    zIndex: Number,
    iconName: String,
    showIcon: Boolean,
    showClose: Boolean,
    description: String,
    type: { type: String, default: 'default' },
  },
  computed: {
    iconsName () {
      return TYPE_ICON[this.type] || this.iconName;
    },
    _zIndex () {
      return this.zIndex;
    },
  },
  methods: {
    handleClose (event) {
      this.$emit('close', event);
      this.close();
    },
    close () {
      // 自我销毁
      this.$el.remove();
    },
  },
};
</script>
