<template>
  <!--10/ 4. Our AppForm is simple native form which emits submit event -->
  <form @submit.prevent="$emit('submit', $event)">
    <!--2/ 6. And has slot to allow passing DOM elements from parent to child component -->
    <slot />
    <!--4/ 5. Has simple submit input -->
    <input
      type="submit"
      value="Submit"
    >
  </form>
</template>
