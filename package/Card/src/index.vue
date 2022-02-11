<template>
  <div class="ed-card">
    <div class="ed-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="ed-card__body">
      <slot></slot>
    </div>
    <div class="ed-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdCard',
};
</script>
