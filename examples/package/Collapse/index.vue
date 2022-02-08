<template>
  <div>
    <h3>Collapse 折叠面板</h3>
    <div style="display: flex; width: 100%; margin-bottom: 20px;">
      <div style="margin-right:10px; width: 100%; padding: 20px;  background-color: #fff;">
        <h3>默认</h3>
        <ed-collapse>
          <ed-collapse-item label="Title A" name="A">collapse A</ed-collapse-item>
          <ed-collapse-item label="Title B" name="B">collapse B</ed-collapse-item>
          <ed-collapse-item label="Title C" name="C">collapse C</ed-collapse-item>
          <ed-collapse-item label="Title D" name="D">collapse D</ed-collapse-item>
        </ed-collapse>
      </div>
      <div style="width: 100%; padding: 20px; background-color: #fff;">
        <h3>手风琴</h3>
        <ed-collapse accordion>
          <ed-collapse-item label="Title A" name="A">collapse A</ed-collapse-item>
          <ed-collapse-item label="Title B" name="B">collapse B</ed-collapse-item>
          <ed-collapse-item label="Title C" name="C">collapse C</ed-collapse-item>
          <ed-collapse-item label="Title D" name="D">collapse D</ed-collapse-item>
        </ed-collapse>
      </div>
    </div>
    <div style="display: flex; width: 100%;">
      <div style="margin-right:10px; width: 100%; padding: 20px; background-color: #fff;">
        <h3>卡片</h3>
        <ed-collapse card>
          <ed-collapse-item label="Title A" name="A">collapse A</ed-collapse-item>
          <ed-collapse-item label="Title B" name="B">collapse B</ed-collapse-item>
          <ed-collapse-item label="Title C" name="C">collapse C</ed-collapse-item>
          <ed-collapse-item label="Title D" name="D">collapse D</ed-collapse-item>
        </ed-collapse>
      </div>
      <div style="width: 100%; padding: 20px; background-color: #fff;">
        <h3>卡片 手风琴</h3>
        <ed-collapse card accordion>
          <ed-collapse-item label="Title A" name="A">
            <ed-collapse accordion>
              <ed-collapse-item label="Title A" name="A">collapse A</ed-collapse-item>
              <ed-collapse-item label="Title B" name="B">collapse B</ed-collapse-item>
              <ed-collapse-item label="Title C" name="C">collapse C</ed-collapse-item>
              <ed-collapse-item label="Title D" name="D">collapse D</ed-collapse-item>
            </ed-collapse>
          </ed-collapse-item>
          <ed-collapse-item label="Title B" name="B">collapse B</ed-collapse-item>
          <ed-collapse-item label="Title C" name="C">collapse C</ed-collapse-item>
          <ed-collapse-item label="Title D" name="D">collapse D</ed-collapse-item>
        </ed-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import EdCollapseItem from '@package/CollapseItem/src';
import EdCollapse from '@package/Collapse/src';

export default {
  name: 'Collapse',
  components: { EdCollapse, EdCollapseItem },
};
</script>
<style>
.ed-collapse + .ed-collapse {
  margin-top: 10px;
}
</style>