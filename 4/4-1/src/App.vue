<template>
  <div
    id="app"
    class="app"
  >
    <TheHeader />
    <main class="app__content">
      <RouterView />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
.app {
  height: 100vh;
  text-align: center;

  &__content {
    height: calc(100% - 56px);
    overflow: auto;
    background: #343a40cc;
  }
}
</style>
