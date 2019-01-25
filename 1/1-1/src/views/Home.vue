<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  //4 3. Name is not required, but it's usually good to add it
  //info https://vuejs.org/v2/api/#name
  name: 'home',
};
</script>

<style lang="scss">
.home {
  //2 2. You can use absolute paths in styles, but remember about tilde as a prefix
  background-image: url('~@/assets/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 192px;
}
</style>
