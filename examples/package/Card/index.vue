<template>
  <div>
    <h3>Card 卡片</h3>
    <ed-card>Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas. Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut. Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in.</ed-card>
    <ed-card title="Card Title">
      <template slot="header">Card Header</template>
      Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas. Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut. Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in.
    </ed-card>
  </div>
</template>

<script>

import EdCard from '@package/Card';

export default {
  name: 'Card',
  components: { EdCard },
};
</script>