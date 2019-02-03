<template>
  <!--7/ 4. Our AppForm is simple native form which emits submit event -->
  <form @submit.prevent="$emit('submit', $event)">
    <!--2/ 6. And has slot to allow passing DOM elements from parent to child component -->
    <!-- In AppForm we have no control over slot content. Slot content is part of parent scope -->
    <slot />
    <!--8 5. Has simple submit input -->
    <input
      type="submit"
      value="Submit"
    >
  </form>
</template>
