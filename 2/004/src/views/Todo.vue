<template>
  <div class="todo">
    <h2>Todo</h2>
    <div class="todo__list-container">
      <!--1/ 6. The simplest version of TodoList takes no slots -->
      <TodoList class="todo__list" />

      <TodoList class="todo__list">
        <!--5/ 7. However you can define your own header-->
        <template #header>
          <h3>
            Custom header
          </h3>
        </template>
        <!--5/ 8. Or provide your own TodoList item and bind data by slotProps -->
        <template v-slot:item="{ todoItem }">
          <CustomTodoListItem
            :item="todoItem"
          />
        </template>
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
