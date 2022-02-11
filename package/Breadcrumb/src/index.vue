<template>
  <div class="ed-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'EdBreadcrumb',
  provide () {
    const self = this;
    return {
      separator: () => self.separator,
      separatorClass: () => self.separatorClass,
    };
  },
  props: {
    separator: String,
    separatorClass: String,
  },
};
</script>