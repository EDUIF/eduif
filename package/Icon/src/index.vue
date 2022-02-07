<template>
  <i :class="name ? `ed-${name}` : ''"></i>
</template>

<script>
export default {
  name: 'EdIcon',
  props: {
    name: { type: String, required: true },
  },
};
</script>
