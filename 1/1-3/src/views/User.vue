<template>
  <div>
    <span>{{ $route.params }}</span>
    <router-link :to="{ name: 'userPosts' }">Posts</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'user',
};
</script>
