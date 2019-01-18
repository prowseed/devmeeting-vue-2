<template>
  <div id="app">
    <div id="nav">
      <!--2 1. You can navigate by path... -->
      <router-link to="/">Home</router-link> |
      <!--2 2. ...or by name, which is more absolute way -->
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
