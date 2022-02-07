<template>
  <div class="ed-input">
    <input :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'EdInput',
  props: {
    placeholder: { type: String },
  },
};
</script>
