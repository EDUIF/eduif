<template>
  <i class="ed-icon" :class="name ? `ed-icon-${name}` : ''"></i>
</template>

<script>
export default {
  name: 'EdIcon',
  props: {
    props: {
      name: { type: String, required: true },
    },
  },
};
</script>
