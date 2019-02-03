<!--12/ 7. We will create component providing todo list -->
<template>
  <div class="todo-list">
    <!--4/ 9. We will create two slots (header and item).
    "name" is a way to create more than one slot inside component -->
    <slot name="header">
      <!--1/ 10. You can also define default value, when slot is not provided. -->
      <h2>Default Header</h2>
    </slot>

    <ul>
      <!--4/ 11. Slot content has parent scope, but you can pass data by v-bind -->
      <slot
        v-for="todoItem in todoItems"
        name="item"
        :item="todoItem"
      >
        <!--3/ 12. Item slot has also some default content -->
        <li :key="todoItem.id">
          {{ todoItem.text }}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
//15/ 8. Component will have array defined in own state
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
