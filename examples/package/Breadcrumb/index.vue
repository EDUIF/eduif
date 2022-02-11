<template>
  <div>
    <h3>Breadcrumb</h3>
    <ed-breadcrumb separator-class="ed-icon-arrow-from-left">
      <ed-breadcrumb-item to="/" replace>Home</ed-breadcrumb-item>
      <ed-breadcrumb-item>EdBreadcrumbItem 2</ed-breadcrumb-item>
    </ed-breadcrumb>
  </div>
</template>

<script>
import EdBreadcrumb from '@package/Breadcrumb';
import EdBreadcrumbItem from '@package/BreadcrumbItem';

export default {
  name: 'Breadcrumb',
  components: { EdBreadcrumbItem, EdBreadcrumb },
};
</script>