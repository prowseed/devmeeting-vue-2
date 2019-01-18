<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>

<style lang="scss">
.home {
  // 2 2. You can use absolute paths in sass/scss, but remember about tilde as a prefix
  background-image: url('~@/assets/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 192px;
}
</style>
