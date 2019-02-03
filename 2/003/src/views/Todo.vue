<template>
  <div class="todo">
    <h2>Todo</h2>
    <div class="todo__list-container">
      <!--1/ 13. The simplest version of TodoList takes no slots -->
      <TodoList class="todo__list" />

      <TodoList class="todo__list">
        <!--3/ 14. However you can define your own header-->
        <h3 slot="header">
          Custom header
        </h3>
        <!--5/ 15. Or provide your own TodoList item and bind item data by slot-scope attribute -->
        <CustomTodoListItem
          slot="item"
          slot-scope="{ item }"
          :item="item"
        />
      </TodoList>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import CustomTodoListItem from '@/components/CustomTodoListItem.vue';

export default {
  name: 'Todo',
  components: {
    TodoList,
    CustomTodoListItem,
  },
};
</script>
<style lang="scss" scoped>
.todo {
  &__list {
    display: inline-block;
    margin: 5px;
  }
}
</style>
