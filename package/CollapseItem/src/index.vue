<template>
  <div class="ed-collapse-item" :class="[{'is-active': this.isActive}]">
    <div class="ed-collapse__title" @click="handleClick">
      <div class="ed-collapse__title--text">
        <slot name="title">{{ label }}</slot>
      </div>
      <i class="ed-collapse__title--icon ed-icon-chevron-down"></i>
    </div>
    <ed-collapse-transition>
      <div class="ed-collapse__body" v-show="isActive">
        <div class="ed-collapse__content">
          <slot></slot>
        </div>
      </div>
    </ed-collapse-transition>
  </div>
</template>

<script>
import emitter from '@utils/emitter';
import EdCollapseTransition from '@transition/collapse';

export default {
  name: 'EdCollapseItem',
  components: { EdCollapseTransition },
  inject: ['activeNames'],
  mixins: [emitter],
  props: {
    label: String,
    name: { type: [String, Number], required: true },
  },
  computed: {
    isActive () {
      return (this.activeNames && this.activeNames()).indexOf(this.name) >= 0;
    },
  },
  methods: {
    transitionComplete (dom) {
      console.log(dom);
    },
    handleClick () {
      this.dispatch('EdCollapse', 'item-click', this.name);
    },
  },
};
</script>
