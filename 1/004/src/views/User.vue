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
  // 9 1. Runs only before the route is enter
  beforeRouteEnter(to, from, next) {
    console.log('Hello for the first time!!', to.params);
    // 4 2. In such case this is undefined, because we are not in our context YET
    console.log(from, to, this);
    // 5 3. if you want to get to the context, you should use callback in next func
    next((vm) => {
      console.log(vm);
    });
  },
  // 3 4. When you stay in the same route, but you update some params or children routes
  beforeRouteUpdate(to, from, next) {
    // 2 5. BTW this context is now your component, because you don't come from nowhere
    console.log('Why are you here again??', from, to, this);
    // 2 6. And because of that, next does not get the callback
    next();
  },
  // 3 7. Runs when you leave route
  beforeRouteLeave(to, from, next) {
    console.log('Why do you leave??', from, to, this);
    next();
  },
};
</script>
