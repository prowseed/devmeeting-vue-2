<template>
  <form @submit.prevent="$emit('submit', $event)">
    <slot />
    <input
      type="submit"
      value="Submit"
    >
  </form>
</template>
