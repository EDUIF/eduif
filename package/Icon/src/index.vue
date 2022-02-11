<template>
  <i :class="name ? `ed-icon-${name}` : ''"></i>
</template>

<script>
export default {
  name: 'EdIcon',
  props: {
    name: { type: String, required: true },
  },
};
</script>
