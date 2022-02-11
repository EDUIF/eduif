<template>
  <div class="Package">
    Package
    <template v-for="(item,key) in packageRouter">
      <ed-button :key="`router-${key}`" @click="onPushRouter(item.path)">{{ item.path }}</ed-button>
    </template>
    <router-view key="package" />
  </div>
</template>

<script>
import { packageRouter } from '../../router/routes';

export default {
  name: 'Package',
  computed: {
    packageRouter () {
      return packageRouter;
    },
  },
  methods: {
    onPushRouter (path) {
      this.$router.push({ path: '/package/' + path });
    },
  },
};
</script>
