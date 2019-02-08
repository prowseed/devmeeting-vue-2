<!--0/ 7. We will create component providing todo list -->
<template>
  <div class="todo-list">
    <!--5/ 9. We will create two slots (header and item). -->
    <!-- "name" is a way to create more than one slot inside component -->
    <slot name="header">
      <!--1/ 10. You can also define default value, when slot is not provided. -->
      <h2>Default Header</h2>
    </slot>

    <ul>
      <!--5/ 11. Slot content has parent scope, but you can pass some data by v-bind -->
      <slot
        v-for="todoItem in todoItems"
        name="item"
        :todo-item="todoItem"
      >
        <!--3/ 12. Some default content -->
        <li :key="todoItem.id">
          {{ todoItem.text }}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
//16/ 8. Component will have array defined in its own state
export default {
  data: () => ({
    todoItems: [
      {
        id: 0,
        text: 'Eat pizza',
        createdAt: '2019-02-02T12:43:35.404Z',
      },
      {
        id: 1,
        text: 'Eat burger',
        createdAt: '2019-02-02T12:43:35.404Z',
      },
    ],
  }),
};
</script>
