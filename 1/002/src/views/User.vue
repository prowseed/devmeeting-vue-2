<template>
  <div>
    <!--2 5. The $route is a way to get informations from router  -->
    <span>{{ $route.params }}</span>
    <!--2 8. And call it -->
    <router-link :to="{ name: 'userPosts' }">Posts</router-link>
    <!--2 7. Add nested router-view -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'user',
};
</script>
