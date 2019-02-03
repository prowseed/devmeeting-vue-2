<template>
  <div id="app">
    <!--3/ 7. ...it's good moment to use v-bind -->
    <Rate
      v-bind="rate"
    />
  </div>
</template>

<script>
import Rate from '@/components/Rate.vue';

export default {
  components: {
    Rate,
  },
  data: () => ({
    //4/ 6. If you want to bind each object property,
    rate: {
      rateValue: 0,
      color: 'green',
    },
  }),
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
