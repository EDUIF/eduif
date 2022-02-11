<template>
  <div>
    <h3>Breadcrumb</h3>
    <ed-breadcrumb>
      <ed-breadcrumb-item to="/" replace> <ed-icon name="home" style="margin-right: 4px;"/>Home</ed-breadcrumb-item>
      <ed-breadcrumb-item>EdBreadcrumbItem 2</ed-breadcrumb-item>
    </ed-breadcrumb>
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