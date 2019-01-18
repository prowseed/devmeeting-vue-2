<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  // 3 1. Name is not required, but it's usually good to add it
  // it sometimes helps with debuging process
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
