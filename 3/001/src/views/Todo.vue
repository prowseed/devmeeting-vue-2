<template>
  <div class="todo">
    <h2>Todo</h2>
    <div class="todo__list-container">
      <TodoList class="todo__list" />

      <TodoList class="todo__list">
        <template #header>
          <h3>
            Custom header
          </h3>
        </template>
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
