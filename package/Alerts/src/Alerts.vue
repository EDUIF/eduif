<template>
  <div class="ed-alerts">
    <div class="ed-alerts__content">
      <div class="ed-alerts__title" v-if="title || $slots.title">
        <slot name="title"><span>{{ title }}</span></slot>
      </div>
      <div class="ed-alerts__description" v-if="description || $slots.default">
        <slot>{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdAlerts',
  props: {
    title: String,
    description: String,
  },
};
</script>