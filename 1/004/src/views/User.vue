<template>
  <div class="user">{{ $route.params }}</div>
</template>

<script>
export default {
  name: 'user',
  // 1 1. We Have three different types of component guards, basically:
  // 5 2. Guard which runs only before the route is enter
  // (you open website or you were on completely different path)
  beforeRouteEnter(to, from, next) {
    console.log('Hello for the first time!!', to.params);
    // 4 3. In such case
    // - from is "/" path
    // - to is our destination
    // - this is undefined, because we are not in our context YET
    console.log(from, to, this);
    // 5 4. if you want to get to the context, you should use callback in next func
    // the route won't be entered, if you don't use next
    next((vm) => {
      console.log(vm);
    });
  },
  // 3 5. When you stay in the same route, but you update some params or children routes
  // this function is fired up.
  beforeRouteUpdate(to, from, next) {
    // 2 6. BTW this context is now your component, because you don't come from nowhere
    console.log('Why are you here again??', from, to, this);
    // 2 7. And because of that, next does not get the callback now
    next();
  },
  // 3 8. And this function is fired up when you leave route
  beforeRouteLeave(to, from, next) {
    console.log('Why do you leave??', from, to, this);
    next();
  },
};
</script>
