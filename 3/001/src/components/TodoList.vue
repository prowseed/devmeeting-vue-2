<template>
  <div class="todo-list">
    <slot name="header">
      <h2>Default Header</h2>
    </slot>

    <ul>
      <slot
        v-for="todoItem in todoItems"
        name="item"
        :todo-item="todoItem"
      >
        <li :key="todoItem.id">
          {{ todoItem.text }}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
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
